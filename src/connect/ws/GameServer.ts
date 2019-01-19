'use strict';
import {Config} from '../Config';
import { UserManager } from '../../user/UserManager';
import {CSProto} from '../../protos/TinyGameCSProto.xml';
import {MsgBuilder} from '../../protos/csProtoBuilder';
import {csproto} from '../../protos/KConnectProto.xml';
import { MsgDispatcher } from '../../msg/MsgDispatcher';
// import { CarServer } from '../../game/CarServer';
// import { LoginManger } from '../../msg/LoginManger';
import { Handler } from '../../utils/Handler';
const WebSocket = require("ws");

export class GameServer {
    private decodeBuffer: Uint8Array = new Uint8Array(1024 * 20);
    public start(): void {
        // CarServer.getInstance().start();
        // LoginManger.getInstance().start();
        const WebSocketServer = WebSocket.Server;
        const wss = new WebSocketServer({
            port: (Config.gameServer.port + 20000)
        });
        const um: UserManager = UserManager.getInstance();
        const md: MsgDispatcher = MsgDispatcher.getInstance();
        wss.on('connection', function (ws) {
            let runIntervalId = null;
            let key: string = "";
            console.log(`[SERVER] connection()`);
            ws.on('open', function () {
                console.log(`[CLIENT] open()`);
            });
            ws.on('message', function (message) {
                let builder = new MsgBuilder.csProtoBuilder();
                let buffer = new Uint8Array(message);
                let msg = builder.decode(buffer);
                console.log(`[SERVER] Received:` + JSON.stringify(msg));
                if (msg instanceof csproto.KConnectProto.WX_CMD_NEW_UNIAUTH_CS) {
                    key = msg.IdentityToken;
                    console.log("222:" + key);
                    um.userConnect(key, ws, new Handler(this, (ret) => {
                        let dest = new csproto.KConnectProto.WX_CMD_NEW_UNIAUTH_SC;
                        dest.RetCode = 0;
                        dest.RetCodeDesc = "";
                        dest.SessionId = "111";
                        ws.send(builder.encode(dest));
                        console.log("ret:" + ret);
                    }));
                } else {
                    md.onRecviedMsg(msg, key, ws);
                }
            })
            let leav = () => {
                if (runIntervalId)
                    clearInterval(runIntervalId);
                if (key.length > 0) 
                    um.userDisConnect(key);
            };
            ws.on('error', function (error) {
                console.log(`[CLIENT] error:${error}`);
                leav();
            });
            ws.on('close', function (code, reason) {
                console.log(`[CLIENT] close(), code:${code}, reason:${reason}`);
                leav();
            });
        });

        console.log("start game server on port:" + (Config.gameServer.port + 20000));
    }
}

// new GameServer().start();

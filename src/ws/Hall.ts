'use strict';

import {CSProto} from '../protos/TinyGameCSProto.xml';
import {MsgBuilder} from '../protos/csProtoBuilder';
import {csproto} from '../protos/KConnectProto.xml';
// import {WebSocket} from "ws";
const WebSocket = require("ws");

module gameserver {
    const port = 39800;
    // var ws = import("ws");
    export class Server {
		private static decodeBuffer: Uint8Array = new Uint8Array(1024 * 20);
        public static run(): void {
            const WebSocketServer = WebSocket.Server;
            const wss = new WebSocketServer({
                port: port
            });

            let getAuthMsg = () => {
                let msg = new csproto.KConnectProto.WX_CMD_NEW_UNIAUTH_SC;
                msg.RetCode = 0;
                msg.RetCodeDesc = "";
                msg.SessionId = "dgdggd";
                return msg;
            }

            let getWarpMsg = () => {
                let msg = new CSProto.CMD_WARP_SC();
                msg.wMapID = CSProto.MAP_TEMPLATE_ID_HALL;
                msg.llServerUnixtimeMs = new Date().getTime();
                return msg;
            };

            let getRoleMiscMsg = () => {
                let msg = new CSProto.CMD_ROLE_MISC_SC();
                let base = msg.stData.stBase;
                base.szName = "tangs";
                base.bSex = CSProto.SEX_FEMALE;
                base.szSelfDefPhoto = "https://avatars3.githubusercontent.com/u/3196414?s=400&u=8ca426b011a6957a0f97c1b1be6243abbdce093c&v=4";
                let att = base.astPlayerAttr;
                let p = new CSProto.PROPERTY();
                p.bPropType = CSProto.LIFEATT_GOLD;
                p.llPropValue = 123456789;
                att.push(p)
                return msg;
            };

            wss.on('connection', function (ws) {
                console.log(`[SERVER] connection()`);
                ws.on('open', function () {
                    console.log(`[CLIENT] open()`);
                });
                ws.on('message', function (message) {
                    console.log(`[SERVER] Received: ${message}`);
                    let builder = new MsgBuilder.csProtoBuilder();
                    // let 
                    let buffer = new Uint8Array(message);
                    let msg = builder.decode(buffer);
                    
                    console.log(`[SERVER] Received: ${msg}`);
                    if (msg instanceof csproto.KConnectProto.WX_CMD_NEW_UNIAUTH_CS) {
                        let msg = getAuthMsg();
                        ws.send(builder.encode(msg));
                    } else if (msg instanceof CSProto.CMD_ALOGIN_CS) {
                        let msg = new CSProto.CMD_ALOGIN_SC();
                        msg.bResult = 0;
                        ws.send(builder.encode(msg));
                        ws.send(builder.encode(getRoleMiscMsg()));
                        ws.send(builder.encode(getWarpMsg()));
                    } else if (msg instanceof CSProto.CMD_WARP_CS) {
                        let dest = new CSProto.CMD_WARP_SC();
                        dest.wMapID = msg.wMapID;
                        dest.llServerUnixtimeMs = new Date().getTime();
                        ws.send(builder.encode(dest));
                    } else if (msg instanceof CSProto.CMD_PING_CS) {
                        let msg = new CSProto.CMD_PING_SC();
                        msg.dwClientTick = new Date().getTime();
                        ws.send(builder.encode(msg));
                    }
                })
                ws.on('error', function (error) {
                    console.log(`[CLIENT] error:${error}`);
                });
                ws.on('close', function (code, reason) {
                    console.log(`[CLIENT] close(), code:${code}, reason:${reason}`);
                });
            });

            console.log("start game server on port:" + port);
        }
    }
}

gameserver.Server.run();

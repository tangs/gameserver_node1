import { UserManager } from '../user/UserManager';
import {CSProto} from '../protos/TinyGameCSProto.xml';
import {MsgBuilder} from '../protos/csProtoBuilder';
import {csproto} from '../protos/KConnectProto.xml';
import { csprotos } from '../protos/csProtoDecoder';
import { Handler } from '../utils/Handler';

class Info {
    public msgName: string;
    public handler: Handler;

    constructor(msgName: string, handler: Handler) {
        this.msgName = msgName;
        this.handler = handler;
    }

    public equals(info: Info): boolean {
        return info.msgName == this.msgName 
                && info.handler.caller == this.handler.caller
                && info.handler.method == this.handler.method;
    }
}

export class MsgDispatcher {
    private static instance: MsgDispatcher = null;

    private infos: Array<Info> = [];

    public static getInstance(): MsgDispatcher {
        if (MsgDispatcher.instance == null) {
            MsgDispatcher.instance = new MsgDispatcher();
        }
        return MsgDispatcher.instance;
    }

    public onRecviedMsg(msg: csprotos.message, userKey: string, ws: any) {
        const name = msg.messageName();
        const infos = this.infos;
        let len = infos.length;
        for (let i = 0; i < len; ++i) {
            const info = infos[i];
            if (info.msgName == name) {
                info.handler.runWith([msg, userKey, ws]);
            }
        }
    }

    public regeisterMsg(msgName: string, handler: Handler) {
        this.infos.push(new Info(msgName, handler));
    }

    public unregeisterMsg(msgName: string, handler: Handler) {
        const dest = new Info(msgName, handler);
        const infos = this.infos;
        let len = infos.length;
        for (let i = 0; i < len; ++i) {
            const info = infos[i];
            if (info.equals(dest)) {
                infos.splice(i, 1);
                --len;
                --i;
            }
        }
    }

    public unregeisterAll(caller: any) {
        const infos = this.infos;
        let len = infos.length;
        for (let i = 0; i < len; ++i) {
            const info = infos[i];
            if (info.handler.caller == caller) {
                infos.splice(i, 1);
                --len;
                --i;
            }
        }
    }
}

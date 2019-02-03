import { MsgDispatcher } from "./MsgDispatcher";
import { Handler } from "../utils/Handler";
import { csprotos } from "../protos/csProtoDecoder";
import { UserManager } from "../user/UserManager";
import { MyMsgBuilder } from "./MyMsgBuilder";
import { CSProto } from "../protos/TinyGameCSProto.xml";
import { AppEventEmitter } from "../event/AppEventEmitter";
import { Events } from "../event/Events";

export class LoginManger {
    private static instance: LoginManger = null;

    private md: MsgDispatcher= MsgDispatcher.getInstance();
    private um: UserManager = UserManager.getInstance();
    private mb: MyMsgBuilder = MyMsgBuilder.getInstance();

    public static getInstance(): LoginManger {
        if (LoginManger.instance == null) {
            LoginManger.instance = new LoginManger();
        }
        return LoginManger.instance;
    }

    private getWarpMsg(mapId: number = CSProto.MAP_TEMPLATE_ID_HALL): csprotos.message {
        let msg = new CSProto.CMD_WARP_SC();
        msg.wMapID = mapId;
        msg.llServerUnixtimeMs = new Date().getTime();
        return msg;
    };

    private getRoleMiscMsg(key: string): csprotos.message {
        const info = this.um.getUserInfo(key);
        const msg = new CSProto.CMD_ROLE_MISC_SC();
        const base = msg.stData.stBase;
        base.szName = info.name;
        base.bSex = info.sex;
        base.szSelfDefPhoto = info.avatar;
        const att = base.astPlayerAttr;
        const p = new CSProto.PROPERTY();
        p.bPropType = CSProto.LIFEATT_GOLD;
        p.llPropValue = info.coin;
        att.push(p)
        const p1 = new CSProto.PROPERTY();
        p1.bPropType = CSProto.LIFEATT_VIPLEVEL;
        p1.llPropValue = info.lv;
        att.push(p1)
        return msg;
    };

    public start(): void {
        this.md.regeisterMsg("CMD_ALOGIN", new Handler(this, (msg1: csprotos.message, acc: string, ws: any) => {
            const msg = msg1 as CSProto.CMD_ALOGIN_CS;
            const dest = new CSProto.CMD_ALOGIN_SC();
            dest.bResult = 0;
            ws.send(this.mb.encode(dest));
            ws.send(this.mb.encode(this.getRoleMiscMsg(acc)));
            ws.send(this.mb.encode(this.getWarpMsg(msg.iMapTemplateID)));
            AppEventEmitter.getInstance().emit(Events.ENTER_ROOM, acc, msg.iMapTemplateID);
        }));

        this.md.regeisterMsg("CMD_PING", new Handler(this, (msg1: csprotos.message, acc: string, ws: any) => {
            const msg = new CSProto.CMD_PING_SC();
            msg.dwClientTick = new Date().getTime();
            ws.send(this.mb.encode(msg));
        }));

    }
}

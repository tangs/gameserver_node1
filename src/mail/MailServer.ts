import { MsgDispatcher } from "../msg/MsgDispatcher";
import { Handler } from "../utils/Handler";
import { csprotos } from "../protos/csProtoDecoder";
import { CSProto } from "../protos/TinyGameCSProto.xml";
import { MyMsgBuilder } from "../msg/MyMsgBuilder";
import { DbHelper } from "../db/DbHelper";
import { UserManager } from "../user/UserManager";

export class MailServer {
    private static instance: MailServer = null;

    public static getInstance(): MailServer {
        if (MailServer.instance == null) {
            MailServer.instance = new MailServer();
        }
        return MailServer.instance;
    }

    public start(): void {
        this.initMsg();
    }

    private initMsg(): void {
        const md = MsgDispatcher.getInstance();
        const mmb = MyMsgBuilder.getInstance();
        const um = UserManager.getInstance();
        const dm = DbHelper.getInstance();
        md.regeisterMsg("CMD_GET_MAILLIST", new Handler(this, (msg1: csprotos.message, acc: string, ws: any) => {            
            const info = um.getUserInfo(acc);
            if (info) {
                dm.getMailsByDid(info.userid, new Handler(this, (rows) => {
                    const len = rows ? rows.length : 0;
                    const msg = new CSProto.CMD_GET_MAILLIST_SC();
                    msg.bMailBoxType = CSProto.MAIL_BOX_RECV;
                    const pi = msg.stPagePara;
                    const list = msg.astMailList;
                    pi.dwTotalCount = len;
                    pi.wPageIndex = 1;
                    pi.wPageSize = len;
                    pi.wTotalPages = 1;
                    for (let i = 0; i < len; ++i) {
                        const row = rows[i];
                        const info = new CSProto.MailBaseInfo();
                        info.bMailType = CSProto.NORMAL_MAIL_TYPE;
                        info.bMailStat = 0;
                        info.dwMailID = row.id;
                        info.dwMailTime = row.stime / 1000;
                        info.szRoleName = row.sname;
                        info.szMailTitle = row.title;
                        info.szMailContent = row.content;
                        list.push(info);
                    }
                    if (info.isConneted) {
                        info.ws.send(mmb.encode(msg));
                    }
                }));
            }
            
            // const msg = new CSProto.CMD_GET_MAILLIST_SC();
            // msg.bMailBoxType = CSProto.MAIL_BOX_RECV;
            // const pi = msg.stPagePara;
            // const list = msg.astMailList;
            // pi.dwTotalCount = 10;
            // pi.wPageIndex = 1;
            // pi.wPageSize = 10;
            // pi.wTotalPages = 1;
            // for (let i = 0; i < pi.wPageSize; ++i) {
            //     const info = new CSProto.MailBaseInfo();
            //     info.bMailType = CSProto.NORMAL_MAIL_TYPE;
            //     info.bMailStat = 0;
            //     info.dwMailID = i;
            //     info.dwMailTime = new Date().getTime() / 1000;
            //     info.szRoleName = "系统";
            //     info.szMailTitle = "标题";
            //     info.szMailContent = "建设雄安新区是千年大计。新区首先就要新在规划、建设的理念上，要体现出前瞻性、引领性。”“要志在万里，努力打造世界一流的智慧港口、绿色港口，更好服务京津冀协同发展和共建‘一带一路’。”“建设北京城市副中心，是北京建城立都以来具有里程碑意义的一件大事，对新时代北京的发展是一个重大机遇。”考察中，总书记看得细、问得实、想得深，立足当前、着眼长远。总书记一路上那殷切期待、郑重嘱托、明确要求，为推动京津冀协同发展取得新的更大进展指明了努力方向，注入了信心和动力";
            //     list.push(info);
            // }
            // if (ws) {
            //     ws.send(mmb.encode(msg));
            // } 
        }));
        // this.md.regeisterMsg("CMD_PING", new Handler(this, (msg1: csprotos.message, acc: string, ws: any) => {
        //     let msg = new CSProto.CMD_PING_SC();
        //     msg.dwClientTick = new Date().getTime();
        //     ws.send(this.mb.encode(msg));
        // }));
    }
}
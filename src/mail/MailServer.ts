import { MsgDispatcher } from '../msg/MsgDispatcher';
import { Handler } from '../utils/Handler';
import { csprotos } from '../protos/csProtoDecoder';
import { CSProto } from '../protos/TinyGameCSProto.xml';
import { MyMsgBuilder } from '../msg/MyMsgBuilder';
import { DbHelper } from '../db/DbHelper';
import { UserManager } from '../user/UserManager';

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
        md.regeisterMsg('CMD_GET_MAILLIST', new Handler(this, (msg1: csprotos.message, acc: string, ws: any) => {
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
        }));
    }
}
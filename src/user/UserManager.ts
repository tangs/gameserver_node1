import { UserInfo } from "./UserInfo";
import { DbHelper } from "../db/DbHelper";
import { Handler } from "../utils/Handler";
import { userInfo } from "os";
import { AppEventEmitter } from "../event/AppEventEmitter";
import { Events } from "../event/Events";

export class UserManager {
    private static instance: UserManager = null;

    private users = {};

    public static getInstance(): UserManager {
        if (UserManager.instance == null) {
            UserManager.instance = new UserManager();
        }
        return UserManager.instance;
    }

    public getUserInfo(acc: string): UserInfo {
        return this.users[acc];
    }
    
    public userConnect(acc: string, ws: any, handler: Handler): void {
        let succ = (info: UserInfo) => {
            info.ws = ws;
            info.isConneted = true;
            handler.runWith(true);
            AppEventEmitter.getInstance().emit(Events.USER_CONNECT, acc);
        }
        if (this.users[acc] == null) {
            DbHelper.getInstance().getUserInfo(acc, new Handler(this, (row) => {
                if (row != null) {
                    let usr: UserInfo = this.users[acc];
                    usr.userid = row.userid;
                    usr.account = row.account;
                    usr.deviceid = row.account;
                    usr.name = row.name;
                    usr.sex = row.sex;
                    usr.avatar = row.avatar;
                    usr.lv = row.lv;
                    usr.coin = row.coin;
                    succ(usr);
                } else {
                    handler.runWith(false);
                }
            }));
            this.users[acc] = new UserInfo();
        } else {
            // let info = this.users[key];
            succ(this.users[acc]);
        }
    }

    public userDisConnect(acc: string) {
        AppEventEmitter.getInstance().emit(Events.USER_DISCONNECT, acc);
        let usr: UserInfo = this.users[acc];
        if (usr == null) {
            return;
        }
        usr.ws = null;
        usr.isConneted = false;
    }

}

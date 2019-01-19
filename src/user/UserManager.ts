import { UserInfo } from "./UserInfo";
import { DbHelper } from "../db/DbHelper";
import { Handler } from "../utils/Handler";
import { userInfo } from "os";
import { AppEventEmitter } from "../event/AppEventEmitter";
import { Events } from "../event/Events";

export class UserManager {
    private static instance = null;

    private users = {};

    public static getInstance() {
        if (UserManager.instance == null) {
            UserManager.instance = new UserManager();
        }
        return UserManager.instance;
    }

    public getUserInfo(key: string): UserInfo {
        return this.users[key];
    }
    
    public userConnect(key: string, ws: any, handler: Handler): void {
        let succ = (info: UserInfo) => {
            info.ws = ws;
            info.isConneted = true;
            handler.runWith(true);
            AppEventEmitter.getInstance().emit(Events.USER_CONNECT, key);
        }
        if (this.users[key] == null) {
            DbHelper.getInstance().getUserInfo(key, new Handler(this, (row) => {
                if (row != null) {
                    let usr: UserInfo = this.users[key];
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
            this.users[key] = new UserInfo();
        } else {
            // let info = this.users[key];
            succ(this.users[key]);
        }
    }

    public userDisConnect(key: string) {
        AppEventEmitter.getInstance().emit(Events.USER_DISCONNECT, key);
        let usr: UserInfo = this.users[key];
        if (usr == null) {
            return;
        }
        usr.ws = null;
        usr.isConneted = false;
    }

}

import { UserInfo } from "./UserInfo";
import { DbHelper } from "../db/DbHelper";
import { Handler } from "../utils/Handler";
import { userInfo } from "os";

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

                    usr.ws = ws;
                    usr.isConneted = true;
                }
                handler.runWith(row != null);
            }));
            this.users[key] = new UserInfo();
        } else {
            let info = this.users[key];
            info.ws = ws;
            info.isConneted = true;
            handler.runWith(true);
        }
        // let usr: UserInfo = this.users[key];
        // usr.ws = ws;
        // usr.isConneted = true;
    }

    public userDisConnect(key: string) {
        let usr: UserInfo = this.users[key];
        if (usr == null) {
            return;
        }
        usr.ws = null;
        usr.isConneted = false;
    }

}

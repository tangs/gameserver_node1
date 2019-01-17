import { UserInfo } from "./UserInfo";

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
    
    public userConnect(key: string, ws: any) {
        if (this.users[key] == null) {
            this.users[key] = new UserInfo();
        }
        let usr: UserInfo = this.users[key];
        usr.ws = ws;
        usr.isConneted = true;
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

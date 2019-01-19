import { DbHelper } from "../db/DbHelper";
import { Handler } from "../utils/Handler";
import { CSProto } from "../protos/TinyGameCSProto.xml";
import { MyMsgBuilder } from "../msg/MyMsgBuilder";

export class UserInfo {
    public userid: number = 0;
    public account: string = "";
    public deviceid: string = "";
    // public key: string = "";
    public name: string = "tangs";
    public sex: number = 1;
    public avatar: string = "https://avatars3.githubusercontent.com/u/3196414?s=400&u=8ca426b011a6957a0f97c1b1be6243abbdce093c&v=4";
    public coin: number = 1000;
    public lv: number = 10;

    public mapid: number = 0;
    public ws: any;
    public isConneted: boolean = false;

    private mb: MyMsgBuilder = MyMsgBuilder.getInstance();

    public setCoin(coin: number): void {
        this.coin = coin;
        const info = {
            userid: this.userid,
            coin: coin
        }
        DbHelper.getInstance().updateUserInfo(info, null);
        let msg = new CSProto.CMD_ATT_CHANGE_SC;
        msg.dwObjectID = this.userid;
        let p = new CSProto.PROPERTY();
        p.bPropType = CSProto.LIFEATT_GOLD;
        p.llPropValue = info.coin;
        msg.astAttr.push(p);
        if (this.ws) {
            this.ws.send(this.mb.encode(msg));
        }
    }

    public addCoin(coin: number): void {
        this.setCoin(this.coin + coin);
    }
}

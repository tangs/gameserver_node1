import { UserManager } from "../user/UserManager";
import { UserInfo } from "../user/UserInfo";
import { csprotos } from "../protos/csProtoDecoder";
import { CSProto } from "../protos/TinyGameCSProto.xml";
import { MyMsgBuilder } from "../msg/MyMsgBuilder";
import { AppEventEmitter } from "../event/AppEventEmitter";
import { Events } from "../event/Events";

export class CarServer {
    private static instance: CarServer = null;

    private static LOOP_TIME: number = 30 * 1000;

    private runId: any = null;
    private um: UserManager = UserManager.getInstance();
    private mb: MyMsgBuilder = MyMsgBuilder.getInstance();
    private users: Array<UserInfo> = [];
    private lastStartTime: number;
    private recodes: Array<number> = [];

    private loopId: number = 0;

    public static getInstance(): CarServer {
        if (CarServer.instance == null) {
            CarServer.instance = new CarServer();
        }
        return CarServer.instance;
    }

    constructor() {
        this.recodes.push(73);
        this.init();
    }

    private init(): void {
        this.initEvents();
    }

    private initEvents(): void {
        const aee = AppEventEmitter.getInstance();
        aee.on(Events.ENTER_ROOM, (acc: string, mapId: number) => {
            if (mapId == CSProto.MAP_TEMPLATE_ID_CAR) {
                this.userEnter(acc);
            } else {
                this.userLeave(acc);
            }
        });
        aee.on(Events.USER_DISCONNECT, (acc: string) => {
            this.userLeave(acc);
        });
    }

    private getEnterEndMsg(): csprotos.message {
        let curTime = new Date().getTime();
        let leftTime = (this.lastStartTime + CarServer.LOOP_TIME - curTime) / 1000;
        leftTime = Math.floor(leftTime);
        let dest = new CSProto.CMD_CAR_ENTERDATA_SC();
        dest.dwTableID = 1000;
        dest.bIfCanJoinPlay = 1;
        let stData = dest.stAllData;
        stData.dwRoundID = this.loopId++;
        stData.abHisPrize = this.recodes;
        if (leftTime > 0) {
            stData.bTabStatus = CSProto.LOTTERY_CURSTATUS_CANBET;
            stData.wLeftBetTime = leftTime;
        } else {
            stData.bTabStatus = CSProto.LOTTERY_CURSTATUS_WILLRUNNING;
            stData.wLeftBetTime = Math.floor(CarServer.LOOP_TIME / 1000);
        }
        return dest;
    }

    private getRoundEndMsg(): csprotos.message {
        let dest = new CSProto.CMD_CAR_ROUND_END_SC();
        dest.bPrizeRet = Math.floor(71 + Math.random() * 8);
        dest.llGotBaseGold = 5000;
        let nData = dest.stNewstData;
        nData.bTabStatus = CSProto.LOTTERY_CURSTATUS_CANBET;
        nData.wLeftBetTime = Math.floor(CarServer.LOOP_TIME / 1000);
        this.recodes.splice(0, 0, dest.bPrizeRet);
        if (this.recodes.length > 8) {
            // this.recodes.shift();
            this.recodes.pop();
        }
        return dest;
    }

    private roundEnd() {
        let msg = this.mb.encode(this.getRoundEndMsg());
        const infos = this.users;
        let len = infos.length;
        for (let i = 0; i < len; ++i) {
            let info = infos[i];
            if (info.isConneted && info.ws) {
                info.addCoin(5000);
                info.ws.send(msg);
            }
        }
        this.lastStartTime = new Date().getTime();
    }

    public start(): void {
        this.roundEnd();
        this.runId = setInterval(this.roundEnd.bind(this), CarServer.LOOP_TIME);
    }

    public end(): void {
        if (this.runId)
            clearInterval(this.runId);
    }

    public userEnter(acc: string): void {
        var info = this.um.getUserInfo(acc);
        if (info.isConneted && info.ws) {
            info.ws.send(this.mb.encode(this.getEnterEndMsg()));
        }
        const infos = this.users;
        let len = infos.length;
        for (let i = 0; i < len; ++i) {
            if (info == infos[i]) {
                return;
            }
        }
        this.users.push(info);
    }

    public userLeave(acc: string): void {
        var info = this.um.getUserInfo(acc);
        const infos = this.users;
        let len = infos.length;
        for (let i = 0; i < len; ++i) {
            if (info == infos[i]) {
                infos.splice(i, 1);
                return;
            }
        }
    }
}

import { MsgBuilder } from "../protos/csProtoBuilder";

export class MyMsgBuilder {
    private static instance: MyMsgBuilder = null;

    private builder: MsgBuilder.csProtoBuilder;

    public static getInstance(): MyMsgBuilder {
        if (MyMsgBuilder.instance == null) {
            MyMsgBuilder.instance = new MyMsgBuilder();
        }
        return MyMsgBuilder.instance;
    }

    constructor() {
        this.builder = new MsgBuilder.csProtoBuilder();
    }

    public encode(msg): Uint8Array {
        return this.builder.encode(msg);
    }
}

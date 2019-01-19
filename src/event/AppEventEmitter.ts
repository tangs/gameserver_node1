import { EventEmitter } from "events";

export class AppEventEmitter extends EventEmitter{
    private static instance: AppEventEmitter = null;

    public static getInstance(): AppEventEmitter {
        if (AppEventEmitter.instance == null) {
            AppEventEmitter.instance = new AppEventEmitter();
        }
        return AppEventEmitter.instance;
    }
}

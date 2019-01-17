export class Handler {
    /** 执行域(this)。*/
    public caller: any;
    /** 处理方法。*/
    public method: Function;
    /** 参数。*/
    public args: Array<any>;
    /** 表示是否只执行一次。如果为true，回调后执行recover()进行回收，回收后会被再利用，默认为false 。*/
    public once: boolean;
    /**
     * 根据指定的属性值，创建一个 <code>Handler</code> 类的实例。
     * @param	caller 执行域。
     * @param	method 处理函数。
     * @param	args 函数参数。
     * @param	once 是否只执行一次。
     */
    constructor(caller?: any, method?: Function, args?: Array<any>, once?: boolean) {
        this.caller = caller;
        this.method = method;
        this.args = args;
        this.once = once;
    }
    /**
     * 设置此对象的指定属性值。
     * @param	caller 执行域(this)。
     * @param	method 回调方法。
     * @param	args 携带的参数。
     * @param	once 是否只执行一次，如果为true，执行后执行recover()进行回收。
     * @return  返回 handler 本身。
     */
    public setTo(caller: any, method: Function, args: Array<any>, once: boolean): Handler {
        this.caller = caller;
        this.method = method;
        this.args = args;
        this.once = once;
        return this;
    }
    /**
     * 执行处理器。
     */
    public run(): any {
        this.method.apply(this.caller, this.args);
    }
    /**
     * 执行处理器，携带额外数据。
     * @param	data 附加的回调数据，可以是单数据或者Array(作为多参)。
     */
    public runWith(data: any): any {
        let args = this.args ? this.args : [];
        args = args.concat(data);
        this.method.apply(this.caller, args);
    }
    /**
     * 清理对象引用。
     */
    public clear(): Handler {
        return this;
    }
    /**
     * 清理并回收到 Handler 对象池内。
     */
    public recover(): void {

    }
    /**
     * 从对象池内创建一个Handler，默认会执行一次并立即回收，如果不需要自动回收，设置once参数为false。
     * @param	caller 执行域(this)。
     * @param	method 回调方法。
     * @param	args 携带的参数。
     * @param	once 是否只执行一次，如果为true，回调后执行recover()进行回收，默认为true。
     * @return  返回创建的handler实例。
     */
    static create(caller: any, method: Function, args?: Array<any>, once?: boolean): Handler {
        return new Handler(caller, method, args, once);
    }
}

import { DbConfig } from "./DbConfig";
import { Handler } from "../utils/Handler";
import { StringHelper } from "../utils/StringHelper";

const mysql = require("mysql");

export class DbHelper {
    private static instance: DbHelper;

    private pool: any = null;

    public static getInstance(): DbHelper {
        if (DbHelper.instance == null) {
            DbHelper.instance = new DbHelper();
            DbHelper.instance.init();
        }
        return DbHelper.instance;
    }

    public init(): void {
        const cfg = DbConfig;
        this.pool = mysql.createPool({
            host: cfg.HOST,
            port: cfg.PORT,
            user: cfg.USER,
            password: cfg.PWD,
            database: cfg.DB,
        });
    }

    public query(sql: string , handler: Handler): void {
        this.pool.getConnection(function(err, conn){  
            if(err) {  
                if (handler) {
                    handler.runWith(err);  
                }
            } else {  
                conn.query(sql,function(qerr, vals, fields){  
                    //释放连接  
                    conn.release();  
                    //事件驱动回调  
                    if (handler) {
                        handler.runWith([qerr,vals,fields]);  
                    }
                });  
            }  
        });  
    }

    public isUserExist(acc: string, handler: Handler): void {
        if (acc == null || acc.length == 0) {
            if (handler) {
                handler.runWith(null);
            }
            return;
        }
        const sql = 'SELECT userid FROM t_users WHERE account = "' + acc + '"';
        console.log(sql);
        this.query(sql, new Handler(this, (err, rows, fields) => {
            if (err) {
                throw err;
            }
            if (rows.length == 0) {
                if (handler) {
                    handler.runWith(false);
                }
                return;
            }
            if (handler) {
                handler.runWith(true);
            }
        }));  
    }

    public getUserInfo(acc: string, handler: Handler): void {
        if (acc == null || acc.length == 0) {
            if (handler) {
                handler.runWith(null);
            }
            return;
        }
        const sql = 'SELECT userid, account, name, sex, avatar, lv, coin FROM t_users WHERE account = "' + acc + '"';
        console.log(sql);
        this.query(sql, new Handler(this, (err, rows, fields) => {
            if (err) {
                if (handler) {
                    handler.runWith(null);
                }
                throw err;
            }

            if (rows.length == 0) {
                if (handler) {
                    handler.runWith(null);
                }
                return;
            }
            // rows[0].name = crypto.fromBase64(rows[0].name);
            if (handler) {
                handler.runWith(rows[0]);
            }
        }));
    }

    public getUserInfoByUserid(userid: number, handler: Handler): void {
        const sql = 'SELECT userid, account, name, sex, lv, coin FROM t_users WHERE userid = "' + userid + '"';
        console.log(sql);
        this.query(sql, new Handler(this, (err, rows, fields) => {
            if (err) {
                if (handler) {
                    handler.runWith(null);
                }
                throw err;
            }

            if(rows.length == 0){
                if (handler) {
                    handler.runWith(null);
                }
                return;
            }
            // rows[0].name = crypto.fromBase64(rows[0].name);
            handler.runWith(rows[0]);
        }));
    }

    public updateUserInfo(info: any, handler: Handler) : void {
        let keys = Object.keys(info);
        const userid = info ? info.userid : null;
        if (userid == null || keys.length <= 1) {
            if (handler) {
                handler.runWith(false);
            }
            return;
        }
        let paras = "";
        for (let i = 0; i < keys.length; ++i) {
            let key = keys[i];
            if (key == "userid") {
                continue;
            }
            paras += StringHelper.format('{0}={1},', key, info[key]);
        }
        if (paras.length) {
            paras = paras.substr(0, paras.length - 1);
        }
        let sql = 'UPDATE t_users SET {0} WHERE userid="{1}"';
        sql = StringHelper.format(sql, paras, userid);
        console.log(sql);
        this.query(sql, new Handler(this, (err, rows, fields) => {
            if (err) {
                throw err;
            }
            if (handler) {
                handler.runWith(rows);
            }
        }));
    }

    public createUser(info: any, handler: Handler): void {
        const acc = info ? info.account : null;
        if (acc == null || acc.length == 0) {
            if (handler) {
                handler.runWith(false);
            }
            return;
        }
        let sql = 'INSERT INTO t_users(account, deviceid, name, sex, avatar, lv, coin) VALUES("{0}","{1}","{2}",{3},"{4}",{5},{6})';
        sql = StringHelper.format(sql, acc, info.deviceid, 
                info.name, info.sex, info.avatar, info.lv, info.coin);
        console.log(sql);
        this.query(sql, new Handler(this, (err, rows, fields) => {
            if (err) {
                throw err;
            }
            if (handler) {
                handler.runWith(true);
            }
        }));
    }

    public getMailsByDid(destId: number, handler: Handler): void {
        const sql = 'SELECT id, sname, title, content, stime FROM t_mails WHERE did = ' + destId;
        console.log(sql);
        this.query(sql, new Handler(this, (err, rows, fields) => {
            if (err) {
                if (handler) {
                    handler.runWith(null);
                }
                throw err;
            }

            if(rows.length == 0){
                if (handler) {
                    handler.runWith(null);
                }
                return;
            }
            // rows[0].name = crypto.fromBase64(rows[0].name);
            handler.runWith(rows, false);
        }));
    }
}

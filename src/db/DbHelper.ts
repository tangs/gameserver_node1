import { DbConfig } from "./DbConfig";
import { Handler } from "../utils/Handler";

const mysql = require("mysql");

export class DbHelper {
    private static instance: DbHelper;

    private pool: any = null;

    public static GetInstance(): DbHelper {
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
            if(err){  
                handler.runWith(err);  
            }else{  
                conn.query(sql,function(qerr, vals, fields){  
                    //释放连接  
                    conn.release();  
                    //事件驱动回调  
                    handler.runWith([qerr,vals,fields]);  
                });  
            }  
        });  
    }

    public isUserExist(acc: string, handler: Handler): void {
        if (acc == null || acc.length == 0 || handler == null) {
            handler.runWith(null);
            return;
        }
        const sql = 'SELECT userid FROM t_users WHERE account = "' + acc + '"';
        this.query(sql, new Handler(this, (err, rows, fields) => {
            if (err) {
                throw err;
            }
    
            if(rows.length == 0){
                handler.runWith(false);
                return;
            }
    
            handler.runWith(true);
        }));  
    }

    public getUserInfo(acc: string, handler: Handler): void {
        if (acc == null || acc.length == 0 || handler == null) {
            handler.runWith(null);
            return;
        }
        const sql = 'SELECT userid, account, name, sex, lv, coin FROM t_users WHERE account = "' + acc + '"';
        this.query(sql, new Handler(this, (err, rows, fields) => {
            if (err) {
                handler.runWith(null);
                throw err;
            }

            if(rows.length == 0){
                handler.runWith(null);
                return;
            }
            // rows[0].name = crypto.fromBase64(rows[0].name);
            handler.runWith(rows[0]);
        }));
    }

    public getUserInfoByUserid(userid: number, handler: Handler): void {
        if (handler == null) {
            handler.runWith(null);
            return;
        }
        const sql = 'SELECT userid, account, name, sex, lv, coin FROM t_users WHERE userid = "' + userid + '"';
        this.query(sql, new Handler(this, (err, rows, fields) => {
            if (err) {
                handler.runWith(null);
                throw err;
            }

            if(rows.length == 0){
                handler.runWith(null);
                return;
            }
            // rows[0].name = crypto.fromBase64(rows[0].name);
            handler.runWith(rows[0]);
        }));
    }

    public createUser(info: any, handler: Handler): void {
        let acc = info ? info.acc : null;
        if (acc == null || acc.length == 0 || handler == null) {
            handler.runWith(false);
            return;
        }
        var sql = 'INSERT INTO t_users(account, deviceid, name, sex, avatar, lv, coin) VALUES("{0}", "{1}","{2}",{3},{4},{5},{6})';
        sql = sql.format(userId,account,name,coins,gems,sex,headimg);
        console.log(sql);
        this.query(sql, new Handler(this, (err, rows, fields) => {
            if (err) {
                throw err;
            }
            handler.runWith(true);
        }));
    }
}

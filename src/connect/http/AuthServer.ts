import {Config} from '../Config';
const http = require("http");
const express = require('express');
const cors = require('cors');

class AuthServer {

    public start(): void {
        let app = express();
        app.use(cors());
        // app.listen(Config.queryServer.port, function(req, res) {
        app.post('/acc', function(req, res, next) {
        // http.createServer(function(req, res) {
            if (req.method == "POST") {
                let post = '';     
                req.on('data', function(chunk) {    
                    post += chunk;
                });
                req.on('end', function() {
                    const json = Buffer.from(post, 'base64').toString();
                    console.log("recv:" + json);
                    const reqData = JSON.parse(json);
                    let data = {
                        "cmd": "acclogin",
                        "ret_code": "0",
                        "ret_desc": "成功",
                        "auth_token": reqData.auth_account,
                        "acc_uniq_key": reqData.auth_account
                    };
                    const resData = JSON.stringify(data);
                    const base64Data = Buffer.from(resData).toString("base64");
                    res.writeHead(200, {
                        'Access-Control-Allow-Origin': "*",
                        'Access-Control-Allow-Headers': "X-Requested-With",
                        'Access-Control-Allow-Methods': "PUT,POST,GET,DELETE,OPTIONS",
                        'X-Powered-By':' 3.2.1',
                        'Content-Type': "application/json;charset=utf-8"
                    });
                    res.end(base64Data);
                });
            } else {
                res.writeHead(200, {
                    'Access-Control-Allow-Origin': "*",
                    'Access-Control-Allow-Headers': "X-Requested-With",
                    'Access-Control-Allow-Methods': "PUT,POST,GET,DELETE,OPTIONS",
                    'X-Powered-By':' 3.2.1',
                    'Content-Type': "application/json;charset=utf-8"
                });
                res.end();
            }
        });
        app.listen(Config.authServer.port);
        console.log("start auth server at port:" + Config.authServer.port);
    }
}

// let app = express();
// app.use(cors());
//设置跨域访问
// app.all('*', function(req, res, next) {
// 	res.header("Access-Control-Allow-Origin", "*");
// 	res.header("Access-Control-Allow-Headers", "X-Requested-With");
// 	res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
// 	res.header("X-Powered-By",' 3.2.1');
// 	res.header("Content-Type", "application/json;charset=utf-8");
//     next();
// });
// //设置跨域访问
// app.all('*', function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "X-Requested-With");
//     res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
//     res.header("X-Powered-By",' 3.2.1')
// 	res.header("Content-Type", "application/json;charset=utf-8");
// 	// fibers(function(){
// 	// 	next();
// 	// }).run();
// });

new AuthServer().start();

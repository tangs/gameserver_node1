import {Config} from '../Config';
const http = require("http");
const express = require('express');
const cors = require('cors');

class QueryServer {

    public start(): void {
        let app = express();
        app.use(cors());
        // app.listen(Config.queryServer.port, function(req, res) {
        app.post('/dev_svraddr', function(req, res, next) {
        // http.createServer(function(req, res) {
            if (req.method == "POST") {
                let post = '';     
                req.on('data', function(chunk) {    
                    post += chunk;
                });
                req.on('end', function() {
                    const json = Buffer.from(post, 'base64').toString();
                    console.log("recv:" + json);
                    let data = {
                        "svr_addr": Config.gameServer.host,
                        "svr_port": Config.gameServer.port,
                        "ret_code": "0",
                        "client_res_root": "http://10.8.50.157:8191/clientresdown/",
                        "pkg_update_type": "0",
                        "pkg_incupdate_addr": "",
                        "inc_orgin_pkg_md5": "",
                        "inc_new_pkg_md5": "",
                        "inc_patch_pkg_md5": "",
                        "ret_pkg_addr_type": "",
                        // "login_addr": Config.getUrl(Config.authServer),
                        "login_addr": `http://${Config.authServer.host}:${Config.authServer.port}/acc`,
                        // "login_addr": `http://127.0.0.1:19992/acc`,
                        "buyu_addr": "",
                        "func_ctl": {
                            "pay":"wechat:19pay:commwappayunionpay"
                        }
                    };
                    const reqData = JSON.stringify(data);
                    const base64Data = Buffer.from(reqData).toString("base64");
                    // post = querystring.parse(post);
                    res.writeHead(200, {
                        'Content-Type': "application/json;charset=utf-8"
                    });
                    res.end(base64Data);
                    console.log("reqest:" + reqData);
                });
            } else {
                res.writeHead(200, {
                    'Content-Type': "application/json;charset=utf-8"
                });
                res.end();
            }
        });
        app.listen(Config.queryServer.port);
        // }).listen(Config.queryServer.port);
        console.log("start query server at port:" + Config.queryServer.port);
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
// 	next();
// });

new QueryServer().start();

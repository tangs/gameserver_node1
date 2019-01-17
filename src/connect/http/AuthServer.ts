import {Config} from '../Config';
const http = require("http");

class AuthServer {

    public start(): void {
        http.createServer(function(req, res) {
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
                    res.writeHead(200, {'Content-Type': 'text/html; charset=utf8'});
                    res.end(base64Data);
                });
            } else {
                res.writeHead(400, {'Content-Type': 'text/html; charset=utf8'});
                res.end();
            }
        }).listen(Config.authServer.port);
        console.log("start auth server at port:" + Config.authServer.port);
    }
}

new AuthServer().start();

import {Config} from '../Config';
const http = require("http");

class QueryServer {

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
                        "login_addr": "http://127.0.0.1:19992/acc",
                        "buyu_addr": "",
                        "func_ctl": {
                            "pay":"wechat:19pay:commwappayunionpay"
                        }
                    };
                    const reqData = JSON.stringify(data);
                    const base64Data = Buffer.from(reqData).toString("base64");
                    // post = querystring.parse(post);
                    res.writeHead(200, {'Content-Type': 'text/html; charset=utf8'});
                    res.end(base64Data);
                });
            } else {
                res.writeHead(400, {'Content-Type': 'text/html; charset=utf8'});
                res.end();
            }
        }).listen(Config.queryServer.port);
        console.log("start query server at port:" + Config.queryServer.port);
    }
}

new QueryServer().start();

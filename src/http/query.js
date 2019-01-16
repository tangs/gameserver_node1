const http = require("http");
const querystring = require('querystring');
const config = {
    // ws_server: "127.0.0.1",
    ws_server: "10.8.50.157",
    ws_port: 19800,
    login_addr: "http://127.0.0.1:19992/acc"
    // login_addr: "http://10.8.50.157:19992/acc"
}
const port = 19990;

http.createServer(function(req, res) {
    // res.writeHead(200, {"Content-Type": "text/plain"});
    // res.write("req:" + req.);
    if (req.method == "GET") {
        var postHTML = '';
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf8'});
        res.end(postHTML);
    } else if (req.method == "POST") {
        let post = '';     
        req.on('data', function(chunk) {    
            post += chunk;
        });
        req.on('end', function() {
            // const buffer = Buffer.from(post, 'base64');
            const json = Buffer.from(post, 'base64').toString();
            console.log("recv:" + json);
            let data = {
                "svr_addr": config.ws_server,
                "svr_port": config.ws_port,
                "ret_code": "0",
                "client_res_root": "http://10.8.50.157:8191/clientresdown/",
                "pkg_update_type": "0",
                "pkg_incupdate_addr": "",
                "inc_orgin_pkg_md5": "",
                "inc_new_pkg_md5": "",
                "inc_patch_pkg_md5": "",
                "ret_pkg_addr_type": "",
                "login_addr": config.login_addr,
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
    }
}).listen(port);
console.log("start query server at port:" + port);

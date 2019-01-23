import { DbHelper } from '../../db/DbHelper';
import { Handler } from '../../utils/Handler';
const express = require('express');
const cors = require('cors');

class MailServer {

    public start(): void {
        let app = express();
        let dbm = DbHelper.getInstance();
        app.use(cors());
        // app.listen(Config.queryServer.port, function(req, res) {
        app.post('/mail', function(req, res, next) {
        // http.createServer(function(req, res) {
            if (req.method == "POST") {
                let post = '';     
                req.on('data', function(chunk) {    
                    post += chunk;
                });
                req.on('end', function() {
                    // const json = Buffer.from(post, 'base64').toString();
                    const json = JSON.parse(post);
                    if (json != null) {
                        json.sId = 0;
                    }
                    dbm.sendMail(json, new Handler(this, (ret: boolean, error) => {
                        res.writeHead(200, {
                            'Content-Type': "application/json;charset=utf-8"
                        });
                        if (ret) {
                            res.end("发送成功.");
                        } else {
                            res.end("发送失败:" + error);
                        }
                    }));
                    console.log("recv:" + post);
                });
            } else {
                res.writeHead(200, {
                    'Content-Type': "application/json;charset=utf-8"
                });
                res.end();
            }
        });
        app.listen(22222);
        console.log("start auth server at port:" + 22222);
    }
}
new MailServer().start();

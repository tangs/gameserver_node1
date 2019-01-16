var http = require('http');
var querystring = require('querystring');
var createClientPostRequest = function () {
    var options = {
        method: 'POST',
        protocol: 'http:',
        hostname: '127.0.0.1',
        port: '9999',
        path: '/post',
        headers: {
            "connection": "keep-alive",
            "content-type": "application/x-www-form-urlencoded"
        }
    };
    // 发送给服务端的数据
    var postBody = {
        nick: 'chyingp'
    };
    // 创建客户端请求
    var client = http.request(options, function (res) {
        // 最终输出：Server got client data: nick=chyingp
        res.pipe(process.stdout);
    });
    client.on('response', function (res) {
        let post = '';
        res.on('data', function (chunk) {
            post += chunk;
        });
        res.on('end', function () {
            // console.log("recv1:" + post + "\n");
        });
    });
    // 发送的报文主体，记得先用 querystring.stringify() 处理下
    client.write(querystring.stringify(postBody));
    client.end();
};
createClientPostRequest();
//# sourceMappingURL=test.js.map
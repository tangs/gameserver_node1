const http = require("http");
const port = 19992;

http.createServer(function(req, res) {
    // res.writeHead(200, {"Content-Type": "text/plain"});
    // res.write("req:" + req.);
    if (req.method == "POST") {
        let post = '';     
        req.on('data', function(chunk) {    
            post += chunk;
        });
        req.on('end', function() {
            // const buffer = Buffer.from(post, 'base64');
            const json = Buffer.from(post, 'base64').toString();
            console.log("recv:" + json);
            let data = {
                "cmd":"acclogin",
                "ret_code":"0",
                "ret_desc":"成功",
                "auth_token":"AAAgYWVhYTMxYWI3MDI4ZjZhYjFmNDFkOTQzNGE2ZjNkMzkAMm56eTAwMHkxNTQ1MzAwNzI0eWFlYWEzMWFiNzAyOGY2YWIxZjQxZDk0MzRhNmYzZDM5AAAAAABcPqNnAAAAEMCHdzrOIy3lTOM48KoCNcA%3D",
                "acc_uniq_key":"a235ec39f89ef11cd00e7e70953cc3dd"
            };
            const reqData = JSON.stringify(data);
            const base64Data = Buffer.from(reqData).toString("base64");
            res.writeHead(200, {'Content-Type': 'text/html; charset=utf8'});
            res.end(base64Data);
        });
    }
}).listen(port);
console.log("start auth server at port:" + port);

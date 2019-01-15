var http = require("http");
var querystring = require('querystring');
var port = 9999;

http.createServer(function(req, res) {
    res.writeHead(200, {"Content-Type": "text/plain"});
    // res.write("req:" + req.);
    if (req.method == "GET") {
        var postHTML = 
        '<html><head><meta charset="utf-8"><title>post</title></head>' +
        '<body>' +
        '<form method="post">' +
        '网站名： <input name="name"><br>' +
        '网站 URL： <input name="url"><br>' +
        '<input type="submit">' +
        '</form>' +
        '</body></html>';
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf8'});
        res.end(postHTML);
    } else if (req.method == "POST") {
        let post = '';     
        req.on('data', function(chunk) {    
            post += chunk;
        });
        req.on('end', function() {
            post += "\n";
            console.log("recv:" + post);
            // post = querystring.parse(post);
            res.writeHead(200, {'Content-Type': 'text/html; charset=utf8'});
            res.end(post);
        });
    }

    
}).listen(port);
console.log("start query server at port:" + port);

const WebSocket = require("ws");
const WebSocketServer = WebSocket.Server;
const CSProto = require("../protos/CSProto.proto.ts");
const port = 39800;
const wss = new WebSocketServer({
    port: port
});
const test = CSProto.ChatChannel.CHAT_CHANNEL_BARRAGE;
wss.on('connection', function (ws) {
    console.log(`[SERVER] connection()`);
    ws.on('open', function () {
        console.log(`[CLIENT] open()`);
        // ws.send('Hello!');
    });
    ws.on('message', function (message) {
        console.log(`[SERVER] Received: ${message}`);
        // ws.send(`ECHO: ${message}`, (err) => {
        //     if (err) {
        //         console.log(`[SERVER] error: ${err}`);
        //     }
        // });
    });
    ws.on('close', function (error) {
        console.log(`[CLIENT] error()` + error);
    });
    ws.on('close', function (code, reason) {
        console.log(`[CLIENT] close()` + error + ", " + reason);
    });
});
console.log("start game server on port:" + port);
//# sourceMappingURL=game.js.map
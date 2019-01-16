'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const CSProto_proto_1 = require("../protos/CSProto.proto");
var gameserver;
(function (gameserver) {
    // var ws = import("ws");
    class Server {
        static run() {
            let ddd = CSProto_proto_1.CSProto.ShopType.SHOP_TYOE_COST_GOLD;
            // var ddd = "353;"
            console.log("ddd:" + ddd);
        }
    }
    gameserver.Server = Server;
})(gameserver || (gameserver = {}));
gameserver.Server.run();
//# sourceMappingURL=Hall.js.map
'use strict';

import {CSProto} from '../protos/CSProto.proto';

module gameserver {
    // var ws = import("ws");
    export class Server {
        public static run(): void {
            let ddd = CSProto.ShopType.SHOP_TYOE_COST_GOLD;
            // var ddd = "353;"
            console.log("ddd:" + ddd);
        }
    }
}

gameserver.Server.run();

import { CarServer } from "./game/CarServer";
import { LoginManger } from "./msg/LoginManger";
import { GameServer } from "./connect/ws/GameServer";

CarServer.getInstance().start();
LoginManger.getInstance().start();
new GameServer().start();

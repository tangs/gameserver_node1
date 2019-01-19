import { CarServer } from "./game/CarServer";
import { LoginManger } from "./msg/LoginManger";
import { GameServer } from "./connect/ws/GameServer";
import { MailServer } from "./mail/MailServer";

MailServer.getInstance().start();
CarServer.getInstance().start();
LoginManger.getInstance().start();
new GameServer().start();

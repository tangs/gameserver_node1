"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const csProtoDecoder_1 = require("./csProtoDecoder");
var CSProto;
(function (CSProto) {
    var EncodeBuffer = csProtoDecoder_1.csprotos.EncodeBuffer;
    var DecodeBuffer = csProtoDecoder_1.csprotos.DecodeBuffer;
    //command export
    let command;
    (function (command) {
        command[command["CMD_ERROR"] = 101] = "CMD_ERROR";
        command[command["CMD_TEST_ECHO"] = 102] = "CMD_TEST_ECHO";
        command[command["CMD_GET_BIN_MD5LIST"] = 103] = "CMD_GET_BIN_MD5LIST";
        command[command["CMD_REQUEST_RES"] = 104] = "CMD_REQUEST_RES";
        command[command["CMD_GM"] = 105] = "CMD_GM";
        command[command["CMD_NOTICE_CMDFAIL"] = 106] = "CMD_NOTICE_CMDFAIL";
        command[command["CMD_GOLD_NOTENOUGH_ERROR"] = 107] = "CMD_GOLD_NOTENOUGH_ERROR";
        command[command["CMD_COMM_HYPER_MSGBOX"] = 108] = "CMD_COMM_HYPER_MSGBOX";
        command[command["CMD_CLICK_HYPER_NOTICE"] = 109] = "CMD_CLICK_HYPER_NOTICE";
        command[command["CMD_NOTIFY_BULLETIN"] = 110] = "CMD_NOTIFY_BULLETIN";
        command[command["CMD_CLT_FIN_WRAP"] = 111] = "CMD_CLT_FIN_WRAP";
        command[command["CMD_ALOGIN"] = 200] = "CMD_ALOGIN";
        command[command["CMD_ALOGOUT"] = 201] = "CMD_ALOGOUT";
        command[command["CMD_PING"] = 202] = "CMD_PING";
        command[command["CMD_KICKOFF_ACCOUNT"] = 203] = "CMD_KICKOFF_ACCOUNT";
        command[command["CMD_WARP"] = 204] = "CMD_WARP";
        command[command["CMD_NTF_ENTERVIEW"] = 205] = "CMD_NTF_ENTERVIEW";
        command[command["CMD_NTF_LEAVEVIEW"] = 206] = "CMD_NTF_LEAVEVIEW";
        command[command["CMD_SCENE_HISTORY_CHATMSG"] = 207] = "CMD_SCENE_HISTORY_CHATMSG";
        command[command["CMD_SMART_BEGIN"] = 208] = "CMD_SMART_BEGIN";
        command[command["CMD_NOTIFY_TOPWINNER"] = 209] = "CMD_NOTIFY_TOPWINNER";
        command[command["CMD_ROLE_MISC"] = 300] = "CMD_ROLE_MISC";
        command[command["CMD_ROLE_FIN"] = 301] = "CMD_ROLE_FIN";
        command[command["CMD_ATT_CHANGE"] = 302] = "CMD_ATT_CHANGE";
        command[command["CMD_CAN_BEGIN_SLOT"] = 403] = "CMD_CAN_BEGIN_SLOT";
        command[command["CMD_DO_SLOTROUND_BEGIN"] = 404] = "CMD_DO_SLOTROUND_BEGIN";
        command[command["CMD_DO_SLOTROUND_END"] = 405] = "CMD_DO_SLOTROUND_END";
        command[command["CMD_ADD_SLOTMONEY"] = 406] = "CMD_ADD_SLOTMONEY";
        command[command["CMD_NOTIFY_SLOTTABDATA"] = 407] = "CMD_NOTIFY_SLOTTABDATA";
        command[command["CMD_TASK_LIST"] = 500] = "CMD_TASK_LIST";
        command[command["CMD_GET_TASK_AWARD"] = 501] = "CMD_GET_TASK_AWARD";
        command[command["CMD_LOTTERY_BET_ON"] = 600] = "CMD_LOTTERY_BET_ON";
        command[command["CMD_LOTTERY_ENTER"] = 601] = "CMD_LOTTERY_ENTER";
        command[command["CMD_LOTTERY_REFRESHDATA"] = 602] = "CMD_LOTTERY_REFRESHDATA";
        command[command["CMD_LOTTERY_ROUND_END"] = 603] = "CMD_LOTTERY_ROUND_END";
        command[command["CMD_LOTTERY_HERORANK"] = 604] = "CMD_LOTTERY_HERORANK";
        command[command["CMD_SCENE_ONLINELIST_PAGE"] = 605] = "CMD_SCENE_ONLINELIST_PAGE";
        command[command["CMD_LOTTERY_REFRESH_SELF_BET"] = 606] = "CMD_LOTTERY_REFRESH_SELF_BET";
        command[command["CMD_LOTTERY_HISTORY_CHATMSG"] = 607] = "CMD_LOTTERY_HISTORY_CHATMSG";
        command[command["CMD_CLASSICFRUIT_BET_ON"] = 700] = "CMD_CLASSICFRUIT_BET_ON";
        command[command["CMD_CLASSICFRUIT_ENTERDATA"] = 701] = "CMD_CLASSICFRUIT_ENTERDATA";
        command[command["CMD_CLASSICFRUIT_REFRESHDATA"] = 702] = "CMD_CLASSICFRUIT_REFRESHDATA";
        command[command["CMD_CLASSICFRUIT_ROUND_END"] = 703] = "CMD_CLASSICFRUIT_ROUND_END";
        command[command["CMD_CLASSICFRUIT_REFRESH_SELF_BET"] = 704] = "CMD_CLASSICFRUIT_REFRESH_SELF_BET";
        command[command["CMD_CLASSICFRUIT_HEARTBEAT"] = 705] = "CMD_CLASSICFRUIT_HEARTBEAT";
        command[command["CMD_CLASSICFRUIT_SIGNUP_BANKER"] = 706] = "CMD_CLASSICFRUIT_SIGNUP_BANKER";
        command[command["CMD_CLASSICFRUIT_QUIT_BANKER"] = 707] = "CMD_CLASSICFRUIT_QUIT_BANKER";
        command[command["CMD_CLASSICFRUIT_UPDATE_BANKER_STAT"] = 708] = "CMD_CLASSICFRUIT_UPDATE_BANKER_STAT";
        command[command["CMD_CLASSICFRUIT_CURBANKERLIST"] = 709] = "CMD_CLASSICFRUIT_CURBANKERLIST";
        command[command["CMD_CLASSICFRUIT_UPDATE_CURBANKER"] = 710] = "CMD_CLASSICFRUIT_UPDATE_CURBANKER";
        command[command["CMD_SHARK_BET_ON"] = 800] = "CMD_SHARK_BET_ON";
        command[command["CMD_SHARK_ENTERDATA"] = 801] = "CMD_SHARK_ENTERDATA";
        command[command["CMD_SHARK_REFRESHDATA"] = 802] = "CMD_SHARK_REFRESHDATA";
        command[command["CMD_SHARK_ROUND_END"] = 803] = "CMD_SHARK_ROUND_END";
        command[command["CMD_SHARK_REFRESH_SELF_BET"] = 804] = "CMD_SHARK_REFRESH_SELF_BET";
        command[command["CMD_SHARK_HEARTBEAT"] = 805] = "CMD_SHARK_HEARTBEAT";
        command[command["CMD_SHARK_SIGNUP_BANKER"] = 806] = "CMD_SHARK_SIGNUP_BANKER";
        command[command["CMD_SHARK_QUIT_BANKER"] = 807] = "CMD_SHARK_QUIT_BANKER";
        command[command["CMD_SHARK_UPDATE_BANKER_STAT"] = 808] = "CMD_SHARK_UPDATE_BANKER_STAT";
        command[command["CMD_SHARK_CURBANKERLIST"] = 809] = "CMD_SHARK_CURBANKERLIST";
        command[command["CMD_SHARK_UPDATE_CURBANKER"] = 810] = "CMD_SHARK_UPDATE_CURBANKER";
        command[command["CMD_SHARK_BANKER_SETPRIZE"] = 811] = "CMD_SHARK_BANKER_SETPRIZE";
        command[command["CMD_GET_CONLOGIN_GIFT"] = 901] = "CMD_GET_CONLOGIN_GIFT";
        command[command["CMD_GET_ONLINETIME_GIFT"] = 902] = "CMD_GET_ONLINETIME_GIFT";
        command[command["CMD_RANK_QUERYPAGE"] = 903] = "CMD_RANK_QUERYPAGE";
        command[command["CMD_CHAT"] = 904] = "CMD_CHAT";
        command[command["CMD_CONLOGIN_GIFT"] = 905] = "CMD_CONLOGIN_GIFT";
        command[command["CMD_SKIP_NEWERGUIDE"] = 906] = "CMD_SKIP_NEWERGUIDE";
        command[command["CMD_NOTIFY_CHARGE_SUCC"] = 907] = "CMD_NOTIFY_CHARGE_SUCC";
        command[command["CMD_CHANGE_HEADPHOTO"] = 908] = "CMD_CHANGE_HEADPHOTO";
        command[command["CMD_NOTIFY_THROWUP_GOLD"] = 909] = "CMD_NOTIFY_THROWUP_GOLD";
        command[command["CMD_NOTIFY_CHARGESUCC"] = 910] = "CMD_NOTIFY_CHARGESUCC";
        command[command["CMD_NOTIFY_EXTCHARGE_TIMER"] = 911] = "CMD_NOTIFY_EXTCHARGE_TIMER";
        command[command["CMD_NEWMSG_TAG"] = 912] = "CMD_NEWMSG_TAG";
        command[command["CMD_GET_RANKAWARD"] = 913] = "CMD_GET_RANKAWARD";
        command[command["CMD_PRIZEDRAW_CURINFO"] = 915] = "CMD_PRIZEDRAW_CURINFO";
        command[command["CMD_PLAY_PRIZEDRAW"] = 916] = "CMD_PLAY_PRIZEDRAW";
        command[command["CMD_QUERY_MONEYTREE"] = 917] = "CMD_QUERY_MONEYTREE";
        command[command["CMD_GATHER_MONEYTREE"] = 918] = "CMD_GATHER_MONEYTREE";
        command[command["CMD_MODIFY_NICK"] = 919] = "CMD_MODIFY_NICK";
        command[command["CMD_MODIFY_SELFPROP"] = 920] = "CMD_MODIFY_SELFPROP";
        command[command["CMD_UPLOAD_HEADPHOTO"] = 921] = "CMD_UPLOAD_HEADPHOTO";
        command[command["CMD_ADV_ALIPAY_GIFTPKG"] = 922] = "CMD_ADV_ALIPAY_GIFTPKG";
        command[command["CMD_NOTIFY_BEGIN_CHARGE"] = 923] = "CMD_NOTIFY_BEGIN_CHARGE";
        command[command["CMD_NOTIFY_UPT_EXTAPP_TIPS"] = 924] = "CMD_NOTIFY_UPT_EXTAPP_TIPS";
        command[command["CMD_REFRESH_CUR_ONLINETIME_GIFT"] = 925] = "CMD_REFRESH_CUR_ONLINETIME_GIFT";
        command[command["CMD_RECOMMEND_QUERYPAGE"] = 926] = "CMD_RECOMMEND_QUERYPAGE";
        command[command["CMD_GET_ME_RECOMM_OTHER_GIFT"] = 927] = "CMD_GET_ME_RECOMM_OTHER_GIFT";
        command[command["CMD_GET_OTHER_RECOMM_ME_GIFT"] = 928] = "CMD_GET_OTHER_RECOMM_ME_GIFT";
        command[command["CMD_APPSTORE_REPUTATION_STATE"] = 929] = "CMD_APPSTORE_REPUTATION_STATE";
        command[command["CMD_WRITE_APPSTORE_REPUTATION"] = 930] = "CMD_WRITE_APPSTORE_REPUTATION";
        command[command["CMD_NOTIFY_APPSTORE_REPUTATION"] = 931] = "CMD_NOTIFY_APPSTORE_REPUTATION";
        command[command["CMD_GET_APPSTORE_REPUTATION_GIFT"] = 932] = "CMD_GET_APPSTORE_REPUTATION_GIFT";
        command[command["CMD_HIDDEN_CHARGE_PLATFORM"] = 933] = "CMD_HIDDEN_CHARGE_PLATFORM";
        command[command["CMD_IS_NEWROLE_REGISTER"] = 934] = "CMD_IS_NEWROLE_REGISTER";
        command[command["CMD_QUERY_OTHERROLE_INFO"] = 935] = "CMD_QUERY_OTHERROLE_INFO";
        command[command["CMD_CAR_BET_ON"] = 1000] = "CMD_CAR_BET_ON";
        command[command["CMD_CAR_ENTERDATA"] = 1001] = "CMD_CAR_ENTERDATA";
        command[command["CMD_CAR_REFRESHDATA"] = 1002] = "CMD_CAR_REFRESHDATA";
        command[command["CMD_CAR_ROUND_END"] = 1003] = "CMD_CAR_ROUND_END";
        command[command["CMD_CAR_REFRESH_SELF_BET"] = 1004] = "CMD_CAR_REFRESH_SELF_BET";
        command[command["CMD_CAR_HEARTBEAT"] = 1005] = "CMD_CAR_HEARTBEAT";
        command[command["CMD_CAR_SIGNUP_BANKER"] = 1006] = "CMD_CAR_SIGNUP_BANKER";
        command[command["CMD_CAR_QUIT_BANKER"] = 1007] = "CMD_CAR_QUIT_BANKER";
        command[command["CMD_CAR_UPDATE_BANKER_STAT"] = 1008] = "CMD_CAR_UPDATE_BANKER_STAT";
        command[command["CMD_CAR_CURBANKERLIST"] = 1009] = "CMD_CAR_CURBANKERLIST";
        command[command["CMD_CAR_UPDATE_CURBANKER"] = 1010] = "CMD_CAR_UPDATE_CURBANKER";
        command[command["CMD_CAR_BANKER_SETPRIZE"] = 1011] = "CMD_CAR_BANKER_SETPRIZE";
        command[command["CMD_CAR_BIGWINNERRANK"] = 1012] = "CMD_CAR_BIGWINNERRANK";
        command[command["CMD_GET_MAILLIST"] = 1101] = "CMD_GET_MAILLIST";
        command[command["CMD_GET_MAILATTACH"] = 1102] = "CMD_GET_MAILATTACH";
        command[command["CMD_MAILSTAT_CHANGE"] = 1103] = "CMD_MAILSTAT_CHANGE";
        command[command["CMD_REQ_BIND_SMSCODE"] = 1201] = "CMD_REQ_BIND_SMSCODE";
        command[command["CMD_CONFIRM_BIND_SMSCODE"] = 1202] = "CMD_CONFIRM_BIND_SMSCODE";
        command[command["CMD_DO_UNBIND_CURMOBILE"] = 1203] = "CMD_DO_UNBIND_CURMOBILE";
        command[command["CMD_DO_BIND_MOBILE"] = 1204] = "CMD_DO_BIND_MOBILE";
        command[command["CMD_DO_REPLACE_ACCOUNT"] = 1205] = "CMD_DO_REPLACE_ACCOUNT";
        command[command["CMD_VIVO_GEN_ORDER"] = 1301] = "CMD_VIVO_GEN_ORDER";
        command[command["CMD_NOTIFY_ROUNDINDEXERR"] = 1302] = "CMD_NOTIFY_ROUNDINDEXERR";
        command[command["CMD_CHECK_MALLBUY"] = 1303] = "CMD_CHECK_MALLBUY";
        command[command["CMD_UNICOM_GEN_ORDER"] = 1304] = "CMD_UNICOM_GEN_ORDER";
        command[command["CMD_LENOVO_GEN_ORDER"] = 1305] = "CMD_LENOVO_GEN_ORDER";
        command[command["CMD_COMM_MALL_GEN_ORDER"] = 1306] = "CMD_COMM_MALL_GEN_ORDER";
        command[command["CMD_ZJH_ENTERDATA"] = 1500] = "CMD_ZJH_ENTERDATA";
        command[command["CMD_ZJH_BEGIN_ONEGAME"] = 1501] = "CMD_ZJH_BEGIN_ONEGAME";
        command[command["CMD_ZJH_CHANGE_ROOM"] = 1502] = "CMD_ZJH_CHANGE_ROOM";
        command[command["CMD_ZJH_UPT_PLAYER_DATA"] = 1503] = "CMD_ZJH_UPT_PLAYER_DATA";
        command[command["CMD_ZJH_UPT_TABLE_DATA"] = 1504] = "CMD_ZJH_UPT_TABLE_DATA";
        command[command["CMD_ZJH_END_ONEGAME"] = 1505] = "CMD_ZJH_END_ONEGAME";
        command[command["CMD_ZJH_PLAYER_ALLDATA"] = 1506] = "CMD_ZJH_PLAYER_ALLDATA";
        command[command["CMD_ZJH_PLAYER_FIRSTROUNDINFO"] = 1507] = "CMD_ZJH_PLAYER_FIRSTROUNDINFO";
        command[command["CMD_ZJH_DO_READY"] = 1510] = "CMD_ZJH_DO_READY";
        command[command["CMD_ZJH_DO_BET"] = 1511] = "CMD_ZJH_DO_BET";
        command[command["CMD_ZJH_DO_DISCARD"] = 1513] = "CMD_ZJH_DO_DISCARD";
        command[command["CMD_ZJH_DO_COMPARE"] = 1514] = "CMD_ZJH_DO_COMPARE";
        command[command["CMD_ZJH_DO_FORBIDCOMPARE"] = 1515] = "CMD_ZJH_DO_FORBIDCOMPARE";
        command[command["CMD_ZJH_DO_DOUBLE"] = 1516] = "CMD_ZJH_DO_DOUBLE";
        command[command["CMD_ZJH_DO_VIEWCARD"] = 1517] = "CMD_ZJH_DO_VIEWCARD";
        command[command["CMD_ZJH_DO_KICKPLAYER"] = 1518] = "CMD_ZJH_DO_KICKPLAYER";
        command[command["CMD_PAYCENTER_GEN_ORDER"] = 1601] = "CMD_PAYCENTER_GEN_ORDER";
        command[command["CMD_PAYCENTER_NOTIFY_SERVER_SUCC"] = 1602] = "CMD_PAYCENTER_NOTIFY_SERVER_SUCC";
        command[command["CMD_PAYCENTER_NOTIFY_CLIENT_SUCC"] = 1603] = "CMD_PAYCENTER_NOTIFY_CLIENT_SUCC";
        command[command["CMD_PAYCENTER_PREPAID_CARD_DOPAY"] = 1604] = "CMD_PAYCENTER_PREPAID_CARD_DOPAY";
        command[command["CMD_GET_CONLOGIN_GIFT_NEWVERSION"] = 1610] = "CMD_GET_CONLOGIN_GIFT_NEWVERSION";
        command[command["CMD_SHANXI_POINTS_EXCHANGE"] = 1611] = "CMD_SHANXI_POINTS_EXCHANGE";
        command[command["CMD_BULL_ENTERDATA"] = 1701] = "CMD_BULL_ENTERDATA";
        command[command["CMD_BULL_ROUND_END"] = 1702] = "CMD_BULL_ROUND_END";
        command[command["CMD_BULL_BET_ON"] = 1703] = "CMD_BULL_BET_ON";
        command[command["CMD_BULL_SIGNUP_BANKER"] = 1704] = "CMD_BULL_SIGNUP_BANKER";
        command[command["CMD_BULL_QUIT_BANKER"] = 1705] = "CMD_BULL_QUIT_BANKER";
        command[command["CMD_BULL_CURBANKERLIST"] = 1706] = "CMD_BULL_CURBANKERLIST";
        command[command["CMD_BULL_HEARTBEAT"] = 1707] = "CMD_BULL_HEARTBEAT";
        command[command["CMD_BULL_REFRESHDATA"] = 1708] = "CMD_BULL_REFRESHDATA";
        command[command["CMD_BULL_UPDATE_CURBANKER"] = 1709] = "CMD_BULL_UPDATE_CURBANKER";
        command[command["CMD_BULL_BIGWINNERRANK"] = 1710] = "CMD_BULL_BIGWINNERRANK";
        command[command["CMD_BULL_UPDATE_BANKER_STAT"] = 1711] = "CMD_BULL_UPDATE_BANKER_STAT";
        command[command["CMD_BULL_ROUND_START"] = 1712] = "CMD_BULL_ROUND_START";
        command[command["CMD_BULL_REFRESH_SELF_BET"] = 1713] = "CMD_BULL_REFRESH_SELF_BET";
        command[command["CMD_APPSTORE_PAYRECEPIT_VERIFY"] = 1801] = "CMD_APPSTORE_PAYRECEPIT_VERIFY";
        command[command["CMD_GOLDMINER_ENTERDATA"] = 1901] = "CMD_GOLDMINER_ENTERDATA";
        command[command["CMD_GOLDMINER_GAME_AGAIN"] = 1902] = "CMD_GOLDMINER_GAME_AGAIN";
        command[command["CMD_GOLDMINER_ONEGRAB_RET"] = 1903] = "CMD_GOLDMINER_ONEGRAB_RET";
        command[command["CMD_CHINESEPHRASE_DO_GAME"] = 1910] = "CMD_CHINESEPHRASE_DO_GAME";
        command[command["CMD_CHINESEPHRASE_REFRESH"] = 1911] = "CMD_CHINESEPHRASE_REFRESH";
        command[command["CMD_CHINESEPHRASE_FINALCOMMIT"] = 1912] = "CMD_CHINESEPHRASE_FINALCOMMIT";
        command[command["CMD_CHINESEPHRASE_PICNOTFOUND"] = 1913] = "CMD_CHINESEPHRASE_PICNOTFOUND";
        command[command["CMD_SINASHOW_MONEY_EXCHANGE_IN_OUT"] = 1920] = "CMD_SINASHOW_MONEY_EXCHANGE_IN_OUT";
        command[command["CMD_LABA_ENTERDATA"] = 2000] = "CMD_LABA_ENTERDATA";
        command[command["CMD_LABA_PLAY_ONE_ROUND"] = 2001] = "CMD_LABA_PLAY_ONE_ROUND";
        command[command["CMD_LABA_REFRESHDATA"] = 2002] = "CMD_LABA_REFRESHDATA";
        command[command["CMD_LABA_PLAYER_AWARDINFO"] = 2003] = "CMD_LABA_PLAYER_AWARDINFO";
        command[command["CMD_ITEMSTORE_GETSALEHIS"] = 2100] = "CMD_ITEMSTORE_GETSALEHIS";
        command[command["CMD_ITEMSTORE_DOBUY"] = 2101] = "CMD_ITEMSTORE_DOBUY";
        command[command["CMD_ITEMSTORE_QUERY_BUYLOG"] = 2102] = "CMD_ITEMSTORE_QUERY_BUYLOG";
        command[command["CMD_DO_REFRESH_HALL_VIEW"] = 2200] = "CMD_DO_REFRESH_HALL_VIEW";
        command[command["CMD_GET_BUYUHALL_VERSION_GIFT"] = 2300] = "CMD_GET_BUYUHALL_VERSION_GIFT";
        command[command["CMD_ENTER_BUYUHALL_MOREFUNC"] = 2301] = "CMD_ENTER_BUYUHALL_MOREFUNC";
        command[command["CMD_ZODIAC_ENTERDATA"] = 2401] = "CMD_ZODIAC_ENTERDATA";
        command[command["CMD_ZODIAC_ROUND_END"] = 2402] = "CMD_ZODIAC_ROUND_END";
        command[command["CMD_ZODIAC_BET_ON"] = 2403] = "CMD_ZODIAC_BET_ON";
        command[command["CMD_ZODIAC_SET_BUNCH"] = 2404] = "CMD_ZODIAC_SET_BUNCH";
        command[command["CMD_ZODIAC_REFRESHDATA"] = 2405] = "CMD_ZODIAC_REFRESHDATA";
        command[command["CMD_ZODIAC_REWARD_NPC_MM"] = 2406] = "CMD_ZODIAC_REWARD_NPC_MM";
        command[command["CMD_COWBOY_ENTER_DATA"] = 2501] = "CMD_COWBOY_ENTER_DATA";
        command[command["CMD_COWBOY_UPT_DATA"] = 2502] = "CMD_COWBOY_UPT_DATA";
        command[command["CMD_COWBOY_BALLOON_BORN"] = 2503] = "CMD_COWBOY_BALLOON_BORN";
        command[command["CMD_COWBOY_SHOOT"] = 2504] = "CMD_COWBOY_SHOOT";
        command[command["CMD_COWBOY_HIT_BALLOON"] = 2505] = "CMD_COWBOY_HIT_BALLOON";
        command[command["CMD_COWBOY_BALLOON_DEAD"] = 2506] = "CMD_COWBOY_BALLOON_DEAD";
        command[command["CMD_COWBOY_USE_BOMB"] = 2507] = "CMD_COWBOY_USE_BOMB";
        command[command["CMD_COWBOY_PRESENT_BOMB"] = 2508] = "CMD_COWBOY_PRESENT_BOMB";
    })(command = CSProto.command || (CSProto.command = {}));
    CSProto.command_name = {
        101: "CMD_ERROR",
        102: "CMD_TEST_ECHO",
        103: "CMD_GET_BIN_MD5LIST",
        104: "CMD_REQUEST_RES",
        105: "CMD_GM",
        106: "CMD_NOTICE_CMDFAIL",
        107: "CMD_GOLD_NOTENOUGH_ERROR",
        108: "CMD_COMM_HYPER_MSGBOX",
        109: "CMD_CLICK_HYPER_NOTICE",
        110: "CMD_NOTIFY_BULLETIN",
        111: "CMD_CLT_FIN_WRAP",
        200: "CMD_ALOGIN",
        201: "CMD_ALOGOUT",
        202: "CMD_PING",
        203: "CMD_KICKOFF_ACCOUNT",
        204: "CMD_WARP",
        205: "CMD_NTF_ENTERVIEW",
        206: "CMD_NTF_LEAVEVIEW",
        207: "CMD_SCENE_HISTORY_CHATMSG",
        208: "CMD_SMART_BEGIN",
        209: "CMD_NOTIFY_TOPWINNER",
        300: "CMD_ROLE_MISC",
        301: "CMD_ROLE_FIN",
        302: "CMD_ATT_CHANGE",
        403: "CMD_CAN_BEGIN_SLOT",
        404: "CMD_DO_SLOTROUND_BEGIN",
        405: "CMD_DO_SLOTROUND_END",
        406: "CMD_ADD_SLOTMONEY",
        407: "CMD_NOTIFY_SLOTTABDATA",
        500: "CMD_TASK_LIST",
        501: "CMD_GET_TASK_AWARD",
        600: "CMD_LOTTERY_BET_ON",
        601: "CMD_LOTTERY_ENTER",
        602: "CMD_LOTTERY_REFRESHDATA",
        603: "CMD_LOTTERY_ROUND_END",
        604: "CMD_LOTTERY_HERORANK",
        605: "CMD_SCENE_ONLINELIST_PAGE",
        606: "CMD_LOTTERY_REFRESH_SELF_BET",
        607: "CMD_LOTTERY_HISTORY_CHATMSG",
        700: "CMD_CLASSICFRUIT_BET_ON",
        701: "CMD_CLASSICFRUIT_ENTERDATA",
        702: "CMD_CLASSICFRUIT_REFRESHDATA",
        703: "CMD_CLASSICFRUIT_ROUND_END",
        704: "CMD_CLASSICFRUIT_REFRESH_SELF_BET",
        705: "CMD_CLASSICFRUIT_HEARTBEAT",
        706: "CMD_CLASSICFRUIT_SIGNUP_BANKER",
        707: "CMD_CLASSICFRUIT_QUIT_BANKER",
        708: "CMD_CLASSICFRUIT_UPDATE_BANKER_STAT",
        709: "CMD_CLASSICFRUIT_CURBANKERLIST",
        710: "CMD_CLASSICFRUIT_UPDATE_CURBANKER",
        800: "CMD_SHARK_BET_ON",
        801: "CMD_SHARK_ENTERDATA",
        802: "CMD_SHARK_REFRESHDATA",
        803: "CMD_SHARK_ROUND_END",
        804: "CMD_SHARK_REFRESH_SELF_BET",
        805: "CMD_SHARK_HEARTBEAT",
        806: "CMD_SHARK_SIGNUP_BANKER",
        807: "CMD_SHARK_QUIT_BANKER",
        808: "CMD_SHARK_UPDATE_BANKER_STAT",
        809: "CMD_SHARK_CURBANKERLIST",
        810: "CMD_SHARK_UPDATE_CURBANKER",
        811: "CMD_SHARK_BANKER_SETPRIZE",
        901: "CMD_GET_CONLOGIN_GIFT",
        902: "CMD_GET_ONLINETIME_GIFT",
        903: "CMD_RANK_QUERYPAGE",
        904: "CMD_CHAT",
        905: "CMD_CONLOGIN_GIFT",
        906: "CMD_SKIP_NEWERGUIDE",
        907: "CMD_NOTIFY_CHARGE_SUCC",
        908: "CMD_CHANGE_HEADPHOTO",
        909: "CMD_NOTIFY_THROWUP_GOLD",
        910: "CMD_NOTIFY_CHARGESUCC",
        911: "CMD_NOTIFY_EXTCHARGE_TIMER",
        912: "CMD_NEWMSG_TAG",
        913: "CMD_GET_RANKAWARD",
        915: "CMD_PRIZEDRAW_CURINFO",
        916: "CMD_PLAY_PRIZEDRAW",
        917: "CMD_QUERY_MONEYTREE",
        918: "CMD_GATHER_MONEYTREE",
        919: "CMD_MODIFY_NICK",
        920: "CMD_MODIFY_SELFPROP",
        921: "CMD_UPLOAD_HEADPHOTO",
        922: "CMD_ADV_ALIPAY_GIFTPKG",
        923: "CMD_NOTIFY_BEGIN_CHARGE",
        924: "CMD_NOTIFY_UPT_EXTAPP_TIPS",
        925: "CMD_REFRESH_CUR_ONLINETIME_GIFT",
        926: "CMD_RECOMMEND_QUERYPAGE",
        927: "CMD_GET_ME_RECOMM_OTHER_GIFT",
        928: "CMD_GET_OTHER_RECOMM_ME_GIFT",
        929: "CMD_APPSTORE_REPUTATION_STATE",
        930: "CMD_WRITE_APPSTORE_REPUTATION",
        931: "CMD_NOTIFY_APPSTORE_REPUTATION",
        932: "CMD_GET_APPSTORE_REPUTATION_GIFT",
        933: "CMD_HIDDEN_CHARGE_PLATFORM",
        934: "CMD_IS_NEWROLE_REGISTER",
        935: "CMD_QUERY_OTHERROLE_INFO",
        1000: "CMD_CAR_BET_ON",
        1001: "CMD_CAR_ENTERDATA",
        1002: "CMD_CAR_REFRESHDATA",
        1003: "CMD_CAR_ROUND_END",
        1004: "CMD_CAR_REFRESH_SELF_BET",
        1005: "CMD_CAR_HEARTBEAT",
        1006: "CMD_CAR_SIGNUP_BANKER",
        1007: "CMD_CAR_QUIT_BANKER",
        1008: "CMD_CAR_UPDATE_BANKER_STAT",
        1009: "CMD_CAR_CURBANKERLIST",
        1010: "CMD_CAR_UPDATE_CURBANKER",
        1011: "CMD_CAR_BANKER_SETPRIZE",
        1012: "CMD_CAR_BIGWINNERRANK",
        1101: "CMD_GET_MAILLIST",
        1102: "CMD_GET_MAILATTACH",
        1103: "CMD_MAILSTAT_CHANGE",
        1201: "CMD_REQ_BIND_SMSCODE",
        1202: "CMD_CONFIRM_BIND_SMSCODE",
        1203: "CMD_DO_UNBIND_CURMOBILE",
        1204: "CMD_DO_BIND_MOBILE",
        1205: "CMD_DO_REPLACE_ACCOUNT",
        1301: "CMD_VIVO_GEN_ORDER",
        1302: "CMD_NOTIFY_ROUNDINDEXERR",
        1303: "CMD_CHECK_MALLBUY",
        1304: "CMD_UNICOM_GEN_ORDER",
        1305: "CMD_LENOVO_GEN_ORDER",
        1306: "CMD_COMM_MALL_GEN_ORDER",
        1500: "CMD_ZJH_ENTERDATA",
        1501: "CMD_ZJH_BEGIN_ONEGAME",
        1502: "CMD_ZJH_CHANGE_ROOM",
        1503: "CMD_ZJH_UPT_PLAYER_DATA",
        1504: "CMD_ZJH_UPT_TABLE_DATA",
        1505: "CMD_ZJH_END_ONEGAME",
        1506: "CMD_ZJH_PLAYER_ALLDATA",
        1507: "CMD_ZJH_PLAYER_FIRSTROUNDINFO",
        1510: "CMD_ZJH_DO_READY",
        1511: "CMD_ZJH_DO_BET",
        1513: "CMD_ZJH_DO_DISCARD",
        1514: "CMD_ZJH_DO_COMPARE",
        1515: "CMD_ZJH_DO_FORBIDCOMPARE",
        1516: "CMD_ZJH_DO_DOUBLE",
        1517: "CMD_ZJH_DO_VIEWCARD",
        1518: "CMD_ZJH_DO_KICKPLAYER",
        1601: "CMD_PAYCENTER_GEN_ORDER",
        1602: "CMD_PAYCENTER_NOTIFY_SERVER_SUCC",
        1603: "CMD_PAYCENTER_NOTIFY_CLIENT_SUCC",
        1604: "CMD_PAYCENTER_PREPAID_CARD_DOPAY",
        1610: "CMD_GET_CONLOGIN_GIFT_NEWVERSION",
        1611: "CMD_SHANXI_POINTS_EXCHANGE",
        1701: "CMD_BULL_ENTERDATA",
        1702: "CMD_BULL_ROUND_END",
        1703: "CMD_BULL_BET_ON",
        1704: "CMD_BULL_SIGNUP_BANKER",
        1705: "CMD_BULL_QUIT_BANKER",
        1706: "CMD_BULL_CURBANKERLIST",
        1707: "CMD_BULL_HEARTBEAT",
        1708: "CMD_BULL_REFRESHDATA",
        1709: "CMD_BULL_UPDATE_CURBANKER",
        1710: "CMD_BULL_BIGWINNERRANK",
        1711: "CMD_BULL_UPDATE_BANKER_STAT",
        1712: "CMD_BULL_ROUND_START",
        1713: "CMD_BULL_REFRESH_SELF_BET",
        1801: "CMD_APPSTORE_PAYRECEPIT_VERIFY",
        1901: "CMD_GOLDMINER_ENTERDATA",
        1902: "CMD_GOLDMINER_GAME_AGAIN",
        1903: "CMD_GOLDMINER_ONEGRAB_RET",
        1910: "CMD_CHINESEPHRASE_DO_GAME",
        1911: "CMD_CHINESEPHRASE_REFRESH",
        1912: "CMD_CHINESEPHRASE_FINALCOMMIT",
        1913: "CMD_CHINESEPHRASE_PICNOTFOUND",
        1920: "CMD_SINASHOW_MONEY_EXCHANGE_IN_OUT",
        2000: "CMD_LABA_ENTERDATA",
        2001: "CMD_LABA_PLAY_ONE_ROUND",
        2002: "CMD_LABA_REFRESHDATA",
        2003: "CMD_LABA_PLAYER_AWARDINFO",
        2100: "CMD_ITEMSTORE_GETSALEHIS",
        2101: "CMD_ITEMSTORE_DOBUY",
        2102: "CMD_ITEMSTORE_QUERY_BUYLOG",
        2200: "CMD_DO_REFRESH_HALL_VIEW",
        2300: "CMD_GET_BUYUHALL_VERSION_GIFT",
        2301: "CMD_ENTER_BUYUHALL_MOREFUNC",
        2401: "CMD_ZODIAC_ENTERDATA",
        2402: "CMD_ZODIAC_ROUND_END",
        2403: "CMD_ZODIAC_BET_ON",
        2404: "CMD_ZODIAC_SET_BUNCH",
        2405: "CMD_ZODIAC_REFRESHDATA",
        2406: "CMD_ZODIAC_REWARD_NPC_MM",
        2501: "CMD_COWBOY_ENTER_DATA",
        2502: "CMD_COWBOY_UPT_DATA",
        2503: "CMD_COWBOY_BALLOON_BORN",
        2504: "CMD_COWBOY_SHOOT",
        2505: "CMD_COWBOY_HIT_BALLOON",
        2506: "CMD_COWBOY_BALLOON_DEAD",
        2507: "CMD_COWBOY_USE_BOMB",
        2508: "CMD_COWBOY_PRESENT_BOMB",
    };
    CSProto.CMD_ERROR = 101; // 通用提示协议 
    CSProto.CMD_TEST_ECHO = 102; // 测试命令字echo 
    CSProto.CMD_GET_BIN_MD5LIST = 103; // 客户端资源md5列表 
    CSProto.CMD_REQUEST_RES = 104; // 客户端资源请求 
    CSProto.CMD_GM = 105; // 特殊gm请求 
    CSProto.CMD_NOTICE_CMDFAIL = 106; // 额外通知某个命令字执行失败 
    CSProto.CMD_GOLD_NOTENOUGH_ERROR = 107; // 金币不足提示协议 
    CSProto.CMD_COMM_HYPER_MSGBOX = 108; // 尚未实现:带按钮的通用提示框 
    CSProto.CMD_CLICK_HYPER_NOTICE = 109; // 尚未实现:点击了超链接后的上行 
    CSProto.CMD_NOTIFY_BULLETIN = 110; // 通知客户端尝试进行公告弹出暂无对应body 
    CSProto.CMD_CLT_FIN_WRAP = 111; // 客户端已经完全切换到某个场景后上行通知服务器 
    CSProto.CMD_ALOGIN = 200; // 账户登录 
    CSProto.CMD_ALOGOUT = 201; // 账户登出请求 
    CSProto.CMD_PING = 202; // 心跳包 
    CSProto.CMD_KICKOFF_ACCOUNT = 203; // 服务器主动踢账户下线 
    CSProto.CMD_WARP = 204; // 通知帐户登录后所在的场景 
    CSProto.CMD_NTF_ENTERVIEW = 205; // 广播消息,通知周围的人角色进入桌台 
    CSProto.CMD_NTF_LEAVEVIEW = 206; // 广播消息,通知周围的人角色离开桌台 
    CSProto.CMD_SCENE_HISTORY_CHATMSG = 207; // 场景中的历史聊天记录 
    CSProto.CMD_SMART_BEGIN = 208; // 场景中的快速开始按钮 
    CSProto.CMD_NOTIFY_TOPWINNER = 209; // 通知在某个场景中的最大赢家信息 
    CSProto.CMD_ROLE_MISC = 300; // 角色混杂数据 
    CSProto.CMD_ROLE_FIN = 301; // 登录下发的所有角色信息结束 
    CSProto.CMD_ATT_CHANGE = 302; // 角色属性变化通知 
    CSProto.CMD_CAN_BEGIN_SLOT = 403; // 通知成功进入某个机台,可以开始游戏 
    CSProto.CMD_DO_SLOTROUND_BEGIN = 404; // 开始执行一转 
    CSProto.CMD_DO_SLOTROUND_END = 405; // 结束执行一转 
    CSProto.CMD_ADD_SLOTMONEY = 406; // 主动给桌台增加币,增加数量为当前转需要的币,最多增加到3个 
    CSProto.CMD_NOTIFY_SLOTTABDATA = 407; // 通知刷新桌台某些数据,目前主要用于通知桌台币的改变 
    CSProto.CMD_TASK_LIST = 500; // 当前任务列表 
    CSProto.CMD_GET_TASK_AWARD = 501; // 领取任务奖励 
    CSProto.CMD_LOTTERY_BET_ON = 600; // 玩家下注 
    CSProto.CMD_LOTTERY_ENTER = 601; // 进入摩天轮 
    CSProto.CMD_LOTTERY_REFRESHDATA = 602; // 投注过程中刷新数据 
    CSProto.CMD_LOTTERY_ROUND_END = 603; // 通知摩天轮转轮结果 
    CSProto.CMD_LOTTERY_HERORANK = 604; // 摩天轮英豪榜 
    CSProto.CMD_SCENE_ONLINELIST_PAGE = 605; // 场景中的在线帐号列表 
    CSProto.CMD_LOTTERY_REFRESH_SELF_BET = 606; // 当上行的下注请求不能被正确处理时会下行该条协议刷新为真实的下注数据 
    CSProto.CMD_LOTTERY_HISTORY_CHATMSG = 607; // 摩天轮聊天历史数据 
    CSProto.CMD_CLASSICFRUIT_BET_ON = 700; // 经典水果机玩家下注 
    CSProto.CMD_CLASSICFRUIT_ENTERDATA = 701; // 经典水果机进入时的相关数据 
    CSProto.CMD_CLASSICFRUIT_REFRESHDATA = 702; // 经典水果机投注过程中刷新数据 
    CSProto.CMD_CLASSICFRUIT_ROUND_END = 703; // 通知经典水果机转轮结果 
    CSProto.CMD_CLASSICFRUIT_REFRESH_SELF_BET = 704; // 经典水果机投注中当上行的下注请求不能被正确处理时会下行该条协议刷新为真实的下注数据 
    CSProto.CMD_CLASSICFRUIT_HEARTBEAT = 705; // 经典水果机私有心跳当在该场景中且为等待上庄或者己上庄状态时建议5秒发一次 
    CSProto.CMD_CLASSICFRUIT_SIGNUP_BANKER = 706; // 申请上庄 
    CSProto.CMD_CLASSICFRUIT_QUIT_BANKER = 707; // 申请提前下庄当还在队列中的时候也会被踢出队列 
    CSProto.CMD_CLASSICFRUIT_UPDATE_BANKER_STAT = 708; // 通知更新自身的Banker状态 
    CSProto.CMD_CLASSICFRUIT_CURBANKERLIST = 709; // 当前庄家列表进入场景及变化时会下发 
    CSProto.CMD_CLASSICFRUIT_UPDATE_CURBANKER = 710; // 更新当前场子中的庄家信息 
    CSProto.CMD_SHARK_BET_ON = 800; // 鲨鱼玩家下注 
    CSProto.CMD_SHARK_ENTERDATA = 801; // 鲨鱼进入时的相关数据 
    CSProto.CMD_SHARK_REFRESHDATA = 802; // 鲨鱼投注过程中刷新数据 
    CSProto.CMD_SHARK_ROUND_END = 803; // 通知鲨鱼转轮结果 
    CSProto.CMD_SHARK_REFRESH_SELF_BET = 804; // 鲨鱼投注中当上行的下注请求不能被正确处理时会下行该条协议刷新为真实的下注数据 
    CSProto.CMD_SHARK_HEARTBEAT = 805; // 鲨鱼私有心跳当在该场景中且为等待上庄或者己上庄状态时建议5秒发一次 
    CSProto.CMD_SHARK_SIGNUP_BANKER = 806; // 鲨鱼申请上庄 
    CSProto.CMD_SHARK_QUIT_BANKER = 807; // 鲨鱼申请提前下庄当还在队列中的时候也会被踢出队列 
    CSProto.CMD_SHARK_UPDATE_BANKER_STAT = 808; // 鲨鱼通知更新自身的Banker状态 
    CSProto.CMD_SHARK_CURBANKERLIST = 809; // 鲨鱼当前庄家列表进入场景及变化时会下发 
    CSProto.CMD_SHARK_UPDATE_CURBANKER = 810; // 鲨鱼更新当前场子中的庄家信息 
    CSProto.CMD_SHARK_BANKER_SETPRIZE = 811; // 鲨鱼庄家设置下转结果 
    CSProto.CMD_GET_CONLOGIN_GIFT = 901; // 领取连续登录礼包 
    CSProto.CMD_GET_ONLINETIME_GIFT = 902; // 领取在线时间礼包 
    CSProto.CMD_RANK_QUERYPAGE = 903; // 查询排行榜分页 
    CSProto.CMD_CHAT = 904; // 消息频道聊天,包括系统频道 
    CSProto.CMD_CONLOGIN_GIFT = 905; // 可领取的连续登录礼包 
    CSProto.CMD_SKIP_NEWERGUIDE = 906; // 跳过新手引导 
    CSProto.CMD_NOTIFY_CHARGE_SUCC = 907; // 客户端通知服务器充值成功,目前仅用于LOG对帐 
    CSProto.CMD_CHANGE_HEADPHOTO = 908; // 改变当前头像 
    CSProto.CMD_NOTIFY_THROWUP_GOLD = 909; // 该协议暂时己废弃,调整为客户端自行处理,通知表演桌台吐币 
    CSProto.CMD_NOTIFY_CHARGESUCC = 910; // 服务器通知客户端充值成功尼玛居然和之前的CMD名字取得这么像 
    CSProto.CMD_NOTIFY_EXTCHARGE_TIMER = 911; // 通知开始充值额外奖励优惠的倒计时 
    CSProto.CMD_NEWMSG_TAG = 912; // 上行清除打点系统标记,下行则是通知当前打点列表 
    CSProto.CMD_GET_RANKAWARD = 913; // 领取排行奖励 
    CSProto.CMD_PRIZEDRAW_CURINFO = 915; // 登录后服务器主动下发的当前抽奖相关状况 
    CSProto.CMD_PLAY_PRIZEDRAW = 916; // 进行抽奖 
    CSProto.CMD_QUERY_MONEYTREE = 917; // 进入相应界面时查询摇钱树信息 
    CSProto.CMD_GATHER_MONEYTREE = 918; // 收获摇钱树上的金币 
    CSProto.CMD_MODIFY_NICK = 919; // 修改昵称but目前后台还没有判断唯一性 
    CSProto.CMD_MODIFY_SELFPROP = 920; // 修改性别等属性 
    CSProto.CMD_UPLOAD_HEADPHOTO = 921; // 上传头像 
    CSProto.CMD_ADV_ALIPAY_GIFTPKG = 922; // 通知客户端展示支付宝礼包 
    CSProto.CMD_NOTIFY_BEGIN_CHARGE = 923; // 通知服务器在某个场景发起的支付请求 
    CSProto.CMD_NOTIFY_UPT_EXTAPP_TIPS = 924; // 通知退出APP时提示内容 
    CSProto.CMD_REFRESH_CUR_ONLINETIME_GIFT = 925; // 刷新当前在线时间礼包相关状态数据 
    CSProto.CMD_RECOMMEND_QUERYPAGE = 926; // 摘取推荐列表 
    CSProto.CMD_GET_ME_RECOMM_OTHER_GIFT = 927; // 领取因为我推荐了别人进入游戏获得的金币礼包 
    CSProto.CMD_GET_OTHER_RECOMM_ME_GIFT = 928; // 领取因为别人推荐了我进入游戏获得的金币礼包 
    CSProto.CMD_APPSTORE_REPUTATION_STATE = 929; // 通知客户端在AppStore写评价的状态 
    CSProto.CMD_WRITE_APPSTORE_REPUTATION = 930; // 在AppStore上给了评价 
    CSProto.CMD_NOTIFY_APPSTORE_REPUTATION = 931; // 提示用户在AppStore上写好评 
    CSProto.CMD_GET_APPSTORE_REPUTATION_GIFT = 932; // 领取AppStore好评奖励 
    CSProto.CMD_HIDDEN_CHARGE_PLATFORM = 933; // 隐藏充值平台 
    CSProto.CMD_IS_NEWROLE_REGISTER = 934; // 通知该次登录是新用户注册 
    CSProto.CMD_QUERY_OTHERROLE_INFO = 935; // 查询用户离线数据5分钟以内的在线修改信息可能更新不及时 
    CSProto.CMD_CAR_BET_ON = 1000; // 车行玩家下注 
    CSProto.CMD_CAR_ENTERDATA = 1001; // 车行进入时的相关数据 
    CSProto.CMD_CAR_REFRESHDATA = 1002; // 车行投注过程中刷新数据 
    CSProto.CMD_CAR_ROUND_END = 1003; // 车行鲨鱼转轮结果 
    CSProto.CMD_CAR_REFRESH_SELF_BET = 1004; // 车行投注中当上行的下注请求不能被正确处理时会下行该条协议刷新为真实的下注数据 
    CSProto.CMD_CAR_HEARTBEAT = 1005; // 车行私有心跳当在该场景中且为等待上庄或者己上庄状态时建议5秒发一次 
    CSProto.CMD_CAR_SIGNUP_BANKER = 1006; // 车行申请上庄 
    CSProto.CMD_CAR_QUIT_BANKER = 1007; // 车行申请提前下庄当还在队列中的时候也会被踢出队列 
    CSProto.CMD_CAR_UPDATE_BANKER_STAT = 1008; // 车行通知更新自身的Banker状态 
    CSProto.CMD_CAR_CURBANKERLIST = 1009; // 车行当前庄家列表进入场景及变化时会下发 
    CSProto.CMD_CAR_UPDATE_CURBANKER = 1010; // 车行更新当前场子中的庄家信息 
    CSProto.CMD_CAR_BANKER_SETPRIZE = 1011; // 车行庄家设置下转结果 
    CSProto.CMD_CAR_BIGWINNERRANK = 1012; // 车行大赢家榜 
    CSProto.CMD_GET_MAILLIST = 1101; // 获取邮件列表信息 
    CSProto.CMD_GET_MAILATTACH = 1102; // 获取邮件的附件 
    CSProto.CMD_MAILSTAT_CHANGE = 1103; // 通知服务器邮件变为己读等等状态的变更 
    CSProto.CMD_REQ_BIND_SMSCODE = 1201; // 申请获取绑定手机的验证码 
    CSProto.CMD_CONFIRM_BIND_SMSCODE = 1202; // 输入验证绑定手机的验证码 
    CSProto.CMD_DO_UNBIND_CURMOBILE = 1203; // 解绑当前手机绑定的手机号码 
    CSProto.CMD_DO_BIND_MOBILE = 1204; // 执行操作绑定输入的手机号码 
    CSProto.CMD_DO_REPLACE_ACCOUNT = 1205; // 执行帐号迁移操作 
    CSProto.CMD_VIVO_GEN_ORDER = 1301; // VIVO生成订单 
    CSProto.CMD_NOTIFY_ROUNDINDEXERR = 1302; // 上报因roundid不一致被踢出场次的数据 
    CSProto.CMD_CHECK_MALLBUY = 1303; // 支付前检查是否能进行该支付 
    CSProto.CMD_UNICOM_GEN_ORDER = 1304; // 联通生成内部支付订单 
    CSProto.CMD_LENOVO_GEN_ORDER = 1305; // 联想生成内部支付订单 
    CSProto.CMD_COMM_MALL_GEN_ORDER = 1306; // 通用生成内部支付订单协议目前从海马开始接入 
    CSProto.CMD_ZJH_ENTERDATA = 1500; // 扎金花进入时的相关数据 
    CSProto.CMD_ZJH_BEGIN_ONEGAME = 1501; // 扎金花房间通知一局开始发牌 
    CSProto.CMD_ZJH_CHANGE_ROOM = 1502; // 扎金花更换房间 
    CSProto.CMD_ZJH_UPT_PLAYER_DATA = 1503; // 扎金花服务器通知客户端桌台上某个玩家状态等数据变更 
    CSProto.CMD_ZJH_UPT_TABLE_DATA = 1504; // 扎金花服务器通知客户端桌台数据刷新 
    CSProto.CMD_ZJH_END_ONEGAME = 1505; // 扎金花服务器通知客户端一局比赛结束 
    CSProto.CMD_ZJH_PLAYER_ALLDATA = 1506; // 扎金花进入时的客户端玩家全量数据 
    CSProto.CMD_ZJH_PLAYER_FIRSTROUNDINFO = 1507; // 该协议暂时废弃:扎金花某玩家在桌上玩的第一局相关信息通知 
    CSProto.CMD_ZJH_DO_READY = 1510; // 扎金花玩家准备 
    CSProto.CMD_ZJH_DO_BET = 1511; // 扎金花玩家跟注或加注 
    CSProto.CMD_ZJH_DO_DISCARD = 1513; // 扎金花玩家弃牌 
    CSProto.CMD_ZJH_DO_COMPARE = 1514; // 扎金花玩家比牌 
    CSProto.CMD_ZJH_DO_FORBIDCOMPARE = 1515; // 扎金花玩家禁比 
    CSProto.CMD_ZJH_DO_DOUBLE = 1516; // 扎金花玩家加倍 
    CSProto.CMD_ZJH_DO_VIEWCARD = 1517; // 扎金花玩家看牌 
    CSProto.CMD_ZJH_DO_KICKPLAYER = 1518; // 扎金花踢人 
    CSProto.CMD_PAYCENTER_GEN_ORDER = 1601; // 游戏内自有支付中心生成内部CP支付订单协议目前仅支持部分支付平台方式 
    CSProto.CMD_PAYCENTER_NOTIFY_SERVER_SUCC = 1602; // 客户端收到第三方支付中心支付成功的回调后立刻通知到服务器以便对帐 
    CSProto.CMD_PAYCENTER_NOTIFY_CLIENT_SUCC = 1603; // 服务器收到第三方支付中心支付成功并发货后通知到客户端 
    CSProto.CMD_PAYCENTER_PREPAID_CARD_DOPAY = 1604; // 预付卡填入卡号密码后确认支付 
    CSProto.CMD_GET_CONLOGIN_GIFT_NEWVERSION = 1610; // 新版本的领取连续登录礼包 
    CSProto.CMD_SHANXI_POINTS_EXCHANGE = 1611; // 陕西积分活动兑换 
    CSProto.CMD_BULL_ENTERDATA = 1701; // 进入牛牛场的数据 
    CSProto.CMD_BULL_ROUND_END = 1702; // 通知牛牛转轮结果 
    CSProto.CMD_BULL_BET_ON = 1703; // 牛牛玩家下注 
    CSProto.CMD_BULL_SIGNUP_BANKER = 1704; // 牛牛玩家申请上庄 
    CSProto.CMD_BULL_QUIT_BANKER = 1705; // 牛牛玩家申请提前下庄 
    CSProto.CMD_BULL_CURBANKERLIST = 1706; // 牛牛场当前庄家列表 
    CSProto.CMD_BULL_HEARTBEAT = 1707; // 牛牛场庄家心跳 
    CSProto.CMD_BULL_REFRESHDATA = 1708; // 牛牛场数据刷新 
    CSProto.CMD_BULL_UPDATE_CURBANKER = 1709; // 牛牛更新当前场子中的庄家信息 
    CSProto.CMD_BULL_BIGWINNERRANK = 1710; // 牛牛行大赢家榜 
    CSProto.CMD_BULL_UPDATE_BANKER_STAT = 1711; // 牛牛通知更新自身的Banker状态 
    CSProto.CMD_BULL_ROUND_START = 1712; // 牛牛场一轮开始 
    CSProto.CMD_BULL_REFRESH_SELF_BET = 1713; // 牛牛投注中当上行的下注请求不能被正确处理时会下行该条协议刷新为真实的下注数据 
    CSProto.CMD_APPSTORE_PAYRECEPIT_VERIFY = 1801; // 未完成苹果支付成功后返回的支付订单数据较验 
    CSProto.CMD_GOLDMINER_ENTERDATA = 1901; // 黄金矿工进入时的相关数据 
    CSProto.CMD_GOLDMINER_GAME_AGAIN = 1902; // 黄金矿工再来新的一局 
    CSProto.CMD_GOLDMINER_ONEGRAB_RET = 1903; // 黄金矿工上报一次抓取的结果 
    CSProto.CMD_CHINESEPHRASE_DO_GAME = 1910; // 成语任务开始 
    CSProto.CMD_CHINESEPHRASE_REFRESH = 1911; // 成语任务刷新成语 
    CSProto.CMD_CHINESEPHRASE_FINALCOMMIT = 1912; // 成语任务上报选择结果 
    CSProto.CMD_CHINESEPHRASE_PICNOTFOUND = 1913; // 成语任务客户端发现某个图片不存在时上行通知服务器 
    CSProto.CMD_SINASHOW_MONEY_EXCHANGE_IN_OUT = 1920; // 新浪秀场货币兑入为游戏币或者将游戏币兑出为新浪秀场货币 
    CSProto.CMD_LABA_ENTERDATA = 2000; // 拉霸进入时的相关数据 
    CSProto.CMD_LABA_PLAY_ONE_ROUND = 2001; // 拉霸开始一局转动 
    CSProto.CMD_LABA_REFRESHDATA = 2002; // 拉霸投注过程中刷新数据 
    CSProto.CMD_LABA_PLAYER_AWARDINFO = 2003; // 拉霸房间内中奖信息广播数据 
    CSProto.CMD_ITEMSTORE_GETSALEHIS = 2100; // 获取当前的销售数据 
    CSProto.CMD_ITEMSTORE_DOBUY = 2101; // 物品商城购买 
    CSProto.CMD_ITEMSTORE_QUERY_BUYLOG = 2102; // 查询购买历史 
    CSProto.CMD_DO_REFRESH_HALL_VIEW = 2200; // 根据游戏大厅功能显示掩码刷新大厅显示 
    CSProto.CMD_GET_BUYUHALL_VERSION_GIFT = 2300; // 领取捕鱼大厅版本的礼包 
    CSProto.CMD_ENTER_BUYUHALL_MOREFUNC = 2301; // 捕鱼大厅点击了进入了更多游戏按钮 
    CSProto.CMD_ZODIAC_ENTERDATA = 2401; // 星座进入场的数据 
    CSProto.CMD_ZODIAC_ROUND_END = 2402; // 星座通知转轮结果 
    CSProto.CMD_ZODIAC_BET_ON = 2403; // 星座玩家下注 
    CSProto.CMD_ZODIAC_SET_BUNCH = 2404; // 星座玩家设置串2、串3数据 
    CSProto.CMD_ZODIAC_REFRESHDATA = 2405; // 星座场数据刷新 
    CSProto.CMD_ZODIAC_REWARD_NPC_MM = 2406; // 星座打赏幸运连连游戏中的NPC妹子 
    CSProto.CMD_COWBOY_ENTER_DATA = 2501; // 气球场入场数据 
    CSProto.CMD_COWBOY_UPT_DATA = 2502; // 场景更新数据比如当从白天变到黑夜等状态变更或者是特殊气球进度发生变更等等 
    CSProto.CMD_COWBOY_BALLOON_BORN = 2503; // 新气球出生 
    CSProto.CMD_COWBOY_SHOOT = 2504; // 发射子弹该协议己暂时废弃 
    CSProto.CMD_COWBOY_HIT_BALLOON = 2505; // 命中了某个气球 
    CSProto.CMD_COWBOY_BALLOON_DEAD = 2506; // 广播同步房间内某个气球被击中并爆炸(包括玩家自身命中的) 
    CSProto.CMD_COWBOY_USE_BOMB = 2507; // 使用炸弹 
    CSProto.CMD_COWBOY_PRESENT_BOMB = 2508; // 赠送炸弹 
    //enum export
    CSProto.Version = 36; // 当前协议版本号 
    CSProto.LOGINRESULT_SUCCESS = 0; // 登录成功 
    CSProto.LOGINRESULT_MUSTUPDATE = 1; // 强制升级 
    CSProto.LOGINRESULT_SUGGESTUPDATE = 2; // 建议升级 
    CSProto.LOGINRESULT_ROLEONLINE = 3; // 角色在线 
    CSProto.LOGINRESULT_FASTLOGINFAIL = 4; // 快速登录失败 
    CSProto.LOGINRESULT_SERVERSTOP = 5; // 服务器正在停服 
    CSProto.LOGINRESULT_CANNOT_TASTE = 6; // 不允许进入体验服 
    CSProto.LOGINRESULT_CANNOT_ORDIN = 7; // 不允许进入非体验服 
    CSProto.LOGINRESULT_TOUCHMAXACCOUNT = 8; // 服务器己满 
    CSProto.LOGINRESULT_NOTINWHITELIST = 9; // 不在白名单,无资格进入服务器 
    CSProto.LOGINRESULT_COMMFAIL = 10; // 通用登录失败错误码，建议描述写得模糊点 
    CSProto.TOO_LONG_WAIT = 1; // 超时 
    CSProto.DUPLICATE_ACCOUNT = 2; // 角色顶号 
    CSProto.BAN_ACCOUNT = 3; // 角色封号 
    CSProto.NET_PROBLEM = 4; // 网络不稳定 
    CSProto.ROLE_LEAVE = 5; // 角色非正常离开 
    CSProto.SERVER_NOT_OPEN = 6; // 服务器未开放 
    CSProto.SERVER_REACH_LIMIT = 7; // 服务器达到人数限制 
    CSProto.MOVE_TOO_FAST = 9; // 角色移动过快 
    CSProto.REACH_FREQUENCY_LIMIT = 10; // 上行包超过频率 
    CSProto.VERSION_NOT_MATCH = 11; // 版本不匹配 
    CSProto.PLAYER_SERVER_STOP = 12; // 服务器关服 
    CSProto.PLAYER_AUTH_FAILED = 13; // 输入验证失败 
    CSProto.MAIN_TASK_NOTMATCH = 14; // 客户端主线任务状态与服务器不一致 
    CSProto.BIND_REPLACE_SUCC = 15; // 绑定手机成功,请重新登录 
    CSProto.OBJNONE = 0; // 空类型 
    CSProto.OBJACCOUNT = 1; // 账户类型结构 
    CSProto.OBJPLAYER = 2; // 用户类型 
    CSProto.OBJMONSTER = 3; // 怪物类型 
    CSProto.OBJITEM = 4; // 道具类型结构 
    CSProto.OBJROLEPROP = 5; // 角色属性的抽象 
    CSProto.FUNC_MODULE_SLOT = 0x1; // 鬼武三国老虎机 
    CSProto.FUNC_MODULE_BIG_LOTTERY = 0x2; // 幸运大风车所有场次 
    CSProto.FUNC_MODULE_CLASSICFRUIT_NORMAL = 0x4; // 经典水果机所有场次 
    CSProto.FUNC_MODULE_SHARK_SET = 0x8; // 金鲨银鲨摆庄场 
    CSProto.FUNC_MODULE_CAR_SET = 0x10; // 奔驰宝马所有场次 
    CSProto.FUNC_MODULE_NOSET_SHARK = 0x20; // 金鲨银鲨非摆庄场 
    CSProto.FUNC_MODULE_ZJH = 0x40; // 扎金花所有场次 
    CSProto.FUNC_MODULE_BULL = 0x80; // 百人牛牛所有场次 
    CSProto.FUNC_MODULE_CUSTOM_SERVICE = 0x100; // 迷你模块:客服 
    CSProto.FUNC_MODULE_AWARD = 0x200; // 迷你模块:奖励 
    CSProto.FUNC_MODULE_RANDOM_PRIZE = 0x400; // 迷你模块:抽奖 
    CSProto.FUNC_MODULE_GOLD_TREE = 0x800; // 迷你模块:摇钱树 
    CSProto.FUNC_MODULE_VIP_ENTRY = 0x1000; // 迷你模块:VIP 
    CSProto.FUNC_MODULE_HALL = 0x2000; // 底部导航:大厅 
    CSProto.FUNC_MODULE_SHOP = 0x4000; // 底部导航:商店 
    CSProto.FUNC_MODULE_ACTIVITY = 0x8000; // 底部导航:活动 
    CSProto.FUNC_MODULE_RANK = 0x10000; // 底部导航:排行 
    CSProto.FUNC_MODULE_MOREFUNC = 0x20000; // 底部导航:更多 
    CSProto.FUNC_MODULE_MAIL = 0x40000; // 迷你模块:邮件 
    CSProto.FUNC_MODULE_MOREF_BINDMOBILE = 0x80000; // 迷你模块的子模块:绑定手机 
    CSProto.FUNC_MODULE_RECOMMEND = 0x100000; // 迷你模块:推荐 
    CSProto.FUNC_MODULE_GOLDMINER = 0x1000000; // 黄金矿工所有场次 
    CSProto.FUNC_MODULE_GMONLY = 0x2000000; // GM所有场次 
    CSProto.FUNC_MODULE_CHAT = 0x4000000; // 聊天 
    CSProto.FUNC_MODULE_QUICKSTART = 0x8000000; // 快速开始 
    CSProto.FUNC_MODULE_DOWNLOAD = 0x10000000; // 下载 
    CSProto.FUNC_MODULE_REPUTATION = 0x20000000; // 评论 
    CSProto.FUNC_MODULE_DISABLE_QUICKPAY = 0x40000000; // 禁用快速支付 
    CSProto.FUNC_MODULE_CATCHFISH = 0x100000000; // 捕鱼所有场次 
    CSProto.FUNC_MODULE_LABA = 0x200000000; // 拉霸所有场次 
    CSProto.FUNC_MODULE_SHOP_DIAMOND = 0x400000000; // 底部导航:商店中的钻石购买 
    CSProto.FUNC_MODULE_HAPPY_MEINV_SHOW = 0x800000000; // 欢乐美女秀场次 
    CSProto.FUNC_MODULE_SPECIAL_MOREGAME = 0x1000000000; // 特殊捕鱼版本中的更多 
    CSProto.FUNC_MODULE_BUYUHALL = 0x2000000000; // 特殊捕鱼版本中的捕鱼大厅若标记关闭状态则显示原始完整游戏大厅 
    CSProto.FUNC_MODULE_BUYUHALL_GIFTPKG = 0x4000000000; // 特殊捕鱼版本中的捕鱼大厅的弹出礼包 
    CSProto.FUNC_MODULE_ZJH_PRIVATE = 0x8000000000; // 扎金花中的贵宾厅 
    CSProto.FUNC_MODULE_ZODIAC = 0x10000000000; // 星座场普通场 
    CSProto.FUNC_MODULE_COWBOY = 0x20000000000; // 气球普通场 
    CSProto.BITPOS_FUNC_MODULE_SLOT = 0; // 鬼武三国老虎机 
    CSProto.BITPOS_FUNC_MODULE_BIG_LOTTERY = 1; // 幸运大风车所有场次 
    CSProto.BITPOS_FUNC_MODULE_CLASSICFRUIT_NORMAL = 2; // 经典水果机所有场次 
    CSProto.BITPOS_FUNC_MODULE_SHARK_SET = 3; // 金鲨银鲨摆庄场 
    CSProto.BITPOS_FUNC_MODULE_CAR_SET = 4; // 奔驰宝马所有场次 
    CSProto.BITPOS_FUNC_MODULE_NOSET_SHARK = 5; // 金鲨银鲨非摆庄场 
    CSProto.BITPOS_FUNC_MODULE_ZJH = 6; // 扎金花所有场次 
    CSProto.BITPOS_FUNC_MODULE_BULL = 7; // 百人牛牛所有场次 
    CSProto.BITPOS_FUNC_MODULE_CUSTOM_SERVICE = 8; // 迷你模块:客服 
    CSProto.BITPOS_FUNC_MODULE_AWARD = 9; // 迷你模块:奖励 
    CSProto.BITPOS_FUNC_MODULE_RANDOM_PRIZE = 10; // 迷你模块:抽奖 
    CSProto.BITPOS_FUNC_MODULE_GOLD_TREE = 11; // 迷你模块:摇钱树 
    CSProto.BITPOS_FUNC_MODULE_VIP_ENTRY = 12; // 迷你模块:VIP 
    CSProto.BITPOS_FUNC_MODULE_HALL = 13; // 底部导航:大厅 
    CSProto.BITPOS_FUNC_MODULE_SHOP = 14; // 底部导航:商店 
    CSProto.BITPOS_FUNC_MODULE_ACTIVITY = 15; // 底部导航:活动 
    CSProto.BITPOS_FUNC_MODULE_RANK = 16; // 底部导航:排行 
    CSProto.BITPOS_FUNC_MODULE_MOREFUNC = 17; // 底部导航:更多 
    CSProto.BITPOS_FUNC_MODULE_MAIL = 18; // 迷你模块:邮件 
    CSProto.BITPOS_FUNC_MODULE_MOREF_BINDMOBILE = 19; // 迷你模块的子模块:绑定手机 
    CSProto.BITPOS_FUNC_MODULE_RECOMMEND = 20; // 迷你模块:推荐 
    CSProto.BITPOS_FUNC_MODULE_GOLDMINER = 24; // 黄金矿工所有场次 
    CSProto.BITPOS_FUNC_MODULE_GMONLY = 25; // GM所有场次 
    CSProto.BITPOS_FUNC_MODULE_CHAT = 26; // 聊天 
    CSProto.BITPOS_FUNC_MODULE_QUICKSTART = 27; // 快速开始 
    CSProto.BITPOS_FUNC_MODULE_DOWNLOAD = 28; // 下载 
    CSProto.BITPOS_FUNC_MODULE_REPUTATION = 29; // 评论 
    CSProto.BITPOS_FUNC_MODULE_DISABLE_QUICKPAY = 30; // 禁用快速支付 
    CSProto.BITPOS_FUNC_MODULE_CATCHFISH = 32; // 捕鱼所有场次 
    CSProto.BITPOS_FUNC_MODULE_LABA = 33; // 拉霸所有场次 
    CSProto.BITPOS_FUNC_MODULE_SHOP_DIAMOND = 34; // 底部导航:商店中的钻石购买 
    CSProto.BITPOS_FUNC_MODULE_HAPPY_MEINV_SHOW = 35; // 欢乐美女秀场次 
    CSProto.BITPOS_FUNC_MODULE_SPECIAL_MOREGAME = 36; // 特殊捕鱼版本中的更多 
    CSProto.BITPOS_FUNC_MODULE_BUYUHALL = 37; // 特殊捕鱼版本中的捕鱼大厅若标记关闭状态则显示原始完整游戏大厅 
    CSProto.BITPOS_FUNC_MODULE_BUYUHALL_GIFTPKG = 38; // 特殊捕鱼版本中的捕鱼大厅的弹出礼包 
    CSProto.BITPOS_FUNC_MODULE_ZJH_PRIVATE = 39; // 扎金花中的贵宾厅 
    CSProto.BITPOS_FUNC_MODULE_ZODIAC = 40; // 星座场普通场 
    CSProto.BITPOS_FUNC_MODULE_COWBOY = 41; // 气球场普通场 
    CSProto.PAYWAY_UNKNOWN = 0; // 未知的 
    CSProto.PAYWAY_ALIPAY = 1; // 支付宝 
    CSProto.PAYWAY_WIIPAY_SMS = 2; // 微派短信 
    CSProto.PAYWAY_OTHER = 3; // 银联或者充值卡等 
    CSProto.PAYWAY_MM_SMS = 4; // 移动MM短信 
    CSProto.PAYWAY_VIVO = 5; // VIVO 
    CSProto.PAYWAY_LENOVO = 6; // LENOVO 
    CSProto.PAYWAY_HAIMA = 7; // HAIMA 
    CSProto.LIFEATT_BEGIN = 0; // 开始,仅占位,没有实际使用 
    CSProto.LIFEATT_LEVEL = 1; // 人物等级 
    CSProto.LIFEATT_GOLD = 2; // 金币 
    CSProto.LIFEATT_SEX = 3; // 性别 
    CSProto.LIFEATT_DIAMOND = 4; // 钻石 
    CSProto.LIFEATT_EXP = 5; // 经验 
    CSProto.LIFEATT_HEADPHOTO = 6; // 头像 
    CSProto.LIFEATT_VIPLEVEL = 7; // VIP等级 
    CSProto.LIFEATT_SLOT_RELATEGOLD = 8; // 桌台上左侧液晶屏显示的金币数 
    CSProto.LIFEATT_MAXEXP = 9; // 升级所需经验 
    CSProto.LIFEATT_HASFINISH_NEWGUIDE = 10; // 是否已完成新手引导1己完成0未完成 
    CSProto.LIFEATT_VIPEXP = 11; // VIP当前经验 
    CSProto.LIFEATT_MAXVIPEXP = 12; // VIP升级所需经验 
    CSProto.LIFEATT_LASHTCHARGETIME = 13; // 上次充值时间,为0则从来没有充过 
    CSProto.LIFEATT_CHARGE_ACT_BEGINTIME = 14; // 限时充值活动上次倒计时开始时间,当为0时需要通知倒计时开始,否则不用 
    CSProto.LIFEATT_CHARGE_ACT_LEFTTIME = 15; // 限时充值活动上次倒计时剩余秒数,当不为0时显示倒计时,该值仅当收到金币不足的错误码下行后才是正确值 
    CSProto.LIFEATT_FUNC_SWITCH = 16; // 各可开关功能的列表mask或值,相应位置为1表明关闭,具体参见枚举定义FUNC_MODULE_SLOT等 
    CSProto.LIFEATT_ROLE_BORNID = 17; // 角色数字类型的出生ID 
    CSProto.LIFEATT_BEBANKER_RCOUNT = 18; // 坐庄总局数 
    CSProto.LIFEATT_BANKER_CRUPTCOUNT = 19; // 爆庄总次数 
    CSProto.LIFEATT_GOT_BAR_COUNT = 20; // 获得BAR个数 
    CSProto.LIFEATT_GOT_7_COUNT = 21; // 获得大奖7个数 
    CSProto.LIFEATT_TODAY_CHARGE_TOTAL = 22; // 本日己充值钱数 
    CSProto.LIFEATT_ALIPAY_GIFTPKG_BUY = 23; // 支付宝或者vivo等超值礼包是否己购买, 0未购买, 其他己购买 
    CSProto.LIFEATT_LAST_PAYWAYTYPE = 24; // 上次支付方式类型参见PAYWAY_ALIPAY等的定义 
    CSProto.LIFEATT_APPSTORE_REPUTATION_STATE = 25; // 在AppStore上评论的状态 
    CSProto.LIFEATT_SINASHOW_MONEY = 26; // 在sinashow客户端中的秀币余额 
    CSProto.LIFEATT_LEAFGOLD = 27; // 金叶子 
    CSProto.LIFEATT_BUYULVL = 28; // 捕鱼等级 
    CSProto.LIFEATT_TALKINGDATA_ACCTYPE = 29; // 客户端TD激活上报方式:0上报原来的tdid,1上报角色BORNID 
    CSProto.LIFEATT_BUYUHALL_GIFTPKG_STAT = 30; // 捕鱼大厅客户端相应礼包状态:0未领取1己领取 
    CSProto.LIFEATT_BOMB_LVL_11 = 31; // 89式手雷 
    CSProto.LIFEATT_BOMB_LVL_12 = 32; // 91式手雷 
    CSProto.LIFEATT_BOMB_LVL_13 = 33; // 核子炸弹 
    CSProto.LIFEATT_MAXVAL = 255; // 最大值 
    CSProto.BAG = 1; // 背包 
    CSProto.STORE = 2; // 仓库 
    CSProto.WEAR = 3; // 装备 
    CSProto.BIND_TYPE_NONE = 0; // 不绑定 
    CSProto.BIND_TYPE_EQUIP = 1; // 装备绑定 
    CSProto.BIND_TYPE_GET = 2; // 获得绑定 
    CSProto.VAR_TYPE_STRING = 1; // 字符串 
    CSProto.VAR_TYPE_INT = 2; // 整形 
    CSProto.VAR_TYPE_BYTE = 3; // 无符号字符 
    CSProto.VAR_TYPE_UINT = 4; // 无符号整形变量 
    CSProto.MONEY_TYPE_GOLD = 1; // 金币 
    CSProto.MONEY_TYPE_DIAMOND = 2; // 钻石 
    CSProto.MONEY_TYPE_LEAFGOLD = 3; // 金叶子 
    CSProto.MAX_ERROR_MSG_LEN = 2048; // 错误消息最大长度 
    CSProto.MAX_ALOGIN_HINTMSG_LEN = 2048; // Alogin提示消息最大长度 
    CSProto.MAX_ACCOUNT_LEN = 136; // 帐号最大长度 
    CSProto.MAX_ROLE_NAME_LEN = 21; // 名字最大长度 
    CSProto.MAX_ROLE_COUNT = 3; // 角色最大个数 
    CSProto.MAX_TASK_PAGE_SIZE = 6; // 任务页最大个数 
    CSProto.MAX_SEND_PACK_SIZE = 30; // 一次最多发送的物品数量 
    CSProto.MAX_BAG_SIZE = 64; // 背包最大格子数 
    CSProto.MAX_AWARD_SIZE = 10; // 最大奖励数目 
    CSProto.MAX_STORE_SIZE = 100; // 仓库最大格子数 
    CSProto.MAX_MINIMALL_SIZE = 8; // 随身仓库最大格子数 
    CSProto.MAX_WEAR_SIZE = 10; // 最大装备个数 
    CSProto.MAX_TASK_NAME = 48; // 任务名最大长度 
    CSProto.MAX_TASK_DESC = 128; // 任务描述最大长度 
    CSProto.MAX_HYPEROBJ_NUM = 3; // 最大超链接物件个数 
    CSProto.MAX_HYPERLINK_LEN = 300; // 一段完整的超链接文本长度，包含超链接地址在内 
    CSProto.MAX_HYPERLINK_COMMAND_LEN = 100; // 一条超链接地址最大长度 
    CSProto.MAX_DOWNLOAD_PKG_DATA = 1000; // 单包所含最大资源长度 
    CSProto.MAX_BIN_LIST_LEN = 30; // 最多同时获取的Bin的数量 
    CSProto.MAX_REQUEST_RES_COUNT = 15; // 最大下载的资源包数 
    CSProto.MAX_MD5CODE_LEN = 33; // MD5码长度 
    CSProto.MAX_SLOTTABLE_STORE_MONEY = 3; // 桌台上最大存储的币 
    CSProto.MAX_RANK_LIST_SIZE = 8; // 排行列表最大长度 
    CSProto.MAX_CHAT_MSG_LEN = 4096; // 聊天信息的最大长度 
    CSProto.MAX_LOTTERY_HERORANK_LIST_SIZE = 10; // 摩天轮英豪榜排行列表最大长度 
    CSProto.MAX_LOTTERY_SCENE_HISPRIZE_LEN = 6; // 摩天轮历史开奖最大长度 
    CSProto.MAX_ONLINERANK_LIST_SIZE = 8; // 在线列表最大长度 
    CSProto.MAX_HISCHAT_LIST_SIZE = 10; // 历史聊天记录最大长度 
    CSProto.MAX_CLASSICFRUIT_SCENE_HISPRIZE_LEN = 6; // 经典水果机历史开奖最大长度 
    CSProto.MAX_NEWMSGTAG_LIST_LEN = 20; // 打点系统打点列表最大长度 
    CSProto.MAX_ROLE_SELFDEF_PHOTO_LEN = 256; // 自定义头像地址最大长度 
    CSProto.MAX_DRAWPIZEEHIS_LIST_LEN = 20; // 抽奖历史最大长度 
    CSProto.MAX_MOBILE_LEN = 21; // 手机号最大长度 
    CSProto.MAX_ROLE_SELFDEF_PIC_SIZE = 20480; // 上传头像最大大小 
    CSProto.MAX_SHARK_SCENE_HISPRIZE_LEN = 8; // 鲨鱼场历史开奖最大长度 
    CSProto.MAX_SHARK_BETON_LEN = 12; // 鲨鱼场下注列表最大长度 
    CSProto.MAX_ALOGIN_CAHNNLE_LEN = 64; // 渠道号最大长度 
    CSProto.MAX_DOWNLOAD_LINK_LEN = 1024; // 最大下载地址长度 
    CSProto.MAX_CAR_SCENE_HISPRIZE_LEN = 8; // 车行历史开奖最大长度 
    CSProto.MAX_CAR_BETON_LEN = 8; // 车行下注列表最大长度 
    CSProto.MAX_RECOMMED_LIST_SIZE = 8; // 推荐列表最大长度 
    CSProto.MAX_BULL_SCENE_HISRESULT_LEN = 10; // 牛牛场历史结果最大长度 
    CSProto.MAX_BULL_BETON_LEN = 4; // 牛牛场下注列表最大长度 
    CSProto.MAX_BULL_BAKER_QUEUE_LEN = 15; // 庄家队列最大长度 
    CSProto.MAX_MAIL_LIST_COUNT = 6; // 邮件列表最大长度 
    CSProto.MAX_MAIL_RECV_COUNT = 100; // 收件箱最大邮件数 
    CSProto.MAX_MAIL_SEND_COUNT = 50; // 暂不支持:发件箱最大邮件数 
    CSProto.MAX_MAIL_CONTENT_LEN = 1024; // 邮件内容数组最大长度 
    CSProto.MAX_MAIL_TITLE_LEN = 64; // 邮件标题数组最大长度 
    CSProto.MAX_MAIL_ATTACH_COUNT = 5; // 邮件附件列表数组最大个数 
    CSProto.MAX_PAY_PAYCODELEN = 136; // 支付商品编码最大长度 
    CSProto.MAX_PAY_VIEWCHANNEL_LEN = 10; // 支付显示渠道最大长度 
    CSProto.MAX_PAY_VIVO_ORDERID_LEN = 256; // vivo返回的订单ID最大长度 
    CSProto.MAX_PAY_VIVO_ACCESSKEY_LEN = 256; // vivo返回的accesskey最大长度 
    CSProto.MAX_PAY_VIVO_APPID_LEN = 256; // vivo的appid最大长度 
    CSProto.MAX_PAY_VIVO_ORDERTITLE_LEN = 128; // vivo的订单标题最大长度 
    CSProto.MAX_PAY_VIVO_ORDERDESC_LEN = 256; // vivo的订单描述最大长度 
    CSProto.MAX_CAR_BIGWINNERRANK_LIST_SIZE = 10; // 车行大富豪排行列表最大长度 
    CSProto.MAX_BULL_BIGWINNER_RANK_LIST_SIZE = 10; // 牛牛场排行最大长度 
    CSProto.MAX_VIEW_OBJ_COUNT = 25; // 最大可见角色个数 
    CSProto.MAX_PAY_LENOVO_EXORDERID_LEN = 50; // lenovo的CP订单ID最大长度 
    CSProto.MAX_PAY_LENOVO_PRIVATEINFO_LEN = 128; // lenovo的CP订单私有数据最大长度 
    CSProto.MAX_PAY_COMM_PRIVATEINFO_LEN = 256; // 游戏内部订单私有数据最大长度 
    CSProto.MAX_PAY_COMM_SELFORDER_LEN = 256; // 游戏内部订单号最大长度 
    CSProto.MAX_ITEMSTORE_LIST_MAX_LEN = 50; // 物品商城列表最大长度 
    CSProto.CLT_RES_TYPE_COMMON_CONF = 1; // 通用配置文件 
    CSProto.CLT_RES_TYPE_COMMON_CONF_END = 2; // 标记每次请求的通用配置文件的最后一个文件中的包 
    CSProto.CLT_RES_TYPE_MD5FILE_MD5 = 3; // md5列表文件的md5值 
    CSProto.SEX_NONE = 0; // 无性别 
    CSProto.SEX_MALE = 1; // 男 
    CSProto.SEX_FEMALE = 2; // 女 
    CSProto.SEX_SECRET = 3; // 保密 
    CSProto.CHAT_CHANNEL_WORLD = 1; // 若后续有聊天系统为其中的全世界频道 
    CSProto.CHAT_CHANNEL_ROOM = 2; // 本地频道比如摩天轮中的聊天窗口 
    CSProto.CHAT_CHANNEL_SYSTEM = 3; // 若后续有聊天系统为其中的系统频道 
    CSProto.CHAT_CHANNEL_LED = 4; // 全服跑马灯滚动消息 
    CSProto.CHAT_CHANNEL_DELAY_SYSTEM = 5; // 特殊系统消息当转轮在转时需要延迟显示 
    CSProto.CHAT_CHANNEL_SYSTEM_ROOM = 6; // 显示到聊天窗口的系统消息 
    CSProto.NEWER_GIDESTAT_NOTFIN = 0; // 未完成 
    CSProto.NEWER_GIDESTAT_HASFIN = 1; // 己完成 
    CSProto.NEWER_GIDESTAT_SKIPPED = 2; // 己跳过 
    CSProto.ERROR_TYPE_NORMAL = 0; // 普通的错误内容提示 
    CSProto.ERROR_GOLD_NOTENOUGH = 4; // 金币不足 
    CSProto.ERROR_ZJH_GOLDNOTOK_TOENTER = 67; // 扎金花金币不足不能进入相应场次 
    CSProto.ERROR_GOTAWARD_FAIL_NEEDBIND = 76; // 没有绑定手机不能领取连续登录奖励在线奖励某些任务奖励 
    CSProto.ERROR_DRAW_FAIL_NEEDBIND = 77; // 没有绑定手机不能抽奖 
    CSProto.ERROR_CHAT_FAIL_NEEDBIND = 78; // 没有绑定手机不能聊天 
    CSProto.ERROR_ZJH_ENTER_FAIL_NEEDBIND = 79; // 扎金花没有绑定手机不能进入相应场次 
    CSProto.ERROR_FUNCMOD_NOTOPEN = 27; // 该功能己关闭 
    CSProto.ERROR_ENTER_SCENE_VIPNOTENOUGH = 91; // VIP场为VIP玩家专享充值10元即可成为VIP 
    CSProto.ERROR_ITEMSTORE_ITEM_NOTENOUGH = 151; // 金叶子兑换物品时库存不足 
    CSProto.ERROR_ITEMSTORE_ITEMBUY_DAYLIMIT = 152; // 金叶子兑换物品时达到日限 
    CSProto.OPERATERS_TYPE_UNKNOWN = 0; // 未知 
    CSProto.OPERATERS_TYPE_MOBILE = 1; // 移动 
    CSProto.OPERATERS_TYPE_UNICOM = 2; // 联通 
    CSProto.OPERATERS_TYPE_TELECOM = 3; // 电信 
    CSProto.SPEC_CHANNEL_VER_CLASSICFRUIT = 0; // 通用类型即万人游乐场 
    CSProto.SPEC_CHANNEL_VER_CLASSICSEVEN = 1; // 经典七七七 
    CSProto.SPEC_CHANNEL_VER_VIVO_CLASSICSEVEN = 2; // VIVO版本 
    CSProto.SPEC_CHANNEL_VER_REALFRUIT = 3; // 真人水果街机 
    CSProto.SPEC_CHANNEL_VER_BAIDUVERSION = 4; // 百度定制版本 
    CSProto.SPEC_CHANNEL_VER_KUGOU = 5; // 酷狗定制版本 
    CSProto.SPEC_CHANNEL_VER_SINA = 6; // 新浪定制版本 
    CSProto.SPEC_CHANNEL_VER_FRUITMACHINE = 7; // 水果电玩机 
    CSProto.SPEC_CHANNEL_VER_AQIYI = 8; // 爱奇艺版本 
    CSProto.SPEC_CHANNEL_VER_LENOVO_REALFRUIT = 9; // 联想版本 
    CSProto.SPEC_CHANNEL_VER_HAIMA_REALFRUIT = 10; // 海马版本 
    CSProto.SPEC_CHANNEL_VER_LEGAME = 11; // 乐视 
    CSProto.SPEC_CHANNEL_VER_SINASHOW = 5000; // 新浪show版本 
    CSProto.SPEC_CHANNEL_VER_BUYUHALL = 5001; // 捕鱼大厅版本 
    CSProto.CLT_PLATFORM_TYPE_UNKNOWN = 0; // 未知 
    CSProto.CLT_PLATFORM_TYPE_ANDROID = 1; // ANDROID 
    CSProto.CLT_PLATFORM_TYPE_IPHONE = 2; // IPHONE 
    CSProto.WHEEL_VIEW_NONE = 0; // 除中奖展示之外的随机结果 
    CSProto.WHEEL_VIEW_TONGZHONG = 1; // 铜钟 
    CSProto.WHEEL_VIEW_QINGZAI = 2; // 青再 
    CSProto.WHEEL_VIEW_LIZHI = 3; // 荔枝 
    CSProto.WHEEL_VIEW_XIGUA = 4; // 西瓜 
    CSProto.WHEEL_VIEW_RED_7 = 5; // 红七 
    CSProto.WHEEL_VIEW_BLUE_7 = 6; // 蓝七 
    CSProto.WHEEL_VIEW_GUIWUZHE = 7; // 鬼武者 
    CSProto.WHEEL_VIEW_FENGCHE = 8; // 风车 
    CSProto.WHEEL_VIEW_SUPERFENGCHE_RED7 = 9; // 超级风车及红7,目前不在转盘中,仅用于显示摩天轮历史数据中使用 
    CSProto.WHEEL_VIEW_SUPERFENGCHE_BLUE7 = 10; // 超级风车及蓝7,目前不在转盘中,仅用于显示摩天轮历史数据中使用 
    CSProto.WHEEL_VIEW_SMALL_BAR = 21; // 小BAR 
    CSProto.WHEEL_VIEW_SMALL_SHUANG_7 = 22; // 小双7 
    CSProto.WHEEL_VIEW_SMALL_SHUANG_XING = 23; // 小双星 
    CSProto.WHEEL_VIEW_SMALL_XIGUA = 24; // 小西瓜 
    CSProto.WHEEL_VIEW_SMALL_LINGDANG = 25; // 小铃铛 
    CSProto.WHEEL_VIEW_SMALL_MUGUA = 26; // 小木瓜 
    CSProto.WHEEL_VIEW_SMALL_JUZI = 27; // 小橘子 
    CSProto.WHEEL_VIEW_SMALL_PINGGUO = 28; // 小苹果 
    CSProto.WHEEL_VIEW_LARGE_BAR = 31; // 大BAR 
    CSProto.WHEEL_VIEW_LARGE_SHUANG_7 = 32; // 大双7 
    CSProto.WHEEL_VIEW_LARGE_SHUANG_XING = 33; // 大双星 
    CSProto.WHEEL_VIEW_LARGE_XIGUA = 34; // 大西瓜 
    CSProto.WHEEL_VIEW_LARGE_LINGDANG = 35; // 大铃铛 
    CSProto.WHEEL_VIEW_LARGE_MUGUA = 36; // 大木瓜 
    CSProto.WHEEL_VIEW_LARGE_JUZI = 37; // 大橘子 
    CSProto.WHEEL_VIEW_LARGE_PINGGUO = 38; // 大苹果 
    CSProto.WHEEL_VIEW_CAISHEN = 40; // 财神好像暂时用不上了 
    CSProto.WHEEL_VIEW_XIAO_MANGUAN = 41; // 小满贯 
    CSProto.WHEEL_VIEW_DA_MANGUAN = 42; // 大满贯 
    CSProto.WHEEL_VIEW_DA_SIXI = 43; // 大四喜 
    CSProto.WHEEL_VIEW_XIAO_SANYUAN = 44; // 小三元 
    CSProto.WHEEL_VIEW_DA_SANYUAN = 45; // 大三元 
    CSProto.WHEEL_VIEW_JINSHAYU = 51; // 金鲨鱼 
    CSProto.WHEEL_VIEW_YINSHAYU = 52; // 银鲨鱼 
    CSProto.WHEEL_VIEW_SHIZI = 53; // 狮子 
    CSProto.WHEEL_VIEW_LAOYING = 54; // 老鹰 
    CSProto.WHEEL_VIEW_XIONGMAO = 55; // 熊猫 
    CSProto.WHEEL_VIEW_KONGQUE = 56; // 孔雀 
    CSProto.WHEEL_VIEW_HOUZI = 57; // 猴子 
    CSProto.WHEEL_VIEW_GEZI = 58; // 鸽子 
    CSProto.WHEEL_VIEW_YANZI = 59; // 燕子 
    CSProto.WHEEL_VIEW_TUZI = 60; // 兔子 
    CSProto.WHEEL_VIEW_FEIQING = 61; // 飞禽 
    CSProto.WHEEL_VIEW_ZOUSHOU = 62; // 走兽 
    CSProto.WHEEL_VIEW_FALALI = 71; // 法拉利 
    CSProto.WHEEL_VIEW_LBJN = 72; // 兰博基尼 
    CSProto.WHEEL_VIEW_MSLD = 73; // 玛莎拉蒂 
    CSProto.WHEEL_VIEW_BSJ = 74; // 保时捷 
    CSProto.WHEEL_VIEW_BENCHI = 75; // 奔驰 
    CSProto.WHEEL_VIEW_BMW = 76; // 宝马 
    CSProto.WHEEL_VIEW_LKSS = 77; // 雷克萨斯 
    CSProto.WHEEL_VIEW_DAZHONG = 78; // 大众 
    CSProto.WHEEL_VIEW_LABA_WILD = 80; // 拉霸WILD 
    CSProto.WHEEL_VIEW_LABA_BAR_1 = 81; // 拉霸BAR1 
    CSProto.WHEEL_VIEW_LABA_BAR_2 = 82; // 拉霸BAR2 
    CSProto.WHEEL_VIEW_LABA_BAR_3 = 83; // 拉霸BAR3 
    CSProto.WHEEL_VIEW_LABA_CHERRY = 84; // 拉霸CHERRY 
    CSProto.WHEEL_VIEW_LABA_BELL = 85; // 拉霸BELL 
    CSProto.WHEEL_VIEW_LABA_DIAMOND = 86; // 拉霸DIAMOND 
    CSProto.WHEEL_VIEW_LABA_7 = 87; // 拉霸SEVEN1 
    CSProto.WHEEL_VIEW_LABA_77 = 88; // 拉霸SEVEN2 
    CSProto.WHEEL_VIEW_LABA_777 = 89; // 拉霸SEVEN3 
    CSProto.WHEEL_VIEW_LABA_ANYBAR = 90; // 拉霸ANYBAR 
    CSProto.WHEEL_VIEW_LABA_ANY7 = 91; // 拉霸ANYSEVEN 
    CSProto.ROUND_OPER_NONE = 0; // 没有操作顺序要求 
    CSProto.ROUND_OPER_SEQUENCE = 1; // 顺押 
    CSProto.ROUND_OPER_REVERSE = 2; // 逆押 
    CSProto.OUTESIDE_MODE_NONE = 0; // 空模式 
    CSProto.OUTESIDE_MODE_DAY = 1; // 白天 
    CSProto.OUTESIDE_MODE_SUNSET = 2; // 傍晚 
    CSProto.OUTESIDE_MODE_NIGHT = 3; // 黑夜 
    CSProto.OUTESIDE_MODE_BONUSCONFIRM = 4; // Bonus确定 
    CSProto.OUTESIDE_MODE_BONUSSENDING = 5; // Bonus开奖 
    CSProto.SHOW_TYPE_NONE = 0; // 无表演 
    CSProto.SHOW_TYPE_BOX = 1; // 宝箱 
    CSProto.SHOW_TYPE_WHEELSIDE = 2; // 转轮边框 
    CSProto.SHOW_TYPE_WHEELLIGHT = 3; // 转轮灭灯 
    CSProto.SHOW_TYPE_TOPWHEEL = 4; // 顶部转盘 
    CSProto.SHOW_TYPE_CLOUD = 5; // 云彩 
    CSProto.SHOW_TYPE_DRAGON = 6; // 龙 
    CSProto.SHOW_TYPE_TIGER = 7; // 虎 
    CSProto.SHOW_TYPE_DRAGONTIGER = 8; // 龙虎 
    CSProto.BONUS_TYPE_NONE = 0; // 无奖 
    CSProto.BONUS_TYPE_REG = 1; // RB 
    CSProto.BONUS_TYPE_BIG = 2; // BB 
    CSProto.SPEC_BONUS_TYPE_NONE = 0; // 无奖 
    CSProto.SPEC_BONUS_TYPE_1ST_OR_CHANCE = 1; // 1st bonus或者对应小奖的bonus chance 
    CSProto.SPEC_BONUS_TYPE_2ND = 2; // 2nd bonus 
    CSProto.SPEC_BONUS_TYPE_3RD = 3; // 3rd bonus 
    CSProto.IS_FINAL_BONUS_ROUND_NO = 0; // 不是 
    CSProto.IS_FINAL_BONUS_ROUND_YES = 1; // 是 
    CSProto.IS_FINAL_BONUS_ROUND_YES_WHEN_OPWRONG = 2; // 当操作不正确时就是 
    CSProto.CAN_BEGIN_SLOT_REASON_LOGIN = 0; // 登录时请求进入Slot桌台 
    CSProto.CAN_BEGIN_SLOT_REASON_CHG_TABLE = 1; // 更换桌台 
    CSProto.NEXT_ROUNDDATA_TYPE_NONEOP = 0; // 对应数据没有操作要求,直接取操作正确的对应字段 
    CSProto.NEXT_ROUNDDATA_TYPE_OPLIMIT = 1; // 对应转数据有操作要求,根据操作结果取相应字段 
    CSProto.TASK_STATUS_WORKING = 1; // 未完成 
    CSProto.TASK_STATUS_FINISHED = 2; // 己完成 
    CSProto.TASK_STATUS_HASGOTPRIZE = 3; // 已领取 
    CSProto.TASK_TYPE_ALLLIFE = 0; // 终身一次任务 
    CSProto.TASK_TYPE_CYCLE = 1; // 循环任务 
    CSProto.TASK_TYPE_DAY = 2; // 按天任务 
    CSProto.RANK_CLASS_VIPLVL = 1; // VIP榜 
    CSProto.RANK_CLASS_HONOUR = 2; // 荣誉榜 
    CSProto.RANK_CLASS_WEALTH = 3; // 财富榜 
    CSProto.RANK_CLASS_LOTTERY_HERO = 4; // 摩天轮豪胜榜 
    CSProto.RANK_CLASS_CHARGE = 5; // 充值榜 
    CSProto.RANK_CLASS_CLASSFRUIT_BEBANKER = 6; // 坐庄榜 
    CSProto.RANK_CLASS_CLASSFRUIT_DOCRUPT = 7; // 爆庄榜 
    CSProto.RANK_CLASS_CLASSFRUIT_MAXWIN_ROUND = 8; // 豪胜榜 
    CSProto.RANK_CLASS_CAR_BIGWINNER = 9; // 车行大赢家 
    CSProto.RANK_CLASS_BULL_BIGWINNER = 10; // 牛牛场排行 
    CSProto.RANK_CLASS_TORPEDO_HJ = 11; // 黄金鱼雷排行 
    CSProto.RANK_CLASS_TORPEDO_BJ = 12; // 铂金鱼雷排行 
    CSProto.RANK_CLASS_TORPEDO_HZ = 13; // 核子鱼雷排行 
    CSProto.RANK_REFRESHTYPE_NONE = 0; // 不会定期刷新 
    CSProto.RANK_REFRESHTYPE_WEEK = 1; // 按周刷新,目前暂时不支持 
    CSProto.RANK_REFRESHTYPE_DAY = 2; // 按天刷新 
    CSProto.CHAT_TYPE_USER_EDIT = 0; // 自定义内容 
    CSProto.CHAT_TYPE_ZJH_PREDEF = 1; // 扎金花预定义聊天内容此时聊天内容里存放的是对应消息ID 
    CSProto.LOTTERY_ONEBET_BASE_TAG_1 = 1; // 1,对应10枚的节奏 
    CSProto.LOTTERY_ONEBET_BASE_TAG_2 = 2; // 2 
    CSProto.LOTTERY_ONEBET_BASE_TAG_3 = 3; // 3 
    CSProto.LOTTERY_ONEBET_BASE_TAG_4 = 4; // 4 
    CSProto.LOTTERY_ONEBET_BASE_TAG_5 = 5; // 5 
    CSProto.LOTTERY_CURSTATUS_CANBET = 1; // 下注中 
    CSProto.LOTTERY_CURSTATUS_WILLRUNNING = 2; // 即奖开奖 
    CSProto.LOTTERY_CURSTATUS_RUNNINGPRIZE = 3; // 开奖中,此时结果己知但还在发送奖励过程中 
    CSProto.LOTTERY_CURSTATUS_BANKER_SETPRIZE = 4; // 庄家正在设置下一轮开奖中 
    CSProto.en_SceneType_Begin = 0; // 枚举起始值无具体意义 
    CSProto.en_SceneType_SlotTable = 1; // slot表 
    CSProto.en_SceneType_Lottery = 2; // 大风车 
    CSProto.en_SceneType_ClassicFruit = 3; // 水果机 
    CSProto.en_SceneType_Hall = 4; // 大厅 
    CSProto.en_SceneType_Shark = 5; // 鲨鱼场 
    CSProto.en_SceneType_Car = 6; // 宝马场 
    CSProto.en_SceneType_Zjh = 7; // 扎金花 
    CSProto.en_SceneType_Bull = 8; // 斗牛 
    CSProto.en_SceneType_GoldMiner = 9; // 黄金矿工 
    CSProto.en_SceneType_GmOnly = 10; // GM场 
    CSProto.en_SceneType_CatchFish = 11; // 捕鱼场 
    CSProto.en_SceneType_LaBa = 12; // 拉霸场 
    CSProto.en_SceneType_Zodiac = 13; // 星座场 
    CSProto.en_SceneType_Cowboy = 14; // 气球场 
    CSProto.MAP_TEMPLATE_ID_HALL = 1; // 展示大厅列表 
    CSProto.MAP_TEMPLATE_ID_NORMAL_SLOT = 101; // 鬼武水果机台普通 
    CSProto.MAP_TEMPLATE_ID_NORMAL_LOTTERY = 201; // 幸福摩天轮普通 
    CSProto.MAP_TEMPLATE_ID_CLASSIC_FRUIT = 301; // 经典水果机普通 
    CSProto.MAP_TEMPLATE_ID_CLASSIC_FRUIT_VIP = 302; // 经典水果机VIP 
    CSProto.MAP_TEMPLATE_ID_SHARK = 501; // 鲨鱼场普通 
    CSProto.MAP_TEMPLATE_ID_SHARK_VIP = 502; // 鲨鱼场VIP 
    CSProto.MAP_TEMPLATE_ID_CAR = 601; // 车行普通 
    CSProto.MAP_TEMPLATE_ID_ZJH_JUNIOR = 701; // 扎金花初级场 
    CSProto.MAP_TEMPLATE_ID_ZJH_MEDIUM = 702; // 扎金花中级场 
    CSProto.MAP_TEMPLATE_ID_ZJH_SENIOR = 703; // 扎金花高级场 
    CSProto.MAP_TEMPLATE_ID_ZJH_PRIVATE = 704; // 扎金花贵宾厅 
    CSProto.MAP_TEMPLATE_ID_NORMAL_BULL = 801; // 斗牛普通场 
    CSProto.MAP_TEMPLATE_ID_GOLDMINER_JUNIOR = 901; // 黄金矿工初级场 
    CSProto.MAP_TEMPLATE_ID_GOLDMINER_MEDIUM = 902; // 黄金矿工中级场 
    CSProto.MAP_TEMPLATE_ID_GOLDMINER_SENIOR = 903; // 黄金矿工高级场 
    CSProto.MAP_TEMPLATE_ID_GMONLY = 1001; // 内部GM场 
    CSProto.MAP_TEMPLATE_ID_CATCHFISH = 1101; // 捕鱼场 
    CSProto.MAP_TEMPLATE_ID_LABA_GOLD = 1201; // 拉霸普通场 
    CSProto.MAP_TEMPLATE_ID_LABA_DIAMOND = 1202; // 拉霸钻石场 
    CSProto.MAP_TEMPLATE_ID_HAPPY_MEINV_XIU = 9000; // 欢乐美女秀 
    CSProto.MAP_TEMPLATE_ID_ZODIAC = 1301; // 星座场普通 
    CSProto.MAP_TEMPLATE_ID_COWBOY = 1401; // 气球场普通 
    CSProto.CLASSFRUIT_BANKER_SWITCHTYPE_NONE = 0; // 无庄家相关信息需要展示 
    CSProto.CLASSFRUIT_BANKER_SWITCHTYPE_ONE_STILL = 1; // 当前庄家继续上庄 
    CSProto.CLASSFRUIT_BANKER_SWITCHTYPE_NEWONE = 2; // 新的庄家上庄 
    CSProto.CLASSFRUIT_BANKER_SWITCHTYPE_TO_NONE = 3; // 当前庄家下庄 
    CSProto.CLASSFRUIT_BANKER_SWITCHTYPE_CHANGEONE = 4; // 当前庄家下庄且新玩家上庄 
    CSProto.CLASSFRUIT_BANKER_STAT_NONE = 0; // 不是庄家 
    CSProto.CLASSFRUIT_BANKER_STAT_INLIST = 1; // 在庄家排列列表中 
    CSProto.CLASSFRUIT_BANKER_STAT_DO_BANKER = 2; // 当前是庄家 
    CSProto.DRAW_PRIZE_GOLD = 1; // 一堆金币 
    CSProto.DRAW_PRIZE_CHARGECARD = 2; // 充值卡 
    CSProto.DRAW_PRIZE_XIAOMI_MOBILE_4 = 3; // 小米手机4 
    CSProto.APPSTORE_REPUTATION_STATE_NONE = 0; // 未评论 
    CSProto.APPSTORE_REPUTATION_STATE_WRITED = 1; // 已写好评 
    CSProto.APPSTORE_REPUTATION_STATE_GOT_GIFT = 2; // 已领奖 
    CSProto.MAIL_BOX_RECV = 1; // 收件箱 
    CSProto.MAIL_BOX_SEND = 2; // 暂未支持:发件箱 
    CSProto.SYSTEM_MAIL_TYPE = 1; // 系统邮件 
    CSProto.NORMAL_MAIL_TYPE = 2; // 暂未支持:普通邮件 
    CSProto.MAIL_STAT_HASREAD = 0x1; // 是否已读 
    CSProto.MAIL_STAT_HASATTACH = 0x2; // 是否有附件 
    CSProto.MAIL_STAT_HASGETATTACH = 0x4; // 是否已经取出了附件 
    CSProto.DEL_MAIL_TYPE_ONE = 1; // 删除一封邮件 
    CSProto.DEL_MAIL_TYPE_TRYBEST = 2; // 暂未支持:一键删除所有可以删除的邮件 
    CSProto.GET_MAILATTACH_TYPE_ONE = 1; // 获取一封邮件的邮件 
    CSProto.GET_MAILATTACH_TYPE_TRYBEST = 2; // 暂未支持:一键获取所有可以获取附件的邮件 
    CSProto.MOBILE_BIND_CNA_DIRECT_DO = 1; // 可以直接进行绑定 
    CSProto.MOBILE_BIND_MOBILE_ALREADY_BIND = 2; // 当前手机号已经绑定了帐号,接下来需要确认帐号迁移 
    CSProto.CARDROOM_STATUS_NOTBEGIN = 0; // 未开始 
    CSProto.CARDROOM_STATUS_READYING = 1; // 准备倒计时状态,本局时间是从切换到该状态开始计时 
    CSProto.CARDROOM_STATUS_PLAYING = 2; // 一局游戏进行中 
    CSProto.CARDPLAYER_STATUS_VIEWER = 0; // 旁观者 
    CSProto.CARDPLAYER_STATUS_JUSTSEAT = 1; // 未开始 
    CSProto.CARDPLAYER_STATUS_READY = 2; // 己准备 
    CSProto.CARDPLAYER_STATUS_PLAYING = 3; // 游戏中 
    CSProto.ZJH_PLAYER_MASK_NONE = 0x0; // 空 
    CSProto.ZJH_PLAYER_MASK_HASSEEN_CARD = 0x1; // 己看牌 
    CSProto.ZJH_PLAYER_MASK_DISCARD_CARD = 0x2; // 弃牌 
    CSProto.ZJH_PLAYER_MASK_FORBID_COMPARE = 0x4; // 禁比 
    CSProto.ZJH_PLAYER_MASK_DOUBLE = 0x8; // 双倍 
    CSProto.ZJH_PLAYER_MASK_COMPARE_FAIL = 0x10; // 比牌输掉 
    CSProto.ZJH_PLAYER_MASK_LOSTCONNECT = 0x20; // 掉线中 
    CSProto.ZJH_PLAYER_MASK_DID_COMPARE = 0x40; // 参与过比牌 
    CSProto.ZJH_PLAYER_MASK_KICKED_GAMEEND = 0x80; // 一局游戏结束后将被踢人卡踢出 
    CSProto.ZJH_BETWAY_FOLLOW = 0; // 跟注 
    CSProto.ZJH_BETWAY_ADDBET = 1; // 加注 
    CSProto.ZJH_DOUBLETYPE_2 = 2; // 2倍 
    CSProto.ZJH_DOUBLETYPE_4 = 4; // 4倍 
    CSProto.ZJH_PLAYER_MATCHRET_WIN = 1; // 胜 
    CSProto.ZJH_PLAYER_MATCHRET_LOSE = 2; // 输 
    CSProto.ZJH_PLAYER_MATCHRET_DISCARD = 3; // 弃 
    CSProto.BULL_SEAT_NORTH = 0; // 北 
    CSProto.BULL_SEAT_WEST = 1; // 西 
    CSProto.BULL_SEAT_SOUTH = 2; // 南 
    CSProto.BULL_SEAT_EAST = 3; // 东 
    CSProto.BULL_SEAT_BANKER = 4; // 庄 
    CSProto.BULL_SEAT_COUNT = 5; //  
    CSProto.BULL_PER_SEAT_CARDS_NUMBER = 5; //  
    CSProto.BULL_SCENE_STATUS_IDLE = 0; // 闲置 
    CSProto.BULL_SCENE_STATUS_WAIT_BET = 1; // 等待下注 
    CSProto.BULL_SCENE_STATUS_WILL_SHOW_CARDS = 2; // 即将开牌 
    CSProto.BULL_SCENE_STATUS_SHOW_CARDS = 3; // 开牌 
    CSProto.BULL_SCENE_STATUS_REST = 4; // 休息 
    CSProto.BULL_SCENE_STATUS_COUNT = 5; // 斗牛场状态数量 
    CSProto.BULL_CHIP_TYPE1 = 0; // 100 
    CSProto.BULL_CHIP_TYPE2 = 1; // 1000 
    CSProto.BULL_CHIP_TYPE3 = 2; // 1万 
    CSProto.BULL_CHIP_TYPE4 = 3; // 10万 
    CSProto.BULL_CHIP_TYPE5 = 4; // 20万 
    CSProto.BULL_CHIP_TYPE6 = 5; // 50万 
    CSProto.BULL_CHIP_TYPE_COUNT = 6; //  
    CSProto.BULL_CARDS_TYPE_NONE = 0; // 没牛 
    CSProto.BULL_CARDS_TYPE_BULL1 = 1; // 牛丁 
    CSProto.BULL_CARDS_TYPE_BULL2 = 2; // 牛2 
    CSProto.BULL_CARDS_TYPE_BULL3 = 3; // 牛3 
    CSProto.BULL_CARDS_TYPE_BULL4 = 4; // 牛4 
    CSProto.BULL_CARDS_TYPE_BULL5 = 5; // 牛5 
    CSProto.BULL_CARDS_TYPE_BULL6 = 6; // 牛6 
    CSProto.BULL_CARDS_TYPE_BULL7 = 7; // 牛7 
    CSProto.BULL_CARDS_TYPE_BULL8 = 8; // 牛8 
    CSProto.BULL_CARDS_TYPE_BULL9 = 9; // 牛9 
    CSProto.BULL_CARDS_TYPE_BULL = 10; // 牛牛 
    CSProto.BULL_CARDS_TYPE_GUADY = 11; // 五花牛 
    CSProto.BULL_CARDS_TYPE_BOMB = 12; // 四炸 
    CSProto.BULL_CARDS_TYPE_LITTLE = 13; // 五小牛 
    CSProto.CHARGE_PLATFORM_WEIPAI = 1; // 旧版支付中心:微派 
    CSProto.CHARGE_PLATFORM_MM = 2; // 旧版支付中心:MM移动 
    CSProto.CHARGE_PLATFORM_VIVO = 3; // 旧版支付中心:VIVO 
    CSProto.CHARGE_PLATFORM_UNICOM = 4; // 己停止接入该支付平台旧版支付中心:联通unicom沃音乐 
    CSProto.CHARGE_PLATFORM_LENOVO = 5; // 旧版支付中心:联想lenovo 
    CSProto.CHARGE_PLATFORM_HAIMA = 6; // 旧版支付中心:海马 
    CSProto.CHARGE_PLATFORM_INNER_ALIPAY = 7; // 内部占用:修正渠道 
    CSProto.CHARGE_PLATFORM_INNER_UNION = 8; // 内部占用:修正渠道 
    CSProto.CHARGE_PLATFORM_INNER_WEIXIN = 9; // 内部占用:修正渠道 
    CSProto.CHARGE_PLATFORM_PAYCENTER_MM = 100; // 新版支付中心:MM移动 
    CSProto.CHARGE_PLATFORM_PAYCENTER_ALIPAY = 101; // 新版支付中心:支付宝 
    CSProto.CHARGE_PLATFORM_PAYCENTER_WEIXIN = 102; // 新版支付中心:微信 
    CSProto.CHARGE_PLATFORM_PAYCENTER_UNIONPAY = 103; // 新版支付中心:银联 
    CSProto.CHARGE_PLATFORM_PAYCENTER_PREPAID = 104; // 新版支付中心:预付卡 
    CSProto.CHARGE_PLATFORM_PAYCENTER_ALIPAY_WAP = 105; // 新版支付中心:支付宝WAP版本 
    CSProto.CHARGE_PLATFORM_PAYCENTER_UNIONPAY_WAP = 106; // 新版支付中心:银联WAP版本 
    CSProto.CHARGE_PLATFORM_PAYCENTER_THIRD_IYOUXI = 107; // 新版支付中心:电信爱游戏 
    CSProto.CHARGE_PLATFORM_PAYCENTER_PAYAPK_ALIPAY = 108; // 新版支付中心:单独支付apk中的支付宝 
    CSProto.CHARGE_PLATFORM_PAYCENTER_PAYAPK_WEIXIN = 109; // 新版支付中心:单独支付apk中的微信 
    CSProto.CHARGE_PLATFORM_PAYCENTER_PAYAPK_UNIONPAY = 110; // 新版支付中心:单独支付apk中的银联 
    CSProto.CHARGE_PLATFORM_PAYCENTER_ZWXPROXY_WEIXIN_WAP = 111; // 新版支付中心:通过梓微兴代理接入的微信WAP支付 
    CSProto.CHARGE_PLATFORM_PAYCENTER_THIRD_HUIYUAN = 112; // 新版支付中心:汇元 
    CSProto.CHARGE_PLATFORM_PAYCENTER_COMMWAPPAY = 120; // 新版支付中心:WAP通用支付可后台自由切换 
    CSProto.CHARGE_PLATFORM_PAYCENTER_COMMWAPPAY_WEIFUTONG = 121; // 新版支付中心(内部使用):WAP通用支付之威富通微信支付 
    CSProto.CHARGE_PLATFORM_PAYCENTER_COMMWAPPAY_OFFCIALALIPAY = 122; // 新版支付中心(内部使用):WAP通用支付之官方支付宝 
    CSProto.CHARGE_PLATFORM_PAYCENTER_COMMWAPPAY_OFFCIALUNION = 123; // 新版支付中心(内部使用):WAP通用支付之官方银联 
    CSProto.CHARGE_PLATFORM_PAYCENTER_COMMWAPPAY_HUIYUAN = 124; // 新版支付中心(内部使用):WAP通用支付之汇元宝微信支付 
    CSProto.CHARGE_PLATFORM_PAYCENTER_THIRD_VIVO = 150; // 新版支付中心第三方:VIVO 
    CSProto.CHARGE_PLATFORM_PAYCENTER_THIRD_UNICOM = 151; // 己停止接入该支付平台新版支付中心第三方:联通unicom沃音乐 
    CSProto.CHARGE_PLATFORM_PAYCENTER_THIRD_LENOVO = 152; // 新版支付中心第三方:联想lenovo 
    CSProto.CHARGE_PLATFORM_PAYCENTER_THIRD_HAIMA = 153; // 新版支付中心第三方:海马 
    CSProto.CHARGE_PLATFORM_PAYCENTER_THIRD_SHANXIPOINTS = 154; // 己废弃该新版支付中心第三方:陕西积分兑换 
    CSProto.CHARGE_PLATFORM_PAYCENTER_THIRD_PINGXX = 155; // 新版支付中心第三方:pingxx 
    CSProto.CHARGE_PLATFORM_PAYCENTER_THIRD_APPLE = 156; // 新版支付中心第三方:appstore 
    CSProto.CHARGE_PLATFORM_PAYCENTER_THIRD_AIBEI = 157; // 新版支付中心第三方:爱贝 
    CSProto.CHARGE_PLATFORM_PAYCENTER_THIRD_BAIDU = 158; // 新版支付中心第三方:百度移动游戏单机版 
    CSProto.CHARGE_PLATFORM_PAYCENTER_THIRD_360 = 159; // 新版支付中心第三方:360 
    CSProto.CHARGE_PLATFORM_PAYCENTER_THIRD_GOOGLE = 160; // 新版支付中心第三方:google 
    CSProto.CHARGE_PLATFORM_PAYCENTER_THIRD_UC = 161; // 新版支付中心第三方:UC 
    CSProto.CHARGE_PLATFORM_PAYCENTER_THIRD_WANDOU = 162; // 新版支付中心第三方:豌豆荚 
    CSProto.CHARGE_PLATFORM_PAYCENTER_THIRD_ANZHI = 163; // 新版支付中心第三方:安智 
    CSProto.CHARGE_PLATFORM_PAYCENTER_THIRD_YY = 164; // 新版支付中心第三方:YY 
    CSProto.CHARGE_PLATFORM_PAYCENTER_THIRD_JOLO = 165; // 新版支付中心第三方:聚乐 
    CSProto.CHARGE_PLATFORM_PAYCENTER_THIRD_YOUKU = 166; // 新版支付中心第三方:优酷 
    CSProto.CHARGE_PLATFORM_PAYCENTER_THIRD_OPPO = 167; // 新版支付中心第三方:OPPO 
    CSProto.CHARGE_PLATFORM_PAYCENTER_THIRD_SINASHOW = 168; // 新版支付中心第三方:新浪秀场秀币兑换 
    CSProto.CHARGE_PLATFORM_PAYCENTER_THIRD_MIDAS = 169; // 新版支付中心第三方:米大师 
    CSProto.CHARGE_PLATFORM_PAYCENTER_THIRD_MUMAYI = 170; // 新版支付中心第三方:木蚂蚁 
    CSProto.CHARGE_PLATFORM_PAYCENTER_THIRD_NIUX = 171; // 新版支付中心第三方:迅雷NIUX 
    CSProto.CHARGE_PLATFORM_PAYCENTER_THIRD_PAPA = 172; // 新版支付中心第三方:啪啪 
    CSProto.CHARGE_PLATFORM_PAYCENTER_THIRD_LEGAME = 173; // 新版支付中心第三方:乐视 
    CSProto.CHARGE_PLATFORM_PAYCENTER_THIRD_PP = 174; // 新版支付中心第三方:PP助手 
    CSProto.CHARGE_PLATFORM_PAYCENTER_THIRD_XY = 175; // 新版支付中心第三方:XY 
    CSProto.CHARGE_PLATFORM_PAYCENTER_THIRD_HUAWEI = 176; // 新版支付中心第三方:华为 
    CSProto.CHARGE_PLATFORM_PAYCENTER_THIRD_QUANMINHUDONG = 177; // 新版支付中心第三方:全民互动 
    CSProto.CHARGE_PLATFORM_PAYCENTER_THIRD_YSDK = 178; // 新版支付中心第三方:YSDK 
    CSProto.CHARGE_PLATFORM_PAYCENTER_THIRD_CAOXIE = 179; // 新版支付中心第三方:草鞋 
    CSProto.CHARGE_PLATFORM_PAYCENTER_THIRD_XIAOMI = 180; // 新版支付中心第三方:小米 
    CSProto.CHARGE_PLATFORM_PAYCENTER_THIRD_LESHI = 181; // 新版支付中心第三方:乐视 
    CSProto.CHARGE_PLATFORM_PAYCENTER_THIRD_PTPAY_YSDK = 182; // 新版支付中心第三方:PTPAY中的YSDK支付方式 
    CSProto.CHARGE_PLATFORM_PAYCENTER_THIRD_PTPAY = 183; // 新版支付中心第三方:PTPAY的第三方支付方式目前为爱贝方式 
    CSProto.CHARGE_PLATFORM_PAYCENTER_THIRD_SAMSUNG = 184; // 新版支付中心第三方:三星支付其实是爱贝支付方式的实现 
    CSProto.CHARGE_PLATFORM_PAYCENTER_THIRD_JINLI = 185; // 新版支付中心第三方:金立 
    CSProto.OPTION_PARA_KEY_PREPAID_CARDID = 1; // 己废弃不用的上行参数-预付卡卡号 
    CSProto.OPTION_PARA_KEY_PREPAID_CARDPWD = 2; // 己废弃不用的上行参数-预付卡密码 
    CSProto.OPTION_PARA_KEY_PINGXX_PAYCHANNEL = 3; // 上行参数-ping支付生成订单时选择的支付方式 
    CSProto.OPTION_PARA_KEY_IOS_IDFA = 4; // 上行参数-IOS系统对应idfa 
    CSProto.OPTION_PARA_KEY_ANDROID_ID = 5; // 上行参数-andoridid 
    CSProto.OPTION_PARA_KEY_TDADVTRACK_APPID = 6; // 上行参数-若接了tdadvtrack对应了相应的APPKEY 
    CSProto.OPTION_PARA_KEY_APP_NAME = 7; // 上行参数-应用名:传分别对应在AppStore和安桌分发市场中的应用名 
    CSProto.OPTION_PARA_KEY_APP_ID = 8; // 上行参数-应用标识:苹果传IOS应用唯一标识和安卓传包名 
    CSProto.OPTION_PARA_KEY_VIVO_ACCESS_KEY = 100; // 下行参数-VIVO生成商户订单后对应返回的accesskey 
    CSProto.OPTION_PARA_KEY_VIVO_OUTER_ORDERID = 101; // 下行参数-VIVO生成商户订单后对应返回的VIVO订单号在客户端协议中使用 
    CSProto.OPTION_PARA_KEY_WEIXIN_PREPAYID = 102; // 下行参数-微信生成的预支付回话标识用于后续接口调用中使用该值有效期为2小时 
    CSProto.OPTION_PARA_KEY_ALIPAY_NOTIFYSVRURL = 103; // 下行参数-支付宝SDK支付成功后的后台通知地址 
    CSProto.OPTION_PARA_KEY_UNIONPAY_PREPAYID = 104; // 下行参数-银联生成的预支付回话标识用于后续接口调用中使用 
    CSProto.OPTION_PARA_KEY_WEIXIN_TIMESTAMP = 105; // 下行参数-微信生成的时间戳timestamp后续发起支付接口调用中使用该值 
    CSProto.OPTION_PARA_KEY_WEIXIN_NONCESTR = 106; // 下行参数-微信生成的随机串noncestr后续发起支付接口调用中使用该值 
    CSProto.OPTION_PARA_KEY_WEIXIN_SIGN = 107; // 下行参数-微信生成的签名值sign后续发起支付接口调用中使用该值 
    CSProto.OPTION_PARA_KEY_WEIXIN_CPID = 108; // 下行参数-微信支付对应的商户IDCPID 
    CSProto.OPTION_PARA_KEY_PINGXX_CHARGEOBJ = 109; // 下行参数-pingxx支付生成订单时返回的支付凭据 
    CSProto.OPTION_PARA_KEY_REAL_THIRD_APPID = 110; // 下行参数-各种支付平台配置的真实的应用ID与上行appid不一定一致真实的应用APPID没有下发或者下发的是空的情况都以本地为准 
    CSProto.OPTION_PARA_KEY_AIBEI_TRANSID = 111; // 下行参数-爱贝生成的预支付交易ID用于后续接口调用中使用 
    CSProto.OPTION_PARA_KEY_UNIONPAY_WAP_POSTDATA = 112; // 下行参数-银联WAP支付生成的post数据用于请求网页支付 
    CSProto.OPTION_PARA_KEY_UNIONPAY_WAP_POSTDATA_URL = 113; // 下行参数-银联WAP支付生成的post数据访问的网页地址 
    CSProto.OPTION_PARA_KEY_ALIPAY_WAP_POSTDATA = 114; // 下行参数-支付宝WAP支付生成的post数据用于请求网页支付 
    CSProto.OPTION_PARA_KEY_ALIPAY_WAP_POSTDATA_URL = 115; // 下行参数-支付宝WAP支付生成的post数据访问的网页地址 
    CSProto.OPTION_PARA_KEY_ALIPAY_CPID = 116; // 下行参数-支付宝SDK支付对应的商户ID也即partner id 
    CSProto.OPTION_PARA_KEY_ALIPAY_CPPRIVATEKEY = 117; // 下行参数-支付宝SDK支付对应的商户私钥 
    CSProto.OPTION_PARA_KEY_UNIONPAY_WAP_RETURNGAME_URL = 118; // 下行参数-银联WAP支付对应的银联页面返回游戏的地址 
    CSProto.OPTION_PARA_KEY_360_NOTIFYSVRURL = 119; // 下行参数-360SDK支付成功后的后台通知地址 
    CSProto.OPTION_PARA_KEY_ALIPAY_SELLER_ID = 120; // 下行参数-支付宝SDK支付对应的卖家支付宝账号对应的唯一用户号是一串数字 
    CSProto.OPTION_PARA_KEY_ALIPAY_SELLER_ACCOUNT = 121; // 下行参数-支付宝SDK支付对应的卖家支付宝账号是一个email或者是手机号码格式 
    CSProto.OPTION_PARA_KEY_MM_APPTOKEN = 122; // 下行参数-MM支付对应的appkey 
    CSProto.OPTION_PARA_KEY_360_GET_USER_INFO_URL = 123; // 下行参数-360登录后拉取用户信息的URL 
    CSProto.OPTION_PARA_KEY_GAME_USER_NAME = 124; // 下行参数-游戏内部用户名称 
    CSProto.OPTION_PARA_KEY_GAME_USER_ID = 125; // 下行参数-游戏内部用户ID 
    CSProto.OPTION_PARA_KEY_GOODS_NAME = 126; // 下行参数-支付项对应的商品名称若为空以客户端本地内容为准 
    CSProto.OPTION_PARA_KEY_COMM_NOTIFYSVRURL = 127; // 下行参数-当需要时填充对应的游戏服务器充值成功通知地址 
    CSProto.OPTION_PARA_KEY_COMM_CP_SECURITY_KEY = 128; // 下行参数-根据具体需求填入游戏的秘钥，私钥或者其他秘钥 
    CSProto.OPTION_PARA_KEY_COMM_APP_KEY = 129; // 下行参数-根据具体需求填入AppKey 
    CSProto.OPTION_PARA_KEY_COMM_APP_SECURIT = 130; // 下行参数-根据具体需求填入AppScret 
    CSProto.OPTION_PARA_KEY_PAY_APK_NAME = 131; // 下行参数-独立支付APK的包名 
    CSProto.OPTION_PARA_KEY_PAY_APK_DOWNLOAD_URL = 132; // 下行参数-独立支付APK对应的下载地址 
    CSProto.OPTION_PARA_KEY_PAY_APK_VERSION = 133; // 下行参数-独立支付APK对应的版本号 
    CSProto.OPTION_PARA_KEY_PAY_ZWX_PREPAY_URL = 134; // 下行参数-通过梓微兴代理接入的微信H5支付对应的URL 
    CSProto.OPTION_PARA_KEY_GEN_ORDER_TIME = 135; // 下行参数-订单生成时间 
    CSProto.OPTION_PARA_COMMWAPPAY_DATA = 136; // 下行参数-通用WAP请求中的数据(仅为POST请求时有效) 
    CSProto.OPTION_PARA_COMMWAPPAY_URL = 137; // 下行参数-通用WAP请求中的网页访问地址(若为get请求己包含所有参数 
    CSProto.OPTION_PARA_COMMWAPPAY_HTTPTYPE = 138; // 下行参数-通用WAP请求中的网页http方式:目前支持get或者post 
    CSProto.OPTION_PARA_COMMWAPPAY_VISITTYPE = 139; // 下行参数-通用WAP请求中的请求方式:目前支持browser或者innerpage 
    CSProto.OPTION_PARA_KEY_CLIENT_IP = 200; // 内部参数-发起请求的客户端IP 
    CSProto.OPTION_PARA_KEY_CLIENT_OSTYPE = 201; // 内部参数-发起请求的客户端平台类型adnroid or ios 
    CSProto.OPTION_PARA_COMM_POSTDATA = 202; // 下行参数-生成的post数据用于请求网页支付 
    CSProto.OPTION_PARA_COMM_POSTDATA_URL = 203; // 下行参数-生成的post数据访问的网页地址 
    CSProto.PREPAID_CARD_TYPE_CHINAMOBILE_COMMON = 1; // 全国移动充值卡 
    CSProto.PREPAID_CARD_TYPE_CHINAUNICOM_COMMON = 2; // 全国联通一卡充 
    CSProto.PREPAID_CARD_TYPE_CHINATELECOM_COMMON = 3; // 中国电信充值付费卡 
    CSProto.GOLDMINE_HEAPTYPE_GOLD = 1; // 金矿 
    CSProto.GOLDMINE_HEAPTYPE_GEM = 2; // 宝石 
    CSProto.PHRASE_DOGAME_TIPSCODE_CANDOTASK = 0; // 需要进行成语游戏 
    CSProto.PHRASE_DOGAME_TIPSCODE_DAYGAMELIMIT = 1; // 今天已经选错太多次啦请明天再来吧 
    CSProto.PHRASE_DOGAME_TIPSCODE_ACCFORBID = 2; // 达到连续多日限制的提示直接己封号 
    CSProto.PHRASE_DOGAME_TIPSCODE_REFRESHLIMIT = 3; // 更换成语次数达到限制 
    CSProto.PHRASE_DOGAME_TIPSCODE_PHRASELIMIT = 4; // 这个成语选错3次啦 
    CSProto.PHRASE_DOGAME_TIPSCODE_VERIFYFAIL = 5; // 成语较验失败 
    CSProto.PHRASE_DOGAME_TIPSCODE_VERIFYSUCC = 6; // 成语较验成功 
    CSProto.PHRASE_DOGAME_TIPSCODE_HASFIN_TASK = 7; // 今天已经完成过该游戏了可以接着进入游戏下一步操作 
    CSProto.HYPER_MSGBOX_TYPE = 0; // 基础提示框 
    CSProto.HYPER_CMD_FORCE_UPDATE = 1; // 按强更处理参数1为更新链接各参数用两个#分隔 
    CSProto.HYPER_CMD_SUGGEST_UPDATE = 2; // 建议更新提示参数1为更新链接各参数用两个#分隔 
    CSProto.HYPER_CMD_AUTO_WRAPSCENE = 3; // 直接帮玩家点击切换场次参数1跳转到的场景模板ID 
    CSProto.HYPER_CMD_AUTO_OPENUI = 4; // 直接帮玩家点击切换打开某个UI参数1为打开的UI界面枚举参见开关功能枚举值 
    CSProto.SINASHOW_MONEY_EXCHANGE_TYPE_IN_TOGOLD = 1; // 兑入游戏币 
    CSProto.SINASHOW_MONEY_EXCHANGE_TYPE_OUT_TOSHOWBI = 2; // 兑出到秀币 
    CSProto.LABA_PLAY_TYPE_NORMAL = 0; // 正常玩 
    CSProto.LABA_PLAY_TYPE_FREE = 1; // 免费玩 
    CSProto.LABA_AWARD_TYPE_NOTAWARD = 0; // 未中奖 
    CSProto.LABA_AWARD_TYPE_NORMAL = 1; // 普通奖 
    CSProto.LABA_AWARD_TYPE_SPECIAL_ANY7 = 2; // ANY7大奖 
    CSProto.LABA_AWARD_TYPE_SPECIAL_7 = 3; // 7大奖 
    CSProto.LABA_AWARD_TYPE_SPECIAL_77 = 4; // 77大奖 
    CSProto.LABA_AWARD_TYPE_SPECIAL_777 = 5; // 777大奖 
    CSProto.LABA_AWARD_TYPE_LUCKY = 6; // 幸运大奖 
    CSProto.NEWACCSYSTEM_CHANNEL_VISITOR = 0; // 访客 
    CSProto.NEWACCSYSTEM_CHANNEL_MOBILE = 1; // 手机号 
    CSProto.NEWACCSYSTEM_CHANNEL_VIVO = 2; // VIVO 
    CSProto.NEWACCSYSTEM_CHANNEL_LEGAME = 3; // 乐视 
    CSProto.ITEMSTORE_ITEMSTAT_NORMAL = 0; // 正常售卖 
    CSProto.ITEMSTORE_ITEMSTAT_OFF = 1; // 己下架 
    CSProto.ITEMSTORE_SPECIALMASK_NOSUPPLY = 0; // 第0个bit位为1表明缺货 
    CSProto.ITEMSTORE_SPECIALMASK_HOT = 1; // 第1个bit位为1表明热卖中 
    CSProto.ZODIAC_SCENE_STATUS_IDLE = 0; // 闲置 
    CSProto.ZODIAC_SCENE_STATUS_WAIT_BET = 1; // 等待下注 
    CSProto.ZODIAC_SCENE_STATUS_WILL_SHOW_RESULT = 2; // 即将出结果 
    CSProto.ZODIAC_SCENE_STATUS_SHOW_RESULT = 3; // 出结果 
    CSProto.ZODIAC_SCENE_STATUS_COUNT = 4; // 状态数量 
    CSProto.ZODIAC_SCENE_ITEM_GROUP_0 = 0; // 对应转盘最外圈:即包含白羊、金牛等的圈 
    CSProto.ZODIAC_SCENE_ITEM_GROUP_1 = 1; // 对应转盘中间圈:即包含风、水等的圈 
    CSProto.ZODIAC_SCENE_ITEM_GROUP_2 = 2; // 对应转盘最里圈:即包含太阳、月亮等的圈 
    CSProto.ZODIAC_SCENE_ITEM_GROUP_BUNCH = 3; // 对应转盘虚拟圈:即串2，串3等 
    CSProto.ZODIAC_SCENE_ITEM_GROUP_COUNT = 4; // 分组数量 
    CSProto.ZODIAC_SCENE_ITEM_0_0_SHUIPING = 0; // 对应最外圈的水瓶(对应1月),依次往下是按星座的配置标准顺序 
    CSProto.ZODIAC_SCENE_ITEM_0_1 = 1; // 双鱼 
    CSProto.ZODIAC_SCENE_ITEM_0_2 = 2; //  
    CSProto.ZODIAC_SCENE_ITEM_0_3 = 3; //  
    CSProto.ZODIAC_SCENE_ITEM_0_4 = 4; //  
    CSProto.ZODIAC_SCENE_ITEM_0_5 = 5; //  
    CSProto.ZODIAC_SCENE_ITEM_0_6 = 6; //  
    CSProto.ZODIAC_SCENE_ITEM_0_7 = 7; //  
    CSProto.ZODIAC_SCENE_ITEM_0_8 = 8; //  
    CSProto.ZODIAC_SCENE_ITEM_0_9 = 9; //  
    CSProto.ZODIAC_SCENE_ITEM_0_10 = 10; //  
    CSProto.ZODIAC_SCENE_ITEM_0_11 = 11; // 摩羯 
    CSProto.ZODIAC_SCENE_ITEM_1_0_FENG = 12; // 风 
    CSProto.ZODIAC_SCENE_ITEM_1_1 = 13; // 火 
    CSProto.ZODIAC_SCENE_ITEM_1_2 = 14; // 水 
    CSProto.ZODIAC_SCENE_ITEM_1_3 = 15; // 土 
    CSProto.ZODIAC_SCENE_ITEM_1_4 = 16; // 雷 
    CSProto.ZODIAC_SCENE_ITEM_2_0_TAIYANG = 17; // 太阳 
    CSProto.ZODIAC_SCENE_ITEM_2_1_YUELIANG = 18; // 月亮 
    CSProto.ZODIAC_SCENE_ITEM_3_0_BUNCH2 = 19; // 串2 
    CSProto.ZODIAC_SCENE_ITEM_3_1_BUNCH3 = 20; // 串3 
    CSProto.ZODIAC_SCENE_ITEM_COUNT = 21; //  
    CSProto.ZODIAC_SCENE_ITEMBUNCH_0AND1 = 0; // 0串1 
    CSProto.ZODIAC_SCENE_ITEMBUNCH_2AND1 = 1; // 2串1 
    CSProto.ZODIAC_SCENE_ITEMBUNCH_0AND2 = 2; // 0串2 
    CSProto.ZODIAC_SCENE_ITEMBUNCH_0AND1AND2 = 3; // 1串2串3 
    CSProto.ZODIAC_SCENE_ITEMBUNCH_COUNT = 4; //  
    CSProto.COWBOY_TABLE_STATUS_DAY = 0; // 白天 
    CSProto.COWBOY_TABLE_STATUS_NIGHT = 1; // 夜晚 
    CSProto.COWBOY_BOMB_LVL_NULL = 0; // 代表没有炸弹 
    CSProto.COWBOY_BOMB_LVL_11 = 11; // 低级炸弹 
    CSProto.COWBOY_BOMB_LVL_12 = 12; // 中级炸弹 
    CSProto.COWBOY_BOMB_LVL_13 = 13; // 高级炸弹 
    //body export
    class PROPERTY {
        constructor() {
            this.bPropType = 0; //属性key 
            this.llPropValue = 0; //属性值 
        }
        messageName() { return "PROPERTY"; }
        messageValue() { return 0; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.write(Uint8Array, this.bPropType);
            encodeBuffer.write(Float64Array, this.llPropValue);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.bPropType = decodeBuffer.read(Uint8Array, 1);
            this.llPropValue = decodeBuffer.read(Float64Array, 1);
            return decodeBuffer.length();
        }
    }
    CSProto.PROPERTY = PROPERTY;
    class Privilege {
        constructor() {
            this.dwPrivilegeFlag = 0; //玩家特殊特权的标志，按位元计算的 
            this.wVipLevel = 0; //玩家特殊特权的等级 
        }
        messageName() { return "Privilege"; }
        messageValue() { return 0; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.write(Uint32Array, this.dwPrivilegeFlag);
            encodeBuffer.write(Uint16Array, this.wVipLevel);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.dwPrivilegeFlag = decodeBuffer.read(Uint32Array, 1);
            this.wVipLevel = decodeBuffer.read(Uint16Array, 1);
            return decodeBuffer.length();
        }
    }
    CSProto.Privilege = Privilege;
    class OnlineGiftPara {
        constructor() {
            this.bHasNextGift = 0; //1表明还可以倒计时领取下一个在线时长礼包 
            this.wLeftSeconds = 0; //下一个倒计时时长单位秒 
            this.wGiftGold = 0; //对应礼包的金币数 
            this.wVipGoldRatio = 0; //对应礼包的VIP可领取金币的倍数百分比 
        }
        messageName() { return "OnlineGiftPara"; }
        messageValue() { return 0; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.write(Uint8Array, this.bHasNextGift);
            encodeBuffer.write(Uint16Array, this.wLeftSeconds);
            encodeBuffer.write(Uint16Array, this.wGiftGold);
            if (9 < CSProto.Version) {
                encodeBuffer.write(Uint16Array, this.wVipGoldRatio);
            }
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.bHasNextGift = decodeBuffer.read(Uint8Array, 1);
            this.wLeftSeconds = decodeBuffer.read(Uint16Array, 1);
            this.wGiftGold = decodeBuffer.read(Uint16Array, 1);
            if (9 < CSProto.Version) {
                this.wVipGoldRatio = decodeBuffer.read(Uint16Array, 1);
            }
            return decodeBuffer.length();
        }
    }
    CSProto.OnlineGiftPara = OnlineGiftPara;
    class RoleBase {
        constructor() {
            this.bSex = 0; //性别 
            this.wMapID = 0; //1 
            this.szName = ""; //1 
            this.szSelfDefPhoto = ""; //玩家自定义头像,长度不为0时以此为准 
            this.szMobile = ""; //玩家手机号 
            this.astPlayerAttr = new Array(); //玩家属性集 
        }
        messageName() { return "RoleBase"; }
        messageValue() { return 0; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.write(Uint8Array, this.bSex);
            encodeBuffer.write(Uint16Array, this.wMapID);
            encodeBuffer.writeString(this.szName, CSProto.MAX_ROLE_NAME_LEN);
            encodeBuffer.writeString(this.szSelfDefPhoto, CSProto.MAX_ROLE_SELFDEF_PHOTO_LEN);
            encodeBuffer.writeString(this.szMobile, CSProto.MAX_MOBILE_LEN);
            var astPlayerAttrSize = this.astPlayerAttr.length > CSProto.LIFEATT_MAXVAL ? CSProto.LIFEATT_MAXVAL : this.astPlayerAttr.length;
            encodeBuffer.write(Uint16Array, astPlayerAttrSize);
            this.astPlayerAttr.length = astPlayerAttrSize;
            for (var i = 0; i < astPlayerAttrSize; i++) {
                encodeBuffer.skip(this.astPlayerAttr[i].encode(encodeBuffer.buffer(), encodeBuffer.offset()));
            }
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.bSex = decodeBuffer.read(Uint8Array, 1);
            this.wMapID = decodeBuffer.read(Uint16Array, 1);
            this.szName = decodeBuffer.readString(CSProto.MAX_ROLE_NAME_LEN);
            this.szSelfDefPhoto = decodeBuffer.readString(CSProto.MAX_ROLE_SELFDEF_PHOTO_LEN);
            this.szMobile = decodeBuffer.readString(CSProto.MAX_MOBILE_LEN);
            var astPlayerAttrSize = decodeBuffer.read(Uint16Array, 1);
            this.astPlayerAttr = new Array(astPlayerAttrSize);
            for (var i = 0; i < astPlayerAttrSize; i++) {
                this.astPlayerAttr[i] = new PROPERTY();
                decodeBuffer.skip(this.astPlayerAttr[i].decode(decodeBuffer.buffer(), decodeBuffer.offset()));
            }
            return decodeBuffer.length();
        }
    }
    CSProto.RoleBase = RoleBase;
    class RoleMisc {
        constructor() {
            this.dwObjectID = 0; //唯一标识handle 
            this.stBase = new RoleBase(); //角色详细基本信息 
            this.stPrivilege = new Privilege(); //玩家特权信息 
            this.stOnlineGift = new OnlineGiftPara(); //本阶段玩家在线礼包相关信息 
            this.stNextOnlineGift = new OnlineGiftPara(); //下一阶段玩家在线礼包相关信息 
            this.szAuthToken = ""; //对应的用于其他游戏登录该游戏平台的token 
        }
        messageName() { return "RoleMisc"; }
        messageValue() { return 0; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.write(Uint32Array, this.dwObjectID);
            encodeBuffer.skip(this.stBase.encode(encodeBuffer.buffer(), encodeBuffer.offset()));
            encodeBuffer.skip(this.stPrivilege.encode(encodeBuffer.buffer(), encodeBuffer.offset()));
            if (3 < CSProto.Version) {
                encodeBuffer.skip(this.stOnlineGift.encode(encodeBuffer.buffer(), encodeBuffer.offset()));
            }
            if (9 < CSProto.Version) {
                encodeBuffer.skip(this.stNextOnlineGift.encode(encodeBuffer.buffer(), encodeBuffer.offset()));
            }
            if (29 < CSProto.Version) {
                encodeBuffer.writeString(this.szAuthToken, CSProto.MAX_ACCOUNT_LEN);
            }
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.dwObjectID = decodeBuffer.read(Uint32Array, 1);
            decodeBuffer.skip(this.stBase.decode(decodeBuffer.buffer(), decodeBuffer.offset()));
            decodeBuffer.skip(this.stPrivilege.decode(decodeBuffer.buffer(), decodeBuffer.offset()));
            if (3 < CSProto.Version) {
                decodeBuffer.skip(this.stOnlineGift.decode(decodeBuffer.buffer(), decodeBuffer.offset()));
            }
            if (9 < CSProto.Version) {
                decodeBuffer.skip(this.stNextOnlineGift.decode(decodeBuffer.buffer(), decodeBuffer.offset()));
            }
            if (29 < CSProto.Version) {
                this.szAuthToken = decodeBuffer.readString(CSProto.MAX_ACCOUNT_LEN);
            }
            return decodeBuffer.length();
        }
    }
    CSProto.RoleMisc = RoleMisc;
    class ENTERVIEW_PLAYER {
        constructor() {
            this.wVipLevel = 0; //VIP等级 
            this.vip_level = 0; // alias : wVipLevel, VIP等级 
            this.szName = ""; //字符串类型的名字 
            this.name = ""; // alias : szName, 字符串类型的名字 
            this.bSex = 0; //性别,目前不会用到 
            this.sex = 0; // alias : bSex, 性别,目前不会用到 
            this.bHeadPhoto = 0; //系统头像,目前不会用到 
            this.head_photo = 0; // alias : bHeadPhoto, 系统头像,目前不会用到 
            this.llOwnGold = 0; //拥有的金币 
            this.own_gold_use_this = 0; // alias : llOwnGold, 拥有的金币 
            this.szSelfDefPhoto = ""; //玩家自定义头像,长度不为0时以此为准 
            this.self_def_photo = ""; // alias : szSelfDefPhoto, 玩家自定义头像,长度不为0时以此为准 
            this.wPosX = 0; //位置X,对于房间内的第一个玩家是1，其他依次类推 
            this.pos = 0; // alias : wPosX, 位置X,对于房间内的第一个玩家是1，其他依次类推 
            this.wPosY = 0; //位置Y,目前没有用到 
            this.dwReserve1 = 0; //保留字段1 
            this.dwReserve2 = 0; //保留字段1 
            this.llRoleBornID = 0; //角色ID 
            this.role_born_id = 0; // alias : llRoleBornID, 角色ID 
            this.llReserve4 = 0; //保留字段4 
        }
        messageName() { return "ENTERVIEW_PLAYER"; }
        messageValue() { return 0; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.write(Uint16Array, this.wVipLevel);
            encodeBuffer.writeString(this.szName, CSProto.MAX_ROLE_NAME_LEN);
            encodeBuffer.write(Uint8Array, this.bSex);
            encodeBuffer.write(Uint8Array, this.bHeadPhoto);
            encodeBuffer.write(Float64Array, this.llOwnGold);
            encodeBuffer.writeString(this.szSelfDefPhoto, CSProto.MAX_ROLE_SELFDEF_PHOTO_LEN);
            encodeBuffer.write(Uint16Array, this.wPosX);
            encodeBuffer.write(Uint16Array, this.wPosY);
            encodeBuffer.write(Uint32Array, this.dwReserve1);
            encodeBuffer.write(Uint32Array, this.dwReserve2);
            encodeBuffer.write(Float64Array, this.llRoleBornID);
            encodeBuffer.write(Float64Array, this.llReserve4);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.wVipLevel = decodeBuffer.read(Uint16Array, 1);
            this.vip_level = this.wVipLevel;
            this.szName = decodeBuffer.readString(CSProto.MAX_ROLE_NAME_LEN);
            this.name = this.szName;
            this.bSex = decodeBuffer.read(Uint8Array, 1);
            this.sex = this.bSex;
            this.bHeadPhoto = decodeBuffer.read(Uint8Array, 1);
            this.head_photo = this.bHeadPhoto;
            this.llOwnGold = decodeBuffer.read(Float64Array, 1);
            this.own_gold_use_this = this.llOwnGold;
            this.szSelfDefPhoto = decodeBuffer.readString(CSProto.MAX_ROLE_SELFDEF_PHOTO_LEN);
            this.self_def_photo = this.szSelfDefPhoto;
            this.wPosX = decodeBuffer.read(Uint16Array, 1);
            this.pos = this.wPosX;
            this.wPosY = decodeBuffer.read(Uint16Array, 1);
            this.dwReserve1 = decodeBuffer.read(Uint32Array, 1);
            this.dwReserve2 = decodeBuffer.read(Uint32Array, 1);
            this.llRoleBornID = decodeBuffer.read(Float64Array, 1);
            this.role_born_id = this.llRoleBornID;
            this.llReserve4 = decodeBuffer.read(Float64Array, 1);
            return decodeBuffer.length();
        }
    }
    CSProto.ENTERVIEW_PLAYER = ENTERVIEW_PLAYER;
    class OBJ_ENTERVIEW {
        constructor() {
            this.dwObjectID = 0; //实体handle 
            this.object_id = 0; // alias : dwObjectID, 实体handle 
            this.bObjectType = 0; //对象类型 
            this.object_type = 0; // alias : bObjectType, 对象类型 
            this.stPlayer = new ENTERVIEW_PLAYER(); //如果是用户类型 
            this.player = new ENTERVIEW_PLAYER(); // alias : stPlayer, 如果是用户类型 
        }
        messageName() { return "OBJ_ENTERVIEW"; }
        messageValue() { return 0; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.write(Uint32Array, this.dwObjectID);
            encodeBuffer.write(Uint8Array, this.bObjectType);
            if (this.bObjectType == CSProto.OBJPLAYER) {
                encodeBuffer.skip(this.stPlayer.encode(encodeBuffer.buffer(), encodeBuffer.offset()));
            }
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.dwObjectID = decodeBuffer.read(Uint32Array, 1);
            this.object_id = this.dwObjectID;
            this.bObjectType = decodeBuffer.read(Uint8Array, 1);
            this.object_type = this.bObjectType;
            if (this.bObjectType == CSProto.OBJPLAYER) {
                decodeBuffer.skip(this.stPlayer.decode(decodeBuffer.buffer(), decodeBuffer.offset()));
                this.player = this.stPlayer;
            }
            return decodeBuffer.length();
        }
    }
    CSProto.OBJ_ENTERVIEW = OBJ_ENTERVIEW;
    class OBJ_LEAVEVIEW {
        constructor() {
            this.dwObjectID = 0; //实体handle 
            this.object_id = 0; // alias : dwObjectID, 实体handle 
            this.bObjectType = 0; //对象类型目前应该仅会有OBJPLAYER 
            this.object_type = 0; // alias : bObjectType, 对象类型目前应该仅会有OBJPLAYER 
        }
        messageName() { return "OBJ_LEAVEVIEW"; }
        messageValue() { return 0; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.write(Uint32Array, this.dwObjectID);
            encodeBuffer.write(Uint8Array, this.bObjectType);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.dwObjectID = decodeBuffer.read(Uint32Array, 1);
            this.object_id = this.dwObjectID;
            this.bObjectType = decodeBuffer.read(Uint8Array, 1);
            this.object_type = this.bObjectType;
            return decodeBuffer.length();
        }
    }
    CSProto.OBJ_LEAVEVIEW = OBJ_LEAVEVIEW;
    class PackObj {
        constructor() {
            this.bObjectType = 0; //包裹对象类型 
            this.stRolePropPack = new PROPERTY(); //属性类,目前主要用于邮件 
        }
        messageName() { return "PackObj"; }
        messageValue() { return 0; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.write(Uint8Array, this.bObjectType);
            if (this.bObjectType == CSProto.OBJROLEPROP) {
                encodeBuffer.skip(this.stRolePropPack.encode(encodeBuffer.buffer(), encodeBuffer.offset()));
            }
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.bObjectType = decodeBuffer.read(Uint8Array, 1);
            if (this.bObjectType == CSProto.OBJROLEPROP) {
                decodeBuffer.skip(this.stRolePropPack.decode(decodeBuffer.buffer(), decodeBuffer.offset()));
            }
            return decodeBuffer.length();
        }
    }
    CSProto.PackObj = PackObj;
    class PageBreakPara {
        constructor() {
            this.wPageIndex = 0; //对应的页序号，注意统一从1开始 
            this.wPageSize = 0; //一页的大小 
            this.wTotalPages = 0; //总页数 
            this.dwTotalCount = 0; //对应查询结果的总个数 
        }
        messageName() { return "PageBreakPara"; }
        messageValue() { return 0; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.write(Uint16Array, this.wPageIndex);
            encodeBuffer.write(Uint16Array, this.wPageSize);
            encodeBuffer.write(Uint16Array, this.wTotalPages);
            encodeBuffer.write(Uint32Array, this.dwTotalCount);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.wPageIndex = decodeBuffer.read(Uint16Array, 1);
            this.wPageSize = decodeBuffer.read(Uint16Array, 1);
            this.wTotalPages = decodeBuffer.read(Uint16Array, 1);
            this.dwTotalCount = decodeBuffer.read(Uint32Array, 1);
            return decodeBuffer.length();
        }
    }
    CSProto.PageBreakPara = PageBreakPara;
    class CMD_ERROR_SC {
        constructor() {
            this.bErrType = 0; //错误码类型,参见ERROR_TYPE_NORMAL等定义 
            this.wErrCode = 0; //错误码值,对于客户端关心的错误码值可以根据这个处理 
            this.szErrMsg = ""; //错误信息 
        }
        messageName() { return "CMD_ERROR"; }
        messageValue() { return CSProto.CMD_ERROR; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.write(Uint8Array, this.bErrType);
            encodeBuffer.write(Uint16Array, this.wErrCode);
            encodeBuffer.writeString(this.szErrMsg, CSProto.MAX_ERROR_MSG_LEN);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.bErrType = decodeBuffer.read(Uint8Array, 1);
            this.wErrCode = decodeBuffer.read(Uint16Array, 1);
            this.szErrMsg = decodeBuffer.readString(CSProto.MAX_ERROR_MSG_LEN);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_ERROR_SC = CMD_ERROR_SC;
    class CMD_GOLD_NOTENOUGH_ERROR_SC {
        constructor() {
            this.szErrMsg = ""; //错误信息 
            this.bOperatersType = 0; //运营商类型,参见OPERATERS_TYPE_MOBILE等枚举定义 
            this.szPayCode = ""; //推荐的支付代码若客户端不支持的需要做容错 
            this.llNeedMoreGold = 0; //需要额外的金币数 
        }
        messageName() { return "CMD_GOLD_NOTENOUGH_ERROR"; }
        messageValue() { return CSProto.CMD_GOLD_NOTENOUGH_ERROR; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.writeString(this.szErrMsg, CSProto.MAX_ERROR_MSG_LEN);
            encodeBuffer.write(Uint8Array, this.bOperatersType);
            encodeBuffer.writeString(this.szPayCode, 32);
            if (12 < CSProto.Version) {
                encodeBuffer.write(Float64Array, this.llNeedMoreGold);
            }
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.szErrMsg = decodeBuffer.readString(CSProto.MAX_ERROR_MSG_LEN);
            this.bOperatersType = decodeBuffer.read(Uint8Array, 1);
            this.szPayCode = decodeBuffer.readString(32);
            if (12 < CSProto.Version) {
                this.llNeedMoreGold = decodeBuffer.read(Float64Array, 1);
            }
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_GOLD_NOTENOUGH_ERROR_SC = CMD_GOLD_NOTENOUGH_ERROR_SC;
    class CMD_TEST_ECHO_CS {
        constructor() {
            this.szEchoMsg = ""; //echo内容 
        }
        messageName() { return "CMD_TEST_ECHO"; }
        messageValue() { return CSProto.CMD_TEST_ECHO; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.writeString(this.szEchoMsg, 100);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.szEchoMsg = decodeBuffer.readString(100);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_TEST_ECHO_CS = CMD_TEST_ECHO_CS;
    class CMD_TEST_ECHO_SC {
        constructor() {
            this.szEchoMsg = ""; //echo内容 
        }
        messageName() { return "CMD_TEST_ECHO"; }
        messageValue() { return CSProto.CMD_TEST_ECHO; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.writeString(this.szEchoMsg, 100);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.szEchoMsg = decodeBuffer.readString(100);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_TEST_ECHO_SC = CMD_TEST_ECHO_SC;
    class ResID {
        constructor() {
            this.szResID = ""; //ResID 
        }
        messageName() { return "ResID"; }
        messageValue() { return 0; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.writeString(this.szResID, 128);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.szResID = decodeBuffer.readString(128);
            return decodeBuffer.length();
        }
    }
    CSProto.ResID = ResID;
    class MD5Code {
        constructor() {
            this.szResID = ""; //ResID 
            this.szMD5 = ""; //MD5码 
        }
        messageName() { return "MD5Code"; }
        messageValue() { return 0; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.writeString(this.szResID, 128);
            encodeBuffer.writeString(this.szMD5, CSProto.MAX_MD5CODE_LEN);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.szResID = decodeBuffer.readString(128);
            this.szMD5 = decodeBuffer.readString(CSProto.MAX_MD5CODE_LEN);
            return decodeBuffer.length();
        }
    }
    CSProto.MD5Code = MD5Code;
    class CMD_REQUEST_RES_CS {
        constructor() {
            this.bType = 0; //客户端下载资源类型参见CLT_RES_TYPE_COMMON_CONF等定义 
            this.astResList = new Array(); //资源列表ID 
        }
        messageName() { return "CMD_REQUEST_RES"; }
        messageValue() { return CSProto.CMD_REQUEST_RES; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.write(Uint8Array, this.bType);
            var astResListSize = this.astResList.length > CSProto.MAX_BIN_LIST_LEN ? CSProto.MAX_BIN_LIST_LEN : this.astResList.length;
            encodeBuffer.write(Uint16Array, astResListSize);
            this.astResList.length = astResListSize;
            for (var i = 0; i < astResListSize; i++) {
                encodeBuffer.skip(this.astResList[i].encode(encodeBuffer.buffer(), encodeBuffer.offset()));
            }
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.bType = decodeBuffer.read(Uint8Array, 1);
            var astResListSize = decodeBuffer.read(Uint16Array, 1);
            this.astResList = new Array(astResListSize);
            for (var i = 0; i < astResListSize; i++) {
                this.astResList[i] = new ResID();
                decodeBuffer.skip(this.astResList[i].decode(decodeBuffer.buffer(), decodeBuffer.offset()));
            }
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_REQUEST_RES_CS = CMD_REQUEST_RES_CS;
    class CMD_REQUEST_RES_SC {
        constructor() {
            this.bType = 0; //客户端下载资源类型参见CLT_RES_TYPE_COMMON_CONF等定义 
            this.szResID = ""; //ResID 
            this.bSegCount = 0; //调整为特殊含义,分段总数,大于3永远是3 
            this.bSegID = 0; //调整为特殊含义,分段ID,第1个是0,中间是1,最后是2 
            this.szSegData = new Array(); //分段数据 
        }
        messageName() { return "CMD_REQUEST_RES"; }
        messageValue() { return CSProto.CMD_REQUEST_RES; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.write(Uint8Array, this.bType);
            encodeBuffer.writeString(this.szResID, 128);
            encodeBuffer.write(Uint8Array, this.bSegCount);
            encodeBuffer.write(Uint8Array, this.bSegID);
            var szSegDataSize = this.szSegData.length > CSProto.MAX_DOWNLOAD_PKG_DATA ? CSProto.MAX_DOWNLOAD_PKG_DATA : this.szSegData.length;
            encodeBuffer.write(Uint16Array, szSegDataSize);
            this.szSegData.length = szSegDataSize;
            encodeBuffer.write(Uint8Array, this.szSegData);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.bType = decodeBuffer.read(Uint8Array, 1);
            this.szResID = decodeBuffer.readString(128);
            this.bSegCount = decodeBuffer.read(Uint8Array, 1);
            this.bSegID = decodeBuffer.read(Uint8Array, 1);
            var szSegDataSize = decodeBuffer.read(Uint16Array, 1);
            this.szSegData = new Array(szSegDataSize);
            this.szSegData = decodeBuffer.read(Uint8Array, szSegDataSize);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_REQUEST_RES_SC = CMD_REQUEST_RES_SC;
    class CMD_GET_BIN_MD5LIST_CS {
        constructor() {
            this.bResType = 0; //资源类型 
            this.astResList = new Array(); //资源列表ID 
        }
        messageName() { return "CMD_GET_BIN_MD5LIST"; }
        messageValue() { return CSProto.CMD_GET_BIN_MD5LIST; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.write(Uint8Array, this.bResType);
            var astResListSize = this.astResList.length > CSProto.MAX_BIN_LIST_LEN ? CSProto.MAX_BIN_LIST_LEN : this.astResList.length;
            encodeBuffer.write(Uint16Array, astResListSize);
            this.astResList.length = astResListSize;
            for (var i = 0; i < astResListSize; i++) {
                encodeBuffer.skip(this.astResList[i].encode(encodeBuffer.buffer(), encodeBuffer.offset()));
            }
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.bResType = decodeBuffer.read(Uint8Array, 1);
            var astResListSize = decodeBuffer.read(Uint16Array, 1);
            this.astResList = new Array(astResListSize);
            for (var i = 0; i < astResListSize; i++) {
                this.astResList[i] = new ResID();
                decodeBuffer.skip(this.astResList[i].decode(decodeBuffer.buffer(), decodeBuffer.offset()));
            }
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_GET_BIN_MD5LIST_CS = CMD_GET_BIN_MD5LIST_CS;
    class CMD_GET_BIN_MD5LIST_SC {
        constructor() {
            this.bResType = 0; //资源类型 
            this.stMD5List = new Array(); //MD5列表 
        }
        messageName() { return "CMD_GET_BIN_MD5LIST"; }
        messageValue() { return CSProto.CMD_GET_BIN_MD5LIST; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.write(Uint8Array, this.bResType);
            var stMD5ListSize = this.stMD5List.length > CSProto.MAX_BIN_LIST_LEN ? CSProto.MAX_BIN_LIST_LEN : this.stMD5List.length;
            encodeBuffer.write(Uint16Array, stMD5ListSize);
            this.stMD5List.length = stMD5ListSize;
            for (var i = 0; i < stMD5ListSize; i++) {
                encodeBuffer.skip(this.stMD5List[i].encode(encodeBuffer.buffer(), encodeBuffer.offset()));
            }
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.bResType = decodeBuffer.read(Uint8Array, 1);
            var stMD5ListSize = decodeBuffer.read(Uint16Array, 1);
            this.stMD5List = new Array(stMD5ListSize);
            for (var i = 0; i < stMD5ListSize; i++) {
                this.stMD5List[i] = new MD5Code();
                decodeBuffer.skip(this.stMD5List[i].decode(decodeBuffer.buffer(), decodeBuffer.offset()));
            }
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_GET_BIN_MD5LIST_SC = CMD_GET_BIN_MD5LIST_SC;
    class CMD_ROLE_MISC_SC {
        constructor() {
            this.stData = new RoleMisc(); //角色混杂信息 
        }
        messageName() { return "CMD_ROLE_MISC"; }
        messageValue() { return CSProto.CMD_ROLE_MISC; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.skip(this.stData.encode(encodeBuffer.buffer(), encodeBuffer.offset()));
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            decodeBuffer.skip(this.stData.decode(decodeBuffer.buffer(), decodeBuffer.offset()));
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_ROLE_MISC_SC = CMD_ROLE_MISC_SC;
    class CMD_ATT_CHANGE_SC {
        constructor() {
            this.dwObjectID = 0; //目标ID 
            this.bObjectType = 0; //目标类型 
            this.astAttr = new Array(); //玩家属性集 
        }
        messageName() { return "CMD_ATT_CHANGE"; }
        messageValue() { return CSProto.CMD_ATT_CHANGE; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.write(Uint32Array, this.dwObjectID);
            encodeBuffer.write(Uint8Array, this.bObjectType);
            var astAttrSize = this.astAttr.length > CSProto.LIFEATT_MAXVAL ? CSProto.LIFEATT_MAXVAL : this.astAttr.length;
            encodeBuffer.write(Uint16Array, astAttrSize);
            this.astAttr.length = astAttrSize;
            for (var i = 0; i < astAttrSize; i++) {
                encodeBuffer.skip(this.astAttr[i].encode(encodeBuffer.buffer(), encodeBuffer.offset()));
            }
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.dwObjectID = decodeBuffer.read(Uint32Array, 1);
            this.bObjectType = decodeBuffer.read(Uint8Array, 1);
            var astAttrSize = decodeBuffer.read(Uint16Array, 1);
            this.astAttr = new Array(astAttrSize);
            for (var i = 0; i < astAttrSize; i++) {
                this.astAttr[i] = new PROPERTY();
                decodeBuffer.skip(this.astAttr[i].decode(decodeBuffer.buffer(), decodeBuffer.offset()));
            }
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_ATT_CHANGE_SC = CMD_ATT_CHANGE_SC;
    class CMD_ALOGIN_CS {
        constructor() {
            this.bVerionType = 0; //版本平台类型,参见CLT_PLATFORM_TYPE_ANDROID等枚举定义 
            this.bVerionMain = 0; //主版本号 
            this.bVerionFeature = 0; //特征版本号 
            this.bVerionBuild = 0; //编译次数 
            this.szAccount = ""; //帐号 
            this.szName = ""; //1 
            this.dwCltVer = 0; //新客户端版本编码 
            this.szChannel = ""; //渠道 
            this.bIfCheckUpdate = 0; //是否做版本升级校验 
            this.bOperatersType = 0; //运营商类型,参见OPERATERS_TYPE_MOBILE等枚举定义 
            this.dwSpecChannlVer = 0; //特殊渠道版本类型,参见SPEC_CHANNEL_VER_CLASSICFRUIT等枚举定义 
            this.szXGToken = ""; //接入了信鸽时对应生成的设备token 
            this.iMapTemplateID = 0; //初始想要进入的场景模板ID不填充值默认是进入大厅 
        }
        messageName() { return "CMD_ALOGIN"; }
        messageValue() { return CSProto.CMD_ALOGIN; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.write(Uint8Array, this.bVerionType);
            encodeBuffer.write(Uint8Array, this.bVerionMain);
            encodeBuffer.write(Uint8Array, this.bVerionFeature);
            encodeBuffer.write(Uint8Array, this.bVerionBuild);
            encodeBuffer.writeString(this.szAccount, CSProto.MAX_ACCOUNT_LEN);
            encodeBuffer.writeString(this.szName, CSProto.MAX_ROLE_NAME_LEN);
            if (5 < CSProto.Version) {
                encodeBuffer.write(Uint32Array, this.dwCltVer);
            }
            if (5 < CSProto.Version) {
                encodeBuffer.writeString(this.szChannel, CSProto.MAX_ALOGIN_CAHNNLE_LEN);
            }
            if (9 < CSProto.Version) {
                encodeBuffer.write(Uint8Array, this.bIfCheckUpdate);
            }
            if (10 < CSProto.Version) {
                encodeBuffer.write(Uint8Array, this.bOperatersType);
            }
            if (11 < CSProto.Version) {
                encodeBuffer.write(Uint32Array, this.dwSpecChannlVer);
            }
            if (24 < CSProto.Version) {
                encodeBuffer.writeString(this.szXGToken, 128);
            }
            if (34 < CSProto.Version) {
                encodeBuffer.write(Int32Array, this.iMapTemplateID);
            }
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.bVerionType = decodeBuffer.read(Uint8Array, 1);
            this.bVerionMain = decodeBuffer.read(Uint8Array, 1);
            this.bVerionFeature = decodeBuffer.read(Uint8Array, 1);
            this.bVerionBuild = decodeBuffer.read(Uint8Array, 1);
            this.szAccount = decodeBuffer.readString(CSProto.MAX_ACCOUNT_LEN);
            this.szName = decodeBuffer.readString(CSProto.MAX_ROLE_NAME_LEN);
            if (5 < CSProto.Version) {
                this.dwCltVer = decodeBuffer.read(Uint32Array, 1);
            }
            if (5 < CSProto.Version) {
                this.szChannel = decodeBuffer.readString(CSProto.MAX_ALOGIN_CAHNNLE_LEN);
            }
            if (9 < CSProto.Version) {
                this.bIfCheckUpdate = decodeBuffer.read(Uint8Array, 1);
            }
            if (10 < CSProto.Version) {
                this.bOperatersType = decodeBuffer.read(Uint8Array, 1);
            }
            if (11 < CSProto.Version) {
                this.dwSpecChannlVer = decodeBuffer.read(Uint32Array, 1);
            }
            if (24 < CSProto.Version) {
                this.szXGToken = decodeBuffer.readString(128);
            }
            if (34 < CSProto.Version) {
                this.iMapTemplateID = decodeBuffer.read(Int32Array, 1);
            }
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_ALOGIN_CS = CMD_ALOGIN_CS;
    class CMD_ALOGIN_SC {
        constructor() {
            this.bResult = 0; //账户登录结果码 
            this.szHintMsg = ""; //当alogin失败时的对应错误描述 
            this.szDownLink = ""; //当结果码为更新提示时对应了下载地址 
        }
        messageName() { return "CMD_ALOGIN"; }
        messageValue() { return CSProto.CMD_ALOGIN; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.write(Uint8Array, this.bResult);
            encodeBuffer.writeString(this.szHintMsg, CSProto.MAX_ALOGIN_HINTMSG_LEN);
            if (9 < CSProto.Version) {
                encodeBuffer.writeString(this.szDownLink, CSProto.MAX_DOWNLOAD_LINK_LEN);
            }
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.bResult = decodeBuffer.read(Uint8Array, 1);
            this.szHintMsg = decodeBuffer.readString(CSProto.MAX_ALOGIN_HINTMSG_LEN);
            if (9 < CSProto.Version) {
                this.szDownLink = decodeBuffer.readString(CSProto.MAX_DOWNLOAD_LINK_LEN);
            }
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_ALOGIN_SC = CMD_ALOGIN_SC;
    class CMD_KICKOFF_ACCOUNT_SC {
        constructor() {
            this.bReason = 0; //下线的理由 
        }
        messageName() { return "CMD_KICKOFF_ACCOUNT"; }
        messageValue() { return CSProto.CMD_KICKOFF_ACCOUNT; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.write(Uint8Array, this.bReason);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.bReason = decodeBuffer.read(Uint8Array, 1);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_KICKOFF_ACCOUNT_SC = CMD_KICKOFF_ACCOUNT_SC;
    class CMD_PING_CS {
        constructor() {
            this.dwClientTick = 0; //Client Tick number 
            this.dwLastDelay = 0; //上次延时时间 
        }
        messageName() { return "CMD_PING"; }
        messageValue() { return CSProto.CMD_PING; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.write(Uint32Array, this.dwClientTick);
            if (6 < CSProto.Version) {
                encodeBuffer.write(Uint32Array, this.dwLastDelay);
            }
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.dwClientTick = decodeBuffer.read(Uint32Array, 1);
            if (6 < CSProto.Version) {
                this.dwLastDelay = decodeBuffer.read(Uint32Array, 1);
            }
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_PING_CS = CMD_PING_CS;
    class CMD_PING_SC {
        constructor() {
            this.dwClientTick = 0; //Client Tick number 
        }
        messageName() { return "CMD_PING"; }
        messageValue() { return CSProto.CMD_PING; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.write(Uint32Array, this.dwClientTick);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.dwClientTick = decodeBuffer.read(Uint32Array, 1);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_PING_SC = CMD_PING_SC;
    class CMD_QUERY_OTHERROLE_INFO_CS {
        constructor() {
            this.llRoleID = 0; //查询的玩家ID 
        }
        messageName() { return "CMD_QUERY_OTHERROLE_INFO"; }
        messageValue() { return CSProto.CMD_QUERY_OTHERROLE_INFO; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.write(Float64Array, this.llRoleID);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.llRoleID = decodeBuffer.read(Float64Array, 1);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_QUERY_OTHERROLE_INFO_CS = CMD_QUERY_OTHERROLE_INFO_CS;
    class CMD_QUERY_OTHERROLE_INFO_SC {
        constructor() {
            this.cmd_ret = 0; //0成功1数据不存在其他失败 
            this.llRoleID = 0; //查询的玩家ID 
            this.szName = ""; //字符串类型的名字 
            this.wVipLevel = 0; //VIP等级 
            this.llOwnGold = 0; //拥有的金币 
            this.bHeadPhoto = 0; //系统头像 
            this.szSelfDefPhoto = ""; //玩家自定义头像,长度不为0时以此为准 
        }
        messageName() { return "CMD_QUERY_OTHERROLE_INFO"; }
        messageValue() { return CSProto.CMD_QUERY_OTHERROLE_INFO; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.write(Int32Array, this.cmd_ret);
            encodeBuffer.write(Float64Array, this.llRoleID);
            encodeBuffer.writeString(this.szName, CSProto.MAX_ROLE_NAME_LEN);
            encodeBuffer.write(Uint16Array, this.wVipLevel);
            encodeBuffer.write(Float64Array, this.llOwnGold);
            encodeBuffer.write(Uint8Array, this.bHeadPhoto);
            encodeBuffer.writeString(this.szSelfDefPhoto, CSProto.MAX_ROLE_SELFDEF_PHOTO_LEN);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.cmd_ret = decodeBuffer.read(Int32Array, 1);
            this.llRoleID = decodeBuffer.read(Float64Array, 1);
            this.szName = decodeBuffer.readString(CSProto.MAX_ROLE_NAME_LEN);
            this.wVipLevel = decodeBuffer.read(Uint16Array, 1);
            this.llOwnGold = decodeBuffer.read(Float64Array, 1);
            this.bHeadPhoto = decodeBuffer.read(Uint8Array, 1);
            this.szSelfDefPhoto = decodeBuffer.readString(CSProto.MAX_ROLE_SELFDEF_PHOTO_LEN);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_QUERY_OTHERROLE_INFO_SC = CMD_QUERY_OTHERROLE_INFO_SC;
    class SlotBaseData {
        constructor() {
            this.bTabHasMoney = 0; //当前桌存在的币 
            this.wGotBBCount = 0; //当前桌已经获得的BB数 
            this.wGotRBCount = 0; //当前桌已经获得的RB数 
            this.wRoundCountSinceBouns = 0; //从上次获取BB和RB后当前已经进行的转数 
            this.dwRoundCountTotal = 0; //当前已经进行的转数 
        }
        messageName() { return "SlotBaseData"; }
        messageValue() { return 0; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.write(Uint8Array, this.bTabHasMoney);
            encodeBuffer.write(Uint16Array, this.wGotBBCount);
            encodeBuffer.write(Uint16Array, this.wGotRBCount);
            encodeBuffer.write(Uint16Array, this.wRoundCountSinceBouns);
            encodeBuffer.write(Uint16Array, this.dwRoundCountTotal);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.bTabHasMoney = decodeBuffer.read(Uint8Array, 1);
            this.wGotBBCount = decodeBuffer.read(Uint16Array, 1);
            this.wGotRBCount = decodeBuffer.read(Uint16Array, 1);
            this.wRoundCountSinceBouns = decodeBuffer.read(Uint16Array, 1);
            this.dwRoundCountTotal = decodeBuffer.read(Uint16Array, 1);
            return decodeBuffer.length();
        }
    }
    CSProto.SlotBaseData = SlotBaseData;
    class SlotRoundData {
        constructor() {
            this.bWheelViewID = 0; //本转的转轮结果ID,参见EnWheelView的枚举 
            this.bOperRuleID = 0; //本转的操作按钮顺序要求,参见EnOperRule的枚举 
            this.bOuteSideMode = 0; //本转对应展示的外部模式,参见EnOuteSideMode的枚举 
            this.wPrizeGold = 0; //本转将获得币数 
            this.bShowID = 0; //演出类型,参见EnShowType 
            this.bShowRoudLeft = 0; //演出类型对应的剩余转数,当为0时下一转的演出是重新抽选的 
            this.shBonusRealGotTotalGold = 0; //本轮中开出Bonus获得的实际币,己扣除需要投入的币 
            this.bBonusStepLeft = 0; //剩余的bonus阶段数,在Bonus模式时有效 
            this.bBonusStepLeftGame = 0; //bonus发奖阶段总剩余Game,不包含额外的bonus阶段 
            this.bBonusSpecStep = 0; //是否是1st到3st或者bonuschance的额外bonus,参见枚举EnSpecBonusType 
            this.bBonusStepLeftHit = 0; //对1st到3st或者bonuschance的额外bouns的剩余hit 
            this.bIsFirtBonusRound = 0; //是否是Bonus确定的第一转,在Bonus模式时有效 
            this.bBonusType = 0; //发奖过程对应的是BB还是RB,参见EnBonusType的枚举 
            this.bWindowShowID = 0; //确定发奖时右上角演出类型,参见EnShowType 
            this.bIsSpecStepFirstRound = 0; //是否是Bonus发奖中的某额外bonus阶段的第一转,在Bonus模式时有效 
            this.bIsFinalBonusRound = 0; //是否是Bonus发奖的最后一转,在Bonus模式时有效,参见EnIsFinalBounsRoundType:0不是,1是,2是当操作不正确时就是 
            this.wNextRoundCostGold = 0; //下一转将消耗币数 
        }
        messageName() { return "SlotRoundData"; }
        messageValue() { return 0; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.write(Uint8Array, this.bWheelViewID);
            encodeBuffer.write(Uint8Array, this.bOperRuleID);
            encodeBuffer.write(Uint8Array, this.bOuteSideMode);
            encodeBuffer.write(Uint16Array, this.wPrizeGold);
            encodeBuffer.write(Uint8Array, this.bShowID);
            encodeBuffer.write(Uint8Array, this.bShowRoudLeft);
            if (this.bOuteSideMode == CSProto.OUTESIDE_MODE_BONUSSENDING) {
                encodeBuffer.write(Int16Array, this.shBonusRealGotTotalGold);
            }
            if (this.bOuteSideMode == CSProto.OUTESIDE_MODE_BONUSSENDING) {
                encodeBuffer.write(Uint8Array, this.bBonusStepLeft);
            }
            encodeBuffer.write(Uint8Array, this.bBonusStepLeftGame);
            if (this.bOuteSideMode == CSProto.OUTESIDE_MODE_BONUSSENDING) {
                encodeBuffer.write(Uint8Array, this.bBonusSpecStep);
            }
            if (this.bOuteSideMode == CSProto.OUTESIDE_MODE_BONUSSENDING) {
                encodeBuffer.write(Uint8Array, this.bBonusStepLeftHit);
            }
            if (this.bOuteSideMode == CSProto.OUTESIDE_MODE_BONUSSENDING) {
                encodeBuffer.write(Uint8Array, this.bIsFirtBonusRound);
            }
            if (this.bOuteSideMode == CSProto.OUTESIDE_MODE_BONUSSENDING) {
                encodeBuffer.write(Uint8Array, this.bBonusType);
            }
            if (this.bOuteSideMode == CSProto.OUTESIDE_MODE_BONUSCONFIRM) {
                encodeBuffer.write(Uint8Array, this.bWindowShowID);
            }
            if (this.bOuteSideMode == CSProto.OUTESIDE_MODE_BONUSSENDING) {
                encodeBuffer.write(Uint8Array, this.bIsSpecStepFirstRound);
            }
            if (this.bOuteSideMode == CSProto.OUTESIDE_MODE_BONUSSENDING) {
                encodeBuffer.write(Uint8Array, this.bIsFinalBonusRound);
            }
            encodeBuffer.write(Uint16Array, this.wNextRoundCostGold);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.bWheelViewID = decodeBuffer.read(Uint8Array, 1);
            this.bOperRuleID = decodeBuffer.read(Uint8Array, 1);
            this.bOuteSideMode = decodeBuffer.read(Uint8Array, 1);
            this.wPrizeGold = decodeBuffer.read(Uint16Array, 1);
            this.bShowID = decodeBuffer.read(Uint8Array, 1);
            this.bShowRoudLeft = decodeBuffer.read(Uint8Array, 1);
            if (this.bOuteSideMode == CSProto.OUTESIDE_MODE_BONUSSENDING) {
                this.shBonusRealGotTotalGold = decodeBuffer.read(Int16Array, 1);
            }
            if (this.bOuteSideMode == CSProto.OUTESIDE_MODE_BONUSSENDING) {
                this.bBonusStepLeft = decodeBuffer.read(Uint8Array, 1);
            }
            this.bBonusStepLeftGame = decodeBuffer.read(Uint8Array, 1);
            if (this.bOuteSideMode == CSProto.OUTESIDE_MODE_BONUSSENDING) {
                this.bBonusSpecStep = decodeBuffer.read(Uint8Array, 1);
            }
            if (this.bOuteSideMode == CSProto.OUTESIDE_MODE_BONUSSENDING) {
                this.bBonusStepLeftHit = decodeBuffer.read(Uint8Array, 1);
            }
            if (this.bOuteSideMode == CSProto.OUTESIDE_MODE_BONUSSENDING) {
                this.bIsFirtBonusRound = decodeBuffer.read(Uint8Array, 1);
            }
            if (this.bOuteSideMode == CSProto.OUTESIDE_MODE_BONUSSENDING) {
                this.bBonusType = decodeBuffer.read(Uint8Array, 1);
            }
            if (this.bOuteSideMode == CSProto.OUTESIDE_MODE_BONUSCONFIRM) {
                this.bWindowShowID = decodeBuffer.read(Uint8Array, 1);
            }
            if (this.bOuteSideMode == CSProto.OUTESIDE_MODE_BONUSSENDING) {
                this.bIsSpecStepFirstRound = decodeBuffer.read(Uint8Array, 1);
            }
            if (this.bOuteSideMode == CSProto.OUTESIDE_MODE_BONUSSENDING) {
                this.bIsFinalBonusRound = decodeBuffer.read(Uint8Array, 1);
            }
            this.wNextRoundCostGold = decodeBuffer.read(Uint16Array, 1);
            return decodeBuffer.length();
        }
    }
    CSProto.SlotRoundData = SlotRoundData;
    class CMD_CAN_BEGIN_SLOT_CS {
        constructor() {
            this.bReason = 0; //参见CAN_BEGIN_SLOT_REASON_LOGIN等枚举 
        }
        messageName() { return "CMD_CAN_BEGIN_SLOT"; }
        messageValue() { return CSProto.CMD_CAN_BEGIN_SLOT; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.write(Uint8Array, this.bReason);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.bReason = decodeBuffer.read(Uint8Array, 1);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_CAN_BEGIN_SLOT_CS = CMD_CAN_BEGIN_SLOT_CS;
    class CMD_CAN_BEGIN_SLOT_SC {
        constructor() {
            this.wMapID = 0; //对应地图ID,目前无用 
            this.dwSceneID = 0; //对应的场景ID 
            this.dwTableID = 0; //对应的桌台ID,目前无用 
            this.stTablesBase = new SlotBaseData(); //桌台基础数据 
            this.stCurRound = new SlotRoundData(); //当前的桌台数据 
        }
        messageName() { return "CMD_CAN_BEGIN_SLOT"; }
        messageValue() { return CSProto.CMD_CAN_BEGIN_SLOT; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.write(Uint16Array, this.wMapID);
            encodeBuffer.write(Uint32Array, this.dwSceneID);
            encodeBuffer.write(Uint32Array, this.dwTableID);
            encodeBuffer.skip(this.stTablesBase.encode(encodeBuffer.buffer(), encodeBuffer.offset()));
            encodeBuffer.skip(this.stCurRound.encode(encodeBuffer.buffer(), encodeBuffer.offset()));
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.wMapID = decodeBuffer.read(Uint16Array, 1);
            this.dwSceneID = decodeBuffer.read(Uint32Array, 1);
            this.dwTableID = decodeBuffer.read(Uint32Array, 1);
            decodeBuffer.skip(this.stTablesBase.decode(decodeBuffer.buffer(), decodeBuffer.offset()));
            decodeBuffer.skip(this.stCurRound.decode(decodeBuffer.buffer(), decodeBuffer.offset()));
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_CAN_BEGIN_SLOT_SC = CMD_CAN_BEGIN_SLOT_SC;
    class CMD_DO_SLOTROUND_BEGIN_SC {
        constructor() {
            this.stTablesBase = new SlotBaseData(); //桌台基础数据 
            this.bRoundDataType = 0; //将开出的转轮数据对应选取哪个,参见NEXT_ROUNDDATA_TYPE_NONEOP等定义 
            this.stOpRightRet = new SlotRoundData(); //转轮结果数据,没有操作要求或者有操作要求但操作正确时的结果 
            this.stOpWrongRet = new SlotRoundData(); //转轮结果数据,有操作要求且操作错误时的结果 
        }
        messageName() { return "CMD_DO_SLOTROUND_BEGIN"; }
        messageValue() { return CSProto.CMD_DO_SLOTROUND_BEGIN; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.skip(this.stTablesBase.encode(encodeBuffer.buffer(), encodeBuffer.offset()));
            encodeBuffer.write(Uint8Array, this.bRoundDataType);
            encodeBuffer.skip(this.stOpRightRet.encode(encodeBuffer.buffer(), encodeBuffer.offset()));
            if (this.bRoundDataType == CSProto.NEXT_ROUNDDATA_TYPE_OPLIMIT) {
                encodeBuffer.skip(this.stOpWrongRet.encode(encodeBuffer.buffer(), encodeBuffer.offset()));
            }
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            decodeBuffer.skip(this.stTablesBase.decode(decodeBuffer.buffer(), decodeBuffer.offset()));
            this.bRoundDataType = decodeBuffer.read(Uint8Array, 1);
            decodeBuffer.skip(this.stOpRightRet.decode(decodeBuffer.buffer(), decodeBuffer.offset()));
            if (this.bRoundDataType == CSProto.NEXT_ROUNDDATA_TYPE_OPLIMIT) {
                decodeBuffer.skip(this.stOpWrongRet.decode(decodeBuffer.buffer(), decodeBuffer.offset()));
            }
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_DO_SLOTROUND_BEGIN_SC = CMD_DO_SLOTROUND_BEGIN_SC;
    class CMD_DO_SLOTROUND_END_CS {
        constructor() {
            this.bIsOperRight = 0; //玩家操作是否正确:1正确,0不正确 
        }
        messageName() { return "CMD_DO_SLOTROUND_END"; }
        messageValue() { return CSProto.CMD_DO_SLOTROUND_END; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.write(Uint8Array, this.bIsOperRight);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.bIsOperRight = decodeBuffer.read(Uint8Array, 1);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_DO_SLOTROUND_END_CS = CMD_DO_SLOTROUND_END_CS;
    class CMD_GET_ONLINETIME_GIFT_SC {
        constructor() {
            this.wGiftGold = 0; //领取成功的金币数 
            this.stNextGift = new OnlineGiftPara(); //本阶段可领的在线礼包情况 
            this.stNextNextGift = new OnlineGiftPara(); //下一阶段玩家在线礼包相关信息 
        }
        messageName() { return "CMD_GET_ONLINETIME_GIFT"; }
        messageValue() { return CSProto.CMD_GET_ONLINETIME_GIFT; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.write(Uint16Array, this.wGiftGold);
            encodeBuffer.skip(this.stNextGift.encode(encodeBuffer.buffer(), encodeBuffer.offset()));
            if (9 < CSProto.Version) {
                encodeBuffer.skip(this.stNextNextGift.encode(encodeBuffer.buffer(), encodeBuffer.offset()));
            }
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.wGiftGold = decodeBuffer.read(Uint16Array, 1);
            decodeBuffer.skip(this.stNextGift.decode(decodeBuffer.buffer(), decodeBuffer.offset()));
            if (9 < CSProto.Version) {
                decodeBuffer.skip(this.stNextNextGift.decode(decodeBuffer.buffer(), decodeBuffer.offset()));
            }
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_GET_ONLINETIME_GIFT_SC = CMD_GET_ONLINETIME_GIFT_SC;
    class CMD_NOTIFY_SLOTTABDATA_SC {
        constructor() {
            this.bTabHasMoney = 0; //当前桌存在的币 
        }
        messageName() { return "CMD_NOTIFY_SLOTTABDATA"; }
        messageValue() { return CSProto.CMD_NOTIFY_SLOTTABDATA; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.write(Uint8Array, this.bTabHasMoney);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.bTabHasMoney = decodeBuffer.read(Uint8Array, 1);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_NOTIFY_SLOTTABDATA_SC = CMD_NOTIFY_SLOTTABDATA_SC;
    class OneTask {
        constructor() {
            this.wTaskID = 0; //任务ID 
            this.bTaskStatus = 0; //任务状态,参见EnTaskStatus 
            this.szTaskName = ""; //名字 
            this.szTaskDesc = ""; //描述 
            this.iCond1Count = 0; //条件1当前计数 
            this.iCond1Need = 0; //条件1目标计数 
            this.dwAwardGold = 0; //奖励金币 
            this.dwAwardDiamond = 0; //奖励宝石 
            this.bTaskType = 0; //任务类型,参见TASK_TYPE_ALLLIFE等枚举 
        }
        messageName() { return "OneTask"; }
        messageValue() { return 0; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.write(Uint16Array, this.wTaskID);
            encodeBuffer.write(Uint8Array, this.bTaskStatus);
            encodeBuffer.writeString(this.szTaskName, CSProto.MAX_TASK_NAME);
            encodeBuffer.writeString(this.szTaskDesc, CSProto.MAX_TASK_DESC);
            encodeBuffer.write(Int32Array, this.iCond1Count);
            encodeBuffer.write(Int32Array, this.iCond1Need);
            encodeBuffer.write(Uint32Array, this.dwAwardGold);
            encodeBuffer.write(Uint32Array, this.dwAwardDiamond);
            encodeBuffer.write(Uint8Array, this.bTaskType);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.wTaskID = decodeBuffer.read(Uint16Array, 1);
            this.bTaskStatus = decodeBuffer.read(Uint8Array, 1);
            this.szTaskName = decodeBuffer.readString(CSProto.MAX_TASK_NAME);
            this.szTaskDesc = decodeBuffer.readString(CSProto.MAX_TASK_DESC);
            this.iCond1Count = decodeBuffer.read(Int32Array, 1);
            this.iCond1Need = decodeBuffer.read(Int32Array, 1);
            this.dwAwardGold = decodeBuffer.read(Uint32Array, 1);
            this.dwAwardDiamond = decodeBuffer.read(Uint32Array, 1);
            this.bTaskType = decodeBuffer.read(Uint8Array, 1);
            return decodeBuffer.length();
        }
    }
    CSProto.OneTask = OneTask;
    class CMD_TASK_LIST_CS {
        constructor() {
            this.wPageIndex = 0; //查询的页序号，注意统一从1开始 
        }
        messageName() { return "CMD_TASK_LIST"; }
        messageValue() { return CSProto.CMD_TASK_LIST; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.write(Uint16Array, this.wPageIndex);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.wPageIndex = decodeBuffer.read(Uint16Array, 1);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_TASK_LIST_CS = CMD_TASK_LIST_CS;
    class CMD_TASK_LIST_SC {
        constructor() {
            this.stPagePara = new PageBreakPara(); //分页相关数据 
            this.astTaskList = new Array(); //查询分页结果列表 
        }
        messageName() { return "CMD_TASK_LIST"; }
        messageValue() { return CSProto.CMD_TASK_LIST; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.skip(this.stPagePara.encode(encodeBuffer.buffer(), encodeBuffer.offset()));
            var astTaskListSize = this.astTaskList.length > CSProto.MAX_TASK_PAGE_SIZE ? CSProto.MAX_TASK_PAGE_SIZE : this.astTaskList.length;
            encodeBuffer.write(Uint16Array, astTaskListSize);
            this.astTaskList.length = astTaskListSize;
            for (var i = 0; i < astTaskListSize; i++) {
                encodeBuffer.skip(this.astTaskList[i].encode(encodeBuffer.buffer(), encodeBuffer.offset()));
            }
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            decodeBuffer.skip(this.stPagePara.decode(decodeBuffer.buffer(), decodeBuffer.offset()));
            var astTaskListSize = decodeBuffer.read(Uint16Array, 1);
            this.astTaskList = new Array(astTaskListSize);
            for (var i = 0; i < astTaskListSize; i++) {
                this.astTaskList[i] = new OneTask();
                decodeBuffer.skip(this.astTaskList[i].decode(decodeBuffer.buffer(), decodeBuffer.offset()));
            }
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_TASK_LIST_SC = CMD_TASK_LIST_SC;
    class CMD_GET_TASK_AWARD_CS {
        constructor() {
            this.wTaskID = 0; //欲领取奖励的任务ID 
        }
        messageName() { return "CMD_GET_TASK_AWARD"; }
        messageValue() { return CSProto.CMD_GET_TASK_AWARD; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.write(Uint16Array, this.wTaskID);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.wTaskID = decodeBuffer.read(Uint16Array, 1);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_GET_TASK_AWARD_CS = CMD_GET_TASK_AWARD_CS;
    class CMD_GET_TASK_AWARD_SC {
        constructor() {
            this.wTaskID = 0; //欲领取奖励的任务ID 
        }
        messageName() { return "CMD_GET_TASK_AWARD"; }
        messageValue() { return CSProto.CMD_GET_TASK_AWARD; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.write(Uint16Array, this.wTaskID);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.wTaskID = decodeBuffer.read(Uint16Array, 1);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_GET_TASK_AWARD_SC = CMD_GET_TASK_AWARD_SC;
    class OneRankData {
        constructor() {
            this.szRankAcc = ""; //帐号,目前没有用,下行空串 
            this.szRankName = ""; //角色或者其他排序项名字 
            this.szRankExtName = ""; //目前暂时无用,其他情况为空 
            this.wRank = 0; //对应的排名 
            this.llRankVal1 = 0; //排序值1 
            this.llRankVal2 = 0; //排序值2 
            this.llBornID = 0; //玩家ID 
            this.bHeadPhoto = 0; //系统头像 
            this.szSelfDefPhoto = ""; //玩家自定义头像,长度不为0时以此为准 
            this.llRelateAward = 0; //排序相关奖励 
            this.iVipLv = 0; //VIP等级 
        }
        messageName() { return "OneRankData"; }
        messageValue() { return 0; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.writeString(this.szRankAcc, CSProto.MAX_ACCOUNT_LEN);
            encodeBuffer.writeString(this.szRankName, CSProto.MAX_ROLE_NAME_LEN);
            encodeBuffer.writeString(this.szRankExtName, CSProto.MAX_ROLE_NAME_LEN);
            encodeBuffer.write(Uint16Array, this.wRank);
            encodeBuffer.write(Float64Array, this.llRankVal1);
            encodeBuffer.write(Float64Array, this.llRankVal2);
            encodeBuffer.write(Float64Array, this.llBornID);
            encodeBuffer.write(Uint8Array, this.bHeadPhoto);
            encodeBuffer.writeString(this.szSelfDefPhoto, CSProto.MAX_ROLE_SELFDEF_PHOTO_LEN);
            encodeBuffer.write(Float64Array, this.llRelateAward);
            if (22 < CSProto.Version) {
                encodeBuffer.write(Int32Array, this.iVipLv);
            }
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.szRankAcc = decodeBuffer.readString(CSProto.MAX_ACCOUNT_LEN);
            this.szRankName = decodeBuffer.readString(CSProto.MAX_ROLE_NAME_LEN);
            this.szRankExtName = decodeBuffer.readString(CSProto.MAX_ROLE_NAME_LEN);
            this.wRank = decodeBuffer.read(Uint16Array, 1);
            this.llRankVal1 = decodeBuffer.read(Float64Array, 1);
            this.llRankVal2 = decodeBuffer.read(Float64Array, 1);
            this.llBornID = decodeBuffer.read(Float64Array, 1);
            this.bHeadPhoto = decodeBuffer.read(Uint8Array, 1);
            this.szSelfDefPhoto = decodeBuffer.readString(CSProto.MAX_ROLE_SELFDEF_PHOTO_LEN);
            this.llRelateAward = decodeBuffer.read(Float64Array, 1);
            if (22 < CSProto.Version) {
                this.iVipLv = decodeBuffer.read(Int32Array, 1);
            }
            return decodeBuffer.length();
        }
    }
    CSProto.OneRankData = OneRankData;
    class MyRankData {
        constructor() {
            this.bIsInRank = 0; //0不在排行中,1在排行中 
            this.wMyRank = 0; //我的排名,当在排行中时有效 
            this.llRankVal1 = 0; //排序值1,当在排行中时有效 
            this.llRankVal2 = 0; //排序值2,当在排行中时有效 
            this.bIsHasAward = 0; //若在排行榜中且是有奖励的排行榜时有效:0没有领取相应奖励,其他己领取相应奖励 
        }
        messageName() { return "MyRankData"; }
        messageValue() { return 0; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.write(Uint8Array, this.bIsInRank);
            encodeBuffer.write(Uint16Array, this.wMyRank);
            encodeBuffer.write(Float64Array, this.llRankVal1);
            encodeBuffer.write(Float64Array, this.llRankVal2);
            encodeBuffer.write(Uint8Array, this.bIsHasAward);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.bIsInRank = decodeBuffer.read(Uint8Array, 1);
            this.wMyRank = decodeBuffer.read(Uint16Array, 1);
            this.llRankVal1 = decodeBuffer.read(Float64Array, 1);
            this.llRankVal2 = decodeBuffer.read(Float64Array, 1);
            this.bIsHasAward = decodeBuffer.read(Uint8Array, 1);
            return decodeBuffer.length();
        }
    }
    CSProto.MyRankData = MyRankData;
    class CMD_RANK_QUERYPAGE_CS {
        constructor() {
            this.bRankClass = 0; //排行榜分类,参见RANK_CLASS_VIPLVL等枚举定义 
            this.dwRankSubClass = 0; //排行榜子分类:当用于标记按天充值排行榜中的历史榜单则上一天为1,为0是当天 
            this.wPageIndex = 0; //注是从1开始,查询的页码,当不是查询角色分页时有效 
            this.bIsQueryRolePage = 0; //1是指查询角色所在的分页,0不是 
        }
        messageName() { return "CMD_RANK_QUERYPAGE"; }
        messageValue() { return CSProto.CMD_RANK_QUERYPAGE; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.write(Uint8Array, this.bRankClass);
            encodeBuffer.write(Uint32Array, this.dwRankSubClass);
            encodeBuffer.write(Uint16Array, this.wPageIndex);
            encodeBuffer.write(Uint8Array, this.bIsQueryRolePage);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.bRankClass = decodeBuffer.read(Uint8Array, 1);
            this.dwRankSubClass = decodeBuffer.read(Uint32Array, 1);
            this.wPageIndex = decodeBuffer.read(Uint16Array, 1);
            this.bIsQueryRolePage = decodeBuffer.read(Uint8Array, 1);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_RANK_QUERYPAGE_CS = CMD_RANK_QUERYPAGE_CS;
    class CMD_RANK_QUERYPAGE_SC {
        constructor() {
            this.bRankClass = 0; //排行榜分类,参见RANK_CLASS_VIPLVL等枚举定义 
            this.dwRankSubClass = 0; //排行榜子分类:当为充值榜时传1表明是获取昨天列表 
            this.bRankRefreshType = 0; //排行榜刷新类型,参见RANK_REFRESHTYPE_NONE等枚举定义 
            this.bIsQueryRolePage = 0; //1是指查询角色所在的分页下行,0不是 
            this.stPagePara = new PageBreakPara(); //分页相关数据 
            this.stMyRankData = new MyRankData(); //我的排行相关值 
            this.astRankList = new Array(); //查询分页结果列表 
            this.dwRelatePeriodTime = 0; //当为定期刷新的排行榜时,对应了查询结果对应的生成时间 
            this.dwPeriodRefreshTime = 0; //新排行榜下次刷新时间,如果为0,表明不会刷新 
            this.bPeriodListNum = 0; //当前对应的可查询的定期刷新历史榜单个数 
        }
        messageName() { return "CMD_RANK_QUERYPAGE"; }
        messageValue() { return CSProto.CMD_RANK_QUERYPAGE; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.write(Uint8Array, this.bRankClass);
            encodeBuffer.write(Uint32Array, this.dwRankSubClass);
            encodeBuffer.write(Uint8Array, this.bRankRefreshType);
            encodeBuffer.write(Uint8Array, this.bIsQueryRolePage);
            encodeBuffer.skip(this.stPagePara.encode(encodeBuffer.buffer(), encodeBuffer.offset()));
            encodeBuffer.skip(this.stMyRankData.encode(encodeBuffer.buffer(), encodeBuffer.offset()));
            var astRankListSize = this.astRankList.length > CSProto.MAX_RANK_LIST_SIZE ? CSProto.MAX_RANK_LIST_SIZE : this.astRankList.length;
            encodeBuffer.write(Uint16Array, astRankListSize);
            this.astRankList.length = astRankListSize;
            for (var i = 0; i < astRankListSize; i++) {
                encodeBuffer.skip(this.astRankList[i].encode(encodeBuffer.buffer(), encodeBuffer.offset()));
            }
            if (this.bRankRefreshType != CSProto.RANK_REFRESHTYPE_NONE) {
                encodeBuffer.write(Uint32Array, this.dwRelatePeriodTime);
            }
            if (this.bRankRefreshType != CSProto.RANK_REFRESHTYPE_NONE) {
                encodeBuffer.write(Uint32Array, this.dwPeriodRefreshTime);
            }
            if (this.bRankRefreshType != CSProto.RANK_REFRESHTYPE_NONE) {
                encodeBuffer.write(Uint8Array, this.bPeriodListNum);
            }
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.bRankClass = decodeBuffer.read(Uint8Array, 1);
            this.dwRankSubClass = decodeBuffer.read(Uint32Array, 1);
            this.bRankRefreshType = decodeBuffer.read(Uint8Array, 1);
            this.bIsQueryRolePage = decodeBuffer.read(Uint8Array, 1);
            decodeBuffer.skip(this.stPagePara.decode(decodeBuffer.buffer(), decodeBuffer.offset()));
            decodeBuffer.skip(this.stMyRankData.decode(decodeBuffer.buffer(), decodeBuffer.offset()));
            var astRankListSize = decodeBuffer.read(Uint16Array, 1);
            this.astRankList = new Array(astRankListSize);
            for (var i = 0; i < astRankListSize; i++) {
                this.astRankList[i] = new OneRankData();
                decodeBuffer.skip(this.astRankList[i].decode(decodeBuffer.buffer(), decodeBuffer.offset()));
            }
            if (this.bRankRefreshType != CSProto.RANK_REFRESHTYPE_NONE) {
                this.dwRelatePeriodTime = decodeBuffer.read(Uint32Array, 1);
            }
            if (this.bRankRefreshType != CSProto.RANK_REFRESHTYPE_NONE) {
                this.dwPeriodRefreshTime = decodeBuffer.read(Uint32Array, 1);
            }
            if (this.bRankRefreshType != CSProto.RANK_REFRESHTYPE_NONE) {
                this.bPeriodListNum = decodeBuffer.read(Uint8Array, 1);
            }
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_RANK_QUERYPAGE_SC = CMD_RANK_QUERYPAGE_SC;
    class CMD_CHAT_CS {
        constructor() {
            this.bChannel = 0; //消息频道 
            this.szChatDetail = ""; //聊天内容 
            this.bChatType = 0; //消息类型,参见CHAT_TYPE_ZJH_PREDEF等定义 
        }
        messageName() { return "CMD_CHAT"; }
        messageValue() { return CSProto.CMD_CHAT; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.write(Uint8Array, this.bChannel);
            encodeBuffer.writeString(this.szChatDetail, CSProto.MAX_CHAT_MSG_LEN);
            if (16 < CSProto.Version) {
                encodeBuffer.write(Uint8Array, this.bChatType);
            }
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.bChannel = decodeBuffer.read(Uint8Array, 1);
            this.szChatDetail = decodeBuffer.readString(CSProto.MAX_CHAT_MSG_LEN);
            if (16 < CSProto.Version) {
                this.bChatType = decodeBuffer.read(Uint8Array, 1);
            }
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_CHAT_CS = CMD_CHAT_CS;
    class CMD_CHAT_SC {
        constructor() {
            this.bChannel = 0; //聊天频道,参见EnChatChannel定义 
            this.szSender = ""; //发送方 
            this.szChatDetail = ""; //聊天内容 
            this.bSenderVipLvl = 0; //发送方VIP等级 
            this.bIsSelfSend = 0; //是否收到方就是发送方自己 
            this.bSenderSex = 0; //发送方性别,目前不会用到 
            this.bHeadPhoto = 0; //系统头像,目前不会用到 
            this.bChatType = 0; //消息类型,参见CHAT_TYPE_ZJH_PREDEF等定义 
            this.dwSenderObjectID = 0; //当为玩家触发消息时对应的发送方实体handle 
            this.llSenderRoleID = 0; //当为玩家触发消息时对应的发送方角色ID 
        }
        messageName() { return "CMD_CHAT"; }
        messageValue() { return CSProto.CMD_CHAT; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.write(Uint8Array, this.bChannel);
            encodeBuffer.writeString(this.szSender, CSProto.MAX_ROLE_NAME_LEN);
            encodeBuffer.writeString(this.szChatDetail, CSProto.MAX_CHAT_MSG_LEN);
            if (1 < CSProto.Version) {
                encodeBuffer.write(Uint8Array, this.bSenderVipLvl);
            }
            if (1 < CSProto.Version) {
                encodeBuffer.write(Uint8Array, this.bIsSelfSend);
            }
            if (1 < CSProto.Version) {
                encodeBuffer.write(Uint8Array, this.bSenderSex);
            }
            if (1 < CSProto.Version) {
                encodeBuffer.write(Uint8Array, this.bHeadPhoto);
            }
            if (16 < CSProto.Version) {
                encodeBuffer.write(Uint8Array, this.bChatType);
            }
            if (18 < CSProto.Version) {
                encodeBuffer.write(Uint32Array, this.dwSenderObjectID);
            }
            if (27 < CSProto.Version) {
                encodeBuffer.write(Float64Array, this.llSenderRoleID);
            }
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.bChannel = decodeBuffer.read(Uint8Array, 1);
            this.szSender = decodeBuffer.readString(CSProto.MAX_ROLE_NAME_LEN);
            this.szChatDetail = decodeBuffer.readString(CSProto.MAX_CHAT_MSG_LEN);
            if (1 < CSProto.Version) {
                this.bSenderVipLvl = decodeBuffer.read(Uint8Array, 1);
            }
            if (1 < CSProto.Version) {
                this.bIsSelfSend = decodeBuffer.read(Uint8Array, 1);
            }
            if (1 < CSProto.Version) {
                this.bSenderSex = decodeBuffer.read(Uint8Array, 1);
            }
            if (1 < CSProto.Version) {
                this.bHeadPhoto = decodeBuffer.read(Uint8Array, 1);
            }
            if (16 < CSProto.Version) {
                this.bChatType = decodeBuffer.read(Uint8Array, 1);
            }
            if (18 < CSProto.Version) {
                this.dwSenderObjectID = decodeBuffer.read(Uint32Array, 1);
            }
            if (27 < CSProto.Version) {
                this.llSenderRoleID = decodeBuffer.read(Float64Array, 1);
            }
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_CHAT_SC = CMD_CHAT_SC;
    class CMD_CONLOGIN_GIFT_SC {
        constructor() {
            this.bContLoginDays = 0; //连续登录天数 
            this.bHasGotTodayGift = 0; //是否已经领取了今天的连续登录礼包 
        }
        messageName() { return "CMD_CONLOGIN_GIFT"; }
        messageValue() { return CSProto.CMD_CONLOGIN_GIFT; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.write(Uint8Array, this.bContLoginDays);
            encodeBuffer.write(Uint8Array, this.bHasGotTodayGift);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.bContLoginDays = decodeBuffer.read(Uint8Array, 1);
            this.bHasGotTodayGift = decodeBuffer.read(Uint8Array, 1);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_CONLOGIN_GIFT_SC = CMD_CONLOGIN_GIFT_SC;
    class CMD_NOTIFY_CHARGE_SUCC_CS {
        constructor() {
            this.szChannel = ""; //充值渠道,客户端自行填充字符串,如weipai等 
            this.szDetail = ""; //充值详情,格式可统一为:a=bc=d 
        }
        messageName() { return "CMD_NOTIFY_CHARGE_SUCC"; }
        messageValue() { return CSProto.CMD_NOTIFY_CHARGE_SUCC; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.writeString(this.szChannel, 20);
            encodeBuffer.writeString(this.szDetail, 300);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.szChannel = decodeBuffer.readString(20);
            this.szDetail = decodeBuffer.readString(300);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_NOTIFY_CHARGE_SUCC_CS = CMD_NOTIFY_CHARGE_SUCC_CS;
    class CMD_CHANGE_HEADPHOTO_CS {
        constructor() {
            this.wSysHeadPhoto = 0; //系统头像ID 
        }
        messageName() { return "CMD_CHANGE_HEADPHOTO"; }
        messageValue() { return CSProto.CMD_CHANGE_HEADPHOTO; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.write(Uint16Array, this.wSysHeadPhoto);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.wSysHeadPhoto = decodeBuffer.read(Uint16Array, 1);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_CHANGE_HEADPHOTO_CS = CMD_CHANGE_HEADPHOTO_CS;
    class CMD_NOTIFY_THROWUP_GOLD_SC {
        constructor() {
            this.wGotGold = 0; //对应吐出的币数 
        }
        messageName() { return "CMD_NOTIFY_THROWUP_GOLD"; }
        messageValue() { return CSProto.CMD_NOTIFY_THROWUP_GOLD; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.write(Uint16Array, this.wGotGold);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.wGotGold = decodeBuffer.read(Uint16Array, 1);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_NOTIFY_THROWUP_GOLD_SC = CMD_NOTIFY_THROWUP_GOLD_SC;
    class CMD_NOTIFY_CHARGESUCC_SC {
        constructor() {
            this.szOrderID = ""; //充值订单号 
            this.dwBaseBuyGold = 0; //购买金币 
            this.dwExtraPresentGold = 0; //赠送金币 
            this.dwDayFirstGotGold = 0; //今日首充 
            this.dwAlipayGotGold = 0; //支付宝 
            this.dwBeyondGotGold = 0; //超值包 
            this.dwLimitTimeGotGold = 0; //限时特惠 
            this.dwVipExtraGotGold = 0; //VIP赠送 
            this.dwCurChargeRank = 0; //当前充值榜排名,为0时不在排行榜上 
            this.llTomorrowRankAward = 0; //预计明日充值榜排名奖励 
            this.llAllTotalGotGold = 0; //总充值获得金额 
        }
        messageName() { return "CMD_NOTIFY_CHARGESUCC"; }
        messageValue() { return CSProto.CMD_NOTIFY_CHARGESUCC; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.writeString(this.szOrderID, 100);
            if (7 < CSProto.Version) {
                encodeBuffer.write(Uint32Array, this.dwBaseBuyGold);
            }
            if (7 < CSProto.Version) {
                encodeBuffer.write(Uint32Array, this.dwExtraPresentGold);
            }
            if (7 < CSProto.Version) {
                encodeBuffer.write(Uint32Array, this.dwDayFirstGotGold);
            }
            if (7 < CSProto.Version) {
                encodeBuffer.write(Uint32Array, this.dwAlipayGotGold);
            }
            if (7 < CSProto.Version) {
                encodeBuffer.write(Uint32Array, this.dwBeyondGotGold);
            }
            if (7 < CSProto.Version) {
                encodeBuffer.write(Uint32Array, this.dwLimitTimeGotGold);
            }
            if (7 < CSProto.Version) {
                encodeBuffer.write(Uint32Array, this.dwVipExtraGotGold);
            }
            if (7 < CSProto.Version) {
                encodeBuffer.write(Uint32Array, this.dwCurChargeRank);
            }
            if (7 < CSProto.Version) {
                encodeBuffer.write(Float64Array, this.llTomorrowRankAward);
            }
            if (8 < CSProto.Version) {
                encodeBuffer.write(Float64Array, this.llAllTotalGotGold);
            }
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.szOrderID = decodeBuffer.readString(100);
            if (7 < CSProto.Version) {
                this.dwBaseBuyGold = decodeBuffer.read(Uint32Array, 1);
            }
            if (7 < CSProto.Version) {
                this.dwExtraPresentGold = decodeBuffer.read(Uint32Array, 1);
            }
            if (7 < CSProto.Version) {
                this.dwDayFirstGotGold = decodeBuffer.read(Uint32Array, 1);
            }
            if (7 < CSProto.Version) {
                this.dwAlipayGotGold = decodeBuffer.read(Uint32Array, 1);
            }
            if (7 < CSProto.Version) {
                this.dwBeyondGotGold = decodeBuffer.read(Uint32Array, 1);
            }
            if (7 < CSProto.Version) {
                this.dwLimitTimeGotGold = decodeBuffer.read(Uint32Array, 1);
            }
            if (7 < CSProto.Version) {
                this.dwVipExtraGotGold = decodeBuffer.read(Uint32Array, 1);
            }
            if (7 < CSProto.Version) {
                this.dwCurChargeRank = decodeBuffer.read(Uint32Array, 1);
            }
            if (7 < CSProto.Version) {
                this.llTomorrowRankAward = decodeBuffer.read(Float64Array, 1);
            }
            if (8 < CSProto.Version) {
                this.llAllTotalGotGold = decodeBuffer.read(Float64Array, 1);
            }
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_NOTIFY_CHARGESUCC_SC = CMD_NOTIFY_CHARGESUCC_SC;
    class CMD_LOTTERY_BET_ON_CS {
        constructor() {
            this.bOneBetBaseTag = 0; //单注数量序号,参见LOTTERY_ONEBET_BASE_TAG_1等系列枚举 
            this.astBetDetail = new Array(); //下注列表 
            this.dwRoundID = 0; //对应的相关转数序号 
        }
        messageName() { return "CMD_LOTTERY_BET_ON"; }
        messageValue() { return CSProto.CMD_LOTTERY_BET_ON; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.write(Uint8Array, this.bOneBetBaseTag);
            var astBetDetailSize = this.astBetDetail.length > 10 ? 10 : this.astBetDetail.length;
            encodeBuffer.write(Uint16Array, astBetDetailSize);
            this.astBetDetail.length = astBetDetailSize;
            for (var i = 0; i < astBetDetailSize; i++) {
                encodeBuffer.skip(this.astBetDetail[i].encode(encodeBuffer.buffer(), encodeBuffer.offset()));
            }
            if (10 < CSProto.Version) {
                encodeBuffer.write(Uint32Array, this.dwRoundID);
            }
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.bOneBetBaseTag = decodeBuffer.read(Uint8Array, 1);
            var astBetDetailSize = decodeBuffer.read(Uint16Array, 1);
            this.astBetDetail = new Array(astBetDetailSize);
            for (var i = 0; i < astBetDetailSize; i++) {
                this.astBetDetail[i] = new PROPERTY();
                decodeBuffer.skip(this.astBetDetail[i].decode(decodeBuffer.buffer(), decodeBuffer.offset()));
            }
            if (10 < CSProto.Version) {
                this.dwRoundID = decodeBuffer.read(Uint32Array, 1);
            }
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_LOTTERY_BET_ON_CS = CMD_LOTTERY_BET_ON_CS;
    class CMD_LOTTERY_BET_ON_SC {
        constructor() {
            this.dwRoundID = 0; //对应的相关转数序号,目前仅用于调试方便 
            this.dwBetTotalGold = 0; //总下注币数 
        }
        messageName() { return "CMD_LOTTERY_BET_ON"; }
        messageValue() { return CSProto.CMD_LOTTERY_BET_ON; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.write(Uint32Array, this.dwRoundID);
            encodeBuffer.write(Uint32Array, this.dwBetTotalGold);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.dwRoundID = decodeBuffer.read(Uint32Array, 1);
            this.dwBetTotalGold = decodeBuffer.read(Uint32Array, 1);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_LOTTERY_BET_ON_SC = CMD_LOTTERY_BET_ON_SC;
    class LotteryAllData {
        constructor() {
            this.dwRoundID = 0; //对应的相关转数序号,目前仅用于调试方便 
            this.bLotteryStatus = 0; //当前状态,参见LOTTERY_CURSTATUS_CANBET等系列枚举 
            this.llPrizePool = 0; //奖池总额 
            this.wLucky = 0; //当前幸运指数,万分比分子部分 
            this.wLeftBetTime = 0; //当前对应剩余可下注秒数 
            this.abHisPrize = new Array(); //历史开出结果小于等于6个以实际长度为准靠左边的为最新 
            this.dwHisRed7Time = 0; //上一次开出红7距今的秒数 
            this.bHisFCCount = 0; //当前的历史风车个数 
        }
        messageName() { return "LotteryAllData"; }
        messageValue() { return 0; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.write(Uint32Array, this.dwRoundID);
            encodeBuffer.write(Uint8Array, this.bLotteryStatus);
            encodeBuffer.write(Float64Array, this.llPrizePool);
            encodeBuffer.write(Uint16Array, this.wLucky);
            if (this.bLotteryStatus == CSProto.LOTTERY_CURSTATUS_CANBET) {
                encodeBuffer.write(Uint8Array, this.wLeftBetTime);
            }
            var abHisPrizeSize = this.abHisPrize.length > CSProto.MAX_LOTTERY_SCENE_HISPRIZE_LEN ? CSProto.MAX_LOTTERY_SCENE_HISPRIZE_LEN : this.abHisPrize.length;
            encodeBuffer.write(Uint16Array, abHisPrizeSize);
            this.abHisPrize.length = abHisPrizeSize;
            encodeBuffer.write(Uint8Array, this.abHisPrize);
            encodeBuffer.write(Uint32Array, this.dwHisRed7Time);
            encodeBuffer.write(Uint8Array, this.bHisFCCount);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.dwRoundID = decodeBuffer.read(Uint32Array, 1);
            this.bLotteryStatus = decodeBuffer.read(Uint8Array, 1);
            this.llPrizePool = decodeBuffer.read(Float64Array, 1);
            this.wLucky = decodeBuffer.read(Uint16Array, 1);
            if (this.bLotteryStatus == CSProto.LOTTERY_CURSTATUS_CANBET) {
                this.wLeftBetTime = decodeBuffer.read(Uint8Array, 1);
            }
            var abHisPrizeSize = decodeBuffer.read(Uint16Array, 1);
            this.abHisPrize = new Array(abHisPrizeSize);
            this.abHisPrize = decodeBuffer.read(Uint8Array, abHisPrizeSize);
            this.dwHisRed7Time = decodeBuffer.read(Uint32Array, 1);
            this.bHisFCCount = decodeBuffer.read(Uint8Array, 1);
            return decodeBuffer.length();
        }
    }
    CSProto.LotteryAllData = LotteryAllData;
    class LotteryTimerData {
        constructor() {
            this.bLotteryStatus = 0; //当前状态,参见LOTTERY_CURSTATUS_CANBET等系列枚举 
            this.llPrizePool = 0; //奖池总额 
            this.dwRoundID = 0; //对应的相关转数序号 
        }
        messageName() { return "LotteryTimerData"; }
        messageValue() { return 0; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.write(Uint8Array, this.bLotteryStatus);
            encodeBuffer.write(Float64Array, this.llPrizePool);
            if (10 < CSProto.Version) {
                encodeBuffer.write(Uint32Array, this.dwRoundID);
            }
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.bLotteryStatus = decodeBuffer.read(Uint8Array, 1);
            this.llPrizePool = decodeBuffer.read(Float64Array, 1);
            if (10 < CSProto.Version) {
                this.dwRoundID = decodeBuffer.read(Uint32Array, 1);
            }
            return decodeBuffer.length();
        }
    }
    CSProto.LotteryTimerData = LotteryTimerData;
    class CMD_LOTTERY_ENTER_SC {
        constructor() {
            this.wMapID = 0; //对应地图ID,目前无用 
            this.dwSceneID = 0; //对应的场景ID 
            this.dwTableID = 0; //对应的桌台ID,目前无用 
            this.stAllData = new LotteryAllData(); //对应当前数据 
            this.dwBetTotalGold = 0; //总下注币数 
            this.astBetDetail = new Array(); //当前对应当转的己下注列表,若已经下注则有数据 
            this.bOneBetBaseTag = 0; //玩家自己下注的单注数量序号,参见LOTTERY_ONEBET_BASE_TAG_1等系列枚举 
        }
        messageName() { return "CMD_LOTTERY_ENTER"; }
        messageValue() { return CSProto.CMD_LOTTERY_ENTER; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.write(Uint16Array, this.wMapID);
            encodeBuffer.write(Uint32Array, this.dwSceneID);
            encodeBuffer.write(Uint32Array, this.dwTableID);
            encodeBuffer.skip(this.stAllData.encode(encodeBuffer.buffer(), encodeBuffer.offset()));
            encodeBuffer.write(Uint32Array, this.dwBetTotalGold);
            var astBetDetailSize = this.astBetDetail.length > 10 ? 10 : this.astBetDetail.length;
            encodeBuffer.write(Uint16Array, astBetDetailSize);
            this.astBetDetail.length = astBetDetailSize;
            for (var i = 0; i < astBetDetailSize; i++) {
                encodeBuffer.skip(this.astBetDetail[i].encode(encodeBuffer.buffer(), encodeBuffer.offset()));
            }
            if (4 < CSProto.Version) {
                encodeBuffer.write(Uint8Array, this.bOneBetBaseTag);
            }
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.wMapID = decodeBuffer.read(Uint16Array, 1);
            this.dwSceneID = decodeBuffer.read(Uint32Array, 1);
            this.dwTableID = decodeBuffer.read(Uint32Array, 1);
            decodeBuffer.skip(this.stAllData.decode(decodeBuffer.buffer(), decodeBuffer.offset()));
            this.dwBetTotalGold = decodeBuffer.read(Uint32Array, 1);
            var astBetDetailSize = decodeBuffer.read(Uint16Array, 1);
            this.astBetDetail = new Array(astBetDetailSize);
            for (var i = 0; i < astBetDetailSize; i++) {
                this.astBetDetail[i] = new PROPERTY();
                decodeBuffer.skip(this.astBetDetail[i].decode(decodeBuffer.buffer(), decodeBuffer.offset()));
            }
            if (4 < CSProto.Version) {
                this.bOneBetBaseTag = decodeBuffer.read(Uint8Array, 1);
            }
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_LOTTERY_ENTER_SC = CMD_LOTTERY_ENTER_SC;
    class CMD_LOTTERY_REFRESHDATA_SC {
        constructor() {
            this.stTimerData = new LotteryTimerData(); //对应当前数据 
        }
        messageName() { return "CMD_LOTTERY_REFRESHDATA"; }
        messageValue() { return CSProto.CMD_LOTTERY_REFRESHDATA; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.skip(this.stTimerData.encode(encodeBuffer.buffer(), encodeBuffer.offset()));
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            decodeBuffer.skip(this.stTimerData.decode(decodeBuffer.buffer(), decodeBuffer.offset()));
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_LOTTERY_REFRESHDATA_SC = CMD_LOTTERY_REFRESHDATA_SC;
    class CMD_LOTTERY_ROUND_END_SC {
        constructor() {
            this.stNewstData = new LotteryAllData(); //对应开奖后的转轮数据,序号及奖池数据等所有数据己刷新为发奖后的最新数据 
            this.bLotteryRet = 0; //当前对应的开奖结果 
            this.bFengChePayTimes = 0; //当开奖结果是风车时对应了普通风车的开奖倍数 
            this.dwGotGoldAll = 0; //获得金币总数 
        }
        messageName() { return "CMD_LOTTERY_ROUND_END"; }
        messageValue() { return CSProto.CMD_LOTTERY_ROUND_END; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.skip(this.stNewstData.encode(encodeBuffer.buffer(), encodeBuffer.offset()));
            encodeBuffer.write(Uint8Array, this.bLotteryRet);
            encodeBuffer.write(Uint8Array, this.bFengChePayTimes);
            encodeBuffer.write(Uint32Array, this.dwGotGoldAll);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            decodeBuffer.skip(this.stNewstData.decode(decodeBuffer.buffer(), decodeBuffer.offset()));
            this.bLotteryRet = decodeBuffer.read(Uint8Array, 1);
            this.bFengChePayTimes = decodeBuffer.read(Uint8Array, 1);
            this.dwGotGoldAll = decodeBuffer.read(Uint32Array, 1);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_LOTTERY_ROUND_END_SC = CMD_LOTTERY_ROUND_END_SC;
    class CMD_LOTTERY_HERORANK_SC {
        constructor() {
            this.astRankList = new Array(); //分页结果列表,仅当前三名变化时会通知刷新 
        }
        messageName() { return "CMD_LOTTERY_HERORANK"; }
        messageValue() { return CSProto.CMD_LOTTERY_HERORANK; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            var astRankListSize = this.astRankList.length > CSProto.MAX_LOTTERY_HERORANK_LIST_SIZE ? CSProto.MAX_LOTTERY_HERORANK_LIST_SIZE : this.astRankList.length;
            encodeBuffer.write(Uint16Array, astRankListSize);
            this.astRankList.length = astRankListSize;
            for (var i = 0; i < astRankListSize; i++) {
                encodeBuffer.skip(this.astRankList[i].encode(encodeBuffer.buffer(), encodeBuffer.offset()));
            }
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            var astRankListSize = decodeBuffer.read(Uint16Array, 1);
            this.astRankList = new Array(astRankListSize);
            for (var i = 0; i < astRankListSize; i++) {
                this.astRankList[i] = new OneRankData();
                decodeBuffer.skip(this.astRankList[i].decode(decodeBuffer.buffer(), decodeBuffer.offset()));
            }
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_LOTTERY_HERORANK_SC = CMD_LOTTERY_HERORANK_SC;
    class CMD_SCENE_ONLINELIST_PAGE_CS {
        constructor() {
            this.dwSceneID = 0; //对应要查询的场景ID,目前逻辑限制了只能查询摩天轮中的在线 
            this.wPageIndex = 0; //注是从1开始,查询的页码 
        }
        messageName() { return "CMD_SCENE_ONLINELIST_PAGE"; }
        messageValue() { return CSProto.CMD_SCENE_ONLINELIST_PAGE; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.write(Uint32Array, this.dwSceneID);
            encodeBuffer.write(Uint16Array, this.wPageIndex);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.dwSceneID = decodeBuffer.read(Uint32Array, 1);
            this.wPageIndex = decodeBuffer.read(Uint16Array, 1);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_SCENE_ONLINELIST_PAGE_CS = CMD_SCENE_ONLINELIST_PAGE_CS;
    class OneOnlineAcc {
        constructor() {
            this.szRankName = ""; //角色名字 
            this.wRank = 0; //对应的排名 
            this.wVipLvl = 0; //vip等级 
            this.bHeadPhoto = 0; //系统头像 
            this.bSex = 0; //性别,目前暂时无用 
        }
        messageName() { return "OneOnlineAcc"; }
        messageValue() { return 0; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.writeString(this.szRankName, CSProto.MAX_ROLE_NAME_LEN);
            encodeBuffer.write(Uint16Array, this.wRank);
            encodeBuffer.write(Uint16Array, this.wVipLvl);
            encodeBuffer.write(Uint8Array, this.bHeadPhoto);
            encodeBuffer.write(Uint8Array, this.bSex);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.szRankName = decodeBuffer.readString(CSProto.MAX_ROLE_NAME_LEN);
            this.wRank = decodeBuffer.read(Uint16Array, 1);
            this.wVipLvl = decodeBuffer.read(Uint16Array, 1);
            this.bHeadPhoto = decodeBuffer.read(Uint8Array, 1);
            this.bSex = decodeBuffer.read(Uint8Array, 1);
            return decodeBuffer.length();
        }
    }
    CSProto.OneOnlineAcc = OneOnlineAcc;
    class CMD_SCENE_ONLINELIST_PAGE_SC {
        constructor() {
            this.stPagePara = new PageBreakPara(); //分页相关数据 
            this.astRankList = new Array(); //查询分页结果列表 
            this.dwSceneID = 0; //对应要查询的场景ID,目前逻辑限制了只能查询摩天轮中的在线 
        }
        messageName() { return "CMD_SCENE_ONLINELIST_PAGE"; }
        messageValue() { return CSProto.CMD_SCENE_ONLINELIST_PAGE; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.skip(this.stPagePara.encode(encodeBuffer.buffer(), encodeBuffer.offset()));
            var astRankListSize = this.astRankList.length > CSProto.MAX_ONLINERANK_LIST_SIZE ? CSProto.MAX_ONLINERANK_LIST_SIZE : this.astRankList.length;
            encodeBuffer.write(Uint16Array, astRankListSize);
            this.astRankList.length = astRankListSize;
            for (var i = 0; i < astRankListSize; i++) {
                encodeBuffer.skip(this.astRankList[i].encode(encodeBuffer.buffer(), encodeBuffer.offset()));
            }
            if (2 < CSProto.Version) {
                encodeBuffer.write(Uint32Array, this.dwSceneID);
            }
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            decodeBuffer.skip(this.stPagePara.decode(decodeBuffer.buffer(), decodeBuffer.offset()));
            var astRankListSize = decodeBuffer.read(Uint16Array, 1);
            this.astRankList = new Array(astRankListSize);
            for (var i = 0; i < astRankListSize; i++) {
                this.astRankList[i] = new OneOnlineAcc();
                decodeBuffer.skip(this.astRankList[i].decode(decodeBuffer.buffer(), decodeBuffer.offset()));
            }
            if (2 < CSProto.Version) {
                this.dwSceneID = decodeBuffer.read(Uint32Array, 1);
            }
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_SCENE_ONLINELIST_PAGE_SC = CMD_SCENE_ONLINELIST_PAGE_SC;
    class CMD_LOTTERY_REFRESH_SELF_BET_SC {
        constructor() {
            this.llAccCurOwnGold = 0; //玩家当前实际拥有的币数,若有预扣这里需要回滚 
            this.dwBetTotalGold = 0; //总下注币数 
            this.astBetDetail = new Array(); //当前对应当转的己下注列表,若已经下注则有数据 
            this.dwRoundID = 0; //对应的相关转数序号 
        }
        messageName() { return "CMD_LOTTERY_REFRESH_SELF_BET"; }
        messageValue() { return CSProto.CMD_LOTTERY_REFRESH_SELF_BET; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.write(Float64Array, this.llAccCurOwnGold);
            encodeBuffer.write(Uint32Array, this.dwBetTotalGold);
            var astBetDetailSize = this.astBetDetail.length > 10 ? 10 : this.astBetDetail.length;
            encodeBuffer.write(Uint16Array, astBetDetailSize);
            this.astBetDetail.length = astBetDetailSize;
            for (var i = 0; i < astBetDetailSize; i++) {
                encodeBuffer.skip(this.astBetDetail[i].encode(encodeBuffer.buffer(), encodeBuffer.offset()));
            }
            if (10 < CSProto.Version) {
                encodeBuffer.write(Uint32Array, this.dwRoundID);
            }
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.llAccCurOwnGold = decodeBuffer.read(Float64Array, 1);
            this.dwBetTotalGold = decodeBuffer.read(Uint32Array, 1);
            var astBetDetailSize = decodeBuffer.read(Uint16Array, 1);
            this.astBetDetail = new Array(astBetDetailSize);
            for (var i = 0; i < astBetDetailSize; i++) {
                this.astBetDetail[i] = new PROPERTY();
                decodeBuffer.skip(this.astBetDetail[i].decode(decodeBuffer.buffer(), decodeBuffer.offset()));
            }
            if (10 < CSProto.Version) {
                this.dwRoundID = decodeBuffer.read(Uint32Array, 1);
            }
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_LOTTERY_REFRESH_SELF_BET_SC = CMD_LOTTERY_REFRESH_SELF_BET_SC;
    class OneChatHisMsg {
        constructor() {
            this.szSender = ""; //发送方 
            this.szChatDetail = ""; //聊天内容 
            this.bSenderVipLvl = 0; //发送方VIP等级 
            this.bIsSelfSend = 0; //是否收到方就是发送方自己 
            this.bSenderSex = 0; //发送方性别,目前不会用到 
            this.bHeadPhoto = 0; //系统头像,目前不会用到 
            this.bChannel = 0; //聊天频道,参见EnChatChannel定义 
            this.bChatType = 0; //消息类型,参见CHAT_TYPE_ZJH_PREDEF等定义 
            this.llSenderRoleID = 0; //当为玩家触发消息时对应的发送方角色ID 
        }
        messageName() { return "OneChatHisMsg"; }
        messageValue() { return 0; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.writeString(this.szSender, CSProto.MAX_ROLE_NAME_LEN);
            encodeBuffer.writeString(this.szChatDetail, CSProto.MAX_CHAT_MSG_LEN);
            encodeBuffer.write(Uint8Array, this.bSenderVipLvl);
            encodeBuffer.write(Uint8Array, this.bIsSelfSend);
            encodeBuffer.write(Uint8Array, this.bSenderSex);
            encodeBuffer.write(Uint8Array, this.bHeadPhoto);
            if (2 < CSProto.Version) {
                encodeBuffer.write(Uint8Array, this.bChannel);
            }
            if (16 < CSProto.Version) {
                encodeBuffer.write(Uint8Array, this.bChatType);
            }
            if (27 < CSProto.Version) {
                encodeBuffer.write(Float64Array, this.llSenderRoleID);
            }
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.szSender = decodeBuffer.readString(CSProto.MAX_ROLE_NAME_LEN);
            this.szChatDetail = decodeBuffer.readString(CSProto.MAX_CHAT_MSG_LEN);
            this.bSenderVipLvl = decodeBuffer.read(Uint8Array, 1);
            this.bIsSelfSend = decodeBuffer.read(Uint8Array, 1);
            this.bSenderSex = decodeBuffer.read(Uint8Array, 1);
            this.bHeadPhoto = decodeBuffer.read(Uint8Array, 1);
            if (2 < CSProto.Version) {
                this.bChannel = decodeBuffer.read(Uint8Array, 1);
            }
            if (16 < CSProto.Version) {
                this.bChatType = decodeBuffer.read(Uint8Array, 1);
            }
            if (27 < CSProto.Version) {
                this.llSenderRoleID = decodeBuffer.read(Float64Array, 1);
            }
            return decodeBuffer.length();
        }
    }
    CSProto.OneChatHisMsg = OneChatHisMsg;
    class CMD_LOTTERY_HISTORY_CHATMSG_SC {
        constructor() {
            this.astHisList = new Array(); //历史记录 
        }
        messageName() { return "CMD_LOTTERY_HISTORY_CHATMSG"; }
        messageValue() { return CSProto.CMD_LOTTERY_HISTORY_CHATMSG; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            var astHisListSize = this.astHisList.length > CSProto.MAX_HISCHAT_LIST_SIZE ? CSProto.MAX_HISCHAT_LIST_SIZE : this.astHisList.length;
            encodeBuffer.write(Uint16Array, astHisListSize);
            this.astHisList.length = astHisListSize;
            for (var i = 0; i < astHisListSize; i++) {
                encodeBuffer.skip(this.astHisList[i].encode(encodeBuffer.buffer(), encodeBuffer.offset()));
            }
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            var astHisListSize = decodeBuffer.read(Uint16Array, 1);
            this.astHisList = new Array(astHisListSize);
            for (var i = 0; i < astHisListSize; i++) {
                this.astHisList[i] = new OneChatHisMsg();
                decodeBuffer.skip(this.astHisList[i].decode(decodeBuffer.buffer(), decodeBuffer.offset()));
            }
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_LOTTERY_HISTORY_CHATMSG_SC = CMD_LOTTERY_HISTORY_CHATMSG_SC;
    class CMD_WARP_CS {
        constructor() {
            this.wMapID = 0; //想要进入的房间对应地图ID参见MAP_TEMPLATE_ID_NORMAL_SLOT等枚举 
            this.wTableID = 0; //对应房间ID目前仅在加入扎金花贵宾场时用到 
            this.szPWD = ""; //对应设置的房间密码目前仅在创建或者加入扎金花贵宾场时用到 
        }
        messageName() { return "CMD_WARP"; }
        messageValue() { return CSProto.CMD_WARP; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.write(Uint16Array, this.wMapID);
            if (33 < CSProto.Version) {
                encodeBuffer.write(Uint16Array, this.wTableID);
            }
            if (33 < CSProto.Version) {
                encodeBuffer.writeString(this.szPWD, 10);
            }
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.wMapID = decodeBuffer.read(Uint16Array, 1);
            if (33 < CSProto.Version) {
                this.wTableID = decodeBuffer.read(Uint16Array, 1);
            }
            if (33 < CSProto.Version) {
                this.szPWD = decodeBuffer.readString(10);
            }
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_WARP_CS = CMD_WARP_CS;
    class CMD_WARP_SC {
        constructor() {
            this.wMapID = 0; //将要被传送至的房间对应地图ID参见MAP_TEMPLATE_ID_NORMAL_SLOT等枚举 
            this.wTableID = 0; //对应房间ID目前仅扎金花创建贵宾场时用到 
            this.szPWD = ""; //对应设置的房间密码目前仅扎金花创建贵宾场时用到 
            this.llServerUnixtimeMs = 0; //同步当前服务器时间_单位毫秒_这里没有考虑网络延时_是在服务器构造该下行的时候的时间_准确时间可以结合CMD_PING来较正 
        }
        messageName() { return "CMD_WARP"; }
        messageValue() { return CSProto.CMD_WARP; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.write(Uint16Array, this.wMapID);
            if (33 < CSProto.Version) {
                encodeBuffer.write(Uint16Array, this.wTableID);
            }
            if (33 < CSProto.Version) {
                encodeBuffer.writeString(this.szPWD, 10);
            }
            if (35 < CSProto.Version) {
                encodeBuffer.write(Float64Array, this.llServerUnixtimeMs);
            }
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.wMapID = decodeBuffer.read(Uint16Array, 1);
            if (33 < CSProto.Version) {
                this.wTableID = decodeBuffer.read(Uint16Array, 1);
            }
            if (33 < CSProto.Version) {
                this.szPWD = decodeBuffer.readString(10);
            }
            if (35 < CSProto.Version) {
                this.llServerUnixtimeMs = decodeBuffer.read(Float64Array, 1);
            }
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_WARP_SC = CMD_WARP_SC;
    class CMD_GM_CS {
        constructor() {
            this.aszDetail = ""; //xxx 
            this.aszDetailExt = ""; //xxx 
        }
        messageName() { return "CMD_GM"; }
        messageValue() { return CSProto.CMD_GM; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.writeString(this.aszDetail, 256);
            encodeBuffer.writeString(this.aszDetailExt, 256);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.aszDetail = decodeBuffer.readString(256);
            this.aszDetailExt = decodeBuffer.readString(256);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_GM_CS = CMD_GM_CS;
    class CMD_GM_SC {
        constructor() {
            this.aszRetDetail = ""; //xxx 
        }
        messageName() { return "CMD_GM"; }
        messageValue() { return CSProto.CMD_GM; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.writeString(this.aszRetDetail, 256);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.aszRetDetail = decodeBuffer.readString(256);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_GM_SC = CMD_GM_SC;
    class CMD_SCENE_HISTORY_CHATMSG_SC {
        constructor() {
            this.astHisList = new Array(); //历史记录 
        }
        messageName() { return "CMD_SCENE_HISTORY_CHATMSG"; }
        messageValue() { return CSProto.CMD_SCENE_HISTORY_CHATMSG; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            var astHisListSize = this.astHisList.length > CSProto.MAX_HISCHAT_LIST_SIZE ? CSProto.MAX_HISCHAT_LIST_SIZE : this.astHisList.length;
            encodeBuffer.write(Uint16Array, astHisListSize);
            this.astHisList.length = astHisListSize;
            for (var i = 0; i < astHisListSize; i++) {
                encodeBuffer.skip(this.astHisList[i].encode(encodeBuffer.buffer(), encodeBuffer.offset()));
            }
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            var astHisListSize = decodeBuffer.read(Uint16Array, 1);
            this.astHisList = new Array(astHisListSize);
            for (var i = 0; i < astHisListSize; i++) {
                this.astHisList[i] = new OneChatHisMsg();
                decodeBuffer.skip(this.astHisList[i].decode(decodeBuffer.buffer(), decodeBuffer.offset()));
            }
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_SCENE_HISTORY_CHATMSG_SC = CMD_SCENE_HISTORY_CHATMSG_SC;
    class CMD_CLASSICFRUIT_BET_ON_CS {
        constructor() {
            this.bOneBetBaseTag = 0; //单注数量序号,参见LOTTERY_ONEBET_BASE_TAG_1等系列枚举 
            this.astBetDetail = new Array(); //下注列表 
            this.dwRoundID = 0; //对应的相关转数序号 
        }
        messageName() { return "CMD_CLASSICFRUIT_BET_ON"; }
        messageValue() { return CSProto.CMD_CLASSICFRUIT_BET_ON; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.write(Uint8Array, this.bOneBetBaseTag);
            var astBetDetailSize = this.astBetDetail.length > 10 ? 10 : this.astBetDetail.length;
            encodeBuffer.write(Uint16Array, astBetDetailSize);
            this.astBetDetail.length = astBetDetailSize;
            for (var i = 0; i < astBetDetailSize; i++) {
                encodeBuffer.skip(this.astBetDetail[i].encode(encodeBuffer.buffer(), encodeBuffer.offset()));
            }
            if (10 < CSProto.Version) {
                encodeBuffer.write(Uint32Array, this.dwRoundID);
            }
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.bOneBetBaseTag = decodeBuffer.read(Uint8Array, 1);
            var astBetDetailSize = decodeBuffer.read(Uint16Array, 1);
            this.astBetDetail = new Array(astBetDetailSize);
            for (var i = 0; i < astBetDetailSize; i++) {
                this.astBetDetail[i] = new PROPERTY();
                decodeBuffer.skip(this.astBetDetail[i].decode(decodeBuffer.buffer(), decodeBuffer.offset()));
            }
            if (10 < CSProto.Version) {
                this.dwRoundID = decodeBuffer.read(Uint32Array, 1);
            }
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_CLASSICFRUIT_BET_ON_CS = CMD_CLASSICFRUIT_BET_ON_CS;
    class CMD_CLASSICFRUIT_BET_ON_SC {
        constructor() {
            this.dwRoundID = 0; //对应的相关转数序号,目前仅用于调试方便 
            this.dwBetTotalGold = 0; //总下注币数 
        }
        messageName() { return "CMD_CLASSICFRUIT_BET_ON"; }
        messageValue() { return CSProto.CMD_CLASSICFRUIT_BET_ON; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.write(Uint32Array, this.dwRoundID);
            encodeBuffer.write(Uint32Array, this.dwBetTotalGold);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.dwRoundID = decodeBuffer.read(Uint32Array, 1);
            this.dwBetTotalGold = decodeBuffer.read(Uint32Array, 1);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_CLASSICFRUIT_BET_ON_SC = CMD_CLASSICFRUIT_BET_ON_SC;
    class ClassicFruitPoolBetDetail {
        constructor() {
            this.astPrizeBetList = new Array(); //当前对应当转的各奖项具体下注列表 
        }
        messageName() { return "ClassicFruitPoolBetDetail"; }
        messageValue() { return 0; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            var astPrizeBetListSize = this.astPrizeBetList.length > 10 ? 10 : this.astPrizeBetList.length;
            encodeBuffer.write(Uint16Array, astPrizeBetListSize);
            this.astPrizeBetList.length = astPrizeBetListSize;
            for (var i = 0; i < astPrizeBetListSize; i++) {
                encodeBuffer.skip(this.astPrizeBetList[i].encode(encodeBuffer.buffer(), encodeBuffer.offset()));
            }
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            var astPrizeBetListSize = decodeBuffer.read(Uint16Array, 1);
            this.astPrizeBetList = new Array(astPrizeBetListSize);
            for (var i = 0; i < astPrizeBetListSize; i++) {
                this.astPrizeBetList[i] = new PROPERTY();
                decodeBuffer.skip(this.astPrizeBetList[i].decode(decodeBuffer.buffer(), decodeBuffer.offset()));
            }
            return decodeBuffer.length();
        }
    }
    CSProto.ClassicFruitPoolBetDetail = ClassicFruitPoolBetDetail;
    class ClassicFruitBanker {
        constructor() {
            this.dwObjectID = 0; //实体handle 
            this.wLevel = 0; //等级 
            this.wVipLevel = 0; //VIP等级 
            this.szName = ""; //字符串类型的名字 
            this.bSex = 0; //性别,目前不会用到 
            this.bHeadPhoto = 0; //系统头像,目前不会用到 
            this.bBankerLeftRound = 0; //当前庄家剩余局数 
            this.llOwnGold = 0; //拥有的金币 
            this.szSelfDefPhoto = ""; //玩家自定义头像,长度不为0时以此为准 
        }
        messageName() { return "ClassicFruitBanker"; }
        messageValue() { return 0; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.write(Uint32Array, this.dwObjectID);
            encodeBuffer.write(Uint16Array, this.wLevel);
            encodeBuffer.write(Uint16Array, this.wVipLevel);
            encodeBuffer.writeString(this.szName, CSProto.MAX_ROLE_NAME_LEN);
            encodeBuffer.write(Uint8Array, this.bSex);
            encodeBuffer.write(Uint8Array, this.bHeadPhoto);
            encodeBuffer.write(Uint8Array, this.bBankerLeftRound);
            encodeBuffer.write(Float64Array, this.llOwnGold);
            if (5 < CSProto.Version) {
                encodeBuffer.writeString(this.szSelfDefPhoto, CSProto.MAX_ROLE_SELFDEF_PHOTO_LEN);
            }
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.dwObjectID = decodeBuffer.read(Uint32Array, 1);
            this.wLevel = decodeBuffer.read(Uint16Array, 1);
            this.wVipLevel = decodeBuffer.read(Uint16Array, 1);
            this.szName = decodeBuffer.readString(CSProto.MAX_ROLE_NAME_LEN);
            this.bSex = decodeBuffer.read(Uint8Array, 1);
            this.bHeadPhoto = decodeBuffer.read(Uint8Array, 1);
            this.bBankerLeftRound = decodeBuffer.read(Uint8Array, 1);
            this.llOwnGold = decodeBuffer.read(Float64Array, 1);
            if (5 < CSProto.Version) {
                this.szSelfDefPhoto = decodeBuffer.readString(CSProto.MAX_ROLE_SELFDEF_PHOTO_LEN);
            }
            return decodeBuffer.length();
        }
    }
    CSProto.ClassicFruitBanker = ClassicFruitBanker;
    class ClassicFruitRoundBankerSwitch {
        constructor() {
            this.bSwitchType = 0; //庄家变更状态,参见CLASSFRUIT_BANKER_SWITCHTYPE_NONE等系列枚举 
            this.llBankerRoundWinGold = 0; //本局存在庄家时的本局获得钱数,可正可负 
            this.llBankerTotalWinGold = 0; //庄家最终结算获得钱数,可正可负 
            this.llBankerTotalSysCostGold = 0; //庄家最终结算获得钱数为正时被系统所扣钱数 
            this.bIsBankerRupt = 0; //庄家下庄时是否爆庄 
            this.bIsOffBankerSelf = 0; //该协议收到者是否是下庄庄家自己 
        }
        messageName() { return "ClassicFruitRoundBankerSwitch"; }
        messageValue() { return 0; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.write(Uint8Array, this.bSwitchType);
            if (CSProto.CLASSFRUIT_BANKER_SWITCHTYPE_NONE != this.bSwitchType) {
                encodeBuffer.write(Float64Array, this.llBankerRoundWinGold);
            }
            if (CSProto.CLASSFRUIT_BANKER_SWITCHTYPE_TO_NONE == this.bSwitchType || CSProto.CLASSFRUIT_BANKER_SWITCHTYPE_CHANGEONE == this.bSwitchType) {
                encodeBuffer.write(Float64Array, this.llBankerTotalWinGold);
            }
            if (CSProto.CLASSFRUIT_BANKER_SWITCHTYPE_TO_NONE == this.bSwitchType || CSProto.CLASSFRUIT_BANKER_SWITCHTYPE_CHANGEONE == this.bSwitchType) {
                encodeBuffer.write(Float64Array, this.llBankerTotalSysCostGold);
            }
            if (CSProto.CLASSFRUIT_BANKER_SWITCHTYPE_TO_NONE == this.bSwitchType || CSProto.CLASSFRUIT_BANKER_SWITCHTYPE_CHANGEONE == this.bSwitchType) {
                encodeBuffer.write(Uint8Array, this.bIsBankerRupt);
            }
            if (CSProto.CLASSFRUIT_BANKER_SWITCHTYPE_TO_NONE == this.bSwitchType || CSProto.CLASSFRUIT_BANKER_SWITCHTYPE_CHANGEONE == this.bSwitchType) {
                encodeBuffer.write(Uint8Array, this.bIsOffBankerSelf);
            }
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.bSwitchType = decodeBuffer.read(Uint8Array, 1);
            if (CSProto.CLASSFRUIT_BANKER_SWITCHTYPE_NONE != this.bSwitchType) {
                this.llBankerRoundWinGold = decodeBuffer.read(Float64Array, 1);
            }
            if (CSProto.CLASSFRUIT_BANKER_SWITCHTYPE_TO_NONE == this.bSwitchType || CSProto.CLASSFRUIT_BANKER_SWITCHTYPE_CHANGEONE == this.bSwitchType) {
                this.llBankerTotalWinGold = decodeBuffer.read(Float64Array, 1);
            }
            if (CSProto.CLASSFRUIT_BANKER_SWITCHTYPE_TO_NONE == this.bSwitchType || CSProto.CLASSFRUIT_BANKER_SWITCHTYPE_CHANGEONE == this.bSwitchType) {
                this.llBankerTotalSysCostGold = decodeBuffer.read(Float64Array, 1);
            }
            if (CSProto.CLASSFRUIT_BANKER_SWITCHTYPE_TO_NONE == this.bSwitchType || CSProto.CLASSFRUIT_BANKER_SWITCHTYPE_CHANGEONE == this.bSwitchType) {
                this.bIsBankerRupt = decodeBuffer.read(Uint8Array, 1);
            }
            if (CSProto.CLASSFRUIT_BANKER_SWITCHTYPE_TO_NONE == this.bSwitchType || CSProto.CLASSFRUIT_BANKER_SWITCHTYPE_CHANGEONE == this.bSwitchType) {
                this.bIsOffBankerSelf = decodeBuffer.read(Uint8Array, 1);
            }
            return decodeBuffer.length();
        }
    }
    CSProto.ClassicFruitRoundBankerSwitch = ClassicFruitRoundBankerSwitch;
    class ClassicFruitAllData {
        constructor() {
            this.dwRoundID = 0; //对应的相关转数序号,目前仅用于调试方便 
            this.bTabStatus = 0; //当前状态,参见LOTTERY_CURSTATUS_CANBET等系列枚举 
            this.wLeftBetTime = 0; //当前对应剩余可下注秒数 
            this.abHisPrize = new Array(); //历史开出结果小于等于6个以实际长度为准靠左边的为最新 
            this.stPoolBetDetail = new ClassicFruitPoolBetDetail(); //当前对应当转的各奖项具体下注列表 
            this.bIsHasBanker = 0; //为0无庄家,其他则有庄家 
            this.stBankerInfo = new ClassicFruitBanker(); //桌台当前的庄家信息 
        }
        messageName() { return "ClassicFruitAllData"; }
        messageValue() { return 0; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.write(Uint32Array, this.dwRoundID);
            encodeBuffer.write(Uint8Array, this.bTabStatus);
            if (this.bTabStatus == CSProto.LOTTERY_CURSTATUS_CANBET) {
                encodeBuffer.write(Uint8Array, this.wLeftBetTime);
            }
            var abHisPrizeSize = this.abHisPrize.length > CSProto.MAX_CLASSICFRUIT_SCENE_HISPRIZE_LEN ? CSProto.MAX_CLASSICFRUIT_SCENE_HISPRIZE_LEN : this.abHisPrize.length;
            encodeBuffer.write(Uint16Array, abHisPrizeSize);
            this.abHisPrize.length = abHisPrizeSize;
            encodeBuffer.write(Uint8Array, this.abHisPrize);
            encodeBuffer.skip(this.stPoolBetDetail.encode(encodeBuffer.buffer(), encodeBuffer.offset()));
            encodeBuffer.write(Uint8Array, this.bIsHasBanker);
            if (0 != this.bIsHasBanker) {
                encodeBuffer.skip(this.stBankerInfo.encode(encodeBuffer.buffer(), encodeBuffer.offset()));
            }
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.dwRoundID = decodeBuffer.read(Uint32Array, 1);
            this.bTabStatus = decodeBuffer.read(Uint8Array, 1);
            if (this.bTabStatus == CSProto.LOTTERY_CURSTATUS_CANBET) {
                this.wLeftBetTime = decodeBuffer.read(Uint8Array, 1);
            }
            var abHisPrizeSize = decodeBuffer.read(Uint16Array, 1);
            this.abHisPrize = new Array(abHisPrizeSize);
            this.abHisPrize = decodeBuffer.read(Uint8Array, abHisPrizeSize);
            decodeBuffer.skip(this.stPoolBetDetail.decode(decodeBuffer.buffer(), decodeBuffer.offset()));
            this.bIsHasBanker = decodeBuffer.read(Uint8Array, 1);
            if (0 != this.bIsHasBanker) {
                decodeBuffer.skip(this.stBankerInfo.decode(decodeBuffer.buffer(), decodeBuffer.offset()));
            }
            return decodeBuffer.length();
        }
    }
    CSProto.ClassicFruitAllData = ClassicFruitAllData;
    class ClassicFruitTimerData {
        constructor() {
            this.bTabStatus = 0; //当前状态,参见LOTTERY_CURSTATUS_CANBET等系列枚举 
            this.stPoolBetDetail = new ClassicFruitPoolBetDetail(); //当前对应当转的各奖项具体下注列表 
            this.dwCurOnlineAcc = 0; //当前对应在线人数 
            this.dwRoundID = 0; //对应的相关转数序号 
        }
        messageName() { return "ClassicFruitTimerData"; }
        messageValue() { return 0; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.write(Uint8Array, this.bTabStatus);
            encodeBuffer.skip(this.stPoolBetDetail.encode(encodeBuffer.buffer(), encodeBuffer.offset()));
            encodeBuffer.write(Uint32Array, this.dwCurOnlineAcc);
            if (10 < CSProto.Version) {
                encodeBuffer.write(Uint32Array, this.dwRoundID);
            }
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.bTabStatus = decodeBuffer.read(Uint8Array, 1);
            decodeBuffer.skip(this.stPoolBetDetail.decode(decodeBuffer.buffer(), decodeBuffer.offset()));
            this.dwCurOnlineAcc = decodeBuffer.read(Uint32Array, 1);
            if (10 < CSProto.Version) {
                this.dwRoundID = decodeBuffer.read(Uint32Array, 1);
            }
            return decodeBuffer.length();
        }
    }
    CSProto.ClassicFruitTimerData = ClassicFruitTimerData;
    class CMD_CLASSICFRUIT_ENTERDATA_SC {
        constructor() {
            this.wMapID = 0; //对应地图模板ID参见MAP_TEMPLATE_ID_CLASSIC_FRUIT等枚举 
            this.dwSceneID = 0; //对应的场景ID游戏内唯一是游戏内所有桌台统一编号的索引 
            this.dwTableID = 0; //对应的桌台ID,目前无用 
            this.stAllData = new ClassicFruitAllData(); //对应当前数据 
            this.dwBetTotalGold = 0; //总下注币数 
            this.astBetDetail = new Array(); //当前对应当转的玩家己下注列表,若已经下注则有数据 
            this.bPlayerBankerStat = 0; //玩家自己的庄家相关状态 
            this.dwCurOnlineAcc = 0; //当前对应在线人数 
            this.bOneBetBaseTag = 0; //玩家自己下注的单注数量序号,参见LOTTERY_ONEBET_BASE_TAG_1等系列枚举 
            this.bIfCanJoinPlay = 0; //是否可参与该玩法:0不行 1可以 
            this.dwBankerQueuePos = 0; //当在排庄队列中时代表当前位置 
        }
        messageName() { return "CMD_CLASSICFRUIT_ENTERDATA"; }
        messageValue() { return CSProto.CMD_CLASSICFRUIT_ENTERDATA; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.write(Uint16Array, this.wMapID);
            encodeBuffer.write(Uint32Array, this.dwSceneID);
            encodeBuffer.write(Uint32Array, this.dwTableID);
            encodeBuffer.skip(this.stAllData.encode(encodeBuffer.buffer(), encodeBuffer.offset()));
            encodeBuffer.write(Uint32Array, this.dwBetTotalGold);
            var astBetDetailSize = this.astBetDetail.length > 10 ? 10 : this.astBetDetail.length;
            encodeBuffer.write(Uint16Array, astBetDetailSize);
            this.astBetDetail.length = astBetDetailSize;
            for (var i = 0; i < astBetDetailSize; i++) {
                encodeBuffer.skip(this.astBetDetail[i].encode(encodeBuffer.buffer(), encodeBuffer.offset()));
            }
            encodeBuffer.write(Uint8Array, this.bPlayerBankerStat);
            encodeBuffer.write(Uint32Array, this.dwCurOnlineAcc);
            if (4 < CSProto.Version) {
                encodeBuffer.write(Uint8Array, this.bOneBetBaseTag);
            }
            if (25 < CSProto.Version) {
                encodeBuffer.write(Uint8Array, this.bIfCanJoinPlay);
            }
            if (25 < CSProto.Version) {
                encodeBuffer.write(Uint32Array, this.dwBankerQueuePos);
            }
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.wMapID = decodeBuffer.read(Uint16Array, 1);
            this.dwSceneID = decodeBuffer.read(Uint32Array, 1);
            this.dwTableID = decodeBuffer.read(Uint32Array, 1);
            decodeBuffer.skip(this.stAllData.decode(decodeBuffer.buffer(), decodeBuffer.offset()));
            this.dwBetTotalGold = decodeBuffer.read(Uint32Array, 1);
            var astBetDetailSize = decodeBuffer.read(Uint16Array, 1);
            this.astBetDetail = new Array(astBetDetailSize);
            for (var i = 0; i < astBetDetailSize; i++) {
                this.astBetDetail[i] = new PROPERTY();
                decodeBuffer.skip(this.astBetDetail[i].decode(decodeBuffer.buffer(), decodeBuffer.offset()));
            }
            this.bPlayerBankerStat = decodeBuffer.read(Uint8Array, 1);
            this.dwCurOnlineAcc = decodeBuffer.read(Uint32Array, 1);
            if (4 < CSProto.Version) {
                this.bOneBetBaseTag = decodeBuffer.read(Uint8Array, 1);
            }
            if (25 < CSProto.Version) {
                this.bIfCanJoinPlay = decodeBuffer.read(Uint8Array, 1);
            }
            if (25 < CSProto.Version) {
                this.dwBankerQueuePos = decodeBuffer.read(Uint32Array, 1);
            }
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_CLASSICFRUIT_ENTERDATA_SC = CMD_CLASSICFRUIT_ENTERDATA_SC;
    class CMD_CLASSICFRUIT_REFRESHDATA_SC {
        constructor() {
            this.stTimerData = new ClassicFruitTimerData(); //对应当前数据 
        }
        messageName() { return "CMD_CLASSICFRUIT_REFRESHDATA"; }
        messageValue() { return CSProto.CMD_CLASSICFRUIT_REFRESHDATA; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.skip(this.stTimerData.encode(encodeBuffer.buffer(), encodeBuffer.offset()));
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            decodeBuffer.skip(this.stTimerData.decode(decodeBuffer.buffer(), decodeBuffer.offset()));
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_CLASSICFRUIT_REFRESHDATA_SC = CMD_CLASSICFRUIT_REFRESHDATA_SC;
    class CMD_CLASSICFRUIT_ROUND_END_SC {
        constructor() {
            this.stNewstData = new ClassicFruitAllData(); //对应开奖后的转轮数据,序号及奖池数据等所有数据己刷新为发奖后的最新数据 
            this.bClassicFruitRet = 0; //当前对应的开奖结果 
            this.dwGotGoldAll = 0; //本局自己获得金币总数 
            this.stBankerSwitchInfo = new ClassicFruitRoundBankerSwitch(); //庄家变更相关描述数据 
            this.dwBankerQueuePos = 0; //当在排庄队列中时代表当前位置 
            this.llGotGoldAll = 0; //本局自己获得金币总数新版本客户端统一使用这个字段dwGotGoldAll未来会废弃 
        }
        messageName() { return "CMD_CLASSICFRUIT_ROUND_END"; }
        messageValue() { return CSProto.CMD_CLASSICFRUIT_ROUND_END; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.skip(this.stNewstData.encode(encodeBuffer.buffer(), encodeBuffer.offset()));
            encodeBuffer.write(Uint8Array, this.bClassicFruitRet);
            encodeBuffer.write(Uint32Array, this.dwGotGoldAll);
            encodeBuffer.skip(this.stBankerSwitchInfo.encode(encodeBuffer.buffer(), encodeBuffer.offset()));
            if (25 < CSProto.Version) {
                encodeBuffer.write(Uint32Array, this.dwBankerQueuePos);
            }
            if (28 < CSProto.Version) {
                encodeBuffer.write(Float64Array, this.llGotGoldAll);
            }
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            decodeBuffer.skip(this.stNewstData.decode(decodeBuffer.buffer(), decodeBuffer.offset()));
            this.bClassicFruitRet = decodeBuffer.read(Uint8Array, 1);
            this.dwGotGoldAll = decodeBuffer.read(Uint32Array, 1);
            decodeBuffer.skip(this.stBankerSwitchInfo.decode(decodeBuffer.buffer(), decodeBuffer.offset()));
            if (25 < CSProto.Version) {
                this.dwBankerQueuePos = decodeBuffer.read(Uint32Array, 1);
            }
            if (28 < CSProto.Version) {
                this.llGotGoldAll = decodeBuffer.read(Float64Array, 1);
            }
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_CLASSICFRUIT_ROUND_END_SC = CMD_CLASSICFRUIT_ROUND_END_SC;
    class CMD_CLASSICFRUIT_REFRESH_SELF_BET_SC {
        constructor() {
            this.dwAccCurOwnGold = 0; //玩家当前实际拥有的币数,若有预扣这里需要回滚 
            this.dwBetTotalGold = 0; //总下注币数 
            this.astBetDetail = new Array(); //当前对应当转的己下注列表,若已经下注则有数据 
            this.dwRoundID = 0; //对应的相关转数序号 
        }
        messageName() { return "CMD_CLASSICFRUIT_REFRESH_SELF_BET"; }
        messageValue() { return CSProto.CMD_CLASSICFRUIT_REFRESH_SELF_BET; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.write(Uint32Array, this.dwAccCurOwnGold);
            encodeBuffer.write(Uint32Array, this.dwBetTotalGold);
            var astBetDetailSize = this.astBetDetail.length > 10 ? 10 : this.astBetDetail.length;
            encodeBuffer.write(Uint16Array, astBetDetailSize);
            this.astBetDetail.length = astBetDetailSize;
            for (var i = 0; i < astBetDetailSize; i++) {
                encodeBuffer.skip(this.astBetDetail[i].encode(encodeBuffer.buffer(), encodeBuffer.offset()));
            }
            if (10 < CSProto.Version) {
                encodeBuffer.write(Uint32Array, this.dwRoundID);
            }
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.dwAccCurOwnGold = decodeBuffer.read(Uint32Array, 1);
            this.dwBetTotalGold = decodeBuffer.read(Uint32Array, 1);
            var astBetDetailSize = decodeBuffer.read(Uint16Array, 1);
            this.astBetDetail = new Array(astBetDetailSize);
            for (var i = 0; i < astBetDetailSize; i++) {
                this.astBetDetail[i] = new PROPERTY();
                decodeBuffer.skip(this.astBetDetail[i].decode(decodeBuffer.buffer(), decodeBuffer.offset()));
            }
            if (10 < CSProto.Version) {
                this.dwRoundID = decodeBuffer.read(Uint32Array, 1);
            }
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_CLASSICFRUIT_REFRESH_SELF_BET_SC = CMD_CLASSICFRUIT_REFRESH_SELF_BET_SC;
    class CMD_CLASSICFRUIT_SIGNUP_BANKER_SC {
        constructor() {
            this.wQueuePos = 0; //在队列中的位置 
            this.bPlayerBankerStat = 0; //玩家的庄家状态 
            this.szSuccTips = ""; //上庄成功相关的提示 
        }
        messageName() { return "CMD_CLASSICFRUIT_SIGNUP_BANKER"; }
        messageValue() { return CSProto.CMD_CLASSICFRUIT_SIGNUP_BANKER; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.write(Uint16Array, this.wQueuePos);
            encodeBuffer.write(Uint8Array, this.bPlayerBankerStat);
            encodeBuffer.writeString(this.szSuccTips, 256);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.wQueuePos = decodeBuffer.read(Uint16Array, 1);
            this.bPlayerBankerStat = decodeBuffer.read(Uint8Array, 1);
            this.szSuccTips = decodeBuffer.readString(256);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_CLASSICFRUIT_SIGNUP_BANKER_SC = CMD_CLASSICFRUIT_SIGNUP_BANKER_SC;
    class CMD_CLASSICFRUIT_QUIT_BANKER_SC {
        constructor() {
            this.bPlayerBankerStat = 0; //玩家的庄家状态 
        }
        messageName() { return "CMD_CLASSICFRUIT_QUIT_BANKER"; }
        messageValue() { return CSProto.CMD_CLASSICFRUIT_QUIT_BANKER; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.write(Uint8Array, this.bPlayerBankerStat);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.bPlayerBankerStat = decodeBuffer.read(Uint8Array, 1);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_CLASSICFRUIT_QUIT_BANKER_SC = CMD_CLASSICFRUIT_QUIT_BANKER_SC;
    class CMD_CLASSICFRUIT_UPDATE_BANKER_STAT_SC {
        constructor() {
            this.bPlayerBankerStat = 0; //玩家的庄家状态 
            this.wQueuePos = 0; //在队列中的位置 
        }
        messageName() { return "CMD_CLASSICFRUIT_UPDATE_BANKER_STAT"; }
        messageValue() { return CSProto.CMD_CLASSICFRUIT_UPDATE_BANKER_STAT; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.write(Uint8Array, this.bPlayerBankerStat);
            encodeBuffer.write(Uint16Array, this.wQueuePos);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.bPlayerBankerStat = decodeBuffer.read(Uint8Array, 1);
            this.wQueuePos = decodeBuffer.read(Uint16Array, 1);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_CLASSICFRUIT_UPDATE_BANKER_STAT_SC = CMD_CLASSICFRUIT_UPDATE_BANKER_STAT_SC;
    class CMD_CLASSICFRUIT_CURBANKERLIST_SC {
        constructor() {
            this.astBankerList = new Array(); //当前排队中的庄家列表 
        }
        messageName() { return "CMD_CLASSICFRUIT_CURBANKERLIST"; }
        messageValue() { return CSProto.CMD_CLASSICFRUIT_CURBANKERLIST; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            var astBankerListSize = this.astBankerList.length > 3 ? 3 : this.astBankerList.length;
            encodeBuffer.write(Uint16Array, astBankerListSize);
            this.astBankerList.length = astBankerListSize;
            for (var i = 0; i < astBankerListSize; i++) {
                encodeBuffer.skip(this.astBankerList[i].encode(encodeBuffer.buffer(), encodeBuffer.offset()));
            }
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            var astBankerListSize = decodeBuffer.read(Uint16Array, 1);
            this.astBankerList = new Array(astBankerListSize);
            for (var i = 0; i < astBankerListSize; i++) {
                this.astBankerList[i] = new ClassicFruitBanker();
                decodeBuffer.skip(this.astBankerList[i].decode(decodeBuffer.buffer(), decodeBuffer.offset()));
            }
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_CLASSICFRUIT_CURBANKERLIST_SC = CMD_CLASSICFRUIT_CURBANKERLIST_SC;
    class CMD_CLASSICFRUIT_UPDATE_CURBANKER_SC {
        constructor() {
            this.bIsHasBanker = 0; //为0无庄家,其他则有庄家 
            this.stBankerInfo = new ClassicFruitBanker(); //桌台当前的庄家信息 
        }
        messageName() { return "CMD_CLASSICFRUIT_UPDATE_CURBANKER"; }
        messageValue() { return CSProto.CMD_CLASSICFRUIT_UPDATE_CURBANKER; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.write(Uint8Array, this.bIsHasBanker);
            if (0 != this.bIsHasBanker) {
                encodeBuffer.skip(this.stBankerInfo.encode(encodeBuffer.buffer(), encodeBuffer.offset()));
            }
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.bIsHasBanker = decodeBuffer.read(Uint8Array, 1);
            if (0 != this.bIsHasBanker) {
                decodeBuffer.skip(this.stBankerInfo.decode(decodeBuffer.buffer(), decodeBuffer.offset()));
            }
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_CLASSICFRUIT_UPDATE_CURBANKER_SC = CMD_CLASSICFRUIT_UPDATE_CURBANKER_SC;
    class OneNewMsgTag {
        constructor() {
            this.llFuncType = 0; //功能类型 
            this.bRelateNum = 0; //对应标记数字 
        }
        messageName() { return "OneNewMsgTag"; }
        messageValue() { return 0; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.write(Float64Array, this.llFuncType);
            encodeBuffer.write(Uint8Array, this.bRelateNum);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.llFuncType = decodeBuffer.read(Float64Array, 1);
            this.bRelateNum = decodeBuffer.read(Uint8Array, 1);
            return decodeBuffer.length();
        }
    }
    CSProto.OneNewMsgTag = OneNewMsgTag;
    class CMD_NEWMSG_TAG_CS {
        constructor() {
            this.llFuncType = 0; //通知清除标记的功能不会有对应下行,客户端发出上行后自行清理 
        }
        messageName() { return "CMD_NEWMSG_TAG"; }
        messageValue() { return CSProto.CMD_NEWMSG_TAG; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.write(Float64Array, this.llFuncType);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.llFuncType = decodeBuffer.read(Float64Array, 1);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_NEWMSG_TAG_CS = CMD_NEWMSG_TAG_CS;
    class CMD_NEWMSG_TAG_SC {
        constructor() {
            this.astTagList = new Array(); //服务器主动通知的当前需要打点的列表 
        }
        messageName() { return "CMD_NEWMSG_TAG"; }
        messageValue() { return CSProto.CMD_NEWMSG_TAG; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            var astTagListSize = this.astTagList.length > CSProto.MAX_NEWMSGTAG_LIST_LEN ? CSProto.MAX_NEWMSGTAG_LIST_LEN : this.astTagList.length;
            encodeBuffer.write(Uint16Array, astTagListSize);
            this.astTagList.length = astTagListSize;
            for (var i = 0; i < astTagListSize; i++) {
                encodeBuffer.skip(this.astTagList[i].encode(encodeBuffer.buffer(), encodeBuffer.offset()));
            }
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            var astTagListSize = decodeBuffer.read(Uint16Array, 1);
            this.astTagList = new Array(astTagListSize);
            for (var i = 0; i < astTagListSize; i++) {
                this.astTagList[i] = new OneNewMsgTag();
                decodeBuffer.skip(this.astTagList[i].decode(decodeBuffer.buffer(), decodeBuffer.offset()));
            }
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_NEWMSG_TAG_SC = CMD_NEWMSG_TAG_SC;
    class CMD_GET_RANKAWARD_CS {
        constructor() {
            this.bRankClass = 0; //排行榜分类,参见RANK_CLASS_VIPLVL等枚举定义 
            this.dwRankSubClass = 0; //排行榜子分类:当用于标记按天充值排行榜中的历史榜单则上一天为1,为0是当天 
        }
        messageName() { return "CMD_GET_RANKAWARD"; }
        messageValue() { return CSProto.CMD_GET_RANKAWARD; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.write(Uint8Array, this.bRankClass);
            encodeBuffer.write(Uint32Array, this.dwRankSubClass);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.bRankClass = decodeBuffer.read(Uint8Array, 1);
            this.dwRankSubClass = decodeBuffer.read(Uint32Array, 1);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_GET_RANKAWARD_CS = CMD_GET_RANKAWARD_CS;
    class CMD_GET_RANKAWARD_SC {
        constructor() {
            this.bRankClass = 0; //排行榜分类,参见RANK_CLASS_VIPLVL等枚举定义 
            this.dwRankSubClass = 0; //排行榜子分类:当为充值榜时传1表明是获取昨天列表 
            this.llGotGoldAward = 0; //成功领取的金币奖励 
        }
        messageName() { return "CMD_GET_RANKAWARD"; }
        messageValue() { return CSProto.CMD_GET_RANKAWARD; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.write(Uint8Array, this.bRankClass);
            encodeBuffer.write(Uint32Array, this.dwRankSubClass);
            encodeBuffer.write(Float64Array, this.llGotGoldAward);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.bRankClass = decodeBuffer.read(Uint8Array, 1);
            this.dwRankSubClass = decodeBuffer.read(Uint32Array, 1);
            this.llGotGoldAward = decodeBuffer.read(Float64Array, 1);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_GET_RANKAWARD_SC = CMD_GET_RANKAWARD_SC;
    class CMD_PRIZEDRAW_CURINFO_SC {
        constructor() {
            this.dwDrawCost = 0; //当前抽奖每次消费金币数 
            this.dwLeftDrawTimes = 0; //剩余可抽奖次数 
            this.astDrawHis = new Array(); //用户每日抽奖历史记录越新的排前面 
            this.dwTotalDrawTimes = 0; //总可抽奖次数 
        }
        messageName() { return "CMD_PRIZEDRAW_CURINFO"; }
        messageValue() { return CSProto.CMD_PRIZEDRAW_CURINFO; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.write(Uint32Array, this.dwDrawCost);
            encodeBuffer.write(Uint32Array, this.dwLeftDrawTimes);
            var astDrawHisSize = this.astDrawHis.length > CSProto.MAX_DRAWPIZEEHIS_LIST_LEN ? CSProto.MAX_DRAWPIZEEHIS_LIST_LEN : this.astDrawHis.length;
            encodeBuffer.write(Uint16Array, astDrawHisSize);
            this.astDrawHis.length = astDrawHisSize;
            for (var i = 0; i < astDrawHisSize; i++) {
                encodeBuffer.skip(this.astDrawHis[i].encode(encodeBuffer.buffer(), encodeBuffer.offset()));
            }
            if (9 < CSProto.Version) {
                encodeBuffer.write(Uint32Array, this.dwTotalDrawTimes);
            }
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.dwDrawCost = decodeBuffer.read(Uint32Array, 1);
            this.dwLeftDrawTimes = decodeBuffer.read(Uint32Array, 1);
            var astDrawHisSize = decodeBuffer.read(Uint16Array, 1);
            this.astDrawHis = new Array(astDrawHisSize);
            for (var i = 0; i < astDrawHisSize; i++) {
                this.astDrawHis[i] = new PROPERTY();
                decodeBuffer.skip(this.astDrawHis[i].decode(decodeBuffer.buffer(), decodeBuffer.offset()));
            }
            if (9 < CSProto.Version) {
                this.dwTotalDrawTimes = decodeBuffer.read(Uint32Array, 1);
            }
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_PRIZEDRAW_CURINFO_SC = CMD_PRIZEDRAW_CURINFO_SC;
    class CMD_PLAY_PRIZEDRAW_SC {
        constructor() {
            this.bIsDrawSucc = 0; //1成功,0失败 
            this.stDrawRet = new PROPERTY(); //抽得的奖品,其中ID参见DRAW_PRIZE_GOLD等枚举,VAL为对应的数量 
        }
        messageName() { return "CMD_PLAY_PRIZEDRAW"; }
        messageValue() { return CSProto.CMD_PLAY_PRIZEDRAW; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.write(Uint8Array, this.bIsDrawSucc);
            if (this.bIsDrawSucc == 1) {
                encodeBuffer.skip(this.stDrawRet.encode(encodeBuffer.buffer(), encodeBuffer.offset()));
            }
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.bIsDrawSucc = decodeBuffer.read(Uint8Array, 1);
            if (this.bIsDrawSucc == 1) {
                decodeBuffer.skip(this.stDrawRet.decode(decodeBuffer.buffer(), decodeBuffer.offset()));
            }
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_PLAY_PRIZEDRAW_SC = CMD_PLAY_PRIZEDRAW_SC;
    class CMD_QUERY_MONEYTREE_SC {
        constructor() {
            this.bIsOwnMoneyTree = 0; //是否拥有摇钱树 
            this.dwMoneyTreeLvl = 0; //摇钱树等级 
            this.dwCanGatherMoney = 0; //当前可以收获的金币 
            this.dwFullGatherMoney = 0; //总共将可以收获的金币 
            this.dwLeftCanGather = 0; //该字段后续可能会溢出新版本请使用新字段新版摇钱树剩余可收获总金币数 
            this.llLeftCanGather = 0; //新版本客户端使用该字段:新版摇钱树剩余可收获总金币数 
        }
        messageName() { return "CMD_QUERY_MONEYTREE"; }
        messageValue() { return CSProto.CMD_QUERY_MONEYTREE; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.write(Uint8Array, this.bIsOwnMoneyTree);
            encodeBuffer.write(Uint32Array, this.dwMoneyTreeLvl);
            encodeBuffer.write(Uint32Array, this.dwCanGatherMoney);
            encodeBuffer.write(Uint32Array, this.dwFullGatherMoney);
            if (30 < CSProto.Version) {
                encodeBuffer.write(Uint32Array, this.dwLeftCanGather);
            }
            if (32 < CSProto.Version) {
                encodeBuffer.write(Float64Array, this.llLeftCanGather);
            }
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.bIsOwnMoneyTree = decodeBuffer.read(Uint8Array, 1);
            this.dwMoneyTreeLvl = decodeBuffer.read(Uint32Array, 1);
            this.dwCanGatherMoney = decodeBuffer.read(Uint32Array, 1);
            this.dwFullGatherMoney = decodeBuffer.read(Uint32Array, 1);
            if (30 < CSProto.Version) {
                this.dwLeftCanGather = decodeBuffer.read(Uint32Array, 1);
            }
            if (32 < CSProto.Version) {
                this.llLeftCanGather = decodeBuffer.read(Float64Array, 1);
            }
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_QUERY_MONEYTREE_SC = CMD_QUERY_MONEYTREE_SC;
    class CMD_GATHER_MONEYTREE_SC {
        constructor() {
            this.dwGatherMoney = 0; //最终收获的金币 
            this.dwMoneyTreeLvl = 0; //己弃用:摇钱树最新等级 
            this.dwLeftCanGather = 0; //己弃用:新版摇钱树最新剩余可收获总金币数 
        }
        messageName() { return "CMD_GATHER_MONEYTREE"; }
        messageValue() { return CSProto.CMD_GATHER_MONEYTREE; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.write(Uint32Array, this.dwGatherMoney);
            if (30 < CSProto.Version) {
                encodeBuffer.write(Uint32Array, this.dwMoneyTreeLvl);
            }
            if (30 < CSProto.Version) {
                encodeBuffer.write(Uint32Array, this.dwLeftCanGather);
            }
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.dwGatherMoney = decodeBuffer.read(Uint32Array, 1);
            if (30 < CSProto.Version) {
                this.dwMoneyTreeLvl = decodeBuffer.read(Uint32Array, 1);
            }
            if (30 < CSProto.Version) {
                this.dwLeftCanGather = decodeBuffer.read(Uint32Array, 1);
            }
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_GATHER_MONEYTREE_SC = CMD_GATHER_MONEYTREE_SC;
    class CMD_MODIFY_NICK_CS {
        constructor() {
            this.szNewName = ""; //角色新名字最长6汉字客户端本地昵称需要在收到对应下行后自行刷新 
        }
        messageName() { return "CMD_MODIFY_NICK"; }
        messageValue() { return CSProto.CMD_MODIFY_NICK; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.writeString(this.szNewName, CSProto.MAX_ROLE_NAME_LEN);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.szNewName = decodeBuffer.readString(CSProto.MAX_ROLE_NAME_LEN);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_MODIFY_NICK_CS = CMD_MODIFY_NICK_CS;
    class CMD_MODIFY_NICK_SC {
        constructor() {
            this.szNewName = ""; //角色新名字最长6汉字客户端本地昵称需要在收到对应下行后自行刷新 
        }
        messageName() { return "CMD_MODIFY_NICK"; }
        messageValue() { return CSProto.CMD_MODIFY_NICK; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.writeString(this.szNewName, CSProto.MAX_ROLE_NAME_LEN);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.szNewName = decodeBuffer.readString(CSProto.MAX_ROLE_NAME_LEN);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_MODIFY_NICK_SC = CMD_MODIFY_NICK_SC;
    class CMD_MODIFY_SELFPROP_CS {
        constructor() {
            this.astModifyList = new Array(); //对应的修改列表 
        }
        messageName() { return "CMD_MODIFY_SELFPROP"; }
        messageValue() { return CSProto.CMD_MODIFY_SELFPROP; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            var astModifyListSize = this.astModifyList.length > 10 ? 10 : this.astModifyList.length;
            encodeBuffer.write(Uint16Array, astModifyListSize);
            this.astModifyList.length = astModifyListSize;
            for (var i = 0; i < astModifyListSize; i++) {
                encodeBuffer.skip(this.astModifyList[i].encode(encodeBuffer.buffer(), encodeBuffer.offset()));
            }
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            var astModifyListSize = decodeBuffer.read(Uint16Array, 1);
            this.astModifyList = new Array(astModifyListSize);
            for (var i = 0; i < astModifyListSize; i++) {
                this.astModifyList[i] = new PROPERTY();
                decodeBuffer.skip(this.astModifyList[i].decode(decodeBuffer.buffer(), decodeBuffer.offset()));
            }
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_MODIFY_SELFPROP_CS = CMD_MODIFY_SELFPROP_CS;
    class CMD_UPLOAD_HEADPHOTO_CS {
        constructor() {
            this.szPhotoBinary = ""; //上传的头像二进制内容 
        }
        messageName() { return "CMD_UPLOAD_HEADPHOTO"; }
        messageValue() { return CSProto.CMD_UPLOAD_HEADPHOTO; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.writeString(this.szPhotoBinary, CSProto.MAX_ROLE_SELFDEF_PIC_SIZE);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.szPhotoBinary = decodeBuffer.readString(CSProto.MAX_ROLE_SELFDEF_PIC_SIZE);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_UPLOAD_HEADPHOTO_CS = CMD_UPLOAD_HEADPHOTO_CS;
    class CMD_UPLOAD_HEADPHOTO_SC {
        constructor() {
            this.szSelfDefPhoto = ""; //上传成功则返回玩家自定义头像对应http地址 
        }
        messageName() { return "CMD_UPLOAD_HEADPHOTO"; }
        messageValue() { return CSProto.CMD_UPLOAD_HEADPHOTO; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.writeString(this.szSelfDefPhoto, CSProto.MAX_ROLE_SELFDEF_PHOTO_LEN);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.szSelfDefPhoto = decodeBuffer.readString(CSProto.MAX_ROLE_SELFDEF_PHOTO_LEN);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_UPLOAD_HEADPHOTO_SC = CMD_UPLOAD_HEADPHOTO_SC;
    class CMD_SHARK_BET_ON_CS {
        constructor() {
            this.bOneBetBaseTag = 0; //单注数量序号,参见LOTTERY_ONEBET_BASE_TAG_1等系列枚举 
            this.astBetDetail = new Array(); //下注列表 
            this.dwRoundID = 0; //对应的相关转数序号 
        }
        messageName() { return "CMD_SHARK_BET_ON"; }
        messageValue() { return CSProto.CMD_SHARK_BET_ON; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.write(Uint8Array, this.bOneBetBaseTag);
            var astBetDetailSize = this.astBetDetail.length > CSProto.MAX_SHARK_BETON_LEN ? CSProto.MAX_SHARK_BETON_LEN : this.astBetDetail.length;
            encodeBuffer.write(Uint16Array, astBetDetailSize);
            this.astBetDetail.length = astBetDetailSize;
            for (var i = 0; i < astBetDetailSize; i++) {
                encodeBuffer.skip(this.astBetDetail[i].encode(encodeBuffer.buffer(), encodeBuffer.offset()));
            }
            if (10 < CSProto.Version) {
                encodeBuffer.write(Uint32Array, this.dwRoundID);
            }
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.bOneBetBaseTag = decodeBuffer.read(Uint8Array, 1);
            var astBetDetailSize = decodeBuffer.read(Uint16Array, 1);
            this.astBetDetail = new Array(astBetDetailSize);
            for (var i = 0; i < astBetDetailSize; i++) {
                this.astBetDetail[i] = new PROPERTY();
                decodeBuffer.skip(this.astBetDetail[i].decode(decodeBuffer.buffer(), decodeBuffer.offset()));
            }
            if (10 < CSProto.Version) {
                this.dwRoundID = decodeBuffer.read(Uint32Array, 1);
            }
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_SHARK_BET_ON_CS = CMD_SHARK_BET_ON_CS;
    class CMD_SHARK_BET_ON_SC {
        constructor() {
            this.dwRoundID = 0; //对应的相关转数序号,目前仅用于调试方便 
            this.dwBetTotalGold = 0; //总下注币数 
        }
        messageName() { return "CMD_SHARK_BET_ON"; }
        messageValue() { return CSProto.CMD_SHARK_BET_ON; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.write(Uint32Array, this.dwRoundID);
            encodeBuffer.write(Uint32Array, this.dwBetTotalGold);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.dwRoundID = decodeBuffer.read(Uint32Array, 1);
            this.dwBetTotalGold = decodeBuffer.read(Uint32Array, 1);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_SHARK_BET_ON_SC = CMD_SHARK_BET_ON_SC;
    class SharkPoolBetDetail {
        constructor() {
            this.astPrizeBetList = new Array(); //当前对应当转的各奖项具体下注列表 
        }
        messageName() { return "SharkPoolBetDetail"; }
        messageValue() { return 0; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            var astPrizeBetListSize = this.astPrizeBetList.length > CSProto.MAX_SHARK_BETON_LEN ? CSProto.MAX_SHARK_BETON_LEN : this.astPrizeBetList.length;
            encodeBuffer.write(Uint16Array, astPrizeBetListSize);
            this.astPrizeBetList.length = astPrizeBetListSize;
            for (var i = 0; i < astPrizeBetListSize; i++) {
                encodeBuffer.skip(this.astPrizeBetList[i].encode(encodeBuffer.buffer(), encodeBuffer.offset()));
            }
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            var astPrizeBetListSize = decodeBuffer.read(Uint16Array, 1);
            this.astPrizeBetList = new Array(astPrizeBetListSize);
            for (var i = 0; i < astPrizeBetListSize; i++) {
                this.astPrizeBetList[i] = new PROPERTY();
                decodeBuffer.skip(this.astPrizeBetList[i].decode(decodeBuffer.buffer(), decodeBuffer.offset()));
            }
            return decodeBuffer.length();
        }
    }
    CSProto.SharkPoolBetDetail = SharkPoolBetDetail;
    class SharkBanker {
        constructor() {
            this.dwObjectID = 0; //实体handle 
            this.wLevel = 0; //等级 
            this.wVipLevel = 0; //VIP等级 
            this.szName = ""; //字符串类型的名字 
            this.bSex = 0; //性别,目前不会用到 
            this.bHeadPhoto = 0; //系统头像,目前不会用到 
            this.bBankerLeftRound = 0; //当前庄家剩余局数 
            this.llOwnGold = 0; //拥有的金币 
            this.szSelfDefPhoto = ""; //玩家自定义头像,长度不为0时以此为准 
        }
        messageName() { return "SharkBanker"; }
        messageValue() { return 0; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.write(Uint32Array, this.dwObjectID);
            encodeBuffer.write(Uint16Array, this.wLevel);
            encodeBuffer.write(Uint16Array, this.wVipLevel);
            encodeBuffer.writeString(this.szName, CSProto.MAX_ROLE_NAME_LEN);
            encodeBuffer.write(Uint8Array, this.bSex);
            encodeBuffer.write(Uint8Array, this.bHeadPhoto);
            encodeBuffer.write(Uint8Array, this.bBankerLeftRound);
            encodeBuffer.write(Float64Array, this.llOwnGold);
            encodeBuffer.writeString(this.szSelfDefPhoto, CSProto.MAX_ROLE_SELFDEF_PHOTO_LEN);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.dwObjectID = decodeBuffer.read(Uint32Array, 1);
            this.wLevel = decodeBuffer.read(Uint16Array, 1);
            this.wVipLevel = decodeBuffer.read(Uint16Array, 1);
            this.szName = decodeBuffer.readString(CSProto.MAX_ROLE_NAME_LEN);
            this.bSex = decodeBuffer.read(Uint8Array, 1);
            this.bHeadPhoto = decodeBuffer.read(Uint8Array, 1);
            this.bBankerLeftRound = decodeBuffer.read(Uint8Array, 1);
            this.llOwnGold = decodeBuffer.read(Float64Array, 1);
            this.szSelfDefPhoto = decodeBuffer.readString(CSProto.MAX_ROLE_SELFDEF_PHOTO_LEN);
            return decodeBuffer.length();
        }
    }
    CSProto.SharkBanker = SharkBanker;
    class SharkRoundBankerSwitch {
        constructor() {
            this.bSwitchType = 0; //庄家变更状态,参见CLASSFRUIT_BANKER_SWITCHTYPE_NONE等系列枚举 
            this.llBankerRoundWinGold = 0; //本局存在庄家时的本局获得钱数,可正可负 
            this.llBankerTotalWinGold = 0; //庄家最终结算获得钱数,可正可负 
            this.llBankerTotalSysCostGold = 0; //庄家最终结算获得钱数为正时被系统所扣钱数 
            this.bIsBankerRupt = 0; //庄家下庄时是否爆庄 
            this.bIsOffBankerSelf = 0; //该协议收到者是否是下庄庄家自己 
        }
        messageName() { return "SharkRoundBankerSwitch"; }
        messageValue() { return 0; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.write(Uint8Array, this.bSwitchType);
            if (CSProto.CLASSFRUIT_BANKER_SWITCHTYPE_NONE != this.bSwitchType) {
                encodeBuffer.write(Float64Array, this.llBankerRoundWinGold);
            }
            if (CSProto.CLASSFRUIT_BANKER_SWITCHTYPE_TO_NONE == this.bSwitchType || CSProto.CLASSFRUIT_BANKER_SWITCHTYPE_CHANGEONE == this.bSwitchType) {
                encodeBuffer.write(Float64Array, this.llBankerTotalWinGold);
            }
            if (CSProto.CLASSFRUIT_BANKER_SWITCHTYPE_TO_NONE == this.bSwitchType || CSProto.CLASSFRUIT_BANKER_SWITCHTYPE_CHANGEONE == this.bSwitchType) {
                encodeBuffer.write(Float64Array, this.llBankerTotalSysCostGold);
            }
            if (CSProto.CLASSFRUIT_BANKER_SWITCHTYPE_TO_NONE == this.bSwitchType || CSProto.CLASSFRUIT_BANKER_SWITCHTYPE_CHANGEONE == this.bSwitchType) {
                encodeBuffer.write(Uint8Array, this.bIsBankerRupt);
            }
            if (CSProto.CLASSFRUIT_BANKER_SWITCHTYPE_TO_NONE == this.bSwitchType || CSProto.CLASSFRUIT_BANKER_SWITCHTYPE_CHANGEONE == this.bSwitchType) {
                encodeBuffer.write(Uint8Array, this.bIsOffBankerSelf);
            }
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.bSwitchType = decodeBuffer.read(Uint8Array, 1);
            if (CSProto.CLASSFRUIT_BANKER_SWITCHTYPE_NONE != this.bSwitchType) {
                this.llBankerRoundWinGold = decodeBuffer.read(Float64Array, 1);
            }
            if (CSProto.CLASSFRUIT_BANKER_SWITCHTYPE_TO_NONE == this.bSwitchType || CSProto.CLASSFRUIT_BANKER_SWITCHTYPE_CHANGEONE == this.bSwitchType) {
                this.llBankerTotalWinGold = decodeBuffer.read(Float64Array, 1);
            }
            if (CSProto.CLASSFRUIT_BANKER_SWITCHTYPE_TO_NONE == this.bSwitchType || CSProto.CLASSFRUIT_BANKER_SWITCHTYPE_CHANGEONE == this.bSwitchType) {
                this.llBankerTotalSysCostGold = decodeBuffer.read(Float64Array, 1);
            }
            if (CSProto.CLASSFRUIT_BANKER_SWITCHTYPE_TO_NONE == this.bSwitchType || CSProto.CLASSFRUIT_BANKER_SWITCHTYPE_CHANGEONE == this.bSwitchType) {
                this.bIsBankerRupt = decodeBuffer.read(Uint8Array, 1);
            }
            if (CSProto.CLASSFRUIT_BANKER_SWITCHTYPE_TO_NONE == this.bSwitchType || CSProto.CLASSFRUIT_BANKER_SWITCHTYPE_CHANGEONE == this.bSwitchType) {
                this.bIsOffBankerSelf = decodeBuffer.read(Uint8Array, 1);
            }
            return decodeBuffer.length();
        }
    }
    CSProto.SharkRoundBankerSwitch = SharkRoundBankerSwitch;
    class SharkAllData {
        constructor() {
            this.dwRoundID = 0; //对应的相关转数序号,目前仅用于调试方便 
            this.bTabStatus = 0; //当前状态,参见LOTTERY_CURSTATUS_CANBET等系列枚举 
            this.wLeftBetTime = 0; //当前对应剩余可下注秒数 
            this.abHisPrize = new Array(); //历史开出结果以实际长度为准靠左边的为最新 
            this.stPoolBetDetail = new SharkPoolBetDetail(); //当前对应当转的各奖项具体下注列表 
            this.bIsHasBanker = 0; //为0无庄家,其他则有庄家 
            this.stBankerInfo = new SharkBanker(); //桌台当前的庄家信息 
            this.bLeftPrizeSetTime = 0; //当前庄家设置下次开奖时间对应剩余可下注秒数 
            this.llCaiJinPool = 0; //彩金池金币数 
            this.dwCaiJinLuckyIndex = 0; //彩金池指数是万分比的分子 
            this.dwCaiJinLastHitTime = 0; //彩金池多少少前开出了彩金奖 
        }
        messageName() { return "SharkAllData"; }
        messageValue() { return 0; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.write(Uint32Array, this.dwRoundID);
            encodeBuffer.write(Uint8Array, this.bTabStatus);
            if (this.bTabStatus == CSProto.LOTTERY_CURSTATUS_CANBET) {
                encodeBuffer.write(Uint8Array, this.wLeftBetTime);
            }
            var abHisPrizeSize = this.abHisPrize.length > CSProto.MAX_SHARK_SCENE_HISPRIZE_LEN ? CSProto.MAX_SHARK_SCENE_HISPRIZE_LEN : this.abHisPrize.length;
            encodeBuffer.write(Uint16Array, abHisPrizeSize);
            this.abHisPrize.length = abHisPrizeSize;
            encodeBuffer.write(Uint8Array, this.abHisPrize);
            encodeBuffer.skip(this.stPoolBetDetail.encode(encodeBuffer.buffer(), encodeBuffer.offset()));
            encodeBuffer.write(Uint8Array, this.bIsHasBanker);
            if (0 != this.bIsHasBanker) {
                encodeBuffer.skip(this.stBankerInfo.encode(encodeBuffer.buffer(), encodeBuffer.offset()));
            }
            if (this.bTabStatus == CSProto.LOTTERY_CURSTATUS_CANBET) {
                encodeBuffer.write(Uint8Array, this.bLeftPrizeSetTime);
            }
            if (32 < CSProto.Version) {
                encodeBuffer.write(Float64Array, this.llCaiJinPool);
            }
            if (32 < CSProto.Version) {
                encodeBuffer.write(Uint32Array, this.dwCaiJinLuckyIndex);
            }
            if (32 < CSProto.Version) {
                encodeBuffer.write(Uint32Array, this.dwCaiJinLastHitTime);
            }
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.dwRoundID = decodeBuffer.read(Uint32Array, 1);
            this.bTabStatus = decodeBuffer.read(Uint8Array, 1);
            if (this.bTabStatus == CSProto.LOTTERY_CURSTATUS_CANBET) {
                this.wLeftBetTime = decodeBuffer.read(Uint8Array, 1);
            }
            var abHisPrizeSize = decodeBuffer.read(Uint16Array, 1);
            this.abHisPrize = new Array(abHisPrizeSize);
            this.abHisPrize = decodeBuffer.read(Uint8Array, abHisPrizeSize);
            decodeBuffer.skip(this.stPoolBetDetail.decode(decodeBuffer.buffer(), decodeBuffer.offset()));
            this.bIsHasBanker = decodeBuffer.read(Uint8Array, 1);
            if (0 != this.bIsHasBanker) {
                decodeBuffer.skip(this.stBankerInfo.decode(decodeBuffer.buffer(), decodeBuffer.offset()));
            }
            if (this.bTabStatus == CSProto.LOTTERY_CURSTATUS_CANBET) {
                this.bLeftPrizeSetTime = decodeBuffer.read(Uint8Array, 1);
            }
            if (32 < CSProto.Version) {
                this.llCaiJinPool = decodeBuffer.read(Float64Array, 1);
            }
            if (32 < CSProto.Version) {
                this.dwCaiJinLuckyIndex = decodeBuffer.read(Uint32Array, 1);
            }
            if (32 < CSProto.Version) {
                this.dwCaiJinLastHitTime = decodeBuffer.read(Uint32Array, 1);
            }
            return decodeBuffer.length();
        }
    }
    CSProto.SharkAllData = SharkAllData;
    class SharkTimerData {
        constructor() {
            this.bTabStatus = 0; //当前状态,参见LOTTERY_CURSTATUS_CANBET等系列枚举 
            this.stPoolBetDetail = new SharkPoolBetDetail(); //当前对应当转的各奖项具体下注列表 
            this.dwCurOnlineAcc = 0; //当前对应在线人数 
            this.dwRoundID = 0; //对应的相关转数序号 
            this.llCaiJinPool = 0; //彩金池金币数 
            this.dwCaiJinLuckyIndex = 0; //彩金池指数 
            this.dwCaiJinLastHitTime = 0; //彩金池多少少前开出了彩金奖 
        }
        messageName() { return "SharkTimerData"; }
        messageValue() { return 0; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.write(Uint8Array, this.bTabStatus);
            encodeBuffer.skip(this.stPoolBetDetail.encode(encodeBuffer.buffer(), encodeBuffer.offset()));
            encodeBuffer.write(Uint32Array, this.dwCurOnlineAcc);
            if (10 < CSProto.Version) {
                encodeBuffer.write(Uint32Array, this.dwRoundID);
            }
            if (32 < CSProto.Version) {
                encodeBuffer.write(Float64Array, this.llCaiJinPool);
            }
            if (32 < CSProto.Version) {
                encodeBuffer.write(Uint32Array, this.dwCaiJinLuckyIndex);
            }
            if (32 < CSProto.Version) {
                encodeBuffer.write(Uint32Array, this.dwCaiJinLastHitTime);
            }
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.bTabStatus = decodeBuffer.read(Uint8Array, 1);
            decodeBuffer.skip(this.stPoolBetDetail.decode(decodeBuffer.buffer(), decodeBuffer.offset()));
            this.dwCurOnlineAcc = decodeBuffer.read(Uint32Array, 1);
            if (10 < CSProto.Version) {
                this.dwRoundID = decodeBuffer.read(Uint32Array, 1);
            }
            if (32 < CSProto.Version) {
                this.llCaiJinPool = decodeBuffer.read(Float64Array, 1);
            }
            if (32 < CSProto.Version) {
                this.dwCaiJinLuckyIndex = decodeBuffer.read(Uint32Array, 1);
            }
            if (32 < CSProto.Version) {
                this.dwCaiJinLastHitTime = decodeBuffer.read(Uint32Array, 1);
            }
            return decodeBuffer.length();
        }
    }
    CSProto.SharkTimerData = SharkTimerData;
    class CMD_SHARK_ENTERDATA_SC {
        constructor() {
            this.wMapID = 0; //对应地图模板ID参见MAP_TEMPLATE_ID_CLASSIC_FRUIT等枚举 
            this.dwSceneID = 0; //对应的场景ID游戏内唯一是游戏内所有桌台统一编号的索引 
            this.dwTableID = 0; //对应的桌台ID,目前无用 
            this.stAllData = new SharkAllData(); //对应当前数据 
            this.dwBetTotalGold = 0; //总下注币数 
            this.astBetDetail = new Array(); //当前对应当转的玩家己下注列表,若已经下注则有数据 
            this.bPlayerBankerStat = 0; //玩家自己的庄家相关状态参见CLASSFRUIT_BANKER_STAT_NONE等枚举 
            this.dwCurOnlineAcc = 0; //当前对应在线人数 
            this.bOneBetBaseTag = 0; //玩家自己下注的单注数量序号,参见LOTTERY_ONEBET_BASE_TAG_1等系列枚举 
            this.bIfCanJoinPlay = 0; //是否可参与该玩法:0不行 1可以 
            this.dwBankerQueuePos = 0; //当在排庄队列中时代表当前位置 
        }
        messageName() { return "CMD_SHARK_ENTERDATA"; }
        messageValue() { return CSProto.CMD_SHARK_ENTERDATA; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.write(Uint16Array, this.wMapID);
            encodeBuffer.write(Uint32Array, this.dwSceneID);
            encodeBuffer.write(Uint32Array, this.dwTableID);
            encodeBuffer.skip(this.stAllData.encode(encodeBuffer.buffer(), encodeBuffer.offset()));
            encodeBuffer.write(Uint32Array, this.dwBetTotalGold);
            var astBetDetailSize = this.astBetDetail.length > CSProto.MAX_SHARK_BETON_LEN ? CSProto.MAX_SHARK_BETON_LEN : this.astBetDetail.length;
            encodeBuffer.write(Uint16Array, astBetDetailSize);
            this.astBetDetail.length = astBetDetailSize;
            for (var i = 0; i < astBetDetailSize; i++) {
                encodeBuffer.skip(this.astBetDetail[i].encode(encodeBuffer.buffer(), encodeBuffer.offset()));
            }
            encodeBuffer.write(Uint8Array, this.bPlayerBankerStat);
            encodeBuffer.write(Uint32Array, this.dwCurOnlineAcc);
            encodeBuffer.write(Uint8Array, this.bOneBetBaseTag);
            if (14 < CSProto.Version) {
                encodeBuffer.write(Uint8Array, this.bIfCanJoinPlay);
            }
            if (14 < CSProto.Version) {
                encodeBuffer.write(Uint32Array, this.dwBankerQueuePos);
            }
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.wMapID = decodeBuffer.read(Uint16Array, 1);
            this.dwSceneID = decodeBuffer.read(Uint32Array, 1);
            this.dwTableID = decodeBuffer.read(Uint32Array, 1);
            decodeBuffer.skip(this.stAllData.decode(decodeBuffer.buffer(), decodeBuffer.offset()));
            this.dwBetTotalGold = decodeBuffer.read(Uint32Array, 1);
            var astBetDetailSize = decodeBuffer.read(Uint16Array, 1);
            this.astBetDetail = new Array(astBetDetailSize);
            for (var i = 0; i < astBetDetailSize; i++) {
                this.astBetDetail[i] = new PROPERTY();
                decodeBuffer.skip(this.astBetDetail[i].decode(decodeBuffer.buffer(), decodeBuffer.offset()));
            }
            this.bPlayerBankerStat = decodeBuffer.read(Uint8Array, 1);
            this.dwCurOnlineAcc = decodeBuffer.read(Uint32Array, 1);
            this.bOneBetBaseTag = decodeBuffer.read(Uint8Array, 1);
            if (14 < CSProto.Version) {
                this.bIfCanJoinPlay = decodeBuffer.read(Uint8Array, 1);
            }
            if (14 < CSProto.Version) {
                this.dwBankerQueuePos = decodeBuffer.read(Uint32Array, 1);
            }
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_SHARK_ENTERDATA_SC = CMD_SHARK_ENTERDATA_SC;
    class CMD_SHARK_REFRESHDATA_SC {
        constructor() {
            this.stTimerData = new SharkTimerData(); //对应当前数据 
        }
        messageName() { return "CMD_SHARK_REFRESHDATA"; }
        messageValue() { return CSProto.CMD_SHARK_REFRESHDATA; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.skip(this.stTimerData.encode(encodeBuffer.buffer(), encodeBuffer.offset()));
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            decodeBuffer.skip(this.stTimerData.decode(decodeBuffer.buffer(), decodeBuffer.offset()));
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_SHARK_REFRESHDATA_SC = CMD_SHARK_REFRESHDATA_SC;
    class CMD_SHARK_ROUND_END_SC {
        constructor() {
            this.stNewstData = new SharkAllData(); //对应开奖后的转轮数据,序号及奖池数据等所有数据己刷新为发奖后的最新数据 
            this.bPrizeRet = 0; //当前对应的开奖结果 
            this.bExtraPrizeRet = 0; //当前对应的额外送灯 
            this.llGotBaseGold = 0; //本局自己获得基本金币数 
            this.llGotExtraGold = 0; //本局自己获得额外金币数 
            this.stBankerSwitchInfo = new SharkRoundBankerSwitch(); //庄家变更相关描述数据 
            this.dwBankerQueuePos = 0; //当在排庄队列中时代表当前位置 
            this.llCaiJinAwardGold = 0; // 若不为0则代表本局开出了彩金池对应了开出的总额 
        }
        messageName() { return "CMD_SHARK_ROUND_END"; }
        messageValue() { return CSProto.CMD_SHARK_ROUND_END; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.skip(this.stNewstData.encode(encodeBuffer.buffer(), encodeBuffer.offset()));
            encodeBuffer.write(Uint8Array, this.bPrizeRet);
            encodeBuffer.write(Uint8Array, this.bExtraPrizeRet);
            encodeBuffer.write(Float64Array, this.llGotBaseGold);
            encodeBuffer.write(Float64Array, this.llGotExtraGold);
            encodeBuffer.skip(this.stBankerSwitchInfo.encode(encodeBuffer.buffer(), encodeBuffer.offset()));
            if (14 < CSProto.Version) {
                encodeBuffer.write(Uint32Array, this.dwBankerQueuePos);
            }
            if (32 < CSProto.Version) {
                encodeBuffer.write(Float64Array, this.llCaiJinAwardGold);
            }
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            decodeBuffer.skip(this.stNewstData.decode(decodeBuffer.buffer(), decodeBuffer.offset()));
            this.bPrizeRet = decodeBuffer.read(Uint8Array, 1);
            this.bExtraPrizeRet = decodeBuffer.read(Uint8Array, 1);
            this.llGotBaseGold = decodeBuffer.read(Float64Array, 1);
            this.llGotExtraGold = decodeBuffer.read(Float64Array, 1);
            decodeBuffer.skip(this.stBankerSwitchInfo.decode(decodeBuffer.buffer(), decodeBuffer.offset()));
            if (14 < CSProto.Version) {
                this.dwBankerQueuePos = decodeBuffer.read(Uint32Array, 1);
            }
            if (32 < CSProto.Version) {
                this.llCaiJinAwardGold = decodeBuffer.read(Float64Array, 1);
            }
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_SHARK_ROUND_END_SC = CMD_SHARK_ROUND_END_SC;
    class CMD_SHARK_REFRESH_SELF_BET_SC {
        constructor() {
            this.dwAccCurOwnGold = 0; //玩家当前实际拥有的币数,若有预扣这里需要回滚 
            this.dwBetTotalGold = 0; //总下注币数 
            this.astBetDetail = new Array(); //当前对应当转的己下注列表,若已经下注则有数据 
            this.dwRoundID = 0; //对应的相关转数序号 
        }
        messageName() { return "CMD_SHARK_REFRESH_SELF_BET"; }
        messageValue() { return CSProto.CMD_SHARK_REFRESH_SELF_BET; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.write(Uint32Array, this.dwAccCurOwnGold);
            encodeBuffer.write(Uint32Array, this.dwBetTotalGold);
            var astBetDetailSize = this.astBetDetail.length > CSProto.MAX_SHARK_BETON_LEN ? CSProto.MAX_SHARK_BETON_LEN : this.astBetDetail.length;
            encodeBuffer.write(Uint16Array, astBetDetailSize);
            this.astBetDetail.length = astBetDetailSize;
            for (var i = 0; i < astBetDetailSize; i++) {
                encodeBuffer.skip(this.astBetDetail[i].encode(encodeBuffer.buffer(), encodeBuffer.offset()));
            }
            if (10 < CSProto.Version) {
                encodeBuffer.write(Uint32Array, this.dwRoundID);
            }
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.dwAccCurOwnGold = decodeBuffer.read(Uint32Array, 1);
            this.dwBetTotalGold = decodeBuffer.read(Uint32Array, 1);
            var astBetDetailSize = decodeBuffer.read(Uint16Array, 1);
            this.astBetDetail = new Array(astBetDetailSize);
            for (var i = 0; i < astBetDetailSize; i++) {
                this.astBetDetail[i] = new PROPERTY();
                decodeBuffer.skip(this.astBetDetail[i].decode(decodeBuffer.buffer(), decodeBuffer.offset()));
            }
            if (10 < CSProto.Version) {
                this.dwRoundID = decodeBuffer.read(Uint32Array, 1);
            }
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_SHARK_REFRESH_SELF_BET_SC = CMD_SHARK_REFRESH_SELF_BET_SC;
    class CMD_SHARK_SIGNUP_BANKER_SC {
        constructor() {
            this.wQueuePos = 0; //在队列中的位置 
            this.bPlayerBankerStat = 0; //玩家的庄家状态 
            this.szSuccTips = ""; //上庄成功相关的提示 
        }
        messageName() { return "CMD_SHARK_SIGNUP_BANKER"; }
        messageValue() { return CSProto.CMD_SHARK_SIGNUP_BANKER; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.write(Uint16Array, this.wQueuePos);
            encodeBuffer.write(Uint8Array, this.bPlayerBankerStat);
            encodeBuffer.writeString(this.szSuccTips, 256);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.wQueuePos = decodeBuffer.read(Uint16Array, 1);
            this.bPlayerBankerStat = decodeBuffer.read(Uint8Array, 1);
            this.szSuccTips = decodeBuffer.readString(256);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_SHARK_SIGNUP_BANKER_SC = CMD_SHARK_SIGNUP_BANKER_SC;
    class CMD_SHARK_QUIT_BANKER_SC {
        constructor() {
            this.bPlayerBankerStat = 0; //玩家的庄家状态 
        }
        messageName() { return "CMD_SHARK_QUIT_BANKER"; }
        messageValue() { return CSProto.CMD_SHARK_QUIT_BANKER; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.write(Uint8Array, this.bPlayerBankerStat);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.bPlayerBankerStat = decodeBuffer.read(Uint8Array, 1);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_SHARK_QUIT_BANKER_SC = CMD_SHARK_QUIT_BANKER_SC;
    class CMD_SHARK_UPDATE_BANKER_STAT_SC {
        constructor() {
            this.bPlayerBankerStat = 0; //玩家的庄家状态 
            this.wQueuePos = 0; //在队列中的位置 
        }
        messageName() { return "CMD_SHARK_UPDATE_BANKER_STAT"; }
        messageValue() { return CSProto.CMD_SHARK_UPDATE_BANKER_STAT; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.write(Uint8Array, this.bPlayerBankerStat);
            encodeBuffer.write(Uint16Array, this.wQueuePos);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.bPlayerBankerStat = decodeBuffer.read(Uint8Array, 1);
            this.wQueuePos = decodeBuffer.read(Uint16Array, 1);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_SHARK_UPDATE_BANKER_STAT_SC = CMD_SHARK_UPDATE_BANKER_STAT_SC;
    class CMD_SHARK_CURBANKERLIST_SC {
        constructor() {
            this.astBankerList = new Array(); //当前排队中的庄家列表 
        }
        messageName() { return "CMD_SHARK_CURBANKERLIST"; }
        messageValue() { return CSProto.CMD_SHARK_CURBANKERLIST; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            var astBankerListSize = this.astBankerList.length > 3 ? 3 : this.astBankerList.length;
            encodeBuffer.write(Uint16Array, astBankerListSize);
            this.astBankerList.length = astBankerListSize;
            for (var i = 0; i < astBankerListSize; i++) {
                encodeBuffer.skip(this.astBankerList[i].encode(encodeBuffer.buffer(), encodeBuffer.offset()));
            }
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            var astBankerListSize = decodeBuffer.read(Uint16Array, 1);
            this.astBankerList = new Array(astBankerListSize);
            for (var i = 0; i < astBankerListSize; i++) {
                this.astBankerList[i] = new SharkBanker();
                decodeBuffer.skip(this.astBankerList[i].decode(decodeBuffer.buffer(), decodeBuffer.offset()));
            }
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_SHARK_CURBANKERLIST_SC = CMD_SHARK_CURBANKERLIST_SC;
    class CMD_SHARK_UPDATE_CURBANKER_SC {
        constructor() {
            this.bIsHasBanker = 0; //为0无庄家,其他则有庄家 
            this.stBankerInfo = new SharkBanker(); //桌台当前的庄家信息 
        }
        messageName() { return "CMD_SHARK_UPDATE_CURBANKER"; }
        messageValue() { return CSProto.CMD_SHARK_UPDATE_CURBANKER; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.write(Uint8Array, this.bIsHasBanker);
            if (0 != this.bIsHasBanker) {
                encodeBuffer.skip(this.stBankerInfo.encode(encodeBuffer.buffer(), encodeBuffer.offset()));
            }
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.bIsHasBanker = decodeBuffer.read(Uint8Array, 1);
            if (0 != this.bIsHasBanker) {
                decodeBuffer.skip(this.stBankerInfo.decode(decodeBuffer.buffer(), decodeBuffer.offset()));
            }
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_SHARK_UPDATE_CURBANKER_SC = CMD_SHARK_UPDATE_CURBANKER_SC;
    class CMD_SHARK_BANKER_SETPRIZE_CS {
        constructor() {
            this.bPrizeRet = 0; //设置对应的开奖结果 
        }
        messageName() { return "CMD_SHARK_BANKER_SETPRIZE"; }
        messageValue() { return CSProto.CMD_SHARK_BANKER_SETPRIZE; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.write(Uint8Array, this.bPrizeRet);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.bPrizeRet = decodeBuffer.read(Uint8Array, 1);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_SHARK_BANKER_SETPRIZE_CS = CMD_SHARK_BANKER_SETPRIZE_CS;
    class CMD_SHARK_BANKER_SETPRIZE_SC {
        constructor() {
            this.bPrizeRet = 0; //设置对应的开奖结果 
        }
        messageName() { return "CMD_SHARK_BANKER_SETPRIZE"; }
        messageValue() { return CSProto.CMD_SHARK_BANKER_SETPRIZE; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.write(Uint8Array, this.bPrizeRet);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.bPrizeRet = decodeBuffer.read(Uint8Array, 1);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_SHARK_BANKER_SETPRIZE_SC = CMD_SHARK_BANKER_SETPRIZE_SC;
    class CMD_CAR_BET_ON_CS {
        constructor() {
            this.bOneBetBaseTag = 0; //单注数量序号,参见LOTTERY_ONEBET_BASE_TAG_1等系列枚举 
            this.astBetDetail = new Array(); //下注列表 
            this.dwRoundID = 0; //对应的相关转数序号 
        }
        messageName() { return "CMD_CAR_BET_ON"; }
        messageValue() { return CSProto.CMD_CAR_BET_ON; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.write(Uint8Array, this.bOneBetBaseTag);
            var astBetDetailSize = this.astBetDetail.length > CSProto.MAX_CAR_BETON_LEN ? CSProto.MAX_CAR_BETON_LEN : this.astBetDetail.length;
            encodeBuffer.write(Uint16Array, astBetDetailSize);
            this.astBetDetail.length = astBetDetailSize;
            for (var i = 0; i < astBetDetailSize; i++) {
                encodeBuffer.skip(this.astBetDetail[i].encode(encodeBuffer.buffer(), encodeBuffer.offset()));
            }
            if (10 < CSProto.Version) {
                encodeBuffer.write(Uint32Array, this.dwRoundID);
            }
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.bOneBetBaseTag = decodeBuffer.read(Uint8Array, 1);
            var astBetDetailSize = decodeBuffer.read(Uint16Array, 1);
            this.astBetDetail = new Array(astBetDetailSize);
            for (var i = 0; i < astBetDetailSize; i++) {
                this.astBetDetail[i] = new PROPERTY();
                decodeBuffer.skip(this.astBetDetail[i].decode(decodeBuffer.buffer(), decodeBuffer.offset()));
            }
            if (10 < CSProto.Version) {
                this.dwRoundID = decodeBuffer.read(Uint32Array, 1);
            }
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_CAR_BET_ON_CS = CMD_CAR_BET_ON_CS;
    class CMD_CAR_BET_ON_SC {
        constructor() {
            this.dwRoundID = 0; //对应的相关转数序号,目前仅用于调试方便 
            this.dwBetTotalGold = 0; //总下注币数 
        }
        messageName() { return "CMD_CAR_BET_ON"; }
        messageValue() { return CSProto.CMD_CAR_BET_ON; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.write(Uint32Array, this.dwRoundID);
            encodeBuffer.write(Uint32Array, this.dwBetTotalGold);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.dwRoundID = decodeBuffer.read(Uint32Array, 1);
            this.dwBetTotalGold = decodeBuffer.read(Uint32Array, 1);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_CAR_BET_ON_SC = CMD_CAR_BET_ON_SC;
    class CarPoolBetDetail {
        constructor() {
            this.astPrizeBetList = new Array(); //当前对应当转的各奖项具体下注列表 
        }
        messageName() { return "CarPoolBetDetail"; }
        messageValue() { return 0; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            var astPrizeBetListSize = this.astPrizeBetList.length > CSProto.MAX_CAR_BETON_LEN ? CSProto.MAX_CAR_BETON_LEN : this.astPrizeBetList.length;
            encodeBuffer.write(Uint16Array, astPrizeBetListSize);
            this.astPrizeBetList.length = astPrizeBetListSize;
            for (var i = 0; i < astPrizeBetListSize; i++) {
                encodeBuffer.skip(this.astPrizeBetList[i].encode(encodeBuffer.buffer(), encodeBuffer.offset()));
            }
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            var astPrizeBetListSize = decodeBuffer.read(Uint16Array, 1);
            this.astPrizeBetList = new Array(astPrizeBetListSize);
            for (var i = 0; i < astPrizeBetListSize; i++) {
                this.astPrizeBetList[i] = new PROPERTY();
                decodeBuffer.skip(this.astPrizeBetList[i].decode(decodeBuffer.buffer(), decodeBuffer.offset()));
            }
            return decodeBuffer.length();
        }
    }
    CSProto.CarPoolBetDetail = CarPoolBetDetail;
    class CarBanker {
        constructor() {
            this.dwObjectID = 0; //实体handle 
            this.wLevel = 0; //等级 
            this.wVipLevel = 0; //VIP等级 
            this.szName = ""; //字符串类型的名字 
            this.bSex = 0; //性别,目前不会用到 
            this.bHeadPhoto = 0; //系统头像,目前不会用到 
            this.bBankerLeftRound = 0; //当前庄家剩余局数 
            this.llOwnGold = 0; //拥有的金币 
            this.szSelfDefPhoto = ""; //玩家自定义头像,长度不为0时以此为准 
        }
        messageName() { return "CarBanker"; }
        messageValue() { return 0; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.write(Uint32Array, this.dwObjectID);
            encodeBuffer.write(Uint16Array, this.wLevel);
            encodeBuffer.write(Uint16Array, this.wVipLevel);
            encodeBuffer.writeString(this.szName, CSProto.MAX_ROLE_NAME_LEN);
            encodeBuffer.write(Uint8Array, this.bSex);
            encodeBuffer.write(Uint8Array, this.bHeadPhoto);
            encodeBuffer.write(Uint8Array, this.bBankerLeftRound);
            encodeBuffer.write(Float64Array, this.llOwnGold);
            encodeBuffer.writeString(this.szSelfDefPhoto, CSProto.MAX_ROLE_SELFDEF_PHOTO_LEN);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.dwObjectID = decodeBuffer.read(Uint32Array, 1);
            this.wLevel = decodeBuffer.read(Uint16Array, 1);
            this.wVipLevel = decodeBuffer.read(Uint16Array, 1);
            this.szName = decodeBuffer.readString(CSProto.MAX_ROLE_NAME_LEN);
            this.bSex = decodeBuffer.read(Uint8Array, 1);
            this.bHeadPhoto = decodeBuffer.read(Uint8Array, 1);
            this.bBankerLeftRound = decodeBuffer.read(Uint8Array, 1);
            this.llOwnGold = decodeBuffer.read(Float64Array, 1);
            this.szSelfDefPhoto = decodeBuffer.readString(CSProto.MAX_ROLE_SELFDEF_PHOTO_LEN);
            return decodeBuffer.length();
        }
    }
    CSProto.CarBanker = CarBanker;
    class CarRoundBankerSwitch {
        constructor() {
            this.bSwitchType = 0; //庄家变更状态,参见CLASSFRUIT_BANKER_SWITCHTYPE_NONE等系列枚举 
            this.llBankerRoundWinGold = 0; //本局存在庄家时的本局获得钱数,可正可负 
            this.llBankerTotalWinGold = 0; //庄家最终结算获得钱数,可正可负 
            this.llBankerTotalSysCostGold = 0; //庄家最终结算获得钱数为正时被系统所扣钱数 
            this.bIsBankerRupt = 0; //庄家下庄时是否爆庄 
            this.bIsOffBankerSelf = 0; //该协议收到者是否是下庄庄家自己 
        }
        messageName() { return "CarRoundBankerSwitch"; }
        messageValue() { return 0; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.write(Uint8Array, this.bSwitchType);
            if (CSProto.CLASSFRUIT_BANKER_SWITCHTYPE_NONE != this.bSwitchType) {
                encodeBuffer.write(Float64Array, this.llBankerRoundWinGold);
            }
            if (CSProto.CLASSFRUIT_BANKER_SWITCHTYPE_TO_NONE == this.bSwitchType || CSProto.CLASSFRUIT_BANKER_SWITCHTYPE_CHANGEONE == this.bSwitchType) {
                encodeBuffer.write(Float64Array, this.llBankerTotalWinGold);
            }
            if (CSProto.CLASSFRUIT_BANKER_SWITCHTYPE_TO_NONE == this.bSwitchType || CSProto.CLASSFRUIT_BANKER_SWITCHTYPE_CHANGEONE == this.bSwitchType) {
                encodeBuffer.write(Float64Array, this.llBankerTotalSysCostGold);
            }
            if (CSProto.CLASSFRUIT_BANKER_SWITCHTYPE_TO_NONE == this.bSwitchType || CSProto.CLASSFRUIT_BANKER_SWITCHTYPE_CHANGEONE == this.bSwitchType) {
                encodeBuffer.write(Uint8Array, this.bIsBankerRupt);
            }
            if (CSProto.CLASSFRUIT_BANKER_SWITCHTYPE_TO_NONE == this.bSwitchType || CSProto.CLASSFRUIT_BANKER_SWITCHTYPE_CHANGEONE == this.bSwitchType) {
                encodeBuffer.write(Uint8Array, this.bIsOffBankerSelf);
            }
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.bSwitchType = decodeBuffer.read(Uint8Array, 1);
            if (CSProto.CLASSFRUIT_BANKER_SWITCHTYPE_NONE != this.bSwitchType) {
                this.llBankerRoundWinGold = decodeBuffer.read(Float64Array, 1);
            }
            if (CSProto.CLASSFRUIT_BANKER_SWITCHTYPE_TO_NONE == this.bSwitchType || CSProto.CLASSFRUIT_BANKER_SWITCHTYPE_CHANGEONE == this.bSwitchType) {
                this.llBankerTotalWinGold = decodeBuffer.read(Float64Array, 1);
            }
            if (CSProto.CLASSFRUIT_BANKER_SWITCHTYPE_TO_NONE == this.bSwitchType || CSProto.CLASSFRUIT_BANKER_SWITCHTYPE_CHANGEONE == this.bSwitchType) {
                this.llBankerTotalSysCostGold = decodeBuffer.read(Float64Array, 1);
            }
            if (CSProto.CLASSFRUIT_BANKER_SWITCHTYPE_TO_NONE == this.bSwitchType || CSProto.CLASSFRUIT_BANKER_SWITCHTYPE_CHANGEONE == this.bSwitchType) {
                this.bIsBankerRupt = decodeBuffer.read(Uint8Array, 1);
            }
            if (CSProto.CLASSFRUIT_BANKER_SWITCHTYPE_TO_NONE == this.bSwitchType || CSProto.CLASSFRUIT_BANKER_SWITCHTYPE_CHANGEONE == this.bSwitchType) {
                this.bIsOffBankerSelf = decodeBuffer.read(Uint8Array, 1);
            }
            return decodeBuffer.length();
        }
    }
    CSProto.CarRoundBankerSwitch = CarRoundBankerSwitch;
    class CarAllData {
        constructor() {
            this.dwRoundID = 0; //对应的相关转数序号,目前仅用于调试方便 
            this.bTabStatus = 0; //当前状态,参见LOTTERY_CURSTATUS_CANBET等系列枚举 
            this.wLeftBetTime = 0; //当前对应剩余可下注秒数 
            this.abHisPrize = new Array(); //历史开出结果以实际长度为准靠左边的为最新 
            this.stPoolBetDetail = new CarPoolBetDetail(); //当前对应当转的各奖项具体下注列表 
            this.bIsHasBanker = 0; //为0无庄家,其他则有庄家 
            this.stBankerInfo = new CarBanker(); //桌台当前的庄家信息 
            this.bLeftPrizeSetTime = 0; //当前庄家设置下次开奖时间对应剩余可下注秒数 
            this.llPrizePool = 0; //当前奖池总额 
            this.dwHisFLLTime = 0; //上一次开出法拉利距今的秒数 
            this.dwHisLBJNTime = 0; //上一次开出兰博基尼距今的秒数 
        }
        messageName() { return "CarAllData"; }
        messageValue() { return 0; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.write(Uint32Array, this.dwRoundID);
            encodeBuffer.write(Uint8Array, this.bTabStatus);
            if (this.bTabStatus == CSProto.LOTTERY_CURSTATUS_CANBET) {
                encodeBuffer.write(Uint8Array, this.wLeftBetTime);
            }
            var abHisPrizeSize = this.abHisPrize.length > CSProto.MAX_CAR_SCENE_HISPRIZE_LEN ? CSProto.MAX_CAR_SCENE_HISPRIZE_LEN : this.abHisPrize.length;
            encodeBuffer.write(Uint16Array, abHisPrizeSize);
            this.abHisPrize.length = abHisPrizeSize;
            encodeBuffer.write(Uint8Array, this.abHisPrize);
            encodeBuffer.skip(this.stPoolBetDetail.encode(encodeBuffer.buffer(), encodeBuffer.offset()));
            encodeBuffer.write(Uint8Array, this.bIsHasBanker);
            if (0 != this.bIsHasBanker) {
                encodeBuffer.skip(this.stBankerInfo.encode(encodeBuffer.buffer(), encodeBuffer.offset()));
            }
            if (this.bTabStatus == CSProto.LOTTERY_CURSTATUS_CANBET) {
                encodeBuffer.write(Uint8Array, this.bLeftPrizeSetTime);
            }
            encodeBuffer.write(Float64Array, this.llPrizePool);
            encodeBuffer.write(Uint32Array, this.dwHisFLLTime);
            encodeBuffer.write(Uint32Array, this.dwHisLBJNTime);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.dwRoundID = decodeBuffer.read(Uint32Array, 1);
            this.bTabStatus = decodeBuffer.read(Uint8Array, 1);
            if (this.bTabStatus == CSProto.LOTTERY_CURSTATUS_CANBET) {
                this.wLeftBetTime = decodeBuffer.read(Uint8Array, 1);
            }
            var abHisPrizeSize = decodeBuffer.read(Uint16Array, 1);
            this.abHisPrize = new Array(abHisPrizeSize);
            this.abHisPrize = decodeBuffer.read(Uint8Array, abHisPrizeSize);
            decodeBuffer.skip(this.stPoolBetDetail.decode(decodeBuffer.buffer(), decodeBuffer.offset()));
            this.bIsHasBanker = decodeBuffer.read(Uint8Array, 1);
            if (0 != this.bIsHasBanker) {
                decodeBuffer.skip(this.stBankerInfo.decode(decodeBuffer.buffer(), decodeBuffer.offset()));
            }
            if (this.bTabStatus == CSProto.LOTTERY_CURSTATUS_CANBET) {
                this.bLeftPrizeSetTime = decodeBuffer.read(Uint8Array, 1);
            }
            this.llPrizePool = decodeBuffer.read(Float64Array, 1);
            this.dwHisFLLTime = decodeBuffer.read(Uint32Array, 1);
            this.dwHisLBJNTime = decodeBuffer.read(Uint32Array, 1);
            return decodeBuffer.length();
        }
    }
    CSProto.CarAllData = CarAllData;
    class CarTimerData {
        constructor() {
            this.bTabStatus = 0; //当前状态,参见LOTTERY_CURSTATUS_CANBET等系列枚举 
            this.stPoolBetDetail = new CarPoolBetDetail(); //当前对应当转的各奖项具体下注列表 
            this.dwCurOnlineAcc = 0; //当前对应在线人数 
            this.dwRoundID = 0; //对应的相关转数序号 
            this.llPrizePool = 0; //当前奖池总额 
        }
        messageName() { return "CarTimerData"; }
        messageValue() { return 0; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.write(Uint8Array, this.bTabStatus);
            encodeBuffer.skip(this.stPoolBetDetail.encode(encodeBuffer.buffer(), encodeBuffer.offset()));
            encodeBuffer.write(Uint32Array, this.dwCurOnlineAcc);
            if (10 < CSProto.Version) {
                encodeBuffer.write(Uint32Array, this.dwRoundID);
            }
            encodeBuffer.write(Float64Array, this.llPrizePool);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.bTabStatus = decodeBuffer.read(Uint8Array, 1);
            decodeBuffer.skip(this.stPoolBetDetail.decode(decodeBuffer.buffer(), decodeBuffer.offset()));
            this.dwCurOnlineAcc = decodeBuffer.read(Uint32Array, 1);
            if (10 < CSProto.Version) {
                this.dwRoundID = decodeBuffer.read(Uint32Array, 1);
            }
            this.llPrizePool = decodeBuffer.read(Float64Array, 1);
            return decodeBuffer.length();
        }
    }
    CSProto.CarTimerData = CarTimerData;
    class CMD_CAR_ENTERDATA_SC {
        constructor() {
            this.wMapID = 0; //对应地图ID,目前无用 
            this.dwSceneID = 0; //对应的场景ID 
            this.dwTableID = 0; //对应的桌台ID,目前无用 
            this.stAllData = new CarAllData(); //对应当前数据 
            this.dwBetTotalGold = 0; //总下注币数 
            this.astBetDetail = new Array(); //当前对应当转的玩家己下注列表,若已经下注则有数据 
            this.bPlayerBankerStat = 0; //玩家自己的庄家相关状态参见CLASSFRUIT_BANKER_STAT_NONE等枚举 
            this.dwCurOnlineAcc = 0; //当前对应在线人数 
            this.bOneBetBaseTag = 0; //玩家自己下注的单注数量序号,参见LOTTERY_ONEBET_BASE_TAG_1等系列枚举 
            this.bIfCanJoinPlay = 0; //是否可参与该玩法:0不行 1可以 
        }
        messageName() { return "CMD_CAR_ENTERDATA"; }
        messageValue() { return CSProto.CMD_CAR_ENTERDATA; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.write(Uint16Array, this.wMapID);
            encodeBuffer.write(Uint32Array, this.dwSceneID);
            encodeBuffer.write(Uint32Array, this.dwTableID);
            encodeBuffer.skip(this.stAllData.encode(encodeBuffer.buffer(), encodeBuffer.offset()));
            encodeBuffer.write(Uint32Array, this.dwBetTotalGold);
            var astBetDetailSize = this.astBetDetail.length > CSProto.MAX_CAR_BETON_LEN ? CSProto.MAX_CAR_BETON_LEN : this.astBetDetail.length;
            encodeBuffer.write(Uint16Array, astBetDetailSize);
            this.astBetDetail.length = astBetDetailSize;
            for (var i = 0; i < astBetDetailSize; i++) {
                encodeBuffer.skip(this.astBetDetail[i].encode(encodeBuffer.buffer(), encodeBuffer.offset()));
            }
            encodeBuffer.write(Uint8Array, this.bPlayerBankerStat);
            encodeBuffer.write(Uint32Array, this.dwCurOnlineAcc);
            encodeBuffer.write(Uint8Array, this.bOneBetBaseTag);
            if (14 < CSProto.Version) {
                encodeBuffer.write(Uint8Array, this.bIfCanJoinPlay);
            }
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.wMapID = decodeBuffer.read(Uint16Array, 1);
            this.dwSceneID = decodeBuffer.read(Uint32Array, 1);
            this.dwTableID = decodeBuffer.read(Uint32Array, 1);
            decodeBuffer.skip(this.stAllData.decode(decodeBuffer.buffer(), decodeBuffer.offset()));
            this.dwBetTotalGold = decodeBuffer.read(Uint32Array, 1);
            var astBetDetailSize = decodeBuffer.read(Uint16Array, 1);
            this.astBetDetail = new Array(astBetDetailSize);
            for (var i = 0; i < astBetDetailSize; i++) {
                this.astBetDetail[i] = new PROPERTY();
                decodeBuffer.skip(this.astBetDetail[i].decode(decodeBuffer.buffer(), decodeBuffer.offset()));
            }
            this.bPlayerBankerStat = decodeBuffer.read(Uint8Array, 1);
            this.dwCurOnlineAcc = decodeBuffer.read(Uint32Array, 1);
            this.bOneBetBaseTag = decodeBuffer.read(Uint8Array, 1);
            if (14 < CSProto.Version) {
                this.bIfCanJoinPlay = decodeBuffer.read(Uint8Array, 1);
            }
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_CAR_ENTERDATA_SC = CMD_CAR_ENTERDATA_SC;
    class CMD_CAR_REFRESHDATA_SC {
        constructor() {
            this.stTimerData = new CarTimerData(); //对应当前数据 
        }
        messageName() { return "CMD_CAR_REFRESHDATA"; }
        messageValue() { return CSProto.CMD_CAR_REFRESHDATA; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.skip(this.stTimerData.encode(encodeBuffer.buffer(), encodeBuffer.offset()));
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            decodeBuffer.skip(this.stTimerData.decode(decodeBuffer.buffer(), decodeBuffer.offset()));
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_CAR_REFRESHDATA_SC = CMD_CAR_REFRESHDATA_SC;
    class CMD_CAR_ROUND_END_SC {
        constructor() {
            this.stNewstData = new CarAllData(); //对应开奖后的转轮数据,序号及奖池数据等所有数据己刷新为发奖后的最新数据 
            this.bPrizeRet = 0; //当前对应的开奖结果 
            this.bExtraPrizeRet = 0; //当前对应的额外送灯 
            this.llGotBaseGold = 0; //本局自己获得基本金币数 
            this.llGotExtraGold = 0; //本局自己获得额外金币数 
            this.stBankerSwitchInfo = new CarRoundBankerSwitch(); //庄家变更相关描述数据 
        }
        messageName() { return "CMD_CAR_ROUND_END"; }
        messageValue() { return CSProto.CMD_CAR_ROUND_END; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.skip(this.stNewstData.encode(encodeBuffer.buffer(), encodeBuffer.offset()));
            encodeBuffer.write(Uint8Array, this.bPrizeRet);
            encodeBuffer.write(Uint8Array, this.bExtraPrizeRet);
            encodeBuffer.write(Float64Array, this.llGotBaseGold);
            encodeBuffer.write(Float64Array, this.llGotExtraGold);
            encodeBuffer.skip(this.stBankerSwitchInfo.encode(encodeBuffer.buffer(), encodeBuffer.offset()));
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            decodeBuffer.skip(this.stNewstData.decode(decodeBuffer.buffer(), decodeBuffer.offset()));
            this.bPrizeRet = decodeBuffer.read(Uint8Array, 1);
            this.bExtraPrizeRet = decodeBuffer.read(Uint8Array, 1);
            this.llGotBaseGold = decodeBuffer.read(Float64Array, 1);
            this.llGotExtraGold = decodeBuffer.read(Float64Array, 1);
            decodeBuffer.skip(this.stBankerSwitchInfo.decode(decodeBuffer.buffer(), decodeBuffer.offset()));
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_CAR_ROUND_END_SC = CMD_CAR_ROUND_END_SC;
    class CMD_CAR_REFRESH_SELF_BET_SC {
        constructor() {
            this.dwAccCurOwnGold = 0; //玩家当前实际拥有的币数,若有预扣这里需要回滚 
            this.dwBetTotalGold = 0; //总下注币数 
            this.astBetDetail = new Array(); //当前对应当转的己下注列表,若已经下注则有数据 
            this.dwRoundID = 0; //对应的相关转数序号 
        }
        messageName() { return "CMD_CAR_REFRESH_SELF_BET"; }
        messageValue() { return CSProto.CMD_CAR_REFRESH_SELF_BET; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.write(Uint32Array, this.dwAccCurOwnGold);
            encodeBuffer.write(Uint32Array, this.dwBetTotalGold);
            var astBetDetailSize = this.astBetDetail.length > CSProto.MAX_CAR_BETON_LEN ? CSProto.MAX_CAR_BETON_LEN : this.astBetDetail.length;
            encodeBuffer.write(Uint16Array, astBetDetailSize);
            this.astBetDetail.length = astBetDetailSize;
            for (var i = 0; i < astBetDetailSize; i++) {
                encodeBuffer.skip(this.astBetDetail[i].encode(encodeBuffer.buffer(), encodeBuffer.offset()));
            }
            if (10 < CSProto.Version) {
                encodeBuffer.write(Uint32Array, this.dwRoundID);
            }
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.dwAccCurOwnGold = decodeBuffer.read(Uint32Array, 1);
            this.dwBetTotalGold = decodeBuffer.read(Uint32Array, 1);
            var astBetDetailSize = decodeBuffer.read(Uint16Array, 1);
            this.astBetDetail = new Array(astBetDetailSize);
            for (var i = 0; i < astBetDetailSize; i++) {
                this.astBetDetail[i] = new PROPERTY();
                decodeBuffer.skip(this.astBetDetail[i].decode(decodeBuffer.buffer(), decodeBuffer.offset()));
            }
            if (10 < CSProto.Version) {
                this.dwRoundID = decodeBuffer.read(Uint32Array, 1);
            }
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_CAR_REFRESH_SELF_BET_SC = CMD_CAR_REFRESH_SELF_BET_SC;
    class CMD_CAR_SIGNUP_BANKER_SC {
        constructor() {
            this.wQueuePos = 0; //在队列中的位置 
            this.bPlayerBankerStat = 0; //玩家的庄家状态 
        }
        messageName() { return "CMD_CAR_SIGNUP_BANKER"; }
        messageValue() { return CSProto.CMD_CAR_SIGNUP_BANKER; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.write(Uint16Array, this.wQueuePos);
            encodeBuffer.write(Uint8Array, this.bPlayerBankerStat);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.wQueuePos = decodeBuffer.read(Uint16Array, 1);
            this.bPlayerBankerStat = decodeBuffer.read(Uint8Array, 1);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_CAR_SIGNUP_BANKER_SC = CMD_CAR_SIGNUP_BANKER_SC;
    class CMD_CAR_QUIT_BANKER_SC {
        constructor() {
            this.bPlayerBankerStat = 0; //玩家的庄家状态 
        }
        messageName() { return "CMD_CAR_QUIT_BANKER"; }
        messageValue() { return CSProto.CMD_CAR_QUIT_BANKER; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.write(Uint8Array, this.bPlayerBankerStat);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.bPlayerBankerStat = decodeBuffer.read(Uint8Array, 1);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_CAR_QUIT_BANKER_SC = CMD_CAR_QUIT_BANKER_SC;
    class CMD_CAR_UPDATE_BANKER_STAT_SC {
        constructor() {
            this.bPlayerBankerStat = 0; //玩家的庄家状态 
            this.wQueuePos = 0; //在队列中的位置 
        }
        messageName() { return "CMD_CAR_UPDATE_BANKER_STAT"; }
        messageValue() { return CSProto.CMD_CAR_UPDATE_BANKER_STAT; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.write(Uint8Array, this.bPlayerBankerStat);
            encodeBuffer.write(Uint16Array, this.wQueuePos);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.bPlayerBankerStat = decodeBuffer.read(Uint8Array, 1);
            this.wQueuePos = decodeBuffer.read(Uint16Array, 1);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_CAR_UPDATE_BANKER_STAT_SC = CMD_CAR_UPDATE_BANKER_STAT_SC;
    class CMD_CAR_CURBANKERLIST_SC {
        constructor() {
            this.astBankerList = new Array(); //当前排队中的庄家列表 
        }
        messageName() { return "CMD_CAR_CURBANKERLIST"; }
        messageValue() { return CSProto.CMD_CAR_CURBANKERLIST; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            var astBankerListSize = this.astBankerList.length > 3 ? 3 : this.astBankerList.length;
            encodeBuffer.write(Uint16Array, astBankerListSize);
            this.astBankerList.length = astBankerListSize;
            for (var i = 0; i < astBankerListSize; i++) {
                encodeBuffer.skip(this.astBankerList[i].encode(encodeBuffer.buffer(), encodeBuffer.offset()));
            }
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            var astBankerListSize = decodeBuffer.read(Uint16Array, 1);
            this.astBankerList = new Array(astBankerListSize);
            for (var i = 0; i < astBankerListSize; i++) {
                this.astBankerList[i] = new CarBanker();
                decodeBuffer.skip(this.astBankerList[i].decode(decodeBuffer.buffer(), decodeBuffer.offset()));
            }
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_CAR_CURBANKERLIST_SC = CMD_CAR_CURBANKERLIST_SC;
    class CMD_CAR_UPDATE_CURBANKER_SC {
        constructor() {
            this.bIsHasBanker = 0; //为0无庄家,其他则有庄家 
            this.stBankerInfo = new CarBanker(); //桌台当前的庄家信息 
        }
        messageName() { return "CMD_CAR_UPDATE_CURBANKER"; }
        messageValue() { return CSProto.CMD_CAR_UPDATE_CURBANKER; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.write(Uint8Array, this.bIsHasBanker);
            if (0 != this.bIsHasBanker) {
                encodeBuffer.skip(this.stBankerInfo.encode(encodeBuffer.buffer(), encodeBuffer.offset()));
            }
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.bIsHasBanker = decodeBuffer.read(Uint8Array, 1);
            if (0 != this.bIsHasBanker) {
                decodeBuffer.skip(this.stBankerInfo.decode(decodeBuffer.buffer(), decodeBuffer.offset()));
            }
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_CAR_UPDATE_CURBANKER_SC = CMD_CAR_UPDATE_CURBANKER_SC;
    class CMD_CAR_BANKER_SETPRIZE_CS {
        constructor() {
            this.bPrizeRet = 0; //设置对应的开奖结果 
        }
        messageName() { return "CMD_CAR_BANKER_SETPRIZE"; }
        messageValue() { return CSProto.CMD_CAR_BANKER_SETPRIZE; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.write(Uint8Array, this.bPrizeRet);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.bPrizeRet = decodeBuffer.read(Uint8Array, 1);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_CAR_BANKER_SETPRIZE_CS = CMD_CAR_BANKER_SETPRIZE_CS;
    class CMD_CAR_BANKER_SETPRIZE_SC {
        constructor() {
            this.bPrizeRet = 0; //设置对应的开奖结果 
        }
        messageName() { return "CMD_CAR_BANKER_SETPRIZE"; }
        messageValue() { return CSProto.CMD_CAR_BANKER_SETPRIZE; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.write(Uint8Array, this.bPrizeRet);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.bPrizeRet = decodeBuffer.read(Uint8Array, 1);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_CAR_BANKER_SETPRIZE_SC = CMD_CAR_BANKER_SETPRIZE_SC;
    class CMD_CAR_BIGWINNERRANK_SC {
        constructor() {
            this.astRankList = new Array(); //分页结果列表,仅当前三名变化时会通知刷新 
        }
        messageName() { return "CMD_CAR_BIGWINNERRANK"; }
        messageValue() { return CSProto.CMD_CAR_BIGWINNERRANK; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            var astRankListSize = this.astRankList.length > CSProto.MAX_CAR_BIGWINNERRANK_LIST_SIZE ? CSProto.MAX_CAR_BIGWINNERRANK_LIST_SIZE : this.astRankList.length;
            encodeBuffer.write(Uint16Array, astRankListSize);
            this.astRankList.length = astRankListSize;
            for (var i = 0; i < astRankListSize; i++) {
                encodeBuffer.skip(this.astRankList[i].encode(encodeBuffer.buffer(), encodeBuffer.offset()));
            }
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            var astRankListSize = decodeBuffer.read(Uint16Array, 1);
            this.astRankList = new Array(astRankListSize);
            for (var i = 0; i < astRankListSize; i++) {
                this.astRankList[i] = new OneRankData();
                decodeBuffer.skip(this.astRankList[i].decode(decodeBuffer.buffer(), decodeBuffer.offset()));
            }
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_CAR_BIGWINNERRANK_SC = CMD_CAR_BIGWINNERRANK_SC;
    class CMD_ADV_ALIPAY_GIFTPKG_SC {
        constructor() {
            this.dwTimes = 0; //这是第几次弹出了 
        }
        messageName() { return "CMD_ADV_ALIPAY_GIFTPKG"; }
        messageValue() { return CSProto.CMD_ADV_ALIPAY_GIFTPKG; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.write(Uint32Array, this.dwTimes);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.dwTimes = decodeBuffer.read(Uint32Array, 1);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_ADV_ALIPAY_GIFTPKG_SC = CMD_ADV_ALIPAY_GIFTPKG_SC;
    class CMD_NOTIFY_BEGIN_CHARGE_CS {
        constructor() {
            this.dwPayViewFrom = 0; //支付场景ID编号 
        }
        messageName() { return "CMD_NOTIFY_BEGIN_CHARGE"; }
        messageValue() { return CSProto.CMD_NOTIFY_BEGIN_CHARGE; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.write(Uint32Array, this.dwPayViewFrom);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.dwPayViewFrom = decodeBuffer.read(Uint32Array, 1);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_NOTIFY_BEGIN_CHARGE_CS = CMD_NOTIFY_BEGIN_CHARGE_CS;
    class CMD_NOTIFY_UPT_EXTAPP_TIPS_SC {
        constructor() {
            this.bVipLvl = 0; //VIP等级 
            this.dwContLogin = 0; //连续登录领取金币 
            this.dwLoginTask = 0; //登录领取金币 
            this.dwVipContLogin = 0; //VIP连续登录领取金币额外金币 
            this.dwMoneyTree = 0; //摇钱树金币 
        }
        messageName() { return "CMD_NOTIFY_UPT_EXTAPP_TIPS"; }
        messageValue() { return CSProto.CMD_NOTIFY_UPT_EXTAPP_TIPS; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.write(Uint8Array, this.bVipLvl);
            encodeBuffer.write(Uint32Array, this.dwContLogin);
            encodeBuffer.write(Uint32Array, this.dwLoginTask);
            encodeBuffer.write(Uint32Array, this.dwVipContLogin);
            encodeBuffer.write(Uint32Array, this.dwMoneyTree);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.bVipLvl = decodeBuffer.read(Uint8Array, 1);
            this.dwContLogin = decodeBuffer.read(Uint32Array, 1);
            this.dwLoginTask = decodeBuffer.read(Uint32Array, 1);
            this.dwVipContLogin = decodeBuffer.read(Uint32Array, 1);
            this.dwMoneyTree = decodeBuffer.read(Uint32Array, 1);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_NOTIFY_UPT_EXTAPP_TIPS_SC = CMD_NOTIFY_UPT_EXTAPP_TIPS_SC;
    class CMD_REFRESH_CUR_ONLINETIME_GIFT_SC {
        constructor() {
            this.stNextGift = new OnlineGiftPara(); //本阶段可领的在线礼包情况 
            this.stNextNextGift = new OnlineGiftPara(); //下一阶段玩家在线礼包相关信息 
        }
        messageName() { return "CMD_REFRESH_CUR_ONLINETIME_GIFT"; }
        messageValue() { return CSProto.CMD_REFRESH_CUR_ONLINETIME_GIFT; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.skip(this.stNextGift.encode(encodeBuffer.buffer(), encodeBuffer.offset()));
            if (9 < CSProto.Version) {
                encodeBuffer.skip(this.stNextNextGift.encode(encodeBuffer.buffer(), encodeBuffer.offset()));
            }
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            decodeBuffer.skip(this.stNextGift.decode(decodeBuffer.buffer(), decodeBuffer.offset()));
            if (9 < CSProto.Version) {
                decodeBuffer.skip(this.stNextNextGift.decode(decodeBuffer.buffer(), decodeBuffer.offset()));
            }
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_REFRESH_CUR_ONLINETIME_GIFT_SC = CMD_REFRESH_CUR_ONLINETIME_GIFT_SC;
    class OneRecommData {
        constructor() {
            this.szRankName = ""; //角色名字 
            this.llBornID = 0; //玩家ID 
            this.szSelfDefPhoto = ""; //玩家自定义头像,长度不为0时以此为准 
            this.dwRelateAward = 0; //相关奖励金币数 
            this.bIfHasGotPrize = 0; //小于0则是不能领取奖励,为1则是今天己领取,其他未领取 
        }
        messageName() { return "OneRecommData"; }
        messageValue() { return 0; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.writeString(this.szRankName, CSProto.MAX_ROLE_NAME_LEN);
            encodeBuffer.write(Float64Array, this.llBornID);
            encodeBuffer.writeString(this.szSelfDefPhoto, CSProto.MAX_ROLE_SELFDEF_PHOTO_LEN);
            encodeBuffer.write(Uint32Array, this.dwRelateAward);
            encodeBuffer.write(Int8Array, this.bIfHasGotPrize);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.szRankName = decodeBuffer.readString(CSProto.MAX_ROLE_NAME_LEN);
            this.llBornID = decodeBuffer.read(Float64Array, 1);
            this.szSelfDefPhoto = decodeBuffer.readString(CSProto.MAX_ROLE_SELFDEF_PHOTO_LEN);
            this.dwRelateAward = decodeBuffer.read(Uint32Array, 1);
            this.bIfHasGotPrize = decodeBuffer.read(Int8Array, 1);
            return decodeBuffer.length();
        }
    }
    CSProto.OneRecommData = OneRecommData;
    class CMD_RECOMMEND_QUERYPAGE_CS {
        constructor() {
            this.wPageIndex = 0; //注是从1开始,查询的页码 
        }
        messageName() { return "CMD_RECOMMEND_QUERYPAGE"; }
        messageValue() { return CSProto.CMD_RECOMMEND_QUERYPAGE; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.write(Uint16Array, this.wPageIndex);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.wPageIndex = decodeBuffer.read(Uint16Array, 1);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_RECOMMEND_QUERYPAGE_CS = CMD_RECOMMEND_QUERYPAGE_CS;
    class CMD_RECOMMEND_QUERYPAGE_SC {
        constructor() {
            this.stPagePara = new PageBreakPara(); //分页相关数据 
            this.astList = new Array(); //查询分页结果列表 
            this.llRecommMeBornID = 0; //推荐了我的角色ID 
            this.bIfHasGotRecommMePrize = 0; //为1则是己领取推荐了我的奖励,否则未领取 
        }
        messageName() { return "CMD_RECOMMEND_QUERYPAGE"; }
        messageValue() { return CSProto.CMD_RECOMMEND_QUERYPAGE; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.skip(this.stPagePara.encode(encodeBuffer.buffer(), encodeBuffer.offset()));
            var astListSize = this.astList.length > CSProto.MAX_RECOMMED_LIST_SIZE ? CSProto.MAX_RECOMMED_LIST_SIZE : this.astList.length;
            encodeBuffer.write(Uint16Array, astListSize);
            this.astList.length = astListSize;
            for (var i = 0; i < astListSize; i++) {
                encodeBuffer.skip(this.astList[i].encode(encodeBuffer.buffer(), encodeBuffer.offset()));
            }
            encodeBuffer.write(Float64Array, this.llRecommMeBornID);
            encodeBuffer.write(Uint8Array, this.bIfHasGotRecommMePrize);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            decodeBuffer.skip(this.stPagePara.decode(decodeBuffer.buffer(), decodeBuffer.offset()));
            var astListSize = decodeBuffer.read(Uint16Array, 1);
            this.astList = new Array(astListSize);
            for (var i = 0; i < astListSize; i++) {
                this.astList[i] = new OneRecommData();
                decodeBuffer.skip(this.astList[i].decode(decodeBuffer.buffer(), decodeBuffer.offset()));
            }
            this.llRecommMeBornID = decodeBuffer.read(Float64Array, 1);
            this.bIfHasGotRecommMePrize = decodeBuffer.read(Uint8Array, 1);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_RECOMMEND_QUERYPAGE_SC = CMD_RECOMMEND_QUERYPAGE_SC;
    class CMD_GET_ME_RECOMM_OTHER_GIFT_CS {
        constructor() {
            this.llChoseOtherBornID = 0; //推荐列表中某人的角色ID 
        }
        messageName() { return "CMD_GET_ME_RECOMM_OTHER_GIFT"; }
        messageValue() { return CSProto.CMD_GET_ME_RECOMM_OTHER_GIFT; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.write(Float64Array, this.llChoseOtherBornID);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.llChoseOtherBornID = decodeBuffer.read(Float64Array, 1);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_GET_ME_RECOMM_OTHER_GIFT_CS = CMD_GET_ME_RECOMM_OTHER_GIFT_CS;
    class CMD_GET_ME_RECOMM_OTHER_GIFT_SC {
        constructor() {
            this.dwGotGold = 0; //获得了金币,仅用于表示成功领取 
        }
        messageName() { return "CMD_GET_ME_RECOMM_OTHER_GIFT"; }
        messageValue() { return CSProto.CMD_GET_ME_RECOMM_OTHER_GIFT; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.write(Uint32Array, this.dwGotGold);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.dwGotGold = decodeBuffer.read(Uint32Array, 1);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_GET_ME_RECOMM_OTHER_GIFT_SC = CMD_GET_ME_RECOMM_OTHER_GIFT_SC;
    class CMD_GET_OTHER_RECOMM_ME_GIFT_CS {
        constructor() {
            this.llInputOtherRecommID = 0; //输入的别人的推荐码 
        }
        messageName() { return "CMD_GET_OTHER_RECOMM_ME_GIFT"; }
        messageValue() { return CSProto.CMD_GET_OTHER_RECOMM_ME_GIFT; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.write(Float64Array, this.llInputOtherRecommID);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.llInputOtherRecommID = decodeBuffer.read(Float64Array, 1);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_GET_OTHER_RECOMM_ME_GIFT_CS = CMD_GET_OTHER_RECOMM_ME_GIFT_CS;
    class CMD_GET_OTHER_RECOMM_ME_GIFT_SC {
        constructor() {
            this.dwGotGold = 0; //获得了金币,仅用于表示成功领取 
        }
        messageName() { return "CMD_GET_OTHER_RECOMM_ME_GIFT"; }
        messageValue() { return CSProto.CMD_GET_OTHER_RECOMM_ME_GIFT; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.write(Uint32Array, this.dwGotGold);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.dwGotGold = decodeBuffer.read(Uint32Array, 1);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_GET_OTHER_RECOMM_ME_GIFT_SC = CMD_GET_OTHER_RECOMM_ME_GIFT_SC;
    class CMD_APPSTORE_REPUTATION_STATE_SC {
        constructor() {
            this.bState = 0; //当前的状态，参见APPSTORE_REPUTATION_STATE_NONE等枚举 
        }
        messageName() { return "CMD_APPSTORE_REPUTATION_STATE"; }
        messageValue() { return CSProto.CMD_APPSTORE_REPUTATION_STATE; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.write(Uint8Array, this.bState);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.bState = decodeBuffer.read(Uint8Array, 1);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_APPSTORE_REPUTATION_STATE_SC = CMD_APPSTORE_REPUTATION_STATE_SC;
    class CMD_GET_APPSTORE_REPUTATION_GIFT_SC {
        constructor() {
            this.dwGold = 0; //获得了多少钱 
        }
        messageName() { return "CMD_GET_APPSTORE_REPUTATION_GIFT"; }
        messageValue() { return CSProto.CMD_GET_APPSTORE_REPUTATION_GIFT; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.write(Uint32Array, this.dwGold);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.dwGold = decodeBuffer.read(Uint32Array, 1);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_GET_APPSTORE_REPUTATION_GIFT_SC = CMD_GET_APPSTORE_REPUTATION_GIFT_SC;
    class CMD_WRITE_APPSTORE_REPUTATION_CS {
        constructor() {
            this.bReputationType = 0; //填非0即可 
        }
        messageName() { return "CMD_WRITE_APPSTORE_REPUTATION"; }
        messageValue() { return CSProto.CMD_WRITE_APPSTORE_REPUTATION; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.write(Uint8Array, this.bReputationType);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.bReputationType = decodeBuffer.read(Uint8Array, 1);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_WRITE_APPSTORE_REPUTATION_CS = CMD_WRITE_APPSTORE_REPUTATION_CS;
    class MailBaseInfo {
        constructor() {
            this.dwMailID = 0; //邮件ID 
            this.bMailType = 0; //邮件类型，参见NORMAL_MAIL_TYPE等的定义 
            this.bMailStat = 0; //邮件状态标志,按位标记，参见MAIL_STAT_HASREAD等的定义 
            this.szRoleName = ""; //若在发件箱中，代表收件人姓名，若在收件箱中，代表发件人姓名 
            this.dwMailTime = 0; //邮件发送时间 
            this.szMailTitle = ""; //邮件标题 
            this.szMailContent = ""; //邮件内容 
            this.astAttachList = new Array(); //附件列表 
        }
        messageName() { return "MailBaseInfo"; }
        messageValue() { return 0; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.write(Uint32Array, this.dwMailID);
            encodeBuffer.write(Uint8Array, this.bMailType);
            encodeBuffer.write(Uint8Array, this.bMailStat);
            encodeBuffer.writeString(this.szRoleName, CSProto.MAX_ROLE_NAME_LEN);
            encodeBuffer.write(Uint32Array, this.dwMailTime);
            encodeBuffer.writeString(this.szMailTitle, CSProto.MAX_MAIL_TITLE_LEN);
            encodeBuffer.writeString(this.szMailContent, CSProto.MAX_MAIL_CONTENT_LEN);
            var astAttachListSize = this.astAttachList.length > CSProto.MAX_MAIL_ATTACH_COUNT ? CSProto.MAX_MAIL_ATTACH_COUNT : this.astAttachList.length;
            encodeBuffer.write(Uint16Array, astAttachListSize);
            this.astAttachList.length = astAttachListSize;
            for (var i = 0; i < astAttachListSize; i++) {
                encodeBuffer.skip(this.astAttachList[i].encode(encodeBuffer.buffer(), encodeBuffer.offset()));
            }
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.dwMailID = decodeBuffer.read(Uint32Array, 1);
            this.bMailType = decodeBuffer.read(Uint8Array, 1);
            this.bMailStat = decodeBuffer.read(Uint8Array, 1);
            this.szRoleName = decodeBuffer.readString(CSProto.MAX_ROLE_NAME_LEN);
            this.dwMailTime = decodeBuffer.read(Uint32Array, 1);
            this.szMailTitle = decodeBuffer.readString(CSProto.MAX_MAIL_TITLE_LEN);
            this.szMailContent = decodeBuffer.readString(CSProto.MAX_MAIL_CONTENT_LEN);
            var astAttachListSize = decodeBuffer.read(Uint16Array, 1);
            this.astAttachList = new Array(astAttachListSize);
            for (var i = 0; i < astAttachListSize; i++) {
                this.astAttachList[i] = new PackObj();
                decodeBuffer.skip(this.astAttachList[i].decode(decodeBuffer.buffer(), decodeBuffer.offset()));
            }
            return decodeBuffer.length();
        }
    }
    CSProto.MailBaseInfo = MailBaseInfo;
    class CMD_GET_MAILLIST_CS {
        constructor() {
            this.bMailBoxType = 0; //邮箱类型，参见枚举MAIL_BOX_RECV等的定义,目前仅收件箱 
            this.wPageIndex = 0; //注是从1开始,查询的页码 
        }
        messageName() { return "CMD_GET_MAILLIST"; }
        messageValue() { return CSProto.CMD_GET_MAILLIST; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.write(Uint8Array, this.bMailBoxType);
            encodeBuffer.write(Uint16Array, this.wPageIndex);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.bMailBoxType = decodeBuffer.read(Uint8Array, 1);
            this.wPageIndex = decodeBuffer.read(Uint16Array, 1);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_GET_MAILLIST_CS = CMD_GET_MAILLIST_CS;
    class CMD_GET_MAILLIST_SC {
        constructor() {
            this.bMailBoxType = 0; //邮箱类型，参见枚举MAIL_BOX_RECV等的定义 
            this.stPagePara = new PageBreakPara(); //分页相关数据 
            this.astMailList = new Array(); //邮件列表 
        }
        messageName() { return "CMD_GET_MAILLIST"; }
        messageValue() { return CSProto.CMD_GET_MAILLIST; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.write(Uint8Array, this.bMailBoxType);
            encodeBuffer.skip(this.stPagePara.encode(encodeBuffer.buffer(), encodeBuffer.offset()));
            var astMailListSize = this.astMailList.length > CSProto.MAX_MAIL_LIST_COUNT ? CSProto.MAX_MAIL_LIST_COUNT : this.astMailList.length;
            encodeBuffer.write(Uint16Array, astMailListSize);
            this.astMailList.length = astMailListSize;
            for (var i = 0; i < astMailListSize; i++) {
                encodeBuffer.skip(this.astMailList[i].encode(encodeBuffer.buffer(), encodeBuffer.offset()));
            }
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.bMailBoxType = decodeBuffer.read(Uint8Array, 1);
            decodeBuffer.skip(this.stPagePara.decode(decodeBuffer.buffer(), decodeBuffer.offset()));
            var astMailListSize = decodeBuffer.read(Uint16Array, 1);
            this.astMailList = new Array(astMailListSize);
            for (var i = 0; i < astMailListSize; i++) {
                this.astMailList[i] = new MailBaseInfo();
                decodeBuffer.skip(this.astMailList[i].decode(decodeBuffer.buffer(), decodeBuffer.offset()));
            }
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_GET_MAILLIST_SC = CMD_GET_MAILLIST_SC;
    class CMD_GET_MAILATTACH_CS {
        constructor() {
            this.bMailBoxType = 0; //邮箱类型，参见枚举MAIL_BOX_RECV等的定义,目前仅收件箱 
            this.bGetType = 0; //获取附件类型，参见枚举GET_MAILATTACH_TYPE_ONE等的定义 
            this.dwMailID = 0; //相关邮件ID，在获取单封邮件附件时有效 
        }
        messageName() { return "CMD_GET_MAILATTACH"; }
        messageValue() { return CSProto.CMD_GET_MAILATTACH; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.write(Uint8Array, this.bMailBoxType);
            encodeBuffer.write(Uint8Array, this.bGetType);
            encodeBuffer.write(Uint32Array, this.dwMailID);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.bMailBoxType = decodeBuffer.read(Uint8Array, 1);
            this.bGetType = decodeBuffer.read(Uint8Array, 1);
            this.dwMailID = decodeBuffer.read(Uint32Array, 1);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_GET_MAILATTACH_CS = CMD_GET_MAILATTACH_CS;
    class CMD_GET_MAILATTACH_SC {
        constructor() {
            this.bMailBoxType = 0; //邮箱类型，参见枚举MAIL_BOX_RECV等的定义,目前仅收件箱 
            this.bGetType = 0; //获取附件类型，参见枚举GET_MAILATTACH_TYPE_ONE等的定义 
            this.wGetSuccNum = 0; //成功获取附件邮件封数 
            this.dwMailID = 0; //相关邮件ID，在获取单封邮件附件时有效 
            this.bCurMailStat = 0; //邮件最新的当前状态标志,按位标记，参见MAIL_STAT_HASREAD等的定义 
        }
        messageName() { return "CMD_GET_MAILATTACH"; }
        messageValue() { return CSProto.CMD_GET_MAILATTACH; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.write(Uint8Array, this.bMailBoxType);
            encodeBuffer.write(Uint8Array, this.bGetType);
            encodeBuffer.write(Uint16Array, this.wGetSuccNum);
            encodeBuffer.write(Uint32Array, this.dwMailID);
            encodeBuffer.write(Uint8Array, this.bCurMailStat);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.bMailBoxType = decodeBuffer.read(Uint8Array, 1);
            this.bGetType = decodeBuffer.read(Uint8Array, 1);
            this.wGetSuccNum = decodeBuffer.read(Uint16Array, 1);
            this.dwMailID = decodeBuffer.read(Uint32Array, 1);
            this.bCurMailStat = decodeBuffer.read(Uint8Array, 1);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_GET_MAILATTACH_SC = CMD_GET_MAILATTACH_SC;
    class CMD_MAILSTAT_CHANGE_CS {
        constructor() {
            this.bMailBoxType = 0; //邮箱类型，参见枚举MAIL_BOX_RECV等的定义,目前仅收件箱 
            this.dwMailID = 0; //相关邮件ID 
            this.bMailChangeType = 0; //邮件状态变更,直接使用枚举值,为MAIL_STAT_HASREAD表明邮件己读 
        }
        messageName() { return "CMD_MAILSTAT_CHANGE"; }
        messageValue() { return CSProto.CMD_MAILSTAT_CHANGE; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.write(Uint8Array, this.bMailBoxType);
            encodeBuffer.write(Uint32Array, this.dwMailID);
            encodeBuffer.write(Uint8Array, this.bMailChangeType);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.bMailBoxType = decodeBuffer.read(Uint8Array, 1);
            this.dwMailID = decodeBuffer.read(Uint32Array, 1);
            this.bMailChangeType = decodeBuffer.read(Uint8Array, 1);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_MAILSTAT_CHANGE_CS = CMD_MAILSTAT_CHANGE_CS;
    class CMD_MAILSTAT_CHANGE_SC {
        constructor() {
            this.bMailBoxType = 0; //邮箱类型，参见枚举MAIL_BOX_RECV等的定义,目前仅收件箱 
            this.dwMailID = 0; //相关邮件ID 
            this.bCurMailStat = 0; //邮件最新的当前状态标志,按位标记，参见MAIL_STAT_HASREAD等的定义 
        }
        messageName() { return "CMD_MAILSTAT_CHANGE"; }
        messageValue() { return CSProto.CMD_MAILSTAT_CHANGE; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.write(Uint8Array, this.bMailBoxType);
            encodeBuffer.write(Uint32Array, this.dwMailID);
            encodeBuffer.write(Uint8Array, this.bCurMailStat);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.bMailBoxType = decodeBuffer.read(Uint8Array, 1);
            this.dwMailID = decodeBuffer.read(Uint32Array, 1);
            this.bCurMailStat = decodeBuffer.read(Uint8Array, 1);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_MAILSTAT_CHANGE_SC = CMD_MAILSTAT_CHANGE_SC;
    class CMD_REQ_BIND_SMSCODE_CS {
        constructor() {
            this.szMobile = ""; //玩家手机号 
        }
        messageName() { return "CMD_REQ_BIND_SMSCODE"; }
        messageValue() { return CSProto.CMD_REQ_BIND_SMSCODE; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.writeString(this.szMobile, CSProto.MAX_MOBILE_LEN);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.szMobile = decodeBuffer.readString(CSProto.MAX_MOBILE_LEN);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_REQ_BIND_SMSCODE_CS = CMD_REQ_BIND_SMSCODE_CS;
    class CMD_REQ_BIND_SMSCODE_SC {
        constructor() {
            this.szMobile = ""; //玩家手机号 
        }
        messageName() { return "CMD_REQ_BIND_SMSCODE"; }
        messageValue() { return CSProto.CMD_REQ_BIND_SMSCODE; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.writeString(this.szMobile, CSProto.MAX_MOBILE_LEN);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.szMobile = decodeBuffer.readString(CSProto.MAX_MOBILE_LEN);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_REQ_BIND_SMSCODE_SC = CMD_REQ_BIND_SMSCODE_SC;
    class CMD_CONFIRM_BIND_SMSCODE_CS {
        constructor() {
            this.szMobile = ""; //玩家手机号 
            this.dwSmSCode = 0; //相关验证码 
        }
        messageName() { return "CMD_CONFIRM_BIND_SMSCODE"; }
        messageValue() { return CSProto.CMD_CONFIRM_BIND_SMSCODE; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.writeString(this.szMobile, CSProto.MAX_MOBILE_LEN);
            encodeBuffer.write(Uint32Array, this.dwSmSCode);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.szMobile = decodeBuffer.readString(CSProto.MAX_MOBILE_LEN);
            this.dwSmSCode = decodeBuffer.read(Uint32Array, 1);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_CONFIRM_BIND_SMSCODE_CS = CMD_CONFIRM_BIND_SMSCODE_CS;
    class CMD_CONFIRM_BIND_SMSCODE_SC {
        constructor() {
            this.szMobile = ""; //玩家手机号 
            this.dwSmSCode = 0; //相关验证码 
            this.bConfirmRet = 0; //验证通过后的确认类型,参见枚举MOBILE_BIND_CNA_DIRECT_DO等的定义 
            this.szExistBindRoleName = ""; //己有绑定帐号的角色名,确认结果为MOBILE_BIND_MOBILE_ALREADY_BIND有效 
            this.bExistBindRoleVipLvl = 0; //己有绑定帐号的VIP等级,确认结果为MOBILE_BIND_MOBILE_ALREADY_BIND有效 
            this.llExistBindBornID = 0; //己有绑定帐号的角色ID,确认结果为MOBILE_BIND_MOBILE_ALREADY_BIND有效 
            this.llExistBindGold = 0; //己有绑定帐号的金币,确认结果为MOBILE_BIND_MOBILE_ALREADY_BIND有效 
        }
        messageName() { return "CMD_CONFIRM_BIND_SMSCODE"; }
        messageValue() { return CSProto.CMD_CONFIRM_BIND_SMSCODE; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.writeString(this.szMobile, CSProto.MAX_MOBILE_LEN);
            encodeBuffer.write(Uint32Array, this.dwSmSCode);
            encodeBuffer.write(Uint8Array, this.bConfirmRet);
            encodeBuffer.writeString(this.szExistBindRoleName, CSProto.MAX_ROLE_NAME_LEN);
            encodeBuffer.write(Uint8Array, this.bExistBindRoleVipLvl);
            encodeBuffer.write(Float64Array, this.llExistBindBornID);
            encodeBuffer.write(Float64Array, this.llExistBindGold);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.szMobile = decodeBuffer.readString(CSProto.MAX_MOBILE_LEN);
            this.dwSmSCode = decodeBuffer.read(Uint32Array, 1);
            this.bConfirmRet = decodeBuffer.read(Uint8Array, 1);
            this.szExistBindRoleName = decodeBuffer.readString(CSProto.MAX_ROLE_NAME_LEN);
            this.bExistBindRoleVipLvl = decodeBuffer.read(Uint8Array, 1);
            this.llExistBindBornID = decodeBuffer.read(Float64Array, 1);
            this.llExistBindGold = decodeBuffer.read(Float64Array, 1);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_CONFIRM_BIND_SMSCODE_SC = CMD_CONFIRM_BIND_SMSCODE_SC;
    class CMD_DO_BIND_MOBILE_CS {
        constructor() {
            this.szMobile = ""; //玩家手机号 
            this.dwSmSCode = 0; //相关验证码 
        }
        messageName() { return "CMD_DO_BIND_MOBILE"; }
        messageValue() { return CSProto.CMD_DO_BIND_MOBILE; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.writeString(this.szMobile, CSProto.MAX_MOBILE_LEN);
            encodeBuffer.write(Uint32Array, this.dwSmSCode);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.szMobile = decodeBuffer.readString(CSProto.MAX_MOBILE_LEN);
            this.dwSmSCode = decodeBuffer.read(Uint32Array, 1);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_DO_BIND_MOBILE_CS = CMD_DO_BIND_MOBILE_CS;
    class CMD_DO_BIND_MOBILE_SC {
        constructor() {
            this.szMobile = ""; //玩家手机号 
            this.dwSmSCode = 0; //相关验证码 
        }
        messageName() { return "CMD_DO_BIND_MOBILE"; }
        messageValue() { return CSProto.CMD_DO_BIND_MOBILE; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.writeString(this.szMobile, CSProto.MAX_MOBILE_LEN);
            encodeBuffer.write(Uint32Array, this.dwSmSCode);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.szMobile = decodeBuffer.readString(CSProto.MAX_MOBILE_LEN);
            this.dwSmSCode = decodeBuffer.read(Uint32Array, 1);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_DO_BIND_MOBILE_SC = CMD_DO_BIND_MOBILE_SC;
    class CMD_DO_REPLACE_ACCOUNT_CS {
        constructor() {
            this.szMobile = ""; //玩家手机号 
            this.dwSmSCode = 0; //相关验证码 
        }
        messageName() { return "CMD_DO_REPLACE_ACCOUNT"; }
        messageValue() { return CSProto.CMD_DO_REPLACE_ACCOUNT; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.writeString(this.szMobile, CSProto.MAX_MOBILE_LEN);
            encodeBuffer.write(Uint32Array, this.dwSmSCode);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.szMobile = decodeBuffer.readString(CSProto.MAX_MOBILE_LEN);
            this.dwSmSCode = decodeBuffer.read(Uint32Array, 1);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_DO_REPLACE_ACCOUNT_CS = CMD_DO_REPLACE_ACCOUNT_CS;
    class CMD_DO_REPLACE_ACCOUNT_SC {
        constructor() {
            this.szMobile = ""; //玩家手机号 
            this.dwSmSCode = 0; //相关验证码 
        }
        messageName() { return "CMD_DO_REPLACE_ACCOUNT"; }
        messageValue() { return CSProto.CMD_DO_REPLACE_ACCOUNT; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.writeString(this.szMobile, CSProto.MAX_MOBILE_LEN);
            encodeBuffer.write(Uint32Array, this.dwSmSCode);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.szMobile = decodeBuffer.readString(CSProto.MAX_MOBILE_LEN);
            this.dwSmSCode = decodeBuffer.read(Uint32Array, 1);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_DO_REPLACE_ACCOUNT_SC = CMD_DO_REPLACE_ACCOUNT_SC;
    class CMD_NOTICE_CMDFAIL_SC {
        constructor() {
            this.dwFailCMD = 0; //执行后失败了的命令字,参见CMD_DO_REPLACE_ACCOUNT等定义 
        }
        messageName() { return "CMD_NOTICE_CMDFAIL"; }
        messageValue() { return CSProto.CMD_NOTICE_CMDFAIL; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.write(Uint32Array, this.dwFailCMD);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.dwFailCMD = decodeBuffer.read(Uint32Array, 1);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_NOTICE_CMDFAIL_SC = CMD_NOTICE_CMDFAIL_SC;
    class TopWinnerInfo {
        constructor() {
            this.dwObjectID = 0; //实体handle 
            this.llBornID = 0; //玩家ID 
            this.wVipLevel = 0; //VIP等级 
            this.szName = ""; //字符串类型的名字 
            this.bSex = 0; //性别,目前不会用到 
            this.llWinGold = 0; //拥有的金币 
            this.szSelfDefPhoto = ""; //玩家自定义头像,长度不为0时以此为准 
        }
        messageName() { return "TopWinnerInfo"; }
        messageValue() { return 0; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.write(Uint32Array, this.dwObjectID);
            encodeBuffer.write(Float64Array, this.llBornID);
            encodeBuffer.write(Uint16Array, this.wVipLevel);
            encodeBuffer.writeString(this.szName, CSProto.MAX_ROLE_NAME_LEN);
            encodeBuffer.write(Uint8Array, this.bSex);
            encodeBuffer.write(Float64Array, this.llWinGold);
            encodeBuffer.writeString(this.szSelfDefPhoto, CSProto.MAX_ROLE_SELFDEF_PHOTO_LEN);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.dwObjectID = decodeBuffer.read(Uint32Array, 1);
            this.llBornID = decodeBuffer.read(Float64Array, 1);
            this.wVipLevel = decodeBuffer.read(Uint16Array, 1);
            this.szName = decodeBuffer.readString(CSProto.MAX_ROLE_NAME_LEN);
            this.bSex = decodeBuffer.read(Uint8Array, 1);
            this.llWinGold = decodeBuffer.read(Float64Array, 1);
            this.szSelfDefPhoto = decodeBuffer.readString(CSProto.MAX_ROLE_SELFDEF_PHOTO_LEN);
            return decodeBuffer.length();
        }
    }
    CSProto.TopWinnerInfo = TopWinnerInfo;
    class CMD_NOTIFY_TOPWINNER_SC {
        constructor() {
            this.wMapTemplateID = 0; //对应的房间对应地图ID参见MAP_TEMPLATE_ID_NORMAL_SLOT等枚举 
            this.dwRoundID = 0; //对应的相关转数序号 
            this.stWinnerInfo = new TopWinnerInfo(); //最大赢家相关数据 
        }
        messageName() { return "CMD_NOTIFY_TOPWINNER"; }
        messageValue() { return CSProto.CMD_NOTIFY_TOPWINNER; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.write(Uint16Array, this.wMapTemplateID);
            encodeBuffer.write(Uint32Array, this.dwRoundID);
            encodeBuffer.skip(this.stWinnerInfo.encode(encodeBuffer.buffer(), encodeBuffer.offset()));
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.wMapTemplateID = decodeBuffer.read(Uint16Array, 1);
            this.dwRoundID = decodeBuffer.read(Uint32Array, 1);
            decodeBuffer.skip(this.stWinnerInfo.decode(decodeBuffer.buffer(), decodeBuffer.offset()));
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_NOTIFY_TOPWINNER_SC = CMD_NOTIFY_TOPWINNER_SC;
    class CMD_VIVO_GEN_ORDER_CS {
        constructor() {
            this.szVivoAppID = ""; //vivo的appid 
            this.szPayCode = ""; //支付编码 
            this.szPayViewChannel = ""; //支付显示渠道 
            this.szOrderTitle = ""; //订单标题 
            this.szOrderDesc = ""; //订单描述 
        }
        messageName() { return "CMD_VIVO_GEN_ORDER"; }
        messageValue() { return CSProto.CMD_VIVO_GEN_ORDER; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.writeString(this.szVivoAppID, CSProto.MAX_PAY_VIVO_APPID_LEN);
            encodeBuffer.writeString(this.szPayCode, CSProto.MAX_PAY_PAYCODELEN);
            encodeBuffer.writeString(this.szPayViewChannel, CSProto.MAX_PAY_VIEWCHANNEL_LEN);
            encodeBuffer.writeString(this.szOrderTitle, CSProto.MAX_PAY_VIVO_ORDERTITLE_LEN);
            encodeBuffer.writeString(this.szOrderDesc, CSProto.MAX_PAY_VIVO_ORDERDESC_LEN);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.szVivoAppID = decodeBuffer.readString(CSProto.MAX_PAY_VIVO_APPID_LEN);
            this.szPayCode = decodeBuffer.readString(CSProto.MAX_PAY_PAYCODELEN);
            this.szPayViewChannel = decodeBuffer.readString(CSProto.MAX_PAY_VIEWCHANNEL_LEN);
            this.szOrderTitle = decodeBuffer.readString(CSProto.MAX_PAY_VIVO_ORDERTITLE_LEN);
            this.szOrderDesc = decodeBuffer.readString(CSProto.MAX_PAY_VIVO_ORDERDESC_LEN);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_VIVO_GEN_ORDER_CS = CMD_VIVO_GEN_ORDER_CS;
    class CMD_VIVO_GEN_ORDER_SC {
        constructor() {
            this.szPayCode = ""; //支付编码 
            this.szOrderNumber = ""; //vivo返回的订单编号 
            this.szAccessKey = ""; //vivo返回的accesskey 
        }
        messageName() { return "CMD_VIVO_GEN_ORDER"; }
        messageValue() { return CSProto.CMD_VIVO_GEN_ORDER; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.writeString(this.szPayCode, CSProto.MAX_PAY_PAYCODELEN);
            encodeBuffer.writeString(this.szOrderNumber, CSProto.MAX_PAY_VIVO_ORDERID_LEN);
            encodeBuffer.writeString(this.szAccessKey, CSProto.MAX_PAY_VIVO_ACCESSKEY_LEN);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.szPayCode = decodeBuffer.readString(CSProto.MAX_PAY_PAYCODELEN);
            this.szOrderNumber = decodeBuffer.readString(CSProto.MAX_PAY_VIVO_ORDERID_LEN);
            this.szAccessKey = decodeBuffer.readString(CSProto.MAX_PAY_VIVO_ACCESSKEY_LEN);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_VIVO_GEN_ORDER_SC = CMD_VIVO_GEN_ORDER_SC;
    class CMD_NOTIFY_ROUNDINDEXERR_CS {
        constructor() {
            this.wOrginMapTemplateID = 0; //被踢出前所在的对应的房间对应地图ID参见MAP_TEMPLATE_ID_NORMAL_SLOT等枚举 
            this.dwClientRoundIndex = 0; //客户端本地数据:转数序号 
            this.wClientLeftBetTime = 0; //客户端本地数据:当前对应剩余可下注秒数 
            this.bClientIsHasBanker = 0; //客户端本地数据:为0无庄家,其他则有庄家 
            this.bLeftPrizeSetTime = 0; //客户端本地数据:当前庄家设置下次开奖时间对应剩余可下注秒数 
            this.dwRelateServerCmdID = 0; //服务器下发了不同转数序号对应的命令字ID 
            this.dwRelateServerRoundIndex = 0; //服务器下发的不同转数序号 
        }
        messageName() { return "CMD_NOTIFY_ROUNDINDEXERR"; }
        messageValue() { return CSProto.CMD_NOTIFY_ROUNDINDEXERR; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.write(Uint16Array, this.wOrginMapTemplateID);
            encodeBuffer.write(Uint32Array, this.dwClientRoundIndex);
            encodeBuffer.write(Uint8Array, this.wClientLeftBetTime);
            encodeBuffer.write(Uint8Array, this.bClientIsHasBanker);
            encodeBuffer.write(Uint8Array, this.bLeftPrizeSetTime);
            encodeBuffer.write(Uint32Array, this.dwRelateServerCmdID);
            encodeBuffer.write(Uint32Array, this.dwRelateServerRoundIndex);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.wOrginMapTemplateID = decodeBuffer.read(Uint16Array, 1);
            this.dwClientRoundIndex = decodeBuffer.read(Uint32Array, 1);
            this.wClientLeftBetTime = decodeBuffer.read(Uint8Array, 1);
            this.bClientIsHasBanker = decodeBuffer.read(Uint8Array, 1);
            this.bLeftPrizeSetTime = decodeBuffer.read(Uint8Array, 1);
            this.dwRelateServerCmdID = decodeBuffer.read(Uint32Array, 1);
            this.dwRelateServerRoundIndex = decodeBuffer.read(Uint32Array, 1);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_NOTIFY_ROUNDINDEXERR_CS = CMD_NOTIFY_ROUNDINDEXERR_CS;
    class CMD_CHECK_MALLBUY_CS {
        constructor() {
            this.szPayCode = ""; //支付编码 
            this.dwPayWayType = 0; //支付方式类型,将支付渠道和类型结合的统一key,参见PAYWAY_ALIPAY等 
        }
        messageName() { return "CMD_CHECK_MALLBUY"; }
        messageValue() { return CSProto.CMD_CHECK_MALLBUY; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.writeString(this.szPayCode, CSProto.MAX_PAY_PAYCODELEN);
            encodeBuffer.write(Uint32Array, this.dwPayWayType);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.szPayCode = decodeBuffer.readString(CSProto.MAX_PAY_PAYCODELEN);
            this.dwPayWayType = decodeBuffer.read(Uint32Array, 1);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_CHECK_MALLBUY_CS = CMD_CHECK_MALLBUY_CS;
    class CMD_CHECK_MALLBUY_SC {
        constructor() {
            this.bCheckRet = 0; //检查成功为0,其他失败,具体描述通过CMD_ERROR下行提示 
            this.szPayCode = ""; //支付编码 
            this.dwPayWayType = 0; //支付方式类型,将支付渠道和类型结合的统一key,参见PAYWAY_ALIPAY等 
        }
        messageName() { return "CMD_CHECK_MALLBUY"; }
        messageValue() { return CSProto.CMD_CHECK_MALLBUY; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.write(Uint8Array, this.bCheckRet);
            encodeBuffer.writeString(this.szPayCode, CSProto.MAX_PAY_PAYCODELEN);
            encodeBuffer.write(Uint32Array, this.dwPayWayType);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.bCheckRet = decodeBuffer.read(Uint8Array, 1);
            this.szPayCode = decodeBuffer.readString(CSProto.MAX_PAY_PAYCODELEN);
            this.dwPayWayType = decodeBuffer.read(Uint32Array, 1);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_CHECK_MALLBUY_SC = CMD_CHECK_MALLBUY_SC;
    class CMD_UNICOM_GEN_ORDER_CS {
        constructor() {
            this.szAppID = ""; //appid 
            this.szCpID = ""; //cpid 
            this.szPayCode = ""; //支付编码 
            this.szPayViewChannel = ""; //支付显示渠道 
        }
        messageName() { return "CMD_UNICOM_GEN_ORDER"; }
        messageValue() { return CSProto.CMD_UNICOM_GEN_ORDER; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.writeString(this.szAppID, 255);
            encodeBuffer.writeString(this.szCpID, 255);
            encodeBuffer.writeString(this.szPayCode, CSProto.MAX_PAY_PAYCODELEN);
            encodeBuffer.writeString(this.szPayViewChannel, CSProto.MAX_PAY_VIEWCHANNEL_LEN);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.szAppID = decodeBuffer.readString(255);
            this.szCpID = decodeBuffer.readString(255);
            this.szPayCode = decodeBuffer.readString(CSProto.MAX_PAY_PAYCODELEN);
            this.szPayViewChannel = decodeBuffer.readString(CSProto.MAX_PAY_VIEWCHANNEL_LEN);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_UNICOM_GEN_ORDER_CS = CMD_UNICOM_GEN_ORDER_CS;
    class CMD_UNICOM_GEN_ORDER_SC {
        constructor() {
            this.szPayCode = ""; //支付编码 
            this.szOrderNumber = ""; //返回的订单编号 
        }
        messageName() { return "CMD_UNICOM_GEN_ORDER"; }
        messageValue() { return CSProto.CMD_UNICOM_GEN_ORDER; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.writeString(this.szPayCode, CSProto.MAX_PAY_PAYCODELEN);
            encodeBuffer.writeString(this.szOrderNumber, 255);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.szPayCode = decodeBuffer.readString(CSProto.MAX_PAY_PAYCODELEN);
            this.szOrderNumber = decodeBuffer.readString(255);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_UNICOM_GEN_ORDER_SC = CMD_UNICOM_GEN_ORDER_SC;
    class CMD_LENOVO_GEN_ORDER_CS {
        constructor() {
            this.szAppID = ""; //appid 
            this.szPayCode = ""; //支付编码 
            this.szPayViewChannel = ""; //支付显示渠道 
        }
        messageName() { return "CMD_LENOVO_GEN_ORDER"; }
        messageValue() { return CSProto.CMD_LENOVO_GEN_ORDER; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.writeString(this.szAppID, 255);
            encodeBuffer.writeString(this.szPayCode, CSProto.MAX_PAY_PAYCODELEN);
            encodeBuffer.writeString(this.szPayViewChannel, CSProto.MAX_PAY_VIEWCHANNEL_LEN);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.szAppID = decodeBuffer.readString(255);
            this.szPayCode = decodeBuffer.readString(CSProto.MAX_PAY_PAYCODELEN);
            this.szPayViewChannel = decodeBuffer.readString(CSProto.MAX_PAY_VIEWCHANNEL_LEN);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_LENOVO_GEN_ORDER_CS = CMD_LENOVO_GEN_ORDER_CS;
    class CMD_LENOVO_GEN_ORDER_SC {
        constructor() {
            this.szPayCode = ""; //支付编码 
            this.szExOrderID = ""; //返回的订单编号 
            this.szPrivateInfo = ""; //订单的业务私有信息 
        }
        messageName() { return "CMD_LENOVO_GEN_ORDER"; }
        messageValue() { return CSProto.CMD_LENOVO_GEN_ORDER; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.writeString(this.szPayCode, CSProto.MAX_PAY_PAYCODELEN);
            encodeBuffer.writeString(this.szExOrderID, CSProto.MAX_PAY_LENOVO_EXORDERID_LEN);
            encodeBuffer.writeString(this.szPrivateInfo, CSProto.MAX_PAY_LENOVO_PRIVATEINFO_LEN);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.szPayCode = decodeBuffer.readString(CSProto.MAX_PAY_PAYCODELEN);
            this.szExOrderID = decodeBuffer.readString(CSProto.MAX_PAY_LENOVO_EXORDERID_LEN);
            this.szPrivateInfo = decodeBuffer.readString(CSProto.MAX_PAY_LENOVO_PRIVATEINFO_LEN);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_LENOVO_GEN_ORDER_SC = CMD_LENOVO_GEN_ORDER_SC;
    class CMD_COMM_MALL_GEN_ORDER_CS {
        constructor() {
            this.dwChargePlatform = 0; //支付平台类型参见CHARGE_PLATFORM_HAIMA等定义 
            this.szAppID = ""; //appid 
            this.szPayCode = ""; //支付编码 
            this.szPayViewChannel = ""; //支付显示渠道 
            this.szReserve1 = ""; //保留字段1 
            this.szReserve2 = ""; //保留字段2 
            this.llReserve3 = 0; //保留字段3 
            this.llReserve4 = 0; //保留字段4 
        }
        messageName() { return "CMD_COMM_MALL_GEN_ORDER"; }
        messageValue() { return CSProto.CMD_COMM_MALL_GEN_ORDER; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.write(Uint32Array, this.dwChargePlatform);
            encodeBuffer.writeString(this.szAppID, 512);
            encodeBuffer.writeString(this.szPayCode, CSProto.MAX_PAY_PAYCODELEN);
            encodeBuffer.writeString(this.szPayViewChannel, CSProto.MAX_PAY_VIEWCHANNEL_LEN);
            encodeBuffer.writeString(this.szReserve1, 512);
            encodeBuffer.writeString(this.szReserve2, 512);
            encodeBuffer.write(Float64Array, this.llReserve3);
            encodeBuffer.write(Float64Array, this.llReserve4);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.dwChargePlatform = decodeBuffer.read(Uint32Array, 1);
            this.szAppID = decodeBuffer.readString(512);
            this.szPayCode = decodeBuffer.readString(CSProto.MAX_PAY_PAYCODELEN);
            this.szPayViewChannel = decodeBuffer.readString(CSProto.MAX_PAY_VIEWCHANNEL_LEN);
            this.szReserve1 = decodeBuffer.readString(512);
            this.szReserve2 = decodeBuffer.readString(512);
            this.llReserve3 = decodeBuffer.read(Float64Array, 1);
            this.llReserve4 = decodeBuffer.read(Float64Array, 1);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_COMM_MALL_GEN_ORDER_CS = CMD_COMM_MALL_GEN_ORDER_CS;
    class CMD_COMM_MALL_GEN_ORDER_SC {
        constructor() {
            this.dwChargePlatform = 0; //支付平台类型参见CHARGE_PLATFORM_HAIMA等定义 
            this.szAppID = ""; //appid 
            this.szPayCode = ""; //支付编码 
            this.szOrderNumber = ""; //返回的游戏内部订单编号 
            this.szPrivateInfo = ""; //支付时传递的私有信息 
            this.szReserve1 = ""; //保留字段1 
            this.szReserve2 = ""; //保留字段2 
            this.llReserve3 = 0; //保留字段3 
            this.llReserve4 = 0; //保留字段4 
        }
        messageName() { return "CMD_COMM_MALL_GEN_ORDER"; }
        messageValue() { return CSProto.CMD_COMM_MALL_GEN_ORDER; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.write(Uint32Array, this.dwChargePlatform);
            encodeBuffer.writeString(this.szAppID, 512);
            encodeBuffer.writeString(this.szPayCode, CSProto.MAX_PAY_PAYCODELEN);
            encodeBuffer.writeString(this.szOrderNumber, CSProto.MAX_PAY_COMM_SELFORDER_LEN);
            encodeBuffer.writeString(this.szPrivateInfo, CSProto.MAX_PAY_COMM_PRIVATEINFO_LEN);
            encodeBuffer.writeString(this.szReserve1, 512);
            encodeBuffer.writeString(this.szReserve2, 512);
            encodeBuffer.write(Float64Array, this.llReserve3);
            encodeBuffer.write(Float64Array, this.llReserve4);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.dwChargePlatform = decodeBuffer.read(Uint32Array, 1);
            this.szAppID = decodeBuffer.readString(512);
            this.szPayCode = decodeBuffer.readString(CSProto.MAX_PAY_PAYCODELEN);
            this.szOrderNumber = decodeBuffer.readString(CSProto.MAX_PAY_COMM_SELFORDER_LEN);
            this.szPrivateInfo = decodeBuffer.readString(CSProto.MAX_PAY_COMM_PRIVATEINFO_LEN);
            this.szReserve1 = decodeBuffer.readString(512);
            this.szReserve2 = decodeBuffer.readString(512);
            this.llReserve3 = decodeBuffer.read(Float64Array, 1);
            this.llReserve4 = decodeBuffer.read(Float64Array, 1);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_COMM_MALL_GEN_ORDER_SC = CMD_COMM_MALL_GEN_ORDER_SC;
    class CMD_NTF_ENTERVIEW_SC {
        constructor() {
            this.astObjList = new Array(); //进入视野的动态对象列表 
            this.obj_list = new Array(); // alias : astObjList, 进入视野的动态对象列表 
        }
        messageName() { return "CMD_NTF_ENTERVIEW"; }
        messageValue() { return CSProto.CMD_NTF_ENTERVIEW; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            var astObjListSize = this.astObjList.length > CSProto.MAX_VIEW_OBJ_COUNT ? CSProto.MAX_VIEW_OBJ_COUNT : this.astObjList.length;
            encodeBuffer.write(Uint16Array, astObjListSize);
            this.astObjList.length = astObjListSize;
            for (var i = 0; i < astObjListSize; i++) {
                encodeBuffer.skip(this.astObjList[i].encode(encodeBuffer.buffer(), encodeBuffer.offset()));
            }
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            var astObjListSize = decodeBuffer.read(Uint16Array, 1);
            this.astObjList = new Array(astObjListSize);
            for (var i = 0; i < astObjListSize; i++) {
                this.astObjList[i] = new OBJ_ENTERVIEW();
                decodeBuffer.skip(this.astObjList[i].decode(decodeBuffer.buffer(), decodeBuffer.offset()));
            }
            this.obj_list = this.astObjList;
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_NTF_ENTERVIEW_SC = CMD_NTF_ENTERVIEW_SC;
    class CMD_NTF_LEAVEVIEW_SC {
        constructor() {
            this.astObjList = new Array(); //离开视野的动态对象列表 
            this.obj_list = new Array(); // alias : astObjList, 离开视野的动态对象列表 
        }
        messageName() { return "CMD_NTF_LEAVEVIEW"; }
        messageValue() { return CSProto.CMD_NTF_LEAVEVIEW; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            var astObjListSize = this.astObjList.length > CSProto.MAX_VIEW_OBJ_COUNT ? CSProto.MAX_VIEW_OBJ_COUNT : this.astObjList.length;
            encodeBuffer.write(Uint16Array, astObjListSize);
            this.astObjList.length = astObjListSize;
            for (var i = 0; i < astObjListSize; i++) {
                encodeBuffer.skip(this.astObjList[i].encode(encodeBuffer.buffer(), encodeBuffer.offset()));
            }
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            var astObjListSize = decodeBuffer.read(Uint16Array, 1);
            this.astObjList = new Array(astObjListSize);
            for (var i = 0; i < astObjListSize; i++) {
                this.astObjList[i] = new OBJ_LEAVEVIEW();
                decodeBuffer.skip(this.astObjList[i].decode(decodeBuffer.buffer(), decodeBuffer.offset()));
            }
            this.obj_list = this.astObjList;
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_NTF_LEAVEVIEW_SC = CMD_NTF_LEAVEVIEW_SC;
    class ZjhPlayerAllData {
        constructor() {
            this.dwObjectID = 0; //对应玩家的实体handle 
            this.bCurPlayerStatus = 0; //对应玩家当前状态参见CARDPLAYER_STATUS_VIEWER等枚举 
            this.dwSubMaskStatus = 0; //对应玩家一些逻辑状态,可能为ZJH_PLAYER_MASK_NONE等多个枚举的或值 
            this.wRelateLeftTime = 0; //各种状态下的相关剩余秒数 
            this.llBetGoldAll = 0; //当前总下注金币数 
            this.wRelateCountDownTimeAll = 0; //各种状态下的相关倒计时总秒数 
            this.bForbidCompardLeftTurn = 0; //若玩家处于禁比状态对应其禁比剩余轮数 
            this.bDoubleType = 0; //若玩家处于翻倍状态对应其翻倍方式参见ZJH_DOUBLETYPE_2等枚举 
            this.astCardList = new Array(); //当对应数据为自己的数据时有效手牌列表在游戏状态且己看牌的情况下不为空char表示方式 
        }
        messageName() { return "ZjhPlayerAllData"; }
        messageValue() { return 0; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.write(Uint32Array, this.dwObjectID);
            encodeBuffer.write(Uint8Array, this.bCurPlayerStatus);
            encodeBuffer.write(Uint32Array, this.dwSubMaskStatus);
            encodeBuffer.write(Uint16Array, this.wRelateLeftTime);
            if (17 < CSProto.Version) {
                encodeBuffer.write(Float64Array, this.llBetGoldAll);
            }
            if (19 < CSProto.Version) {
                encodeBuffer.write(Uint16Array, this.wRelateCountDownTimeAll);
            }
            encodeBuffer.write(Uint8Array, this.bForbidCompardLeftTurn);
            encodeBuffer.write(Uint8Array, this.bDoubleType);
            var astCardListSize = this.astCardList.length > 3 ? 3 : this.astCardList.length;
            encodeBuffer.write(Uint16Array, astCardListSize);
            this.astCardList.length = astCardListSize;
            encodeBuffer.write(Uint8Array, this.astCardList);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.dwObjectID = decodeBuffer.read(Uint32Array, 1);
            this.bCurPlayerStatus = decodeBuffer.read(Uint8Array, 1);
            this.dwSubMaskStatus = decodeBuffer.read(Uint32Array, 1);
            this.wRelateLeftTime = decodeBuffer.read(Uint16Array, 1);
            if (17 < CSProto.Version) {
                this.llBetGoldAll = decodeBuffer.read(Float64Array, 1);
            }
            if (19 < CSProto.Version) {
                this.wRelateCountDownTimeAll = decodeBuffer.read(Uint16Array, 1);
            }
            this.bForbidCompardLeftTurn = decodeBuffer.read(Uint8Array, 1);
            this.bDoubleType = decodeBuffer.read(Uint8Array, 1);
            var astCardListSize = decodeBuffer.read(Uint16Array, 1);
            this.astCardList = new Array(astCardListSize);
            this.astCardList = decodeBuffer.read(Uint8Array, astCardListSize);
            return decodeBuffer.length();
        }
    }
    CSProto.ZjhPlayerAllData = ZjhPlayerAllData;
    class ZjhPlayerUptData {
        constructor() {
            this.dwObjectID = 0; //对应玩家的实体handle 
            this.bCurPlayerStatus = 0; //对应玩家当前状态参见CARDPLAYER_STATUS_VIEWER等枚举 
            this.dwSubMaskStatus = 0; //对应玩家一些逻辑状态,可能为ZJH_PLAYER_MASK_NONE等多个枚举的或值 
            this.wRelateLeftTime = 0; //各种状态下的相关剩余秒数 
            this.llBetGoldAll = 0; //当前总下注金币数 
            this.wRelateCountDownTimeAll = 0; //各种状态下的相关倒计时总秒数 
            this.bForbidCompardLeftTurn = 0; //若玩家处于禁比状态对应其禁比剩余轮数 
            this.bDoubleType = 0; //若玩家处于翻倍状态对应其翻倍方式参见ZJH_DOUBLETYPE_2等枚举 
        }
        messageName() { return "ZjhPlayerUptData"; }
        messageValue() { return 0; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.write(Uint32Array, this.dwObjectID);
            encodeBuffer.write(Uint8Array, this.bCurPlayerStatus);
            encodeBuffer.write(Uint32Array, this.dwSubMaskStatus);
            encodeBuffer.write(Uint16Array, this.wRelateLeftTime);
            if (17 < CSProto.Version) {
                encodeBuffer.write(Float64Array, this.llBetGoldAll);
            }
            if (19 < CSProto.Version) {
                encodeBuffer.write(Uint16Array, this.wRelateCountDownTimeAll);
            }
            if (20 < CSProto.Version) {
                encodeBuffer.write(Uint8Array, this.bForbidCompardLeftTurn);
            }
            if (20 < CSProto.Version) {
                encodeBuffer.write(Uint8Array, this.bDoubleType);
            }
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.dwObjectID = decodeBuffer.read(Uint32Array, 1);
            this.bCurPlayerStatus = decodeBuffer.read(Uint8Array, 1);
            this.dwSubMaskStatus = decodeBuffer.read(Uint32Array, 1);
            this.wRelateLeftTime = decodeBuffer.read(Uint16Array, 1);
            if (17 < CSProto.Version) {
                this.llBetGoldAll = decodeBuffer.read(Float64Array, 1);
            }
            if (19 < CSProto.Version) {
                this.wRelateCountDownTimeAll = decodeBuffer.read(Uint16Array, 1);
            }
            if (20 < CSProto.Version) {
                this.bForbidCompardLeftTurn = decodeBuffer.read(Uint8Array, 1);
            }
            if (20 < CSProto.Version) {
                this.bDoubleType = decodeBuffer.read(Uint8Array, 1);
            }
            return decodeBuffer.length();
        }
    }
    CSProto.ZjhPlayerUptData = ZjhPlayerUptData;
    class ZjhAllData {
        constructor() {
            this.dwRoundID = 0; //对应的相关局数序号,目前仅用于调试方便 
            this.bTabStatus = 0; //当前状态,参见CARDROOM_CURSTATUS_NOTBEGIN等系列枚举 
            this.wRelateLeftTime = 0; //各种状态下的相关剩余秒数 
            this.wBankerPosX = 0; //庄家位置 
            this.wCurTurn = 0; //当前回合数 
            this.wMaxTurn = 0; //最大总回合数 
            this.llTotalBetGold = 0; //总下注金币数 
            this.wActPlayerPosX = 0; //当前活动玩家位置 
            this.llCurBaseBetGold = 0; //当前单注金币数 
            this.wRelateCountDownTimeAll = 0; //各种状态下的相关倒计时总秒数 
        }
        messageName() { return "ZjhAllData"; }
        messageValue() { return 0; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.write(Uint32Array, this.dwRoundID);
            encodeBuffer.write(Uint8Array, this.bTabStatus);
            encodeBuffer.write(Uint16Array, this.wRelateLeftTime);
            encodeBuffer.write(Uint16Array, this.wBankerPosX);
            encodeBuffer.write(Uint16Array, this.wCurTurn);
            encodeBuffer.write(Uint16Array, this.wMaxTurn);
            encodeBuffer.write(Float64Array, this.llTotalBetGold);
            encodeBuffer.write(Uint16Array, this.wActPlayerPosX);
            encodeBuffer.write(Float64Array, this.llCurBaseBetGold);
            if (19 < CSProto.Version) {
                encodeBuffer.write(Uint16Array, this.wRelateCountDownTimeAll);
            }
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.dwRoundID = decodeBuffer.read(Uint32Array, 1);
            this.bTabStatus = decodeBuffer.read(Uint8Array, 1);
            this.wRelateLeftTime = decodeBuffer.read(Uint16Array, 1);
            this.wBankerPosX = decodeBuffer.read(Uint16Array, 1);
            this.wCurTurn = decodeBuffer.read(Uint16Array, 1);
            this.wMaxTurn = decodeBuffer.read(Uint16Array, 1);
            this.llTotalBetGold = decodeBuffer.read(Float64Array, 1);
            this.wActPlayerPosX = decodeBuffer.read(Uint16Array, 1);
            this.llCurBaseBetGold = decodeBuffer.read(Float64Array, 1);
            if (19 < CSProto.Version) {
                this.wRelateCountDownTimeAll = decodeBuffer.read(Uint16Array, 1);
            }
            return decodeBuffer.length();
        }
    }
    CSProto.ZjhAllData = ZjhAllData;
    class ZjhTableUptData {
        constructor() {
            this.dwRoundID = 0; //对应的相关局数序号,目前仅用于调试方便 
            this.bTabStatus = 0; //当前状态,参见CARDROOM_CURSTATUS_NOTBEGIN等系列枚举 
            this.wRelateLeftTime = 0; //各种状态下的相关剩余秒数 
            this.wCurTurn = 0; //当前回合数 
            this.llTotalBetGold = 0; //总下注金币数 
            this.wActPlayerPosX = 0; //当前活动玩家位置 
            this.llCurBaseBetGold = 0; //当前单注金币数 
            this.wRelateCountDownTimeAll = 0; //各种状态下的相关倒计时总秒数 
        }
        messageName() { return "ZjhTableUptData"; }
        messageValue() { return 0; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.write(Uint32Array, this.dwRoundID);
            encodeBuffer.write(Uint8Array, this.bTabStatus);
            encodeBuffer.write(Uint16Array, this.wRelateLeftTime);
            encodeBuffer.write(Uint16Array, this.wCurTurn);
            encodeBuffer.write(Float64Array, this.llTotalBetGold);
            encodeBuffer.write(Uint16Array, this.wActPlayerPosX);
            encodeBuffer.write(Float64Array, this.llCurBaseBetGold);
            if (19 < CSProto.Version) {
                encodeBuffer.write(Uint16Array, this.wRelateCountDownTimeAll);
            }
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.dwRoundID = decodeBuffer.read(Uint32Array, 1);
            this.bTabStatus = decodeBuffer.read(Uint8Array, 1);
            this.wRelateLeftTime = decodeBuffer.read(Uint16Array, 1);
            this.wCurTurn = decodeBuffer.read(Uint16Array, 1);
            this.llTotalBetGold = decodeBuffer.read(Float64Array, 1);
            this.wActPlayerPosX = decodeBuffer.read(Uint16Array, 1);
            this.llCurBaseBetGold = decodeBuffer.read(Float64Array, 1);
            if (19 < CSProto.Version) {
                this.wRelateCountDownTimeAll = decodeBuffer.read(Uint16Array, 1);
            }
            return decodeBuffer.length();
        }
    }
    CSProto.ZjhTableUptData = ZjhTableUptData;
    class CMD_ZJH_ENTERDATA_SC {
        constructor() {
            this.wMapID = 0; //对应地图ID 
            this.dwSceneID = 0; //对应的场景ID 
            this.dwTableID = 0; //对应的桌台ID 
            this.wSelfPosX = 0; //位置X,对于房间内的第一个玩家是1，其他依次类推 
            this.stAllData = new ZjhAllData(); //对应当前数据 
            this.szPWD = ""; //对应设置的房间密码仅私人场有效 
        }
        messageName() { return "CMD_ZJH_ENTERDATA"; }
        messageValue() { return CSProto.CMD_ZJH_ENTERDATA; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.write(Uint16Array, this.wMapID);
            encodeBuffer.write(Uint32Array, this.dwSceneID);
            encodeBuffer.write(Uint32Array, this.dwTableID);
            encodeBuffer.write(Uint16Array, this.wSelfPosX);
            encodeBuffer.skip(this.stAllData.encode(encodeBuffer.buffer(), encodeBuffer.offset()));
            if (33 < CSProto.Version) {
                encodeBuffer.writeString(this.szPWD, 10);
            }
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.wMapID = decodeBuffer.read(Uint16Array, 1);
            this.dwSceneID = decodeBuffer.read(Uint32Array, 1);
            this.dwTableID = decodeBuffer.read(Uint32Array, 1);
            this.wSelfPosX = decodeBuffer.read(Uint16Array, 1);
            decodeBuffer.skip(this.stAllData.decode(decodeBuffer.buffer(), decodeBuffer.offset()));
            if (33 < CSProto.Version) {
                this.szPWD = decodeBuffer.readString(10);
            }
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_ZJH_ENTERDATA_SC = CMD_ZJH_ENTERDATA_SC;
    class CMD_ZJH_BEGIN_ONEGAME_SC {
        constructor() {
            this.dwSceneID = 0; //对应的场景ID,需要与玩家当前所在的sceneid一致才能处理,该id全游戏唯一 
            this.stAllData = new ZjhAllData(); //对应当前数据 
        }
        messageName() { return "CMD_ZJH_BEGIN_ONEGAME"; }
        messageValue() { return CSProto.CMD_ZJH_BEGIN_ONEGAME; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.write(Uint32Array, this.dwSceneID);
            encodeBuffer.skip(this.stAllData.encode(encodeBuffer.buffer(), encodeBuffer.offset()));
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.dwSceneID = decodeBuffer.read(Uint32Array, 1);
            decodeBuffer.skip(this.stAllData.decode(decodeBuffer.buffer(), decodeBuffer.offset()));
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_ZJH_BEGIN_ONEGAME_SC = CMD_ZJH_BEGIN_ONEGAME_SC;
    class CMD_ZJH_UPT_PLAYER_DATA_SC {
        constructor() {
            this.dwSceneID = 0; //对应的场景ID,需要与玩家当前所在的sceneid一致才能处理,该id全游戏唯一 
            this.astUptData = new Array(); //对应玩家当前最新的相关需要更新数据列表 
        }
        messageName() { return "CMD_ZJH_UPT_PLAYER_DATA"; }
        messageValue() { return CSProto.CMD_ZJH_UPT_PLAYER_DATA; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.write(Uint32Array, this.dwSceneID);
            var astUptDataSize = this.astUptData.length > 5 ? 5 : this.astUptData.length;
            encodeBuffer.write(Uint16Array, astUptDataSize);
            this.astUptData.length = astUptDataSize;
            for (var i = 0; i < astUptDataSize; i++) {
                encodeBuffer.skip(this.astUptData[i].encode(encodeBuffer.buffer(), encodeBuffer.offset()));
            }
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.dwSceneID = decodeBuffer.read(Uint32Array, 1);
            var astUptDataSize = decodeBuffer.read(Uint16Array, 1);
            this.astUptData = new Array(astUptDataSize);
            for (var i = 0; i < astUptDataSize; i++) {
                this.astUptData[i] = new ZjhPlayerUptData();
                decodeBuffer.skip(this.astUptData[i].decode(decodeBuffer.buffer(), decodeBuffer.offset()));
            }
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_ZJH_UPT_PLAYER_DATA_SC = CMD_ZJH_UPT_PLAYER_DATA_SC;
    class CMD_ZJH_PLAYER_ALLDATA_SC {
        constructor() {
            this.dwSceneID = 0; //对应的场景ID,需要与玩家当前所在的sceneid一致才能处理,该id全游戏唯一 
            this.astAllData = new Array(); //对应玩家进场初始化的全量数据 
        }
        messageName() { return "CMD_ZJH_PLAYER_ALLDATA"; }
        messageValue() { return CSProto.CMD_ZJH_PLAYER_ALLDATA; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.write(Uint32Array, this.dwSceneID);
            var astAllDataSize = this.astAllData.length > 5 ? 5 : this.astAllData.length;
            encodeBuffer.write(Uint16Array, astAllDataSize);
            this.astAllData.length = astAllDataSize;
            for (var i = 0; i < astAllDataSize; i++) {
                encodeBuffer.skip(this.astAllData[i].encode(encodeBuffer.buffer(), encodeBuffer.offset()));
            }
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.dwSceneID = decodeBuffer.read(Uint32Array, 1);
            var astAllDataSize = decodeBuffer.read(Uint16Array, 1);
            this.astAllData = new Array(astAllDataSize);
            for (var i = 0; i < astAllDataSize; i++) {
                this.astAllData[i] = new ZjhPlayerAllData();
                decodeBuffer.skip(this.astAllData[i].decode(decodeBuffer.buffer(), decodeBuffer.offset()));
            }
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_ZJH_PLAYER_ALLDATA_SC = CMD_ZJH_PLAYER_ALLDATA_SC;
    class CMD_ZJH_UPT_TABLE_DATA_SC {
        constructor() {
            this.dwSceneID = 0; //对应的场景ID,需要与玩家当前所在的sceneid一致才能处理,该id全游戏唯一 
            this.stUptData = new ZjhTableUptData(); //对应当前数据 
        }
        messageName() { return "CMD_ZJH_UPT_TABLE_DATA"; }
        messageValue() { return CSProto.CMD_ZJH_UPT_TABLE_DATA; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.write(Uint32Array, this.dwSceneID);
            encodeBuffer.skip(this.stUptData.encode(encodeBuffer.buffer(), encodeBuffer.offset()));
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.dwSceneID = decodeBuffer.read(Uint32Array, 1);
            decodeBuffer.skip(this.stUptData.decode(decodeBuffer.buffer(), decodeBuffer.offset()));
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_ZJH_UPT_TABLE_DATA_SC = CMD_ZJH_UPT_TABLE_DATA_SC;
    class CMD_ZJH_DO_VIEWCARD_SC {
        constructor() {
            this.dwSceneID = 0; //对应的场景ID,需要与玩家当前所在的sceneid一致才能处理,该id全游戏唯一 
            this.astCardList = new Array(); //手牌列表,char表示方式 
        }
        messageName() { return "CMD_ZJH_DO_VIEWCARD"; }
        messageValue() { return CSProto.CMD_ZJH_DO_VIEWCARD; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.write(Uint32Array, this.dwSceneID);
            var astCardListSize = this.astCardList.length > 3 ? 3 : this.astCardList.length;
            encodeBuffer.write(Uint16Array, astCardListSize);
            this.astCardList.length = astCardListSize;
            encodeBuffer.write(Uint8Array, this.astCardList);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.dwSceneID = decodeBuffer.read(Uint32Array, 1);
            var astCardListSize = decodeBuffer.read(Uint16Array, 1);
            this.astCardList = new Array(astCardListSize);
            this.astCardList = decodeBuffer.read(Uint8Array, astCardListSize);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_ZJH_DO_VIEWCARD_SC = CMD_ZJH_DO_VIEWCARD_SC;
    class CMD_ZJH_DO_BET_CS {
        constructor() {
            this.bBetWay = 0; //对应压注方式参见ZHJ_BETWAY_FOLLOW等枚举 
            this.dwBetGold = 0; //加注时对应的单注下注金币数,后台自行检查是否合法值 
            this.newVerBetGold = 0; //新版本客户端都用这个字段了不使用dwBetGold 
        }
        messageName() { return "CMD_ZJH_DO_BET"; }
        messageValue() { return CSProto.CMD_ZJH_DO_BET; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.write(Uint8Array, this.bBetWay);
            encodeBuffer.write(Uint32Array, this.dwBetGold);
            if (33 < CSProto.Version) {
                encodeBuffer.write(Float64Array, this.newVerBetGold);
            }
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.bBetWay = decodeBuffer.read(Uint8Array, 1);
            this.dwBetGold = decodeBuffer.read(Uint32Array, 1);
            if (33 < CSProto.Version) {
                this.newVerBetGold = decodeBuffer.read(Float64Array, 1);
            }
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_ZJH_DO_BET_CS = CMD_ZJH_DO_BET_CS;
    class CMD_ZJH_DO_BET_SC {
        constructor() {
            this.dwSceneID = 0; //对应的场景ID,需要与玩家当前所在的sceneid一致才能处理,该id全游戏唯一 
            this.dwObjectID = 0; //对应下注玩家的实体handle,该消息是广播消息,需要该字段 
            this.bBetWay = 0; //对应压注方式参见ZJH_BETWAY_FOLLOW等枚举 
            this.dwBetGold = 0; //对应的单注下注金币数 
            this.bRetCostGoldTimes = 0; //对应的最终下注倍数 
            this.newVerBetGold = 0; //对应的单注下注金币数新版本客户端都用这个字段了不使用dwBetGold 
        }
        messageName() { return "CMD_ZJH_DO_BET"; }
        messageValue() { return CSProto.CMD_ZJH_DO_BET; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.write(Uint32Array, this.dwSceneID);
            encodeBuffer.write(Uint32Array, this.dwObjectID);
            encodeBuffer.write(Uint8Array, this.bBetWay);
            encodeBuffer.write(Uint32Array, this.dwBetGold);
            encodeBuffer.write(Uint8Array, this.bRetCostGoldTimes);
            if (33 < CSProto.Version) {
                encodeBuffer.write(Float64Array, this.newVerBetGold);
            }
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.dwSceneID = decodeBuffer.read(Uint32Array, 1);
            this.dwObjectID = decodeBuffer.read(Uint32Array, 1);
            this.bBetWay = decodeBuffer.read(Uint8Array, 1);
            this.dwBetGold = decodeBuffer.read(Uint32Array, 1);
            this.bRetCostGoldTimes = decodeBuffer.read(Uint8Array, 1);
            if (33 < CSProto.Version) {
                this.newVerBetGold = decodeBuffer.read(Float64Array, 1);
            }
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_ZJH_DO_BET_SC = CMD_ZJH_DO_BET_SC;
    class ZjhPlayerMatchRet {
        constructor() {
            this.llBornID = 0; //玩家ID 
            this.wVipLevel = 0; //VIP等级 
            this.szName = ""; //字符串类型的名字 
            this.bSex = 0; //性别,目前不会用到 
            this.bHeadPhoto = 0; //系统头像,目前不会用到 
            this.szSelfDefPhoto = ""; //玩家自定义头像,长度不为0时以此为准 
            this.llWinGold = 0; //玩家损益可正可负 
            this.bFinalRet = 0; //是否是胜利之类的枚举参见ZJH_PLAYER_MATCHRET_WIN等的定义 
            this.astCardList = new Array(); //手牌列表,char表示方式,若为空则代表不展示 
        }
        messageName() { return "ZjhPlayerMatchRet"; }
        messageValue() { return 0; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.write(Float64Array, this.llBornID);
            encodeBuffer.write(Uint16Array, this.wVipLevel);
            encodeBuffer.writeString(this.szName, CSProto.MAX_ROLE_NAME_LEN);
            encodeBuffer.write(Uint8Array, this.bSex);
            encodeBuffer.write(Uint8Array, this.bHeadPhoto);
            encodeBuffer.writeString(this.szSelfDefPhoto, CSProto.MAX_ROLE_SELFDEF_PHOTO_LEN);
            encodeBuffer.write(Float64Array, this.llWinGold);
            encodeBuffer.write(Uint8Array, this.bFinalRet);
            var astCardListSize = this.astCardList.length > 3 ? 3 : this.astCardList.length;
            encodeBuffer.write(Uint16Array, astCardListSize);
            this.astCardList.length = astCardListSize;
            encodeBuffer.write(Uint8Array, this.astCardList);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.llBornID = decodeBuffer.read(Float64Array, 1);
            this.wVipLevel = decodeBuffer.read(Uint16Array, 1);
            this.szName = decodeBuffer.readString(CSProto.MAX_ROLE_NAME_LEN);
            this.bSex = decodeBuffer.read(Uint8Array, 1);
            this.bHeadPhoto = decodeBuffer.read(Uint8Array, 1);
            this.szSelfDefPhoto = decodeBuffer.readString(CSProto.MAX_ROLE_SELFDEF_PHOTO_LEN);
            this.llWinGold = decodeBuffer.read(Float64Array, 1);
            this.bFinalRet = decodeBuffer.read(Uint8Array, 1);
            var astCardListSize = decodeBuffer.read(Uint16Array, 1);
            this.astCardList = new Array(astCardListSize);
            this.astCardList = decodeBuffer.read(Uint8Array, astCardListSize);
            return decodeBuffer.length();
        }
    }
    CSProto.ZjhPlayerMatchRet = ZjhPlayerMatchRet;
    class ZjhFinalMatchStat {
        constructor() {
            this.astPlayerRetStat = new Array(); //对应结算玩家数据列表 
        }
        messageName() { return "ZjhFinalMatchStat"; }
        messageValue() { return 0; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            var astPlayerRetStatSize = this.astPlayerRetStat.length > 5 ? 5 : this.astPlayerRetStat.length;
            encodeBuffer.write(Uint16Array, astPlayerRetStatSize);
            this.astPlayerRetStat.length = astPlayerRetStatSize;
            for (var i = 0; i < astPlayerRetStatSize; i++) {
                encodeBuffer.skip(this.astPlayerRetStat[i].encode(encodeBuffer.buffer(), encodeBuffer.offset()));
            }
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            var astPlayerRetStatSize = decodeBuffer.read(Uint16Array, 1);
            this.astPlayerRetStat = new Array(astPlayerRetStatSize);
            for (var i = 0; i < astPlayerRetStatSize; i++) {
                this.astPlayerRetStat[i] = new ZjhPlayerMatchRet();
                decodeBuffer.skip(this.astPlayerRetStat[i].decode(decodeBuffer.buffer(), decodeBuffer.offset()));
            }
            return decodeBuffer.length();
        }
    }
    CSProto.ZjhFinalMatchStat = ZjhFinalMatchStat;
    class CMD_ZJH_END_ONEGAME_SC {
        constructor() {
            this.dwSceneID = 0; //对应的场景ID,需要与玩家当前所在的sceneid一致才能处理,该id全游戏唯一 
            this.stFinalMatchStat = new ZjhFinalMatchStat(); //对应结算数据 
        }
        messageName() { return "CMD_ZJH_END_ONEGAME"; }
        messageValue() { return CSProto.CMD_ZJH_END_ONEGAME; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.write(Uint32Array, this.dwSceneID);
            encodeBuffer.skip(this.stFinalMatchStat.encode(encodeBuffer.buffer(), encodeBuffer.offset()));
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.dwSceneID = decodeBuffer.read(Uint32Array, 1);
            decodeBuffer.skip(this.stFinalMatchStat.decode(decodeBuffer.buffer(), decodeBuffer.offset()));
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_ZJH_END_ONEGAME_SC = CMD_ZJH_END_ONEGAME_SC;
    class CMD_ZJH_DO_COMPARE_CS {
        constructor() {
            this.dwCmpOtherObjectID = 0; //与哪个玩家比牌,对应实体handle 
        }
        messageName() { return "CMD_ZJH_DO_COMPARE"; }
        messageValue() { return CSProto.CMD_ZJH_DO_COMPARE; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.write(Uint32Array, this.dwCmpOtherObjectID);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.dwCmpOtherObjectID = decodeBuffer.read(Uint32Array, 1);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_ZJH_DO_COMPARE_CS = CMD_ZJH_DO_COMPARE_CS;
    class CMD_ZJH_DO_COMPARE_SC {
        constructor() {
            this.dwSceneID = 0; //对应的场景ID,需要与玩家当前所在的sceneid一致才能处理,该id全游戏唯一 
            this.bIfActObjectWin = 0; //1代表主动方胜否则为失败方胜 
            this.dwActObjectID = 0; //对应发起比牌操作玩家的实体handle 
            this.dwPasObjectID = 0; //对应被动响应比牌操作玩家的实体handle 
            this.dwRelateBaseBetGold = 0; //对应的单注下注金币数 
            this.bRetCostGoldTimes = 0; //对应的最终下注倍数 
        }
        messageName() { return "CMD_ZJH_DO_COMPARE"; }
        messageValue() { return CSProto.CMD_ZJH_DO_COMPARE; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.write(Uint32Array, this.dwSceneID);
            encodeBuffer.write(Uint32Array, this.bIfActObjectWin);
            encodeBuffer.write(Uint32Array, this.dwActObjectID);
            encodeBuffer.write(Uint32Array, this.dwPasObjectID);
            encodeBuffer.write(Uint32Array, this.dwRelateBaseBetGold);
            encodeBuffer.write(Uint8Array, this.bRetCostGoldTimes);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.dwSceneID = decodeBuffer.read(Uint32Array, 1);
            this.bIfActObjectWin = decodeBuffer.read(Uint32Array, 1);
            this.dwActObjectID = decodeBuffer.read(Uint32Array, 1);
            this.dwPasObjectID = decodeBuffer.read(Uint32Array, 1);
            this.dwRelateBaseBetGold = decodeBuffer.read(Uint32Array, 1);
            this.bRetCostGoldTimes = decodeBuffer.read(Uint8Array, 1);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_ZJH_DO_COMPARE_SC = CMD_ZJH_DO_COMPARE_SC;
    class CMD_ZJH_DO_DOUBLE_CS {
        constructor() {
            this.bDoubleType = 0; //对应翻倍方式参见ZJH_DOUBLETYPE_2等枚举 
        }
        messageName() { return "CMD_ZJH_DO_DOUBLE"; }
        messageValue() { return CSProto.CMD_ZJH_DO_DOUBLE; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.write(Uint8Array, this.bDoubleType);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.bDoubleType = decodeBuffer.read(Uint8Array, 1);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_ZJH_DO_DOUBLE_CS = CMD_ZJH_DO_DOUBLE_CS;
    class CMD_ZJH_PLAYER_FIRSTROUNDINFO_SC {
        constructor() {
            this.dwSceneID = 0; //对应的场景ID,需要与玩家当前所在的sceneid一致才能处理,该id全游戏唯一 
            this.llRoundTaxGold = 0; //当局被扣了的相应金币税当该值不为零时才显示 
        }
        messageName() { return "CMD_ZJH_PLAYER_FIRSTROUNDINFO"; }
        messageValue() { return CSProto.CMD_ZJH_PLAYER_FIRSTROUNDINFO; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.write(Uint32Array, this.dwSceneID);
            encodeBuffer.write(Float64Array, this.llRoundTaxGold);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.dwSceneID = decodeBuffer.read(Uint32Array, 1);
            this.llRoundTaxGold = decodeBuffer.read(Float64Array, 1);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_ZJH_PLAYER_FIRSTROUNDINFO_SC = CMD_ZJH_PLAYER_FIRSTROUNDINFO_SC;
    class CMD_ZJH_DO_KICKPLAYER_CS {
        constructor() {
            this.llBeKickedRoleID = 0; //被踢角色ID 
            this.bNoNeedConfirm = 0; //0需要先弹确认提示否则则在满足条件的情况下会直接踢人操作 
        }
        messageName() { return "CMD_ZJH_DO_KICKPLAYER"; }
        messageValue() { return CSProto.CMD_ZJH_DO_KICKPLAYER; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.write(Float64Array, this.llBeKickedRoleID);
            encodeBuffer.write(Uint8Array, this.bNoNeedConfirm);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.llBeKickedRoleID = decodeBuffer.read(Float64Array, 1);
            this.bNoNeedConfirm = decodeBuffer.read(Uint8Array, 1);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_ZJH_DO_KICKPLAYER_CS = CMD_ZJH_DO_KICKPLAYER_CS;
    class CMD_ZJH_DO_KICKPLAYER_SC {
        constructor() {
            this.bTipsType = 0; //0弹出确认提示_1踢人成功_2弹出带商城按钮的框带上提示_其他值仅弹出带提示的确认框 
            this.szContent = ""; //内容支持富文本并需要根据真实长度自动调整对话框大小 
            this.llBeKickedRoleID = 0; //被踢角色ID 
        }
        messageName() { return "CMD_ZJH_DO_KICKPLAYER"; }
        messageValue() { return CSProto.CMD_ZJH_DO_KICKPLAYER; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.write(Uint8Array, this.bTipsType);
            encodeBuffer.writeString(this.szContent, 4096);
            encodeBuffer.write(Float64Array, this.llBeKickedRoleID);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.bTipsType = decodeBuffer.read(Uint8Array, 1);
            this.szContent = decodeBuffer.readString(4096);
            this.llBeKickedRoleID = decodeBuffer.read(Float64Array, 1);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_ZJH_DO_KICKPLAYER_SC = CMD_ZJH_DO_KICKPLAYER_SC;
    class CMD_GET_CONLOGIN_GIFT_NEWVERSION_SC {
        constructor() {
            this.bGetResult = 0; //0成功1因为是受限制用户领取失败 
        }
        messageName() { return "CMD_GET_CONLOGIN_GIFT_NEWVERSION"; }
        messageValue() { return CSProto.CMD_GET_CONLOGIN_GIFT_NEWVERSION; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.write(Uint8Array, this.bGetResult);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.bGetResult = decodeBuffer.read(Uint8Array, 1);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_GET_CONLOGIN_GIFT_NEWVERSION_SC = CMD_GET_CONLOGIN_GIFT_NEWVERSION_SC;
    class CMD_SHANXI_POINTS_EXCHANGE_CS {
        constructor() {
            this.szPayCode = ""; //兑换商品编码 
            this.szShanXiAcc = ""; //积分平台对应帐号 
            this.szShanXiPwdMd5 = ""; //积分平台对应密码的md5值 
        }
        messageName() { return "CMD_SHANXI_POINTS_EXCHANGE"; }
        messageValue() { return CSProto.CMD_SHANXI_POINTS_EXCHANGE; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.writeString(this.szPayCode, CSProto.MAX_PAY_PAYCODELEN);
            encodeBuffer.writeString(this.szShanXiAcc, 128);
            encodeBuffer.writeString(this.szShanXiPwdMd5, 64);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.szPayCode = decodeBuffer.readString(CSProto.MAX_PAY_PAYCODELEN);
            this.szShanXiAcc = decodeBuffer.readString(128);
            this.szShanXiPwdMd5 = decodeBuffer.readString(64);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_SHANXI_POINTS_EXCHANGE_CS = CMD_SHANXI_POINTS_EXCHANGE_CS;
    class CMD_SHANXI_POINTS_EXCHANGE_SC {
        constructor() {
            this.bExchangeResult = 0; //0成功其他失败 
            this.szPayCode = ""; //兑换商品编码 
            this.szShanXiAcc = ""; //积分平台对应帐号 
            this.dwGotMoney = 0; //兑换获得的金币数 
        }
        messageName() { return "CMD_SHANXI_POINTS_EXCHANGE"; }
        messageValue() { return CSProto.CMD_SHANXI_POINTS_EXCHANGE; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.write(Uint8Array, this.bExchangeResult);
            encodeBuffer.writeString(this.szPayCode, CSProto.MAX_PAY_PAYCODELEN);
            encodeBuffer.writeString(this.szShanXiAcc, 128);
            encodeBuffer.write(Uint32Array, this.dwGotMoney);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.bExchangeResult = decodeBuffer.read(Uint8Array, 1);
            this.szPayCode = decodeBuffer.readString(CSProto.MAX_PAY_PAYCODELEN);
            this.szShanXiAcc = decodeBuffer.readString(128);
            this.dwGotMoney = decodeBuffer.read(Uint32Array, 1);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_SHANXI_POINTS_EXCHANGE_SC = CMD_SHANXI_POINTS_EXCHANGE_SC;
    class BullBanker {
        constructor() {
            this.dwObjectID = 0; //实体handle（0表示系统坐庄） 
            this.wLevel = 0; //等级 
            this.wVipLevel = 0; //VIP等级 
            this.szName = ""; //字符串类型的名字 
            this.bSex = 0; //性别,目前不会用到 
            this.bHeadPhoto = 0; //系统头像,目前不会用到 
            this.bBankerLeftRound = 0; //当前庄家剩余局数 
            this.llOwnGold = 0; //拥有的金币 
            this.szSelfDefPhoto = ""; //玩家自定义头像,长度不为0时以此为准 
        }
        messageName() { return "BullBanker"; }
        messageValue() { return 0; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.write(Uint32Array, this.dwObjectID);
            encodeBuffer.write(Uint16Array, this.wLevel);
            encodeBuffer.write(Uint16Array, this.wVipLevel);
            encodeBuffer.writeString(this.szName, CSProto.MAX_ROLE_NAME_LEN);
            encodeBuffer.write(Uint8Array, this.bSex);
            encodeBuffer.write(Uint8Array, this.bHeadPhoto);
            encodeBuffer.write(Uint8Array, this.bBankerLeftRound);
            encodeBuffer.write(Float64Array, this.llOwnGold);
            encodeBuffer.writeString(this.szSelfDefPhoto, CSProto.MAX_ROLE_SELFDEF_PHOTO_LEN);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.dwObjectID = decodeBuffer.read(Uint32Array, 1);
            this.wLevel = decodeBuffer.read(Uint16Array, 1);
            this.wVipLevel = decodeBuffer.read(Uint16Array, 1);
            this.szName = decodeBuffer.readString(CSProto.MAX_ROLE_NAME_LEN);
            this.bSex = decodeBuffer.read(Uint8Array, 1);
            this.bHeadPhoto = decodeBuffer.read(Uint8Array, 1);
            this.bBankerLeftRound = decodeBuffer.read(Uint8Array, 1);
            this.llOwnGold = decodeBuffer.read(Float64Array, 1);
            this.szSelfDefPhoto = decodeBuffer.readString(CSProto.MAX_ROLE_SELFDEF_PHOTO_LEN);
            return decodeBuffer.length();
        }
    }
    CSProto.BullBanker = BullBanker;
    class BullResult {
        constructor() {
            this.abVal = new Array(); //输赢，0输，非0赢，索引对应BULL_SEAT_EAST等枚举 
        }
        messageName() { return "BullResult"; }
        messageValue() { return 0; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            var abValSize = this.abVal.length > CSProto.BULL_SEAT_COUNT ? CSProto.BULL_SEAT_COUNT : this.abVal.length;
            encodeBuffer.write(Uint16Array, abValSize);
            this.abVal.length = abValSize;
            encodeBuffer.write(Uint8Array, this.abVal);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            var abValSize = decodeBuffer.read(Uint16Array, 1);
            this.abVal = new Array(abValSize);
            this.abVal = decodeBuffer.read(Uint8Array, abValSize);
            return decodeBuffer.length();
        }
    }
    CSProto.BullResult = BullResult;
    class BullAllData {
        constructor() {
            this.dwRoundID = 0; //对应的相关转数序号,目前仅用于调试方便 
            this.bTabStatus = 0; //当前状态,参见BULL_SCENE_STATUS_IDLE等系列枚举 
            this.wLeftBetTime = 0; //当前对应剩余可下注秒数 
            this.astHisResult = new Array(); //历史结果以实际长度为准靠左边的为最新 
            this.astBetDetail = new Array(); //当前对应当转的各方具体下注列表,key对应BULL_SEAT_EAST等枚举 
            this.stBankerInfo = new BullBanker(); //桌台当前的庄家信息 
        }
        messageName() { return "BullAllData"; }
        messageValue() { return 0; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.write(Uint32Array, this.dwRoundID);
            encodeBuffer.write(Uint8Array, this.bTabStatus);
            encodeBuffer.write(Uint8Array, this.wLeftBetTime);
            var astHisResultSize = this.astHisResult.length > CSProto.MAX_BULL_SCENE_HISRESULT_LEN ? CSProto.MAX_BULL_SCENE_HISRESULT_LEN : this.astHisResult.length;
            encodeBuffer.write(Uint16Array, astHisResultSize);
            this.astHisResult.length = astHisResultSize;
            for (var i = 0; i < astHisResultSize; i++) {
                encodeBuffer.skip(this.astHisResult[i].encode(encodeBuffer.buffer(), encodeBuffer.offset()));
            }
            var astBetDetailSize = this.astBetDetail.length > CSProto.BULL_SEAT_BANKER ? CSProto.BULL_SEAT_BANKER : this.astBetDetail.length;
            encodeBuffer.write(Uint16Array, astBetDetailSize);
            this.astBetDetail.length = astBetDetailSize;
            for (var i = 0; i < astBetDetailSize; i++) {
                encodeBuffer.skip(this.astBetDetail[i].encode(encodeBuffer.buffer(), encodeBuffer.offset()));
            }
            encodeBuffer.skip(this.stBankerInfo.encode(encodeBuffer.buffer(), encodeBuffer.offset()));
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.dwRoundID = decodeBuffer.read(Uint32Array, 1);
            this.bTabStatus = decodeBuffer.read(Uint8Array, 1);
            this.wLeftBetTime = decodeBuffer.read(Uint8Array, 1);
            var astHisResultSize = decodeBuffer.read(Uint16Array, 1);
            this.astHisResult = new Array(astHisResultSize);
            for (var i = 0; i < astHisResultSize; i++) {
                this.astHisResult[i] = new BullResult();
                decodeBuffer.skip(this.astHisResult[i].decode(decodeBuffer.buffer(), decodeBuffer.offset()));
            }
            var astBetDetailSize = decodeBuffer.read(Uint16Array, 1);
            this.astBetDetail = new Array(astBetDetailSize);
            for (var i = 0; i < astBetDetailSize; i++) {
                this.astBetDetail[i] = new PROPERTY();
                decodeBuffer.skip(this.astBetDetail[i].decode(decodeBuffer.buffer(), decodeBuffer.offset()));
            }
            decodeBuffer.skip(this.stBankerInfo.decode(decodeBuffer.buffer(), decodeBuffer.offset()));
            return decodeBuffer.length();
        }
    }
    CSProto.BullAllData = BullAllData;
    class CMD_BULL_ENTERDATA_SC {
        constructor() {
            this.wMapID = 0; //对应地图ID,目前无用 
            this.dwSceneID = 0; //对应的场景ID 
            this.dwTableID = 0; //对应的桌台ID,目前无用 
            this.stAllData = new BullAllData(); //对应当前数据 
            this.dwBetTotalGold = 0; //总下注币数 
            this.astBetDetail = new Array(); //自己当前对应当转的各方具体下注列表,key对应BULL_SEAT_EAST等枚举 
            this.dwCurOnlineAcc = 0; //当前对应在线人数 
            this.bChipType = 0; //玩家当前使用筹码, 参见BULL_CHIP_TYPE1等枚举 
            this.bIfCanJoinPlay = 0; //是否可参与该玩法:0不行 1可以 
            this.cMyPos = 0; //我的位置(从1开始)，若我没有申请上庄，则为-1 
        }
        messageName() { return "CMD_BULL_ENTERDATA"; }
        messageValue() { return CSProto.CMD_BULL_ENTERDATA; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.write(Uint16Array, this.wMapID);
            encodeBuffer.write(Uint32Array, this.dwSceneID);
            encodeBuffer.write(Uint32Array, this.dwTableID);
            encodeBuffer.skip(this.stAllData.encode(encodeBuffer.buffer(), encodeBuffer.offset()));
            encodeBuffer.write(Uint32Array, this.dwBetTotalGold);
            var astBetDetailSize = this.astBetDetail.length > CSProto.BULL_SEAT_BANKER ? CSProto.BULL_SEAT_BANKER : this.astBetDetail.length;
            encodeBuffer.write(Uint16Array, astBetDetailSize);
            this.astBetDetail.length = astBetDetailSize;
            for (var i = 0; i < astBetDetailSize; i++) {
                encodeBuffer.skip(this.astBetDetail[i].encode(encodeBuffer.buffer(), encodeBuffer.offset()));
            }
            encodeBuffer.write(Uint32Array, this.dwCurOnlineAcc);
            encodeBuffer.write(Uint8Array, this.bChipType);
            encodeBuffer.write(Uint8Array, this.bIfCanJoinPlay);
            encodeBuffer.write(Int8Array, this.cMyPos);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.wMapID = decodeBuffer.read(Uint16Array, 1);
            this.dwSceneID = decodeBuffer.read(Uint32Array, 1);
            this.dwTableID = decodeBuffer.read(Uint32Array, 1);
            decodeBuffer.skip(this.stAllData.decode(decodeBuffer.buffer(), decodeBuffer.offset()));
            this.dwBetTotalGold = decodeBuffer.read(Uint32Array, 1);
            var astBetDetailSize = decodeBuffer.read(Uint16Array, 1);
            this.astBetDetail = new Array(astBetDetailSize);
            for (var i = 0; i < astBetDetailSize; i++) {
                this.astBetDetail[i] = new PROPERTY();
                decodeBuffer.skip(this.astBetDetail[i].decode(decodeBuffer.buffer(), decodeBuffer.offset()));
            }
            this.dwCurOnlineAcc = decodeBuffer.read(Uint32Array, 1);
            this.bChipType = decodeBuffer.read(Uint8Array, 1);
            this.bIfCanJoinPlay = decodeBuffer.read(Uint8Array, 1);
            this.cMyPos = decodeBuffer.read(Int8Array, 1);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_BULL_ENTERDATA_SC = CMD_BULL_ENTERDATA_SC;
    class BullRoundBankerSwitch {
        constructor() {
            this.bSwitchType = 0; //庄家变更状态,参见CLASSFRUIT_BANKER_SWITCHTYPE_ONE_STILL等系列枚举 
            this.bIsBankerRupt = 0; //庄家下庄时是否爆庄 
            this.bIsOffBankerSelf = 0; //该协议收到者是否是下庄庄家自己 
            this.llBankerTotalGods = 0; //坐庄期间总共输赢金币 
        }
        messageName() { return "BullRoundBankerSwitch"; }
        messageValue() { return 0; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.write(Uint8Array, this.bSwitchType);
            if (CSProto.CLASSFRUIT_BANKER_SWITCHTYPE_TO_NONE == this.bSwitchType || CSProto.CLASSFRUIT_BANKER_SWITCHTYPE_CHANGEONE == this.bSwitchType) {
                encodeBuffer.write(Uint8Array, this.bIsBankerRupt);
            }
            if (CSProto.CLASSFRUIT_BANKER_SWITCHTYPE_TO_NONE == this.bSwitchType || CSProto.CLASSFRUIT_BANKER_SWITCHTYPE_CHANGEONE == this.bSwitchType) {
                encodeBuffer.write(Uint8Array, this.bIsOffBankerSelf);
            }
            if (CSProto.CLASSFRUIT_BANKER_SWITCHTYPE_TO_NONE == this.bSwitchType || CSProto.CLASSFRUIT_BANKER_SWITCHTYPE_CHANGEONE == this.bSwitchType) {
                encodeBuffer.write(Float64Array, this.llBankerTotalGods);
            }
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.bSwitchType = decodeBuffer.read(Uint8Array, 1);
            if (CSProto.CLASSFRUIT_BANKER_SWITCHTYPE_TO_NONE == this.bSwitchType || CSProto.CLASSFRUIT_BANKER_SWITCHTYPE_CHANGEONE == this.bSwitchType) {
                this.bIsBankerRupt = decodeBuffer.read(Uint8Array, 1);
            }
            if (CSProto.CLASSFRUIT_BANKER_SWITCHTYPE_TO_NONE == this.bSwitchType || CSProto.CLASSFRUIT_BANKER_SWITCHTYPE_CHANGEONE == this.bSwitchType) {
                this.bIsOffBankerSelf = decodeBuffer.read(Uint8Array, 1);
            }
            if (CSProto.CLASSFRUIT_BANKER_SWITCHTYPE_TO_NONE == this.bSwitchType || CSProto.CLASSFRUIT_BANKER_SWITCHTYPE_CHANGEONE == this.bSwitchType) {
                this.llBankerTotalGods = decodeBuffer.read(Float64Array, 1);
            }
            return decodeBuffer.length();
        }
    }
    CSProto.BullRoundBankerSwitch = BullRoundBankerSwitch;
    class CMD_BULL_ROUND_END_SC {
        constructor() {
            this.stNewstData = new BullAllData(); //对应开奖后的转轮数据,序号及奖池数据等所有数据己刷新为发奖后的最新数据 
            this.adCards = new Array(); //本局的牌（索引 % 5 = BULL_SEAT_EAST等枚举代表位置的牌） 
            this.abCardsType = new Array(); //本局各方的牌型，索引对应BULL_SEAT_EAST等枚举，值为BULL_CARDS_TYPE_NONE等枚举 
            this.astCurResult = new Array(); //本局四方输赢结果, key为倍数，value为值 
            this.llBankerGotGold = 0; //庄家输赢结果 
            this.llGotBaseGold = 0; //本局自己获得基本金币数 
            this.llSysCostGold = 0; //若本局自己赢钱的系统抽水 
            this.stBankerSwitchInfo = new BullRoundBankerSwitch(); //庄家变更相关描述数据 
            this.iBankerQueuePos = 0; //当在排庄队列中时代表当前位置 
            this.dwMaxWinerObjectID = 0; //大赢家，0表示没有 
            this.szMaxWinnerPhoto = ""; //玩家自定义头像,长度不为0时以此为准 
            this.szMaxWinnerName = ""; //字符串类型的名字 
            this.llMaxWinnerGolds = 0; //本局大赢家赢了多少 
            this.wMaxWinnerVipLv = 0; //本局大赢家VIP等级 
        }
        messageName() { return "CMD_BULL_ROUND_END"; }
        messageValue() { return CSProto.CMD_BULL_ROUND_END; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.skip(this.stNewstData.encode(encodeBuffer.buffer(), encodeBuffer.offset()));
            var adCardsSize = this.adCards.length > CSProto.BULL_SEAT_COUNT * CSProto.BULL_PER_SEAT_CARDS_NUMBER ? CSProto.BULL_SEAT_COUNT * CSProto.BULL_PER_SEAT_CARDS_NUMBER : this.adCards.length;
            encodeBuffer.write(Uint16Array, adCardsSize);
            this.adCards.length = adCardsSize;
            encodeBuffer.write(Uint8Array, this.adCards);
            var abCardsTypeSize = this.abCardsType.length > CSProto.BULL_SEAT_COUNT ? CSProto.BULL_SEAT_COUNT : this.abCardsType.length;
            encodeBuffer.write(Uint16Array, abCardsTypeSize);
            this.abCardsType.length = abCardsTypeSize;
            encodeBuffer.write(Uint8Array, this.abCardsType);
            var astCurResultSize = this.astCurResult.length > CSProto.BULL_SEAT_BANKER ? CSProto.BULL_SEAT_BANKER : this.astCurResult.length;
            encodeBuffer.write(Uint16Array, astCurResultSize);
            this.astCurResult.length = astCurResultSize;
            for (var i = 0; i < astCurResultSize; i++) {
                encodeBuffer.skip(this.astCurResult[i].encode(encodeBuffer.buffer(), encodeBuffer.offset()));
            }
            encodeBuffer.write(Float64Array, this.llBankerGotGold);
            encodeBuffer.write(Float64Array, this.llGotBaseGold);
            encodeBuffer.write(Float64Array, this.llSysCostGold);
            encodeBuffer.skip(this.stBankerSwitchInfo.encode(encodeBuffer.buffer(), encodeBuffer.offset()));
            encodeBuffer.write(Int32Array, this.iBankerQueuePos);
            encodeBuffer.write(Uint32Array, this.dwMaxWinerObjectID);
            encodeBuffer.writeString(this.szMaxWinnerPhoto, CSProto.MAX_ROLE_SELFDEF_PHOTO_LEN);
            encodeBuffer.writeString(this.szMaxWinnerName, CSProto.MAX_ROLE_NAME_LEN);
            encodeBuffer.write(Float64Array, this.llMaxWinnerGolds);
            encodeBuffer.write(Uint16Array, this.wMaxWinnerVipLv);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            decodeBuffer.skip(this.stNewstData.decode(decodeBuffer.buffer(), decodeBuffer.offset()));
            var adCardsSize = decodeBuffer.read(Uint16Array, 1);
            this.adCards = new Array(adCardsSize);
            this.adCards = decodeBuffer.read(Uint8Array, adCardsSize);
            var abCardsTypeSize = decodeBuffer.read(Uint16Array, 1);
            this.abCardsType = new Array(abCardsTypeSize);
            this.abCardsType = decodeBuffer.read(Uint8Array, abCardsTypeSize);
            var astCurResultSize = decodeBuffer.read(Uint16Array, 1);
            this.astCurResult = new Array(astCurResultSize);
            for (var i = 0; i < astCurResultSize; i++) {
                this.astCurResult[i] = new PROPERTY();
                decodeBuffer.skip(this.astCurResult[i].decode(decodeBuffer.buffer(), decodeBuffer.offset()));
            }
            this.llBankerGotGold = decodeBuffer.read(Float64Array, 1);
            this.llGotBaseGold = decodeBuffer.read(Float64Array, 1);
            this.llSysCostGold = decodeBuffer.read(Float64Array, 1);
            decodeBuffer.skip(this.stBankerSwitchInfo.decode(decodeBuffer.buffer(), decodeBuffer.offset()));
            this.iBankerQueuePos = decodeBuffer.read(Int32Array, 1);
            this.dwMaxWinerObjectID = decodeBuffer.read(Uint32Array, 1);
            this.szMaxWinnerPhoto = decodeBuffer.readString(CSProto.MAX_ROLE_SELFDEF_PHOTO_LEN);
            this.szMaxWinnerName = decodeBuffer.readString(CSProto.MAX_ROLE_NAME_LEN);
            this.llMaxWinnerGolds = decodeBuffer.read(Float64Array, 1);
            this.wMaxWinnerVipLv = decodeBuffer.read(Uint16Array, 1);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_BULL_ROUND_END_SC = CMD_BULL_ROUND_END_SC;
    class CMD_BULL_CURBANKERLIST_SC {
        constructor() {
            this.astBankerList = new Array(); //当前排队中的庄家列表 
            this.cMyPos = 0; //我的位置(从1开始)，若我没有申请上庄，则为-1 
        }
        messageName() { return "CMD_BULL_CURBANKERLIST"; }
        messageValue() { return CSProto.CMD_BULL_CURBANKERLIST; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            var astBankerListSize = this.astBankerList.length > 10 ? 10 : this.astBankerList.length;
            encodeBuffer.write(Uint16Array, astBankerListSize);
            this.astBankerList.length = astBankerListSize;
            for (var i = 0; i < astBankerListSize; i++) {
                encodeBuffer.skip(this.astBankerList[i].encode(encodeBuffer.buffer(), encodeBuffer.offset()));
            }
            encodeBuffer.write(Int8Array, this.cMyPos);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            var astBankerListSize = decodeBuffer.read(Uint16Array, 1);
            this.astBankerList = new Array(astBankerListSize);
            for (var i = 0; i < astBankerListSize; i++) {
                this.astBankerList[i] = new BullBanker();
                decodeBuffer.skip(this.astBankerList[i].decode(decodeBuffer.buffer(), decodeBuffer.offset()));
            }
            this.cMyPos = decodeBuffer.read(Int8Array, 1);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_BULL_CURBANKERLIST_SC = CMD_BULL_CURBANKERLIST_SC;
    class CMD_BULL_UPDATE_CURBANKER_SC {
        constructor() {
            this.bIsHasBanker = 0; //为0无庄家,其他则有庄家 
            this.stBankerInfo = new BullBanker(); //桌台当前的庄家信息 
        }
        messageName() { return "CMD_BULL_UPDATE_CURBANKER"; }
        messageValue() { return CSProto.CMD_BULL_UPDATE_CURBANKER; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.write(Uint8Array, this.bIsHasBanker);
            if (0 != this.bIsHasBanker) {
                encodeBuffer.skip(this.stBankerInfo.encode(encodeBuffer.buffer(), encodeBuffer.offset()));
            }
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.bIsHasBanker = decodeBuffer.read(Uint8Array, 1);
            if (0 != this.bIsHasBanker) {
                decodeBuffer.skip(this.stBankerInfo.decode(decodeBuffer.buffer(), decodeBuffer.offset()));
            }
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_BULL_UPDATE_CURBANKER_SC = CMD_BULL_UPDATE_CURBANKER_SC;
    class CMD_BULL_BET_ON_CS {
        constructor() {
            this.astBetDetail = new Array(); //下注列表 
            this.bChipType = 0; //玩家当前使用筹码, 参见BULL_CHIP_TYPE1等枚举 
            this.dwRoundID = 0; //对应的相关转数序号 
        }
        messageName() { return "CMD_BULL_BET_ON"; }
        messageValue() { return CSProto.CMD_BULL_BET_ON; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            var astBetDetailSize = this.astBetDetail.length > CSProto.BULL_SEAT_BANKER ? CSProto.BULL_SEAT_BANKER : this.astBetDetail.length;
            encodeBuffer.write(Uint16Array, astBetDetailSize);
            this.astBetDetail.length = astBetDetailSize;
            for (var i = 0; i < astBetDetailSize; i++) {
                encodeBuffer.skip(this.astBetDetail[i].encode(encodeBuffer.buffer(), encodeBuffer.offset()));
            }
            encodeBuffer.write(Uint8Array, this.bChipType);
            encodeBuffer.write(Uint32Array, this.dwRoundID);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            var astBetDetailSize = decodeBuffer.read(Uint16Array, 1);
            this.astBetDetail = new Array(astBetDetailSize);
            for (var i = 0; i < astBetDetailSize; i++) {
                this.astBetDetail[i] = new PROPERTY();
                decodeBuffer.skip(this.astBetDetail[i].decode(decodeBuffer.buffer(), decodeBuffer.offset()));
            }
            this.bChipType = decodeBuffer.read(Uint8Array, 1);
            this.dwRoundID = decodeBuffer.read(Uint32Array, 1);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_BULL_BET_ON_CS = CMD_BULL_BET_ON_CS;
    class CMD_BULL_BET_ON_SC {
        constructor() {
            this.dwRoundID = 0; //对应的相关转数序号,目前仅用于调试方便 
            this.bChipType = 0; //玩家当前使用筹码, 参见BULL_CHIP_TYPE1等枚举 
            this.astBetDetail = new Array(); //下注列表 
            this.dwBetTotalGold = 0; //总下注币数 
        }
        messageName() { return "CMD_BULL_BET_ON"; }
        messageValue() { return CSProto.CMD_BULL_BET_ON; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.write(Uint32Array, this.dwRoundID);
            encodeBuffer.write(Uint8Array, this.bChipType);
            var astBetDetailSize = this.astBetDetail.length > CSProto.BULL_SEAT_BANKER ? CSProto.BULL_SEAT_BANKER : this.astBetDetail.length;
            encodeBuffer.write(Uint16Array, astBetDetailSize);
            this.astBetDetail.length = astBetDetailSize;
            for (var i = 0; i < astBetDetailSize; i++) {
                encodeBuffer.skip(this.astBetDetail[i].encode(encodeBuffer.buffer(), encodeBuffer.offset()));
            }
            encodeBuffer.write(Uint32Array, this.dwBetTotalGold);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.dwRoundID = decodeBuffer.read(Uint32Array, 1);
            this.bChipType = decodeBuffer.read(Uint8Array, 1);
            var astBetDetailSize = decodeBuffer.read(Uint16Array, 1);
            this.astBetDetail = new Array(astBetDetailSize);
            for (var i = 0; i < astBetDetailSize; i++) {
                this.astBetDetail[i] = new PROPERTY();
                decodeBuffer.skip(this.astBetDetail[i].decode(decodeBuffer.buffer(), decodeBuffer.offset()));
            }
            this.dwBetTotalGold = decodeBuffer.read(Uint32Array, 1);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_BULL_BET_ON_SC = CMD_BULL_BET_ON_SC;
    class CMD_BULL_SIGNUP_BANKER_SC {
        constructor() {
            this.wQueuePos = 0; //在队列中的位置 
            this.bPlayerBankerStat = 0; //玩家的庄家状态 
            this.szSuccTips = ""; //上庄成功相关的提示 
        }
        messageName() { return "CMD_BULL_SIGNUP_BANKER"; }
        messageValue() { return CSProto.CMD_BULL_SIGNUP_BANKER; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.write(Uint16Array, this.wQueuePos);
            encodeBuffer.write(Uint8Array, this.bPlayerBankerStat);
            encodeBuffer.writeString(this.szSuccTips, 256);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.wQueuePos = decodeBuffer.read(Uint16Array, 1);
            this.bPlayerBankerStat = decodeBuffer.read(Uint8Array, 1);
            this.szSuccTips = decodeBuffer.readString(256);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_BULL_SIGNUP_BANKER_SC = CMD_BULL_SIGNUP_BANKER_SC;
    class CMD_BULL_QUIT_BANKER_SC {
        constructor() {
            this.bPlayerBankerStat = 0; //玩家的庄家状态 
        }
        messageName() { return "CMD_BULL_QUIT_BANKER"; }
        messageValue() { return CSProto.CMD_BULL_QUIT_BANKER; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.write(Uint8Array, this.bPlayerBankerStat);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.bPlayerBankerStat = decodeBuffer.read(Uint8Array, 1);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_BULL_QUIT_BANKER_SC = CMD_BULL_QUIT_BANKER_SC;
    class CMD_BULL_REFRESHDATA_SC {
        constructor() {
            this.bTabStatus = 0; //当前状态,参见BULL_SCENE_STATUS_IDLE等系列枚举 
            this.astBetDetail = new Array(); //当前对应当转的各方具体下注列表,key对应BULL_SEAT_EAST等枚举 
            this.dwCurOnlineAcc = 0; //当前对应在线人数 
            this.dwRoundID = 0; //对应的相关转数序号 
        }
        messageName() { return "CMD_BULL_REFRESHDATA"; }
        messageValue() { return CSProto.CMD_BULL_REFRESHDATA; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.write(Uint8Array, this.bTabStatus);
            var astBetDetailSize = this.astBetDetail.length > CSProto.BULL_SEAT_BANKER ? CSProto.BULL_SEAT_BANKER : this.astBetDetail.length;
            encodeBuffer.write(Uint16Array, astBetDetailSize);
            this.astBetDetail.length = astBetDetailSize;
            for (var i = 0; i < astBetDetailSize; i++) {
                encodeBuffer.skip(this.astBetDetail[i].encode(encodeBuffer.buffer(), encodeBuffer.offset()));
            }
            encodeBuffer.write(Uint32Array, this.dwCurOnlineAcc);
            encodeBuffer.write(Uint32Array, this.dwRoundID);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.bTabStatus = decodeBuffer.read(Uint8Array, 1);
            var astBetDetailSize = decodeBuffer.read(Uint16Array, 1);
            this.astBetDetail = new Array(astBetDetailSize);
            for (var i = 0; i < astBetDetailSize; i++) {
                this.astBetDetail[i] = new PROPERTY();
                decodeBuffer.skip(this.astBetDetail[i].decode(decodeBuffer.buffer(), decodeBuffer.offset()));
            }
            this.dwCurOnlineAcc = decodeBuffer.read(Uint32Array, 1);
            this.dwRoundID = decodeBuffer.read(Uint32Array, 1);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_BULL_REFRESHDATA_SC = CMD_BULL_REFRESHDATA_SC;
    class CMD_BULL_BIGWINNERRANK_SC {
        constructor() {
            this.astRankList = new Array(); //牛牛场排行列表 
        }
        messageName() { return "CMD_BULL_BIGWINNERRANK"; }
        messageValue() { return CSProto.CMD_BULL_BIGWINNERRANK; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            var astRankListSize = this.astRankList.length > CSProto.MAX_BULL_BIGWINNER_RANK_LIST_SIZE ? CSProto.MAX_BULL_BIGWINNER_RANK_LIST_SIZE : this.astRankList.length;
            encodeBuffer.write(Uint16Array, astRankListSize);
            this.astRankList.length = astRankListSize;
            for (var i = 0; i < astRankListSize; i++) {
                encodeBuffer.skip(this.astRankList[i].encode(encodeBuffer.buffer(), encodeBuffer.offset()));
            }
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            var astRankListSize = decodeBuffer.read(Uint16Array, 1);
            this.astRankList = new Array(astRankListSize);
            for (var i = 0; i < astRankListSize; i++) {
                this.astRankList[i] = new OneRankData();
                decodeBuffer.skip(this.astRankList[i].decode(decodeBuffer.buffer(), decodeBuffer.offset()));
            }
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_BULL_BIGWINNERRANK_SC = CMD_BULL_BIGWINNERRANK_SC;
    class CMD_BULL_UPDATE_BANKER_STAT_SC {
        constructor() {
            this.bPlayerBankerStat = 0; //玩家的庄家状态 
            this.wQueuePos = 0; //在队列中的位置 
        }
        messageName() { return "CMD_BULL_UPDATE_BANKER_STAT"; }
        messageValue() { return CSProto.CMD_BULL_UPDATE_BANKER_STAT; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.write(Uint8Array, this.bPlayerBankerStat);
            encodeBuffer.write(Uint16Array, this.wQueuePos);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.bPlayerBankerStat = decodeBuffer.read(Uint8Array, 1);
            this.wQueuePos = decodeBuffer.read(Uint16Array, 1);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_BULL_UPDATE_BANKER_STAT_SC = CMD_BULL_UPDATE_BANKER_STAT_SC;
    class CMD_BULL_ROUND_START_SC {
        constructor() {
            this.dwRoundID = 0; //对应的相关转数序号,目前仅用于调试方便 
            this.bTabStatus = 0; //当前状态,参见BULL_SCENE_STATUS_IDLE等系列枚举 
            this.wLeftBetTime = 0; //当前对应剩余可下注秒数 
        }
        messageName() { return "CMD_BULL_ROUND_START"; }
        messageValue() { return CSProto.CMD_BULL_ROUND_START; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.write(Uint32Array, this.dwRoundID);
            encodeBuffer.write(Uint8Array, this.bTabStatus);
            encodeBuffer.write(Uint8Array, this.wLeftBetTime);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.dwRoundID = decodeBuffer.read(Uint32Array, 1);
            this.bTabStatus = decodeBuffer.read(Uint8Array, 1);
            this.wLeftBetTime = decodeBuffer.read(Uint8Array, 1);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_BULL_ROUND_START_SC = CMD_BULL_ROUND_START_SC;
    class CMD_BULL_REFRESH_SELF_BET_SC {
        constructor() {
            this.dwBetTotalGold = 0; //总下注币数 
            this.astBetDetail = new Array(); //当前对应当转的己下注列表,若已经下注则有数据 
            this.dwRoundID = 0; //对应的相关转数序号 
        }
        messageName() { return "CMD_BULL_REFRESH_SELF_BET"; }
        messageValue() { return CSProto.CMD_BULL_REFRESH_SELF_BET; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.write(Uint32Array, this.dwBetTotalGold);
            var astBetDetailSize = this.astBetDetail.length > CSProto.BULL_SEAT_BANKER ? CSProto.BULL_SEAT_BANKER : this.astBetDetail.length;
            encodeBuffer.write(Uint16Array, astBetDetailSize);
            this.astBetDetail.length = astBetDetailSize;
            for (var i = 0; i < astBetDetailSize; i++) {
                encodeBuffer.skip(this.astBetDetail[i].encode(encodeBuffer.buffer(), encodeBuffer.offset()));
            }
            encodeBuffer.write(Uint32Array, this.dwRoundID);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.dwBetTotalGold = decodeBuffer.read(Uint32Array, 1);
            var astBetDetailSize = decodeBuffer.read(Uint16Array, 1);
            this.astBetDetail = new Array(astBetDetailSize);
            for (var i = 0; i < astBetDetailSize; i++) {
                this.astBetDetail[i] = new PROPERTY();
                decodeBuffer.skip(this.astBetDetail[i].decode(decodeBuffer.buffer(), decodeBuffer.offset()));
            }
            this.dwRoundID = decodeBuffer.read(Uint32Array, 1);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_BULL_REFRESH_SELF_BET_SC = CMD_BULL_REFRESH_SELF_BET_SC;
    class OptionPara {
        constructor() {
            this.dwParaKey = 0; //参数key的定义参见OPTION_PARA_KEY_SVR_NOTIFYURL等的定义 
            this.szParaVal = ""; //可选参数的value 
        }
        messageName() { return "OptionPara"; }
        messageValue() { return 0; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.write(Uint32Array, this.dwParaKey);
            encodeBuffer.writeString(this.szParaVal, 3072);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.dwParaKey = decodeBuffer.read(Uint32Array, 1);
            this.szParaVal = decodeBuffer.readString(3072);
            return decodeBuffer.length();
        }
    }
    CSProto.OptionPara = OptionPara;
    class CMD_PAYCENTER_GEN_ORDER_CS {
        constructor() {
            this.dwChargePlatform = 0; //支付平台类型参见CHARGE_PLATFORM_PAYCENTER_MM等定义 
            this.szAppID = ""; //相应的应用ID 
            this.dwInnerGoodsID = 0; //游戏内部支付商品ID 
            this.szPayViewChannel = ""; //支付来源于哪个显示UI 
            this.astOptionPara = new Array(); //可选参数列表 
        }
        messageName() { return "CMD_PAYCENTER_GEN_ORDER"; }
        messageValue() { return CSProto.CMD_PAYCENTER_GEN_ORDER; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.write(Uint32Array, this.dwChargePlatform);
            encodeBuffer.writeString(this.szAppID, 512);
            encodeBuffer.write(Uint32Array, this.dwInnerGoodsID);
            encodeBuffer.writeString(this.szPayViewChannel, CSProto.MAX_PAY_VIEWCHANNEL_LEN);
            var astOptionParaSize = this.astOptionPara.length > 10 ? 10 : this.astOptionPara.length;
            encodeBuffer.write(Uint16Array, astOptionParaSize);
            this.astOptionPara.length = astOptionParaSize;
            for (var i = 0; i < astOptionParaSize; i++) {
                encodeBuffer.skip(this.astOptionPara[i].encode(encodeBuffer.buffer(), encodeBuffer.offset()));
            }
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.dwChargePlatform = decodeBuffer.read(Uint32Array, 1);
            this.szAppID = decodeBuffer.readString(512);
            this.dwInnerGoodsID = decodeBuffer.read(Uint32Array, 1);
            this.szPayViewChannel = decodeBuffer.readString(CSProto.MAX_PAY_VIEWCHANNEL_LEN);
            var astOptionParaSize = decodeBuffer.read(Uint16Array, 1);
            this.astOptionPara = new Array(astOptionParaSize);
            for (var i = 0; i < astOptionParaSize; i++) {
                this.astOptionPara[i] = new OptionPara();
                decodeBuffer.skip(this.astOptionPara[i].decode(decodeBuffer.buffer(), decodeBuffer.offset()));
            }
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_PAYCENTER_GEN_ORDER_CS = CMD_PAYCENTER_GEN_ORDER_CS;
    class CMD_PAYCENTER_GEN_ORDER_SC {
        constructor() {
            this.dwChargePlatform = 0; //支付平台类型参见CHARGE_PLATFORM_HAIMA等定义 
            this.szAppID = ""; //appid,这个是直接将上行的appid返回,真实的第三方平台里配置的appid通过可选参数下行 
            this.szPayCode = ""; //支付编码 
            this.szInnerOrderID = ""; //游戏内部订单编号 
            this.szPrivateInfo = ""; //客户端发起支付时传递的私有信息 
            this.astOptionPara = new Array(); //可选参数列表 
            this.dwInnerGoodsID = 0; //游戏内部支付商品ID 
            this.dwCostCurrencyFen = 0; //单位是分配置的paycode对应的消费金额单位是分 
            this.bGenOrderRet = 0; //0成功其他失败具体的错误原因可能通过错误提示下发 
        }
        messageName() { return "CMD_PAYCENTER_GEN_ORDER"; }
        messageValue() { return CSProto.CMD_PAYCENTER_GEN_ORDER; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.write(Uint32Array, this.dwChargePlatform);
            encodeBuffer.writeString(this.szAppID, 512);
            encodeBuffer.writeString(this.szPayCode, CSProto.MAX_PAY_PAYCODELEN);
            encodeBuffer.writeString(this.szInnerOrderID, CSProto.MAX_PAY_COMM_SELFORDER_LEN);
            encodeBuffer.writeString(this.szPrivateInfo, CSProto.MAX_PAY_COMM_PRIVATEINFO_LEN);
            var astOptionParaSize = this.astOptionPara.length > 10 ? 10 : this.astOptionPara.length;
            encodeBuffer.write(Uint16Array, astOptionParaSize);
            this.astOptionPara.length = astOptionParaSize;
            for (var i = 0; i < astOptionParaSize; i++) {
                encodeBuffer.skip(this.astOptionPara[i].encode(encodeBuffer.buffer(), encodeBuffer.offset()));
            }
            encodeBuffer.write(Uint32Array, this.dwInnerGoodsID);
            encodeBuffer.write(Uint32Array, this.dwCostCurrencyFen);
            if (23 < CSProto.Version) {
                encodeBuffer.write(Uint8Array, this.bGenOrderRet);
            }
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.dwChargePlatform = decodeBuffer.read(Uint32Array, 1);
            this.szAppID = decodeBuffer.readString(512);
            this.szPayCode = decodeBuffer.readString(CSProto.MAX_PAY_PAYCODELEN);
            this.szInnerOrderID = decodeBuffer.readString(CSProto.MAX_PAY_COMM_SELFORDER_LEN);
            this.szPrivateInfo = decodeBuffer.readString(CSProto.MAX_PAY_COMM_PRIVATEINFO_LEN);
            var astOptionParaSize = decodeBuffer.read(Uint16Array, 1);
            this.astOptionPara = new Array(astOptionParaSize);
            for (var i = 0; i < astOptionParaSize; i++) {
                this.astOptionPara[i] = new OptionPara();
                decodeBuffer.skip(this.astOptionPara[i].decode(decodeBuffer.buffer(), decodeBuffer.offset()));
            }
            this.dwInnerGoodsID = decodeBuffer.read(Uint32Array, 1);
            this.dwCostCurrencyFen = decodeBuffer.read(Uint32Array, 1);
            if (23 < CSProto.Version) {
                this.bGenOrderRet = decodeBuffer.read(Uint8Array, 1);
            }
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_PAYCENTER_GEN_ORDER_SC = CMD_PAYCENTER_GEN_ORDER_SC;
    class CMD_HIDDEN_CHARGE_PLATFORM_SC {
        constructor() {
            this.adwChargePlatforms = new Array(); //支付平台数组，对应CHARGE_PLATFORM_WEIPAI等值 
        }
        messageName() { return "CMD_HIDDEN_CHARGE_PLATFORM"; }
        messageValue() { return CSProto.CMD_HIDDEN_CHARGE_PLATFORM; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            var adwChargePlatformsSize = this.adwChargePlatforms.length > 256 ? 256 : this.adwChargePlatforms.length;
            encodeBuffer.write(Uint16Array, adwChargePlatformsSize);
            this.adwChargePlatforms.length = adwChargePlatformsSize;
            encodeBuffer.write(Uint32Array, this.adwChargePlatforms);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            var adwChargePlatformsSize = decodeBuffer.read(Uint16Array, 1);
            this.adwChargePlatforms = new Array(adwChargePlatformsSize);
            this.adwChargePlatforms = decodeBuffer.read(Uint32Array, adwChargePlatformsSize);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_HIDDEN_CHARGE_PLATFORM_SC = CMD_HIDDEN_CHARGE_PLATFORM_SC;
    class CMD_PAYCENTER_NOTIFY_SERVER_SUCC_CS {
        constructor() {
            this.dwChargePlatform = 0; //支付平台类型参见CHARGE_PLATFORM_HAIMA等定义 
            this.szAppID = ""; //appid 
            this.dwInnerGoodsID = 0; //游戏内部支付商品ID 
            this.szOuterOrderID = ""; //第三方支付平台生成的外部订单号若没有则统一填充内部订单号 
            this.szInnerOrderID = ""; //游戏内部订单编号 
        }
        messageName() { return "CMD_PAYCENTER_NOTIFY_SERVER_SUCC"; }
        messageValue() { return CSProto.CMD_PAYCENTER_NOTIFY_SERVER_SUCC; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.write(Uint32Array, this.dwChargePlatform);
            encodeBuffer.writeString(this.szAppID, 512);
            encodeBuffer.write(Uint32Array, this.dwInnerGoodsID);
            encodeBuffer.writeString(this.szOuterOrderID, 512);
            encodeBuffer.writeString(this.szInnerOrderID, CSProto.MAX_PAY_COMM_SELFORDER_LEN);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.dwChargePlatform = decodeBuffer.read(Uint32Array, 1);
            this.szAppID = decodeBuffer.readString(512);
            this.dwInnerGoodsID = decodeBuffer.read(Uint32Array, 1);
            this.szOuterOrderID = decodeBuffer.readString(512);
            this.szInnerOrderID = decodeBuffer.readString(CSProto.MAX_PAY_COMM_SELFORDER_LEN);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_PAYCENTER_NOTIFY_SERVER_SUCC_CS = CMD_PAYCENTER_NOTIFY_SERVER_SUCC_CS;
    class CMD_PAYCENTER_NOTIFY_CLIENT_SUCC_SC {
        constructor() {
            this.szOuterOrderID = ""; //第三方支付平台生成的外部订单号若没有则统一填充内部订单号 
            this.szInnerOrderID = ""; //返回的游戏内部订单编号 
            this.bGotMoneyType = 0; //获得的游戏内货币类型参见MONEY_TYPE_GOLD等枚举 
            this.dwBaseGotMoney = 0; //购买获得的基础货币 
            this.dwDayFirstGotMoney = 0; //今日首充 
            this.dwVipExtraGotMoney = 0; //VIP赠送 
            this.dwCurChargeRank = 0; //当前充值榜排名,为0时不在排行榜上 
            this.llTomorrowRankAward = 0; //预计明日充值榜排名奖励 
            this.llAllTotalGotMoney = 0; //总充值获得货币 
            this.dwCostCurrencyFen = 0; //单位是分玩家真实花费的人民币目前仅当预付卡充值时会发生与paycode不一致的情况 
        }
        messageName() { return "CMD_PAYCENTER_NOTIFY_CLIENT_SUCC"; }
        messageValue() { return CSProto.CMD_PAYCENTER_NOTIFY_CLIENT_SUCC; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.writeString(this.szOuterOrderID, 512);
            encodeBuffer.writeString(this.szInnerOrderID, CSProto.MAX_PAY_COMM_SELFORDER_LEN);
            encodeBuffer.write(Uint8Array, this.bGotMoneyType);
            encodeBuffer.write(Uint32Array, this.dwBaseGotMoney);
            encodeBuffer.write(Uint32Array, this.dwDayFirstGotMoney);
            encodeBuffer.write(Uint32Array, this.dwVipExtraGotMoney);
            encodeBuffer.write(Uint32Array, this.dwCurChargeRank);
            encodeBuffer.write(Float64Array, this.llTomorrowRankAward);
            encodeBuffer.write(Float64Array, this.llAllTotalGotMoney);
            if (21 < CSProto.Version) {
                encodeBuffer.write(Uint32Array, this.dwCostCurrencyFen);
            }
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.szOuterOrderID = decodeBuffer.readString(512);
            this.szInnerOrderID = decodeBuffer.readString(CSProto.MAX_PAY_COMM_SELFORDER_LEN);
            this.bGotMoneyType = decodeBuffer.read(Uint8Array, 1);
            this.dwBaseGotMoney = decodeBuffer.read(Uint32Array, 1);
            this.dwDayFirstGotMoney = decodeBuffer.read(Uint32Array, 1);
            this.dwVipExtraGotMoney = decodeBuffer.read(Uint32Array, 1);
            this.dwCurChargeRank = decodeBuffer.read(Uint32Array, 1);
            this.llTomorrowRankAward = decodeBuffer.read(Float64Array, 1);
            this.llAllTotalGotMoney = decodeBuffer.read(Float64Array, 1);
            if (21 < CSProto.Version) {
                this.dwCostCurrencyFen = decodeBuffer.read(Uint32Array, 1);
            }
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_PAYCENTER_NOTIFY_CLIENT_SUCC_SC = CMD_PAYCENTER_NOTIFY_CLIENT_SUCC_SC;
    class CMD_PAYCENTER_PREPAID_CARD_DOPAY_CS {
        constructor() {
            this.bPrepayCardType = 0; //进行支付的卡类型参见PREPAID_CARD_TYPE_CHINAMOBILE_COMMON等枚举 
            this.dwSelectCardValFen = 0; //选择的卡面额单位是分 
            this.szCardNum = ""; //卡号加密后上传 
            this.szCardPwd = ""; //卡密码加密后上传 
            this.szInnerOrderID = ""; //游戏内部订单编号 
            this.dwInnerGoodsID = 0; //游戏内部支付商品ID 
            this.szPrivateInfo = ""; //客户端发起支付时传递的私有信息 
        }
        messageName() { return "CMD_PAYCENTER_PREPAID_CARD_DOPAY"; }
        messageValue() { return CSProto.CMD_PAYCENTER_PREPAID_CARD_DOPAY; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.write(Uint8Array, this.bPrepayCardType);
            encodeBuffer.write(Uint32Array, this.dwSelectCardValFen);
            encodeBuffer.writeString(this.szCardNum, 128);
            encodeBuffer.writeString(this.szCardPwd, 128);
            encodeBuffer.writeString(this.szInnerOrderID, CSProto.MAX_PAY_COMM_SELFORDER_LEN);
            encodeBuffer.write(Uint32Array, this.dwInnerGoodsID);
            encodeBuffer.writeString(this.szPrivateInfo, CSProto.MAX_PAY_COMM_PRIVATEINFO_LEN);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.bPrepayCardType = decodeBuffer.read(Uint8Array, 1);
            this.dwSelectCardValFen = decodeBuffer.read(Uint32Array, 1);
            this.szCardNum = decodeBuffer.readString(128);
            this.szCardPwd = decodeBuffer.readString(128);
            this.szInnerOrderID = decodeBuffer.readString(CSProto.MAX_PAY_COMM_SELFORDER_LEN);
            this.dwInnerGoodsID = decodeBuffer.read(Uint32Array, 1);
            this.szPrivateInfo = decodeBuffer.readString(CSProto.MAX_PAY_COMM_PRIVATEINFO_LEN);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_PAYCENTER_PREPAID_CARD_DOPAY_CS = CMD_PAYCENTER_PREPAID_CARD_DOPAY_CS;
    class CMD_PAYCENTER_PREPAID_CARD_DOPAY_SC {
        constructor() {
            this.bDoPayResult = 0; //0成功其他失败具体的错误原因可能通过错误提示下发 
        }
        messageName() { return "CMD_PAYCENTER_PREPAID_CARD_DOPAY"; }
        messageValue() { return CSProto.CMD_PAYCENTER_PREPAID_CARD_DOPAY; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.write(Uint8Array, this.bDoPayResult);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.bDoPayResult = decodeBuffer.read(Uint8Array, 1);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_PAYCENTER_PREPAID_CARD_DOPAY_SC = CMD_PAYCENTER_PREPAID_CARD_DOPAY_SC;
    class CMD_APPSTORE_PAYRECEPIT_VERIFY_CS {
        constructor() {
            this.szInnerOrderID = ""; //游戏内部订单编号 
            this.dwInnerGoodsID = 0; //游戏内部支付商品ID 
            this.szPrivateInfo = ""; //客户端发起支付时传递的私有信息 
            this.szReceiptData = ""; //支付成功返回的receipt数据 
            this.szAppID = ""; //相应的应用ID 
        }
        messageName() { return "CMD_APPSTORE_PAYRECEPIT_VERIFY"; }
        messageValue() { return CSProto.CMD_APPSTORE_PAYRECEPIT_VERIFY; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.writeString(this.szInnerOrderID, CSProto.MAX_PAY_COMM_SELFORDER_LEN);
            encodeBuffer.write(Uint32Array, this.dwInnerGoodsID);
            encodeBuffer.writeString(this.szPrivateInfo, CSProto.MAX_PAY_COMM_PRIVATEINFO_LEN);
            encodeBuffer.writeString(this.szReceiptData, 4096);
            if (26 < CSProto.Version) {
                encodeBuffer.writeString(this.szAppID, 512);
            }
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.szInnerOrderID = decodeBuffer.readString(CSProto.MAX_PAY_COMM_SELFORDER_LEN);
            this.dwInnerGoodsID = decodeBuffer.read(Uint32Array, 1);
            this.szPrivateInfo = decodeBuffer.readString(CSProto.MAX_PAY_COMM_PRIVATEINFO_LEN);
            this.szReceiptData = decodeBuffer.readString(4096);
            if (26 < CSProto.Version) {
                this.szAppID = decodeBuffer.readString(512);
            }
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_APPSTORE_PAYRECEPIT_VERIFY_CS = CMD_APPSTORE_PAYRECEPIT_VERIFY_CS;
    class CMD_APPSTORE_PAYRECEPIT_VERIFY_SC {
        constructor() {
            this.szInnerOrderID = ""; //游戏内部订单编号 
            this.bDoVerifyResult = 0; //0成功其他失败具体的错误原因可能通过错误提示下发 
        }
        messageName() { return "CMD_APPSTORE_PAYRECEPIT_VERIFY"; }
        messageValue() { return CSProto.CMD_APPSTORE_PAYRECEPIT_VERIFY; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.writeString(this.szInnerOrderID, CSProto.MAX_PAY_COMM_SELFORDER_LEN);
            encodeBuffer.write(Uint8Array, this.bDoVerifyResult);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.szInnerOrderID = decodeBuffer.readString(CSProto.MAX_PAY_COMM_SELFORDER_LEN);
            this.bDoVerifyResult = decodeBuffer.read(Uint8Array, 1);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_APPSTORE_PAYRECEPIT_VERIFY_SC = CMD_APPSTORE_PAYRECEPIT_VERIFY_SC;
    class MineHeap {
        constructor() {
            this.dwIndexTag = 0; //矿堆索引标记值单局游戏内的唯一随机值 
            this.bMineHeapType = 0; //区分金矿还是宝石参见GOLDMINE_HEAPTYPE_GOLD等枚举 
            this.bModleViewType = 0; //显示模型即对应了1号到6号金矿的编号或者当为宝石袋时1号到3号宝石袋 
            this.bMineHeapStat = 0; //0可以抓取1己经抓到过了 
            this.dwRelatePoints = 0; //对应抓取成功后可获得的积分 
        }
        messageName() { return "MineHeap"; }
        messageValue() { return 0; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.write(Uint32Array, this.dwIndexTag);
            encodeBuffer.write(Uint8Array, this.bMineHeapType);
            encodeBuffer.write(Uint8Array, this.bModleViewType);
            encodeBuffer.write(Uint8Array, this.bMineHeapStat);
            encodeBuffer.write(Uint32Array, this.dwRelatePoints);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.dwIndexTag = decodeBuffer.read(Uint32Array, 1);
            this.bMineHeapType = decodeBuffer.read(Uint8Array, 1);
            this.bModleViewType = decodeBuffer.read(Uint8Array, 1);
            this.bMineHeapStat = decodeBuffer.read(Uint8Array, 1);
            this.dwRelatePoints = decodeBuffer.read(Uint32Array, 1);
            return decodeBuffer.length();
        }
    }
    CSProto.MineHeap = MineHeap;
    class GoldMinerGameData {
        constructor() {
            this.dwTotalGotPoints = 0; //当前己获取的积分 
            this.bLeftGrabCount = 0; //剩余可抓取次数 
            this.astMineHeapList = new Array(); //当局游戏可抓矿石列表 
        }
        messageName() { return "GoldMinerGameData"; }
        messageValue() { return 0; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.write(Uint32Array, this.dwTotalGotPoints);
            encodeBuffer.write(Uint8Array, this.bLeftGrabCount);
            var astMineHeapListSize = this.astMineHeapList.length > 5 ? 5 : this.astMineHeapList.length;
            encodeBuffer.write(Uint16Array, astMineHeapListSize);
            this.astMineHeapList.length = astMineHeapListSize;
            for (var i = 0; i < astMineHeapListSize; i++) {
                encodeBuffer.skip(this.astMineHeapList[i].encode(encodeBuffer.buffer(), encodeBuffer.offset()));
            }
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.dwTotalGotPoints = decodeBuffer.read(Uint32Array, 1);
            this.bLeftGrabCount = decodeBuffer.read(Uint8Array, 1);
            var astMineHeapListSize = decodeBuffer.read(Uint16Array, 1);
            this.astMineHeapList = new Array(astMineHeapListSize);
            for (var i = 0; i < astMineHeapListSize; i++) {
                this.astMineHeapList[i] = new MineHeap();
                decodeBuffer.skip(this.astMineHeapList[i].decode(decodeBuffer.buffer(), decodeBuffer.offset()));
            }
            return decodeBuffer.length();
        }
    }
    CSProto.GoldMinerGameData = GoldMinerGameData;
    class CMD_GOLDMINER_ENTERDATA_SC {
        constructor() {
            this.wMapID = 0; //对应地图ID,目前无用 
            this.dwSceneID = 0; //对应的场景ID 
            this.dwTableID = 0; //对应的桌台ID 
            this.stGameData = new GoldMinerGameData(); //当局游戏相关当前数据 
        }
        messageName() { return "CMD_GOLDMINER_ENTERDATA"; }
        messageValue() { return CSProto.CMD_GOLDMINER_ENTERDATA; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.write(Uint16Array, this.wMapID);
            encodeBuffer.write(Uint32Array, this.dwSceneID);
            encodeBuffer.write(Uint32Array, this.dwTableID);
            encodeBuffer.skip(this.stGameData.encode(encodeBuffer.buffer(), encodeBuffer.offset()));
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.wMapID = decodeBuffer.read(Uint16Array, 1);
            this.dwSceneID = decodeBuffer.read(Uint32Array, 1);
            this.dwTableID = decodeBuffer.read(Uint32Array, 1);
            decodeBuffer.skip(this.stGameData.decode(decodeBuffer.buffer(), decodeBuffer.offset()));
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_GOLDMINER_ENTERDATA_SC = CMD_GOLDMINER_ENTERDATA_SC;
    class CMD_GOLDMINER_GAME_AGAIN_SC {
        constructor() {
            this.dwSceneID = 0; //对应的场景ID 
            this.stGameData = new GoldMinerGameData(); //新的一局游戏当前数据 
        }
        messageName() { return "CMD_GOLDMINER_GAME_AGAIN"; }
        messageValue() { return CSProto.CMD_GOLDMINER_GAME_AGAIN; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.write(Uint32Array, this.dwSceneID);
            encodeBuffer.skip(this.stGameData.encode(encodeBuffer.buffer(), encodeBuffer.offset()));
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.dwSceneID = decodeBuffer.read(Uint32Array, 1);
            decodeBuffer.skip(this.stGameData.decode(decodeBuffer.buffer(), decodeBuffer.offset()));
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_GOLDMINER_GAME_AGAIN_SC = CMD_GOLDMINER_GAME_AGAIN_SC;
    class CMD_GOLDMINER_ONEGRAB_RET_CS {
        constructor() {
            this.dwIndexTag = 0; //抓取到的矿堆索引标记值单局游戏内的唯一随机值 
        }
        messageName() { return "CMD_GOLDMINER_ONEGRAB_RET"; }
        messageValue() { return CSProto.CMD_GOLDMINER_ONEGRAB_RET; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.write(Uint32Array, this.dwIndexTag);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.dwIndexTag = decodeBuffer.read(Uint32Array, 1);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_GOLDMINER_ONEGRAB_RET_CS = CMD_GOLDMINER_ONEGRAB_RET_CS;
    class CMD_GOLDMINER_ONEGRAB_RET_SC {
        constructor() {
            this.dwSceneID = 0; //对应的场景ID 
            this.stGameData = new GoldMinerGameData(); //游戏当前数据 
            this.bIsGameEnd = 0; //0未结束1已结束 
            this.dwAwardGold = 0; //当游戏是己结束对应获得的奖励金币数 
        }
        messageName() { return "CMD_GOLDMINER_ONEGRAB_RET"; }
        messageValue() { return CSProto.CMD_GOLDMINER_ONEGRAB_RET; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.write(Uint32Array, this.dwSceneID);
            encodeBuffer.skip(this.stGameData.encode(encodeBuffer.buffer(), encodeBuffer.offset()));
            encodeBuffer.write(Uint8Array, this.bIsGameEnd);
            encodeBuffer.write(Uint32Array, this.dwAwardGold);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.dwSceneID = decodeBuffer.read(Uint32Array, 1);
            decodeBuffer.skip(this.stGameData.decode(decodeBuffer.buffer(), decodeBuffer.offset()));
            this.bIsGameEnd = decodeBuffer.read(Uint8Array, 1);
            this.dwAwardGold = decodeBuffer.read(Uint32Array, 1);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_GOLDMINER_ONEGRAB_RET_SC = CMD_GOLDMINER_ONEGRAB_RET_SC;
    class PhraseWord {
        constructor() {
            this.szWordVal = ""; //一个汉字图片标识不包括后缀与配置文件中的值一致 
        }
        messageName() { return "PhraseWord"; }
        messageValue() { return 0; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.writeString(this.szWordVal, 64);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.szWordVal = decodeBuffer.readString(64);
            return decodeBuffer.length();
        }
    }
    CSProto.PhraseWord = PhraseWord;
    class PhraseGameData {
        constructor() {
            this.szPicBasePath = ""; //图片基础路径不包括工具生成的图片分目录的部分 
            this.dwAwardGold = 0; //完成成语任务可获得的奖励金币数 
            this.bDayTotalRefreshTimes = 0; //当天可刷新成语次数 
            this.bLeftRefreshTimes = 0; //剩余可刷新成语次数 
            this.astRetPhrase = new Array(); //需要选择的成语列表 
            this.astSelWordsList = new Array(); //待选成语列表 
        }
        messageName() { return "PhraseGameData"; }
        messageValue() { return 0; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.writeString(this.szPicBasePath, 128);
            encodeBuffer.write(Uint32Array, this.dwAwardGold);
            encodeBuffer.write(Uint8Array, this.bDayTotalRefreshTimes);
            encodeBuffer.write(Uint8Array, this.bLeftRefreshTimes);
            var astRetPhraseSize = this.astRetPhrase.length > 4 ? 4 : this.astRetPhrase.length;
            encodeBuffer.write(Uint16Array, astRetPhraseSize);
            this.astRetPhrase.length = astRetPhraseSize;
            for (var i = 0; i < astRetPhraseSize; i++) {
                encodeBuffer.skip(this.astRetPhrase[i].encode(encodeBuffer.buffer(), encodeBuffer.offset()));
            }
            var astSelWordsListSize = this.astSelWordsList.length > 8 ? 8 : this.astSelWordsList.length;
            encodeBuffer.write(Uint16Array, astSelWordsListSize);
            this.astSelWordsList.length = astSelWordsListSize;
            for (var i = 0; i < astSelWordsListSize; i++) {
                encodeBuffer.skip(this.astSelWordsList[i].encode(encodeBuffer.buffer(), encodeBuffer.offset()));
            }
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.szPicBasePath = decodeBuffer.readString(128);
            this.dwAwardGold = decodeBuffer.read(Uint32Array, 1);
            this.bDayTotalRefreshTimes = decodeBuffer.read(Uint8Array, 1);
            this.bLeftRefreshTimes = decodeBuffer.read(Uint8Array, 1);
            var astRetPhraseSize = decodeBuffer.read(Uint16Array, 1);
            this.astRetPhrase = new Array(astRetPhraseSize);
            for (var i = 0; i < astRetPhraseSize; i++) {
                this.astRetPhrase[i] = new PhraseWord();
                decodeBuffer.skip(this.astRetPhrase[i].decode(decodeBuffer.buffer(), decodeBuffer.offset()));
            }
            var astSelWordsListSize = decodeBuffer.read(Uint16Array, 1);
            this.astSelWordsList = new Array(astSelWordsListSize);
            for (var i = 0; i < astSelWordsListSize; i++) {
                this.astSelWordsList[i] = new PhraseWord();
                decodeBuffer.skip(this.astSelWordsList[i].decode(decodeBuffer.buffer(), decodeBuffer.offset()));
            }
            return decodeBuffer.length();
        }
    }
    CSProto.PhraseGameData = PhraseGameData;
    class CMD_CHINESEPHRASE_DO_GAME_SC {
        constructor() {
            this.bTipsCode = 0; //对应的逻辑错误码参见PHRASE_DOGAME_TIPSCODE_CANDOTASK等定义 
            this.stGameData = new PhraseGameData(); //游戏当前数据仅当错误码为需要进行游戏时有效 
        }
        messageName() { return "CMD_CHINESEPHRASE_DO_GAME"; }
        messageValue() { return CSProto.CMD_CHINESEPHRASE_DO_GAME; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.write(Uint8Array, this.bTipsCode);
            if (CSProto.PHRASE_DOGAME_TIPSCODE_CANDOTASK == this.bTipsCode) {
                encodeBuffer.skip(this.stGameData.encode(encodeBuffer.buffer(), encodeBuffer.offset()));
            }
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.bTipsCode = decodeBuffer.read(Uint8Array, 1);
            if (CSProto.PHRASE_DOGAME_TIPSCODE_CANDOTASK == this.bTipsCode) {
                decodeBuffer.skip(this.stGameData.decode(decodeBuffer.buffer(), decodeBuffer.offset()));
            }
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_CHINESEPHRASE_DO_GAME_SC = CMD_CHINESEPHRASE_DO_GAME_SC;
    class CMD_CHINESEPHRASE_REFRESH_SC {
        constructor() {
            this.bTipsCode = 0; //对应的逻辑错误码参见PHRASE_DOGAME_TIPSCODE_CANDOTASK等定义 
            this.stGameData = new PhraseGameData(); //新的一局游戏数据 
        }
        messageName() { return "CMD_CHINESEPHRASE_REFRESH"; }
        messageValue() { return CSProto.CMD_CHINESEPHRASE_REFRESH; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.write(Uint8Array, this.bTipsCode);
            encodeBuffer.skip(this.stGameData.encode(encodeBuffer.buffer(), encodeBuffer.offset()));
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.bTipsCode = decodeBuffer.read(Uint8Array, 1);
            decodeBuffer.skip(this.stGameData.decode(decodeBuffer.buffer(), decodeBuffer.offset()));
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_CHINESEPHRASE_REFRESH_SC = CMD_CHINESEPHRASE_REFRESH_SC;
    class CMD_CHINESEPHRASE_FINALCOMMIT_CS {
        constructor() {
            this.szSelWordListKey = ""; //选择的图片名顺序排列后的32位md5值并异或之 
        }
        messageName() { return "CMD_CHINESEPHRASE_FINALCOMMIT"; }
        messageValue() { return CSProto.CMD_CHINESEPHRASE_FINALCOMMIT; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.writeString(this.szSelWordListKey, 64);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.szSelWordListKey = decodeBuffer.readString(64);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_CHINESEPHRASE_FINALCOMMIT_CS = CMD_CHINESEPHRASE_FINALCOMMIT_CS;
    class CMD_CHINESEPHRASE_FINALCOMMIT_SC {
        constructor() {
            this.bTipsCode = 0; //对应的逻辑错误码参见PHRASE_DOGAME_TIPSCODE_VERIFYFAIL等定义 
        }
        messageName() { return "CMD_CHINESEPHRASE_FINALCOMMIT"; }
        messageValue() { return CSProto.CMD_CHINESEPHRASE_FINALCOMMIT; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.write(Uint8Array, this.bTipsCode);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.bTipsCode = decodeBuffer.read(Uint8Array, 1);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_CHINESEPHRASE_FINALCOMMIT_SC = CMD_CHINESEPHRASE_FINALCOMMIT_SC;
    class CMD_CHINESEPHRASE_PICNOTFOUND_CS {
        constructor() {
            this.iRelateClientErrCode = 0; //客户端相关错误码 
            this.stNotFoundWordsPic = new PhraseWord(); //加载失败的图片名 
        }
        messageName() { return "CMD_CHINESEPHRASE_PICNOTFOUND"; }
        messageValue() { return CSProto.CMD_CHINESEPHRASE_PICNOTFOUND; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.write(Int32Array, this.iRelateClientErrCode);
            encodeBuffer.skip(this.stNotFoundWordsPic.encode(encodeBuffer.buffer(), encodeBuffer.offset()));
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.iRelateClientErrCode = decodeBuffer.read(Int32Array, 1);
            decodeBuffer.skip(this.stNotFoundWordsPic.decode(decodeBuffer.buffer(), decodeBuffer.offset()));
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_CHINESEPHRASE_PICNOTFOUND_CS = CMD_CHINESEPHRASE_PICNOTFOUND_CS;
    class ButtonDef {
        constructor() {
            this.szButDesc = ""; //按钮上的文字 
            this.szRelateHyper = ""; //为空时点击直接关闭弹出框,按钮对应的超链接参数格式为URL标准格式:命令字##参数##参数2 
            this.bIfQuitAfterUpToSvr = 0; //如果对应超链接为服务器处理当上行到服务器后是否需要直接关闭弹出框,0不关1要关 
        }
        messageName() { return "ButtonDef"; }
        messageValue() { return 0; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.writeString(this.szButDesc, 64);
            encodeBuffer.writeString(this.szRelateHyper, 256);
            encodeBuffer.write(Uint8Array, this.bIfQuitAfterUpToSvr);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.szButDesc = decodeBuffer.readString(64);
            this.szRelateHyper = decodeBuffer.readString(256);
            this.bIfQuitAfterUpToSvr = decodeBuffer.read(Uint8Array, 1);
            return decodeBuffer.length();
        }
    }
    CSProto.ButtonDef = ButtonDef;
    class CMD_COMM_HYPER_MSGBOX_SC {
        constructor() {
            this.bMsgBoxType = 0; //对话框显示类型,参见HYPER_MSGBOX_TYPE等定义 
            this.dwTimeoutSeconds = 0; //大于0时为倒计时自动关闭秒数否则不自动关闭 
            this.szTitle = ""; //标题 
            this.szContent = ""; //内容支持富文本并需要根据真实长度自动调整对话框大小 
            this.astButtonList = new Array(); //按钮列表需要自行按照按钮个数自动排版 
        }
        messageName() { return "CMD_COMM_HYPER_MSGBOX"; }
        messageValue() { return CSProto.CMD_COMM_HYPER_MSGBOX; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.write(Uint8Array, this.bMsgBoxType);
            encodeBuffer.write(Uint32Array, this.dwTimeoutSeconds);
            encodeBuffer.writeString(this.szTitle, 512);
            encodeBuffer.writeString(this.szContent, 4096);
            var astButtonListSize = this.astButtonList.length > 10 ? 10 : this.astButtonList.length;
            encodeBuffer.write(Uint16Array, astButtonListSize);
            this.astButtonList.length = astButtonListSize;
            for (var i = 0; i < astButtonListSize; i++) {
                encodeBuffer.skip(this.astButtonList[i].encode(encodeBuffer.buffer(), encodeBuffer.offset()));
            }
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.bMsgBoxType = decodeBuffer.read(Uint8Array, 1);
            this.dwTimeoutSeconds = decodeBuffer.read(Uint32Array, 1);
            this.szTitle = decodeBuffer.readString(512);
            this.szContent = decodeBuffer.readString(4096);
            var astButtonListSize = decodeBuffer.read(Uint16Array, 1);
            this.astButtonList = new Array(astButtonListSize);
            for (var i = 0; i < astButtonListSize; i++) {
                this.astButtonList[i] = new ButtonDef();
                decodeBuffer.skip(this.astButtonList[i].decode(decodeBuffer.buffer(), decodeBuffer.offset()));
            }
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_COMM_HYPER_MSGBOX_SC = CMD_COMM_HYPER_MSGBOX_SC;
    class CMD_CLICK_HYPER_NOTICE_CS {
        constructor() {
            this.szRelateHyper = ""; //对应的超链接参数格式为URL标准格式:命令字##参数##参数2 
        }
        messageName() { return "CMD_CLICK_HYPER_NOTICE"; }
        messageValue() { return CSProto.CMD_CLICK_HYPER_NOTICE; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.writeString(this.szRelateHyper, 256);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.szRelateHyper = decodeBuffer.readString(256);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_CLICK_HYPER_NOTICE_CS = CMD_CLICK_HYPER_NOTICE_CS;
    class CMD_CLICK_HYPER_NOTICE_SC {
        constructor() {
            this.bRetCode = 0; //0成功其他失败 
        }
        messageName() { return "CMD_CLICK_HYPER_NOTICE"; }
        messageValue() { return CSProto.CMD_CLICK_HYPER_NOTICE; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.write(Uint8Array, this.bRetCode);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.bRetCode = decodeBuffer.read(Uint8Array, 1);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_CLICK_HYPER_NOTICE_SC = CMD_CLICK_HYPER_NOTICE_SC;
    class CMD_SINASHOW_MONEY_EXCHANGE_IN_OUT_CS {
        constructor() {
            this.bExchangeType = 0; //1为兑入游戏币2为兑出到秀币 
            this.dwInnerGoodsID = 0; //游戏内部支付商品ID 
            this.astOptionPara = new Array(); //可选参数列表 
        }
        messageName() { return "CMD_SINASHOW_MONEY_EXCHANGE_IN_OUT"; }
        messageValue() { return CSProto.CMD_SINASHOW_MONEY_EXCHANGE_IN_OUT; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.write(Uint8Array, this.bExchangeType);
            encodeBuffer.write(Uint32Array, this.dwInnerGoodsID);
            var astOptionParaSize = this.astOptionPara.length > 10 ? 10 : this.astOptionPara.length;
            encodeBuffer.write(Uint16Array, astOptionParaSize);
            this.astOptionPara.length = astOptionParaSize;
            for (var i = 0; i < astOptionParaSize; i++) {
                encodeBuffer.skip(this.astOptionPara[i].encode(encodeBuffer.buffer(), encodeBuffer.offset()));
            }
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.bExchangeType = decodeBuffer.read(Uint8Array, 1);
            this.dwInnerGoodsID = decodeBuffer.read(Uint32Array, 1);
            var astOptionParaSize = decodeBuffer.read(Uint16Array, 1);
            this.astOptionPara = new Array(astOptionParaSize);
            for (var i = 0; i < astOptionParaSize; i++) {
                this.astOptionPara[i] = new OptionPara();
                decodeBuffer.skip(this.astOptionPara[i].decode(decodeBuffer.buffer(), decodeBuffer.offset()));
            }
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_SINASHOW_MONEY_EXCHANGE_IN_OUT_CS = CMD_SINASHOW_MONEY_EXCHANGE_IN_OUT_CS;
    class CMD_SINASHOW_MONEY_EXCHANGE_IN_OUT_SC {
        constructor() {
            this.bExchangeType = 0; //货币兑换方向参见SINASHOW_MONEY_EXCHANGE_TYPE_IN_TOGOLD等枚举值 
            this.bExchangeResult = 0; //0成功其他失败具体的错误原因可能通过错误提示下发 
            this.dwInnerGoodsID = 0; //游戏内部支付商品ID 
            this.szInnerOrderID = ""; //游戏内部订单编号 
            this.llRelateShowBi = 0; //对应了相关的秀币数 
            this.llRelateGold = 0; //对应了相关的金币数 
            this.astOptionPara = new Array(); //可选参数列表 
        }
        messageName() { return "CMD_SINASHOW_MONEY_EXCHANGE_IN_OUT"; }
        messageValue() { return CSProto.CMD_SINASHOW_MONEY_EXCHANGE_IN_OUT; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.write(Uint8Array, this.bExchangeType);
            encodeBuffer.write(Uint8Array, this.bExchangeResult);
            encodeBuffer.write(Uint32Array, this.dwInnerGoodsID);
            encodeBuffer.writeString(this.szInnerOrderID, CSProto.MAX_PAY_COMM_SELFORDER_LEN);
            encodeBuffer.write(Float64Array, this.llRelateShowBi);
            encodeBuffer.write(Float64Array, this.llRelateGold);
            var astOptionParaSize = this.astOptionPara.length > 10 ? 10 : this.astOptionPara.length;
            encodeBuffer.write(Uint16Array, astOptionParaSize);
            this.astOptionPara.length = astOptionParaSize;
            for (var i = 0; i < astOptionParaSize; i++) {
                encodeBuffer.skip(this.astOptionPara[i].encode(encodeBuffer.buffer(), encodeBuffer.offset()));
            }
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.bExchangeType = decodeBuffer.read(Uint8Array, 1);
            this.bExchangeResult = decodeBuffer.read(Uint8Array, 1);
            this.dwInnerGoodsID = decodeBuffer.read(Uint32Array, 1);
            this.szInnerOrderID = decodeBuffer.readString(CSProto.MAX_PAY_COMM_SELFORDER_LEN);
            this.llRelateShowBi = decodeBuffer.read(Float64Array, 1);
            this.llRelateGold = decodeBuffer.read(Float64Array, 1);
            var astOptionParaSize = decodeBuffer.read(Uint16Array, 1);
            this.astOptionPara = new Array(astOptionParaSize);
            for (var i = 0; i < astOptionParaSize; i++) {
                this.astOptionPara[i] = new OptionPara();
                decodeBuffer.skip(this.astOptionPara[i].decode(decodeBuffer.buffer(), decodeBuffer.offset()));
            }
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_SINASHOW_MONEY_EXCHANGE_IN_OUT_SC = CMD_SINASHOW_MONEY_EXCHANGE_IN_OUT_SC;
    class LaBaTableData {
        constructor() {
            this.llPool_777 = 0; //777奖池 
            this.llPool_77 = 0; //77奖池 
            this.llPool_7 = 0; //7奖池 
            this.llPool_any7 = 0; //ANY7奖池 
        }
        messageName() { return "LaBaTableData"; }
        messageValue() { return 0; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.write(Float64Array, this.llPool_777);
            encodeBuffer.write(Float64Array, this.llPool_77);
            encodeBuffer.write(Float64Array, this.llPool_7);
            encodeBuffer.write(Float64Array, this.llPool_any7);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.llPool_777 = decodeBuffer.read(Float64Array, 1);
            this.llPool_77 = decodeBuffer.read(Float64Array, 1);
            this.llPool_7 = decodeBuffer.read(Float64Array, 1);
            this.llPool_any7 = decodeBuffer.read(Float64Array, 1);
            return decodeBuffer.length();
        }
    }
    CSProto.LaBaTableData = LaBaTableData;
    class LaBaRefreshData {
        constructor() {
            this.llPool_777 = 0; //777奖池 
            this.llPool_77 = 0; //77奖池 
            this.llPool_7 = 0; //7奖池 
            this.llPool_any7 = 0; //ANY7奖池 
            this.wRefreshGap = 0; //数据刷新时间单位秒 
        }
        messageName() { return "LaBaRefreshData"; }
        messageValue() { return 0; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.write(Float64Array, this.llPool_777);
            encodeBuffer.write(Float64Array, this.llPool_77);
            encodeBuffer.write(Float64Array, this.llPool_7);
            encodeBuffer.write(Float64Array, this.llPool_any7);
            encodeBuffer.write(Uint16Array, this.wRefreshGap);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.llPool_777 = decodeBuffer.read(Float64Array, 1);
            this.llPool_77 = decodeBuffer.read(Float64Array, 1);
            this.llPool_7 = decodeBuffer.read(Float64Array, 1);
            this.llPool_any7 = decodeBuffer.read(Float64Array, 1);
            this.wRefreshGap = decodeBuffer.read(Uint16Array, 1);
            return decodeBuffer.length();
        }
    }
    CSProto.LaBaRefreshData = LaBaRefreshData;
    class LaBaPlayerData {
        constructor() {
            this.dwFreePlayCount = 0; //可免费玩次数 
        }
        messageName() { return "LaBaPlayerData"; }
        messageValue() { return 0; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.write(Uint32Array, this.dwFreePlayCount);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.dwFreePlayCount = decodeBuffer.read(Uint32Array, 1);
            return decodeBuffer.length();
        }
    }
    CSProto.LaBaPlayerData = LaBaPlayerData;
    class CMD_LABA_ENTERDATA_SC {
        constructor() {
            this.wMapID = 0; //对应地图ID 
            this.dwSceneID = 0; //对应的场景ID 
            this.dwTableID = 0; //对应的桌台ID 
            this.stTableData = new LaBaTableData(); //桌台数据 
            this.stPlayerData = new LaBaPlayerData(); //玩家数据 
        }
        messageName() { return "CMD_LABA_ENTERDATA"; }
        messageValue() { return CSProto.CMD_LABA_ENTERDATA; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.write(Uint16Array, this.wMapID);
            encodeBuffer.write(Uint32Array, this.dwSceneID);
            encodeBuffer.write(Uint32Array, this.dwTableID);
            encodeBuffer.skip(this.stTableData.encode(encodeBuffer.buffer(), encodeBuffer.offset()));
            encodeBuffer.skip(this.stPlayerData.encode(encodeBuffer.buffer(), encodeBuffer.offset()));
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.wMapID = decodeBuffer.read(Uint16Array, 1);
            this.dwSceneID = decodeBuffer.read(Uint32Array, 1);
            this.dwTableID = decodeBuffer.read(Uint32Array, 1);
            decodeBuffer.skip(this.stTableData.decode(decodeBuffer.buffer(), decodeBuffer.offset()));
            decodeBuffer.skip(this.stPlayerData.decode(decodeBuffer.buffer(), decodeBuffer.offset()));
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_LABA_ENTERDATA_SC = CMD_LABA_ENTERDATA_SC;
    class CMD_LABA_REFRESHDATA_SC {
        constructor() {
            this.dwSceneID = 0; //对应的场景ID,需要与玩家当前所在的sceneid一致才能处理,该id全游戏唯一 
            this.stRefreshData = new LaBaRefreshData(); //桌台刷新数据 
        }
        messageName() { return "CMD_LABA_REFRESHDATA"; }
        messageValue() { return CSProto.CMD_LABA_REFRESHDATA; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.write(Uint32Array, this.dwSceneID);
            encodeBuffer.skip(this.stRefreshData.encode(encodeBuffer.buffer(), encodeBuffer.offset()));
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.dwSceneID = decodeBuffer.read(Uint32Array, 1);
            decodeBuffer.skip(this.stRefreshData.decode(decodeBuffer.buffer(), decodeBuffer.offset()));
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_LABA_REFRESHDATA_SC = CMD_LABA_REFRESHDATA_SC;
    class CMD_LABA_PLAY_ONE_ROUND_CS {
        constructor() {
            this.bTryPlayType = 0; //参见LABA_PLAY_TYPE_NORMAL等枚举类型 
            this.bSelectLineCount = 0; //选中线数5或10或者等等 
            this.dwOneLineBetMoney = 0; //单线对应下注钱数不同场次自动适配不同货币 
        }
        messageName() { return "CMD_LABA_PLAY_ONE_ROUND"; }
        messageValue() { return CSProto.CMD_LABA_PLAY_ONE_ROUND; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.write(Uint8Array, this.bTryPlayType);
            encodeBuffer.write(Uint8Array, this.bSelectLineCount);
            encodeBuffer.write(Uint32Array, this.dwOneLineBetMoney);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.bTryPlayType = decodeBuffer.read(Uint8Array, 1);
            this.bSelectLineCount = decodeBuffer.read(Uint8Array, 1);
            this.dwOneLineBetMoney = decodeBuffer.read(Uint32Array, 1);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_LABA_PLAY_ONE_ROUND_CS = CMD_LABA_PLAY_ONE_ROUND_CS;
    class LaBaAwardLineData {
        constructor() {
            this.bLineTag = 0; //中奖线编号 
            this.bConnectItemCount = 0; //连线物品个数 
        }
        messageName() { return "LaBaAwardLineData"; }
        messageValue() { return 0; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.write(Uint8Array, this.bLineTag);
            encodeBuffer.write(Uint8Array, this.bConnectItemCount);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.bLineTag = decodeBuffer.read(Uint8Array, 1);
            this.bConnectItemCount = decodeBuffer.read(Uint8Array, 1);
            return decodeBuffer.length();
        }
    }
    CSProto.LaBaAwardLineData = LaBaAwardLineData;
    class CMD_LABA_PLAY_ONE_ROUND_SC {
        constructor() {
            this.dwSceneID = 0; //对应的场景ID,需要与玩家当前所在的sceneid一致才能处理,该id全游戏唯一 
            this.bPlayIfSucc = 0; //0成功其他失败这里不为成功时其他字段均无效 
            this.bFinalPlayType = 0; //参见LABA_PLAY_TYPE_NORMAL等枚举类型 
            this.dwTotalCostMoney = 0; //总消费货币 
            this.arrViewPos = new Array(); //每个条带从左到右的起始位置 
            this.dwAwardAllTimes = 0; //中奖总倍数 
            this.llTotalAwardGold = 0; //中奖获得总金币数 
            this.llTotalAwardDiamond = 0; //中奖获得总钻石数 
            this.llTotalAwardLeafGold = 0; //中奖获得总金叶子数 
            this.bAwardRetType = 0; //奖励结果显示类型参见LABA_AWARD_TYPE_NORMAL等枚举 
            this.bIfBigWin = 0; //1是bigwin其他不是 
            this.arrAwardLineList = new Array(); //每条中奖线相关数据 
            this.stPlayerData = new LaBaPlayerData(); //玩家最新数据 
        }
        messageName() { return "CMD_LABA_PLAY_ONE_ROUND"; }
        messageValue() { return CSProto.CMD_LABA_PLAY_ONE_ROUND; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.write(Uint32Array, this.dwSceneID);
            encodeBuffer.write(Uint8Array, this.bPlayIfSucc);
            encodeBuffer.write(Uint8Array, this.bFinalPlayType);
            encodeBuffer.write(Uint32Array, this.dwTotalCostMoney);
            var arrViewPosSize = this.arrViewPos.length > 10 ? 10 : this.arrViewPos.length;
            encodeBuffer.write(Uint16Array, arrViewPosSize);
            this.arrViewPos.length = arrViewPosSize;
            encodeBuffer.write(Uint8Array, this.arrViewPos);
            encodeBuffer.write(Uint32Array, this.dwAwardAllTimes);
            encodeBuffer.write(Float64Array, this.llTotalAwardGold);
            encodeBuffer.write(Float64Array, this.llTotalAwardDiamond);
            encodeBuffer.write(Float64Array, this.llTotalAwardLeafGold);
            encodeBuffer.write(Uint8Array, this.bAwardRetType);
            encodeBuffer.write(Uint8Array, this.bIfBigWin);
            var arrAwardLineListSize = this.arrAwardLineList.length > 30 ? 30 : this.arrAwardLineList.length;
            encodeBuffer.write(Uint16Array, arrAwardLineListSize);
            this.arrAwardLineList.length = arrAwardLineListSize;
            for (var i = 0; i < arrAwardLineListSize; i++) {
                encodeBuffer.skip(this.arrAwardLineList[i].encode(encodeBuffer.buffer(), encodeBuffer.offset()));
            }
            encodeBuffer.skip(this.stPlayerData.encode(encodeBuffer.buffer(), encodeBuffer.offset()));
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.dwSceneID = decodeBuffer.read(Uint32Array, 1);
            this.bPlayIfSucc = decodeBuffer.read(Uint8Array, 1);
            this.bFinalPlayType = decodeBuffer.read(Uint8Array, 1);
            this.dwTotalCostMoney = decodeBuffer.read(Uint32Array, 1);
            var arrViewPosSize = decodeBuffer.read(Uint16Array, 1);
            this.arrViewPos = new Array(arrViewPosSize);
            this.arrViewPos = decodeBuffer.read(Uint8Array, arrViewPosSize);
            this.dwAwardAllTimes = decodeBuffer.read(Uint32Array, 1);
            this.llTotalAwardGold = decodeBuffer.read(Float64Array, 1);
            this.llTotalAwardDiamond = decodeBuffer.read(Float64Array, 1);
            this.llTotalAwardLeafGold = decodeBuffer.read(Float64Array, 1);
            this.bAwardRetType = decodeBuffer.read(Uint8Array, 1);
            this.bIfBigWin = decodeBuffer.read(Uint8Array, 1);
            var arrAwardLineListSize = decodeBuffer.read(Uint16Array, 1);
            this.arrAwardLineList = new Array(arrAwardLineListSize);
            for (var i = 0; i < arrAwardLineListSize; i++) {
                this.arrAwardLineList[i] = new LaBaAwardLineData();
                decodeBuffer.skip(this.arrAwardLineList[i].decode(decodeBuffer.buffer(), decodeBuffer.offset()));
            }
            decodeBuffer.skip(this.stPlayerData.decode(decodeBuffer.buffer(), decodeBuffer.offset()));
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_LABA_PLAY_ONE_ROUND_SC = CMD_LABA_PLAY_ONE_ROUND_SC;
    class CMD_LABA_PLAYER_AWARDINFO_SC {
        constructor() {
            this.dwSceneID = 0; //对应的场景ID,需要与玩家当前所在的sceneid一致才能处理,该id全游戏唯一 
            this.dwRoleObjectID = 0; //对应玩家的实体handle 
            this.bAwardRetType = 0; //奖励结果显示类型参见LABA_AWARD_TYPE_NORMAL等枚举 
            this.bIfBigWin = 0; //1是bigwin其他不是 
            this.llTotalAwardGold = 0; //中奖获得总金币数 
            this.llTotalAwardDiamond = 0; //中奖获得总钻石数 
            this.llTotalAwardLeafGold = 0; //中奖获得总金叶子数 
        }
        messageName() { return "CMD_LABA_PLAYER_AWARDINFO"; }
        messageValue() { return CSProto.CMD_LABA_PLAYER_AWARDINFO; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.write(Uint32Array, this.dwSceneID);
            encodeBuffer.write(Uint32Array, this.dwRoleObjectID);
            encodeBuffer.write(Uint8Array, this.bAwardRetType);
            encodeBuffer.write(Uint8Array, this.bIfBigWin);
            encodeBuffer.write(Float64Array, this.llTotalAwardGold);
            encodeBuffer.write(Float64Array, this.llTotalAwardDiamond);
            encodeBuffer.write(Float64Array, this.llTotalAwardLeafGold);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.dwSceneID = decodeBuffer.read(Uint32Array, 1);
            this.dwRoleObjectID = decodeBuffer.read(Uint32Array, 1);
            this.bAwardRetType = decodeBuffer.read(Uint8Array, 1);
            this.bIfBigWin = decodeBuffer.read(Uint8Array, 1);
            this.llTotalAwardGold = decodeBuffer.read(Float64Array, 1);
            this.llTotalAwardDiamond = decodeBuffer.read(Float64Array, 1);
            this.llTotalAwardLeafGold = decodeBuffer.read(Float64Array, 1);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_LABA_PLAYER_AWARDINFO_SC = CMD_LABA_PLAYER_AWARDINFO_SC;
    class ItemStoreOneItem {
        constructor() {
            this.dwItemID = 0; //商品ID 
            this.dwLeftCount = 0; //剩余个数 
            this.dwSpecialMaskTag = 0; //特殊展示状态按位标记参见ITEMSTORE_SPECIALMASK_NOSUPPLY等枚举 
        }
        messageName() { return "ItemStoreOneItem"; }
        messageValue() { return 0; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.write(Uint32Array, this.dwItemID);
            encodeBuffer.write(Uint32Array, this.dwLeftCount);
            encodeBuffer.write(Uint32Array, this.dwSpecialMaskTag);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.dwItemID = decodeBuffer.read(Uint32Array, 1);
            this.dwLeftCount = decodeBuffer.read(Uint32Array, 1);
            this.dwSpecialMaskTag = decodeBuffer.read(Uint32Array, 1);
            return decodeBuffer.length();
        }
    }
    CSProto.ItemStoreOneItem = ItemStoreOneItem;
    class CMD_ITEMSTORE_GETSALEHIS_SC {
        constructor() {
            this.astItemList = new Array(); //商品销售历史数据列表 
        }
        messageName() { return "CMD_ITEMSTORE_GETSALEHIS"; }
        messageValue() { return CSProto.CMD_ITEMSTORE_GETSALEHIS; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            var astItemListSize = this.astItemList.length > CSProto.MAX_ITEMSTORE_LIST_MAX_LEN ? CSProto.MAX_ITEMSTORE_LIST_MAX_LEN : this.astItemList.length;
            encodeBuffer.write(Uint16Array, astItemListSize);
            this.astItemList.length = astItemListSize;
            for (var i = 0; i < astItemListSize; i++) {
                encodeBuffer.skip(this.astItemList[i].encode(encodeBuffer.buffer(), encodeBuffer.offset()));
            }
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            var astItemListSize = decodeBuffer.read(Uint16Array, 1);
            this.astItemList = new Array(astItemListSize);
            for (var i = 0; i < astItemListSize; i++) {
                this.astItemList[i] = new ItemStoreOneItem();
                decodeBuffer.skip(this.astItemList[i].decode(decodeBuffer.buffer(), decodeBuffer.offset()));
            }
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_ITEMSTORE_GETSALEHIS_SC = CMD_ITEMSTORE_GETSALEHIS_SC;
    class CMD_ITEMSTORE_DOBUY_CS {
        constructor() {
            this.dwItemID = 0; //商品ID 
            this.dwBuyCount = 0; //购买个数 
            this.szDeliverInfo = ""; //发货信息 
        }
        messageName() { return "CMD_ITEMSTORE_DOBUY"; }
        messageValue() { return CSProto.CMD_ITEMSTORE_DOBUY; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.write(Uint32Array, this.dwItemID);
            encodeBuffer.write(Uint32Array, this.dwBuyCount);
            encodeBuffer.writeString(this.szDeliverInfo, 512);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.dwItemID = decodeBuffer.read(Uint32Array, 1);
            this.dwBuyCount = decodeBuffer.read(Uint32Array, 1);
            this.szDeliverInfo = decodeBuffer.readString(512);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_ITEMSTORE_DOBUY_CS = CMD_ITEMSTORE_DOBUY_CS;
    class CMD_ITEMSTORE_DOBUY_SC {
        constructor() {
            this.dwBuyRet = 0; //0成功,其他失败,当为0或者ERROR_ITEMSTORE_ITEM_NOTENOUGH时才能用stNewItemStat刷新数据 
            this.stNewItemStat = new ItemStoreOneItem(); //最新的该商品销售历史数据 
        }
        messageName() { return "CMD_ITEMSTORE_DOBUY"; }
        messageValue() { return CSProto.CMD_ITEMSTORE_DOBUY; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.write(Uint32Array, this.dwBuyRet);
            encodeBuffer.skip(this.stNewItemStat.encode(encodeBuffer.buffer(), encodeBuffer.offset()));
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.dwBuyRet = decodeBuffer.read(Uint32Array, 1);
            decodeBuffer.skip(this.stNewItemStat.decode(decodeBuffer.buffer(), decodeBuffer.offset()));
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_ITEMSTORE_DOBUY_SC = CMD_ITEMSTORE_DOBUY_SC;
    class ItemStoreSaleLog {
        constructor() {
            this.llLogID = 0; //购买记录ID 
            this.dwItemID = 0; //商品ID 
            this.dwBuyCount = 0; //物品个数 
            this.dwBuyTime = 0; //购买时间 
            this.dwSendStat = 0; //0为等待发放1为已经发放 
            this.szDeliverInfo = ""; //发货信息 
        }
        messageName() { return "ItemStoreSaleLog"; }
        messageValue() { return 0; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.write(Float64Array, this.llLogID);
            encodeBuffer.write(Uint32Array, this.dwItemID);
            encodeBuffer.write(Uint32Array, this.dwBuyCount);
            encodeBuffer.write(Uint32Array, this.dwBuyTime);
            encodeBuffer.write(Uint32Array, this.dwSendStat);
            encodeBuffer.writeString(this.szDeliverInfo, 512);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.llLogID = decodeBuffer.read(Float64Array, 1);
            this.dwItemID = decodeBuffer.read(Uint32Array, 1);
            this.dwBuyCount = decodeBuffer.read(Uint32Array, 1);
            this.dwBuyTime = decodeBuffer.read(Uint32Array, 1);
            this.dwSendStat = decodeBuffer.read(Uint32Array, 1);
            this.szDeliverInfo = decodeBuffer.readString(512);
            return decodeBuffer.length();
        }
    }
    CSProto.ItemStoreSaleLog = ItemStoreSaleLog;
    class CMD_ITEMSTORE_QUERY_BUYLOG_SC {
        constructor() {
            this.astLogList = new Array(); //商品销售历史数据列表 
        }
        messageName() { return "CMD_ITEMSTORE_QUERY_BUYLOG"; }
        messageValue() { return CSProto.CMD_ITEMSTORE_QUERY_BUYLOG; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            var astLogListSize = this.astLogList.length > CSProto.MAX_ITEMSTORE_LIST_MAX_LEN ? CSProto.MAX_ITEMSTORE_LIST_MAX_LEN : this.astLogList.length;
            encodeBuffer.write(Uint16Array, astLogListSize);
            this.astLogList.length = astLogListSize;
            for (var i = 0; i < astLogListSize; i++) {
                encodeBuffer.skip(this.astLogList[i].encode(encodeBuffer.buffer(), encodeBuffer.offset()));
            }
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            var astLogListSize = decodeBuffer.read(Uint16Array, 1);
            this.astLogList = new Array(astLogListSize);
            for (var i = 0; i < astLogListSize; i++) {
                this.astLogList[i] = new ItemStoreSaleLog();
                decodeBuffer.skip(this.astLogList[i].decode(decodeBuffer.buffer(), decodeBuffer.offset()));
            }
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_ITEMSTORE_QUERY_BUYLOG_SC = CMD_ITEMSTORE_QUERY_BUYLOG_SC;
    class CMD_CLT_FIN_WRAP_CS {
        constructor() {
            this.wMapID = 0; //已经完成切换进入的房间对应地图ID参见MAP_TEMPLATE_ID_NORMAL_SLOT等枚举 
        }
        messageName() { return "CMD_CLT_FIN_WRAP"; }
        messageValue() { return CSProto.CMD_CLT_FIN_WRAP; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.write(Uint16Array, this.wMapID);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.wMapID = decodeBuffer.read(Uint16Array, 1);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_CLT_FIN_WRAP_CS = CMD_CLT_FIN_WRAP_CS;
    class CMD_GET_BUYUHALL_VERSION_GIFT_SC {
        constructor() {
            this.bIfSucc = 0; //0成功其他失败 
            this.llAwardGold = 0; //领取总金币数 
            this.llAwardLeafGold = 0; //领取总金叶子数 
        }
        messageName() { return "CMD_GET_BUYUHALL_VERSION_GIFT"; }
        messageValue() { return CSProto.CMD_GET_BUYUHALL_VERSION_GIFT; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.write(Uint8Array, this.bIfSucc);
            encodeBuffer.write(Float64Array, this.llAwardGold);
            encodeBuffer.write(Float64Array, this.llAwardLeafGold);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.bIfSucc = decodeBuffer.read(Uint8Array, 1);
            this.llAwardGold = decodeBuffer.read(Float64Array, 1);
            this.llAwardLeafGold = decodeBuffer.read(Float64Array, 1);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_GET_BUYUHALL_VERSION_GIFT_SC = CMD_GET_BUYUHALL_VERSION_GIFT_SC;
    class PROPERTYNEW {
        constructor() {
            this.prop_type = 0; //属性key 
            this.prop_value = 0; //属性值 
        }
        messageName() { return "PROPERTYNEW"; }
        messageValue() { return 0; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.write(Int32Array, this.prop_type);
            encodeBuffer.write(Float64Array, this.prop_value);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.prop_type = decodeBuffer.read(Int32Array, 1);
            this.prop_value = decodeBuffer.read(Float64Array, 1);
            return decodeBuffer.length();
        }
    }
    CSProto.PROPERTYNEW = PROPERTYNEW;
    class ZodiacYearResult {
        constructor() {
            this.ret_out_to_in = new Array(); //本期摇奖结果,从外圈到里圈对应结果 
        }
        messageName() { return "ZodiacYearResult"; }
        messageValue() { return 0; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            var ret_out_to_inSize = this.ret_out_to_in.length > 5 ? 5 : this.ret_out_to_in.length;
            encodeBuffer.write(Uint16Array, ret_out_to_inSize);
            this.ret_out_to_in.length = ret_out_to_inSize;
            encodeBuffer.write(Int32Array, this.ret_out_to_in);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            var ret_out_to_inSize = decodeBuffer.read(Uint16Array, 1);
            this.ret_out_to_in = new Array(ret_out_to_inSize);
            this.ret_out_to_in = decodeBuffer.read(Int32Array, ret_out_to_inSize);
            return decodeBuffer.length();
        }
    }
    CSProto.ZodiacYearResult = ZodiacYearResult;
    class ZodiacHisData {
        constructor() {
            this.round_year = 0; //对应的期数 
            this.round_ret = new ZodiacYearResult(); //对应的结果 
        }
        messageName() { return "ZodiacHisData"; }
        messageValue() { return 0; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.write(Uint32Array, this.round_year);
            encodeBuffer.skip(this.round_ret.encode(encodeBuffer.buffer(), encodeBuffer.offset()));
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.round_year = decodeBuffer.read(Uint32Array, 1);
            decodeBuffer.skip(this.round_ret.decode(decodeBuffer.buffer(), decodeBuffer.offset()));
            return decodeBuffer.length();
        }
    }
    CSProto.ZodiacHisData = ZodiacHisData;
    class ZodiacTableData {
        constructor() {
            this.round_index = 0; //对应的相关转数序号 
            this.round_year = 0; //对应的年份 
            this.tab_status = 0; //当前状态,参见ZODIAC_SCENE_STATUS_IDLE等系列枚举 
            this.status_left_sec = 0; //当前对应剩余可下注秒数 
            this.tbl_bet_detail = new Array(); //桌台总下注信息,key对应参见ZodiacSceneItem定义 
            this.his_data = new Array(); //产出历史,最长15个 
            this.status_total_sec = 0; //当前状态对应的总时间秒数 
        }
        messageName() { return "ZodiacTableData"; }
        messageValue() { return 0; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.write(Uint32Array, this.round_index);
            encodeBuffer.write(Uint32Array, this.round_year);
            encodeBuffer.write(Int32Array, this.tab_status);
            encodeBuffer.write(Int32Array, this.status_left_sec);
            var tbl_bet_detailSize = this.tbl_bet_detail.length > 25 ? 25 : this.tbl_bet_detail.length;
            encodeBuffer.write(Uint16Array, tbl_bet_detailSize);
            this.tbl_bet_detail.length = tbl_bet_detailSize;
            for (var i = 0; i < tbl_bet_detailSize; i++) {
                encodeBuffer.skip(this.tbl_bet_detail[i].encode(encodeBuffer.buffer(), encodeBuffer.offset()));
            }
            var his_dataSize = this.his_data.length > 20 ? 20 : this.his_data.length;
            encodeBuffer.write(Uint16Array, his_dataSize);
            this.his_data.length = his_dataSize;
            for (var i = 0; i < his_dataSize; i++) {
                encodeBuffer.skip(this.his_data[i].encode(encodeBuffer.buffer(), encodeBuffer.offset()));
            }
            encodeBuffer.write(Int32Array, this.status_total_sec);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.round_index = decodeBuffer.read(Uint32Array, 1);
            this.round_year = decodeBuffer.read(Uint32Array, 1);
            this.tab_status = decodeBuffer.read(Int32Array, 1);
            this.status_left_sec = decodeBuffer.read(Int32Array, 1);
            var tbl_bet_detailSize = decodeBuffer.read(Uint16Array, 1);
            this.tbl_bet_detail = new Array(tbl_bet_detailSize);
            for (var i = 0; i < tbl_bet_detailSize; i++) {
                this.tbl_bet_detail[i] = new PROPERTYNEW();
                decodeBuffer.skip(this.tbl_bet_detail[i].decode(decodeBuffer.buffer(), decodeBuffer.offset()));
            }
            var his_dataSize = decodeBuffer.read(Uint16Array, 1);
            this.his_data = new Array(his_dataSize);
            for (var i = 0; i < his_dataSize; i++) {
                this.his_data[i] = new ZodiacHisData();
                decodeBuffer.skip(this.his_data[i].decode(decodeBuffer.buffer(), decodeBuffer.offset()));
            }
            this.status_total_sec = decodeBuffer.read(Int32Array, 1);
            return decodeBuffer.length();
        }
    }
    CSProto.ZodiacTableData = ZodiacTableData;
    class CMD_ZODIAC_ENTERDATA_SC {
        constructor() {
            this.scene_tmp_id = 0; //对应的场景模板ID 
            this.table_id = 0; //对应的桌台ID 
            this.table_data = new ZodiacTableData(); //对应当前桌台数据 
            this.my_bet_detail = new Array(); //对应玩家当前当转的具体下注列表 
            this.bunch_set_2 = new Array(); //对应当前串2设置 
            this.bunch_set_3 = new Array(); //对应当前串3设置 
        }
        messageName() { return "CMD_ZODIAC_ENTERDATA"; }
        messageValue() { return CSProto.CMD_ZODIAC_ENTERDATA; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.write(Int32Array, this.scene_tmp_id);
            encodeBuffer.write(Int32Array, this.table_id);
            encodeBuffer.skip(this.table_data.encode(encodeBuffer.buffer(), encodeBuffer.offset()));
            var my_bet_detailSize = this.my_bet_detail.length > 25 ? 25 : this.my_bet_detail.length;
            encodeBuffer.write(Uint16Array, my_bet_detailSize);
            this.my_bet_detail.length = my_bet_detailSize;
            for (var i = 0; i < my_bet_detailSize; i++) {
                encodeBuffer.skip(this.my_bet_detail[i].encode(encodeBuffer.buffer(), encodeBuffer.offset()));
            }
            var bunch_set_2Size = this.bunch_set_2.length > 3 ? 3 : this.bunch_set_2.length;
            encodeBuffer.write(Uint16Array, bunch_set_2Size);
            this.bunch_set_2.length = bunch_set_2Size;
            encodeBuffer.write(Int32Array, this.bunch_set_2);
            var bunch_set_3Size = this.bunch_set_3.length > 3 ? 3 : this.bunch_set_3.length;
            encodeBuffer.write(Uint16Array, bunch_set_3Size);
            this.bunch_set_3.length = bunch_set_3Size;
            encodeBuffer.write(Int32Array, this.bunch_set_3);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.scene_tmp_id = decodeBuffer.read(Int32Array, 1);
            this.table_id = decodeBuffer.read(Int32Array, 1);
            decodeBuffer.skip(this.table_data.decode(decodeBuffer.buffer(), decodeBuffer.offset()));
            var my_bet_detailSize = decodeBuffer.read(Uint16Array, 1);
            this.my_bet_detail = new Array(my_bet_detailSize);
            for (var i = 0; i < my_bet_detailSize; i++) {
                this.my_bet_detail[i] = new PROPERTYNEW();
                decodeBuffer.skip(this.my_bet_detail[i].decode(decodeBuffer.buffer(), decodeBuffer.offset()));
            }
            var bunch_set_2Size = decodeBuffer.read(Uint16Array, 1);
            this.bunch_set_2 = new Array(bunch_set_2Size);
            this.bunch_set_2 = decodeBuffer.read(Int32Array, bunch_set_2Size);
            var bunch_set_3Size = decodeBuffer.read(Uint16Array, 1);
            this.bunch_set_3 = new Array(bunch_set_3Size);
            this.bunch_set_3 = decodeBuffer.read(Int32Array, bunch_set_3Size);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_ZODIAC_ENTERDATA_SC = CMD_ZODIAC_ENTERDATA_SC;
    class ZodiacPlayerResult {
        constructor() {
            this.role_id = 0; //角色ID 
            this.pos = 0; //座位号(将自己始终显示到中间,其他人按座位号从左到右显示) 
            this.win_gold = 0; //本轮赢取金币 
        }
        messageName() { return "ZodiacPlayerResult"; }
        messageValue() { return 0; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.write(Float64Array, this.role_id);
            encodeBuffer.write(Int32Array, this.pos);
            encodeBuffer.write(Float64Array, this.win_gold);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.role_id = decodeBuffer.read(Float64Array, 1);
            this.pos = decodeBuffer.read(Int32Array, 1);
            this.win_gold = decodeBuffer.read(Float64Array, 1);
            return decodeBuffer.length();
        }
    }
    CSProto.ZodiacPlayerResult = ZodiacPlayerResult;
    class CMD_ZODIAC_ROUND_END_SC {
        constructor() {
            this.newst_table_data = new ZodiacTableData(); //对应开奖后的转轮数据,序号及奖池数据等所有数据己刷新为发奖后的最新数据 
            this.cur_result = new ZodiacYearResult(); //本局结果 
            this.player_result = new Array(); //各在座玩家输赢结果 
            this.tips_item_id = 0; //需要在下一轮做提示的物品ID 
            this.tips_disappear_year = 0; //已经多少年没出现过了 
        }
        messageName() { return "CMD_ZODIAC_ROUND_END"; }
        messageValue() { return CSProto.CMD_ZODIAC_ROUND_END; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.skip(this.newst_table_data.encode(encodeBuffer.buffer(), encodeBuffer.offset()));
            encodeBuffer.skip(this.cur_result.encode(encodeBuffer.buffer(), encodeBuffer.offset()));
            var player_resultSize = this.player_result.length > 10 ? 10 : this.player_result.length;
            encodeBuffer.write(Uint16Array, player_resultSize);
            this.player_result.length = player_resultSize;
            for (var i = 0; i < player_resultSize; i++) {
                encodeBuffer.skip(this.player_result[i].encode(encodeBuffer.buffer(), encodeBuffer.offset()));
            }
            encodeBuffer.write(Int32Array, this.tips_item_id);
            encodeBuffer.write(Int32Array, this.tips_disappear_year);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            decodeBuffer.skip(this.newst_table_data.decode(decodeBuffer.buffer(), decodeBuffer.offset()));
            decodeBuffer.skip(this.cur_result.decode(decodeBuffer.buffer(), decodeBuffer.offset()));
            var player_resultSize = decodeBuffer.read(Uint16Array, 1);
            this.player_result = new Array(player_resultSize);
            for (var i = 0; i < player_resultSize; i++) {
                this.player_result[i] = new ZodiacPlayerResult();
                decodeBuffer.skip(this.player_result[i].decode(decodeBuffer.buffer(), decodeBuffer.offset()));
            }
            this.tips_item_id = decodeBuffer.read(Int32Array, 1);
            this.tips_disappear_year = decodeBuffer.read(Int32Array, 1);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_ZODIAC_ROUND_END_SC = CMD_ZODIAC_ROUND_END_SC;
    class CMD_ZODIAC_SET_BUNCH_CS {
        constructor() {
            this.round_index = 0; //对应转数序号 
            this.bunch_set = new Array(); //长度为2时为设置串2，为3时是设置串3 
        }
        messageName() { return "CMD_ZODIAC_SET_BUNCH"; }
        messageValue() { return CSProto.CMD_ZODIAC_SET_BUNCH; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.write(Uint32Array, this.round_index);
            var bunch_setSize = this.bunch_set.length > 3 ? 3 : this.bunch_set.length;
            encodeBuffer.write(Uint16Array, bunch_setSize);
            this.bunch_set.length = bunch_setSize;
            encodeBuffer.write(Int32Array, this.bunch_set);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.round_index = decodeBuffer.read(Uint32Array, 1);
            var bunch_setSize = decodeBuffer.read(Uint16Array, 1);
            this.bunch_set = new Array(bunch_setSize);
            this.bunch_set = decodeBuffer.read(Int32Array, bunch_setSize);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_ZODIAC_SET_BUNCH_CS = CMD_ZODIAC_SET_BUNCH_CS;
    class CMD_ZODIAC_SET_BUNCH_SC {
        constructor() {
            this.round_index = 0; //对应转数序号 
            this.set_ret = 0; //0成功,其他失败 
            this.final_bunch_set = new Array(); //仅set_ret为0时有效,长度为2时为设置串2，为3时是设置串3 
        }
        messageName() { return "CMD_ZODIAC_SET_BUNCH"; }
        messageValue() { return CSProto.CMD_ZODIAC_SET_BUNCH; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.write(Uint32Array, this.round_index);
            encodeBuffer.write(Int32Array, this.set_ret);
            var final_bunch_setSize = this.final_bunch_set.length > 3 ? 3 : this.final_bunch_set.length;
            encodeBuffer.write(Uint16Array, final_bunch_setSize);
            this.final_bunch_set.length = final_bunch_setSize;
            encodeBuffer.write(Int32Array, this.final_bunch_set);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.round_index = decodeBuffer.read(Uint32Array, 1);
            this.set_ret = decodeBuffer.read(Int32Array, 1);
            var final_bunch_setSize = decodeBuffer.read(Uint16Array, 1);
            this.final_bunch_set = new Array(final_bunch_setSize);
            this.final_bunch_set = decodeBuffer.read(Int32Array, final_bunch_setSize);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_ZODIAC_SET_BUNCH_SC = CMD_ZODIAC_SET_BUNCH_SC;
    class CMD_ZODIAC_BET_ON_CS {
        constructor() {
            this.round_index = 0; //对应转数序号 
            this.bet_detail = new Array(); //对应内容为下注列表（当前全部押注） 
        }
        messageName() { return "CMD_ZODIAC_BET_ON"; }
        messageValue() { return CSProto.CMD_ZODIAC_BET_ON; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.write(Uint32Array, this.round_index);
            var bet_detailSize = this.bet_detail.length > 25 ? 25 : this.bet_detail.length;
            encodeBuffer.write(Uint16Array, bet_detailSize);
            this.bet_detail.length = bet_detailSize;
            for (var i = 0; i < bet_detailSize; i++) {
                encodeBuffer.skip(this.bet_detail[i].encode(encodeBuffer.buffer(), encodeBuffer.offset()));
            }
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.round_index = decodeBuffer.read(Uint32Array, 1);
            var bet_detailSize = decodeBuffer.read(Uint16Array, 1);
            this.bet_detail = new Array(bet_detailSize);
            for (var i = 0; i < bet_detailSize; i++) {
                this.bet_detail[i] = new PROPERTYNEW();
                decodeBuffer.skip(this.bet_detail[i].decode(decodeBuffer.buffer(), decodeBuffer.offset()));
            }
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_ZODIAC_BET_ON_CS = CMD_ZODIAC_BET_ON_CS;
    class CMD_ZODIAC_BET_ON_SC {
        constructor() {
            this.round_index = 0; //对应转数序号 
            this.bet_detail = new Array(); //下注列表，若收到的是下注玩家自己则是当前的全量下注，否则是同步的其他人下注的增量 
            this.total_bet_gold = 0; //总下注 
            this.bet_roleid = 0; //对应下注的角色ID,客户端自行判断是否是同步玩家自己的当前全量下注,还是同步的其他玩家的增量下注 
        }
        messageName() { return "CMD_ZODIAC_BET_ON"; }
        messageValue() { return CSProto.CMD_ZODIAC_BET_ON; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.write(Uint32Array, this.round_index);
            var bet_detailSize = this.bet_detail.length > 25 ? 25 : this.bet_detail.length;
            encodeBuffer.write(Uint16Array, bet_detailSize);
            this.bet_detail.length = bet_detailSize;
            for (var i = 0; i < bet_detailSize; i++) {
                encodeBuffer.skip(this.bet_detail[i].encode(encodeBuffer.buffer(), encodeBuffer.offset()));
            }
            encodeBuffer.write(Float64Array, this.total_bet_gold);
            encodeBuffer.write(Float64Array, this.bet_roleid);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.round_index = decodeBuffer.read(Uint32Array, 1);
            var bet_detailSize = decodeBuffer.read(Uint16Array, 1);
            this.bet_detail = new Array(bet_detailSize);
            for (var i = 0; i < bet_detailSize; i++) {
                this.bet_detail[i] = new PROPERTYNEW();
                decodeBuffer.skip(this.bet_detail[i].decode(decodeBuffer.buffer(), decodeBuffer.offset()));
            }
            this.total_bet_gold = decodeBuffer.read(Float64Array, 1);
            this.bet_roleid = decodeBuffer.read(Float64Array, 1);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_ZODIAC_BET_ON_SC = CMD_ZODIAC_BET_ON_SC;
    class CMD_ZODIAC_REFRESHDATA_SC {
        constructor() {
            this.round_index = 0; //对应转数序号 
            this.tab_status = 0; //当前状态,参见ZODIAC_SCENE_STATUS_IDLE等系列枚举 
            this.bet_detail = new Array(); //当前对应当转的各投资项具体下注列表 
        }
        messageName() { return "CMD_ZODIAC_REFRESHDATA"; }
        messageValue() { return CSProto.CMD_ZODIAC_REFRESHDATA; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.write(Uint32Array, this.round_index);
            encodeBuffer.write(Int32Array, this.tab_status);
            var bet_detailSize = this.bet_detail.length > 25 ? 25 : this.bet_detail.length;
            encodeBuffer.write(Uint16Array, bet_detailSize);
            this.bet_detail.length = bet_detailSize;
            for (var i = 0; i < bet_detailSize; i++) {
                encodeBuffer.skip(this.bet_detail[i].encode(encodeBuffer.buffer(), encodeBuffer.offset()));
            }
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.round_index = decodeBuffer.read(Uint32Array, 1);
            this.tab_status = decodeBuffer.read(Int32Array, 1);
            var bet_detailSize = decodeBuffer.read(Uint16Array, 1);
            this.bet_detail = new Array(bet_detailSize);
            for (var i = 0; i < bet_detailSize; i++) {
                this.bet_detail[i] = new PROPERTYNEW();
                decodeBuffer.skip(this.bet_detail[i].decode(decodeBuffer.buffer(), decodeBuffer.offset()));
            }
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_ZODIAC_REFRESHDATA_SC = CMD_ZODIAC_REFRESHDATA_SC;
    class CMD_ZODIAC_REWARD_NPC_MM_CS {
        messageName() { return "CMD_ZODIAC_REWARD_NPC_MM"; }
        messageValue() { return CSProto.CMD_ZODIAC_REWARD_NPC_MM; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_ZODIAC_REWARD_NPC_MM_CS = CMD_ZODIAC_REWARD_NPC_MM_CS;
    class CMD_ZODIAC_REWARD_NPC_MM_SC {
        constructor() {
            this.role_id = 0; //打赏者的角色ID 
            this.use_gold = 0; //消耗金币 
        }
        messageName() { return "CMD_ZODIAC_REWARD_NPC_MM"; }
        messageValue() { return CSProto.CMD_ZODIAC_REWARD_NPC_MM; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.write(Float64Array, this.role_id);
            encodeBuffer.write(Int32Array, this.use_gold);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.role_id = decodeBuffer.read(Float64Array, 1);
            this.use_gold = decodeBuffer.read(Int32Array, 1);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_ZODIAC_REWARD_NPC_MM_SC = CMD_ZODIAC_REWARD_NPC_MM_SC;
    class OneBalloon {
        constructor() {
            this.born_id = 0; //对应的气球出生id同一场景内在存活的气球中是唯一的 
            this.type_id = 0; //对应的气球类型id 
            this.fly_path = 0; //路线 
            this.life_time = 0; //己出生时间毫秒 
            this.zpos = 0; //对应z轴位置大于等于0的值 
            this.zoom_ratio = 0; //缩放比例百分比的分子部分 
            this.born_unixtime_ms = 0; //在服务器的出生unix时间单位毫秒 
        }
        messageName() { return "OneBalloon"; }
        messageValue() { return 0; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.write(Int32Array, this.born_id);
            encodeBuffer.write(Int32Array, this.type_id);
            encodeBuffer.write(Int32Array, this.fly_path);
            encodeBuffer.write(Int32Array, this.life_time);
            encodeBuffer.write(Int32Array, this.zpos);
            encodeBuffer.write(Int32Array, this.zoom_ratio);
            encodeBuffer.write(Float64Array, this.born_unixtime_ms);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.born_id = decodeBuffer.read(Int32Array, 1);
            this.type_id = decodeBuffer.read(Int32Array, 1);
            this.fly_path = decodeBuffer.read(Int32Array, 1);
            this.life_time = decodeBuffer.read(Int32Array, 1);
            this.zpos = decodeBuffer.read(Int32Array, 1);
            this.zoom_ratio = decodeBuffer.read(Int32Array, 1);
            this.born_unixtime_ms = decodeBuffer.read(Float64Array, 1);
            return decodeBuffer.length();
        }
    }
    CSProto.OneBalloon = OneBalloon;
    class CMD_COWBOY_ENTER_DATA_SC {
        constructor() {
            this.scene_id = 0; //对应的场景ID后台动态生成的场景handle全游戏唯一 
            this.table_id = 0; //对应的桌台ID可用于逻辑显示 
            this.player_ini_bet = 0; //玩家初始推荐压注额 
            this.table_status = 0; //当前的桌台状态参见COWBOY_TABLE_STATUS_DAY等定义 
            this.spec_stage_ratio = 0; //当前己消灭的特殊气球数的进度值取值范围0到100 
            this.balloon_list = new Array(); //当前气球列表 
            this.player_pos = 0; //玩家的位置 
            this.night_left_time = 0; //当前为黑夜状态时对应了黑夜的剩余时间对应单位为豪秒 
        }
        messageName() { return "CMD_COWBOY_ENTER_DATA"; }
        messageValue() { return CSProto.CMD_COWBOY_ENTER_DATA; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.write(Uint32Array, this.scene_id);
            encodeBuffer.write(Uint32Array, this.table_id);
            encodeBuffer.write(Int32Array, this.player_ini_bet);
            encodeBuffer.write(Int32Array, this.table_status);
            encodeBuffer.write(Int32Array, this.spec_stage_ratio);
            var balloon_listSize = this.balloon_list.length > 60 ? 60 : this.balloon_list.length;
            encodeBuffer.write(Uint16Array, balloon_listSize);
            this.balloon_list.length = balloon_listSize;
            for (var i = 0; i < balloon_listSize; i++) {
                encodeBuffer.skip(this.balloon_list[i].encode(encodeBuffer.buffer(), encodeBuffer.offset()));
            }
            encodeBuffer.write(Int32Array, this.player_pos);
            encodeBuffer.write(Int32Array, this.night_left_time);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.scene_id = decodeBuffer.read(Uint32Array, 1);
            this.table_id = decodeBuffer.read(Uint32Array, 1);
            this.player_ini_bet = decodeBuffer.read(Int32Array, 1);
            this.table_status = decodeBuffer.read(Int32Array, 1);
            this.spec_stage_ratio = decodeBuffer.read(Int32Array, 1);
            var balloon_listSize = decodeBuffer.read(Uint16Array, 1);
            this.balloon_list = new Array(balloon_listSize);
            for (var i = 0; i < balloon_listSize; i++) {
                this.balloon_list[i] = new OneBalloon();
                decodeBuffer.skip(this.balloon_list[i].decode(decodeBuffer.buffer(), decodeBuffer.offset()));
            }
            this.player_pos = decodeBuffer.read(Int32Array, 1);
            this.night_left_time = decodeBuffer.read(Int32Array, 1);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_COWBOY_ENTER_DATA_SC = CMD_COWBOY_ENTER_DATA_SC;
    class CMD_COWBOY_UPT_DATA_SC {
        constructor() {
            this.scene_id = 0; //对应的场景ID后台动态生成的场景handle全游戏唯一 
            this.table_status = 0; //当前的桌台状态参见COWBOY_TABLE_STATUS_DAY等定义 
            this.spec_stage_ratio = 0; //当前己消灭的特殊气球数的进度值取值范围0到100 
            this.ballons_need_clear = 0; //当前气球列表 
            this.night_left_time = 0; //当前为黑夜状态时对应了黑夜的剩余时间对应单位为豪秒 
        }
        messageName() { return "CMD_COWBOY_UPT_DATA"; }
        messageValue() { return CSProto.CMD_COWBOY_UPT_DATA; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.write(Uint32Array, this.scene_id);
            encodeBuffer.write(Int32Array, this.table_status);
            encodeBuffer.write(Int32Array, this.spec_stage_ratio);
            encodeBuffer.write(Int32Array, this.ballons_need_clear);
            encodeBuffer.write(Int32Array, this.night_left_time);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.scene_id = decodeBuffer.read(Uint32Array, 1);
            this.table_status = decodeBuffer.read(Int32Array, 1);
            this.spec_stage_ratio = decodeBuffer.read(Int32Array, 1);
            this.ballons_need_clear = decodeBuffer.read(Int32Array, 1);
            this.night_left_time = decodeBuffer.read(Int32Array, 1);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_COWBOY_UPT_DATA_SC = CMD_COWBOY_UPT_DATA_SC;
    class CMD_COWBOY_BALLOON_BORN_SC {
        constructor() {
            this.scene_id = 0; //对应的场景ID后台动态生成的场景handle全游戏唯一 
            this.balloon_list = new Array(); //将出生的气球列表 
        }
        messageName() { return "CMD_COWBOY_BALLOON_BORN"; }
        messageValue() { return CSProto.CMD_COWBOY_BALLOON_BORN; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.write(Uint32Array, this.scene_id);
            var balloon_listSize = this.balloon_list.length > 30 ? 30 : this.balloon_list.length;
            encodeBuffer.write(Uint16Array, balloon_listSize);
            this.balloon_list.length = balloon_listSize;
            for (var i = 0; i < balloon_listSize; i++) {
                encodeBuffer.skip(this.balloon_list[i].encode(encodeBuffer.buffer(), encodeBuffer.offset()));
            }
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.scene_id = decodeBuffer.read(Uint32Array, 1);
            var balloon_listSize = decodeBuffer.read(Uint16Array, 1);
            this.balloon_list = new Array(balloon_listSize);
            for (var i = 0; i < balloon_listSize; i++) {
                this.balloon_list[i] = new OneBalloon();
                decodeBuffer.skip(this.balloon_list[i].decode(decodeBuffer.buffer(), decodeBuffer.offset()));
            }
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_COWBOY_BALLOON_BORN_SC = CMD_COWBOY_BALLOON_BORN_SC;
    class OneShoot {
        constructor() {
            this.bullet_direct = 0; //描述子弹方向 
            this.bullet_size = 0; //子弹对应射击金币数 
            this.bullet_id = 0; //子弹ID 
        }
        messageName() { return "OneShoot"; }
        messageValue() { return 0; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.write(Int32Array, this.bullet_direct);
            encodeBuffer.write(Int32Array, this.bullet_size);
            encodeBuffer.write(Uint32Array, this.bullet_id);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.bullet_direct = decodeBuffer.read(Int32Array, 1);
            this.bullet_size = decodeBuffer.read(Int32Array, 1);
            this.bullet_id = decodeBuffer.read(Uint32Array, 1);
            return decodeBuffer.length();
        }
    }
    CSProto.OneShoot = OneShoot;
    class CMD_COWBOY_SHOOT_CS {
        constructor() {
            this.one_shoot = new OneShoot(); //射击相关信息 
        }
        messageName() { return "CMD_COWBOY_SHOOT"; }
        messageValue() { return CSProto.CMD_COWBOY_SHOOT; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.skip(this.one_shoot.encode(encodeBuffer.buffer(), encodeBuffer.offset()));
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            decodeBuffer.skip(this.one_shoot.decode(decodeBuffer.buffer(), decodeBuffer.offset()));
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_COWBOY_SHOOT_CS = CMD_COWBOY_SHOOT_CS;
    class CMD_COWBOY_SHOOT_SC {
        constructor() {
            this.role_id = 0; //对应触发玩家ID(是广播协议) 
            this.one_shoot = new OneShoot(); //射击相关信息 
            this.role_gold = 0; //对应触发玩家最新金币数 
        }
        messageName() { return "CMD_COWBOY_SHOOT"; }
        messageValue() { return CSProto.CMD_COWBOY_SHOOT; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.write(Float64Array, this.role_id);
            encodeBuffer.skip(this.one_shoot.encode(encodeBuffer.buffer(), encodeBuffer.offset()));
            encodeBuffer.write(Float64Array, this.role_gold);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.role_id = decodeBuffer.read(Float64Array, 1);
            decodeBuffer.skip(this.one_shoot.decode(decodeBuffer.buffer(), decodeBuffer.offset()));
            this.role_gold = decodeBuffer.read(Float64Array, 1);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_COWBOY_SHOOT_SC = CMD_COWBOY_SHOOT_SC;
    class CMD_COWBOY_HIT_BALLOON_CS {
        constructor() {
            this.one_shoot = new OneShoot(); //射击相关信息 
            this.balloon_born_id = 0; //命中的气球出生id同一场景内在存活的气球中是唯一的 
        }
        messageName() { return "CMD_COWBOY_HIT_BALLOON"; }
        messageValue() { return CSProto.CMD_COWBOY_HIT_BALLOON; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.skip(this.one_shoot.encode(encodeBuffer.buffer(), encodeBuffer.offset()));
            encodeBuffer.write(Int32Array, this.balloon_born_id);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            decodeBuffer.skip(this.one_shoot.decode(decodeBuffer.buffer(), decodeBuffer.offset()));
            this.balloon_born_id = decodeBuffer.read(Int32Array, 1);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_COWBOY_HIT_BALLOON_CS = CMD_COWBOY_HIT_BALLOON_CS;
    class CMD_COWBOY_HIT_BALLOON_SC {
        constructor() {
            this.role_id = 0; //对应触发玩家ID(是广播协议) 
            this.role_gold = 0; //对应触发玩家最新金币数 
            this.one_shoot = new OneShoot(); //射击相关信息 
            this.balloon_born_id = 0; //命中的气球出生id同一场景内在存活的气球中是唯一的 
        }
        messageName() { return "CMD_COWBOY_HIT_BALLOON"; }
        messageValue() { return CSProto.CMD_COWBOY_HIT_BALLOON; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.write(Float64Array, this.role_id);
            encodeBuffer.write(Float64Array, this.role_gold);
            encodeBuffer.skip(this.one_shoot.encode(encodeBuffer.buffer(), encodeBuffer.offset()));
            encodeBuffer.write(Int32Array, this.balloon_born_id);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.role_id = decodeBuffer.read(Float64Array, 1);
            this.role_gold = decodeBuffer.read(Float64Array, 1);
            decodeBuffer.skip(this.one_shoot.decode(decodeBuffer.buffer(), decodeBuffer.offset()));
            this.balloon_born_id = decodeBuffer.read(Int32Array, 1);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_COWBOY_HIT_BALLOON_SC = CMD_COWBOY_HIT_BALLOON_SC;
    class CMD_COWBOY_BALLOON_DEAD_SC {
        constructor() {
            this.balloon_born_id = 0; //对应的气球出生id同一场景内在存活的气球中是唯一的 
            this.bullet_id = 0; //对应命中子弹ID 
            this.balloon_pay_times = 0; //气球赔付倍数 
            this.killer_role_id = 0; //对应的击杀者玩家ID 
            this.killer_got_gold = 0; //对应的击杀者获得金币奖励 
            this.killer_got_bomb = 0; //对应的击杀者获得炸弹奖励为0无炸弹参见COWBOY_BOMB_LVL_11等定义 
            this.killer_role_gold = 0; //对应的击杀者玩家最新金币数 
        }
        messageName() { return "CMD_COWBOY_BALLOON_DEAD"; }
        messageValue() { return CSProto.CMD_COWBOY_BALLOON_DEAD; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.write(Int32Array, this.balloon_born_id);
            encodeBuffer.write(Uint32Array, this.bullet_id);
            encodeBuffer.write(Int32Array, this.balloon_pay_times);
            encodeBuffer.write(Float64Array, this.killer_role_id);
            encodeBuffer.write(Float64Array, this.killer_got_gold);
            encodeBuffer.write(Int32Array, this.killer_got_bomb);
            encodeBuffer.write(Float64Array, this.killer_role_gold);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.balloon_born_id = decodeBuffer.read(Int32Array, 1);
            this.bullet_id = decodeBuffer.read(Uint32Array, 1);
            this.balloon_pay_times = decodeBuffer.read(Int32Array, 1);
            this.killer_role_id = decodeBuffer.read(Float64Array, 1);
            this.killer_got_gold = decodeBuffer.read(Float64Array, 1);
            this.killer_got_bomb = decodeBuffer.read(Int32Array, 1);
            this.killer_role_gold = decodeBuffer.read(Float64Array, 1);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_COWBOY_BALLOON_DEAD_SC = CMD_COWBOY_BALLOON_DEAD_SC;
    class CMD_COWBOY_USE_BOMB_CS {
        constructor() {
            this.bomb_lvl = 0; //使用的炸弹类型参见COWBOY_BOMB_LVL_11等定义 
        }
        messageName() { return "CMD_COWBOY_USE_BOMB"; }
        messageValue() { return CSProto.CMD_COWBOY_USE_BOMB; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.write(Int32Array, this.bomb_lvl);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.bomb_lvl = decodeBuffer.read(Int32Array, 1);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_COWBOY_USE_BOMB_CS = CMD_COWBOY_USE_BOMB_CS;
    class CMD_COWBOY_USE_BOMB_SC {
        constructor() {
            this.use_role_id = 0; //对应的使用者玩家ID 
            this.final_ret = 0; //0成功其他失败仅当成功时会广播否则仅发给使用者自己 
            this.got_gold = 0; //炸出金币数 
            this.bomb_lvl = 0; //使用的炸弹类型参见COWBOY_BOMB_LVL_11等定义 
        }
        messageName() { return "CMD_COWBOY_USE_BOMB"; }
        messageValue() { return CSProto.CMD_COWBOY_USE_BOMB; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.write(Float64Array, this.use_role_id);
            encodeBuffer.write(Int32Array, this.final_ret);
            encodeBuffer.write(Float64Array, this.got_gold);
            encodeBuffer.write(Int32Array, this.bomb_lvl);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.use_role_id = decodeBuffer.read(Float64Array, 1);
            this.final_ret = decodeBuffer.read(Int32Array, 1);
            this.got_gold = decodeBuffer.read(Float64Array, 1);
            this.bomb_lvl = decodeBuffer.read(Int32Array, 1);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_COWBOY_USE_BOMB_SC = CMD_COWBOY_USE_BOMB_SC;
    class CMD_COWBOY_PRESENT_BOMB_CS {
        constructor() {
            this.recv_role_id = 0; //接收方玩家ID 
            this.bomb_lvl = 0; //赠送的炸弹类型参见COWBOY_BOMB_LVL_11等定义 
            this.bomb_count = 0; //赠送的炸弹个数 
        }
        messageName() { return "CMD_COWBOY_PRESENT_BOMB"; }
        messageValue() { return CSProto.CMD_COWBOY_PRESENT_BOMB; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.write(Float64Array, this.recv_role_id);
            encodeBuffer.write(Int32Array, this.bomb_lvl);
            encodeBuffer.write(Int32Array, this.bomb_count);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.recv_role_id = decodeBuffer.read(Float64Array, 1);
            this.bomb_lvl = decodeBuffer.read(Int32Array, 1);
            this.bomb_count = decodeBuffer.read(Int32Array, 1);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_COWBOY_PRESENT_BOMB_CS = CMD_COWBOY_PRESENT_BOMB_CS;
    class CMD_COWBOY_PRESENT_BOMB_SC {
        constructor() {
            this.final_ret = 0; //0成功其他失败 
            this.recv_role_id = 0; //接收方玩家ID 
            this.bomb_lvl = 0; //赠送的炸弹类型参见COWBOY_BOMB_LVL_11等定义 
            this.bomb_count = 0; //赠送的炸弹个数 
        }
        messageName() { return "CMD_COWBOY_PRESENT_BOMB"; }
        messageValue() { return CSProto.CMD_COWBOY_PRESENT_BOMB; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.write(Int32Array, this.final_ret);
            encodeBuffer.write(Float64Array, this.recv_role_id);
            encodeBuffer.write(Int32Array, this.bomb_lvl);
            encodeBuffer.write(Int32Array, this.bomb_count);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.final_ret = decodeBuffer.read(Int32Array, 1);
            this.recv_role_id = decodeBuffer.read(Float64Array, 1);
            this.bomb_lvl = decodeBuffer.read(Int32Array, 1);
            this.bomb_count = decodeBuffer.read(Int32Array, 1);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_COWBOY_PRESENT_BOMB_SC = CMD_COWBOY_PRESENT_BOMB_SC;
    class CS {
        constructor() {
            this.wLen = 0; //包长字段 
            this.wProtoVer = CSProto.Version; //协议版本号 
            this.wCmd = 0; //命令字 
            this.dwUpSeqID = 0; //上行包seqid 
            this.stBody = null; //包体,根据Cmd不同对应到不同的包体 
        }
        messageName() { return ""; }
        messageValue() { return 0; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.write(Uint16Array, this.wLen);
            encodeBuffer.write(Uint16Array, this.wProtoVer);
            encodeBuffer.write(Uint16Array, this.wCmd);
            encodeBuffer.write(Uint32Array, this.dwUpSeqID);
            encodeBuffer.skip(this.stBody.encode(encodeBuffer.buffer(), encodeBuffer.offset()));
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.wLen = decodeBuffer.read(Uint16Array, 1);
            this.wProtoVer = decodeBuffer.read(Uint16Array, 1);
            this.wCmd = decodeBuffer.read(Uint16Array, 1);
            this.dwUpSeqID = decodeBuffer.read(Uint32Array, 1);
            decodeBuffer.skip(this.stBody.decode(decodeBuffer.buffer(), decodeBuffer.offset()));
            return decodeBuffer.length();
        }
    }
    CSProto.CS = CS;
    class SC {
        constructor() {
            this.wLen = 0; //包长字段 
            this.wProtoVer = CSProto.Version; //协议版本号 
            this.wCmd = 0; //命令字 
            this.dwDownSeqID = 0; //下行包seqid 
            this.stBody = null; //包体,根据Cmd不同对应到不同的包体 
        }
        messageName() { return ""; }
        messageValue() { return 0; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            encodeBuffer.write(Uint16Array, this.wLen);
            encodeBuffer.write(Uint16Array, this.wProtoVer);
            encodeBuffer.write(Uint16Array, this.wCmd);
            encodeBuffer.write(Uint32Array, this.dwDownSeqID);
            encodeBuffer.skip(this.stBody.encode(encodeBuffer.buffer(), encodeBuffer.offset()));
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            this.wLen = decodeBuffer.read(Uint16Array, 1);
            this.wProtoVer = decodeBuffer.read(Uint16Array, 1);
            this.wCmd = decodeBuffer.read(Uint16Array, 1);
            this.dwDownSeqID = decodeBuffer.read(Uint32Array, 1);
            decodeBuffer.skip(this.stBody.decode(decodeBuffer.buffer(), decodeBuffer.offset()));
            return decodeBuffer.length();
        }
    }
    CSProto.SC = SC;
    class CMD_ERROR_CS {
        messageName() { return "CMD_ERROR"; }
        messageValue() { return CSProto.CMD_ERROR; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_ERROR_CS = CMD_ERROR_CS;
    class CMD_NOTICE_CMDFAIL_CS {
        messageName() { return "CMD_NOTICE_CMDFAIL"; }
        messageValue() { return CSProto.CMD_NOTICE_CMDFAIL; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_NOTICE_CMDFAIL_CS = CMD_NOTICE_CMDFAIL_CS;
    class CMD_GOLD_NOTENOUGH_ERROR_CS {
        messageName() { return "CMD_GOLD_NOTENOUGH_ERROR"; }
        messageValue() { return CSProto.CMD_GOLD_NOTENOUGH_ERROR; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_GOLD_NOTENOUGH_ERROR_CS = CMD_GOLD_NOTENOUGH_ERROR_CS;
    class CMD_COMM_HYPER_MSGBOX_CS {
        messageName() { return "CMD_COMM_HYPER_MSGBOX"; }
        messageValue() { return CSProto.CMD_COMM_HYPER_MSGBOX; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_COMM_HYPER_MSGBOX_CS = CMD_COMM_HYPER_MSGBOX_CS;
    class CMD_NOTIFY_BULLETIN_CS {
        messageName() { return "CMD_NOTIFY_BULLETIN"; }
        messageValue() { return CSProto.CMD_NOTIFY_BULLETIN; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_NOTIFY_BULLETIN_CS = CMD_NOTIFY_BULLETIN_CS;
    class CMD_NOTIFY_BULLETIN_SC {
        messageName() { return "CMD_NOTIFY_BULLETIN"; }
        messageValue() { return CSProto.CMD_NOTIFY_BULLETIN; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_NOTIFY_BULLETIN_SC = CMD_NOTIFY_BULLETIN_SC;
    class CMD_CLT_FIN_WRAP_SC {
        messageName() { return "CMD_CLT_FIN_WRAP"; }
        messageValue() { return CSProto.CMD_CLT_FIN_WRAP; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_CLT_FIN_WRAP_SC = CMD_CLT_FIN_WRAP_SC;
    class CMD_ALOGOUT_CS {
        messageName() { return "CMD_ALOGOUT"; }
        messageValue() { return CSProto.CMD_ALOGOUT; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_ALOGOUT_CS = CMD_ALOGOUT_CS;
    class CMD_ALOGOUT_SC {
        messageName() { return "CMD_ALOGOUT"; }
        messageValue() { return CSProto.CMD_ALOGOUT; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_ALOGOUT_SC = CMD_ALOGOUT_SC;
    class CMD_KICKOFF_ACCOUNT_CS {
        messageName() { return "CMD_KICKOFF_ACCOUNT"; }
        messageValue() { return CSProto.CMD_KICKOFF_ACCOUNT; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_KICKOFF_ACCOUNT_CS = CMD_KICKOFF_ACCOUNT_CS;
    class CMD_NTF_ENTERVIEW_CS {
        messageName() { return "CMD_NTF_ENTERVIEW"; }
        messageValue() { return CSProto.CMD_NTF_ENTERVIEW; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_NTF_ENTERVIEW_CS = CMD_NTF_ENTERVIEW_CS;
    class CMD_NTF_LEAVEVIEW_CS {
        messageName() { return "CMD_NTF_LEAVEVIEW"; }
        messageValue() { return CSProto.CMD_NTF_LEAVEVIEW; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_NTF_LEAVEVIEW_CS = CMD_NTF_LEAVEVIEW_CS;
    class CMD_SCENE_HISTORY_CHATMSG_CS {
        messageName() { return "CMD_SCENE_HISTORY_CHATMSG"; }
        messageValue() { return CSProto.CMD_SCENE_HISTORY_CHATMSG; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_SCENE_HISTORY_CHATMSG_CS = CMD_SCENE_HISTORY_CHATMSG_CS;
    class CMD_SMART_BEGIN_CS {
        messageName() { return "CMD_SMART_BEGIN"; }
        messageValue() { return CSProto.CMD_SMART_BEGIN; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_SMART_BEGIN_CS = CMD_SMART_BEGIN_CS;
    class CMD_SMART_BEGIN_SC {
        messageName() { return "CMD_SMART_BEGIN"; }
        messageValue() { return CSProto.CMD_SMART_BEGIN; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_SMART_BEGIN_SC = CMD_SMART_BEGIN_SC;
    class CMD_NOTIFY_TOPWINNER_CS {
        messageName() { return "CMD_NOTIFY_TOPWINNER"; }
        messageValue() { return CSProto.CMD_NOTIFY_TOPWINNER; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_NOTIFY_TOPWINNER_CS = CMD_NOTIFY_TOPWINNER_CS;
    class CMD_ROLE_MISC_CS {
        messageName() { return "CMD_ROLE_MISC"; }
        messageValue() { return CSProto.CMD_ROLE_MISC; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_ROLE_MISC_CS = CMD_ROLE_MISC_CS;
    class CMD_ROLE_FIN_CS {
        messageName() { return "CMD_ROLE_FIN"; }
        messageValue() { return CSProto.CMD_ROLE_FIN; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_ROLE_FIN_CS = CMD_ROLE_FIN_CS;
    class CMD_ROLE_FIN_SC {
        messageName() { return "CMD_ROLE_FIN"; }
        messageValue() { return CSProto.CMD_ROLE_FIN; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_ROLE_FIN_SC = CMD_ROLE_FIN_SC;
    class CMD_ATT_CHANGE_CS {
        messageName() { return "CMD_ATT_CHANGE"; }
        messageValue() { return CSProto.CMD_ATT_CHANGE; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_ATT_CHANGE_CS = CMD_ATT_CHANGE_CS;
    class CMD_DO_SLOTROUND_BEGIN_CS {
        messageName() { return "CMD_DO_SLOTROUND_BEGIN"; }
        messageValue() { return CSProto.CMD_DO_SLOTROUND_BEGIN; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_DO_SLOTROUND_BEGIN_CS = CMD_DO_SLOTROUND_BEGIN_CS;
    class CMD_DO_SLOTROUND_END_SC {
        messageName() { return "CMD_DO_SLOTROUND_END"; }
        messageValue() { return CSProto.CMD_DO_SLOTROUND_END; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_DO_SLOTROUND_END_SC = CMD_DO_SLOTROUND_END_SC;
    class CMD_ADD_SLOTMONEY_CS {
        messageName() { return "CMD_ADD_SLOTMONEY"; }
        messageValue() { return CSProto.CMD_ADD_SLOTMONEY; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_ADD_SLOTMONEY_CS = CMD_ADD_SLOTMONEY_CS;
    class CMD_ADD_SLOTMONEY_SC {
        messageName() { return "CMD_ADD_SLOTMONEY"; }
        messageValue() { return CSProto.CMD_ADD_SLOTMONEY; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_ADD_SLOTMONEY_SC = CMD_ADD_SLOTMONEY_SC;
    class CMD_NOTIFY_SLOTTABDATA_CS {
        messageName() { return "CMD_NOTIFY_SLOTTABDATA"; }
        messageValue() { return CSProto.CMD_NOTIFY_SLOTTABDATA; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_NOTIFY_SLOTTABDATA_CS = CMD_NOTIFY_SLOTTABDATA_CS;
    class CMD_LOTTERY_ENTER_CS {
        messageName() { return "CMD_LOTTERY_ENTER"; }
        messageValue() { return CSProto.CMD_LOTTERY_ENTER; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_LOTTERY_ENTER_CS = CMD_LOTTERY_ENTER_CS;
    class CMD_LOTTERY_REFRESHDATA_CS {
        messageName() { return "CMD_LOTTERY_REFRESHDATA"; }
        messageValue() { return CSProto.CMD_LOTTERY_REFRESHDATA; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_LOTTERY_REFRESHDATA_CS = CMD_LOTTERY_REFRESHDATA_CS;
    class CMD_LOTTERY_ROUND_END_CS {
        messageName() { return "CMD_LOTTERY_ROUND_END"; }
        messageValue() { return CSProto.CMD_LOTTERY_ROUND_END; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_LOTTERY_ROUND_END_CS = CMD_LOTTERY_ROUND_END_CS;
    class CMD_LOTTERY_HERORANK_CS {
        messageName() { return "CMD_LOTTERY_HERORANK"; }
        messageValue() { return CSProto.CMD_LOTTERY_HERORANK; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_LOTTERY_HERORANK_CS = CMD_LOTTERY_HERORANK_CS;
    class CMD_LOTTERY_REFRESH_SELF_BET_CS {
        messageName() { return "CMD_LOTTERY_REFRESH_SELF_BET"; }
        messageValue() { return CSProto.CMD_LOTTERY_REFRESH_SELF_BET; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_LOTTERY_REFRESH_SELF_BET_CS = CMD_LOTTERY_REFRESH_SELF_BET_CS;
    class CMD_LOTTERY_HISTORY_CHATMSG_CS {
        messageName() { return "CMD_LOTTERY_HISTORY_CHATMSG"; }
        messageValue() { return CSProto.CMD_LOTTERY_HISTORY_CHATMSG; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_LOTTERY_HISTORY_CHATMSG_CS = CMD_LOTTERY_HISTORY_CHATMSG_CS;
    class CMD_CLASSICFRUIT_ENTERDATA_CS {
        messageName() { return "CMD_CLASSICFRUIT_ENTERDATA"; }
        messageValue() { return CSProto.CMD_CLASSICFRUIT_ENTERDATA; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_CLASSICFRUIT_ENTERDATA_CS = CMD_CLASSICFRUIT_ENTERDATA_CS;
    class CMD_CLASSICFRUIT_REFRESHDATA_CS {
        messageName() { return "CMD_CLASSICFRUIT_REFRESHDATA"; }
        messageValue() { return CSProto.CMD_CLASSICFRUIT_REFRESHDATA; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_CLASSICFRUIT_REFRESHDATA_CS = CMD_CLASSICFRUIT_REFRESHDATA_CS;
    class CMD_CLASSICFRUIT_ROUND_END_CS {
        messageName() { return "CMD_CLASSICFRUIT_ROUND_END"; }
        messageValue() { return CSProto.CMD_CLASSICFRUIT_ROUND_END; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_CLASSICFRUIT_ROUND_END_CS = CMD_CLASSICFRUIT_ROUND_END_CS;
    class CMD_CLASSICFRUIT_REFRESH_SELF_BET_CS {
        messageName() { return "CMD_CLASSICFRUIT_REFRESH_SELF_BET"; }
        messageValue() { return CSProto.CMD_CLASSICFRUIT_REFRESH_SELF_BET; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_CLASSICFRUIT_REFRESH_SELF_BET_CS = CMD_CLASSICFRUIT_REFRESH_SELF_BET_CS;
    class CMD_CLASSICFRUIT_HEARTBEAT_CS {
        messageName() { return "CMD_CLASSICFRUIT_HEARTBEAT"; }
        messageValue() { return CSProto.CMD_CLASSICFRUIT_HEARTBEAT; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_CLASSICFRUIT_HEARTBEAT_CS = CMD_CLASSICFRUIT_HEARTBEAT_CS;
    class CMD_CLASSICFRUIT_HEARTBEAT_SC {
        messageName() { return "CMD_CLASSICFRUIT_HEARTBEAT"; }
        messageValue() { return CSProto.CMD_CLASSICFRUIT_HEARTBEAT; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_CLASSICFRUIT_HEARTBEAT_SC = CMD_CLASSICFRUIT_HEARTBEAT_SC;
    class CMD_CLASSICFRUIT_SIGNUP_BANKER_CS {
        messageName() { return "CMD_CLASSICFRUIT_SIGNUP_BANKER"; }
        messageValue() { return CSProto.CMD_CLASSICFRUIT_SIGNUP_BANKER; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_CLASSICFRUIT_SIGNUP_BANKER_CS = CMD_CLASSICFRUIT_SIGNUP_BANKER_CS;
    class CMD_CLASSICFRUIT_QUIT_BANKER_CS {
        messageName() { return "CMD_CLASSICFRUIT_QUIT_BANKER"; }
        messageValue() { return CSProto.CMD_CLASSICFRUIT_QUIT_BANKER; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_CLASSICFRUIT_QUIT_BANKER_CS = CMD_CLASSICFRUIT_QUIT_BANKER_CS;
    class CMD_CLASSICFRUIT_UPDATE_BANKER_STAT_CS {
        messageName() { return "CMD_CLASSICFRUIT_UPDATE_BANKER_STAT"; }
        messageValue() { return CSProto.CMD_CLASSICFRUIT_UPDATE_BANKER_STAT; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_CLASSICFRUIT_UPDATE_BANKER_STAT_CS = CMD_CLASSICFRUIT_UPDATE_BANKER_STAT_CS;
    class CMD_CLASSICFRUIT_CURBANKERLIST_CS {
        messageName() { return "CMD_CLASSICFRUIT_CURBANKERLIST"; }
        messageValue() { return CSProto.CMD_CLASSICFRUIT_CURBANKERLIST; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_CLASSICFRUIT_CURBANKERLIST_CS = CMD_CLASSICFRUIT_CURBANKERLIST_CS;
    class CMD_CLASSICFRUIT_UPDATE_CURBANKER_CS {
        messageName() { return "CMD_CLASSICFRUIT_UPDATE_CURBANKER"; }
        messageValue() { return CSProto.CMD_CLASSICFRUIT_UPDATE_CURBANKER; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_CLASSICFRUIT_UPDATE_CURBANKER_CS = CMD_CLASSICFRUIT_UPDATE_CURBANKER_CS;
    class CMD_SHARK_ENTERDATA_CS {
        messageName() { return "CMD_SHARK_ENTERDATA"; }
        messageValue() { return CSProto.CMD_SHARK_ENTERDATA; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_SHARK_ENTERDATA_CS = CMD_SHARK_ENTERDATA_CS;
    class CMD_SHARK_REFRESHDATA_CS {
        messageName() { return "CMD_SHARK_REFRESHDATA"; }
        messageValue() { return CSProto.CMD_SHARK_REFRESHDATA; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_SHARK_REFRESHDATA_CS = CMD_SHARK_REFRESHDATA_CS;
    class CMD_SHARK_ROUND_END_CS {
        messageName() { return "CMD_SHARK_ROUND_END"; }
        messageValue() { return CSProto.CMD_SHARK_ROUND_END; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_SHARK_ROUND_END_CS = CMD_SHARK_ROUND_END_CS;
    class CMD_SHARK_REFRESH_SELF_BET_CS {
        messageName() { return "CMD_SHARK_REFRESH_SELF_BET"; }
        messageValue() { return CSProto.CMD_SHARK_REFRESH_SELF_BET; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_SHARK_REFRESH_SELF_BET_CS = CMD_SHARK_REFRESH_SELF_BET_CS;
    class CMD_SHARK_HEARTBEAT_CS {
        messageName() { return "CMD_SHARK_HEARTBEAT"; }
        messageValue() { return CSProto.CMD_SHARK_HEARTBEAT; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_SHARK_HEARTBEAT_CS = CMD_SHARK_HEARTBEAT_CS;
    class CMD_SHARK_HEARTBEAT_SC {
        messageName() { return "CMD_SHARK_HEARTBEAT"; }
        messageValue() { return CSProto.CMD_SHARK_HEARTBEAT; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_SHARK_HEARTBEAT_SC = CMD_SHARK_HEARTBEAT_SC;
    class CMD_SHARK_SIGNUP_BANKER_CS {
        messageName() { return "CMD_SHARK_SIGNUP_BANKER"; }
        messageValue() { return CSProto.CMD_SHARK_SIGNUP_BANKER; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_SHARK_SIGNUP_BANKER_CS = CMD_SHARK_SIGNUP_BANKER_CS;
    class CMD_SHARK_QUIT_BANKER_CS {
        messageName() { return "CMD_SHARK_QUIT_BANKER"; }
        messageValue() { return CSProto.CMD_SHARK_QUIT_BANKER; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_SHARK_QUIT_BANKER_CS = CMD_SHARK_QUIT_BANKER_CS;
    class CMD_SHARK_UPDATE_BANKER_STAT_CS {
        messageName() { return "CMD_SHARK_UPDATE_BANKER_STAT"; }
        messageValue() { return CSProto.CMD_SHARK_UPDATE_BANKER_STAT; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_SHARK_UPDATE_BANKER_STAT_CS = CMD_SHARK_UPDATE_BANKER_STAT_CS;
    class CMD_SHARK_CURBANKERLIST_CS {
        messageName() { return "CMD_SHARK_CURBANKERLIST"; }
        messageValue() { return CSProto.CMD_SHARK_CURBANKERLIST; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_SHARK_CURBANKERLIST_CS = CMD_SHARK_CURBANKERLIST_CS;
    class CMD_SHARK_UPDATE_CURBANKER_CS {
        messageName() { return "CMD_SHARK_UPDATE_CURBANKER"; }
        messageValue() { return CSProto.CMD_SHARK_UPDATE_CURBANKER; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_SHARK_UPDATE_CURBANKER_CS = CMD_SHARK_UPDATE_CURBANKER_CS;
    class CMD_GET_CONLOGIN_GIFT_CS {
        messageName() { return "CMD_GET_CONLOGIN_GIFT"; }
        messageValue() { return CSProto.CMD_GET_CONLOGIN_GIFT; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_GET_CONLOGIN_GIFT_CS = CMD_GET_CONLOGIN_GIFT_CS;
    class CMD_GET_CONLOGIN_GIFT_SC {
        messageName() { return "CMD_GET_CONLOGIN_GIFT"; }
        messageValue() { return CSProto.CMD_GET_CONLOGIN_GIFT; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_GET_CONLOGIN_GIFT_SC = CMD_GET_CONLOGIN_GIFT_SC;
    class CMD_GET_ONLINETIME_GIFT_CS {
        messageName() { return "CMD_GET_ONLINETIME_GIFT"; }
        messageValue() { return CSProto.CMD_GET_ONLINETIME_GIFT; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_GET_ONLINETIME_GIFT_CS = CMD_GET_ONLINETIME_GIFT_CS;
    class CMD_CONLOGIN_GIFT_CS {
        messageName() { return "CMD_CONLOGIN_GIFT"; }
        messageValue() { return CSProto.CMD_CONLOGIN_GIFT; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_CONLOGIN_GIFT_CS = CMD_CONLOGIN_GIFT_CS;
    class CMD_SKIP_NEWERGUIDE_CS {
        messageName() { return "CMD_SKIP_NEWERGUIDE"; }
        messageValue() { return CSProto.CMD_SKIP_NEWERGUIDE; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_SKIP_NEWERGUIDE_CS = CMD_SKIP_NEWERGUIDE_CS;
    class CMD_SKIP_NEWERGUIDE_SC {
        messageName() { return "CMD_SKIP_NEWERGUIDE"; }
        messageValue() { return CSProto.CMD_SKIP_NEWERGUIDE; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_SKIP_NEWERGUIDE_SC = CMD_SKIP_NEWERGUIDE_SC;
    class CMD_NOTIFY_CHARGE_SUCC_SC {
        messageName() { return "CMD_NOTIFY_CHARGE_SUCC"; }
        messageValue() { return CSProto.CMD_NOTIFY_CHARGE_SUCC; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_NOTIFY_CHARGE_SUCC_SC = CMD_NOTIFY_CHARGE_SUCC_SC;
    class CMD_CHANGE_HEADPHOTO_SC {
        messageName() { return "CMD_CHANGE_HEADPHOTO"; }
        messageValue() { return CSProto.CMD_CHANGE_HEADPHOTO; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_CHANGE_HEADPHOTO_SC = CMD_CHANGE_HEADPHOTO_SC;
    class CMD_NOTIFY_THROWUP_GOLD_CS {
        messageName() { return "CMD_NOTIFY_THROWUP_GOLD"; }
        messageValue() { return CSProto.CMD_NOTIFY_THROWUP_GOLD; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_NOTIFY_THROWUP_GOLD_CS = CMD_NOTIFY_THROWUP_GOLD_CS;
    class CMD_NOTIFY_CHARGESUCC_CS {
        messageName() { return "CMD_NOTIFY_CHARGESUCC"; }
        messageValue() { return CSProto.CMD_NOTIFY_CHARGESUCC; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_NOTIFY_CHARGESUCC_CS = CMD_NOTIFY_CHARGESUCC_CS;
    class CMD_NOTIFY_EXTCHARGE_TIMER_CS {
        messageName() { return "CMD_NOTIFY_EXTCHARGE_TIMER"; }
        messageValue() { return CSProto.CMD_NOTIFY_EXTCHARGE_TIMER; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_NOTIFY_EXTCHARGE_TIMER_CS = CMD_NOTIFY_EXTCHARGE_TIMER_CS;
    class CMD_NOTIFY_EXTCHARGE_TIMER_SC {
        messageName() { return "CMD_NOTIFY_EXTCHARGE_TIMER"; }
        messageValue() { return CSProto.CMD_NOTIFY_EXTCHARGE_TIMER; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_NOTIFY_EXTCHARGE_TIMER_SC = CMD_NOTIFY_EXTCHARGE_TIMER_SC;
    class CMD_PRIZEDRAW_CURINFO_CS {
        messageName() { return "CMD_PRIZEDRAW_CURINFO"; }
        messageValue() { return CSProto.CMD_PRIZEDRAW_CURINFO; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_PRIZEDRAW_CURINFO_CS = CMD_PRIZEDRAW_CURINFO_CS;
    class CMD_PLAY_PRIZEDRAW_CS {
        messageName() { return "CMD_PLAY_PRIZEDRAW"; }
        messageValue() { return CSProto.CMD_PLAY_PRIZEDRAW; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_PLAY_PRIZEDRAW_CS = CMD_PLAY_PRIZEDRAW_CS;
    class CMD_QUERY_MONEYTREE_CS {
        messageName() { return "CMD_QUERY_MONEYTREE"; }
        messageValue() { return CSProto.CMD_QUERY_MONEYTREE; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_QUERY_MONEYTREE_CS = CMD_QUERY_MONEYTREE_CS;
    class CMD_GATHER_MONEYTREE_CS {
        messageName() { return "CMD_GATHER_MONEYTREE"; }
        messageValue() { return CSProto.CMD_GATHER_MONEYTREE; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_GATHER_MONEYTREE_CS = CMD_GATHER_MONEYTREE_CS;
    class CMD_MODIFY_SELFPROP_SC {
        messageName() { return "CMD_MODIFY_SELFPROP"; }
        messageValue() { return CSProto.CMD_MODIFY_SELFPROP; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_MODIFY_SELFPROP_SC = CMD_MODIFY_SELFPROP_SC;
    class CMD_ADV_ALIPAY_GIFTPKG_CS {
        messageName() { return "CMD_ADV_ALIPAY_GIFTPKG"; }
        messageValue() { return CSProto.CMD_ADV_ALIPAY_GIFTPKG; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_ADV_ALIPAY_GIFTPKG_CS = CMD_ADV_ALIPAY_GIFTPKG_CS;
    class CMD_NOTIFY_BEGIN_CHARGE_SC {
        messageName() { return "CMD_NOTIFY_BEGIN_CHARGE"; }
        messageValue() { return CSProto.CMD_NOTIFY_BEGIN_CHARGE; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_NOTIFY_BEGIN_CHARGE_SC = CMD_NOTIFY_BEGIN_CHARGE_SC;
    class CMD_NOTIFY_UPT_EXTAPP_TIPS_CS {
        messageName() { return "CMD_NOTIFY_UPT_EXTAPP_TIPS"; }
        messageValue() { return CSProto.CMD_NOTIFY_UPT_EXTAPP_TIPS; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_NOTIFY_UPT_EXTAPP_TIPS_CS = CMD_NOTIFY_UPT_EXTAPP_TIPS_CS;
    class CMD_REFRESH_CUR_ONLINETIME_GIFT_CS {
        messageName() { return "CMD_REFRESH_CUR_ONLINETIME_GIFT"; }
        messageValue() { return CSProto.CMD_REFRESH_CUR_ONLINETIME_GIFT; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_REFRESH_CUR_ONLINETIME_GIFT_CS = CMD_REFRESH_CUR_ONLINETIME_GIFT_CS;
    class CMD_APPSTORE_REPUTATION_STATE_CS {
        messageName() { return "CMD_APPSTORE_REPUTATION_STATE"; }
        messageValue() { return CSProto.CMD_APPSTORE_REPUTATION_STATE; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_APPSTORE_REPUTATION_STATE_CS = CMD_APPSTORE_REPUTATION_STATE_CS;
    class CMD_WRITE_APPSTORE_REPUTATION_SC {
        messageName() { return "CMD_WRITE_APPSTORE_REPUTATION"; }
        messageValue() { return CSProto.CMD_WRITE_APPSTORE_REPUTATION; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_WRITE_APPSTORE_REPUTATION_SC = CMD_WRITE_APPSTORE_REPUTATION_SC;
    class CMD_NOTIFY_APPSTORE_REPUTATION_CS {
        messageName() { return "CMD_NOTIFY_APPSTORE_REPUTATION"; }
        messageValue() { return CSProto.CMD_NOTIFY_APPSTORE_REPUTATION; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_NOTIFY_APPSTORE_REPUTATION_CS = CMD_NOTIFY_APPSTORE_REPUTATION_CS;
    class CMD_NOTIFY_APPSTORE_REPUTATION_SC {
        messageName() { return "CMD_NOTIFY_APPSTORE_REPUTATION"; }
        messageValue() { return CSProto.CMD_NOTIFY_APPSTORE_REPUTATION; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_NOTIFY_APPSTORE_REPUTATION_SC = CMD_NOTIFY_APPSTORE_REPUTATION_SC;
    class CMD_GET_APPSTORE_REPUTATION_GIFT_CS {
        messageName() { return "CMD_GET_APPSTORE_REPUTATION_GIFT"; }
        messageValue() { return CSProto.CMD_GET_APPSTORE_REPUTATION_GIFT; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_GET_APPSTORE_REPUTATION_GIFT_CS = CMD_GET_APPSTORE_REPUTATION_GIFT_CS;
    class CMD_HIDDEN_CHARGE_PLATFORM_CS {
        messageName() { return "CMD_HIDDEN_CHARGE_PLATFORM"; }
        messageValue() { return CSProto.CMD_HIDDEN_CHARGE_PLATFORM; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_HIDDEN_CHARGE_PLATFORM_CS = CMD_HIDDEN_CHARGE_PLATFORM_CS;
    class CMD_IS_NEWROLE_REGISTER_CS {
        messageName() { return "CMD_IS_NEWROLE_REGISTER"; }
        messageValue() { return CSProto.CMD_IS_NEWROLE_REGISTER; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_IS_NEWROLE_REGISTER_CS = CMD_IS_NEWROLE_REGISTER_CS;
    class CMD_IS_NEWROLE_REGISTER_SC {
        messageName() { return "CMD_IS_NEWROLE_REGISTER"; }
        messageValue() { return CSProto.CMD_IS_NEWROLE_REGISTER; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_IS_NEWROLE_REGISTER_SC = CMD_IS_NEWROLE_REGISTER_SC;
    class CMD_CAR_ENTERDATA_CS {
        messageName() { return "CMD_CAR_ENTERDATA"; }
        messageValue() { return CSProto.CMD_CAR_ENTERDATA; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_CAR_ENTERDATA_CS = CMD_CAR_ENTERDATA_CS;
    class CMD_CAR_REFRESHDATA_CS {
        messageName() { return "CMD_CAR_REFRESHDATA"; }
        messageValue() { return CSProto.CMD_CAR_REFRESHDATA; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_CAR_REFRESHDATA_CS = CMD_CAR_REFRESHDATA_CS;
    class CMD_CAR_ROUND_END_CS {
        messageName() { return "CMD_CAR_ROUND_END"; }
        messageValue() { return CSProto.CMD_CAR_ROUND_END; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_CAR_ROUND_END_CS = CMD_CAR_ROUND_END_CS;
    class CMD_CAR_REFRESH_SELF_BET_CS {
        messageName() { return "CMD_CAR_REFRESH_SELF_BET"; }
        messageValue() { return CSProto.CMD_CAR_REFRESH_SELF_BET; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_CAR_REFRESH_SELF_BET_CS = CMD_CAR_REFRESH_SELF_BET_CS;
    class CMD_CAR_HEARTBEAT_CS {
        messageName() { return "CMD_CAR_HEARTBEAT"; }
        messageValue() { return CSProto.CMD_CAR_HEARTBEAT; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_CAR_HEARTBEAT_CS = CMD_CAR_HEARTBEAT_CS;
    class CMD_CAR_HEARTBEAT_SC {
        messageName() { return "CMD_CAR_HEARTBEAT"; }
        messageValue() { return CSProto.CMD_CAR_HEARTBEAT; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_CAR_HEARTBEAT_SC = CMD_CAR_HEARTBEAT_SC;
    class CMD_CAR_SIGNUP_BANKER_CS {
        messageName() { return "CMD_CAR_SIGNUP_BANKER"; }
        messageValue() { return CSProto.CMD_CAR_SIGNUP_BANKER; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_CAR_SIGNUP_BANKER_CS = CMD_CAR_SIGNUP_BANKER_CS;
    class CMD_CAR_QUIT_BANKER_CS {
        messageName() { return "CMD_CAR_QUIT_BANKER"; }
        messageValue() { return CSProto.CMD_CAR_QUIT_BANKER; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_CAR_QUIT_BANKER_CS = CMD_CAR_QUIT_BANKER_CS;
    class CMD_CAR_UPDATE_BANKER_STAT_CS {
        messageName() { return "CMD_CAR_UPDATE_BANKER_STAT"; }
        messageValue() { return CSProto.CMD_CAR_UPDATE_BANKER_STAT; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_CAR_UPDATE_BANKER_STAT_CS = CMD_CAR_UPDATE_BANKER_STAT_CS;
    class CMD_CAR_CURBANKERLIST_CS {
        messageName() { return "CMD_CAR_CURBANKERLIST"; }
        messageValue() { return CSProto.CMD_CAR_CURBANKERLIST; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_CAR_CURBANKERLIST_CS = CMD_CAR_CURBANKERLIST_CS;
    class CMD_CAR_UPDATE_CURBANKER_CS {
        messageName() { return "CMD_CAR_UPDATE_CURBANKER"; }
        messageValue() { return CSProto.CMD_CAR_UPDATE_CURBANKER; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_CAR_UPDATE_CURBANKER_CS = CMD_CAR_UPDATE_CURBANKER_CS;
    class CMD_CAR_BIGWINNERRANK_CS {
        messageName() { return "CMD_CAR_BIGWINNERRANK"; }
        messageValue() { return CSProto.CMD_CAR_BIGWINNERRANK; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_CAR_BIGWINNERRANK_CS = CMD_CAR_BIGWINNERRANK_CS;
    class CMD_DO_UNBIND_CURMOBILE_CS {
        messageName() { return "CMD_DO_UNBIND_CURMOBILE"; }
        messageValue() { return CSProto.CMD_DO_UNBIND_CURMOBILE; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_DO_UNBIND_CURMOBILE_CS = CMD_DO_UNBIND_CURMOBILE_CS;
    class CMD_DO_UNBIND_CURMOBILE_SC {
        messageName() { return "CMD_DO_UNBIND_CURMOBILE"; }
        messageValue() { return CSProto.CMD_DO_UNBIND_CURMOBILE; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_DO_UNBIND_CURMOBILE_SC = CMD_DO_UNBIND_CURMOBILE_SC;
    class CMD_NOTIFY_ROUNDINDEXERR_SC {
        messageName() { return "CMD_NOTIFY_ROUNDINDEXERR"; }
        messageValue() { return CSProto.CMD_NOTIFY_ROUNDINDEXERR; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_NOTIFY_ROUNDINDEXERR_SC = CMD_NOTIFY_ROUNDINDEXERR_SC;
    class CMD_ZJH_ENTERDATA_CS {
        messageName() { return "CMD_ZJH_ENTERDATA"; }
        messageValue() { return CSProto.CMD_ZJH_ENTERDATA; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_ZJH_ENTERDATA_CS = CMD_ZJH_ENTERDATA_CS;
    class CMD_ZJH_BEGIN_ONEGAME_CS {
        messageName() { return "CMD_ZJH_BEGIN_ONEGAME"; }
        messageValue() { return CSProto.CMD_ZJH_BEGIN_ONEGAME; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_ZJH_BEGIN_ONEGAME_CS = CMD_ZJH_BEGIN_ONEGAME_CS;
    class CMD_ZJH_CHANGE_ROOM_CS {
        messageName() { return "CMD_ZJH_CHANGE_ROOM"; }
        messageValue() { return CSProto.CMD_ZJH_CHANGE_ROOM; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_ZJH_CHANGE_ROOM_CS = CMD_ZJH_CHANGE_ROOM_CS;
    class CMD_ZJH_CHANGE_ROOM_SC {
        messageName() { return "CMD_ZJH_CHANGE_ROOM"; }
        messageValue() { return CSProto.CMD_ZJH_CHANGE_ROOM; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_ZJH_CHANGE_ROOM_SC = CMD_ZJH_CHANGE_ROOM_SC;
    class CMD_ZJH_UPT_PLAYER_DATA_CS {
        messageName() { return "CMD_ZJH_UPT_PLAYER_DATA"; }
        messageValue() { return CSProto.CMD_ZJH_UPT_PLAYER_DATA; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_ZJH_UPT_PLAYER_DATA_CS = CMD_ZJH_UPT_PLAYER_DATA_CS;
    class CMD_ZJH_UPT_TABLE_DATA_CS {
        messageName() { return "CMD_ZJH_UPT_TABLE_DATA"; }
        messageValue() { return CSProto.CMD_ZJH_UPT_TABLE_DATA; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_ZJH_UPT_TABLE_DATA_CS = CMD_ZJH_UPT_TABLE_DATA_CS;
    class CMD_ZJH_END_ONEGAME_CS {
        messageName() { return "CMD_ZJH_END_ONEGAME"; }
        messageValue() { return CSProto.CMD_ZJH_END_ONEGAME; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_ZJH_END_ONEGAME_CS = CMD_ZJH_END_ONEGAME_CS;
    class CMD_ZJH_PLAYER_ALLDATA_CS {
        messageName() { return "CMD_ZJH_PLAYER_ALLDATA"; }
        messageValue() { return CSProto.CMD_ZJH_PLAYER_ALLDATA; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_ZJH_PLAYER_ALLDATA_CS = CMD_ZJH_PLAYER_ALLDATA_CS;
    class CMD_ZJH_PLAYER_FIRSTROUNDINFO_CS {
        messageName() { return "CMD_ZJH_PLAYER_FIRSTROUNDINFO"; }
        messageValue() { return CSProto.CMD_ZJH_PLAYER_FIRSTROUNDINFO; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_ZJH_PLAYER_FIRSTROUNDINFO_CS = CMD_ZJH_PLAYER_FIRSTROUNDINFO_CS;
    class CMD_ZJH_DO_READY_CS {
        messageName() { return "CMD_ZJH_DO_READY"; }
        messageValue() { return CSProto.CMD_ZJH_DO_READY; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_ZJH_DO_READY_CS = CMD_ZJH_DO_READY_CS;
    class CMD_ZJH_DO_READY_SC {
        messageName() { return "CMD_ZJH_DO_READY"; }
        messageValue() { return CSProto.CMD_ZJH_DO_READY; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_ZJH_DO_READY_SC = CMD_ZJH_DO_READY_SC;
    class CMD_ZJH_DO_DISCARD_CS {
        messageName() { return "CMD_ZJH_DO_DISCARD"; }
        messageValue() { return CSProto.CMD_ZJH_DO_DISCARD; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_ZJH_DO_DISCARD_CS = CMD_ZJH_DO_DISCARD_CS;
    class CMD_ZJH_DO_DISCARD_SC {
        messageName() { return "CMD_ZJH_DO_DISCARD"; }
        messageValue() { return CSProto.CMD_ZJH_DO_DISCARD; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_ZJH_DO_DISCARD_SC = CMD_ZJH_DO_DISCARD_SC;
    class CMD_ZJH_DO_FORBIDCOMPARE_CS {
        messageName() { return "CMD_ZJH_DO_FORBIDCOMPARE"; }
        messageValue() { return CSProto.CMD_ZJH_DO_FORBIDCOMPARE; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_ZJH_DO_FORBIDCOMPARE_CS = CMD_ZJH_DO_FORBIDCOMPARE_CS;
    class CMD_ZJH_DO_FORBIDCOMPARE_SC {
        messageName() { return "CMD_ZJH_DO_FORBIDCOMPARE"; }
        messageValue() { return CSProto.CMD_ZJH_DO_FORBIDCOMPARE; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_ZJH_DO_FORBIDCOMPARE_SC = CMD_ZJH_DO_FORBIDCOMPARE_SC;
    class CMD_ZJH_DO_DOUBLE_SC {
        messageName() { return "CMD_ZJH_DO_DOUBLE"; }
        messageValue() { return CSProto.CMD_ZJH_DO_DOUBLE; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_ZJH_DO_DOUBLE_SC = CMD_ZJH_DO_DOUBLE_SC;
    class CMD_ZJH_DO_VIEWCARD_CS {
        messageName() { return "CMD_ZJH_DO_VIEWCARD"; }
        messageValue() { return CSProto.CMD_ZJH_DO_VIEWCARD; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_ZJH_DO_VIEWCARD_CS = CMD_ZJH_DO_VIEWCARD_CS;
    class CMD_PAYCENTER_NOTIFY_SERVER_SUCC_SC {
        messageName() { return "CMD_PAYCENTER_NOTIFY_SERVER_SUCC"; }
        messageValue() { return CSProto.CMD_PAYCENTER_NOTIFY_SERVER_SUCC; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_PAYCENTER_NOTIFY_SERVER_SUCC_SC = CMD_PAYCENTER_NOTIFY_SERVER_SUCC_SC;
    class CMD_PAYCENTER_NOTIFY_CLIENT_SUCC_CS {
        messageName() { return "CMD_PAYCENTER_NOTIFY_CLIENT_SUCC"; }
        messageValue() { return CSProto.CMD_PAYCENTER_NOTIFY_CLIENT_SUCC; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_PAYCENTER_NOTIFY_CLIENT_SUCC_CS = CMD_PAYCENTER_NOTIFY_CLIENT_SUCC_CS;
    class CMD_GET_CONLOGIN_GIFT_NEWVERSION_CS {
        messageName() { return "CMD_GET_CONLOGIN_GIFT_NEWVERSION"; }
        messageValue() { return CSProto.CMD_GET_CONLOGIN_GIFT_NEWVERSION; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_GET_CONLOGIN_GIFT_NEWVERSION_CS = CMD_GET_CONLOGIN_GIFT_NEWVERSION_CS;
    class CMD_BULL_ENTERDATA_CS {
        messageName() { return "CMD_BULL_ENTERDATA"; }
        messageValue() { return CSProto.CMD_BULL_ENTERDATA; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_BULL_ENTERDATA_CS = CMD_BULL_ENTERDATA_CS;
    class CMD_BULL_ROUND_END_CS {
        messageName() { return "CMD_BULL_ROUND_END"; }
        messageValue() { return CSProto.CMD_BULL_ROUND_END; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_BULL_ROUND_END_CS = CMD_BULL_ROUND_END_CS;
    class CMD_BULL_SIGNUP_BANKER_CS {
        messageName() { return "CMD_BULL_SIGNUP_BANKER"; }
        messageValue() { return CSProto.CMD_BULL_SIGNUP_BANKER; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_BULL_SIGNUP_BANKER_CS = CMD_BULL_SIGNUP_BANKER_CS;
    class CMD_BULL_QUIT_BANKER_CS {
        messageName() { return "CMD_BULL_QUIT_BANKER"; }
        messageValue() { return CSProto.CMD_BULL_QUIT_BANKER; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_BULL_QUIT_BANKER_CS = CMD_BULL_QUIT_BANKER_CS;
    class CMD_BULL_CURBANKERLIST_CS {
        messageName() { return "CMD_BULL_CURBANKERLIST"; }
        messageValue() { return CSProto.CMD_BULL_CURBANKERLIST; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_BULL_CURBANKERLIST_CS = CMD_BULL_CURBANKERLIST_CS;
    class CMD_BULL_HEARTBEAT_CS {
        messageName() { return "CMD_BULL_HEARTBEAT"; }
        messageValue() { return CSProto.CMD_BULL_HEARTBEAT; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_BULL_HEARTBEAT_CS = CMD_BULL_HEARTBEAT_CS;
    class CMD_BULL_HEARTBEAT_SC {
        messageName() { return "CMD_BULL_HEARTBEAT"; }
        messageValue() { return CSProto.CMD_BULL_HEARTBEAT; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_BULL_HEARTBEAT_SC = CMD_BULL_HEARTBEAT_SC;
    class CMD_BULL_REFRESHDATA_CS {
        messageName() { return "CMD_BULL_REFRESHDATA"; }
        messageValue() { return CSProto.CMD_BULL_REFRESHDATA; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_BULL_REFRESHDATA_CS = CMD_BULL_REFRESHDATA_CS;
    class CMD_BULL_UPDATE_CURBANKER_CS {
        messageName() { return "CMD_BULL_UPDATE_CURBANKER"; }
        messageValue() { return CSProto.CMD_BULL_UPDATE_CURBANKER; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_BULL_UPDATE_CURBANKER_CS = CMD_BULL_UPDATE_CURBANKER_CS;
    class CMD_BULL_BIGWINNERRANK_CS {
        messageName() { return "CMD_BULL_BIGWINNERRANK"; }
        messageValue() { return CSProto.CMD_BULL_BIGWINNERRANK; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_BULL_BIGWINNERRANK_CS = CMD_BULL_BIGWINNERRANK_CS;
    class CMD_BULL_UPDATE_BANKER_STAT_CS {
        messageName() { return "CMD_BULL_UPDATE_BANKER_STAT"; }
        messageValue() { return CSProto.CMD_BULL_UPDATE_BANKER_STAT; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_BULL_UPDATE_BANKER_STAT_CS = CMD_BULL_UPDATE_BANKER_STAT_CS;
    class CMD_BULL_ROUND_START_CS {
        messageName() { return "CMD_BULL_ROUND_START"; }
        messageValue() { return CSProto.CMD_BULL_ROUND_START; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_BULL_ROUND_START_CS = CMD_BULL_ROUND_START_CS;
    class CMD_BULL_REFRESH_SELF_BET_CS {
        messageName() { return "CMD_BULL_REFRESH_SELF_BET"; }
        messageValue() { return CSProto.CMD_BULL_REFRESH_SELF_BET; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_BULL_REFRESH_SELF_BET_CS = CMD_BULL_REFRESH_SELF_BET_CS;
    class CMD_GOLDMINER_ENTERDATA_CS {
        messageName() { return "CMD_GOLDMINER_ENTERDATA"; }
        messageValue() { return CSProto.CMD_GOLDMINER_ENTERDATA; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_GOLDMINER_ENTERDATA_CS = CMD_GOLDMINER_ENTERDATA_CS;
    class CMD_GOLDMINER_GAME_AGAIN_CS {
        messageName() { return "CMD_GOLDMINER_GAME_AGAIN"; }
        messageValue() { return CSProto.CMD_GOLDMINER_GAME_AGAIN; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_GOLDMINER_GAME_AGAIN_CS = CMD_GOLDMINER_GAME_AGAIN_CS;
    class CMD_CHINESEPHRASE_DO_GAME_CS {
        messageName() { return "CMD_CHINESEPHRASE_DO_GAME"; }
        messageValue() { return CSProto.CMD_CHINESEPHRASE_DO_GAME; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_CHINESEPHRASE_DO_GAME_CS = CMD_CHINESEPHRASE_DO_GAME_CS;
    class CMD_CHINESEPHRASE_REFRESH_CS {
        messageName() { return "CMD_CHINESEPHRASE_REFRESH"; }
        messageValue() { return CSProto.CMD_CHINESEPHRASE_REFRESH; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_CHINESEPHRASE_REFRESH_CS = CMD_CHINESEPHRASE_REFRESH_CS;
    class CMD_CHINESEPHRASE_PICNOTFOUND_SC {
        messageName() { return "CMD_CHINESEPHRASE_PICNOTFOUND"; }
        messageValue() { return CSProto.CMD_CHINESEPHRASE_PICNOTFOUND; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_CHINESEPHRASE_PICNOTFOUND_SC = CMD_CHINESEPHRASE_PICNOTFOUND_SC;
    class CMD_LABA_ENTERDATA_CS {
        messageName() { return "CMD_LABA_ENTERDATA"; }
        messageValue() { return CSProto.CMD_LABA_ENTERDATA; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_LABA_ENTERDATA_CS = CMD_LABA_ENTERDATA_CS;
    class CMD_LABA_REFRESHDATA_CS {
        messageName() { return "CMD_LABA_REFRESHDATA"; }
        messageValue() { return CSProto.CMD_LABA_REFRESHDATA; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_LABA_REFRESHDATA_CS = CMD_LABA_REFRESHDATA_CS;
    class CMD_LABA_PLAYER_AWARDINFO_CS {
        messageName() { return "CMD_LABA_PLAYER_AWARDINFO"; }
        messageValue() { return CSProto.CMD_LABA_PLAYER_AWARDINFO; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_LABA_PLAYER_AWARDINFO_CS = CMD_LABA_PLAYER_AWARDINFO_CS;
    class CMD_ITEMSTORE_GETSALEHIS_CS {
        messageName() { return "CMD_ITEMSTORE_GETSALEHIS"; }
        messageValue() { return CSProto.CMD_ITEMSTORE_GETSALEHIS; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_ITEMSTORE_GETSALEHIS_CS = CMD_ITEMSTORE_GETSALEHIS_CS;
    class CMD_ITEMSTORE_QUERY_BUYLOG_CS {
        messageName() { return "CMD_ITEMSTORE_QUERY_BUYLOG"; }
        messageValue() { return CSProto.CMD_ITEMSTORE_QUERY_BUYLOG; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_ITEMSTORE_QUERY_BUYLOG_CS = CMD_ITEMSTORE_QUERY_BUYLOG_CS;
    class CMD_DO_REFRESH_HALL_VIEW_CS {
        messageName() { return "CMD_DO_REFRESH_HALL_VIEW"; }
        messageValue() { return CSProto.CMD_DO_REFRESH_HALL_VIEW; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_DO_REFRESH_HALL_VIEW_CS = CMD_DO_REFRESH_HALL_VIEW_CS;
    class CMD_DO_REFRESH_HALL_VIEW_SC {
        messageName() { return "CMD_DO_REFRESH_HALL_VIEW"; }
        messageValue() { return CSProto.CMD_DO_REFRESH_HALL_VIEW; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_DO_REFRESH_HALL_VIEW_SC = CMD_DO_REFRESH_HALL_VIEW_SC;
    class CMD_GET_BUYUHALL_VERSION_GIFT_CS {
        messageName() { return "CMD_GET_BUYUHALL_VERSION_GIFT"; }
        messageValue() { return CSProto.CMD_GET_BUYUHALL_VERSION_GIFT; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_GET_BUYUHALL_VERSION_GIFT_CS = CMD_GET_BUYUHALL_VERSION_GIFT_CS;
    class CMD_ENTER_BUYUHALL_MOREFUNC_CS {
        messageName() { return "CMD_ENTER_BUYUHALL_MOREFUNC"; }
        messageValue() { return CSProto.CMD_ENTER_BUYUHALL_MOREFUNC; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_ENTER_BUYUHALL_MOREFUNC_CS = CMD_ENTER_BUYUHALL_MOREFUNC_CS;
    class CMD_ENTER_BUYUHALL_MOREFUNC_SC {
        messageName() { return "CMD_ENTER_BUYUHALL_MOREFUNC"; }
        messageValue() { return CSProto.CMD_ENTER_BUYUHALL_MOREFUNC; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_ENTER_BUYUHALL_MOREFUNC_SC = CMD_ENTER_BUYUHALL_MOREFUNC_SC;
    class CMD_ZODIAC_ENTERDATA_CS {
        messageName() { return "CMD_ZODIAC_ENTERDATA"; }
        messageValue() { return CSProto.CMD_ZODIAC_ENTERDATA; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_ZODIAC_ENTERDATA_CS = CMD_ZODIAC_ENTERDATA_CS;
    class CMD_ZODIAC_ROUND_END_CS {
        messageName() { return "CMD_ZODIAC_ROUND_END"; }
        messageValue() { return CSProto.CMD_ZODIAC_ROUND_END; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_ZODIAC_ROUND_END_CS = CMD_ZODIAC_ROUND_END_CS;
    class CMD_ZODIAC_REFRESHDATA_CS {
        messageName() { return "CMD_ZODIAC_REFRESHDATA"; }
        messageValue() { return CSProto.CMD_ZODIAC_REFRESHDATA; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_ZODIAC_REFRESHDATA_CS = CMD_ZODIAC_REFRESHDATA_CS;
    class CMD_COWBOY_ENTER_DATA_CS {
        messageName() { return "CMD_COWBOY_ENTER_DATA"; }
        messageValue() { return CSProto.CMD_COWBOY_ENTER_DATA; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_COWBOY_ENTER_DATA_CS = CMD_COWBOY_ENTER_DATA_CS;
    class CMD_COWBOY_UPT_DATA_CS {
        messageName() { return "CMD_COWBOY_UPT_DATA"; }
        messageValue() { return CSProto.CMD_COWBOY_UPT_DATA; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_COWBOY_UPT_DATA_CS = CMD_COWBOY_UPT_DATA_CS;
    class CMD_COWBOY_BALLOON_BORN_CS {
        messageName() { return "CMD_COWBOY_BALLOON_BORN"; }
        messageValue() { return CSProto.CMD_COWBOY_BALLOON_BORN; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_COWBOY_BALLOON_BORN_CS = CMD_COWBOY_BALLOON_BORN_CS;
    class CMD_COWBOY_BALLOON_DEAD_CS {
        messageName() { return "CMD_COWBOY_BALLOON_DEAD"; }
        messageValue() { return CSProto.CMD_COWBOY_BALLOON_DEAD; }
        encode(buffer, offset = 0) {
            var encodeBuffer = new EncodeBuffer(buffer, offset);
            return encodeBuffer.length();
        }
        decode(buffer, offset = 0) {
            var decodeBuffer = new DecodeBuffer(buffer, offset);
            return decodeBuffer.length();
        }
    }
    CSProto.CMD_COWBOY_BALLOON_DEAD_CS = CMD_COWBOY_BALLOON_DEAD_CS;
})(CSProto = exports.CSProto || (exports.CSProto = {}));
//# sourceMappingURL=TinyGameCSProto.xml.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var KConnect;
(function (KConnect) {
    let CommandType;
    (function (CommandType) {
        CommandType[CommandType["WX_CMD_ZERO_PLACEHOLDER"] = 0] = "WX_CMD_ZERO_PLACEHOLDER";
        CommandType[CommandType["WX_CMD_ERROR"] = 1] = "WX_CMD_ERROR";
        CommandType[CommandType["WX_CMD_AUTH"] = 16] = "WX_CMD_AUTH";
        CommandType[CommandType["WX_CMD_REPLAY"] = 18] = "WX_CMD_REPLAY";
        CommandType[CommandType["WX_CMD_PROC"] = 96] = "WX_CMD_PROC";
    })(CommandType = KConnect.CommandType || (KConnect.CommandType = {}));
    let AuthType;
    (function (AuthType) {
        AuthType[AuthType["AUTHTYPE_AUTO_ACC"] = 0] = "AUTHTYPE_AUTO_ACC";
        AuthType[AuthType["AUTHTYPE_REG_ACC"] = 1] = "AUTHTYPE_REG_ACC";
    })(AuthType = KConnect.AuthType || (KConnect.AuthType = {}));
    let ProcCmdBitMaskDef;
    (function (ProcCmdBitMaskDef) {
        ProcCmdBitMaskDef[ProcCmdBitMaskDef["CMDPROCMASKTYPE_NONE"] = 0] = "CMDPROCMASKTYPE_NONE";
        ProcCmdBitMaskDef[ProcCmdBitMaskDef["CMDPROCMASKTYPE_ENCRYPT"] = 1] = "CMDPROCMASKTYPE_ENCRYPT";
    })(ProcCmdBitMaskDef = KConnect.ProcCmdBitMaskDef || (KConnect.ProcCmdBitMaskDef = {}));
    let Common;
    (function (Common) {
        Common[Common["RET_OK"] = 0] = "RET_OK";
        Common[Common["RET_NEED_LOGIN"] = 1] = "RET_NEED_LOGIN";
        Common[Common["RET_AUTH_TOKEN_ERROR"] = 1001] = "RET_AUTH_TOKEN_ERROR";
        Common[Common["RET_AUTH_TOKEN_EXPIRED"] = 1002] = "RET_AUTH_TOKEN_EXPIRED";
        Common[Common["MAX_LEN_RS_SID"] = 129] = "MAX_LEN_RS_SID";
        Common[Common["MAX_ACCOUNT_LEN"] = 136] = "MAX_ACCOUNT_LEN";
        Common[Common["MAX_LEN_PWD_MD5"] = 17] = "MAX_LEN_PWD_MD5";
        Common[Common["RET_SYSTEM_ERR"] = 2] = "RET_SYSTEM_ERR";
        Common[Common["MAX_EXTERNAL_PARA_LEN"] = 256] = "MAX_EXTERNAL_PARA_LEN";
        Common[Common["RET_RELAY_ERR"] = 3] = "RET_RELAY_ERR";
        Common[Common["MAX_LEN_PROC_BODY"] = 32768] = "MAX_LEN_PROC_BODY";
        Common[Common["RET_SVR_MATAINING"] = 4] = "RET_SVR_MATAINING";
        Common[Common["MAX_EXTERNAL_NAME_LEN"] = 512] = "MAX_EXTERNAL_NAME_LEN";
        Common[Common["MAX_EXTERNAL_TOKEN_LEN"] = 512] = "MAX_EXTERNAL_TOKEN_LEN";
        Common[Common["MAX_LEN_LOGINAUTH_DESC"] = 512] = "MAX_LEN_LOGINAUTH_DESC";
        Common[Common["MAX_EXTERNAL_ACCOUNT_LEN"] = 512] = "MAX_EXTERNAL_ACCOUNT_LEN";
    })(Common = KConnect.Common || (KConnect.Common = {}));
})(KConnect = exports.KConnect || (exports.KConnect = {}));
//# sourceMappingURL=KConnectProto.proto.js.map
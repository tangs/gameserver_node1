"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const csProtoDecoder_1 = require("./csProtoDecoder");
var csproto;
(function (csproto) {
    var KConnectProto;
    (function (KConnectProto) {
        var EncodeBuffer = csProtoDecoder_1.csprotos.EncodeBuffer;
        var DecodeBuffer = csProtoDecoder_1.csprotos.DecodeBuffer;
        //command export
        let command;
        (function (command) {
            command[command["WX_CMD_ERROR"] = 1] = "WX_CMD_ERROR";
            command[command["WX_CMD_AUTH"] = 16] = "WX_CMD_AUTH";
            command[command["WX_CMD_REPLAY"] = 18] = "WX_CMD_REPLAY";
            command[command["WX_CMD_AUTH_EXTERNAL"] = 21] = "WX_CMD_AUTH_EXTERNAL";
            command[command["WX_CMD_NEW_UNIAUTH"] = 22] = "WX_CMD_NEW_UNIAUTH";
            command[command["WX_CMD_PROC"] = 96] = "WX_CMD_PROC";
        })(command = KConnectProto.command || (KConnectProto.command = {}));
        KConnectProto.command_name = {
            1: "WX_CMD_ERROR",
            16: "WX_CMD_AUTH",
            18: "WX_CMD_REPLAY",
            21: "WX_CMD_AUTH_EXTERNAL",
            22: "WX_CMD_NEW_UNIAUTH",
            96: "WX_CMD_PROC",
        };
        KConnectProto.WX_CMD_ERROR = 0x0001; // 出错 
        KConnectProto.WX_CMD_AUTH = 0x0010; // 后续将逐步废弃:游戏本身的鉴权请求 
        KConnectProto.WX_CMD_REPLAY = 0x0012; // 断线重连请求 
        KConnectProto.WX_CMD_AUTH_EXTERNAL = 0x0015; // 后续将逐步废弃:通过外部帐户鉴权 
        KConnectProto.WX_CMD_NEW_UNIAUTH = 0x0016; // 通过外部帐户鉴权 
        KConnectProto.WX_CMD_PROC = 0x0060; // 业务逻辑数据请求 
        //enum export
        KConnectProto.Version = 1; // 当前协议版本号 
        KConnectProto.RET_OK = 0; // 正常 
        KConnectProto.RET_NEED_LOGIN = 1; // 需要登陆 
        KConnectProto.RET_SYSTEM_ERR = 2; // 系统错误 
        KConnectProto.RET_RELAY_ERR = 3; // 透传包错误 
        KConnectProto.RET_SVR_MATAINING = 4; // 游戏正在努力维护中请您稍后再试 
        KConnectProto.RET_LOGIN_NEEDCODE = 1001; // 需要验证码 
        KConnectProto.RET_LOGIN_CODEERR = 1002; // 验证码错误 
        KConnectProto.RET_LOGIN_PWDERR = 1003; // 密码错误 
        KConnectProto.RET_LOGIN_FORBID = 1004; // 禁止登陆 
        KConnectProto.RET_LOGIN_FAIL = 1005; // 登陆失败 
        KConnectProto.RET_LOGIN_FREQLIMIT = 1006; // 频率限制 
        KConnectProto.RET_LOGIN_UINERR = 1007; // 号码错误 
        KConnectProto.RET_LOGIN_TOKENERR = 1009; // 鉴权token错误 
        KConnectProto.RET_LOGIN_TOKEN_EXPIRED = 1010; // 鉴权token己过期 
        KConnectProto.MAX_LEN_PWD_MD5 = 17; // 密码md5值最大长度 
        KConnectProto.MAX_LEN_RS_SID = 129; // RS返回的SID最大长度 
        KConnectProto.MAX_LEN_LOGINAUTH_DESC = 512; // 鉴权验证及验证码验证刷新协议中的保留字段即错误描述字段最大长度 
        KConnectProto.MAX_LEN_PROC_BODY = 32768; // WX_CMD_PROC协议中的body对应的buff最大长度 
        KConnectProto.MAX_ACCOUNT_LEN = 136; // 帐号最大长度 
        KConnectProto.MAX_EXTERNAL_ACCOUNT_LEN = 512; // 外部帐号最大长度 
        KConnectProto.MAX_EXTERNAL_TOKEN_LEN = 512; // 外部帐号相关token或者密码的最大长度 
        KConnectProto.MAX_EXTERNAL_NAME_LEN = 512; // 外部帐号相关名字的最大长度 
        KConnectProto.MAX_EXTERNAL_PARA_LEN = 256; // 外部帐号相关的其他参数最大长度 
        KConnectProto.AUTHTYPE_AUTO_ACC = 0; // 自动生成帐号 
        KConnectProto.AUTHTYPE_REG_ACC = 1; // 游戏内注册帐号 
        KConnectProto.AUTH_CHANNEL_COMMON = 0; // 未知通用 
        KConnectProto.AUTH_CHANNEL_VIVO = 2; // VIVO 
        KConnectProto.AUTH_CHANNEL_LEGAME = 11; // 乐视 
        KConnectProto.MASK_CMD_PROC_NONE = 0; // 无任何标记 
        KConnectProto.MASK_CMD_PROC_ENCRYPT = 1; // GameProtoPkg己加密 
        //body export
        class WX_CMD_ERROR_SC {
            constructor() {
                this.Code = 0; //错误码 
            }
            messageName() { return "WX_CMD_ERROR"; }
            messageValue() { return KConnectProto.WX_CMD_ERROR; }
            encode(buffer, offset = 0) {
                var encodeBuffer = new EncodeBuffer(buffer, offset);
                encodeBuffer.write(Int16Array, this.Code);
                return encodeBuffer.length();
            }
            decode(buffer, offset = 0) {
                var decodeBuffer = new DecodeBuffer(buffer, offset);
                this.Code = decodeBuffer.read(Int16Array, 1);
                return decodeBuffer.length();
            }
        }
        KConnectProto.WX_CMD_ERROR_SC = WX_CMD_ERROR_SC;
        class WX_CMD_AUTH_CS {
            constructor() {
                this.GameId = 0; //游戏id,由RS统一分配,老虎机先暂定为1 
                this.AuthType = 0; //鉴权类型参见相关枚举 
                this.Account = ""; //帐号 
                this.PwdMD5 = ""; //密码md5值,将原始密码进行一次MD5运算得到的16字节的密码 
            }
            messageName() { return "WX_CMD_AUTH"; }
            messageValue() { return KConnectProto.WX_CMD_AUTH; }
            encode(buffer, offset = 0) {
                var encodeBuffer = new EncodeBuffer(buffer, offset);
                encodeBuffer.write(Uint16Array, this.GameId);
                encodeBuffer.write(Int8Array, this.AuthType);
                encodeBuffer.writeString(this.Account, KConnectProto.MAX_ACCOUNT_LEN);
                encodeBuffer.writeString(this.PwdMD5, KConnectProto.MAX_LEN_PWD_MD5);
                return encodeBuffer.length();
            }
            decode(buffer, offset = 0) {
                var decodeBuffer = new DecodeBuffer(buffer, offset);
                this.GameId = decodeBuffer.read(Uint16Array, 1);
                this.AuthType = decodeBuffer.read(Int8Array, 1);
                this.Account = decodeBuffer.readString(KConnectProto.MAX_ACCOUNT_LEN);
                this.PwdMD5 = decodeBuffer.readString(KConnectProto.MAX_LEN_PWD_MD5);
                return decodeBuffer.length();
            }
        }
        KConnectProto.WX_CMD_AUTH_CS = WX_CMD_AUTH_CS;
        class WX_CMD_AUTH_SC {
            constructor() {
                this.GameId = 0; //游戏id 
                this.Account = ""; //帐号 
                this.RetCode = 0; //具体命令字相关的错误码参见RET_LOGIN_NEEDCODE等定义 
                this.RetCodeDesc = ""; //登录错误时具体的提示语 
                this.SessionId = ""; //服务端生成的session id，用于用户断线重连等，客户端侧需要记录下来，以备后用 
            }
            messageName() { return "WX_CMD_AUTH"; }
            messageValue() { return KConnectProto.WX_CMD_AUTH; }
            encode(buffer, offset = 0) {
                var encodeBuffer = new EncodeBuffer(buffer, offset);
                encodeBuffer.write(Uint16Array, this.GameId);
                encodeBuffer.writeString(this.Account, KConnectProto.MAX_ACCOUNT_LEN);
                encodeBuffer.write(Int16Array, this.RetCode);
                encodeBuffer.writeString(this.RetCodeDesc, KConnectProto.MAX_LEN_LOGINAUTH_DESC);
                if (this.RetCode == 0) {
                    encodeBuffer.writeString(this.SessionId, KConnectProto.MAX_LEN_RS_SID);
                }
                return encodeBuffer.length();
            }
            decode(buffer, offset = 0) {
                var decodeBuffer = new DecodeBuffer(buffer, offset);
                this.GameId = decodeBuffer.read(Uint16Array, 1);
                this.Account = decodeBuffer.readString(KConnectProto.MAX_ACCOUNT_LEN);
                this.RetCode = decodeBuffer.read(Int16Array, 1);
                this.RetCodeDesc = decodeBuffer.readString(KConnectProto.MAX_LEN_LOGINAUTH_DESC);
                if (this.RetCode == 0) {
                    this.SessionId = decodeBuffer.readString(KConnectProto.MAX_LEN_RS_SID);
                }
                return decodeBuffer.length();
            }
        }
        KConnectProto.WX_CMD_AUTH_SC = WX_CMD_AUTH_SC;
        class WX_CMD_AUTH_EXTERNAL_CS {
            constructor() {
                this.AuthChannel = 0; //鉴权渠道参见具体游戏协议中的相关枚举SPEC_CHANNEL_VER_CLASSICFRUIT等 
                this.OuterAcc = ""; //外部渠道帐号 
                this.OuterToken = ""; //外部帐号相关token或者密码 
                this.OuterName = ""; //外部帐号相关名字 
                this.OtherPara1 = ""; //上传额外内部帐号即deviceid备用参数1 
                this.OtherPara2 = ""; //备用参数2 
                this.OtherPara3 = ""; //备用参数3 
            }
            messageName() { return "WX_CMD_AUTH_EXTERNAL"; }
            messageValue() { return KConnectProto.WX_CMD_AUTH_EXTERNAL; }
            encode(buffer, offset = 0) {
                var encodeBuffer = new EncodeBuffer(buffer, offset);
                encodeBuffer.write(Int32Array, this.AuthChannel);
                encodeBuffer.writeString(this.OuterAcc, KConnectProto.MAX_EXTERNAL_ACCOUNT_LEN);
                encodeBuffer.writeString(this.OuterToken, KConnectProto.MAX_EXTERNAL_TOKEN_LEN);
                encodeBuffer.writeString(this.OuterName, KConnectProto.MAX_EXTERNAL_NAME_LEN);
                encodeBuffer.writeString(this.OtherPara1, KConnectProto.MAX_EXTERNAL_PARA_LEN);
                encodeBuffer.writeString(this.OtherPara2, KConnectProto.MAX_EXTERNAL_PARA_LEN);
                encodeBuffer.writeString(this.OtherPara3, KConnectProto.MAX_EXTERNAL_PARA_LEN);
                return encodeBuffer.length();
            }
            decode(buffer, offset = 0) {
                var decodeBuffer = new DecodeBuffer(buffer, offset);
                this.AuthChannel = decodeBuffer.read(Int32Array, 1);
                this.OuterAcc = decodeBuffer.readString(KConnectProto.MAX_EXTERNAL_ACCOUNT_LEN);
                this.OuterToken = decodeBuffer.readString(KConnectProto.MAX_EXTERNAL_TOKEN_LEN);
                this.OuterName = decodeBuffer.readString(KConnectProto.MAX_EXTERNAL_NAME_LEN);
                this.OtherPara1 = decodeBuffer.readString(KConnectProto.MAX_EXTERNAL_PARA_LEN);
                this.OtherPara2 = decodeBuffer.readString(KConnectProto.MAX_EXTERNAL_PARA_LEN);
                this.OtherPara3 = decodeBuffer.readString(KConnectProto.MAX_EXTERNAL_PARA_LEN);
                return decodeBuffer.length();
            }
        }
        KConnectProto.WX_CMD_AUTH_EXTERNAL_CS = WX_CMD_AUTH_EXTERNAL_CS;
        class WX_CMD_AUTH_EXTERNAL_SC {
            constructor() {
                this.OuterAcc = ""; //原样返回上行的外部渠道帐号 
                this.GameId = 0; //游戏路由id,客户端需要记录下来在充值等操作中可能会用到 
                this.ExtRetPara1 = ""; //上传额外内部帐号即deviceid 
                this.ExtRetPara2 = ""; //备用参数2 
                this.ExtRetPara3 = ""; //备用参数3 
                this.RetCode = 0; //具体命令字相关的错误码参见RET_LOGIN_NEEDCODE等定义 
                this.RetCodeDesc = ""; //登录错误时具体的提示语 
                this.SessionId = ""; //服务端生成的session id，用于用户断线重连等，客户端侧需要记录下来，以备后用 
            }
            messageName() { return "WX_CMD_AUTH_EXTERNAL"; }
            messageValue() { return KConnectProto.WX_CMD_AUTH_EXTERNAL; }
            encode(buffer, offset = 0) {
                var encodeBuffer = new EncodeBuffer(buffer, offset);
                encodeBuffer.writeString(this.OuterAcc, KConnectProto.MAX_EXTERNAL_ACCOUNT_LEN);
                encodeBuffer.write(Uint16Array, this.GameId);
                encodeBuffer.writeString(this.ExtRetPara1, KConnectProto.MAX_EXTERNAL_PARA_LEN);
                encodeBuffer.writeString(this.ExtRetPara2, KConnectProto.MAX_EXTERNAL_PARA_LEN);
                encodeBuffer.writeString(this.ExtRetPara3, KConnectProto.MAX_EXTERNAL_PARA_LEN);
                encodeBuffer.write(Int16Array, this.RetCode);
                encodeBuffer.writeString(this.RetCodeDesc, KConnectProto.MAX_LEN_LOGINAUTH_DESC);
                if (this.RetCode == 0) {
                    encodeBuffer.writeString(this.SessionId, KConnectProto.MAX_LEN_RS_SID);
                }
                return encodeBuffer.length();
            }
            decode(buffer, offset = 0) {
                var decodeBuffer = new DecodeBuffer(buffer, offset);
                this.OuterAcc = decodeBuffer.readString(KConnectProto.MAX_EXTERNAL_ACCOUNT_LEN);
                this.GameId = decodeBuffer.read(Uint16Array, 1);
                this.ExtRetPara1 = decodeBuffer.readString(KConnectProto.MAX_EXTERNAL_PARA_LEN);
                this.ExtRetPara2 = decodeBuffer.readString(KConnectProto.MAX_EXTERNAL_PARA_LEN);
                this.ExtRetPara3 = decodeBuffer.readString(KConnectProto.MAX_EXTERNAL_PARA_LEN);
                this.RetCode = decodeBuffer.read(Int16Array, 1);
                this.RetCodeDesc = decodeBuffer.readString(KConnectProto.MAX_LEN_LOGINAUTH_DESC);
                if (this.RetCode == 0) {
                    this.SessionId = decodeBuffer.readString(KConnectProto.MAX_LEN_RS_SID);
                }
                return decodeBuffer.length();
            }
        }
        KConnectProto.WX_CMD_AUTH_EXTERNAL_SC = WX_CMD_AUTH_EXTERNAL_SC;
        class WX_CMD_NEW_UNIAUTH_CS {
            constructor() {
                this.AuthChannel = 0; //鉴权渠道参见游戏协议文件中NEWACCSYSTEM_CHANNEL_VISITOR等枚举 
                this.ChannelAcc = ""; //对应帐号游客渠道时与设备ID一致 
                this.DeviceID = ""; //设备ID 
                this.IdentityToken = ""; //鉴权token 
            }
            messageName() { return "WX_CMD_NEW_UNIAUTH"; }
            messageValue() { return KConnectProto.WX_CMD_NEW_UNIAUTH; }
            encode(buffer, offset = 0) {
                var encodeBuffer = new EncodeBuffer(buffer, offset);
                encodeBuffer.write(Int32Array, this.AuthChannel);
                encodeBuffer.writeString(this.ChannelAcc, KConnectProto.MAX_EXTERNAL_ACCOUNT_LEN);
                encodeBuffer.writeString(this.DeviceID, KConnectProto.MAX_EXTERNAL_ACCOUNT_LEN);
                encodeBuffer.writeString(this.IdentityToken, KConnectProto.MAX_EXTERNAL_ACCOUNT_LEN);
                return encodeBuffer.length();
            }
            decode(buffer, offset = 0) {
                var decodeBuffer = new DecodeBuffer(buffer, offset);
                this.AuthChannel = decodeBuffer.read(Int32Array, 1);
                this.ChannelAcc = decodeBuffer.readString(KConnectProto.MAX_EXTERNAL_ACCOUNT_LEN);
                this.DeviceID = decodeBuffer.readString(KConnectProto.MAX_EXTERNAL_ACCOUNT_LEN);
                this.IdentityToken = decodeBuffer.readString(KConnectProto.MAX_EXTERNAL_ACCOUNT_LEN);
                return decodeBuffer.length();
            }
        }
        KConnectProto.WX_CMD_NEW_UNIAUTH_CS = WX_CMD_NEW_UNIAUTH_CS;
        class WX_CMD_NEW_UNIAUTH_SC {
            constructor() {
                this.RetCode = 0; //具体命令字相关的错误码 
                this.RetCodeDesc = ""; //登录错误时具体的提示语 
                this.SessionId = ""; //服务端生成的session id，用于用户断线重连等，客户端侧需要记录下来，以备后用 
            }
            messageName() { return "WX_CMD_NEW_UNIAUTH"; }
            messageValue() { return KConnectProto.WX_CMD_NEW_UNIAUTH; }
            encode(buffer, offset = 0) {
                var encodeBuffer = new EncodeBuffer(buffer, offset);
                encodeBuffer.write(Int16Array, this.RetCode);
                encodeBuffer.writeString(this.RetCodeDesc, KConnectProto.MAX_LEN_LOGINAUTH_DESC);
                if (this.RetCode == 0) {
                    encodeBuffer.writeString(this.SessionId, KConnectProto.MAX_LEN_RS_SID);
                }
                return encodeBuffer.length();
            }
            decode(buffer, offset = 0) {
                var decodeBuffer = new DecodeBuffer(buffer, offset);
                this.RetCode = decodeBuffer.read(Int16Array, 1);
                this.RetCodeDesc = decodeBuffer.readString(KConnectProto.MAX_LEN_LOGINAUTH_DESC);
                if (this.RetCode == 0) {
                    this.SessionId = decodeBuffer.readString(KConnectProto.MAX_LEN_RS_SID);
                }
                return decodeBuffer.length();
            }
        }
        KConnectProto.WX_CMD_NEW_UNIAUTH_SC = WX_CMD_NEW_UNIAUTH_SC;
        class WX_CMD_REPLAY_CS {
            constructor() {
                this.AuthChannel = 0; //鉴权渠道参见游戏协议文件中NEWACCSYSTEM_CHANNEL_VISITOR等枚举 
                this.Account = ""; //对应帐号游客渠道时与设备ID一致 
                this.SessionId = ""; //客户端保存的session id 
                this.InnerAccount = ""; //内部帐号 
            }
            messageName() { return "WX_CMD_REPLAY"; }
            messageValue() { return KConnectProto.WX_CMD_REPLAY; }
            encode(buffer, offset = 0) {
                var encodeBuffer = new EncodeBuffer(buffer, offset);
                encodeBuffer.write(Int32Array, this.AuthChannel);
                encodeBuffer.writeString(this.Account, KConnectProto.MAX_EXTERNAL_ACCOUNT_LEN);
                encodeBuffer.writeString(this.SessionId, KConnectProto.MAX_LEN_RS_SID);
                encodeBuffer.writeString(this.InnerAccount, KConnectProto.MAX_EXTERNAL_ACCOUNT_LEN);
                return encodeBuffer.length();
            }
            decode(buffer, offset = 0) {
                var decodeBuffer = new DecodeBuffer(buffer, offset);
                this.AuthChannel = decodeBuffer.read(Int32Array, 1);
                this.Account = decodeBuffer.readString(KConnectProto.MAX_EXTERNAL_ACCOUNT_LEN);
                this.SessionId = decodeBuffer.readString(KConnectProto.MAX_LEN_RS_SID);
                this.InnerAccount = decodeBuffer.readString(KConnectProto.MAX_EXTERNAL_ACCOUNT_LEN);
                return decodeBuffer.length();
            }
        }
        KConnectProto.WX_CMD_REPLAY_CS = WX_CMD_REPLAY_CS;
        class WX_CMD_REPLAY_SC {
            constructor() {
                this.SubResultCode = 0; //具体命令字相关的错误码 
            }
            messageName() { return "WX_CMD_REPLAY"; }
            messageValue() { return KConnectProto.WX_CMD_REPLAY; }
            encode(buffer, offset = 0) {
                var encodeBuffer = new EncodeBuffer(buffer, offset);
                encodeBuffer.write(Int16Array, this.SubResultCode);
                return encodeBuffer.length();
            }
            decode(buffer, offset = 0) {
                var decodeBuffer = new DecodeBuffer(buffer, offset);
                this.SubResultCode = decodeBuffer.read(Int16Array, 1);
                return decodeBuffer.length();
            }
        }
        KConnectProto.WX_CMD_REPLAY_SC = WX_CMD_REPLAY_SC;
        class WX_CMD_PROC_CS {
            constructor() {
                this.Mask = 0; //状态控制掩码(按bit位标记) 
                this.GameProtoPkg = new Array(); //需要透传到GameServer的编码包，按照业务侧的协议类型和格式定义编码而成 
            }
            messageName() { return "WX_CMD_PROC"; }
            messageValue() { return KConnectProto.WX_CMD_PROC; }
            encode(buffer, offset = 0) {
                var encodeBuffer = new EncodeBuffer(buffer, offset);
                encodeBuffer.write(Int8Array, this.Mask);
                var GameProtoPkgSize = this.GameProtoPkg.length > KConnectProto.MAX_LEN_PROC_BODY ? KConnectProto.MAX_LEN_PROC_BODY : this.GameProtoPkg.length;
                encodeBuffer.write(Uint16Array, GameProtoPkgSize);
                this.GameProtoPkg.length = GameProtoPkgSize;
                encodeBuffer.write(Int8Array, this.GameProtoPkg);
                return encodeBuffer.length();
            }
            decode(buffer, offset = 0) {
                var decodeBuffer = new DecodeBuffer(buffer, offset);
                this.Mask = decodeBuffer.read(Int8Array, 1);
                var GameProtoPkgSize = decodeBuffer.read(Uint16Array, 1);
                this.GameProtoPkg = new Array(GameProtoPkgSize);
                this.GameProtoPkg = decodeBuffer.read(Int8Array, GameProtoPkgSize);
                return decodeBuffer.length();
            }
        }
        KConnectProto.WX_CMD_PROC_CS = WX_CMD_PROC_CS;
        class WX_CMD_PROC_SC {
            constructor() {
                this.Mask = 0; //状态控制掩码(按bit位标记) 
                this.GameProtoPkg = new Array(); //需要透传到客户端的编码包，按照业务侧的协议类型和格式定义编码而成 
            }
            messageName() { return "WX_CMD_PROC"; }
            messageValue() { return KConnectProto.WX_CMD_PROC; }
            encode(buffer, offset = 0) {
                var encodeBuffer = new EncodeBuffer(buffer, offset);
                encodeBuffer.write(Int8Array, this.Mask);
                var GameProtoPkgSize = this.GameProtoPkg.length > KConnectProto.MAX_LEN_PROC_BODY ? KConnectProto.MAX_LEN_PROC_BODY : this.GameProtoPkg.length;
                encodeBuffer.write(Uint16Array, GameProtoPkgSize);
                this.GameProtoPkg.length = GameProtoPkgSize;
                encodeBuffer.write(Int8Array, this.GameProtoPkg);
                return encodeBuffer.length();
            }
            decode(buffer, offset = 0) {
                var decodeBuffer = new DecodeBuffer(buffer, offset);
                this.Mask = decodeBuffer.read(Int8Array, 1);
                var GameProtoPkgSize = decodeBuffer.read(Uint16Array, 1);
                this.GameProtoPkg = new Array(GameProtoPkgSize);
                this.GameProtoPkg = decodeBuffer.read(Int8Array, GameProtoPkgSize);
                return decodeBuffer.length();
            }
        }
        KConnectProto.WX_CMD_PROC_SC = WX_CMD_PROC_SC;
        class CS {
            constructor() {
                this.Len = 0; //包长字段 
                this.ProtoVer = KConnectProto.Version; //协议版本号 
                this.Cmd = 0; //命令字 
                this.Body = null; //包体,根据Cmd不同对应到不同的包体 
            }
            messageName() { return ""; }
            messageValue() { return 0; }
            encode(buffer, offset = 0) {
                var encodeBuffer = new EncodeBuffer(buffer, offset);
                encodeBuffer.write(Uint16Array, this.Len);
                encodeBuffer.write(Uint16Array, this.ProtoVer);
                encodeBuffer.write(Uint16Array, this.Cmd);
                encodeBuffer.skip(this.Body.encode(encodeBuffer.buffer(), encodeBuffer.offset()));
                return encodeBuffer.length();
            }
            decode(buffer, offset = 0) {
                var decodeBuffer = new DecodeBuffer(buffer, offset);
                this.Len = decodeBuffer.read(Uint16Array, 1);
                this.ProtoVer = decodeBuffer.read(Uint16Array, 1);
                this.Cmd = decodeBuffer.read(Uint16Array, 1);
                decodeBuffer.skip(this.Body.decode(decodeBuffer.buffer(), decodeBuffer.offset()));
                return decodeBuffer.length();
            }
        }
        KConnectProto.CS = CS;
        class SC {
            constructor() {
                this.Len = 0; //包长字段 
                this.ProtoVer = KConnectProto.Version; //协议版本号 
                this.Cmd = 0; //命令字 
                this.Body = null; //包体,根据Cmd不同对应到不同的包体 
            }
            messageName() { return ""; }
            messageValue() { return 0; }
            encode(buffer, offset = 0) {
                var encodeBuffer = new EncodeBuffer(buffer, offset);
                encodeBuffer.write(Uint16Array, this.Len);
                encodeBuffer.write(Uint16Array, this.ProtoVer);
                encodeBuffer.write(Uint16Array, this.Cmd);
                encodeBuffer.skip(this.Body.encode(encodeBuffer.buffer(), encodeBuffer.offset()));
                return encodeBuffer.length();
            }
            decode(buffer, offset = 0) {
                var decodeBuffer = new DecodeBuffer(buffer, offset);
                this.Len = decodeBuffer.read(Uint16Array, 1);
                this.ProtoVer = decodeBuffer.read(Uint16Array, 1);
                this.Cmd = decodeBuffer.read(Uint16Array, 1);
                decodeBuffer.skip(this.Body.decode(decodeBuffer.buffer(), decodeBuffer.offset()));
                return decodeBuffer.length();
            }
        }
        KConnectProto.SC = SC;
        class WX_CMD_ERROR_CS {
            messageName() { return "WX_CMD_ERROR"; }
            messageValue() { return KConnectProto.WX_CMD_ERROR; }
            encode(buffer, offset = 0) {
                var encodeBuffer = new EncodeBuffer(buffer, offset);
                return encodeBuffer.length();
            }
            decode(buffer, offset = 0) {
                var decodeBuffer = new DecodeBuffer(buffer, offset);
                return decodeBuffer.length();
            }
        }
        KConnectProto.WX_CMD_ERROR_CS = WX_CMD_ERROR_CS;
    })(KConnectProto = csproto.KConnectProto || (csproto.KConnectProto = {}));
})(csproto = exports.csproto || (exports.csproto = {}));
//# sourceMappingURL=KConnectProto.xml.js.map
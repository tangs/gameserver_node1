"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const KConnectProto_xml_1 = require("./KConnectProto.xml");
const TinyGameCSProto_xml_1 = require("./TinyGameCSProto.xml");
var MsgBuilder;
(function (MsgBuilder) {
    class csProtoBuilder {
        constructor() {
            this.encodeBuffer = new Uint8Array(1024 * 20);
            this.decodeBuffer = new Uint8Array(1024 * 20);
            this.root = {};
            this.messageSeqId = 0;
        }
        setupBuilder(protos, callback) {
            this.root = KConnectProto_xml_1.csproto;
            if (callback != null) {
                callback(true, "");
            }
        }
        getMessageType(messageObj) {
            var msg = messageObj;
            return msg.messageName();
        }
        build(messageName) {
            var names = messageName.split(".");
            var current = this.root;
            for (var i = 0; i < names.length; i++) {
                if (current[names[i]] != null) {
                    current = current[names[i]];
                }
                else {
                    return null;
                }
            }
            return new current();
        }
        autoBuild(messageName) {
            return this.build(messageName);
        }
        getCmdId(buffer, shortIndex, offset = 0) {
            var view = new DataView(buffer, offset);
            return view.getUint16(shortIndex * 2);
        }
        setPkgLength(buffer, shortIndex, value, offset = 0) {
            var view = new DataView(buffer, offset);
            view.setUint16(shortIndex * 2, value);
        }
        encode(messageObj) {
            var message = messageObj;
            var cs = new KConnectProto_xml_1.csproto.KConnectProto.SC();
            if (TinyGameCSProto_xml_1.CSProto.command.hasOwnProperty(message.messageName())) {
                var head = new TinyGameCSProto_xml_1.CSProto.SC();
                head.wCmd = message.messageValue();
                head.stBody = messageObj;
                var headLength = head.encode(this.encodeBuffer.buffer, 0);
                this.setPkgLength(this.encodeBuffer.buffer, 0, headLength);
                var proc = new KConnectProto_xml_1.csproto.KConnectProto.WX_CMD_PROC_CS();
                proc.Mask = 0;
                proc.GameProtoPkg.length = 0;
                for (var i = 0; i < headLength; i++) {
                    proc.GameProtoPkg.push(this.encodeBuffer[i]);
                }
                cs.Body = proc;
                cs.Cmd = proc.messageValue();
            }
            else {
                cs.Body = messageObj;
                cs.Cmd = message.messageValue();
            }
            var length = cs.encode(this.encodeBuffer.buffer, 0);
            this.setPkgLength(this.encodeBuffer.buffer, 0, length);
            return this.encodeBuffer.slice(0, length);
        }
        decode(buffer, uploadMessage = false) {
            buffer = buffer.buffer;
            var sc = new KConnectProto_xml_1.csproto.KConnectProto.SC();
            var cmd = this.getCmdId(buffer, 2);
            var messageName = KConnectProto_xml_1.csproto.KConnectProto.command_name[cmd];
            var body = new KConnectProto_xml_1.csproto.KConnectProto[messageName + "_CS"];
            sc.Body = body;
            var length = sc.decode(buffer, 0);
            if (messageName == "WX_CMD_PROC") {
                var proc = sc.Body;
                var head = new TinyGameCSProto_xml_1.CSProto.SC();
                var pkgArray = new Uint8Array(proc.GameProtoPkg);
                var cmd = this.getCmdId(pkgArray.buffer, 2);
                var messageName = TinyGameCSProto_xml_1.CSProto.command_name[cmd];
                head.stBody = new TinyGameCSProto_xml_1.CSProto[messageName + "_CS"]();
                head.decode(pkgArray.buffer, 0);
                return head.stBody;
            }
            else {
                return sc.Body;
            }
        }
    }
    MsgBuilder.csProtoBuilder = csProtoBuilder;
})(MsgBuilder = exports.MsgBuilder || (exports.MsgBuilder = {}));
//# sourceMappingURL=csProtoBuilder.js.map
/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.pb = (function() {

    /**
     * Namespace pb.
     * @exports pb
     * @namespace
     */
    var pb = {};

    pb.ReqPackage = (function() {

        /**
         * Properties of a ReqPackage.
         * @memberof pb
         * @interface IReqPackage
         * @property {pb.MessageCommand|null} [Cmd] ReqPackage Cmd
         * @property {string|null} [Token] ReqPackage Token
         * @property {Uint8Array|null} [Msg] ReqPackage Msg
         */

        /**
         * Constructs a new ReqPackage.
         * @memberof pb
         * @classdesc Represents a ReqPackage.
         * @implements IReqPackage
         * @constructor
         * @param {pb.IReqPackage=} [properties] Properties to set
         */
        function ReqPackage(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReqPackage Cmd.
         * @member {pb.MessageCommand} Cmd
         * @memberof pb.ReqPackage
         * @instance
         */
        ReqPackage.prototype.Cmd = 0;

        /**
         * ReqPackage Token.
         * @member {string} Token
         * @memberof pb.ReqPackage
         * @instance
         */
        ReqPackage.prototype.Token = "";

        /**
         * ReqPackage Msg.
         * @member {Uint8Array} Msg
         * @memberof pb.ReqPackage
         * @instance
         */
        ReqPackage.prototype.Msg = $util.newBuffer([]);

        /**
         * Creates a new ReqPackage instance using the specified properties.
         * @function create
         * @memberof pb.ReqPackage
         * @static
         * @param {pb.IReqPackage=} [properties] Properties to set
         * @returns {pb.ReqPackage} ReqPackage instance
         */
        ReqPackage.create = function create(properties) {
            return new ReqPackage(properties);
        };

        /**
         * Encodes the specified ReqPackage message. Does not implicitly {@link pb.ReqPackage.verify|verify} messages.
         * @function encode
         * @memberof pb.ReqPackage
         * @static
         * @param {pb.IReqPackage} message ReqPackage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqPackage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Cmd != null && Object.hasOwnProperty.call(message, "Cmd"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Cmd);
            if (message.Token != null && Object.hasOwnProperty.call(message, "Token"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.Token);
            if (message.Msg != null && Object.hasOwnProperty.call(message, "Msg"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.Msg);
            return writer;
        };

        /**
         * Encodes the specified ReqPackage message, length delimited. Does not implicitly {@link pb.ReqPackage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.ReqPackage
         * @static
         * @param {pb.IReqPackage} message ReqPackage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqPackage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ReqPackage message from the specified reader or buffer.
         * @function decode
         * @memberof pb.ReqPackage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.ReqPackage} ReqPackage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqPackage.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.ReqPackage();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Cmd = reader.int32();
                    break;
                case 2:
                    message.Token = reader.string();
                    break;
                case 3:
                    message.Msg = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ReqPackage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.ReqPackage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.ReqPackage} ReqPackage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqPackage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ReqPackage message.
         * @function verify
         * @memberof pb.ReqPackage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ReqPackage.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Cmd != null && message.hasOwnProperty("Cmd"))
                switch (message.Cmd) {
                default:
                    return "Cmd: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                case 8:
                    break;
                }
            if (message.Token != null && message.hasOwnProperty("Token"))
                if (!$util.isString(message.Token))
                    return "Token: string expected";
            if (message.Msg != null && message.hasOwnProperty("Msg"))
                if (!(message.Msg && typeof message.Msg.length === "number" || $util.isString(message.Msg)))
                    return "Msg: buffer expected";
            return null;
        };

        /**
         * Creates a ReqPackage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.ReqPackage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.ReqPackage} ReqPackage
         */
        ReqPackage.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.ReqPackage)
                return object;
            var message = new $root.pb.ReqPackage();
            switch (object.Cmd) {
            case "Unknown":
            case 0:
                message.Cmd = 0;
                break;
            case "CallLinkAuth":
            case 1:
                message.Cmd = 1;
                break;
            case "CallHeartBeat":
            case 2:
                message.Cmd = 2;
                break;
            case "CallGetUserInfo":
            case 3:
                message.Cmd = 3;
                break;
            case "CallCreateRoom":
            case 4:
                message.Cmd = 4;
                break;
            case "CallJoinRoom":
            case 5:
                message.Cmd = 5;
                break;
            case "SyncRoomInfo":
            case 6:
                message.Cmd = 6;
                break;
            case "InputRoomReady":
            case 7:
                message.Cmd = 7;
                break;
            case "InputRoomRole":
            case 8:
                message.Cmd = 8;
                break;
            }
            if (object.Token != null)
                message.Token = String(object.Token);
            if (object.Msg != null)
                if (typeof object.Msg === "string")
                    $util.base64.decode(object.Msg, message.Msg = $util.newBuffer($util.base64.length(object.Msg)), 0);
                else if (object.Msg.length)
                    message.Msg = object.Msg;
            return message;
        };

        /**
         * Creates a plain object from a ReqPackage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.ReqPackage
         * @static
         * @param {pb.ReqPackage} message ReqPackage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ReqPackage.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.Cmd = options.enums === String ? "Unknown" : 0;
                object.Token = "";
                if (options.bytes === String)
                    object.Msg = "";
                else {
                    object.Msg = [];
                    if (options.bytes !== Array)
                        object.Msg = $util.newBuffer(object.Msg);
                }
            }
            if (message.Cmd != null && message.hasOwnProperty("Cmd"))
                object.Cmd = options.enums === String ? $root.pb.MessageCommand[message.Cmd] : message.Cmd;
            if (message.Token != null && message.hasOwnProperty("Token"))
                object.Token = message.Token;
            if (message.Msg != null && message.hasOwnProperty("Msg"))
                object.Msg = options.bytes === String ? $util.base64.encode(message.Msg, 0, message.Msg.length) : options.bytes === Array ? Array.prototype.slice.call(message.Msg) : message.Msg;
            return object;
        };

        /**
         * Converts this ReqPackage to JSON.
         * @function toJSON
         * @memberof pb.ReqPackage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ReqPackage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ReqPackage;
    })();

    pb.RespPackage = (function() {

        /**
         * Properties of a RespPackage.
         * @memberof pb
         * @interface IRespPackage
         * @property {pb.MessageCommand|null} [Cmd] RespPackage Cmd
         * @property {pb.ErrorCode|null} [ErrCode] RespPackage ErrCode
         * @property {Uint8Array|null} [Msg] RespPackage Msg
         */

        /**
         * Constructs a new RespPackage.
         * @memberof pb
         * @classdesc Represents a RespPackage.
         * @implements IRespPackage
         * @constructor
         * @param {pb.IRespPackage=} [properties] Properties to set
         */
        function RespPackage(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RespPackage Cmd.
         * @member {pb.MessageCommand} Cmd
         * @memberof pb.RespPackage
         * @instance
         */
        RespPackage.prototype.Cmd = 0;

        /**
         * RespPackage ErrCode.
         * @member {pb.ErrorCode} ErrCode
         * @memberof pb.RespPackage
         * @instance
         */
        RespPackage.prototype.ErrCode = 0;

        /**
         * RespPackage Msg.
         * @member {Uint8Array} Msg
         * @memberof pb.RespPackage
         * @instance
         */
        RespPackage.prototype.Msg = $util.newBuffer([]);

        /**
         * Creates a new RespPackage instance using the specified properties.
         * @function create
         * @memberof pb.RespPackage
         * @static
         * @param {pb.IRespPackage=} [properties] Properties to set
         * @returns {pb.RespPackage} RespPackage instance
         */
        RespPackage.create = function create(properties) {
            return new RespPackage(properties);
        };

        /**
         * Encodes the specified RespPackage message. Does not implicitly {@link pb.RespPackage.verify|verify} messages.
         * @function encode
         * @memberof pb.RespPackage
         * @static
         * @param {pb.IRespPackage} message RespPackage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RespPackage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Cmd != null && Object.hasOwnProperty.call(message, "Cmd"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Cmd);
            if (message.ErrCode != null && Object.hasOwnProperty.call(message, "ErrCode"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.ErrCode);
            if (message.Msg != null && Object.hasOwnProperty.call(message, "Msg"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.Msg);
            return writer;
        };

        /**
         * Encodes the specified RespPackage message, length delimited. Does not implicitly {@link pb.RespPackage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.RespPackage
         * @static
         * @param {pb.IRespPackage} message RespPackage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RespPackage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RespPackage message from the specified reader or buffer.
         * @function decode
         * @memberof pb.RespPackage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.RespPackage} RespPackage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RespPackage.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.RespPackage();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Cmd = reader.int32();
                    break;
                case 2:
                    message.ErrCode = reader.int32();
                    break;
                case 3:
                    message.Msg = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RespPackage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.RespPackage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.RespPackage} RespPackage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RespPackage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RespPackage message.
         * @function verify
         * @memberof pb.RespPackage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RespPackage.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Cmd != null && message.hasOwnProperty("Cmd"))
                switch (message.Cmd) {
                default:
                    return "Cmd: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                case 8:
                    break;
                }
            if (message.ErrCode != null && message.hasOwnProperty("ErrCode"))
                switch (message.ErrCode) {
                default:
                    return "ErrCode: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                    break;
                }
            if (message.Msg != null && message.hasOwnProperty("Msg"))
                if (!(message.Msg && typeof message.Msg.length === "number" || $util.isString(message.Msg)))
                    return "Msg: buffer expected";
            return null;
        };

        /**
         * Creates a RespPackage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.RespPackage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.RespPackage} RespPackage
         */
        RespPackage.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.RespPackage)
                return object;
            var message = new $root.pb.RespPackage();
            switch (object.Cmd) {
            case "Unknown":
            case 0:
                message.Cmd = 0;
                break;
            case "CallLinkAuth":
            case 1:
                message.Cmd = 1;
                break;
            case "CallHeartBeat":
            case 2:
                message.Cmd = 2;
                break;
            case "CallGetUserInfo":
            case 3:
                message.Cmd = 3;
                break;
            case "CallCreateRoom":
            case 4:
                message.Cmd = 4;
                break;
            case "CallJoinRoom":
            case 5:
                message.Cmd = 5;
                break;
            case "SyncRoomInfo":
            case 6:
                message.Cmd = 6;
                break;
            case "InputRoomReady":
            case 7:
                message.Cmd = 7;
                break;
            case "InputRoomRole":
            case 8:
                message.Cmd = 8;
                break;
            }
            switch (object.ErrCode) {
            case "Uknow":
            case 0:
                message.ErrCode = 0;
                break;
            case "OK":
            case 1:
                message.ErrCode = 1;
                break;
            case "EntryError":
            case 2:
                message.ErrCode = 2;
                break;
            case "LoginAccountOrPasswordError":
            case 3:
                message.ErrCode = 3;
                break;
            case "RegisterAccountExit":
            case 4:
                message.ErrCode = 4;
                break;
            case "AuthFailed":
            case 5:
                message.ErrCode = 5;
                break;
            case "RoomUnExistent":
            case 6:
                message.ErrCode = 6;
                break;
            case "RoomPasswordError":
            case 7:
                message.ErrCode = 7;
                break;
            }
            if (object.Msg != null)
                if (typeof object.Msg === "string")
                    $util.base64.decode(object.Msg, message.Msg = $util.newBuffer($util.base64.length(object.Msg)), 0);
                else if (object.Msg.length)
                    message.Msg = object.Msg;
            return message;
        };

        /**
         * Creates a plain object from a RespPackage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.RespPackage
         * @static
         * @param {pb.RespPackage} message RespPackage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RespPackage.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.Cmd = options.enums === String ? "Unknown" : 0;
                object.ErrCode = options.enums === String ? "Uknow" : 0;
                if (options.bytes === String)
                    object.Msg = "";
                else {
                    object.Msg = [];
                    if (options.bytes !== Array)
                        object.Msg = $util.newBuffer(object.Msg);
                }
            }
            if (message.Cmd != null && message.hasOwnProperty("Cmd"))
                object.Cmd = options.enums === String ? $root.pb.MessageCommand[message.Cmd] : message.Cmd;
            if (message.ErrCode != null && message.hasOwnProperty("ErrCode"))
                object.ErrCode = options.enums === String ? $root.pb.ErrorCode[message.ErrCode] : message.ErrCode;
            if (message.Msg != null && message.hasOwnProperty("Msg"))
                object.Msg = options.bytes === String ? $util.base64.encode(message.Msg, 0, message.Msg.length) : options.bytes === Array ? Array.prototype.slice.call(message.Msg) : message.Msg;
            return object;
        };

        /**
         * Converts this RespPackage to JSON.
         * @function toJSON
         * @memberof pb.RespPackage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RespPackage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RespPackage;
    })();

    /**
     * ErrorCode enum.
     * @name pb.ErrorCode
     * @enum {number}
     * @property {number} Uknow=0 Uknow value
     * @property {number} OK=1 OK value
     * @property {number} EntryError=2 EntryError value
     * @property {number} LoginAccountOrPasswordError=3 LoginAccountOrPasswordError value
     * @property {number} RegisterAccountExit=4 RegisterAccountExit value
     * @property {number} AuthFailed=5 AuthFailed value
     * @property {number} RoomUnExistent=6 RoomUnExistent value
     * @property {number} RoomPasswordError=7 RoomPasswordError value
     */
    pb.ErrorCode = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "Uknow"] = 0;
        values[valuesById[1] = "OK"] = 1;
        values[valuesById[2] = "EntryError"] = 2;
        values[valuesById[3] = "LoginAccountOrPasswordError"] = 3;
        values[valuesById[4] = "RegisterAccountExit"] = 4;
        values[valuesById[5] = "AuthFailed"] = 5;
        values[valuesById[6] = "RoomUnExistent"] = 6;
        values[valuesById[7] = "RoomPasswordError"] = 7;
        return values;
    })();

    /**
     * MessageCommand enum.
     * @name pb.MessageCommand
     * @enum {number}
     * @property {number} Unknown=0 Unknown value
     * @property {number} CallLinkAuth=1 CallLinkAuth value
     * @property {number} CallHeartBeat=2 CallHeartBeat value
     * @property {number} CallGetUserInfo=3 CallGetUserInfo value
     * @property {number} CallCreateRoom=4 CallCreateRoom value
     * @property {number} CallJoinRoom=5 CallJoinRoom value
     * @property {number} SyncRoomInfo=6 SyncRoomInfo value
     * @property {number} InputRoomReady=7 InputRoomReady value
     * @property {number} InputRoomRole=8 InputRoomRole value
     */
    pb.MessageCommand = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "Unknown"] = 0;
        values[valuesById[1] = "CallLinkAuth"] = 1;
        values[valuesById[2] = "CallHeartBeat"] = 2;
        values[valuesById[3] = "CallGetUserInfo"] = 3;
        values[valuesById[4] = "CallCreateRoom"] = 4;
        values[valuesById[5] = "CallJoinRoom"] = 5;
        values[valuesById[6] = "SyncRoomInfo"] = 6;
        values[valuesById[7] = "InputRoomReady"] = 7;
        values[valuesById[8] = "InputRoomRole"] = 8;
        return values;
    })();

    /**
     * EnumSex enum.
     * @name pb.EnumSex
     * @enum {number}
     * @property {number} Unknow=0 Unknow value
     * @property {number} Male=1 Male value
     * @property {number} Female=2 Female value
     */
    pb.EnumSex = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "Unknow"] = 0;
        values[valuesById[1] = "Male"] = 1;
        values[valuesById[2] = "Female"] = 2;
        return values;
    })();

    /**
     * EnumGameRole enum.
     * @name pb.EnumGameRole
     * @enum {number}
     * @property {number} DefaultRole=0 DefaultRole value
     * @property {number} Warrior=1 Warrior value
     * @property {number} Rogue=2 Rogue value
     * @property {number} Mage=3 Mage value
     * @property {number} Hunter=4 Hunter value
     * @property {number} Druid=5 Druid value
     * @property {number} Paladin=6 Paladin value
     * @property {number} Priest=7 Priest value
     * @property {number} Warlock=8 Warlock value
     * @property {number} Shaman=9 Shaman value
     */
    pb.EnumGameRole = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "DefaultRole"] = 0;
        values[valuesById[1] = "Warrior"] = 1;
        values[valuesById[2] = "Rogue"] = 2;
        values[valuesById[3] = "Mage"] = 3;
        values[valuesById[4] = "Hunter"] = 4;
        values[valuesById[5] = "Druid"] = 5;
        values[valuesById[6] = "Paladin"] = 6;
        values[valuesById[7] = "Priest"] = 7;
        values[valuesById[8] = "Warlock"] = 8;
        values[valuesById[9] = "Shaman"] = 9;
        return values;
    })();

    pb.ReqEntry = (function() {

        /**
         * Properties of a ReqEntry.
         * @memberof pb
         * @interface IReqEntry
         * @property {string|null} [Secret] ReqEntry Secret
         */

        /**
         * Constructs a new ReqEntry.
         * @memberof pb
         * @classdesc Represents a ReqEntry.
         * @implements IReqEntry
         * @constructor
         * @param {pb.IReqEntry=} [properties] Properties to set
         */
        function ReqEntry(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReqEntry Secret.
         * @member {string} Secret
         * @memberof pb.ReqEntry
         * @instance
         */
        ReqEntry.prototype.Secret = "";

        /**
         * Creates a new ReqEntry instance using the specified properties.
         * @function create
         * @memberof pb.ReqEntry
         * @static
         * @param {pb.IReqEntry=} [properties] Properties to set
         * @returns {pb.ReqEntry} ReqEntry instance
         */
        ReqEntry.create = function create(properties) {
            return new ReqEntry(properties);
        };

        /**
         * Encodes the specified ReqEntry message. Does not implicitly {@link pb.ReqEntry.verify|verify} messages.
         * @function encode
         * @memberof pb.ReqEntry
         * @static
         * @param {pb.IReqEntry} message ReqEntry message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqEntry.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Secret != null && Object.hasOwnProperty.call(message, "Secret"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.Secret);
            return writer;
        };

        /**
         * Encodes the specified ReqEntry message, length delimited. Does not implicitly {@link pb.ReqEntry.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.ReqEntry
         * @static
         * @param {pb.IReqEntry} message ReqEntry message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqEntry.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ReqEntry message from the specified reader or buffer.
         * @function decode
         * @memberof pb.ReqEntry
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.ReqEntry} ReqEntry
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqEntry.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.ReqEntry();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Secret = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ReqEntry message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.ReqEntry
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.ReqEntry} ReqEntry
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqEntry.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ReqEntry message.
         * @function verify
         * @memberof pb.ReqEntry
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ReqEntry.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Secret != null && message.hasOwnProperty("Secret"))
                if (!$util.isString(message.Secret))
                    return "Secret: string expected";
            return null;
        };

        /**
         * Creates a ReqEntry message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.ReqEntry
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.ReqEntry} ReqEntry
         */
        ReqEntry.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.ReqEntry)
                return object;
            var message = new $root.pb.ReqEntry();
            if (object.Secret != null)
                message.Secret = String(object.Secret);
            return message;
        };

        /**
         * Creates a plain object from a ReqEntry message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.ReqEntry
         * @static
         * @param {pb.ReqEntry} message ReqEntry
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ReqEntry.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.Secret = "";
            if (message.Secret != null && message.hasOwnProperty("Secret"))
                object.Secret = message.Secret;
            return object;
        };

        /**
         * Converts this ReqEntry to JSON.
         * @function toJSON
         * @memberof pb.ReqEntry
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ReqEntry.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ReqEntry;
    })();

    pb.RespEntry = (function() {

        /**
         * Properties of a RespEntry.
         * @memberof pb
         * @interface IRespEntry
         * @property {pb.ErrorCode|null} [ErrCode] RespEntry ErrCode
         * @property {string|null} [LoginUrl] RespEntry LoginUrl
         * @property {string|null} [RegisterUrl] RespEntry RegisterUrl
         * @property {string|null} [WebSocketUrl] RespEntry WebSocketUrl
         */

        /**
         * Constructs a new RespEntry.
         * @memberof pb
         * @classdesc Represents a RespEntry.
         * @implements IRespEntry
         * @constructor
         * @param {pb.IRespEntry=} [properties] Properties to set
         */
        function RespEntry(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RespEntry ErrCode.
         * @member {pb.ErrorCode} ErrCode
         * @memberof pb.RespEntry
         * @instance
         */
        RespEntry.prototype.ErrCode = 0;

        /**
         * RespEntry LoginUrl.
         * @member {string} LoginUrl
         * @memberof pb.RespEntry
         * @instance
         */
        RespEntry.prototype.LoginUrl = "";

        /**
         * RespEntry RegisterUrl.
         * @member {string} RegisterUrl
         * @memberof pb.RespEntry
         * @instance
         */
        RespEntry.prototype.RegisterUrl = "";

        /**
         * RespEntry WebSocketUrl.
         * @member {string} WebSocketUrl
         * @memberof pb.RespEntry
         * @instance
         */
        RespEntry.prototype.WebSocketUrl = "";

        /**
         * Creates a new RespEntry instance using the specified properties.
         * @function create
         * @memberof pb.RespEntry
         * @static
         * @param {pb.IRespEntry=} [properties] Properties to set
         * @returns {pb.RespEntry} RespEntry instance
         */
        RespEntry.create = function create(properties) {
            return new RespEntry(properties);
        };

        /**
         * Encodes the specified RespEntry message. Does not implicitly {@link pb.RespEntry.verify|verify} messages.
         * @function encode
         * @memberof pb.RespEntry
         * @static
         * @param {pb.IRespEntry} message RespEntry message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RespEntry.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.ErrCode != null && Object.hasOwnProperty.call(message, "ErrCode"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.ErrCode);
            if (message.LoginUrl != null && Object.hasOwnProperty.call(message, "LoginUrl"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.LoginUrl);
            if (message.RegisterUrl != null && Object.hasOwnProperty.call(message, "RegisterUrl"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.RegisterUrl);
            if (message.WebSocketUrl != null && Object.hasOwnProperty.call(message, "WebSocketUrl"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.WebSocketUrl);
            return writer;
        };

        /**
         * Encodes the specified RespEntry message, length delimited. Does not implicitly {@link pb.RespEntry.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.RespEntry
         * @static
         * @param {pb.IRespEntry} message RespEntry message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RespEntry.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RespEntry message from the specified reader or buffer.
         * @function decode
         * @memberof pb.RespEntry
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.RespEntry} RespEntry
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RespEntry.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.RespEntry();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.ErrCode = reader.int32();
                    break;
                case 2:
                    message.LoginUrl = reader.string();
                    break;
                case 3:
                    message.RegisterUrl = reader.string();
                    break;
                case 4:
                    message.WebSocketUrl = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RespEntry message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.RespEntry
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.RespEntry} RespEntry
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RespEntry.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RespEntry message.
         * @function verify
         * @memberof pb.RespEntry
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RespEntry.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.ErrCode != null && message.hasOwnProperty("ErrCode"))
                switch (message.ErrCode) {
                default:
                    return "ErrCode: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                    break;
                }
            if (message.LoginUrl != null && message.hasOwnProperty("LoginUrl"))
                if (!$util.isString(message.LoginUrl))
                    return "LoginUrl: string expected";
            if (message.RegisterUrl != null && message.hasOwnProperty("RegisterUrl"))
                if (!$util.isString(message.RegisterUrl))
                    return "RegisterUrl: string expected";
            if (message.WebSocketUrl != null && message.hasOwnProperty("WebSocketUrl"))
                if (!$util.isString(message.WebSocketUrl))
                    return "WebSocketUrl: string expected";
            return null;
        };

        /**
         * Creates a RespEntry message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.RespEntry
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.RespEntry} RespEntry
         */
        RespEntry.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.RespEntry)
                return object;
            var message = new $root.pb.RespEntry();
            switch (object.ErrCode) {
            case "Uknow":
            case 0:
                message.ErrCode = 0;
                break;
            case "OK":
            case 1:
                message.ErrCode = 1;
                break;
            case "EntryError":
            case 2:
                message.ErrCode = 2;
                break;
            case "LoginAccountOrPasswordError":
            case 3:
                message.ErrCode = 3;
                break;
            case "RegisterAccountExit":
            case 4:
                message.ErrCode = 4;
                break;
            case "AuthFailed":
            case 5:
                message.ErrCode = 5;
                break;
            case "RoomUnExistent":
            case 6:
                message.ErrCode = 6;
                break;
            case "RoomPasswordError":
            case 7:
                message.ErrCode = 7;
                break;
            }
            if (object.LoginUrl != null)
                message.LoginUrl = String(object.LoginUrl);
            if (object.RegisterUrl != null)
                message.RegisterUrl = String(object.RegisterUrl);
            if (object.WebSocketUrl != null)
                message.WebSocketUrl = String(object.WebSocketUrl);
            return message;
        };

        /**
         * Creates a plain object from a RespEntry message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.RespEntry
         * @static
         * @param {pb.RespEntry} message RespEntry
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RespEntry.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.ErrCode = options.enums === String ? "Uknow" : 0;
                object.LoginUrl = "";
                object.RegisterUrl = "";
                object.WebSocketUrl = "";
            }
            if (message.ErrCode != null && message.hasOwnProperty("ErrCode"))
                object.ErrCode = options.enums === String ? $root.pb.ErrorCode[message.ErrCode] : message.ErrCode;
            if (message.LoginUrl != null && message.hasOwnProperty("LoginUrl"))
                object.LoginUrl = message.LoginUrl;
            if (message.RegisterUrl != null && message.hasOwnProperty("RegisterUrl"))
                object.RegisterUrl = message.RegisterUrl;
            if (message.WebSocketUrl != null && message.hasOwnProperty("WebSocketUrl"))
                object.WebSocketUrl = message.WebSocketUrl;
            return object;
        };

        /**
         * Converts this RespEntry to JSON.
         * @function toJSON
         * @memberof pb.RespEntry
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RespEntry.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RespEntry;
    })();

    pb.ReqLogin = (function() {

        /**
         * Properties of a ReqLogin.
         * @memberof pb
         * @interface IReqLogin
         * @property {string|null} [Account] ReqLogin Account
         * @property {string|null} [Password] ReqLogin Password
         */

        /**
         * Constructs a new ReqLogin.
         * @memberof pb
         * @classdesc Represents a ReqLogin.
         * @implements IReqLogin
         * @constructor
         * @param {pb.IReqLogin=} [properties] Properties to set
         */
        function ReqLogin(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReqLogin Account.
         * @member {string} Account
         * @memberof pb.ReqLogin
         * @instance
         */
        ReqLogin.prototype.Account = "";

        /**
         * ReqLogin Password.
         * @member {string} Password
         * @memberof pb.ReqLogin
         * @instance
         */
        ReqLogin.prototype.Password = "";

        /**
         * Creates a new ReqLogin instance using the specified properties.
         * @function create
         * @memberof pb.ReqLogin
         * @static
         * @param {pb.IReqLogin=} [properties] Properties to set
         * @returns {pb.ReqLogin} ReqLogin instance
         */
        ReqLogin.create = function create(properties) {
            return new ReqLogin(properties);
        };

        /**
         * Encodes the specified ReqLogin message. Does not implicitly {@link pb.ReqLogin.verify|verify} messages.
         * @function encode
         * @memberof pb.ReqLogin
         * @static
         * @param {pb.IReqLogin} message ReqLogin message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqLogin.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Account != null && Object.hasOwnProperty.call(message, "Account"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.Account);
            if (message.Password != null && Object.hasOwnProperty.call(message, "Password"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.Password);
            return writer;
        };

        /**
         * Encodes the specified ReqLogin message, length delimited. Does not implicitly {@link pb.ReqLogin.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.ReqLogin
         * @static
         * @param {pb.IReqLogin} message ReqLogin message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqLogin.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ReqLogin message from the specified reader or buffer.
         * @function decode
         * @memberof pb.ReqLogin
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.ReqLogin} ReqLogin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqLogin.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.ReqLogin();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Account = reader.string();
                    break;
                case 2:
                    message.Password = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ReqLogin message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.ReqLogin
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.ReqLogin} ReqLogin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqLogin.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ReqLogin message.
         * @function verify
         * @memberof pb.ReqLogin
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ReqLogin.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Account != null && message.hasOwnProperty("Account"))
                if (!$util.isString(message.Account))
                    return "Account: string expected";
            if (message.Password != null && message.hasOwnProperty("Password"))
                if (!$util.isString(message.Password))
                    return "Password: string expected";
            return null;
        };

        /**
         * Creates a ReqLogin message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.ReqLogin
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.ReqLogin} ReqLogin
         */
        ReqLogin.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.ReqLogin)
                return object;
            var message = new $root.pb.ReqLogin();
            if (object.Account != null)
                message.Account = String(object.Account);
            if (object.Password != null)
                message.Password = String(object.Password);
            return message;
        };

        /**
         * Creates a plain object from a ReqLogin message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.ReqLogin
         * @static
         * @param {pb.ReqLogin} message ReqLogin
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ReqLogin.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.Account = "";
                object.Password = "";
            }
            if (message.Account != null && message.hasOwnProperty("Account"))
                object.Account = message.Account;
            if (message.Password != null && message.hasOwnProperty("Password"))
                object.Password = message.Password;
            return object;
        };

        /**
         * Converts this ReqLogin to JSON.
         * @function toJSON
         * @memberof pb.ReqLogin
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ReqLogin.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ReqLogin;
    })();

    pb.RespLogin = (function() {

        /**
         * Properties of a RespLogin.
         * @memberof pb
         * @interface IRespLogin
         * @property {pb.ErrorCode|null} [ErrCode] RespLogin ErrCode
         * @property {string|null} [Token] RespLogin Token
         */

        /**
         * Constructs a new RespLogin.
         * @memberof pb
         * @classdesc Represents a RespLogin.
         * @implements IRespLogin
         * @constructor
         * @param {pb.IRespLogin=} [properties] Properties to set
         */
        function RespLogin(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RespLogin ErrCode.
         * @member {pb.ErrorCode} ErrCode
         * @memberof pb.RespLogin
         * @instance
         */
        RespLogin.prototype.ErrCode = 0;

        /**
         * RespLogin Token.
         * @member {string} Token
         * @memberof pb.RespLogin
         * @instance
         */
        RespLogin.prototype.Token = "";

        /**
         * Creates a new RespLogin instance using the specified properties.
         * @function create
         * @memberof pb.RespLogin
         * @static
         * @param {pb.IRespLogin=} [properties] Properties to set
         * @returns {pb.RespLogin} RespLogin instance
         */
        RespLogin.create = function create(properties) {
            return new RespLogin(properties);
        };

        /**
         * Encodes the specified RespLogin message. Does not implicitly {@link pb.RespLogin.verify|verify} messages.
         * @function encode
         * @memberof pb.RespLogin
         * @static
         * @param {pb.IRespLogin} message RespLogin message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RespLogin.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.ErrCode != null && Object.hasOwnProperty.call(message, "ErrCode"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.ErrCode);
            if (message.Token != null && Object.hasOwnProperty.call(message, "Token"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.Token);
            return writer;
        };

        /**
         * Encodes the specified RespLogin message, length delimited. Does not implicitly {@link pb.RespLogin.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.RespLogin
         * @static
         * @param {pb.IRespLogin} message RespLogin message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RespLogin.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RespLogin message from the specified reader or buffer.
         * @function decode
         * @memberof pb.RespLogin
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.RespLogin} RespLogin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RespLogin.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.RespLogin();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.ErrCode = reader.int32();
                    break;
                case 2:
                    message.Token = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RespLogin message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.RespLogin
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.RespLogin} RespLogin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RespLogin.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RespLogin message.
         * @function verify
         * @memberof pb.RespLogin
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RespLogin.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.ErrCode != null && message.hasOwnProperty("ErrCode"))
                switch (message.ErrCode) {
                default:
                    return "ErrCode: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                    break;
                }
            if (message.Token != null && message.hasOwnProperty("Token"))
                if (!$util.isString(message.Token))
                    return "Token: string expected";
            return null;
        };

        /**
         * Creates a RespLogin message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.RespLogin
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.RespLogin} RespLogin
         */
        RespLogin.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.RespLogin)
                return object;
            var message = new $root.pb.RespLogin();
            switch (object.ErrCode) {
            case "Uknow":
            case 0:
                message.ErrCode = 0;
                break;
            case "OK":
            case 1:
                message.ErrCode = 1;
                break;
            case "EntryError":
            case 2:
                message.ErrCode = 2;
                break;
            case "LoginAccountOrPasswordError":
            case 3:
                message.ErrCode = 3;
                break;
            case "RegisterAccountExit":
            case 4:
                message.ErrCode = 4;
                break;
            case "AuthFailed":
            case 5:
                message.ErrCode = 5;
                break;
            case "RoomUnExistent":
            case 6:
                message.ErrCode = 6;
                break;
            case "RoomPasswordError":
            case 7:
                message.ErrCode = 7;
                break;
            }
            if (object.Token != null)
                message.Token = String(object.Token);
            return message;
        };

        /**
         * Creates a plain object from a RespLogin message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.RespLogin
         * @static
         * @param {pb.RespLogin} message RespLogin
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RespLogin.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.ErrCode = options.enums === String ? "Uknow" : 0;
                object.Token = "";
            }
            if (message.ErrCode != null && message.hasOwnProperty("ErrCode"))
                object.ErrCode = options.enums === String ? $root.pb.ErrorCode[message.ErrCode] : message.ErrCode;
            if (message.Token != null && message.hasOwnProperty("Token"))
                object.Token = message.Token;
            return object;
        };

        /**
         * Converts this RespLogin to JSON.
         * @function toJSON
         * @memberof pb.RespLogin
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RespLogin.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RespLogin;
    })();

    pb.ReqRegister = (function() {

        /**
         * Properties of a ReqRegister.
         * @memberof pb
         * @interface IReqRegister
         * @property {string|null} [Account] ReqRegister Account
         * @property {string|null} [Password] ReqRegister Password
         */

        /**
         * Constructs a new ReqRegister.
         * @memberof pb
         * @classdesc Represents a ReqRegister.
         * @implements IReqRegister
         * @constructor
         * @param {pb.IReqRegister=} [properties] Properties to set
         */
        function ReqRegister(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReqRegister Account.
         * @member {string} Account
         * @memberof pb.ReqRegister
         * @instance
         */
        ReqRegister.prototype.Account = "";

        /**
         * ReqRegister Password.
         * @member {string} Password
         * @memberof pb.ReqRegister
         * @instance
         */
        ReqRegister.prototype.Password = "";

        /**
         * Creates a new ReqRegister instance using the specified properties.
         * @function create
         * @memberof pb.ReqRegister
         * @static
         * @param {pb.IReqRegister=} [properties] Properties to set
         * @returns {pb.ReqRegister} ReqRegister instance
         */
        ReqRegister.create = function create(properties) {
            return new ReqRegister(properties);
        };

        /**
         * Encodes the specified ReqRegister message. Does not implicitly {@link pb.ReqRegister.verify|verify} messages.
         * @function encode
         * @memberof pb.ReqRegister
         * @static
         * @param {pb.IReqRegister} message ReqRegister message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqRegister.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Account != null && Object.hasOwnProperty.call(message, "Account"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.Account);
            if (message.Password != null && Object.hasOwnProperty.call(message, "Password"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.Password);
            return writer;
        };

        /**
         * Encodes the specified ReqRegister message, length delimited. Does not implicitly {@link pb.ReqRegister.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.ReqRegister
         * @static
         * @param {pb.IReqRegister} message ReqRegister message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqRegister.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ReqRegister message from the specified reader or buffer.
         * @function decode
         * @memberof pb.ReqRegister
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.ReqRegister} ReqRegister
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqRegister.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.ReqRegister();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Account = reader.string();
                    break;
                case 2:
                    message.Password = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ReqRegister message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.ReqRegister
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.ReqRegister} ReqRegister
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqRegister.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ReqRegister message.
         * @function verify
         * @memberof pb.ReqRegister
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ReqRegister.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Account != null && message.hasOwnProperty("Account"))
                if (!$util.isString(message.Account))
                    return "Account: string expected";
            if (message.Password != null && message.hasOwnProperty("Password"))
                if (!$util.isString(message.Password))
                    return "Password: string expected";
            return null;
        };

        /**
         * Creates a ReqRegister message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.ReqRegister
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.ReqRegister} ReqRegister
         */
        ReqRegister.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.ReqRegister)
                return object;
            var message = new $root.pb.ReqRegister();
            if (object.Account != null)
                message.Account = String(object.Account);
            if (object.Password != null)
                message.Password = String(object.Password);
            return message;
        };

        /**
         * Creates a plain object from a ReqRegister message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.ReqRegister
         * @static
         * @param {pb.ReqRegister} message ReqRegister
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ReqRegister.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.Account = "";
                object.Password = "";
            }
            if (message.Account != null && message.hasOwnProperty("Account"))
                object.Account = message.Account;
            if (message.Password != null && message.hasOwnProperty("Password"))
                object.Password = message.Password;
            return object;
        };

        /**
         * Converts this ReqRegister to JSON.
         * @function toJSON
         * @memberof pb.ReqRegister
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ReqRegister.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ReqRegister;
    })();

    pb.RespRegister = (function() {

        /**
         * Properties of a RespRegister.
         * @memberof pb
         * @interface IRespRegister
         * @property {pb.ErrorCode|null} [ErrCode] RespRegister ErrCode
         */

        /**
         * Constructs a new RespRegister.
         * @memberof pb
         * @classdesc Represents a RespRegister.
         * @implements IRespRegister
         * @constructor
         * @param {pb.IRespRegister=} [properties] Properties to set
         */
        function RespRegister(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RespRegister ErrCode.
         * @member {pb.ErrorCode} ErrCode
         * @memberof pb.RespRegister
         * @instance
         */
        RespRegister.prototype.ErrCode = 0;

        /**
         * Creates a new RespRegister instance using the specified properties.
         * @function create
         * @memberof pb.RespRegister
         * @static
         * @param {pb.IRespRegister=} [properties] Properties to set
         * @returns {pb.RespRegister} RespRegister instance
         */
        RespRegister.create = function create(properties) {
            return new RespRegister(properties);
        };

        /**
         * Encodes the specified RespRegister message. Does not implicitly {@link pb.RespRegister.verify|verify} messages.
         * @function encode
         * @memberof pb.RespRegister
         * @static
         * @param {pb.IRespRegister} message RespRegister message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RespRegister.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.ErrCode != null && Object.hasOwnProperty.call(message, "ErrCode"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.ErrCode);
            return writer;
        };

        /**
         * Encodes the specified RespRegister message, length delimited. Does not implicitly {@link pb.RespRegister.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.RespRegister
         * @static
         * @param {pb.IRespRegister} message RespRegister message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RespRegister.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RespRegister message from the specified reader or buffer.
         * @function decode
         * @memberof pb.RespRegister
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.RespRegister} RespRegister
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RespRegister.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.RespRegister();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.ErrCode = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RespRegister message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.RespRegister
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.RespRegister} RespRegister
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RespRegister.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RespRegister message.
         * @function verify
         * @memberof pb.RespRegister
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RespRegister.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.ErrCode != null && message.hasOwnProperty("ErrCode"))
                switch (message.ErrCode) {
                default:
                    return "ErrCode: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                    break;
                }
            return null;
        };

        /**
         * Creates a RespRegister message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.RespRegister
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.RespRegister} RespRegister
         */
        RespRegister.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.RespRegister)
                return object;
            var message = new $root.pb.RespRegister();
            switch (object.ErrCode) {
            case "Uknow":
            case 0:
                message.ErrCode = 0;
                break;
            case "OK":
            case 1:
                message.ErrCode = 1;
                break;
            case "EntryError":
            case 2:
                message.ErrCode = 2;
                break;
            case "LoginAccountOrPasswordError":
            case 3:
                message.ErrCode = 3;
                break;
            case "RegisterAccountExit":
            case 4:
                message.ErrCode = 4;
                break;
            case "AuthFailed":
            case 5:
                message.ErrCode = 5;
                break;
            case "RoomUnExistent":
            case 6:
                message.ErrCode = 6;
                break;
            case "RoomPasswordError":
            case 7:
                message.ErrCode = 7;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a RespRegister message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.RespRegister
         * @static
         * @param {pb.RespRegister} message RespRegister
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RespRegister.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.ErrCode = options.enums === String ? "Uknow" : 0;
            if (message.ErrCode != null && message.hasOwnProperty("ErrCode"))
                object.ErrCode = options.enums === String ? $root.pb.ErrorCode[message.ErrCode] : message.ErrCode;
            return object;
        };

        /**
         * Converts this RespRegister to JSON.
         * @function toJSON
         * @memberof pb.RespRegister
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RespRegister.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RespRegister;
    })();

    pb.UserBaseInfo = (function() {

        /**
         * Properties of a UserBaseInfo.
         * @memberof pb
         * @interface IUserBaseInfo
         * @property {string|null} [NickName] UserBaseInfo NickName
         * @property {string|null} [Icon] UserBaseInfo Icon
         * @property {pb.EnumSex|null} [Sex] UserBaseInfo Sex
         * @property {number|null} [Age] UserBaseInfo Age
         * @property {number|null} [Vip] UserBaseInfo Vip
         * @property {number|null} [Lv] UserBaseInfo Lv
         */

        /**
         * Constructs a new UserBaseInfo.
         * @memberof pb
         * @classdesc Represents a UserBaseInfo.
         * @implements IUserBaseInfo
         * @constructor
         * @param {pb.IUserBaseInfo=} [properties] Properties to set
         */
        function UserBaseInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UserBaseInfo NickName.
         * @member {string} NickName
         * @memberof pb.UserBaseInfo
         * @instance
         */
        UserBaseInfo.prototype.NickName = "";

        /**
         * UserBaseInfo Icon.
         * @member {string} Icon
         * @memberof pb.UserBaseInfo
         * @instance
         */
        UserBaseInfo.prototype.Icon = "";

        /**
         * UserBaseInfo Sex.
         * @member {pb.EnumSex} Sex
         * @memberof pb.UserBaseInfo
         * @instance
         */
        UserBaseInfo.prototype.Sex = 0;

        /**
         * UserBaseInfo Age.
         * @member {number} Age
         * @memberof pb.UserBaseInfo
         * @instance
         */
        UserBaseInfo.prototype.Age = 0;

        /**
         * UserBaseInfo Vip.
         * @member {number} Vip
         * @memberof pb.UserBaseInfo
         * @instance
         */
        UserBaseInfo.prototype.Vip = 0;

        /**
         * UserBaseInfo Lv.
         * @member {number} Lv
         * @memberof pb.UserBaseInfo
         * @instance
         */
        UserBaseInfo.prototype.Lv = 0;

        /**
         * Creates a new UserBaseInfo instance using the specified properties.
         * @function create
         * @memberof pb.UserBaseInfo
         * @static
         * @param {pb.IUserBaseInfo=} [properties] Properties to set
         * @returns {pb.UserBaseInfo} UserBaseInfo instance
         */
        UserBaseInfo.create = function create(properties) {
            return new UserBaseInfo(properties);
        };

        /**
         * Encodes the specified UserBaseInfo message. Does not implicitly {@link pb.UserBaseInfo.verify|verify} messages.
         * @function encode
         * @memberof pb.UserBaseInfo
         * @static
         * @param {pb.IUserBaseInfo} message UserBaseInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserBaseInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.NickName != null && Object.hasOwnProperty.call(message, "NickName"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.NickName);
            if (message.Icon != null && Object.hasOwnProperty.call(message, "Icon"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.Icon);
            if (message.Sex != null && Object.hasOwnProperty.call(message, "Sex"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.Sex);
            if (message.Age != null && Object.hasOwnProperty.call(message, "Age"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.Age);
            if (message.Vip != null && Object.hasOwnProperty.call(message, "Vip"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.Vip);
            if (message.Lv != null && Object.hasOwnProperty.call(message, "Lv"))
                writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.Lv);
            return writer;
        };

        /**
         * Encodes the specified UserBaseInfo message, length delimited. Does not implicitly {@link pb.UserBaseInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.UserBaseInfo
         * @static
         * @param {pb.IUserBaseInfo} message UserBaseInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserBaseInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserBaseInfo message from the specified reader or buffer.
         * @function decode
         * @memberof pb.UserBaseInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.UserBaseInfo} UserBaseInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserBaseInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.UserBaseInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.NickName = reader.string();
                    break;
                case 2:
                    message.Icon = reader.string();
                    break;
                case 3:
                    message.Sex = reader.int32();
                    break;
                case 4:
                    message.Age = reader.uint32();
                    break;
                case 5:
                    message.Vip = reader.uint32();
                    break;
                case 6:
                    message.Lv = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a UserBaseInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.UserBaseInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.UserBaseInfo} UserBaseInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserBaseInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UserBaseInfo message.
         * @function verify
         * @memberof pb.UserBaseInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserBaseInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.NickName != null && message.hasOwnProperty("NickName"))
                if (!$util.isString(message.NickName))
                    return "NickName: string expected";
            if (message.Icon != null && message.hasOwnProperty("Icon"))
                if (!$util.isString(message.Icon))
                    return "Icon: string expected";
            if (message.Sex != null && message.hasOwnProperty("Sex"))
                switch (message.Sex) {
                default:
                    return "Sex: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            if (message.Age != null && message.hasOwnProperty("Age"))
                if (!$util.isInteger(message.Age))
                    return "Age: integer expected";
            if (message.Vip != null && message.hasOwnProperty("Vip"))
                if (!$util.isInteger(message.Vip))
                    return "Vip: integer expected";
            if (message.Lv != null && message.hasOwnProperty("Lv"))
                if (!$util.isInteger(message.Lv))
                    return "Lv: integer expected";
            return null;
        };

        /**
         * Creates a UserBaseInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.UserBaseInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.UserBaseInfo} UserBaseInfo
         */
        UserBaseInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.UserBaseInfo)
                return object;
            var message = new $root.pb.UserBaseInfo();
            if (object.NickName != null)
                message.NickName = String(object.NickName);
            if (object.Icon != null)
                message.Icon = String(object.Icon);
            switch (object.Sex) {
            case "Unknow":
            case 0:
                message.Sex = 0;
                break;
            case "Male":
            case 1:
                message.Sex = 1;
                break;
            case "Female":
            case 2:
                message.Sex = 2;
                break;
            }
            if (object.Age != null)
                message.Age = object.Age >>> 0;
            if (object.Vip != null)
                message.Vip = object.Vip >>> 0;
            if (object.Lv != null)
                message.Lv = object.Lv >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a UserBaseInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.UserBaseInfo
         * @static
         * @param {pb.UserBaseInfo} message UserBaseInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserBaseInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.NickName = "";
                object.Icon = "";
                object.Sex = options.enums === String ? "Unknow" : 0;
                object.Age = 0;
                object.Vip = 0;
                object.Lv = 0;
            }
            if (message.NickName != null && message.hasOwnProperty("NickName"))
                object.NickName = message.NickName;
            if (message.Icon != null && message.hasOwnProperty("Icon"))
                object.Icon = message.Icon;
            if (message.Sex != null && message.hasOwnProperty("Sex"))
                object.Sex = options.enums === String ? $root.pb.EnumSex[message.Sex] : message.Sex;
            if (message.Age != null && message.hasOwnProperty("Age"))
                object.Age = message.Age;
            if (message.Vip != null && message.hasOwnProperty("Vip"))
                object.Vip = message.Vip;
            if (message.Lv != null && message.hasOwnProperty("Lv"))
                object.Lv = message.Lv;
            return object;
        };

        /**
         * Converts this UserBaseInfo to JSON.
         * @function toJSON
         * @memberof pb.UserBaseInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserBaseInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserBaseInfo;
    })();

    pb.UserMoneyInfo = (function() {

        /**
         * Properties of a UserMoneyInfo.
         * @memberof pb
         * @interface IUserMoneyInfo
         * @property {number|null} [Gold] UserMoneyInfo Gold
         * @property {number|null} [Diamond] UserMoneyInfo Diamond
         */

        /**
         * Constructs a new UserMoneyInfo.
         * @memberof pb
         * @classdesc Represents a UserMoneyInfo.
         * @implements IUserMoneyInfo
         * @constructor
         * @param {pb.IUserMoneyInfo=} [properties] Properties to set
         */
        function UserMoneyInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UserMoneyInfo Gold.
         * @member {number} Gold
         * @memberof pb.UserMoneyInfo
         * @instance
         */
        UserMoneyInfo.prototype.Gold = 0;

        /**
         * UserMoneyInfo Diamond.
         * @member {number} Diamond
         * @memberof pb.UserMoneyInfo
         * @instance
         */
        UserMoneyInfo.prototype.Diamond = 0;

        /**
         * Creates a new UserMoneyInfo instance using the specified properties.
         * @function create
         * @memberof pb.UserMoneyInfo
         * @static
         * @param {pb.IUserMoneyInfo=} [properties] Properties to set
         * @returns {pb.UserMoneyInfo} UserMoneyInfo instance
         */
        UserMoneyInfo.create = function create(properties) {
            return new UserMoneyInfo(properties);
        };

        /**
         * Encodes the specified UserMoneyInfo message. Does not implicitly {@link pb.UserMoneyInfo.verify|verify} messages.
         * @function encode
         * @memberof pb.UserMoneyInfo
         * @static
         * @param {pb.IUserMoneyInfo} message UserMoneyInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserMoneyInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Gold != null && Object.hasOwnProperty.call(message, "Gold"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.Gold);
            if (message.Diamond != null && Object.hasOwnProperty.call(message, "Diamond"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.Diamond);
            return writer;
        };

        /**
         * Encodes the specified UserMoneyInfo message, length delimited. Does not implicitly {@link pb.UserMoneyInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.UserMoneyInfo
         * @static
         * @param {pb.IUserMoneyInfo} message UserMoneyInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserMoneyInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserMoneyInfo message from the specified reader or buffer.
         * @function decode
         * @memberof pb.UserMoneyInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.UserMoneyInfo} UserMoneyInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserMoneyInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.UserMoneyInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Gold = reader.uint32();
                    break;
                case 2:
                    message.Diamond = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a UserMoneyInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.UserMoneyInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.UserMoneyInfo} UserMoneyInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserMoneyInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UserMoneyInfo message.
         * @function verify
         * @memberof pb.UserMoneyInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserMoneyInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Gold != null && message.hasOwnProperty("Gold"))
                if (!$util.isInteger(message.Gold))
                    return "Gold: integer expected";
            if (message.Diamond != null && message.hasOwnProperty("Diamond"))
                if (!$util.isInteger(message.Diamond))
                    return "Diamond: integer expected";
            return null;
        };

        /**
         * Creates a UserMoneyInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.UserMoneyInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.UserMoneyInfo} UserMoneyInfo
         */
        UserMoneyInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.UserMoneyInfo)
                return object;
            var message = new $root.pb.UserMoneyInfo();
            if (object.Gold != null)
                message.Gold = object.Gold >>> 0;
            if (object.Diamond != null)
                message.Diamond = object.Diamond >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a UserMoneyInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.UserMoneyInfo
         * @static
         * @param {pb.UserMoneyInfo} message UserMoneyInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserMoneyInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.Gold = 0;
                object.Diamond = 0;
            }
            if (message.Gold != null && message.hasOwnProperty("Gold"))
                object.Gold = message.Gold;
            if (message.Diamond != null && message.hasOwnProperty("Diamond"))
                object.Diamond = message.Diamond;
            return object;
        };

        /**
         * Converts this UserMoneyInfo to JSON.
         * @function toJSON
         * @memberof pb.UserMoneyInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserMoneyInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserMoneyInfo;
    })();

    pb.ReqUserInfo = (function() {

        /**
         * Properties of a ReqUserInfo.
         * @memberof pb
         * @interface IReqUserInfo
         */

        /**
         * Constructs a new ReqUserInfo.
         * @memberof pb
         * @classdesc Represents a ReqUserInfo.
         * @implements IReqUserInfo
         * @constructor
         * @param {pb.IReqUserInfo=} [properties] Properties to set
         */
        function ReqUserInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new ReqUserInfo instance using the specified properties.
         * @function create
         * @memberof pb.ReqUserInfo
         * @static
         * @param {pb.IReqUserInfo=} [properties] Properties to set
         * @returns {pb.ReqUserInfo} ReqUserInfo instance
         */
        ReqUserInfo.create = function create(properties) {
            return new ReqUserInfo(properties);
        };

        /**
         * Encodes the specified ReqUserInfo message. Does not implicitly {@link pb.ReqUserInfo.verify|verify} messages.
         * @function encode
         * @memberof pb.ReqUserInfo
         * @static
         * @param {pb.IReqUserInfo} message ReqUserInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqUserInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified ReqUserInfo message, length delimited. Does not implicitly {@link pb.ReqUserInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.ReqUserInfo
         * @static
         * @param {pb.IReqUserInfo} message ReqUserInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqUserInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ReqUserInfo message from the specified reader or buffer.
         * @function decode
         * @memberof pb.ReqUserInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.ReqUserInfo} ReqUserInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqUserInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.ReqUserInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ReqUserInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.ReqUserInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.ReqUserInfo} ReqUserInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqUserInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ReqUserInfo message.
         * @function verify
         * @memberof pb.ReqUserInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ReqUserInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a ReqUserInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.ReqUserInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.ReqUserInfo} ReqUserInfo
         */
        ReqUserInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.ReqUserInfo)
                return object;
            return new $root.pb.ReqUserInfo();
        };

        /**
         * Creates a plain object from a ReqUserInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.ReqUserInfo
         * @static
         * @param {pb.ReqUserInfo} message ReqUserInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ReqUserInfo.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this ReqUserInfo to JSON.
         * @function toJSON
         * @memberof pb.ReqUserInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ReqUserInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ReqUserInfo;
    })();

    pb.RespUserInfo = (function() {

        /**
         * Properties of a RespUserInfo.
         * @memberof pb
         * @interface IRespUserInfo
         * @property {pb.IUserBaseInfo|null} [BaseInfo] RespUserInfo BaseInfo
         * @property {pb.IUserMoneyInfo|null} [MoneyInfo] RespUserInfo MoneyInfo
         */

        /**
         * Constructs a new RespUserInfo.
         * @memberof pb
         * @classdesc Represents a RespUserInfo.
         * @implements IRespUserInfo
         * @constructor
         * @param {pb.IRespUserInfo=} [properties] Properties to set
         */
        function RespUserInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RespUserInfo BaseInfo.
         * @member {pb.IUserBaseInfo|null|undefined} BaseInfo
         * @memberof pb.RespUserInfo
         * @instance
         */
        RespUserInfo.prototype.BaseInfo = null;

        /**
         * RespUserInfo MoneyInfo.
         * @member {pb.IUserMoneyInfo|null|undefined} MoneyInfo
         * @memberof pb.RespUserInfo
         * @instance
         */
        RespUserInfo.prototype.MoneyInfo = null;

        /**
         * Creates a new RespUserInfo instance using the specified properties.
         * @function create
         * @memberof pb.RespUserInfo
         * @static
         * @param {pb.IRespUserInfo=} [properties] Properties to set
         * @returns {pb.RespUserInfo} RespUserInfo instance
         */
        RespUserInfo.create = function create(properties) {
            return new RespUserInfo(properties);
        };

        /**
         * Encodes the specified RespUserInfo message. Does not implicitly {@link pb.RespUserInfo.verify|verify} messages.
         * @function encode
         * @memberof pb.RespUserInfo
         * @static
         * @param {pb.IRespUserInfo} message RespUserInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RespUserInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.BaseInfo != null && Object.hasOwnProperty.call(message, "BaseInfo"))
                $root.pb.UserBaseInfo.encode(message.BaseInfo, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.MoneyInfo != null && Object.hasOwnProperty.call(message, "MoneyInfo"))
                $root.pb.UserMoneyInfo.encode(message.MoneyInfo, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified RespUserInfo message, length delimited. Does not implicitly {@link pb.RespUserInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.RespUserInfo
         * @static
         * @param {pb.IRespUserInfo} message RespUserInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RespUserInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RespUserInfo message from the specified reader or buffer.
         * @function decode
         * @memberof pb.RespUserInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.RespUserInfo} RespUserInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RespUserInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.RespUserInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.BaseInfo = $root.pb.UserBaseInfo.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.MoneyInfo = $root.pb.UserMoneyInfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RespUserInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.RespUserInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.RespUserInfo} RespUserInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RespUserInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RespUserInfo message.
         * @function verify
         * @memberof pb.RespUserInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RespUserInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.BaseInfo != null && message.hasOwnProperty("BaseInfo")) {
                var error = $root.pb.UserBaseInfo.verify(message.BaseInfo);
                if (error)
                    return "BaseInfo." + error;
            }
            if (message.MoneyInfo != null && message.hasOwnProperty("MoneyInfo")) {
                var error = $root.pb.UserMoneyInfo.verify(message.MoneyInfo);
                if (error)
                    return "MoneyInfo." + error;
            }
            return null;
        };

        /**
         * Creates a RespUserInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.RespUserInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.RespUserInfo} RespUserInfo
         */
        RespUserInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.RespUserInfo)
                return object;
            var message = new $root.pb.RespUserInfo();
            if (object.BaseInfo != null) {
                if (typeof object.BaseInfo !== "object")
                    throw TypeError(".pb.RespUserInfo.BaseInfo: object expected");
                message.BaseInfo = $root.pb.UserBaseInfo.fromObject(object.BaseInfo);
            }
            if (object.MoneyInfo != null) {
                if (typeof object.MoneyInfo !== "object")
                    throw TypeError(".pb.RespUserInfo.MoneyInfo: object expected");
                message.MoneyInfo = $root.pb.UserMoneyInfo.fromObject(object.MoneyInfo);
            }
            return message;
        };

        /**
         * Creates a plain object from a RespUserInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.RespUserInfo
         * @static
         * @param {pb.RespUserInfo} message RespUserInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RespUserInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.BaseInfo = null;
                object.MoneyInfo = null;
            }
            if (message.BaseInfo != null && message.hasOwnProperty("BaseInfo"))
                object.BaseInfo = $root.pb.UserBaseInfo.toObject(message.BaseInfo, options);
            if (message.MoneyInfo != null && message.hasOwnProperty("MoneyInfo"))
                object.MoneyInfo = $root.pb.UserMoneyInfo.toObject(message.MoneyInfo, options);
            return object;
        };

        /**
         * Converts this RespUserInfo to JSON.
         * @function toJSON
         * @memberof pb.RespUserInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RespUserInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RespUserInfo;
    })();

    pb.ReqCreateRoom = (function() {

        /**
         * Properties of a ReqCreateRoom.
         * @memberof pb
         * @interface IReqCreateRoom
         * @property {string|null} [RoomName] ReqCreateRoom RoomName
         * @property {string|null} [Password] ReqCreateRoom Password
         */

        /**
         * Constructs a new ReqCreateRoom.
         * @memberof pb
         * @classdesc Represents a ReqCreateRoom.
         * @implements IReqCreateRoom
         * @constructor
         * @param {pb.IReqCreateRoom=} [properties] Properties to set
         */
        function ReqCreateRoom(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReqCreateRoom RoomName.
         * @member {string} RoomName
         * @memberof pb.ReqCreateRoom
         * @instance
         */
        ReqCreateRoom.prototype.RoomName = "";

        /**
         * ReqCreateRoom Password.
         * @member {string} Password
         * @memberof pb.ReqCreateRoom
         * @instance
         */
        ReqCreateRoom.prototype.Password = "";

        /**
         * Creates a new ReqCreateRoom instance using the specified properties.
         * @function create
         * @memberof pb.ReqCreateRoom
         * @static
         * @param {pb.IReqCreateRoom=} [properties] Properties to set
         * @returns {pb.ReqCreateRoom} ReqCreateRoom instance
         */
        ReqCreateRoom.create = function create(properties) {
            return new ReqCreateRoom(properties);
        };

        /**
         * Encodes the specified ReqCreateRoom message. Does not implicitly {@link pb.ReqCreateRoom.verify|verify} messages.
         * @function encode
         * @memberof pb.ReqCreateRoom
         * @static
         * @param {pb.IReqCreateRoom} message ReqCreateRoom message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqCreateRoom.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.RoomName != null && Object.hasOwnProperty.call(message, "RoomName"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.RoomName);
            if (message.Password != null && Object.hasOwnProperty.call(message, "Password"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.Password);
            return writer;
        };

        /**
         * Encodes the specified ReqCreateRoom message, length delimited. Does not implicitly {@link pb.ReqCreateRoom.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.ReqCreateRoom
         * @static
         * @param {pb.IReqCreateRoom} message ReqCreateRoom message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqCreateRoom.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ReqCreateRoom message from the specified reader or buffer.
         * @function decode
         * @memberof pb.ReqCreateRoom
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.ReqCreateRoom} ReqCreateRoom
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqCreateRoom.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.ReqCreateRoom();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.RoomName = reader.string();
                    break;
                case 2:
                    message.Password = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ReqCreateRoom message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.ReqCreateRoom
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.ReqCreateRoom} ReqCreateRoom
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqCreateRoom.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ReqCreateRoom message.
         * @function verify
         * @memberof pb.ReqCreateRoom
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ReqCreateRoom.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.RoomName != null && message.hasOwnProperty("RoomName"))
                if (!$util.isString(message.RoomName))
                    return "RoomName: string expected";
            if (message.Password != null && message.hasOwnProperty("Password"))
                if (!$util.isString(message.Password))
                    return "Password: string expected";
            return null;
        };

        /**
         * Creates a ReqCreateRoom message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.ReqCreateRoom
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.ReqCreateRoom} ReqCreateRoom
         */
        ReqCreateRoom.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.ReqCreateRoom)
                return object;
            var message = new $root.pb.ReqCreateRoom();
            if (object.RoomName != null)
                message.RoomName = String(object.RoomName);
            if (object.Password != null)
                message.Password = String(object.Password);
            return message;
        };

        /**
         * Creates a plain object from a ReqCreateRoom message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.ReqCreateRoom
         * @static
         * @param {pb.ReqCreateRoom} message ReqCreateRoom
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ReqCreateRoom.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.RoomName = "";
                object.Password = "";
            }
            if (message.RoomName != null && message.hasOwnProperty("RoomName"))
                object.RoomName = message.RoomName;
            if (message.Password != null && message.hasOwnProperty("Password"))
                object.Password = message.Password;
            return object;
        };

        /**
         * Converts this ReqCreateRoom to JSON.
         * @function toJSON
         * @memberof pb.ReqCreateRoom
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ReqCreateRoom.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ReqCreateRoom;
    })();

    pb.RespCreateRoom = (function() {

        /**
         * Properties of a RespCreateRoom.
         * @memberof pb
         * @interface IRespCreateRoom
         * @property {pb.IRoomInfo|null} [Info] RespCreateRoom Info
         */

        /**
         * Constructs a new RespCreateRoom.
         * @memberof pb
         * @classdesc Represents a RespCreateRoom.
         * @implements IRespCreateRoom
         * @constructor
         * @param {pb.IRespCreateRoom=} [properties] Properties to set
         */
        function RespCreateRoom(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RespCreateRoom Info.
         * @member {pb.IRoomInfo|null|undefined} Info
         * @memberof pb.RespCreateRoom
         * @instance
         */
        RespCreateRoom.prototype.Info = null;

        /**
         * Creates a new RespCreateRoom instance using the specified properties.
         * @function create
         * @memberof pb.RespCreateRoom
         * @static
         * @param {pb.IRespCreateRoom=} [properties] Properties to set
         * @returns {pb.RespCreateRoom} RespCreateRoom instance
         */
        RespCreateRoom.create = function create(properties) {
            return new RespCreateRoom(properties);
        };

        /**
         * Encodes the specified RespCreateRoom message. Does not implicitly {@link pb.RespCreateRoom.verify|verify} messages.
         * @function encode
         * @memberof pb.RespCreateRoom
         * @static
         * @param {pb.IRespCreateRoom} message RespCreateRoom message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RespCreateRoom.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Info != null && Object.hasOwnProperty.call(message, "Info"))
                $root.pb.RoomInfo.encode(message.Info, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified RespCreateRoom message, length delimited. Does not implicitly {@link pb.RespCreateRoom.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.RespCreateRoom
         * @static
         * @param {pb.IRespCreateRoom} message RespCreateRoom message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RespCreateRoom.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RespCreateRoom message from the specified reader or buffer.
         * @function decode
         * @memberof pb.RespCreateRoom
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.RespCreateRoom} RespCreateRoom
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RespCreateRoom.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.RespCreateRoom();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Info = $root.pb.RoomInfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RespCreateRoom message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.RespCreateRoom
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.RespCreateRoom} RespCreateRoom
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RespCreateRoom.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RespCreateRoom message.
         * @function verify
         * @memberof pb.RespCreateRoom
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RespCreateRoom.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Info != null && message.hasOwnProperty("Info")) {
                var error = $root.pb.RoomInfo.verify(message.Info);
                if (error)
                    return "Info." + error;
            }
            return null;
        };

        /**
         * Creates a RespCreateRoom message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.RespCreateRoom
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.RespCreateRoom} RespCreateRoom
         */
        RespCreateRoom.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.RespCreateRoom)
                return object;
            var message = new $root.pb.RespCreateRoom();
            if (object.Info != null) {
                if (typeof object.Info !== "object")
                    throw TypeError(".pb.RespCreateRoom.Info: object expected");
                message.Info = $root.pb.RoomInfo.fromObject(object.Info);
            }
            return message;
        };

        /**
         * Creates a plain object from a RespCreateRoom message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.RespCreateRoom
         * @static
         * @param {pb.RespCreateRoom} message RespCreateRoom
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RespCreateRoom.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.Info = null;
            if (message.Info != null && message.hasOwnProperty("Info"))
                object.Info = $root.pb.RoomInfo.toObject(message.Info, options);
            return object;
        };

        /**
         * Converts this RespCreateRoom to JSON.
         * @function toJSON
         * @memberof pb.RespCreateRoom
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RespCreateRoom.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RespCreateRoom;
    })();

    pb.ReqJoinRoom = (function() {

        /**
         * Properties of a ReqJoinRoom.
         * @memberof pb
         * @interface IReqJoinRoom
         * @property {number|null} [RoomId] ReqJoinRoom RoomId
         * @property {string|null} [Password] ReqJoinRoom Password
         */

        /**
         * Constructs a new ReqJoinRoom.
         * @memberof pb
         * @classdesc Represents a ReqJoinRoom.
         * @implements IReqJoinRoom
         * @constructor
         * @param {pb.IReqJoinRoom=} [properties] Properties to set
         */
        function ReqJoinRoom(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReqJoinRoom RoomId.
         * @member {number} RoomId
         * @memberof pb.ReqJoinRoom
         * @instance
         */
        ReqJoinRoom.prototype.RoomId = 0;

        /**
         * ReqJoinRoom Password.
         * @member {string} Password
         * @memberof pb.ReqJoinRoom
         * @instance
         */
        ReqJoinRoom.prototype.Password = "";

        /**
         * Creates a new ReqJoinRoom instance using the specified properties.
         * @function create
         * @memberof pb.ReqJoinRoom
         * @static
         * @param {pb.IReqJoinRoom=} [properties] Properties to set
         * @returns {pb.ReqJoinRoom} ReqJoinRoom instance
         */
        ReqJoinRoom.create = function create(properties) {
            return new ReqJoinRoom(properties);
        };

        /**
         * Encodes the specified ReqJoinRoom message. Does not implicitly {@link pb.ReqJoinRoom.verify|verify} messages.
         * @function encode
         * @memberof pb.ReqJoinRoom
         * @static
         * @param {pb.IReqJoinRoom} message ReqJoinRoom message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqJoinRoom.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.RoomId != null && Object.hasOwnProperty.call(message, "RoomId"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.RoomId);
            if (message.Password != null && Object.hasOwnProperty.call(message, "Password"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.Password);
            return writer;
        };

        /**
         * Encodes the specified ReqJoinRoom message, length delimited. Does not implicitly {@link pb.ReqJoinRoom.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.ReqJoinRoom
         * @static
         * @param {pb.IReqJoinRoom} message ReqJoinRoom message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqJoinRoom.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ReqJoinRoom message from the specified reader or buffer.
         * @function decode
         * @memberof pb.ReqJoinRoom
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.ReqJoinRoom} ReqJoinRoom
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqJoinRoom.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.ReqJoinRoom();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.RoomId = reader.uint32();
                    break;
                case 2:
                    message.Password = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ReqJoinRoom message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.ReqJoinRoom
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.ReqJoinRoom} ReqJoinRoom
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqJoinRoom.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ReqJoinRoom message.
         * @function verify
         * @memberof pb.ReqJoinRoom
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ReqJoinRoom.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.RoomId != null && message.hasOwnProperty("RoomId"))
                if (!$util.isInteger(message.RoomId))
                    return "RoomId: integer expected";
            if (message.Password != null && message.hasOwnProperty("Password"))
                if (!$util.isString(message.Password))
                    return "Password: string expected";
            return null;
        };

        /**
         * Creates a ReqJoinRoom message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.ReqJoinRoom
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.ReqJoinRoom} ReqJoinRoom
         */
        ReqJoinRoom.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.ReqJoinRoom)
                return object;
            var message = new $root.pb.ReqJoinRoom();
            if (object.RoomId != null)
                message.RoomId = object.RoomId >>> 0;
            if (object.Password != null)
                message.Password = String(object.Password);
            return message;
        };

        /**
         * Creates a plain object from a ReqJoinRoom message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.ReqJoinRoom
         * @static
         * @param {pb.ReqJoinRoom} message ReqJoinRoom
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ReqJoinRoom.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.RoomId = 0;
                object.Password = "";
            }
            if (message.RoomId != null && message.hasOwnProperty("RoomId"))
                object.RoomId = message.RoomId;
            if (message.Password != null && message.hasOwnProperty("Password"))
                object.Password = message.Password;
            return object;
        };

        /**
         * Converts this ReqJoinRoom to JSON.
         * @function toJSON
         * @memberof pb.ReqJoinRoom
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ReqJoinRoom.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ReqJoinRoom;
    })();

    pb.RespJoinRoom = (function() {

        /**
         * Properties of a RespJoinRoom.
         * @memberof pb
         * @interface IRespJoinRoom
         * @property {pb.IRoomInfo|null} [Info] RespJoinRoom Info
         */

        /**
         * Constructs a new RespJoinRoom.
         * @memberof pb
         * @classdesc Represents a RespJoinRoom.
         * @implements IRespJoinRoom
         * @constructor
         * @param {pb.IRespJoinRoom=} [properties] Properties to set
         */
        function RespJoinRoom(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RespJoinRoom Info.
         * @member {pb.IRoomInfo|null|undefined} Info
         * @memberof pb.RespJoinRoom
         * @instance
         */
        RespJoinRoom.prototype.Info = null;

        /**
         * Creates a new RespJoinRoom instance using the specified properties.
         * @function create
         * @memberof pb.RespJoinRoom
         * @static
         * @param {pb.IRespJoinRoom=} [properties] Properties to set
         * @returns {pb.RespJoinRoom} RespJoinRoom instance
         */
        RespJoinRoom.create = function create(properties) {
            return new RespJoinRoom(properties);
        };

        /**
         * Encodes the specified RespJoinRoom message. Does not implicitly {@link pb.RespJoinRoom.verify|verify} messages.
         * @function encode
         * @memberof pb.RespJoinRoom
         * @static
         * @param {pb.IRespJoinRoom} message RespJoinRoom message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RespJoinRoom.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Info != null && Object.hasOwnProperty.call(message, "Info"))
                $root.pb.RoomInfo.encode(message.Info, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified RespJoinRoom message, length delimited. Does not implicitly {@link pb.RespJoinRoom.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.RespJoinRoom
         * @static
         * @param {pb.IRespJoinRoom} message RespJoinRoom message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RespJoinRoom.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RespJoinRoom message from the specified reader or buffer.
         * @function decode
         * @memberof pb.RespJoinRoom
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.RespJoinRoom} RespJoinRoom
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RespJoinRoom.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.RespJoinRoom();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Info = $root.pb.RoomInfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RespJoinRoom message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.RespJoinRoom
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.RespJoinRoom} RespJoinRoom
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RespJoinRoom.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RespJoinRoom message.
         * @function verify
         * @memberof pb.RespJoinRoom
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RespJoinRoom.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Info != null && message.hasOwnProperty("Info")) {
                var error = $root.pb.RoomInfo.verify(message.Info);
                if (error)
                    return "Info." + error;
            }
            return null;
        };

        /**
         * Creates a RespJoinRoom message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.RespJoinRoom
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.RespJoinRoom} RespJoinRoom
         */
        RespJoinRoom.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.RespJoinRoom)
                return object;
            var message = new $root.pb.RespJoinRoom();
            if (object.Info != null) {
                if (typeof object.Info !== "object")
                    throw TypeError(".pb.RespJoinRoom.Info: object expected");
                message.Info = $root.pb.RoomInfo.fromObject(object.Info);
            }
            return message;
        };

        /**
         * Creates a plain object from a RespJoinRoom message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.RespJoinRoom
         * @static
         * @param {pb.RespJoinRoom} message RespJoinRoom
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RespJoinRoom.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.Info = null;
            if (message.Info != null && message.hasOwnProperty("Info"))
                object.Info = $root.pb.RoomInfo.toObject(message.Info, options);
            return object;
        };

        /**
         * Converts this RespJoinRoom to JSON.
         * @function toJSON
         * @memberof pb.RespJoinRoom
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RespJoinRoom.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RespJoinRoom;
    })();

    pb.RoomInfo = (function() {

        /**
         * Properties of a RoomInfo.
         * @memberof pb
         * @interface IRoomInfo
         * @property {number|null} [RoomId] RoomInfo RoomId
         * @property {string|null} [RoomName] RoomInfo RoomName
         * @property {string|null} [Password] RoomInfo Password
         * @property {Array.<pb.RoomInfo.IRoomUser>|null} [Users] RoomInfo Users
         */

        /**
         * Constructs a new RoomInfo.
         * @memberof pb
         * @classdesc Represents a RoomInfo.
         * @implements IRoomInfo
         * @constructor
         * @param {pb.IRoomInfo=} [properties] Properties to set
         */
        function RoomInfo(properties) {
            this.Users = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RoomInfo RoomId.
         * @member {number} RoomId
         * @memberof pb.RoomInfo
         * @instance
         */
        RoomInfo.prototype.RoomId = 0;

        /**
         * RoomInfo RoomName.
         * @member {string} RoomName
         * @memberof pb.RoomInfo
         * @instance
         */
        RoomInfo.prototype.RoomName = "";

        /**
         * RoomInfo Password.
         * @member {string} Password
         * @memberof pb.RoomInfo
         * @instance
         */
        RoomInfo.prototype.Password = "";

        /**
         * RoomInfo Users.
         * @member {Array.<pb.RoomInfo.IRoomUser>} Users
         * @memberof pb.RoomInfo
         * @instance
         */
        RoomInfo.prototype.Users = $util.emptyArray;

        /**
         * Creates a new RoomInfo instance using the specified properties.
         * @function create
         * @memberof pb.RoomInfo
         * @static
         * @param {pb.IRoomInfo=} [properties] Properties to set
         * @returns {pb.RoomInfo} RoomInfo instance
         */
        RoomInfo.create = function create(properties) {
            return new RoomInfo(properties);
        };

        /**
         * Encodes the specified RoomInfo message. Does not implicitly {@link pb.RoomInfo.verify|verify} messages.
         * @function encode
         * @memberof pb.RoomInfo
         * @static
         * @param {pb.IRoomInfo} message RoomInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RoomInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.RoomId != null && Object.hasOwnProperty.call(message, "RoomId"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.RoomId);
            if (message.RoomName != null && Object.hasOwnProperty.call(message, "RoomName"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.RoomName);
            if (message.Password != null && Object.hasOwnProperty.call(message, "Password"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.Password);
            if (message.Users != null && message.Users.length)
                for (var i = 0; i < message.Users.length; ++i)
                    $root.pb.RoomInfo.RoomUser.encode(message.Users[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified RoomInfo message, length delimited. Does not implicitly {@link pb.RoomInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.RoomInfo
         * @static
         * @param {pb.IRoomInfo} message RoomInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RoomInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RoomInfo message from the specified reader or buffer.
         * @function decode
         * @memberof pb.RoomInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.RoomInfo} RoomInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RoomInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.RoomInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.RoomId = reader.uint32();
                    break;
                case 2:
                    message.RoomName = reader.string();
                    break;
                case 3:
                    message.Password = reader.string();
                    break;
                case 4:
                    if (!(message.Users && message.Users.length))
                        message.Users = [];
                    message.Users.push($root.pb.RoomInfo.RoomUser.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RoomInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.RoomInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.RoomInfo} RoomInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RoomInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RoomInfo message.
         * @function verify
         * @memberof pb.RoomInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RoomInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.RoomId != null && message.hasOwnProperty("RoomId"))
                if (!$util.isInteger(message.RoomId))
                    return "RoomId: integer expected";
            if (message.RoomName != null && message.hasOwnProperty("RoomName"))
                if (!$util.isString(message.RoomName))
                    return "RoomName: string expected";
            if (message.Password != null && message.hasOwnProperty("Password"))
                if (!$util.isString(message.Password))
                    return "Password: string expected";
            if (message.Users != null && message.hasOwnProperty("Users")) {
                if (!Array.isArray(message.Users))
                    return "Users: array expected";
                for (var i = 0; i < message.Users.length; ++i) {
                    var error = $root.pb.RoomInfo.RoomUser.verify(message.Users[i]);
                    if (error)
                        return "Users." + error;
                }
            }
            return null;
        };

        /**
         * Creates a RoomInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.RoomInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.RoomInfo} RoomInfo
         */
        RoomInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.RoomInfo)
                return object;
            var message = new $root.pb.RoomInfo();
            if (object.RoomId != null)
                message.RoomId = object.RoomId >>> 0;
            if (object.RoomName != null)
                message.RoomName = String(object.RoomName);
            if (object.Password != null)
                message.Password = String(object.Password);
            if (object.Users) {
                if (!Array.isArray(object.Users))
                    throw TypeError(".pb.RoomInfo.Users: array expected");
                message.Users = [];
                for (var i = 0; i < object.Users.length; ++i) {
                    if (typeof object.Users[i] !== "object")
                        throw TypeError(".pb.RoomInfo.Users: object expected");
                    message.Users[i] = $root.pb.RoomInfo.RoomUser.fromObject(object.Users[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a RoomInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.RoomInfo
         * @static
         * @param {pb.RoomInfo} message RoomInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RoomInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.Users = [];
            if (options.defaults) {
                object.RoomId = 0;
                object.RoomName = "";
                object.Password = "";
            }
            if (message.RoomId != null && message.hasOwnProperty("RoomId"))
                object.RoomId = message.RoomId;
            if (message.RoomName != null && message.hasOwnProperty("RoomName"))
                object.RoomName = message.RoomName;
            if (message.Password != null && message.hasOwnProperty("Password"))
                object.Password = message.Password;
            if (message.Users && message.Users.length) {
                object.Users = [];
                for (var j = 0; j < message.Users.length; ++j)
                    object.Users[j] = $root.pb.RoomInfo.RoomUser.toObject(message.Users[j], options);
            }
            return object;
        };

        /**
         * Converts this RoomInfo to JSON.
         * @function toJSON
         * @memberof pb.RoomInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RoomInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        RoomInfo.RoomUser = (function() {

            /**
             * Properties of a RoomUser.
             * @memberof pb.RoomInfo
             * @interface IRoomUser
             * @property {number|null} [UserId] RoomUser UserId
             * @property {string|null} [UserNickName] RoomUser UserNickName
             * @property {pb.EnumGameRole|null} [GameRoleId] RoomUser GameRoleId
             * @property {number|null} [TotalNum] RoomUser TotalNum
             * @property {number|null} [PassNum] RoomUser PassNum
             * @property {number|null} [MapLv] RoomUser MapLv
             * @property {boolean|null} [IsReady] RoomUser IsReady
             */

            /**
             * Constructs a new RoomUser.
             * @memberof pb.RoomInfo
             * @classdesc Represents a RoomUser.
             * @implements IRoomUser
             * @constructor
             * @param {pb.RoomInfo.IRoomUser=} [properties] Properties to set
             */
            function RoomUser(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * RoomUser UserId.
             * @member {number} UserId
             * @memberof pb.RoomInfo.RoomUser
             * @instance
             */
            RoomUser.prototype.UserId = 0;

            /**
             * RoomUser UserNickName.
             * @member {string} UserNickName
             * @memberof pb.RoomInfo.RoomUser
             * @instance
             */
            RoomUser.prototype.UserNickName = "";

            /**
             * RoomUser GameRoleId.
             * @member {pb.EnumGameRole} GameRoleId
             * @memberof pb.RoomInfo.RoomUser
             * @instance
             */
            RoomUser.prototype.GameRoleId = 0;

            /**
             * RoomUser TotalNum.
             * @member {number} TotalNum
             * @memberof pb.RoomInfo.RoomUser
             * @instance
             */
            RoomUser.prototype.TotalNum = 0;

            /**
             * RoomUser PassNum.
             * @member {number} PassNum
             * @memberof pb.RoomInfo.RoomUser
             * @instance
             */
            RoomUser.prototype.PassNum = 0;

            /**
             * RoomUser MapLv.
             * @member {number} MapLv
             * @memberof pb.RoomInfo.RoomUser
             * @instance
             */
            RoomUser.prototype.MapLv = 0;

            /**
             * RoomUser IsReady.
             * @member {boolean} IsReady
             * @memberof pb.RoomInfo.RoomUser
             * @instance
             */
            RoomUser.prototype.IsReady = false;

            /**
             * Creates a new RoomUser instance using the specified properties.
             * @function create
             * @memberof pb.RoomInfo.RoomUser
             * @static
             * @param {pb.RoomInfo.IRoomUser=} [properties] Properties to set
             * @returns {pb.RoomInfo.RoomUser} RoomUser instance
             */
            RoomUser.create = function create(properties) {
                return new RoomUser(properties);
            };

            /**
             * Encodes the specified RoomUser message. Does not implicitly {@link pb.RoomInfo.RoomUser.verify|verify} messages.
             * @function encode
             * @memberof pb.RoomInfo.RoomUser
             * @static
             * @param {pb.RoomInfo.IRoomUser} message RoomUser message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RoomUser.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.UserId != null && Object.hasOwnProperty.call(message, "UserId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.UserId);
                if (message.UserNickName != null && Object.hasOwnProperty.call(message, "UserNickName"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.UserNickName);
                if (message.GameRoleId != null && Object.hasOwnProperty.call(message, "GameRoleId"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.GameRoleId);
                if (message.TotalNum != null && Object.hasOwnProperty.call(message, "TotalNum"))
                    writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.TotalNum);
                if (message.PassNum != null && Object.hasOwnProperty.call(message, "PassNum"))
                    writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.PassNum);
                if (message.MapLv != null && Object.hasOwnProperty.call(message, "MapLv"))
                    writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.MapLv);
                if (message.IsReady != null && Object.hasOwnProperty.call(message, "IsReady"))
                    writer.uint32(/* id 7, wireType 0 =*/56).bool(message.IsReady);
                return writer;
            };

            /**
             * Encodes the specified RoomUser message, length delimited. Does not implicitly {@link pb.RoomInfo.RoomUser.verify|verify} messages.
             * @function encodeDelimited
             * @memberof pb.RoomInfo.RoomUser
             * @static
             * @param {pb.RoomInfo.IRoomUser} message RoomUser message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RoomUser.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a RoomUser message from the specified reader or buffer.
             * @function decode
             * @memberof pb.RoomInfo.RoomUser
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {pb.RoomInfo.RoomUser} RoomUser
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RoomUser.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.RoomInfo.RoomUser();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.UserId = reader.uint32();
                        break;
                    case 2:
                        message.UserNickName = reader.string();
                        break;
                    case 3:
                        message.GameRoleId = reader.int32();
                        break;
                    case 4:
                        message.TotalNum = reader.uint32();
                        break;
                    case 5:
                        message.PassNum = reader.uint32();
                        break;
                    case 6:
                        message.MapLv = reader.uint32();
                        break;
                    case 7:
                        message.IsReady = reader.bool();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a RoomUser message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof pb.RoomInfo.RoomUser
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {pb.RoomInfo.RoomUser} RoomUser
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RoomUser.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a RoomUser message.
             * @function verify
             * @memberof pb.RoomInfo.RoomUser
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            RoomUser.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.UserId != null && message.hasOwnProperty("UserId"))
                    if (!$util.isInteger(message.UserId))
                        return "UserId: integer expected";
                if (message.UserNickName != null && message.hasOwnProperty("UserNickName"))
                    if (!$util.isString(message.UserNickName))
                        return "UserNickName: string expected";
                if (message.GameRoleId != null && message.hasOwnProperty("GameRoleId"))
                    switch (message.GameRoleId) {
                    default:
                        return "GameRoleId: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                    case 6:
                    case 7:
                    case 8:
                    case 9:
                        break;
                    }
                if (message.TotalNum != null && message.hasOwnProperty("TotalNum"))
                    if (!$util.isInteger(message.TotalNum))
                        return "TotalNum: integer expected";
                if (message.PassNum != null && message.hasOwnProperty("PassNum"))
                    if (!$util.isInteger(message.PassNum))
                        return "PassNum: integer expected";
                if (message.MapLv != null && message.hasOwnProperty("MapLv"))
                    if (!$util.isInteger(message.MapLv))
                        return "MapLv: integer expected";
                if (message.IsReady != null && message.hasOwnProperty("IsReady"))
                    if (typeof message.IsReady !== "boolean")
                        return "IsReady: boolean expected";
                return null;
            };

            /**
             * Creates a RoomUser message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof pb.RoomInfo.RoomUser
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {pb.RoomInfo.RoomUser} RoomUser
             */
            RoomUser.fromObject = function fromObject(object) {
                if (object instanceof $root.pb.RoomInfo.RoomUser)
                    return object;
                var message = new $root.pb.RoomInfo.RoomUser();
                if (object.UserId != null)
                    message.UserId = object.UserId >>> 0;
                if (object.UserNickName != null)
                    message.UserNickName = String(object.UserNickName);
                switch (object.GameRoleId) {
                case "DefaultRole":
                case 0:
                    message.GameRoleId = 0;
                    break;
                case "Warrior":
                case 1:
                    message.GameRoleId = 1;
                    break;
                case "Rogue":
                case 2:
                    message.GameRoleId = 2;
                    break;
                case "Mage":
                case 3:
                    message.GameRoleId = 3;
                    break;
                case "Hunter":
                case 4:
                    message.GameRoleId = 4;
                    break;
                case "Druid":
                case 5:
                    message.GameRoleId = 5;
                    break;
                case "Paladin":
                case 6:
                    message.GameRoleId = 6;
                    break;
                case "Priest":
                case 7:
                    message.GameRoleId = 7;
                    break;
                case "Warlock":
                case 8:
                    message.GameRoleId = 8;
                    break;
                case "Shaman":
                case 9:
                    message.GameRoleId = 9;
                    break;
                }
                if (object.TotalNum != null)
                    message.TotalNum = object.TotalNum >>> 0;
                if (object.PassNum != null)
                    message.PassNum = object.PassNum >>> 0;
                if (object.MapLv != null)
                    message.MapLv = object.MapLv >>> 0;
                if (object.IsReady != null)
                    message.IsReady = Boolean(object.IsReady);
                return message;
            };

            /**
             * Creates a plain object from a RoomUser message. Also converts values to other types if specified.
             * @function toObject
             * @memberof pb.RoomInfo.RoomUser
             * @static
             * @param {pb.RoomInfo.RoomUser} message RoomUser
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            RoomUser.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.UserId = 0;
                    object.UserNickName = "";
                    object.GameRoleId = options.enums === String ? "DefaultRole" : 0;
                    object.TotalNum = 0;
                    object.PassNum = 0;
                    object.MapLv = 0;
                    object.IsReady = false;
                }
                if (message.UserId != null && message.hasOwnProperty("UserId"))
                    object.UserId = message.UserId;
                if (message.UserNickName != null && message.hasOwnProperty("UserNickName"))
                    object.UserNickName = message.UserNickName;
                if (message.GameRoleId != null && message.hasOwnProperty("GameRoleId"))
                    object.GameRoleId = options.enums === String ? $root.pb.EnumGameRole[message.GameRoleId] : message.GameRoleId;
                if (message.TotalNum != null && message.hasOwnProperty("TotalNum"))
                    object.TotalNum = message.TotalNum;
                if (message.PassNum != null && message.hasOwnProperty("PassNum"))
                    object.PassNum = message.PassNum;
                if (message.MapLv != null && message.hasOwnProperty("MapLv"))
                    object.MapLv = message.MapLv;
                if (message.IsReady != null && message.hasOwnProperty("IsReady"))
                    object.IsReady = message.IsReady;
                return object;
            };

            /**
             * Converts this RoomUser to JSON.
             * @function toJSON
             * @memberof pb.RoomInfo.RoomUser
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            RoomUser.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return RoomUser;
        })();

        return RoomInfo;
    })();

    pb.GameRole = (function() {

        /**
         * Properties of a GameRole.
         * @memberof pb
         * @interface IGameRole
         * @property {pb.EnumGameRole|null} [RoleId] GameRole RoleId
         */

        /**
         * Constructs a new GameRole.
         * @memberof pb
         * @classdesc Represents a GameRole.
         * @implements IGameRole
         * @constructor
         * @param {pb.IGameRole=} [properties] Properties to set
         */
        function GameRole(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GameRole RoleId.
         * @member {pb.EnumGameRole} RoleId
         * @memberof pb.GameRole
         * @instance
         */
        GameRole.prototype.RoleId = 0;

        /**
         * Creates a new GameRole instance using the specified properties.
         * @function create
         * @memberof pb.GameRole
         * @static
         * @param {pb.IGameRole=} [properties] Properties to set
         * @returns {pb.GameRole} GameRole instance
         */
        GameRole.create = function create(properties) {
            return new GameRole(properties);
        };

        /**
         * Encodes the specified GameRole message. Does not implicitly {@link pb.GameRole.verify|verify} messages.
         * @function encode
         * @memberof pb.GameRole
         * @static
         * @param {pb.IGameRole} message GameRole message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameRole.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.RoleId != null && Object.hasOwnProperty.call(message, "RoleId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.RoleId);
            return writer;
        };

        /**
         * Encodes the specified GameRole message, length delimited. Does not implicitly {@link pb.GameRole.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.GameRole
         * @static
         * @param {pb.IGameRole} message GameRole message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameRole.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GameRole message from the specified reader or buffer.
         * @function decode
         * @memberof pb.GameRole
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.GameRole} GameRole
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameRole.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.GameRole();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.RoleId = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GameRole message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.GameRole
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.GameRole} GameRole
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameRole.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GameRole message.
         * @function verify
         * @memberof pb.GameRole
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GameRole.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.RoleId != null && message.hasOwnProperty("RoleId"))
                switch (message.RoleId) {
                default:
                    return "RoleId: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                case 8:
                case 9:
                    break;
                }
            return null;
        };

        /**
         * Creates a GameRole message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.GameRole
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.GameRole} GameRole
         */
        GameRole.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.GameRole)
                return object;
            var message = new $root.pb.GameRole();
            switch (object.RoleId) {
            case "DefaultRole":
            case 0:
                message.RoleId = 0;
                break;
            case "Warrior":
            case 1:
                message.RoleId = 1;
                break;
            case "Rogue":
            case 2:
                message.RoleId = 2;
                break;
            case "Mage":
            case 3:
                message.RoleId = 3;
                break;
            case "Hunter":
            case 4:
                message.RoleId = 4;
                break;
            case "Druid":
            case 5:
                message.RoleId = 5;
                break;
            case "Paladin":
            case 6:
                message.RoleId = 6;
                break;
            case "Priest":
            case 7:
                message.RoleId = 7;
                break;
            case "Warlock":
            case 8:
                message.RoleId = 8;
                break;
            case "Shaman":
            case 9:
                message.RoleId = 9;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a GameRole message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.GameRole
         * @static
         * @param {pb.GameRole} message GameRole
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GameRole.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.RoleId = options.enums === String ? "DefaultRole" : 0;
            if (message.RoleId != null && message.hasOwnProperty("RoleId"))
                object.RoleId = options.enums === String ? $root.pb.EnumGameRole[message.RoleId] : message.RoleId;
            return object;
        };

        /**
         * Converts this GameRole to JSON.
         * @function toJSON
         * @memberof pb.GameRole
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GameRole.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GameRole;
    })();

    pb.RoomReady = (function() {

        /**
         * Properties of a RoomReady.
         * @memberof pb
         * @interface IRoomReady
         * @property {boolean|null} [IsReady] RoomReady IsReady
         */

        /**
         * Constructs a new RoomReady.
         * @memberof pb
         * @classdesc Represents a RoomReady.
         * @implements IRoomReady
         * @constructor
         * @param {pb.IRoomReady=} [properties] Properties to set
         */
        function RoomReady(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RoomReady IsReady.
         * @member {boolean} IsReady
         * @memberof pb.RoomReady
         * @instance
         */
        RoomReady.prototype.IsReady = false;

        /**
         * Creates a new RoomReady instance using the specified properties.
         * @function create
         * @memberof pb.RoomReady
         * @static
         * @param {pb.IRoomReady=} [properties] Properties to set
         * @returns {pb.RoomReady} RoomReady instance
         */
        RoomReady.create = function create(properties) {
            return new RoomReady(properties);
        };

        /**
         * Encodes the specified RoomReady message. Does not implicitly {@link pb.RoomReady.verify|verify} messages.
         * @function encode
         * @memberof pb.RoomReady
         * @static
         * @param {pb.IRoomReady} message RoomReady message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RoomReady.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.IsReady != null && Object.hasOwnProperty.call(message, "IsReady"))
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.IsReady);
            return writer;
        };

        /**
         * Encodes the specified RoomReady message, length delimited. Does not implicitly {@link pb.RoomReady.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.RoomReady
         * @static
         * @param {pb.IRoomReady} message RoomReady message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RoomReady.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RoomReady message from the specified reader or buffer.
         * @function decode
         * @memberof pb.RoomReady
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.RoomReady} RoomReady
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RoomReady.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.RoomReady();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.IsReady = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RoomReady message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.RoomReady
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.RoomReady} RoomReady
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RoomReady.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RoomReady message.
         * @function verify
         * @memberof pb.RoomReady
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RoomReady.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.IsReady != null && message.hasOwnProperty("IsReady"))
                if (typeof message.IsReady !== "boolean")
                    return "IsReady: boolean expected";
            return null;
        };

        /**
         * Creates a RoomReady message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.RoomReady
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.RoomReady} RoomReady
         */
        RoomReady.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.RoomReady)
                return object;
            var message = new $root.pb.RoomReady();
            if (object.IsReady != null)
                message.IsReady = Boolean(object.IsReady);
            return message;
        };

        /**
         * Creates a plain object from a RoomReady message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.RoomReady
         * @static
         * @param {pb.RoomReady} message RoomReady
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RoomReady.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.IsReady = false;
            if (message.IsReady != null && message.hasOwnProperty("IsReady"))
                object.IsReady = message.IsReady;
            return object;
        };

        /**
         * Converts this RoomReady to JSON.
         * @function toJSON
         * @memberof pb.RoomReady
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RoomReady.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RoomReady;
    })();

    return pb;
})();

module.exports = $root;

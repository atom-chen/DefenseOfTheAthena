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
     * ErrorCode enum.
     * @name pb.ErrorCode
     * @enum {number}
     * @property {number} Uknow=0 Uknow value
     * @property {number} OK=1 OK value
     * @property {number} HelloError=2 HelloError value
     * @property {number} LoginAccountOrPasswordError=3 LoginAccountOrPasswordError value
     * @property {number} RegisterAccountExit=4 RegisterAccountExit value
     */
    pb.ErrorCode = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "Uknow"] = 0;
        values[valuesById[1] = "OK"] = 1;
        values[valuesById[2] = "HelloError"] = 2;
        values[valuesById[3] = "LoginAccountOrPasswordError"] = 3;
        values[valuesById[4] = "RegisterAccountExit"] = 4;
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
            case "HelloError":
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
            case "HelloError":
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
            case "HelloError":
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

    /**
     * MessageCommand enum.
     * @name pb.MessageCommand
     * @enum {number}
     * @property {number} Unknown=0 Unknown value
     * @property {number} LongLinkAuth=1 LongLinkAuth value
     * @property {number} HeartBeat=2 HeartBeat value
     * @property {number} GetUserInfo=3 GetUserInfo value
     */
    pb.MessageCommand = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "Unknown"] = 0;
        values[valuesById[1] = "LongLinkAuth"] = 1;
        values[valuesById[2] = "HeartBeat"] = 2;
        values[valuesById[3] = "GetUserInfo"] = 3;
        return values;
    })();

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
            case "LongLinkAuth":
            case 1:
                message.Cmd = 1;
                break;
            case "HeartBeat":
            case 2:
                message.Cmd = 2;
                break;
            case "GetUserInfo":
            case 3:
                message.Cmd = 3;
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
            case "LongLinkAuth":
            case 1:
                message.Cmd = 1;
                break;
            case "HeartBeat":
            case 2:
                message.Cmd = 2;
                break;
            case "GetUserInfo":
            case 3:
                message.Cmd = 3;
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
            case "HelloError":
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

    return pb;
})();

module.exports = $root;

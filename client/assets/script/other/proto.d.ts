import * as $protobuf from "protobufjs";
/** Namespace pb. */
export namespace pb {

    /** EnumSex enum. */
    enum EnumSex {
        Unknow = 0,
        Male = 1,
        Female = 2
    }

    /** ErrorCode enum. */
    enum ErrorCode {
        Uknow = 0,
        OK = 1,
        EntryError = 2,
        LoginAccountOrPasswordError = 3,
        RegisterAccountExit = 4,
        AuthFailed = 5
    }

    /** Properties of a ReqEntry. */
    interface IReqEntry {

        /** ReqEntry Secret */
        Secret?: (string|null);
    }

    /** Represents a ReqEntry. */
    class ReqEntry implements IReqEntry {

        /**
         * Constructs a new ReqEntry.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IReqEntry);

        /** ReqEntry Secret. */
        public Secret: string;

        /**
         * Creates a new ReqEntry instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReqEntry instance
         */
        public static create(properties?: pb.IReqEntry): pb.ReqEntry;

        /**
         * Encodes the specified ReqEntry message. Does not implicitly {@link pb.ReqEntry.verify|verify} messages.
         * @param message ReqEntry message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IReqEntry, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ReqEntry message, length delimited. Does not implicitly {@link pb.ReqEntry.verify|verify} messages.
         * @param message ReqEntry message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IReqEntry, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ReqEntry message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReqEntry
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.ReqEntry;

        /**
         * Decodes a ReqEntry message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReqEntry
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.ReqEntry;

        /**
         * Verifies a ReqEntry message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ReqEntry message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ReqEntry
         */
        public static fromObject(object: { [k: string]: any }): pb.ReqEntry;

        /**
         * Creates a plain object from a ReqEntry message. Also converts values to other types if specified.
         * @param message ReqEntry
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.ReqEntry, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ReqEntry to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RespEntry. */
    interface IRespEntry {

        /** RespEntry ErrCode */
        ErrCode?: (pb.ErrorCode|null);

        /** RespEntry LoginUrl */
        LoginUrl?: (string|null);

        /** RespEntry RegisterUrl */
        RegisterUrl?: (string|null);

        /** RespEntry WebSocketUrl */
        WebSocketUrl?: (string|null);
    }

    /** Represents a RespEntry. */
    class RespEntry implements IRespEntry {

        /**
         * Constructs a new RespEntry.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IRespEntry);

        /** RespEntry ErrCode. */
        public ErrCode: pb.ErrorCode;

        /** RespEntry LoginUrl. */
        public LoginUrl: string;

        /** RespEntry RegisterUrl. */
        public RegisterUrl: string;

        /** RespEntry WebSocketUrl. */
        public WebSocketUrl: string;

        /**
         * Creates a new RespEntry instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RespEntry instance
         */
        public static create(properties?: pb.IRespEntry): pb.RespEntry;

        /**
         * Encodes the specified RespEntry message. Does not implicitly {@link pb.RespEntry.verify|verify} messages.
         * @param message RespEntry message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IRespEntry, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RespEntry message, length delimited. Does not implicitly {@link pb.RespEntry.verify|verify} messages.
         * @param message RespEntry message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IRespEntry, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RespEntry message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RespEntry
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.RespEntry;

        /**
         * Decodes a RespEntry message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RespEntry
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.RespEntry;

        /**
         * Verifies a RespEntry message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RespEntry message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RespEntry
         */
        public static fromObject(object: { [k: string]: any }): pb.RespEntry;

        /**
         * Creates a plain object from a RespEntry message. Also converts values to other types if specified.
         * @param message RespEntry
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.RespEntry, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RespEntry to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ReqLogin. */
    interface IReqLogin {

        /** ReqLogin Account */
        Account?: (string|null);

        /** ReqLogin Password */
        Password?: (string|null);
    }

    /** Represents a ReqLogin. */
    class ReqLogin implements IReqLogin {

        /**
         * Constructs a new ReqLogin.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IReqLogin);

        /** ReqLogin Account. */
        public Account: string;

        /** ReqLogin Password. */
        public Password: string;

        /**
         * Creates a new ReqLogin instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReqLogin instance
         */
        public static create(properties?: pb.IReqLogin): pb.ReqLogin;

        /**
         * Encodes the specified ReqLogin message. Does not implicitly {@link pb.ReqLogin.verify|verify} messages.
         * @param message ReqLogin message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IReqLogin, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ReqLogin message, length delimited. Does not implicitly {@link pb.ReqLogin.verify|verify} messages.
         * @param message ReqLogin message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IReqLogin, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ReqLogin message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReqLogin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.ReqLogin;

        /**
         * Decodes a ReqLogin message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReqLogin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.ReqLogin;

        /**
         * Verifies a ReqLogin message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ReqLogin message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ReqLogin
         */
        public static fromObject(object: { [k: string]: any }): pb.ReqLogin;

        /**
         * Creates a plain object from a ReqLogin message. Also converts values to other types if specified.
         * @param message ReqLogin
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.ReqLogin, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ReqLogin to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RespLogin. */
    interface IRespLogin {

        /** RespLogin ErrCode */
        ErrCode?: (pb.ErrorCode|null);

        /** RespLogin Token */
        Token?: (string|null);
    }

    /** Represents a RespLogin. */
    class RespLogin implements IRespLogin {

        /**
         * Constructs a new RespLogin.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IRespLogin);

        /** RespLogin ErrCode. */
        public ErrCode: pb.ErrorCode;

        /** RespLogin Token. */
        public Token: string;

        /**
         * Creates a new RespLogin instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RespLogin instance
         */
        public static create(properties?: pb.IRespLogin): pb.RespLogin;

        /**
         * Encodes the specified RespLogin message. Does not implicitly {@link pb.RespLogin.verify|verify} messages.
         * @param message RespLogin message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IRespLogin, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RespLogin message, length delimited. Does not implicitly {@link pb.RespLogin.verify|verify} messages.
         * @param message RespLogin message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IRespLogin, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RespLogin message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RespLogin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.RespLogin;

        /**
         * Decodes a RespLogin message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RespLogin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.RespLogin;

        /**
         * Verifies a RespLogin message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RespLogin message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RespLogin
         */
        public static fromObject(object: { [k: string]: any }): pb.RespLogin;

        /**
         * Creates a plain object from a RespLogin message. Also converts values to other types if specified.
         * @param message RespLogin
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.RespLogin, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RespLogin to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ReqRegister. */
    interface IReqRegister {

        /** ReqRegister Account */
        Account?: (string|null);

        /** ReqRegister Password */
        Password?: (string|null);
    }

    /** Represents a ReqRegister. */
    class ReqRegister implements IReqRegister {

        /**
         * Constructs a new ReqRegister.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IReqRegister);

        /** ReqRegister Account. */
        public Account: string;

        /** ReqRegister Password. */
        public Password: string;

        /**
         * Creates a new ReqRegister instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReqRegister instance
         */
        public static create(properties?: pb.IReqRegister): pb.ReqRegister;

        /**
         * Encodes the specified ReqRegister message. Does not implicitly {@link pb.ReqRegister.verify|verify} messages.
         * @param message ReqRegister message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IReqRegister, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ReqRegister message, length delimited. Does not implicitly {@link pb.ReqRegister.verify|verify} messages.
         * @param message ReqRegister message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IReqRegister, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ReqRegister message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReqRegister
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.ReqRegister;

        /**
         * Decodes a ReqRegister message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReqRegister
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.ReqRegister;

        /**
         * Verifies a ReqRegister message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ReqRegister message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ReqRegister
         */
        public static fromObject(object: { [k: string]: any }): pb.ReqRegister;

        /**
         * Creates a plain object from a ReqRegister message. Also converts values to other types if specified.
         * @param message ReqRegister
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.ReqRegister, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ReqRegister to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RespRegister. */
    interface IRespRegister {

        /** RespRegister ErrCode */
        ErrCode?: (pb.ErrorCode|null);
    }

    /** Represents a RespRegister. */
    class RespRegister implements IRespRegister {

        /**
         * Constructs a new RespRegister.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IRespRegister);

        /** RespRegister ErrCode. */
        public ErrCode: pb.ErrorCode;

        /**
         * Creates a new RespRegister instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RespRegister instance
         */
        public static create(properties?: pb.IRespRegister): pb.RespRegister;

        /**
         * Encodes the specified RespRegister message. Does not implicitly {@link pb.RespRegister.verify|verify} messages.
         * @param message RespRegister message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IRespRegister, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RespRegister message, length delimited. Does not implicitly {@link pb.RespRegister.verify|verify} messages.
         * @param message RespRegister message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IRespRegister, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RespRegister message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RespRegister
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.RespRegister;

        /**
         * Decodes a RespRegister message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RespRegister
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.RespRegister;

        /**
         * Verifies a RespRegister message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RespRegister message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RespRegister
         */
        public static fromObject(object: { [k: string]: any }): pb.RespRegister;

        /**
         * Creates a plain object from a RespRegister message. Also converts values to other types if specified.
         * @param message RespRegister
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.RespRegister, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RespRegister to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** MessageCommand enum. */
    enum MessageCommand {
        Unknown = 0,
        CallLinkAuth = 1,
        CallHeartBeat = 2,
        CallGetUserInfo = 3,
        CallCreateRoom = 4,
        CallJoinRoom = 5
    }

    /** Properties of a ReqPackage. */
    interface IReqPackage {

        /** ReqPackage Cmd */
        Cmd?: (pb.MessageCommand|null);

        /** ReqPackage Token */
        Token?: (string|null);

        /** ReqPackage Msg */
        Msg?: (Uint8Array|null);
    }

    /** Represents a ReqPackage. */
    class ReqPackage implements IReqPackage {

        /**
         * Constructs a new ReqPackage.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IReqPackage);

        /** ReqPackage Cmd. */
        public Cmd: pb.MessageCommand;

        /** ReqPackage Token. */
        public Token: string;

        /** ReqPackage Msg. */
        public Msg: Uint8Array;

        /**
         * Creates a new ReqPackage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReqPackage instance
         */
        public static create(properties?: pb.IReqPackage): pb.ReqPackage;

        /**
         * Encodes the specified ReqPackage message. Does not implicitly {@link pb.ReqPackage.verify|verify} messages.
         * @param message ReqPackage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IReqPackage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ReqPackage message, length delimited. Does not implicitly {@link pb.ReqPackage.verify|verify} messages.
         * @param message ReqPackage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IReqPackage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ReqPackage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReqPackage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.ReqPackage;

        /**
         * Decodes a ReqPackage message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReqPackage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.ReqPackage;

        /**
         * Verifies a ReqPackage message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ReqPackage message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ReqPackage
         */
        public static fromObject(object: { [k: string]: any }): pb.ReqPackage;

        /**
         * Creates a plain object from a ReqPackage message. Also converts values to other types if specified.
         * @param message ReqPackage
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.ReqPackage, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ReqPackage to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RespPackage. */
    interface IRespPackage {

        /** RespPackage Cmd */
        Cmd?: (pb.MessageCommand|null);

        /** RespPackage ErrCode */
        ErrCode?: (pb.ErrorCode|null);

        /** RespPackage Msg */
        Msg?: (Uint8Array|null);
    }

    /** Represents a RespPackage. */
    class RespPackage implements IRespPackage {

        /**
         * Constructs a new RespPackage.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IRespPackage);

        /** RespPackage Cmd. */
        public Cmd: pb.MessageCommand;

        /** RespPackage ErrCode. */
        public ErrCode: pb.ErrorCode;

        /** RespPackage Msg. */
        public Msg: Uint8Array;

        /**
         * Creates a new RespPackage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RespPackage instance
         */
        public static create(properties?: pb.IRespPackage): pb.RespPackage;

        /**
         * Encodes the specified RespPackage message. Does not implicitly {@link pb.RespPackage.verify|verify} messages.
         * @param message RespPackage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IRespPackage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RespPackage message, length delimited. Does not implicitly {@link pb.RespPackage.verify|verify} messages.
         * @param message RespPackage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IRespPackage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RespPackage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RespPackage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.RespPackage;

        /**
         * Decodes a RespPackage message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RespPackage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.RespPackage;

        /**
         * Verifies a RespPackage message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RespPackage message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RespPackage
         */
        public static fromObject(object: { [k: string]: any }): pb.RespPackage;

        /**
         * Creates a plain object from a RespPackage message. Also converts values to other types if specified.
         * @param message RespPackage
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.RespPackage, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RespPackage to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a UserBaseInfo. */
    interface IUserBaseInfo {

        /** UserBaseInfo NickName */
        NickName?: (string|null);

        /** UserBaseInfo Icon */
        Icon?: (string|null);

        /** UserBaseInfo Sex */
        Sex?: (pb.EnumSex|null);

        /** UserBaseInfo Age */
        Age?: (number|null);

        /** UserBaseInfo Vip */
        Vip?: (number|null);

        /** UserBaseInfo Lv */
        Lv?: (number|null);
    }

    /** Represents a UserBaseInfo. */
    class UserBaseInfo implements IUserBaseInfo {

        /**
         * Constructs a new UserBaseInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IUserBaseInfo);

        /** UserBaseInfo NickName. */
        public NickName: string;

        /** UserBaseInfo Icon. */
        public Icon: string;

        /** UserBaseInfo Sex. */
        public Sex: pb.EnumSex;

        /** UserBaseInfo Age. */
        public Age: number;

        /** UserBaseInfo Vip. */
        public Vip: number;

        /** UserBaseInfo Lv. */
        public Lv: number;

        /**
         * Creates a new UserBaseInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UserBaseInfo instance
         */
        public static create(properties?: pb.IUserBaseInfo): pb.UserBaseInfo;

        /**
         * Encodes the specified UserBaseInfo message. Does not implicitly {@link pb.UserBaseInfo.verify|verify} messages.
         * @param message UserBaseInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IUserBaseInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UserBaseInfo message, length delimited. Does not implicitly {@link pb.UserBaseInfo.verify|verify} messages.
         * @param message UserBaseInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IUserBaseInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a UserBaseInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UserBaseInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.UserBaseInfo;

        /**
         * Decodes a UserBaseInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UserBaseInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.UserBaseInfo;

        /**
         * Verifies a UserBaseInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a UserBaseInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UserBaseInfo
         */
        public static fromObject(object: { [k: string]: any }): pb.UserBaseInfo;

        /**
         * Creates a plain object from a UserBaseInfo message. Also converts values to other types if specified.
         * @param message UserBaseInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.UserBaseInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UserBaseInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a UserMoneyInfo. */
    interface IUserMoneyInfo {

        /** UserMoneyInfo Gold */
        Gold?: (number|null);

        /** UserMoneyInfo Diamond */
        Diamond?: (number|null);
    }

    /** Represents a UserMoneyInfo. */
    class UserMoneyInfo implements IUserMoneyInfo {

        /**
         * Constructs a new UserMoneyInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IUserMoneyInfo);

        /** UserMoneyInfo Gold. */
        public Gold: number;

        /** UserMoneyInfo Diamond. */
        public Diamond: number;

        /**
         * Creates a new UserMoneyInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UserMoneyInfo instance
         */
        public static create(properties?: pb.IUserMoneyInfo): pb.UserMoneyInfo;

        /**
         * Encodes the specified UserMoneyInfo message. Does not implicitly {@link pb.UserMoneyInfo.verify|verify} messages.
         * @param message UserMoneyInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IUserMoneyInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UserMoneyInfo message, length delimited. Does not implicitly {@link pb.UserMoneyInfo.verify|verify} messages.
         * @param message UserMoneyInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IUserMoneyInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a UserMoneyInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UserMoneyInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.UserMoneyInfo;

        /**
         * Decodes a UserMoneyInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UserMoneyInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.UserMoneyInfo;

        /**
         * Verifies a UserMoneyInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a UserMoneyInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UserMoneyInfo
         */
        public static fromObject(object: { [k: string]: any }): pb.UserMoneyInfo;

        /**
         * Creates a plain object from a UserMoneyInfo message. Also converts values to other types if specified.
         * @param message UserMoneyInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.UserMoneyInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UserMoneyInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ReqUserInfo. */
    interface IReqUserInfo {
    }

    /** Represents a ReqUserInfo. */
    class ReqUserInfo implements IReqUserInfo {

        /**
         * Constructs a new ReqUserInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IReqUserInfo);

        /**
         * Creates a new ReqUserInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReqUserInfo instance
         */
        public static create(properties?: pb.IReqUserInfo): pb.ReqUserInfo;

        /**
         * Encodes the specified ReqUserInfo message. Does not implicitly {@link pb.ReqUserInfo.verify|verify} messages.
         * @param message ReqUserInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IReqUserInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ReqUserInfo message, length delimited. Does not implicitly {@link pb.ReqUserInfo.verify|verify} messages.
         * @param message ReqUserInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IReqUserInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ReqUserInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReqUserInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.ReqUserInfo;

        /**
         * Decodes a ReqUserInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReqUserInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.ReqUserInfo;

        /**
         * Verifies a ReqUserInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ReqUserInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ReqUserInfo
         */
        public static fromObject(object: { [k: string]: any }): pb.ReqUserInfo;

        /**
         * Creates a plain object from a ReqUserInfo message. Also converts values to other types if specified.
         * @param message ReqUserInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.ReqUserInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ReqUserInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RespUserInfo. */
    interface IRespUserInfo {

        /** RespUserInfo BaseInfo */
        BaseInfo?: (pb.IUserBaseInfo|null);

        /** RespUserInfo MoneyInfo */
        MoneyInfo?: (pb.IUserMoneyInfo|null);
    }

    /** Represents a RespUserInfo. */
    class RespUserInfo implements IRespUserInfo {

        /**
         * Constructs a new RespUserInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IRespUserInfo);

        /** RespUserInfo BaseInfo. */
        public BaseInfo?: (pb.IUserBaseInfo|null);

        /** RespUserInfo MoneyInfo. */
        public MoneyInfo?: (pb.IUserMoneyInfo|null);

        /**
         * Creates a new RespUserInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RespUserInfo instance
         */
        public static create(properties?: pb.IRespUserInfo): pb.RespUserInfo;

        /**
         * Encodes the specified RespUserInfo message. Does not implicitly {@link pb.RespUserInfo.verify|verify} messages.
         * @param message RespUserInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IRespUserInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RespUserInfo message, length delimited. Does not implicitly {@link pb.RespUserInfo.verify|verify} messages.
         * @param message RespUserInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IRespUserInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RespUserInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RespUserInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.RespUserInfo;

        /**
         * Decodes a RespUserInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RespUserInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.RespUserInfo;

        /**
         * Verifies a RespUserInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RespUserInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RespUserInfo
         */
        public static fromObject(object: { [k: string]: any }): pb.RespUserInfo;

        /**
         * Creates a plain object from a RespUserInfo message. Also converts values to other types if specified.
         * @param message RespUserInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.RespUserInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RespUserInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ReqCreateRoom. */
    interface IReqCreateRoom {
    }

    /** Represents a ReqCreateRoom. */
    class ReqCreateRoom implements IReqCreateRoom {

        /**
         * Constructs a new ReqCreateRoom.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IReqCreateRoom);

        /**
         * Creates a new ReqCreateRoom instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReqCreateRoom instance
         */
        public static create(properties?: pb.IReqCreateRoom): pb.ReqCreateRoom;

        /**
         * Encodes the specified ReqCreateRoom message. Does not implicitly {@link pb.ReqCreateRoom.verify|verify} messages.
         * @param message ReqCreateRoom message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IReqCreateRoom, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ReqCreateRoom message, length delimited. Does not implicitly {@link pb.ReqCreateRoom.verify|verify} messages.
         * @param message ReqCreateRoom message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IReqCreateRoom, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ReqCreateRoom message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReqCreateRoom
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.ReqCreateRoom;

        /**
         * Decodes a ReqCreateRoom message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReqCreateRoom
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.ReqCreateRoom;

        /**
         * Verifies a ReqCreateRoom message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ReqCreateRoom message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ReqCreateRoom
         */
        public static fromObject(object: { [k: string]: any }): pb.ReqCreateRoom;

        /**
         * Creates a plain object from a ReqCreateRoom message. Also converts values to other types if specified.
         * @param message ReqCreateRoom
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.ReqCreateRoom, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ReqCreateRoom to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RespCreateRoom. */
    interface IRespCreateRoom {

        /** RespCreateRoom RoomId */
        RoomId?: (number|null);

        /** RespCreateRoom RoomName */
        RoomName?: (string|null);

        /** RespCreateRoom MapName */
        MapName?: (string|null);

        /** RespCreateRoom MaxNum */
        MaxNum?: (number|null);

        /** RespCreateRoom CurNum */
        CurNum?: (number|null);
    }

    /** Represents a RespCreateRoom. */
    class RespCreateRoom implements IRespCreateRoom {

        /**
         * Constructs a new RespCreateRoom.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IRespCreateRoom);

        /** RespCreateRoom RoomId. */
        public RoomId: number;

        /** RespCreateRoom RoomName. */
        public RoomName: string;

        /** RespCreateRoom MapName. */
        public MapName: string;

        /** RespCreateRoom MaxNum. */
        public MaxNum: number;

        /** RespCreateRoom CurNum. */
        public CurNum: number;

        /**
         * Creates a new RespCreateRoom instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RespCreateRoom instance
         */
        public static create(properties?: pb.IRespCreateRoom): pb.RespCreateRoom;

        /**
         * Encodes the specified RespCreateRoom message. Does not implicitly {@link pb.RespCreateRoom.verify|verify} messages.
         * @param message RespCreateRoom message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IRespCreateRoom, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RespCreateRoom message, length delimited. Does not implicitly {@link pb.RespCreateRoom.verify|verify} messages.
         * @param message RespCreateRoom message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IRespCreateRoom, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RespCreateRoom message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RespCreateRoom
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.RespCreateRoom;

        /**
         * Decodes a RespCreateRoom message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RespCreateRoom
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.RespCreateRoom;

        /**
         * Verifies a RespCreateRoom message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RespCreateRoom message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RespCreateRoom
         */
        public static fromObject(object: { [k: string]: any }): pb.RespCreateRoom;

        /**
         * Creates a plain object from a RespCreateRoom message. Also converts values to other types if specified.
         * @param message RespCreateRoom
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.RespCreateRoom, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RespCreateRoom to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ReqJoinRoom. */
    interface IReqJoinRoom {

        /** ReqJoinRoom RoomId */
        RoomId?: (number|null);
    }

    /** Represents a ReqJoinRoom. */
    class ReqJoinRoom implements IReqJoinRoom {

        /**
         * Constructs a new ReqJoinRoom.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IReqJoinRoom);

        /** ReqJoinRoom RoomId. */
        public RoomId: number;

        /**
         * Creates a new ReqJoinRoom instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReqJoinRoom instance
         */
        public static create(properties?: pb.IReqJoinRoom): pb.ReqJoinRoom;

        /**
         * Encodes the specified ReqJoinRoom message. Does not implicitly {@link pb.ReqJoinRoom.verify|verify} messages.
         * @param message ReqJoinRoom message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IReqJoinRoom, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ReqJoinRoom message, length delimited. Does not implicitly {@link pb.ReqJoinRoom.verify|verify} messages.
         * @param message ReqJoinRoom message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IReqJoinRoom, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ReqJoinRoom message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReqJoinRoom
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.ReqJoinRoom;

        /**
         * Decodes a ReqJoinRoom message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReqJoinRoom
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.ReqJoinRoom;

        /**
         * Verifies a ReqJoinRoom message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ReqJoinRoom message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ReqJoinRoom
         */
        public static fromObject(object: { [k: string]: any }): pb.ReqJoinRoom;

        /**
         * Creates a plain object from a ReqJoinRoom message. Also converts values to other types if specified.
         * @param message ReqJoinRoom
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.ReqJoinRoom, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ReqJoinRoom to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RespJoinRoom. */
    interface IRespJoinRoom {
    }

    /** Represents a RespJoinRoom. */
    class RespJoinRoom implements IRespJoinRoom {

        /**
         * Constructs a new RespJoinRoom.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IRespJoinRoom);

        /**
         * Creates a new RespJoinRoom instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RespJoinRoom instance
         */
        public static create(properties?: pb.IRespJoinRoom): pb.RespJoinRoom;

        /**
         * Encodes the specified RespJoinRoom message. Does not implicitly {@link pb.RespJoinRoom.verify|verify} messages.
         * @param message RespJoinRoom message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IRespJoinRoom, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RespJoinRoom message, length delimited. Does not implicitly {@link pb.RespJoinRoom.verify|verify} messages.
         * @param message RespJoinRoom message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IRespJoinRoom, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RespJoinRoom message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RespJoinRoom
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.RespJoinRoom;

        /**
         * Decodes a RespJoinRoom message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RespJoinRoom
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.RespJoinRoom;

        /**
         * Verifies a RespJoinRoom message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RespJoinRoom message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RespJoinRoom
         */
        public static fromObject(object: { [k: string]: any }): pb.RespJoinRoom;

        /**
         * Creates a plain object from a RespJoinRoom message. Also converts values to other types if specified.
         * @param message RespJoinRoom
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.RespJoinRoom, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RespJoinRoom to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

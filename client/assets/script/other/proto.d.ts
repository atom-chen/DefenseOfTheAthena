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
        HelloError = 2,
        LoginAccountOrPasswordError = 3,
        RegisterAccountExit = 4
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
        LongLinkAuth = 1,
        HeartBeat = 2,
        GetUserInfo = 3
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
}

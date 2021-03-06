// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: http.proto

package pb

import (
	fmt "fmt"
	proto "github.com/golang/protobuf/proto"
	io "io"
	math "math"
	math_bits "math/bits"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.ProtoPackageIsVersion3 // please upgrade the proto package

//入口消息req，用于服务端与客户端握手
type ReqEntry struct {
	Secret               string   `protobuf:"bytes,1,opt,name=Secret,proto3" json:"Secret,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *ReqEntry) Reset()         { *m = ReqEntry{} }
func (m *ReqEntry) String() string { return proto.CompactTextString(m) }
func (*ReqEntry) ProtoMessage()    {}
func (*ReqEntry) Descriptor() ([]byte, []int) {
	return fileDescriptor_11b04836674e6f94, []int{0}
}
func (m *ReqEntry) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *ReqEntry) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_ReqEntry.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *ReqEntry) XXX_Merge(src proto.Message) {
	xxx_messageInfo_ReqEntry.Merge(m, src)
}
func (m *ReqEntry) XXX_Size() int {
	return m.Size()
}
func (m *ReqEntry) XXX_DiscardUnknown() {
	xxx_messageInfo_ReqEntry.DiscardUnknown(m)
}

var xxx_messageInfo_ReqEntry proto.InternalMessageInfo

func (m *ReqEntry) GetSecret() string {
	if m != nil {
		return m.Secret
	}
	return ""
}

//入口消息resp，服务端将登录、注册、长连接等地址下发
type RespEntry struct {
	ErrCode              ErrorCode `protobuf:"varint,1,opt,name=ErrCode,proto3,enum=pb.ErrorCode" json:"ErrCode,omitempty"`
	LoginUrl             string    `protobuf:"bytes,2,opt,name=LoginUrl,proto3" json:"LoginUrl,omitempty"`
	RegisterUrl          string    `protobuf:"bytes,3,opt,name=RegisterUrl,proto3" json:"RegisterUrl,omitempty"`
	WebSocketUrl         string    `protobuf:"bytes,4,opt,name=WebSocketUrl,proto3" json:"WebSocketUrl,omitempty"`
	XXX_NoUnkeyedLiteral struct{}  `json:"-"`
	XXX_unrecognized     []byte    `json:"-"`
	XXX_sizecache        int32     `json:"-"`
}

func (m *RespEntry) Reset()         { *m = RespEntry{} }
func (m *RespEntry) String() string { return proto.CompactTextString(m) }
func (*RespEntry) ProtoMessage()    {}
func (*RespEntry) Descriptor() ([]byte, []int) {
	return fileDescriptor_11b04836674e6f94, []int{1}
}
func (m *RespEntry) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *RespEntry) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_RespEntry.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *RespEntry) XXX_Merge(src proto.Message) {
	xxx_messageInfo_RespEntry.Merge(m, src)
}
func (m *RespEntry) XXX_Size() int {
	return m.Size()
}
func (m *RespEntry) XXX_DiscardUnknown() {
	xxx_messageInfo_RespEntry.DiscardUnknown(m)
}

var xxx_messageInfo_RespEntry proto.InternalMessageInfo

func (m *RespEntry) GetErrCode() ErrorCode {
	if m != nil {
		return m.ErrCode
	}
	return ErrorCode_Uknow
}

func (m *RespEntry) GetLoginUrl() string {
	if m != nil {
		return m.LoginUrl
	}
	return ""
}

func (m *RespEntry) GetRegisterUrl() string {
	if m != nil {
		return m.RegisterUrl
	}
	return ""
}

func (m *RespEntry) GetWebSocketUrl() string {
	if m != nil {
		return m.WebSocketUrl
	}
	return ""
}

//登录req
type ReqLogin struct {
	Account              string   `protobuf:"bytes,1,opt,name=Account,proto3" json:"Account,omitempty"`
	Password             string   `protobuf:"bytes,2,opt,name=Password,proto3" json:"Password,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *ReqLogin) Reset()         { *m = ReqLogin{} }
func (m *ReqLogin) String() string { return proto.CompactTextString(m) }
func (*ReqLogin) ProtoMessage()    {}
func (*ReqLogin) Descriptor() ([]byte, []int) {
	return fileDescriptor_11b04836674e6f94, []int{2}
}
func (m *ReqLogin) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *ReqLogin) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_ReqLogin.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *ReqLogin) XXX_Merge(src proto.Message) {
	xxx_messageInfo_ReqLogin.Merge(m, src)
}
func (m *ReqLogin) XXX_Size() int {
	return m.Size()
}
func (m *ReqLogin) XXX_DiscardUnknown() {
	xxx_messageInfo_ReqLogin.DiscardUnknown(m)
}

var xxx_messageInfo_ReqLogin proto.InternalMessageInfo

func (m *ReqLogin) GetAccount() string {
	if m != nil {
		return m.Account
	}
	return ""
}

func (m *ReqLogin) GetPassword() string {
	if m != nil {
		return m.Password
	}
	return ""
}

//登录resp
type RespLogin struct {
	ErrCode              ErrorCode `protobuf:"varint,1,opt,name=ErrCode,proto3,enum=pb.ErrorCode" json:"ErrCode,omitempty"`
	Token                string    `protobuf:"bytes,2,opt,name=Token,proto3" json:"Token,omitempty"`
	XXX_NoUnkeyedLiteral struct{}  `json:"-"`
	XXX_unrecognized     []byte    `json:"-"`
	XXX_sizecache        int32     `json:"-"`
}

func (m *RespLogin) Reset()         { *m = RespLogin{} }
func (m *RespLogin) String() string { return proto.CompactTextString(m) }
func (*RespLogin) ProtoMessage()    {}
func (*RespLogin) Descriptor() ([]byte, []int) {
	return fileDescriptor_11b04836674e6f94, []int{3}
}
func (m *RespLogin) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *RespLogin) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_RespLogin.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *RespLogin) XXX_Merge(src proto.Message) {
	xxx_messageInfo_RespLogin.Merge(m, src)
}
func (m *RespLogin) XXX_Size() int {
	return m.Size()
}
func (m *RespLogin) XXX_DiscardUnknown() {
	xxx_messageInfo_RespLogin.DiscardUnknown(m)
}

var xxx_messageInfo_RespLogin proto.InternalMessageInfo

func (m *RespLogin) GetErrCode() ErrorCode {
	if m != nil {
		return m.ErrCode
	}
	return ErrorCode_Uknow
}

func (m *RespLogin) GetToken() string {
	if m != nil {
		return m.Token
	}
	return ""
}

//注册req
type ReqRegister struct {
	Account              string   `protobuf:"bytes,1,opt,name=Account,proto3" json:"Account,omitempty"`
	Password             string   `protobuf:"bytes,2,opt,name=Password,proto3" json:"Password,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *ReqRegister) Reset()         { *m = ReqRegister{} }
func (m *ReqRegister) String() string { return proto.CompactTextString(m) }
func (*ReqRegister) ProtoMessage()    {}
func (*ReqRegister) Descriptor() ([]byte, []int) {
	return fileDescriptor_11b04836674e6f94, []int{4}
}
func (m *ReqRegister) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *ReqRegister) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_ReqRegister.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *ReqRegister) XXX_Merge(src proto.Message) {
	xxx_messageInfo_ReqRegister.Merge(m, src)
}
func (m *ReqRegister) XXX_Size() int {
	return m.Size()
}
func (m *ReqRegister) XXX_DiscardUnknown() {
	xxx_messageInfo_ReqRegister.DiscardUnknown(m)
}

var xxx_messageInfo_ReqRegister proto.InternalMessageInfo

func (m *ReqRegister) GetAccount() string {
	if m != nil {
		return m.Account
	}
	return ""
}

func (m *ReqRegister) GetPassword() string {
	if m != nil {
		return m.Password
	}
	return ""
}

//注册resp
type RespRegister struct {
	ErrCode              ErrorCode `protobuf:"varint,1,opt,name=ErrCode,proto3,enum=pb.ErrorCode" json:"ErrCode,omitempty"`
	XXX_NoUnkeyedLiteral struct{}  `json:"-"`
	XXX_unrecognized     []byte    `json:"-"`
	XXX_sizecache        int32     `json:"-"`
}

func (m *RespRegister) Reset()         { *m = RespRegister{} }
func (m *RespRegister) String() string { return proto.CompactTextString(m) }
func (*RespRegister) ProtoMessage()    {}
func (*RespRegister) Descriptor() ([]byte, []int) {
	return fileDescriptor_11b04836674e6f94, []int{5}
}
func (m *RespRegister) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *RespRegister) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_RespRegister.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *RespRegister) XXX_Merge(src proto.Message) {
	xxx_messageInfo_RespRegister.Merge(m, src)
}
func (m *RespRegister) XXX_Size() int {
	return m.Size()
}
func (m *RespRegister) XXX_DiscardUnknown() {
	xxx_messageInfo_RespRegister.DiscardUnknown(m)
}

var xxx_messageInfo_RespRegister proto.InternalMessageInfo

func (m *RespRegister) GetErrCode() ErrorCode {
	if m != nil {
		return m.ErrCode
	}
	return ErrorCode_Uknow
}

func init() {
	proto.RegisterType((*ReqEntry)(nil), "pb.ReqEntry")
	proto.RegisterType((*RespEntry)(nil), "pb.RespEntry")
	proto.RegisterType((*ReqLogin)(nil), "pb.ReqLogin")
	proto.RegisterType((*RespLogin)(nil), "pb.RespLogin")
	proto.RegisterType((*ReqRegister)(nil), "pb.ReqRegister")
	proto.RegisterType((*RespRegister)(nil), "pb.RespRegister")
}

func init() { proto.RegisterFile("http.proto", fileDescriptor_11b04836674e6f94) }

var fileDescriptor_11b04836674e6f94 = []byte{
	// 274 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xe2, 0xe2, 0xca, 0x28, 0x29, 0x29,
	0xd0, 0x2b, 0x28, 0xca, 0x2f, 0xc9, 0x17, 0x62, 0x2a, 0x48, 0x92, 0xe2, 0x4f, 0x2d, 0x2a, 0xca,
	0x2f, 0x72, 0xce, 0x4f, 0x49, 0x85, 0x08, 0x2a, 0x29, 0x71, 0x71, 0x04, 0xa5, 0x16, 0xba, 0xe6,
	0x95, 0x14, 0x55, 0x0a, 0x89, 0x71, 0xb1, 0x05, 0xa7, 0x26, 0x17, 0xa5, 0x96, 0x48, 0x30, 0x2a,
	0x30, 0x6a, 0x70, 0x06, 0x41, 0x79, 0x4a, 0xd3, 0x18, 0xb9, 0x38, 0x83, 0x52, 0x8b, 0x0b, 0x20,
	0xaa, 0xd4, 0xb9, 0xd8, 0x5d, 0x8b, 0xc0, 0x46, 0x80, 0x95, 0xf1, 0x19, 0xf1, 0xea, 0x15, 0x24,
	0xe9, 0xb9, 0xc2, 0xcc, 0x0d, 0x82, 0xc9, 0x0a, 0x49, 0x71, 0x71, 0xf8, 0xe4, 0xa7, 0x67, 0xe6,
	0x85, 0x16, 0xe5, 0x48, 0x30, 0x81, 0x0d, 0x84, 0xf3, 0x85, 0x14, 0xb8, 0xb8, 0x83, 0x52, 0xd3,
	0x33, 0x8b, 0x4b, 0x52, 0x8b, 0x40, 0xd2, 0xcc, 0x60, 0x69, 0x64, 0x21, 0x21, 0x25, 0x2e, 0x9e,
	0xf0, 0xd4, 0xa4, 0xe0, 0xfc, 0xe4, 0xec, 0xd4, 0x12, 0x90, 0x12, 0x16, 0xb0, 0x12, 0x14, 0x31,
	0x25, 0x07, 0xb0, 0xe3, 0xc1, 0x86, 0x0a, 0x49, 0x70, 0xb1, 0x3b, 0x26, 0x27, 0xe7, 0x97, 0xe6,
	0xc1, 0x5c, 0x0f, 0xe3, 0x82, 0xdc, 0x11, 0x90, 0x58, 0x5c, 0x5c, 0x9e, 0x5f, 0x94, 0x02, 0x73,
	0x07, 0x8c, 0xaf, 0xe4, 0x05, 0xf1, 0x19, 0xc4, 0x08, 0xa2, 0x7d, 0x26, 0xc2, 0xc5, 0x1a, 0x92,
	0x9f, 0x9d, 0x9a, 0x07, 0x35, 0x0e, 0xc2, 0x51, 0x72, 0x06, 0xf9, 0xa9, 0x10, 0xe6, 0x07, 0x32,
	0x1d, 0x64, 0xce, 0xc5, 0x03, 0x72, 0x10, 0xdc, 0x14, 0x62, 0xdd, 0xe4, 0x24, 0x70, 0xe2, 0x91,
	0x1c, 0xe3, 0x85, 0x47, 0x72, 0x8c, 0x0f, 0x1e, 0xc9, 0x31, 0xce, 0x78, 0x2c, 0xc7, 0x90, 0xc4,
	0x06, 0x8e, 0x61, 0x63, 0x40, 0x00, 0x00, 0x00, 0xff, 0xff, 0xdd, 0x6a, 0x8f, 0xb8, 0x04, 0x02,
	0x00, 0x00,
}

func (m *ReqEntry) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *ReqEntry) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *ReqEntry) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if m.XXX_unrecognized != nil {
		i -= len(m.XXX_unrecognized)
		copy(dAtA[i:], m.XXX_unrecognized)
	}
	if len(m.Secret) > 0 {
		i -= len(m.Secret)
		copy(dAtA[i:], m.Secret)
		i = encodeVarintHttp(dAtA, i, uint64(len(m.Secret)))
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}

func (m *RespEntry) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *RespEntry) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *RespEntry) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if m.XXX_unrecognized != nil {
		i -= len(m.XXX_unrecognized)
		copy(dAtA[i:], m.XXX_unrecognized)
	}
	if len(m.WebSocketUrl) > 0 {
		i -= len(m.WebSocketUrl)
		copy(dAtA[i:], m.WebSocketUrl)
		i = encodeVarintHttp(dAtA, i, uint64(len(m.WebSocketUrl)))
		i--
		dAtA[i] = 0x22
	}
	if len(m.RegisterUrl) > 0 {
		i -= len(m.RegisterUrl)
		copy(dAtA[i:], m.RegisterUrl)
		i = encodeVarintHttp(dAtA, i, uint64(len(m.RegisterUrl)))
		i--
		dAtA[i] = 0x1a
	}
	if len(m.LoginUrl) > 0 {
		i -= len(m.LoginUrl)
		copy(dAtA[i:], m.LoginUrl)
		i = encodeVarintHttp(dAtA, i, uint64(len(m.LoginUrl)))
		i--
		dAtA[i] = 0x12
	}
	if m.ErrCode != 0 {
		i = encodeVarintHttp(dAtA, i, uint64(m.ErrCode))
		i--
		dAtA[i] = 0x8
	}
	return len(dAtA) - i, nil
}

func (m *ReqLogin) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *ReqLogin) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *ReqLogin) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if m.XXX_unrecognized != nil {
		i -= len(m.XXX_unrecognized)
		copy(dAtA[i:], m.XXX_unrecognized)
	}
	if len(m.Password) > 0 {
		i -= len(m.Password)
		copy(dAtA[i:], m.Password)
		i = encodeVarintHttp(dAtA, i, uint64(len(m.Password)))
		i--
		dAtA[i] = 0x12
	}
	if len(m.Account) > 0 {
		i -= len(m.Account)
		copy(dAtA[i:], m.Account)
		i = encodeVarintHttp(dAtA, i, uint64(len(m.Account)))
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}

func (m *RespLogin) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *RespLogin) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *RespLogin) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if m.XXX_unrecognized != nil {
		i -= len(m.XXX_unrecognized)
		copy(dAtA[i:], m.XXX_unrecognized)
	}
	if len(m.Token) > 0 {
		i -= len(m.Token)
		copy(dAtA[i:], m.Token)
		i = encodeVarintHttp(dAtA, i, uint64(len(m.Token)))
		i--
		dAtA[i] = 0x12
	}
	if m.ErrCode != 0 {
		i = encodeVarintHttp(dAtA, i, uint64(m.ErrCode))
		i--
		dAtA[i] = 0x8
	}
	return len(dAtA) - i, nil
}

func (m *ReqRegister) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *ReqRegister) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *ReqRegister) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if m.XXX_unrecognized != nil {
		i -= len(m.XXX_unrecognized)
		copy(dAtA[i:], m.XXX_unrecognized)
	}
	if len(m.Password) > 0 {
		i -= len(m.Password)
		copy(dAtA[i:], m.Password)
		i = encodeVarintHttp(dAtA, i, uint64(len(m.Password)))
		i--
		dAtA[i] = 0x12
	}
	if len(m.Account) > 0 {
		i -= len(m.Account)
		copy(dAtA[i:], m.Account)
		i = encodeVarintHttp(dAtA, i, uint64(len(m.Account)))
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}

func (m *RespRegister) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *RespRegister) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *RespRegister) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if m.XXX_unrecognized != nil {
		i -= len(m.XXX_unrecognized)
		copy(dAtA[i:], m.XXX_unrecognized)
	}
	if m.ErrCode != 0 {
		i = encodeVarintHttp(dAtA, i, uint64(m.ErrCode))
		i--
		dAtA[i] = 0x8
	}
	return len(dAtA) - i, nil
}

func encodeVarintHttp(dAtA []byte, offset int, v uint64) int {
	offset -= sovHttp(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func (m *ReqEntry) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = len(m.Secret)
	if l > 0 {
		n += 1 + l + sovHttp(uint64(l))
	}
	if m.XXX_unrecognized != nil {
		n += len(m.XXX_unrecognized)
	}
	return n
}

func (m *RespEntry) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	if m.ErrCode != 0 {
		n += 1 + sovHttp(uint64(m.ErrCode))
	}
	l = len(m.LoginUrl)
	if l > 0 {
		n += 1 + l + sovHttp(uint64(l))
	}
	l = len(m.RegisterUrl)
	if l > 0 {
		n += 1 + l + sovHttp(uint64(l))
	}
	l = len(m.WebSocketUrl)
	if l > 0 {
		n += 1 + l + sovHttp(uint64(l))
	}
	if m.XXX_unrecognized != nil {
		n += len(m.XXX_unrecognized)
	}
	return n
}

func (m *ReqLogin) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = len(m.Account)
	if l > 0 {
		n += 1 + l + sovHttp(uint64(l))
	}
	l = len(m.Password)
	if l > 0 {
		n += 1 + l + sovHttp(uint64(l))
	}
	if m.XXX_unrecognized != nil {
		n += len(m.XXX_unrecognized)
	}
	return n
}

func (m *RespLogin) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	if m.ErrCode != 0 {
		n += 1 + sovHttp(uint64(m.ErrCode))
	}
	l = len(m.Token)
	if l > 0 {
		n += 1 + l + sovHttp(uint64(l))
	}
	if m.XXX_unrecognized != nil {
		n += len(m.XXX_unrecognized)
	}
	return n
}

func (m *ReqRegister) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = len(m.Account)
	if l > 0 {
		n += 1 + l + sovHttp(uint64(l))
	}
	l = len(m.Password)
	if l > 0 {
		n += 1 + l + sovHttp(uint64(l))
	}
	if m.XXX_unrecognized != nil {
		n += len(m.XXX_unrecognized)
	}
	return n
}

func (m *RespRegister) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	if m.ErrCode != 0 {
		n += 1 + sovHttp(uint64(m.ErrCode))
	}
	if m.XXX_unrecognized != nil {
		n += len(m.XXX_unrecognized)
	}
	return n
}

func sovHttp(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozHttp(x uint64) (n int) {
	return sovHttp(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (m *ReqEntry) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowHttp
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: ReqEntry: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: ReqEntry: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Secret", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowHttp
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthHttp
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthHttp
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Secret = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipHttp(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if skippy < 0 {
				return ErrInvalidLengthHttp
			}
			if (iNdEx + skippy) < 0 {
				return ErrInvalidLengthHttp
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			m.XXX_unrecognized = append(m.XXX_unrecognized, dAtA[iNdEx:iNdEx+skippy]...)
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func (m *RespEntry) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowHttp
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: RespEntry: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: RespEntry: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field ErrCode", wireType)
			}
			m.ErrCode = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowHttp
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.ErrCode |= ErrorCode(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 2:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field LoginUrl", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowHttp
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthHttp
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthHttp
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.LoginUrl = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 3:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field RegisterUrl", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowHttp
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthHttp
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthHttp
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.RegisterUrl = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 4:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field WebSocketUrl", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowHttp
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthHttp
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthHttp
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.WebSocketUrl = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipHttp(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if skippy < 0 {
				return ErrInvalidLengthHttp
			}
			if (iNdEx + skippy) < 0 {
				return ErrInvalidLengthHttp
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			m.XXX_unrecognized = append(m.XXX_unrecognized, dAtA[iNdEx:iNdEx+skippy]...)
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func (m *ReqLogin) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowHttp
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: ReqLogin: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: ReqLogin: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Account", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowHttp
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthHttp
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthHttp
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Account = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 2:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Password", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowHttp
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthHttp
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthHttp
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Password = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipHttp(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if skippy < 0 {
				return ErrInvalidLengthHttp
			}
			if (iNdEx + skippy) < 0 {
				return ErrInvalidLengthHttp
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			m.XXX_unrecognized = append(m.XXX_unrecognized, dAtA[iNdEx:iNdEx+skippy]...)
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func (m *RespLogin) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowHttp
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: RespLogin: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: RespLogin: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field ErrCode", wireType)
			}
			m.ErrCode = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowHttp
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.ErrCode |= ErrorCode(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 2:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Token", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowHttp
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthHttp
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthHttp
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Token = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipHttp(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if skippy < 0 {
				return ErrInvalidLengthHttp
			}
			if (iNdEx + skippy) < 0 {
				return ErrInvalidLengthHttp
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			m.XXX_unrecognized = append(m.XXX_unrecognized, dAtA[iNdEx:iNdEx+skippy]...)
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func (m *ReqRegister) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowHttp
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: ReqRegister: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: ReqRegister: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Account", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowHttp
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthHttp
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthHttp
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Account = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 2:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Password", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowHttp
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthHttp
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthHttp
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Password = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipHttp(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if skippy < 0 {
				return ErrInvalidLengthHttp
			}
			if (iNdEx + skippy) < 0 {
				return ErrInvalidLengthHttp
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			m.XXX_unrecognized = append(m.XXX_unrecognized, dAtA[iNdEx:iNdEx+skippy]...)
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func (m *RespRegister) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowHttp
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: RespRegister: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: RespRegister: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field ErrCode", wireType)
			}
			m.ErrCode = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowHttp
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.ErrCode |= ErrorCode(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		default:
			iNdEx = preIndex
			skippy, err := skipHttp(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if skippy < 0 {
				return ErrInvalidLengthHttp
			}
			if (iNdEx + skippy) < 0 {
				return ErrInvalidLengthHttp
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			m.XXX_unrecognized = append(m.XXX_unrecognized, dAtA[iNdEx:iNdEx+skippy]...)
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func skipHttp(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	depth := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowHttp
			}
			if iNdEx >= l {
				return 0, io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= (uint64(b) & 0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		wireType := int(wire & 0x7)
		switch wireType {
		case 0:
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowHttp
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				iNdEx++
				if dAtA[iNdEx-1] < 0x80 {
					break
				}
			}
		case 1:
			iNdEx += 8
		case 2:
			var length int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowHttp
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				length |= (int(b) & 0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if length < 0 {
				return 0, ErrInvalidLengthHttp
			}
			iNdEx += length
		case 3:
			depth++
		case 4:
			if depth == 0 {
				return 0, ErrUnexpectedEndOfGroupHttp
			}
			depth--
		case 5:
			iNdEx += 4
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
		if iNdEx < 0 {
			return 0, ErrInvalidLengthHttp
		}
		if depth == 0 {
			return iNdEx, nil
		}
	}
	return 0, io.ErrUnexpectedEOF
}

var (
	ErrInvalidLengthHttp        = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowHttp          = fmt.Errorf("proto: integer overflow")
	ErrUnexpectedEndOfGroupHttp = fmt.Errorf("proto: unexpected end of group")
)

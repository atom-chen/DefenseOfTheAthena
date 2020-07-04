# 使用protobuf

## protoc
- 下载`protobuf`的编译器`protoc`
- 地址：`https://github.com/google/protobuf/releases`
- 把`protoc.exe`复制到`GOPATH/bin`下，`GOPATH/bin`加入环境变量

## protoc-gen-go
- `go get github.com/golang/protobuf/protoc-gen-go`

## protoc-gen-gogo
- 和protoc-gen-go生成的文件差不多，性能也几乎一样(稍微快一点点)
- `go get -u github.com/golang/protobuf/protoc-gen-gogo`

## protoc-gen-gofast
- 生成的文件更复杂，性能也更高(快5-7倍)
- `go get -u github.com/golang/protobuf/protoc-gen-gofast`
- 注：这里我选用gofast

## 安装gogoprotobuf库文件
- `go get github.com/gogo/protobuf/proto`

## 生成go文件
- 命令 `protoc -I=path1  --gofast_out=path2 *.proto`
- `-I`：由于proto中可能是多协议间互相引用的关系，所以要加上`-I`，这样生成时会引用其它协议
- `path1`:为生成时，需要引用的文件的路径
- `--gofast_out`：指定生成go文件的存放路径
- `path2`:生成go文件的存放路径
- `*.proto`：当前文件夹下所有的.proto全都生成
- 示例bat:  
    ```
    protoc -I=./  --gofast_out=./pb_go *.proto
    pause
    ```
- 示例结构
    ![在这里插入图片描述](https://img-blog.csdnimg.cn/2020070422071278.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzI3MTc2MDI3,size_16,color_FFFFFF,t_70#pic_center)
- 示例说明：结构下有5个协议，其中http.proto和websocket.proto中都引用了enum.proto、errorCode.proto、及messageCommand.proto这三个协议。上述bat文件会将这些协议全都生成到pb_go文件当中。

## Proto3中引用
- 引用其它协议，要在将协议import
- 示例![在这里插入图片描述](https://img-blog.csdnimg.cn/20200704221916322.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzI3MTc2MDI3,size_16,color_FFFFFF,t_70#pic_center)
- 图中引用的`MessageCommand`和`ErrorCode`在别的文件中，使用前如图示引用

## Proto3中的enum
- enum必需要以0开始；
- 当有意义的值为0开始时，其中传输过程中会被省略。比如`ErrorCode=0`如果表示成功，那在传输过程中，接收方可能收不到这个0值。所以建议enum值中的0值留空，有意义的值从1开始；


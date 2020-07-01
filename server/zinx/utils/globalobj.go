package utils

import (
	"server/zinx/ziface"
	"encoding/json"
	"io/ioutil"
)

/*
   存储一切有关Zinx框架的全局参数，供其他模块使用
   一些参数也可以通过 用户根据 zinx.json来配置
*/

type GlobalObj struct {
	/*
		Server
	*/
	TcpServer 	ziface.IServer  //当前Zinx的全局Server对象
	Host 		string			//当前服务器主机IP
	TcpPort 	int				//当前服务器主机监听端口号
	Name   		string			//当前服务器名称
	/*
		Zinx
	*/
	Version 	string			 //当前Zinx版本号
	MaxPacketSize uint32 //都需数据包的最大值
	MaxConn       int    //当前服务器主机允许的最大链接个数
	WorkerPoolSize uint32//业务工作Worker池的数量
	MaxWorkerTaskLen uint32 //业务工作Worker对应负责的任务队列最大任务存储数量
	MaxMsgChanLen	uint32
	/*
		config file path
	*/
	ConfFilePath string
}

/*
   定义一个全局的对象
*/
var GlobalObject *GlobalObj

//读取用户的配置文件
func (g *GlobalObj) Reload() {
	data, err := ioutil.ReadFile("conf/zinx.json")
	if err != nil {
		panic(err)
	}
	//将json数据解析到struct中
	//fmt.Printf("json :%s\n", data)
	err = json.Unmarshal(data, &GlobalObject)
	if err != nil {
		panic(err)
	}
}

func init() {
	//初始化GlobalObject变量， 设置一些默认值。
	GlobalObject = &GlobalObj{
		Name:          "ZinxServerApp",
		Version:       "V0.10",
		TcpPort:       8999,
		Host:          "0.0.0.0",
		MaxConn:       12000,
		MaxPacketSize: 4096,
		ConfFilePath:  "conf/zinx.json",
		WorkerPoolSize: 10,
		MaxWorkerTaskLen: 1024,
		MaxMsgChanLen: 1024,
	}

	//从配置文件中加载一些用户配置的参数
	//GlobalObject.Reload()
}
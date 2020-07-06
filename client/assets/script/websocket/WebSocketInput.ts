import { WebSocketController } from "./WebSocketController";
import { MessageCommand } from "./MessageCommond";

/**
 *1.有req有resp的方法叫Call，即客户端发送数据给服务器，同时服务器也响应数据给客户端
* 2.有req无resp的方法叫Input，即客户端发送数据给服务器
* 3.无req有resp的方法叫Sync，即服务器同步数据给客户端
* 4.本类为Input
 */
export class WebSocketInput {

    public static InputDia(content: string) {
        let postData = {
            content: content
        }
        WebSocketController.Input(MessageCommand.Test)
    }

}


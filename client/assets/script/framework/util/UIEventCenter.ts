
import { IsNullOrEmpty } from "./StringUtil";
import { AudioManager } from "../audio/AudioManager";


export class UIEventCenter {

    //按钮点击方法封装
    public static ButtonEvent(btn: cc.Button, callback: Function, clickSoundName: string = "S_Button", disableTime: number = 0.4) {
        btn.node.on("click", () => {
            if (!btn.interactable) {
                return;
            }
            if (!IsNullOrEmpty(clickSoundName)) {
                AudioManager.PlaySound(clickSoundName);
            }
            //如果屏蔽时间大于0，点击之后屏蔽
            if (disableTime > 0) {
                btn.interactable = false;      //禁用按钮 一定时间后再启用，防连击
                window.setTimeout(() => { if (btn) { btn.interactable = true } }, disableTime*1000)
            }
            callback()
        })
    }

    //在节点上移动方法封装
    public static TouchNodeStart(node: cc.Node, callback: (e: cc.Event.EventTouch) => void) {
        node.on(cc.Node.EventType.TOUCH_START, (e: cc.Event.EventTouch) => { callback(e) });
    }

    public static TouchNodeEnd(node: cc.Node, callback: (e: cc.Event.EventTouch) => void) {
        node.on(cc.Node.EventType.TOUCH_END, (e: cc.Event.EventTouch) => { callback(e) });
    }

    public static TouchNodeCancel(node: cc.Node, callback: (e: cc.Event.EventTouch) => void) {
        node.on(cc.Node.EventType.TOUCH_CANCEL, (e: cc.Event.EventTouch) => { callback(e) });
    }

    public static TouchNodeMove(node: cc.Node, callback: (e: cc.Event.EventTouch) => void) {
        node.on(cc.Node.EventType.TOUCH_MOVE, (e: cc.Event.EventTouch) => { callback(e) });
    }

    public static ScrollSelect(){

    }
}
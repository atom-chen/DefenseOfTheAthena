import Clog from "../../framework/clog/Clog";
import { AudioManager } from "../../framework/audio/AudioManager";
import { UIManager } from "../../framework/ui/UIManager";
import { EntryControler } from "../controller/EntryControler";




const { ccclass } = cc._decorator;
@ccclass
export class UIEntry extends cc.Component {
    public HideTime: number;
    public ShowTime: number;

    onLoad() {
        (window as any).CC_ENGINE_VERSION = cc.ENGINE_VERSION;
    }

    start() {
        cc.game.addPersistRootNode(this.node);  //设为驻留节点
        this.InitUIManager();
        EntryControler.Init();
    }

    //初始化UIManger
    private InitUIManager() {
        let uiRoot = cc.find("UIManager", this.node)
        UIManager.Init(uiRoot);
    }

    

   
}


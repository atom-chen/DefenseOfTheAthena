import { UIBase } from "../framework/ui/UIBase";
import { UIManager } from "../framework/ui/UIManager";
import { EnumUIHierarchy } from "../framework/ui/UIEnum";




export class UITip extends UIBase {

    private static DURATION_SHORT = 0.6; 
    private static content: string

    /**
     * 提供打开该界面的API静态方法,方便直接调用
     * @param content 文字内容
     * @param duration 秒
     */
    public static async Info(content: string = '') {
        UITip.content = content
        UIManager.OpenUI(UITip)
    }

    public PrefabName: string = "P_UITip"
    public HierarchyType: EnumUIHierarchy = EnumUIHierarchy.Tip;
    private _content: cc.Label;

    start() {
        this._content = cc.find("bg/Label", this.node).getComponent(cc.Label);
        this.OnOpen();
    }

    private OnOpen() {
        this._content.string = UITip.content;
        this.scheduleOnce(() => { UIManager.CloseUI(UITip); }, UITip.DURATION_SHORT);
    }

}
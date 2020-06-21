import { UIBase } from "../framework/ui/UIBase";
import { UIManager } from "../framework/ui/UIManager";
import { EnumUIHierarchy } from "../framework/ui/UIEnum";




export class UITip extends UIBase {

    public static DURATION_SHORT = 2.5; //s
    public static DURATION_LONG = 5;

    /**
     * 提供打开该界面的API静态方法,方便直接调用
     * @param content 文字内容
     * @param duration 秒
     */
    public static async Info(content: string = '', duration: number = UITip.DURATION_SHORT) {
        let toast = await UIManager.OpenUI(UITip) as UITip;
        toast.OnOpen(content, duration);
    }

    public PrefabName: string = "P_UITip"
    public HierarchyType: EnumUIHierarchy = EnumUIHierarchy.Tip;

    private _content: cc.Label;

    start() {
        this._content = cc.find("bg/Label", this.node).getComponent(cc.Label);
    }

    private OnOpen(content: string, duration: number) {
        this._content.string = content;
        this.scheduleOnce(() => { UIManager.CloseUI(UITip); }, duration);
    }

}
import { EnumUIHierarchy, EnumUIOpenTween, EnumUICloseTween } from "./UIEnum";




export abstract class UIBase extends cc.Component {
    public abstract PrefabName: string;
    public HierarchyType = EnumUIHierarchy.Normal
    public OpenTween = EnumUIOpenTween.None;
    public CloseTween = EnumUICloseTween.None;
    public Mask: cc.Node

    onLoad() {
        this.Mask = cc.find('UIMask', this.node);
    }
}


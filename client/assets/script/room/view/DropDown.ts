
import { UIEventCenter } from "../../framework/util/UIEventCenter";

interface ActionSheetDataItem {
    Id: number,         //id： 主要用来排序
    Desc: string,       //Desc: 显示的文本描述
    Action: Function    // 动作
}

export default class DropDown extends cc.Component {

    private _item: cc.Node;
    private _scrollveiw: cc.Node;

    public Init() {
        this._item = cc.find("Item", this.node);
        this._scrollveiw = cc.find("ScrollView/view/content", this.node);
        this._item.active = false;
        this.node.active=false;
    }

    public Refresh(info: Array<ActionSheetDataItem>){
        this._scrollveiw.destroyAllChildren();
        for (let index = 0; index <info.length; index++) {
            const data = info[index];
            let node = cc.instantiate(this._item)
            node.setParent(this._scrollveiw)
            let label = cc.find("Label", node).getComponent(cc.Label)
            label.string = data.Desc
            node.active=true;
            let btn = node.getComponent(cc.Button)
            UIEventCenter.ButtonEvent(btn, () => { data.Action() })
        }
    }
}

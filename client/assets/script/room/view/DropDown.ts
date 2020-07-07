import { DropDownController } from "../controller/DropDownController";
import { UIEventCenter } from "../../framework/util/UIEventCenter";

export default class DropDown extends cc.Component {

    private _item: cc.Node;
    private _scrollveiw: cc.Node;

    start() {
        this.initRoot();
    }

    private initRoot() {
        this._item = cc.find("Item", this.node);
        this._scrollveiw = cc.find("ScrollView/view/content", this.node);
        this._item.active = false;
        for (let index = 0; index < DropDownController.data.List.length; index++) {
            const data = DropDownController.data.List[index];
            let node = cc.instantiate(this._item)
            node.setParent(this._scrollveiw)
            let label = cc.find("Label", node).getComponent(cc.Label)
            label.string = data.Desc
            let btn = node.getComponent(cc.Button)
            UIEventCenter.ButtonEvent(btn, () => { data.Action() })
        }
    }

    
}

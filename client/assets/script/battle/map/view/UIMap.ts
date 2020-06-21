import { UIBase } from "../../../framework/ui/UIBase";
import Clog, { ClogKey } from "../../../framework/clog/Clog";
import { ConfigMap } from "../modle/ConfigMap";
import { MapCell } from "./MapCell";



export class UIMap extends UIBase {

    public PrefabName = "P_UIMap"

    private _item: cc.Node;
    // private _grid: cc.Node;
    private allMapItem: Array<MapCell>


    start() {
        Clog.Green(ClogKey.UI, "ui map start");
        this.initRoot();
        this.initEvent();
    }

    private initRoot() {
        this._item = cc.find("Item", this.node)
        this.allMapItem = new Array<MapCell>();
        for (let row = 0; row < ConfigMap.Map.length; row++) {
            const RowItem = ConfigMap.Map[row];
            for (let col = 0; col < RowItem.length; col++) {
                const id = RowItem[col];
                if (id != 0) {
                    let node = cc.instantiate(this._item)
                    let item = node.addComponent(MapCell)
                    node.setParent(this.node)
                    item.Init(id, row, col);
                    this.allMapItem.push(item);
                }
            }
        }
        this._item.active = false;
    }

    private initEvent() {

    }

}
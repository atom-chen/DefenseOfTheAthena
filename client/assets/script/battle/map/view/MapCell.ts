import { CellData } from "../modle/CellData";
import { UIUtil } from "../../../framework/ui/UIUtil";
import Clog, { ClogKey } from "../../../framework/clog/Clog";


export class MapCell extends cc.Component {

    private data: CellData;
    private _sprite: cc.Sprite;
    Init(id: number, row: number, col: number) {
        this.data = new CellData(id)

        let pos = cc.v2(-1800 + col * 64 + 32, 900 - row * 64 - 32)
        Clog.Green(ClogKey.UI, "this.id=" + this.data.Id + ",pos={" + pos.x + "," + pos.y + "}");
        this.node.setPosition(pos);
        this.initRoot();
        this.initEvent();
    }

    private initRoot() {
        this._sprite = this.node.getComponent(cc.Sprite);
        UIUtil.ChangeSprite(this.data.Icon, this._sprite);
    }

    private initEvent() {

    }

}
import {CommonItem} from "./CommonItem";
import {Item} from "./gilded-rose";

export class OrdinaryItem extends CommonItem {

  constructor(item: Item) {
    super(item);
  }

  updateQuality(): void {
    if (this.hasReachSellInLimit()) {
      this.item.quality -= 2
    } else {
      this.item.quality -= 1
    }
  }

}

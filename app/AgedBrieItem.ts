import {CommonItem} from "./CommonItem";
import {Item} from "./gilded-rose";

export class AgedBrieItem extends CommonItem {

  constructor(item: Item) {
    super(item);
  }

  updateQuality(): void {
    if (this.hasReachMaxQuality()) {
      this.item.quality = this.rules.quality.max
    } else {
      if (this.hasReachSellInLimit()) {
        this.item.quality += 2
      } else {
        this.item.quality += 1
      }
    }
  }

}

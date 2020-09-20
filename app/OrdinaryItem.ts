import {CommonItem} from "./CommonItem";
import {Item} from "./gilded-rose";

export class OrdinaryItem extends CommonItem {

  constructor(item: Item) {
    super(item);
  }

  updateSellIn(): void {
    this.item.sellIn -= 1
  }

  updateQuality(): void {
    if (this.hasReachMinQuality()) {
      this.item.quality = this.rules.quality.min
    } else {
      if (this.hasReachSellInLimit()) {
        this.item.quality -= 2
      } else {
        this.item.quality -= 1
      }
    }
  }

}

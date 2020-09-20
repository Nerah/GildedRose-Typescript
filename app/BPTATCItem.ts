import {CommonItem} from "./CommonItem";
import {Item} from "./gilded-rose";

export class BPTATCItem extends CommonItem {
  readonly date = {
    isClose: 10,
    isImminent: 5
  };

  constructor(item: Item) {
    super(item);
  }

  updateQuality(): void {
    if (this.hasReachSellInLimit()) {
      this.item.quality = 0
    } else {
      if (this.concertIsImminent()) {
        this.item.quality += 3
      } else {
        if (this.concertIsClose()) {
          this.item.quality += 2
        } else {
          this.item.quality += 1
        }
      }
    }
    if (this.hasReachMaxQuality()) {
      this.item.quality = this.rules.quality.max
    }
  }

  private concertIsClose() {
    return this.item.sellIn < this.date.isClose
  }

  private concertIsImminent() {
    return this.item.sellIn < this.date.isImminent
  }

}

import {CustomItem} from "./CustomItem";
import {Item} from "./Item";

export abstract class CommonItem extends CustomItem {
  protected readonly rules = {
    quality: {
      min: 0,
      max: 50
    },
    sellIn: {
      limit: 0
    }
  };

  protected constructor(item: Item) {
    super(item);
  }

  update(): void {
    this.updateSellIn();
    this.superUpdateQuality();
  }

  updateSellIn(): void {
    this.item.sellIn -= 1
  }

  private superUpdateQuality(): void {
    this.updateQuality();
    this.correctQualityOverflowing();
  }

  abstract updateQuality(): void

  private correctQualityOverflowing() {
    if (this.hasReachMinQuality()) {
      this.item.quality = this.rules.quality.min
    } else {
      if (this.hasReachMaxQuality()) {
        this.item.quality = this.rules.quality.max
      }
    }
  }

  protected hasReachSellInLimit(): boolean {
    return this.item.sellIn < this.rules.sellIn.limit;
  }

  protected hasReachMinQuality(): boolean {
    return this.item.quality < this.rules.quality.min;
  }

  protected hasReachMaxQuality(): boolean {
    return this.item.quality > this.rules.quality.max;
  }
}

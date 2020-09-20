import {CustomItem} from "./CustomItem";
import {Item} from "./gilded-rose";

export abstract class OrdinaryItem extends CustomItem {
  protected readonly rules = {
    quality: {
      min: 0,
      max: 50
    }
  };

  protected constructor(item: Item) {
    super(item);
  }

  update(): void {
    this.updateSellIn();
    this.updateQuality();
  }

  abstract updateSellIn(): void
  abstract updateQuality(): void

  protected hasReachMinQuality(): boolean {
    return this.item.quality < this.rules.quality.min;
  }

  protected hasReachMaxQuality(): boolean {
    return this.item.quality > this.rules.quality.max;
  }
}

import {CustomItem} from "./CustomItem";

export abstract class OrdinaryItem extends CustomItem {
  update(): void {
    this.updateSellIn();
    this.updateQuality();
  }

  abstract updateSellIn(): void
  abstract updateQuality(): void
}

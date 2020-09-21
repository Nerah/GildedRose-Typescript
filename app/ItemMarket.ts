import {CustomItem} from "./CustomItem";
import {Item} from "./gilded-rose";
import {ItemFactory} from "./ItemFactory";

export class ItemMarket {
  private store: Array<CustomItem> = [];

  constructor(items: Array<Item>) {
    items.forEach(item => {
      this.store.push(ItemFactory.getInstance(item))
    });
  }

  update() {
    this.store.forEach(item => item.update());
  }
}

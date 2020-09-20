import {CustomItem} from "./CustomItem";
import {Item} from "./gilded-rose";
import {ItemFactory} from "./ItemFactory";

type ItemRelation = [ string, CustomItem ];

export class ItemMarket {
  private store: Array<ItemRelation>;

  constructor(items: Array<Item>) {
    items.forEach(item => {
      this.store.push([ item.name, ItemFactory.getInstance(item) ])
    });
  }
}

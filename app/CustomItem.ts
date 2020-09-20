import {Item} from "./gilded-rose";

export abstract class CustomItem {
  protected item: Item;

  constructor(item: Item) {
    this.item = item
  }

  abstract update(): void
}

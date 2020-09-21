import {Item} from "./Item";

export abstract class CustomItem {
  protected item: Item;

  protected constructor(item: Item) {
    this.item = item
  }

  abstract update(): void
}

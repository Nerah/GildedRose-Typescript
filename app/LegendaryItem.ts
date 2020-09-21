import {CustomItem} from "./CustomItem";
import {Item} from "./Item";

export class LegendaryItem extends CustomItem {

  constructor(item: Item) {
    super(item);
  }
  // every legendary item never age
  update(): void {

  }
}

import {CustomItem} from "./CustomItem";
import {Item} from "./gilded-rose";

export class LegendaryItem extends CustomItem {

  constructor(item: Item) {
    super(item);
  }
  // every legendary item never age
  update(): void {

  }
}

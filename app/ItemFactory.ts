import {OrdinaryItem} from "./OrdinaryItem";
import {LegendaryItem} from "./LegendaryItem";
import {AgedBrieItem} from "./AgedBrieItem";
import {BPTATCItem} from "./BPTATCItem";
import {CustomItem} from "./CustomItem";
import {Item} from "./gilded-rose";

type ItemType = LegendaryItem["constructor"]
    | OrdinaryItem["constructor"]
    | AgedBrieItem["constructor"]
    | BPTATCItem["constructor"];
type Correspondence = { [key: string]: ItemType };

export class ItemFactory {
  private static recognizableItems: Correspondence = {
    'Sulfuras, Hand of Ragnaros': LegendaryItem.constructor,
    '+5 Dexterity Vest': OrdinaryItem.constructor,
    'Elixir of the Mongoose': OrdinaryItem.constructor,
    'Aged Brie': AgedBrieItem.constructor,
    'Backstage passes to a TAFKAL80ETC concert': BPTATCItem.constructor
  };

  static getInstance(item: Item): CustomItem {
    return this.recognizableItems[item.name].apply(item)
  }
}

import {OrdinaryItem} from "./OrdinaryItem";
import {LegendaryItem} from "./LegendaryItem";
import {AgedBrieItem} from "./AgedBrieItem";
import {BPTATCItem} from "./BPTATCItem";
import {CustomItem} from "./CustomItem";
import {Item} from "./Item";

type ItemMapping = typeof LegendaryItem |
    typeof OrdinaryItem |
    typeof AgedBrieItem |
    typeof BPTATCItem;
type Correspondence = { [key: string]: ItemMapping };

export class ItemFactory {
  private static recognizableItems: Correspondence = {
    'Sulfuras, Hand of Ragnaros': LegendaryItem,
    '+5 Dexterity Vest': OrdinaryItem,
    'Elixir of the Mongoose': OrdinaryItem,
    'Aged Brie': AgedBrieItem,
    'Backstage passes to a TAFKAL80ETC concert': BPTATCItem
  };

  static getInstance(item: Item): CustomItem {
    return new this.recognizableItems[item.name](item)
  }
}

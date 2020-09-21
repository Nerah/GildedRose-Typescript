import {ItemMarket} from "./ItemMarket";
import {Item} from "./Item";

export class GildedRose {
    items: Array<Item>;
    itemMarket: ItemMarket;

    constructor(items = [] as Array<Item>) {
        this.items = items;
        this.itemMarket = new ItemMarket(items);
    }

    updateQuality() {
        this.itemMarket.update();
        return this.items;
    }
}

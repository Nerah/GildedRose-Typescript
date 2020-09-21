import {ItemMarket} from "./ItemMarket";

export class Item {
    name: string;
    sellIn: number;
    quality: number;

    constructor(name, sellIn, quality) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }
}

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

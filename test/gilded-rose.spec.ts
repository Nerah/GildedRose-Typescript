import { expect } from 'chai';
import { Item, GildedRose } from '../app/gilded-rose';

describe('Gilded Rose', function () {

    it('Sulfura should keep its quality over time', function() {
        const gildedRose = new GildedRose([ new Item('Sulfuras, Hand of Ragnaros', 0, 80) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(80);
    });

    it('Sulfura never has to be sold', function() {
        const gildedRose = new GildedRose([ new Item('Sulfuras, Hand of Ragnaros', 10, 80) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].sellIn).to.equal(10);
    });

    it('Dexterity vest quality should decrement by 1 if sell by date hasn\'t passed', function() {
        const gildedRose = new GildedRose([ new Item("+5 Dexterity Vest", 10, 20) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].sellIn).to.equal(9);
        expect(items[0].quality).to.equal(19);
    });

    it('Dexterity vest quality should decrement by 2 if sell by date has passed', function() {
        const gildedRose = new GildedRose([ new Item("+5 Dexterity Vest", 0, 10) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].sellIn).to.equal(-1);
        expect(items[0].quality).to.equal(8);
    });

    it('Elixir of the Mongoose quality should decrement by 1 if sell by date hasn\'t passed', function() {
        const gildedRose = new GildedRose([ new Item("Elixir of the Mongoose", 10, 20) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].sellIn).to.equal(9);
        expect(items[0].quality).to.equal(19);
    });

    it('Elixir of the Mongoose quality should decrement by 2 if sell by date has passed', function() {
        const gildedRose = new GildedRose([ new Item("Elixir of the Mongoose", 0, 10) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].sellIn).to.equal(-1);
        expect(items[0].quality).to.equal(8);
    });

    it('Aged Brie quality should increment by 1 if sell by date hasn\'t passed', function() {
        const gildedRose = new GildedRose([ new Item("Aged Brie", 10, 20) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].sellIn).to.equal(9);
        expect(items[0].quality).to.equal(21);
    });

    it('Aged Brie quality should increment by 2 if sell by date has passed', function() {
        const gildedRose = new GildedRose([ new Item("Aged Brie", 0, 30) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].sellIn).to.equal(-1);
        expect(items[0].quality).to.equal(32);
    });

    it('Backstage passes to a TAFKAL80ETC concert quality should increment by 1 if sell by date is > 10', function() {
        const gildedRose = new GildedRose([ new Item("Backstage passes to a TAFKAL80ETC concert", 15, 25) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].sellIn).to.equal(14);
        expect(items[0].quality).to.equal(26);
    });

    it('Backstage passes to a TAFKAL80ETC concert quality should increment by 2 if sell by date is <= 10 and > 5', function() {
        const gildedRose = new GildedRose([ new Item("Backstage passes to a TAFKAL80ETC concert", 10, 30) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].sellIn).to.equal(9);
        expect(items[0].quality).to.equal(32);
    });

    it('Backstage passes to a TAFKAL80ETC concert quality should increment by 3 if sell by date is <= 5 and >= 0', function() {
        const gildedRose = new GildedRose([ new Item("Backstage passes to a TAFKAL80ETC concert", 5, 40) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].sellIn).to.equal(4);
        expect(items[0].quality).to.equal(43);
    });

    it('Backstage passes to a TAFKAL80ETC concert quality should be 0 if sell by date has passed', function() {
        const gildedRose = new GildedRose([ new Item("Backstage passes to a TAFKAL80ETC concert", 0, 55) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].sellIn).to.equal(-1);
        expect(items[0].quality).to.equal(0);
    });

    it('Item quality should never be negative', function() {
        const gildedRose = new GildedRose([
            new Item("+5 Dexterity Vest", 10, 20),
            new Item("Aged Brie", 2, 0),
            new Item("Elixir of the Mongoose", 5, 7),
            new Item("Sulfuras, Hand of Ragnaros", 0, 80),
            new Item("Sulfuras, Hand of Ragnaros", -1, 80),
            new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20),
            new Item("Backstage passes to a TAFKAL80ETC concert", 10, 49),
            new Item("Backstage passes to a TAFKAL80ETC concert", 5, 49)
        ]);
        let items;
        // 100 days have passed
        for (let i = 0; i < 100; i++)
            items = gildedRose.updateQuality();
        // each item quality should not be negative
        for (let item of items) {
            expect(items[0].quality >= 0).to.be.true;
        }
    });

    it('Item quality should never be > 50', function() {
        const gildedRose = new GildedRose([
            new Item("+5 Dexterity Vest", 10, 20),
            new Item("Aged Brie", 2, 0),
            new Item("Elixir of the Mongoose", 5, 7),
            new Item("Sulfuras, Hand of Ragnaros", 0, 80),
            new Item("Sulfuras, Hand of Ragnaros", -1, 80),
            new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20),
            new Item("Backstage passes to a TAFKAL80ETC concert", 10, 49),
            new Item("Backstage passes to a TAFKAL80ETC concert", 5, 49)
        ]);
        let items;
        // 100 days have passed
        for (let i = 0; i < 100; i++)
            items = gildedRose.updateQuality();
        // each item quality should not be negative
        for (let item of items) {
            expect(items[0].quality <= 50).to.be.true;
        }
    });

});

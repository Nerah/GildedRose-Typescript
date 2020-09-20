import { expect } from 'chai';
import { Item, GildedRose } from '../app/gilded-rose';

describe('Gilded Rose', function () {

    it('Sulfura should keep its quality over time', function() {
        const gildedRose = new GildedRose([ new Item('Sulfuras, Hand of Ragnaros', 0, 80) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(80);
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

});

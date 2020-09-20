import { expect } from 'chai';
import { Item, GildedRose } from '../app/gilded-rose';

describe('Gilded Rose', function () {

    it('Sulfura should keep its quality over time', function() {
        const gildedRose = new GildedRose([ new Item('Sulfuras, Hand of Ragnaros', 0, 80) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(80);
    });

});

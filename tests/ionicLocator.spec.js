'use strict';
var expressjs = require('./server.js');

describe('protractor-goodies', function () {
    var _beforeAll = false;
    beforeEach(function () {
        if (_beforeAll) return;
        else {
            browser.get('http://localhost:3000');
            _beforeAll = true;
        }
    });

    describe('by.collRepeater', function () {
        // it('by.collRepeater locator is defined', function () {
        //     expect(by.collRepeater).toBeDefined();
        // });
        //
        // it('finds and element by collRepeater', function () {
        //     expect(element(by.collRepeater('item in list')).isPresent()).toEqual(true);
        // });
        //
        // it('finds 20 items in collRepeater', function () {
        //     expect(element.all(by.collRepeater('item in list')).count()).toEqual(20);
        // });
        it('finds the customLocaator', function () {
            // element(by.cssContainingText('p', 'anaaremere')).isPresent().then(function (arr) {
            //     console.log(arr)
            // });
            console.log('started');
            element(by.itemBeta('custom-elemName')).isPresent().then(function (arr) {
                console.log(arr);
                if(arr){
                    expect(arr).toEqual(true);
                    console.log('Expected TRUE');
                }else{
                    expect().toEqual(true);
                }
            });

        });

    });
});

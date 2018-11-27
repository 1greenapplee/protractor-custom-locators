protractor-goodies
===

Adds a locators to a protractor instance that find specific elements.

[![Build Status](https://travis-ci.org/MobileCaddy/protractor-ionic-locator.svg)](https://travis-ci.org/MobileCaddy/protractor-ionic-locator)

## Installation

`$ npm install protractor-goodies`

## Usage

```javascript
onPrepare: function () {
  // Your other stuff.
  global.goodies =  require('protractor-goodies');
}
```

## Credit



Base code for adding locators to Protractor was taken from [Fernando Martinez's](https://github.com/crzrcn) great [protractor-uisref-locator package](https://github.com/crzrcn/protractor-uisref-locator)... thanks man!



Added:
example:

element(by.uiSref('users.show({id: 42})'));

element.all(by.uiSref('users.index')).then(function (elems) {
  // elems contains all the elements found that match the given ui-sref.
});

// Get elements that match the given ui-sref and that are within the element with id='users'.
element(by.css('#users')).element(by.uiSref('users.index'))


Example Calls

goodies.log('this is a console.log example')
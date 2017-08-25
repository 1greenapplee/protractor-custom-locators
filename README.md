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
  require('protractor-goodies')(protractor);
}
```

The following locators will be availble in your specs;

### by.uiSref
### by.linkUiSref
### by.collRepeater


Find elements inside an ng-repeat.

#### Example

*View*
```xhtml
<div collection-repeat="cat in pets">
  <span>{{cat.name}}</span>
  <span>{{cat.age}}</span>
</div>
```

*Code*
```javascript
// Returns a promise that resolves to an array of WebElements containing
// all top level elements repeated by the Ionic collection-repeat repeater. 
// For 2 pets rows resolves to an array of 2 elements.
var rows = element.all(by.collRepeater('cat in pets'));
```

#### Params

Param            | Type
---------------- | -------------
repeatDescriptor | string

## Contributing

If you want to contribute to the package please suggest locators and use cases.

```
$ npm run webdriver

$ npm run test
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

by.linkUiSref('users.show({id: 42})', element(by.css('.users')));
by.linkUiSref('users.index.page({page: 2})');
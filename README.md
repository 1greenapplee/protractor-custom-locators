protractor-goodies
===

Adds a locators to a protractor instance that find specific elements.
<!-- 
[![Build Status](https://travis-ci.org/MobileCaddy/protractor-ionic-locator.svg)](https://travis-ci.org/MobileCaddy/protractor-ionic-locator) -->

## Installation

`$ npm install protractor-goodies`

## Usage

```javascript
onPrepare: function () {
  // Your other stuff.
  global.goodies =  require('protractor-goodies');
}
```
Example Calls
```
goodies.elByName();
goodies.allByTag
goodies.allByTxt
goodies.allByRepeat
goodies.byTxt
goodies.byModel
```




A deeper example on how protractor locators are working, here: https://sdet.ro/blog/protractor-selectors-how-to-explanation-protractor-locators/
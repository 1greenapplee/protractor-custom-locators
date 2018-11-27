/**
 * This Source Code Form is subject to the terms of the MIT License
 */
'use strict';
let byTxt = (paramClass, paramText) => {
    return element(by.cssContainingText(paramClass, paramText));
};
let log = (paramText) => {
    return console.log(paramText);
};

module.exports = {
    byTxt,
    log
};
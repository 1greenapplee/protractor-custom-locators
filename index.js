/**
 * This Source Code Form is subject to the terms of the MIT License
 */

'use strict';


module.exports = function (ptor) {
    ptor.By.addLocator('itemAlpha', function (repeater, exact) {
        function repeaterMatch(ngRepeat, repeater, exact) {
            if (exact) {
                return ngRepeat.split(' track by ')[0].split(' as ')[0].split('|')[0].trim() == repeater;
            } else {
                return ngRepeat.indexOf(repeater) != -1;
            }
        }

        using = document;

        var rows = [];
        var prefixes = ['collection-', 'ng-', 'ng_', 'data-ng-', 'x-ng-', 'ng\\:'];
        for (var p = 0; p < prefixes.length; ++p) {
            var attr = prefixes[p] + 'repeat';
            var repeatElems = using.querySelectorAll('[' + attr + ']');
            attr = attr.replace(/\\/g, '');
            for (var i = 0; i < repeatElems.length; ++i) {
                if (repeaterMatch(repeatElems[i].getAttribute(attr), repeater, exact)) {
                    rows.push(repeatElems[i]);
                }
            }
        }
        for (var p = 0; p < prefixes.length; ++p) {
            var attr = prefixes[p] + 'repeat-start';
            var repeatElems = using.querySelectorAll('[' + attr + ']');
            attr = attr.replace(/\\/g, '');
            for (var i = 0; i < repeatElems.length; ++i) {
                if (repeaterMatch(repeatElems[i].getAttribute(attr), repeater, exact)) {
                    var elem = repeatElems[i];
                    while (elem.nodeType != 8 ||
                    !repeaterMatch(elem.nodeValue, repeater, exact)) {
                        if (elem.nodeType == 1) {
                            rows.push(elem);
                        }
                        elem = elem.nextSibling;
                    }
                }
            }
        }
        return rows;
    });
    ptor.By.addLocator('itemBeta', function (spanText, selector, opt_parentElement) {
        var using = opt_parentElement || document;
        var els = using.querySelectorAll(selector);
        return Array.prototype.filter.call(els, function (el) {
            console.log(el);
            return el.getAttribute('Name') === spanText;
        });
    });
    ptor.By.addLocator('uiSref', function (toState, opt_parentElement) {
        var using = opt_parentElement || document;
        var uiSrefNodes = using.querySelectorAll('[ui-sref="' + toState +'"]');
        var dataUiSrefNodes = using.querySelectorAll('[data-ui-sref="' + toState +'"]');
        var possibleElements = Array.prototype.slice.call(uiSrefNodes).concat(Array.prototype.slice.call(dataUiSrefNodes));

        var result;

        if (possibleElements.length === 1) {
            result = possibleElements[0];
        } else if (possibleElements.length > 1) {
            result = possibleElements;
        }

        return result;
    });
    ptor.By.addLocator('linkUiSref', function (toState, opt_parentElement) {
        var using = opt_parentElement || document;
        var uiSrefNodes = using.querySelectorAll('a[ui-sref="' + toState +'"]');
        var dataUiSrefNodes = using.querySelectorAll('a[data-ui-sref="' + toState +'"]');
        var possibleAnchors = Array.prototype.slice.call(uiSrefNodes).concat(Array.prototype.slice.call(dataUiSrefNodes));

        var result = undefined;

        if (possibleAnchors.length === 0) {
            result = null;
        } else if (possibleAnchors.length === 1) {
            result = possibleAnchors[0];
        } else {
            result = possibleAnchors;
        }

        return result;
    });

};
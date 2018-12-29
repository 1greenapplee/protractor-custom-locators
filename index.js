'use strict';
const EC = protractor.ExpectedConditions;
const defaultWaitTime = 30000;
let elByName = (param) => {
    return element(by.name(param));
};

let allByTag= (param, combined) => {
    if(combined){
        return combined.all(by.tagName(param));
    }else{
        return element.all(by.tagName(param));
    }
};

let byTxt= (paramClass, paramText, combined) => {
    if(combined){
        return combined.all(by.cssContainingText(paramClass, paramText));
    }else{
        return element(by.cssContainingText(paramClass, paramText));
    }
};
let allByRepeat= (paramClass, combined) => {
    if(combined){
        return combined.all(by.repeater(paramClass));
    }else{
        return element.all(by.repeater(paramClass));
    }
};

// let byTxt= (paramClass, paramText) => {
//     return element(by.cssContainingText(paramClass, paramText));
// };
let byModel= (paramClass) => {
    return element(by.model(paramClass));
};

let log = (paramText) => {
    return console.log(paramText);
};
let networkThrottle = function (downloadSpeed, uploadSpeed) {
    browser.driver.setNetworkConditions({
        offline: false,
        latency: global.latency, // Additional latency (ms).
        download_throughput: downloadSpeed, // Maximal aggregated download throughput.
        upload_throughput: uploadSpeed // Maximal aggregated upload throughput.
    });

};
let ignoreSync = (param)=>{
    browser.ignoreSynchronization = param;
};
function smartWaitPresence(param){
    // console.log('Check if element is present!');
    browser.wait(EC.presenceOf(param), defaultWaitTime, 'Item NOT present');

}
function smartWaitVisibilityOf(item2){
    browser.wait(EC.visibilityOf(item2), defaultWaitTime, 'Item NOT visible');
}
function smartWaitURL(item2){
    browser.wait(EC.urlContains(item2), defaultWaitTime, 'Item is not present in the URL!');
}
function ch(elementToPass){
    let fpass = false;
    function returnPresence(elm) {
        elm.isDisplayed().then(function (p) {
            if (p) {
                fpass = true;
            }else{
        		browser.driver.sleep(1000);
            }
        });
    }
    browser.driver.wait(function () {
        returnPresence(elementToPass);
        console.log('in wait');
        if (fpass) {
            //setting to false, for waiting on the next loop.
            fpass = false;
            return true;
        }
    }, 10000);

}

let smartWait = function (item1, item2, item3) {
    if(item1 ==='returnPresence'){
        ch(item2);
    }
    else if (item1 === 'not') {
        browser.wait(EC.not(EC.visibilityOf(item2)), defaultWaitTime, 'Item visible!');
    }
    else if (item1 === 'clickable') {
        browser.wait(EC.not(EC.elementToBeClickable(item2)), defaultWaitTime, 'Item is not clickable!');
    } else if (item1 === 'url') {
        smartWaitURL(item2);
    }
    else if (item3 === true) {
        smartWaitVisibilityOf(item2);
    } else if (item1 === 1) {
        smartWaitPresence(item2);
    } else {
        browser.driver.sleep(item1);
    }
};

let loaderDivCheck = function (classToChange){
    let check = false;
    let classLoader;
    let loaderDiv;
    if(!classToChange){
        loaderDiv= classLoader;
        classLoader = '#loaderDiv';
    }  else{
        classLoader = classToChange;
    }
    loaderDiv = $(classLoader);

    function checkForLoader(){
        loaderDiv.isDisplayed().then(function(isPresent){
            if(isPresent){
                console.log('check if loader is present: ' + isPresent);
                global.goodies.smartWait(300);
            }else{
                check = true;
            }
        });
    }
    browser.driver.wait(function () {
        checkForLoader();
        if (check) {
            check = false;
            return true;
        }
    }, 90000);
};


module.exports = {
    loaderDivCheck,
    smartWait,
    ignoreSync,
    networkThrottle,
    byModel,
    allByRepeat,
    allByTag,
    elByName,
    byTxt,
    log
};
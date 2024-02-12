// ==UserScript==
// @name         hilan - change automaticcly to hebrew on login
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://microsoft.net.hilan.co.il/Hilannetv2/ng/personal-file/home
// @icon         https://www.google.com/s2/favicons?sz=64&domain=co.il
// @grant        none
// ==/UserScript==

const $ = window.jQuery;
const myEnglishName = "Doron Kilzi";

(async function() {
    'use strict';
    console.log('im in!', new Date());
    await waitUntilPageLoaded();
    console.log('page loaded!', new Date());
    if ($(".employee-data .h-pageSubTitle")[0].innerText == myEnglishName) {
        $(".employee-menu .language").click();
    }
})();

async function waitUntilPageLoaded() {
  return new Promise((resolve) => {
    const interval = setInterval(() => {
      const isPageLoaded = $(".employee-data .h-pageSubTitle").length > 0;
      if (isPageLoaded) {
        clearInterval(interval);
        resolve();
      }
    }, 100);
  });
}
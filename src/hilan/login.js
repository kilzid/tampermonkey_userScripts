// ==UserScript==
// @name         click on login in hilan
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://microsoft.net.hilan.co.il/login
// @icon         https://www.google.com/s2/favicons?sz=64&domain=co.il
// @grant        none
// ==/UserScript==

const $ = window.jQuery;
const username = ""; // todo: fill
const password = ""; // todo: fill
(async function() {
    'use strict';
    console.log('in in!', new Date());
    await waitUntilPageLoaded();
    $(".h-input-username")[0].value = username;
    $(".h-input-password ")[0].value = password;
    console.log('page loaded!', new Date());
    $('button[type="submit"]').click();
    console.log('after click!', new Date());
})();

async function waitUntilPageLoaded() {
  return new Promise((resolve) => {
    const interval = setInterval(() => {
      const isPageLoaded = $(".h-input-username").length > 0;
      if (isPageLoaded) {
        clearInterval(interval);
        resolve();
      }
    }, 100);
  });
}
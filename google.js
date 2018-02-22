// ==UserScript==
// @name         GoogleDrive Download anyway
// @namespace    https://konayuki.moe/
// @version      0.0.3
// @description  Skip GoogleDrive can't scan this file for viruses
// @author       Proflylab
// @icon         https://avatars1.githubusercontent.com/u/27909158?s=460&v=4
// @match        https://drive.google.com/uc?id=*
// @match        https://docs.google.com/uc?id=*
// @grant        none
// ==/UserScript==

(function() {
    document.getElementById("uc-download-link").click();
    document.title = "GoogleDrive Download anyway";
    document.body.innerHTML = "Skip GoogleDrive can't scan this file for viruses";
})();

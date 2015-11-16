﻿/// <reference path="../CommonScripts/GUI_HELPER.js" />
/// <reference path="SP_BANK.js" />
/// <reference path="GLOBALS.js" />

(function () {
    var DESIGN = { 
        SAVE: function () {
            try {
               SP_BANK.SAVE("", DESIGN.LoginCallback, GUI_HELPER.SERVICE_CALLBACK_ERR);
            } catch (err) {
                GUI_HELPER.ALERT('test', err, GUI_HELPER.ERROR);
            }
        },
        LoginCallback: function (data) {
            try {
               alert("Bitti");
            } catch (err) {
                GUI_HELPER.ALERT('test', err, GUI_HELPER.ERROR);
            }
        }
    } 
    if (!window.DESIGN) { window.DESIGN = DESIGN; }
})();

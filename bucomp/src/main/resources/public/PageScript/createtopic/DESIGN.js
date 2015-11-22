/// <reference path="../CommonScripts/GUI_HELPER.js" />
/// <reference path="SP_BANK.js" />
/// <reference path="GLOBALS.js" />

(function () {
    var DESIGN = { 
        SAVE: function (title, description, communityId, callback, callback_err) {
            try {
               SP_BANK.SAVE(title, description, communityId, callback, callback_err);
            } catch (err) {
                GUI_HELPER.ALERT('test', err, GUI_HELPER.ERROR);
            }
        }
    } 
    if (!window.DESIGN) { window.DESIGN = DESIGN; }
})();

/// <reference path="../CommonScripts/GUI_HELPER.js" />
/// <reference path="SP_BANK.js" />
/// <reference path="GLOBALS.js" />

(function () {
    var DESIGN = { 
        GetCommunity: function (communityId, callback, callback_err) {
            try {
               SP_BANK.GetCommunity(communityId, callback, callback_err);
            } catch (err) {
                callback_err();
            }
        }
    } 
    if (!window.DESIGN) { window.DESIGN = DESIGN; }
})();

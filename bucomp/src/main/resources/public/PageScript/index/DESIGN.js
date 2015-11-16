/// <reference path="../CommonScripts/GUI_HELPER.js" />
/// <reference path="SP_BANK.js" />
/// <reference path="GLOBALS.js" />

(function () {
    var DESIGN = { 
        test: function () {
            try {
               SP_BANK.TEST(paream1, DESIGN.testcallback, GUI_HELPER.SERVICE_CALLBACK_ERR);
            } catch (err) {
                GUI_HELPER.ALERT('test', err, GUI_HELPER.ERROR);
            }
        }
    } 
    if (!window.DESIGN) { window.DESIGN = DESIGN; }
})();

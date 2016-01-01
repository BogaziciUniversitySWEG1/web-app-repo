/// <reference path="../CommonScripts/GUI_HELPER.js" />
/// <reference path="SP_BANK.js" />
/// <reference path="GLOBALS.js" />

(function () {
    var DESIGN = { 
        test: function () {
            try {
               SP_BANK.TEST(paream1, DESIGN.LoginCallback, GUI_HELPER.SERVICE_CALLBACK_ERR);
            } catch (err) {
            	swal({   title: "Error!",   text: err,   type: "error",   confirmButtonText: "OK" });
            }
        }
    } if (!window.DESIGN) { window.DESIGN = DESIGN; }
})();

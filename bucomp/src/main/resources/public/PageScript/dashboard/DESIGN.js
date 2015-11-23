/// <reference path="../CommonScripts/GUI_HELPER.js" />
/// <reference path="SP_BANK.js" />
/// <reference path="GLOBALS.js" />

(function () {
	var DESIGN = { 
			GetCommunitiesByUserId: function (userId, callback, callback_err) {
	            try {
	               SP_BANK.GetCommunitiesByUserId(userId, callback, callback_err);
	            } catch (err) {
	                callback_err();
	            }
	        }
	    } 
    if (!window.DESIGN) { window.DESIGN = DESIGN; }
})();

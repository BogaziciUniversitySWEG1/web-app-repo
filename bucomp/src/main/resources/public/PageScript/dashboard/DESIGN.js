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
        },
        GetUserInfo: function(userId, callback, callback_err){
            try {
                   SP_BANK.GetUserInfo(userId, callback, callback_err);
                } catch (err) {
                    callback_err();
                }
        },
        GetPopularTags: function() {
            SP_BANK.GetPopularTags(DESIGN.FillPopularTags,null);
        },
        FillPopularTags: function(data) {
            if(data != null) {
                $("#popularTags").html("");
                for(var i = 0; i < data.length; i++) {
                    $("#popularTags").append(
                        $("<li>").append(
                            $("<a>").attr("dir","ltr").append(data[i].tagName)
                        ).append(
                            $("<span>").attr("dir","ltr").append("(" + data[i].tagCount + ")")
                        )
                    );
                }
            }
        }
    } 
    if (!window.DESIGN) { window.DESIGN = DESIGN; }
})();

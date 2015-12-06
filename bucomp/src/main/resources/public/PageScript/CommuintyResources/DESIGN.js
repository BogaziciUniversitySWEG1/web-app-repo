/// <reference path="../CommonScripts/GUI_HELPER.js" />
/// <reference path="SP_BANK.js" />
/// <reference path="GLOBALS.js" />

(function () {
    var DESIGN = {
    	GetContent: function() {
            var communityId = GetQueryStringValue("cid");
            var uid = GetQueryStringValue("uid"); 
            DESIGN.INITIALIZE_RESOURCE();
            SP_BANK.GetCommunity(communityId,DESIGN.FillCommunity,GUI_HELPER.SERVICE_CALLBACK_ERR); 
        }, 
        INITIALIZE_RESOURCE: function () {
            try {
                var _this = document.getElementById('resourceUpload');
                if (_this.files.length > 0) {
                    var file = _this.files[0];
                    GLOBALS.Resource = file.name;
                }
                else {
                    GLOBALS.Resource = "";
                }
            } catch (err) {
                GUI_HELPER.ALERT('Warning', err, GUI_HELPER.ERROR);
            }
        },
        FillCommunity: function(data) {
        	if(GUI_HELPER.NOU(data)){
	            $("#lblTitle").html(data.title+' Resources'); 
            } 	
        },
        SAVE_RESOURCE: function() {
         var communityId = GetQueryStringValue("cid");
            var uid = GetQueryStringValue("uid"); 
        	SP_BANK.SaveResource(communityId,uid,GLOBALS.Resource,DESIGN.FillCommunity,GUI_HELPER.SERVICE_CALLBACK_ERR); 
        }
    }
    if (!window.DESIGN) {
        window.DESIGN = DESIGN;
    }
})();

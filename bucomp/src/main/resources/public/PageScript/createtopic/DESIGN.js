/// <reference path="../CommonScripts/GUI_HELPER.js" />
/// <reference path="SP_BANK.js" />
/// <reference path="GLOBALS.js" />

(function () {
    var DESIGN = { 
        SAVE: function () {
            var title = $("#txtTitle").val();
            var description = $("#txtDescription").val();
            var communityId = GetQueryStringValue("cid");
            var userId = GetQueryStringValue("uid");
            var creationDate = (new Date).getTime();
            SP_BANK.SAVE(title, description, communityId, userId, creationDate, DESIGN.SaveSuccess, DESIGN.SaveError);
        },
        SaveSuccess: function(data) {
            var communityId = GetQueryStringValue("cid");
            var userId = GetQueryStringValue("uid");
            var url = "topic.html?cid=" + communityId + "&uid=" + userId + "&tid=" + data.topicId;
            alert("Successfully saved. Redirecting to community page.");
            window.location = url;
        },
        SaveError: function(data) {
            alert("Error occured. Please contact to your system administrator.");
        }
    } 
    
    if (!window.DESIGN) { window.DESIGN = DESIGN; }
})();

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
            jsonObj = JSON.parse(data);
            GLOBALS.topicId = jsonObj.topicId;
            DESIGN.SaveTags();
        },
        SaveTags: function() {
            SP_BANK.SaveTopicTags(GLOBALS.topicId, GLOBALS.tagList, DESIGN.SaveTagsSuccess, DESIGN.SaveTagsError);
        },
        SaveTagsSuccess: function(data) {
            var communityId = GetQueryStringValue("cid");
            var userId = GetQueryStringValue("uid");
            var url = "topic.html?cid=" + communityId + "&uid=" + userId + "&tid=" + GLOBALS.topicId;
            window.location = url;
        },
        SaveTagsError: function(data){
            alert("Error occured. Please contact to your system administrator.");
        },
        SaveError: function(data) {
            alert("Error occured. Please contact to your system administrator.");
        },
        CANCEL: function() {
            var communityId = GetQueryStringValue("cid");
            var userId = GetQueryStringValue("uid");
            var url = "community.html?cid=" + communityId + "&uid=" + userId;
            window.location = url;
        },
        GetUserInfo: function() {
            var userId = GetQueryStringValue("uid");
            GUI_HELPER.GetUserInfo(userId, DESIGN.FillUserInfo, null);
        },
        FillUserInfo: function(data) {
            var nameSurname = data.name + " " + data.surname;
            $("#lblUserNameSurname").html(nameSurname);
        },
        AddTag: function() {
            var tag = $("#txtTag").val();
            GLOBALS.tagList.push(tag);
            DESIGN.RefreshTagList();
            $("#txtTag").val("");
        },
        RemoveTag: function(tag) {
            var index = GLOBALS.tagList.indexOf(tag);
            GLOBALS.tagList.splice(index,1);
            DESIGN.RefreshTagList();
        },
        RefreshTagList: function() {
            var tagContent = "";
            for(var i = 0; i< GLOBALS.tagList.length; i++){
                tagContent = tagContent + "<img src='images/Delete.png' onclick='DESIGN.RemoveTag(\"" + GLOBALS.tagList[i] + "\");' width='16' />";
                tagContent = tagContent + "<a rel='tag'>" + GLOBALS.tagList[i] + "</a>";
                if(i<GLOBALS.tagList.length-1){
                    tagContent = tagContent + ", ";
                }
            }
            $("#tagSpan").html(tagContent);
        },
    } 
    
    if (!window.DESIGN) { window.DESIGN = DESIGN; }
})();

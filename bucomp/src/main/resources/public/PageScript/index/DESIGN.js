/// <reference path="../CommonScripts/GUI_HELPER.js" />
/// <reference path="SP_BANK.js" />
/// <reference path="GLOBALS.js" />

(function () {
    var DESIGN = {
        GetCommunities: function (callback, callback_err) {
            try {
               SP_BANK.GetCommunities(callback, callback_err);
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
        },
        JoinCommunity: function(communityId) {
            var userId = GetQueryStringValue("uid");
            var roleId = 4;
            SP_BANK.JoinCommunity(userId, communityId, roleId, DESIGN.JoinSuccess, DESIGN.JoinError);
        },
        JoinSuccess: function(userId, communityId) {
            alert("You became the member of the community.");
            var url = "community.html?uid=" + userId + "&cid=" + communityId;
            window.location = url;
        },
        JoinError: function(data) {
        	alert("Alert","An error has been occured. Please contact to community owner.");
        },
        ShowRequestModal: function(communityId) {
            $("#spnCommunityId").html(communityId);
            $("#divRequest").show();
            GUI_HELPER.OPENWINDOW("divRequest","Join Request",true, true, false);
        },
        SendJoinRequest: function() {
            var communityId = $("#spnCommunityId").html();
            var userId = GetQueryStringValue("uid");
            var explanation = $("#txtExplanation").val();
            SP_BANK.SendJoinRequest(communityId, userId, explanation, DESIGN.JoinRequestSuccess, DESIGN.JoinRequestError);
            $("#spnCommunityId").html("");
        },
        CancelJoinRequest: function() {
            $("#divRequest").hide();
            GUI_HELPER.CLOSEWINDOW("divRequest");
        },
        JoinRequestSuccess: function(data, communityId) {
            alert("Your join request is sent to owner of the community. When the request is approved, you will be a member of the community.");
            var url = "community.html?cid=" + communityId + "&uid=" + GetQueryStringValue("uid");
            window.location = url;
        },
        JoinRequestError: function(data, communityId) {
            GUI_HELPER.ALERT("Alert","An error has been occured. Please contact to community owner.",GUI_HELPER.WARNING);
        }
    }
    if (!window.DESIGN) {
        window.DESIGN = DESIGN;
    }
})();

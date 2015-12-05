/// <reference path="../CommonScripts/GUI_HELPER.js" />
/// <reference path="SP_BANK.js" />
/// <reference path="GLOBALS.js" />

(function () {
    var DESIGN = { 
        GetContent: function() {
            var communityId = GetQueryStringValue("cid");
            DESIGN.GetCommunity(communityId,DESIGN.FillPage,DESIGN.GetCommunityError);
        },
        GetCommunity: function (communityId, callback, callback_err) {
            try {
               SP_BANK.GetCommunity(communityId, callback, callback_err);
            } catch (err) {
                callback_err();
            }
        },
        FillPage: function(data) {
            $("#lblTitle").html(data.title);
            $("#divDescription").html(data.description);
            var d = new Date(data.creationDate);
            var creationDateString = GUI_HELPER.GetDayName(d.getDay()) + ", " + GUI_HELPER.GetMonthName(d.getMonth()) 
                + " "+ d.getDate() + ", " + d.getFullYear();
            $("#lblCommunityCreationDate").html(creationDateString);
            $("#communityAuthor").html(data.user.name + " " + data.user.surname);
            $("#communityAuthor").attr("href","ViewProfile.html?uid=" + data.user.userId);
            
            $("#btnJoinCommunity").attr("onclick","DESIGN.JoinCommunityClicked(" + data.joinType + ");");
            $("#btnCreateTopic").attr("onclick","DESIGN.RedirectToTopicCreation();");
            
            if(data.topicCreationType == 2){
                $("#btnCreateTopic").hide();
            }
            if(data.meetingCreationType == 2){
                $("#btnCreateMeeting").hide();
            }
            
            var communityId = GetQueryStringValue("cid");
            var userId = GetQueryStringValue("uid");
            
            SP_BANK.GetCommunityMembers(communityId, DESIGN.FillMembers, null);
            GUI_HELPER.GetUserInfo(userId, DESIGN.FillUserInfo, null);
        },
        FillMembers: function(data) {
            $("#lblMemberCount").html(data.length);
            for(var i = 0; i< data.length; i++){
                var nameSurname = data[i].user.name + " " + data[i].user.surname;
                var photoLink = "photos/" + data[i].user.photoLink;
                if(data[i].user.photoLink == null){
                    photoLink = "images/man-icon.png";
                }
                $("#members").append(
                    $("<li>").append(
                        $("<img>")
                            .attr("alt", nameSurname)
                            .attr("title", nameSurname)
                            .attr("class","communityMemberPic")
                            .attr("src", photoLink)
                            .attr("width","40")
                            .attr("height","40")
                            .attr("onclick","DESIGN.ViewUser(" + data[i].user.userId + ");")
                    )
                );
            }

            $("#members").append(
                $("<li>").append(
                    $("<div>").attr("class","item-content").append(
                        $("<div>").attr("class","item-snippet").append(
                            $("<a>").attr("href","community.html?cid=1").html("See all members...")
                        )
                    )
                )
            );
        },
        FillMeetings: function(data) {
            for(var i = 0; i < data.meetings.length; i++){
                var meetingDate = new Date(data.meetings[i].meetingDate);
                var meetingStr = GUI_HELPER.GetDayName(meetingDate.getDay()) + ", " 
                    + GUI_HELPER.GetMonthName(meetingDate.getMonth()) + " " 
                    + meetingDate.getDate() + ", "
                    + meetingDate.getFullYear() + " at "
                    + meetingDate.getHours() + ":" 
                    + meetingDate.getMinutes() + " ("
                    + data.meetings[i].timeZone + "), "
                    + data.meetings[i].location;

                $("#meetings").append(
                    $("<li>").append(
                        $("<div>").attr("class","item-content").append(
                            $("<div>").attr("class","item-snippet").append(meetingStr)
                        ).append(
                            $("<div>").attr("style","clear: both;")
                        )
                    )
                );
            }

            $("#meetings").append(
                $("<li>").append(
                    $("<div>").attr("class","item-content").append(
                        $("<div>").attr("class","item-snippet").append(
                            $("<a>").attr("href","meetinglist.html?cid=" + data.communityId).html("See all...")
                        )
                    )
                )
            );
        },
        FillUserInfo: function(data) {
            var nameSurname = data.name + " " + data.surname;
            $("#lblUserNameSurname").html(nameSurname);
        },
        GetCommunityError: function() {
            alert("An error has occured.");
        },
        ViewUser: function(userId) {
            window.location = "ViewProfile.html?uid=" + userId;
        },
        JoinCommunityClicked: function(joinType) {
            if(joinType == 1) {
                DESIGN.JoinCommunity();
            } else {
                DESIGN.ShowRequestModal();
            }
        },
        CreateTopic: function() {
            var communityId = GetQueryStringValue("cid");
            window.location = "createtopic.html?cid=" + communityId;
        },
        CreateMeeting: function() {
            var communityId = GetQueryStringValue("cid");
            window.location = "createmeeting.html?cid=" + communityId;
        },
        JoinCommunity: function() {
            var userId = GetQueryStringValue("uid");
            var communityId = GetQueryStringValue("cid");
            var roleId = 4;
            SP_BANK.JoinCommunity(userId, communityId, roleId, DESIGN.JoinSuccess, DESIGN.JoinError);
        },
        JoinSuccess: function(data) {
            alert("Congratulations! You have been a member of the community.")
            window.location = window.location;
        },
        JoinError: function(data) {
          alert("An error has been occured. Please contact to community owner.");  
        },
        ShowRequestModal: function() {
            
        },
        SendJoinRequest: function() {
            
        },
        RedirectToTopicCreation: function() {
            var userId = GetQueryStringValue("uid");
            var communityId = GetQueryStringValue("cid");
            window.location = "createtopic.html?uid=" + userId + "&cid=" + communityId;
        }
    } 
    if (!window.DESIGN) { window.DESIGN = DESIGN; }
})();

/// <reference path="../CommonScripts/GUI_HELPER.js" />
/// <reference path="SP_BANK.js" />
/// <reference path="GLOBALS.js" />

(function () {
    var DESIGN = { 
        GetContent: function() {
            var communityId = GetQueryStringValue("cid");
            var uid = GetQueryStringValue("uid");
            if (GUI_HELPER.NOU(uid)&& uid!= ""){
            	GLOBALS.UserId=uid;
            }
            else{
            	GLOBALS.UserId=-1;
            }
            
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
        	if(GUI_HELPER.NOU(data)){
	            $("#lblTitle").html(data.title);
	            $("#divDescription").html(data.description);
	            var d = new Date(data.creationDate);
	            var creationDateString = GUI_HELPER.GetDayName(d.getDay()) + ", " + GUI_HELPER.GetMonthName(d.getMonth()) 
	                + " "+ d.getDate() + ", " + d.getFullYear();
	            $("#lblCommunityCreationDate").html(creationDateString);
	            $("#communityAuthor").html(data.user.name + " " + data.user.surname);
	            $("#communityAuthor").attr("href","ViewProfile.html?uid=" + data.user.userId);
	            
	            if(data.topicCreationType == 1){
                    GLOBALS.canCreateTopic = true;
	            }
	            if(data.meetingCreationType == 1){
                    GLOBALS.canCreateMeeting = true;
	            }
                if(data.joinType == 1) {
                    GLOBALS.canJoin = true;
                }
                if(data.postType == 1) {
                    GLOBALS.canCreatePost = true;
                }
                if(data.resourceAdditionType == 1) {
                    GLOBALS.canAddResource = true;
                }
            }
            var communityId = GetQueryStringValue("cid");
            var userId = GetQueryStringValue("uid");
         	if (GUI_HELPER.NOU(userId)&& userId!= ""){
            	GLOBALS.UserId=userId;
            }
            else{
            	GLOBALS.UserId=-1;
            }
            
            SP_BANK.GetCommunityMembers(communityId, DESIGN.FillMembers, null);
            SP_BANK.GetCommunityTopics(communityId, DESIGN.FillTopics, null);	
            GUI_HELPER.GetUserInfo(userId, DESIGN.FillUserInfo, null);
        },
        FillTopics: function(data) {
            $("#topicList").html("");
            for(var i=0; i< data.length; i++) {
                var communityId = GetQueryStringValue("cid");
                var userId = GetQueryStringValue("uid");
                var topicId = data[i].topicId;
                var topicUrl = "topic.html?cid=" + communityId + "&uid=" + userId + "&tid=" + topicId;
                var topicDate = "";
                if(data[i].creationDate != null) {
                    var d = new Date(data[i].creationDate);
                    topicDate = GUI_HELPER.GetDayName(d.getDay()) + ", " + GUI_HELPER.GetMonthName(d.getMonth()) 
                        + " "+ d.getDate() + ", " + d.getFullYear();
                }
                var creatorName = "Emre Gürer";
                var creatorUrl = "ViewProfile.html?uid=" + data[i].creatorUserId;
                
                $("#topicList").append(
                    $("<li>").append(
                        $("<a>").attr("class","related-post-item-title").attr("title",data[i].title).attr("href",topicUrl).append(data[i].title)
                    ).append(
                        $("<span>").attr("class","related-post-item-summary").append(
                            $("<span>").attr("class","related-post-item-summary-text").append(data[i].description)
                        ).append(
                            $("<span>").attr("style","display:block;clear:both;")
                        )
                    ).append(
                        $("<footer>").attr("class","nbtentry-meta").append(
                            $("<span>").attr("class","nbtpost-date").append(topicDate)
                        ).append(
                            $("<span>").attr("class","nbtbyline").append(
                                $("<span>").append(
                                    $("<a>").attr("href",creatorUrl).attr("rel","author").attr("title","author profile").append(creatorName)
                                )
                            )
                        ).append(
                            $("<span>").attr("class","nbttags-links").append(
                                $("<a>").attr("rel","tag").append("Deneme Tag")
                            )
                        )
                    )
                );
            }
        },
        FillMembers: function(data) {
            if(GUI_HELPER.NOU(data)){
                $("#lblMemberCount").html(data.length);
                GLOBALS.Members= data;
                $("#btnJoinCommunity").attr("style","display:block;"); 
                for(var i = 0; i< data.length; i++){
                    if (GLOBALS.UserId==data[i].user.userId ){
                        GLOBALS.isMember = true;
                        if(data[i].roleId == 3) {
                            GLOBALS.isOwner = true;
                        }
                    }
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
             }
             else{
                 $("#lblMemberCount").html("0");
             }   
            
            DESIGN.ShowHideButtons();
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
        ShowHideButtons: function() {
            var communityId = GetQueryStringValue("cid");
            
            if(GLOBALS.canCreateTopic == false && !GLOBALS.isOwner) {
                $("#btnCreateTopic").hide();
            }
            
            if(GLOBALS.canCreateMeeting == false && !GLOBALS.isOwner) {
                $("#btnCreateMeeting").hide();
            }
            
            if(GLOBALS.canJoin == true) {
                $("#btnJoinCommunity").attr("onclick","DESIGN.JoinCommunity();");
            } else {
                $("#btnJoinCommunity").attr("onclick","DESIGN.ShowRequestModal();");
            }
            
            if(GLOBALS.canAddResource == false && !GLOBALS.isOwner) {
                $("#btnAddResource").hide();
            }
            
            if(GLOBALS.isMember == true) {
                $("#btnJoinCommunity").hide();
            } else {
                $("#btnJoinCommunity").show();
                $("#btnCreateTopic").hide();
                $("#btnCreateMeeting").hide();
                $("#btnAddResource").hide();
                SP_BANK.CheckCommunityRequest(communityId, DESIGN.CheckCommunityRequest, null);
            }
            
            if(GLOBALS.isOwner == false) {
                $("#btnRequests").hide();
            }
        },
        CheckCommunityRequest: function(data) {
            var userId = GetQueryStringValue("uid");
            for(var i = 0; i< data.length; i++) {
                if(userId == data[i].userId) {
                    $("#btnJoinCommunity").val("Waiting for approval");
                    $("#btnJoinCommunity").prop('disabled', true);
                }
            }
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
            alert("You became the member of the community.");
            window.location = window.location;
        },
        JoinError: function(data) {
        	alert("Alert","An error has been occured. Please contact to community owner.");
        },
        ShowRequestModal: function() {
            $("#divRequest").show();
            GUI_HELPER.OPENWINDOW("divRequest","Join Request",true, true, false);
        },
        SendJoinRequest: function() {
            var communityId = GetQueryStringValue("cid");
            var userId = GetQueryStringValue("uid");
            var explanation = $("#txtExplanation").val();
            SP_BANK.SendJoinRequest(communityId, userId, explanation, DESIGN.JoinRequestSuccess, DESIGN.JoinRequestError);
        },
        CancelJoinRequest: function() {
            $("#divRequest").hide();
            GUI_HELPER.CLOSEWINDOW("divRequest");
        },
        JoinRequestSuccess: function() {
            alert("Your join request is sent to owner of the community. When the request is approved, you will be a member of the community.");
            window.location = window.location;
        },
        JoinRequestError: function() {
            GUI_HELPER.ALERT("Alert","An error has been occured. Please contact to community owner.",GUI_HELPER.WARNING);
        },
        RedirectToTopicCreation: function() {
            var userId = GetQueryStringValue("uid");
            var communityId = GetQueryStringValue("cid");
            window.location = "createtopic.html?uid=" + userId + "&cid=" + communityId;
        },
        RedirectToResourceAddition: function() {
            var userId = GetQueryStringValue("uid");
            var communityId = GetQueryStringValue("cid");
        },
        RedirectToMeetingCreation: function() {
            var userId = GetQueryStringValue("uid");
            var communityId = GetQueryStringValue("cid");
            window.location = "createmeeting.html?uid=" + userId + "&cid=" + communityId;
        },
        RedirectToCommunityRequests: function() {
            var userId = GetQueryStringValue("uid");
            var communityId = GetQueryStringValue("cid");
            window.location = "communityrequests.html?uid=" + userId + "&cid=" + communityId;
        }
    } 
    if (!window.DESIGN) { window.DESIGN = DESIGN; }
})();

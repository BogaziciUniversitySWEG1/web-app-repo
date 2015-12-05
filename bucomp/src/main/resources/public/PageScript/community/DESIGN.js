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
	            
	            $("#btnCreateTopic").attr("onclick","DESIGN.RedirectToTopicCreation();");
	            
	            if(data.topicCreationType == 2){
	                $("#btnCreateTopic").hide();
	            }
	            if(data.meetingCreationType == 2){
	                $("#btnCreateMeeting").hide();
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
            if(GLOBALS.UserId>-1){
            	GUI_HELPER.GetUserInfo(GLOBALS.UserId, DESIGN.FillUserInfo, null);
            	$("#btnJoinCommunity").attr("onclick","DESIGN.JoinCommunity();");
            }
            else{
            	$("#btnJoinCommunity").attr("onclick","GUI_HELPER.ALERT('INFO','User cannot be found. Please Log in!',GUI_HELPER.WARNING);");
            }	
        },
        FillMembers: function(data) {
        if(GUI_HELPER.NOU(data)){
            $("#lblMemberCount").html(data.length);
            GLOBALS.Members= data;
            $("#btnJoinCommunity").attr("style","display:block;"); 
            for(var i = 0; i< data.length; i++){
            	if (GLOBALS.UserId==data[i].user.userid ){
            		$("#btnJoinCommunity").attr("style","display:none;");
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
         }   
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
            GUI_HELPER.ALERT("Info","Your join request is sent to owner of the community. When the request is approved, you will be a member of the community",GUI_HELPER.INFO);
            
        },
        JoinError: function(data) {
        	GUI_HELPER.ALERT("Alert","An error has been occured. Please contact to community owner.",GUI_HELPER.WARNING);
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

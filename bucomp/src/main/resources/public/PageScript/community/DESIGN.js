/// <reference path="../CommonScripts/GUI_HELPER.js" />
/// <reference path="SP_BANK.js" />
/// <reference path="GLOBALS.js" />

(function () {
    var DESIGN = {
        GetContent: function () {
            var communityId = GetQueryStringValue("cid");
            var uid = GetQueryStringValue("uid");
            if (GUI_HELPER.NOU(uid) && uid != "") {
                GLOBALS.UserId = uid;
            } else {
                GLOBALS.UserId = -1;
            }

            DESIGN.GetCommunity(communityId, DESIGN.FillPage, DESIGN.GetCommunityError);
        },
        GetCommunity: function (communityId, callback, callback_err) {
            try {
                SP_BANK.GetCommunity(communityId, callback, callback_err);
            } catch (err) {
                callback_err();
            }
        },
        FillUpcomingEvents: function (data) {
            try {
                if (GUI_HELPER.NOU(data)) {
                    var content = "<ul>";

                    $('#upcomingEventsDiv').html("");
                    for (var i = 0; i < data.length; i++) {
                        if (GUI_HELPER.NOU(data[i])) {
                            var meetingPlace = data[i].location;
                            var meetingstarttime = new Date(data[i].startTime);
                            var meetingendtime = new Date(data[i].endTime);
                            var timezone = data[i].timeZone;
                            var meetingid = data[i].meetingId;
                            content += "<li><div class='item-content' id ='upcomingMeetingDiv" + meetingid + "'><div class='item-snippet'>";
                            content += " Meeting On " + meetingstarttime;
                            content += " At " + meetingPlace;
                            content += " </div></div><div style='clear: both;'></div></li> ";
                        }

                        if (i == data.length - 1) {

                            content += " </ul> ";
                            $('#upcomingEventsDiv').html(content);
                        }
                    }
                } else {
                    $('#upcomingEventsDiv').html("<ul><li><div class='item-content'><div class='item-snippet'>There is not any upcoming events...</div></div><div style='clear: both;'></div></li></ul>");
                }
            } catch (err) {
                callback_err();
            }
        },
        FillPage: function (data) {
            var communityId = GetQueryStringValue("cid");
            var userId = GetQueryStringValue("uid");

            if (GUI_HELPER.NOU(data)) {
                $("#lblTitle").html(data.title);
                $("#divDescription").html(data.description);
                var d = new Date(data.creationDate);
                var creationDateString = GUI_HELPER.GetDayName(d.getDay()) + ", " + GUI_HELPER.GetMonthName(d.getMonth()) + " " + d.getDate() + ", " + d.getFullYear();
                $("#lblCommunityCreationDate").html(creationDateString);
                $("#communityAuthor").html(data.user.name + " " + data.user.surname);
                $("#communityAuthor").attr("href", "ViewProfile.html?uid=" + userId + "&vid=" + data.user.userId);

                if (data.topicCreationType == 1) {
                    GLOBALS.canCreateTopic = true;
                }
                if (data.meetingCreationType == 1) {
                    GLOBALS.canCreateMeeting = true;
                }
                if (data.joinType == 1) {
                    GLOBALS.canJoin = true;
                }
                if (data.postType == 1) {
                    GLOBALS.canCreatePost = true;
                }
                if (data.resourceAdditionType == 1) {
                    GLOBALS.canAddResource = true;
                }
            }
            var communityId = GetQueryStringValue("cid");
            var userId = GetQueryStringValue("uid"); 
         	if (GUI_HELPER.NOU(userId)&& userId!= ""){
            	GLOBALS.UserId=userId; 
            	$("#resourceuplaodformframe").contents().find("#hiddenuiforresource").val(userId);
            	$("#resourceuplaodformframe").contents().find("#hiddenciforresource").val(communityId);
            	SP_BANK.GetCommunityResources(communityId, DESIGN.FillCommunityResources, DESIGN.GetCommunityError);
            }
            else{
            	GLOBALS.UserId=-1; 
            }

            SP_BANK.GetCommunityMembers(communityId, DESIGN.FillMembers, DESIGN.GetCommunityError);
            SP_BANK.GetCommunityMeetings(communityId, -1, DESIGN.FillMeetings, DESIGN.GetCommunityError);
            SP_BANK.GetCommunityTopics(communityId, DESIGN.FillTopics, DESIGN.GetCommunityError);
            SP_BANK.GetCommunityTags(communityId, DESIGN.FillTags, DESIGN.GetCommunityError);
            
            //SP_BANK.GetUpcomingEvents(communityId,DESIGN.FillUpcomingEvents,DESIGN.GetCommunityError);

            if (userId != "") {
                GUI_HELPER.GetUserInfo(userId, DESIGN.FillUserInfo, null);
            }
        }, 
       FillCommunityResources: function(data) {
            if(data == null) {
                return;
            }
            $("#resourceList").html("");
            for(var i=0; i< data.length; i++) {
                var communityId = GetQueryStringValue("cid");
                var userId = GetQueryStringValue("uid"); 
                var _link =data[i].link.replace("target/classes/public/","");
                $("#resourceList").append(
                    $("<li>").append(
                        $("<a>").attr("class","related-post-item-title").attr("title",data[i].name).attr("target","_blank").attr("href",_link).append(data[i].name)
                    ) 
                );
            }
        },
        addResource: function() {
            setTimeout(function () { 
                $("#resourceuplaodformframe").attr("src","/uploadresource.html"); 
                setTimeout(function () { 
                	var communityId = GetQueryStringValue("cid");
                    var userId = GetQueryStringValue("uid"); 
	            	$("#resourceuplaodformframe").contents().find("#hiddenuiforresource").val(userId);
	            	$("#resourceuplaodformframe").contents().find("#hiddenciforresource").val(communityId); 
	            },1000);
	    	},2000);
            	
		},
        FillTopics: function(data) { 
            $("#topicList").html("");
            if (data == null) {
                return;
            }
            for (var i = 0; i < data.length; i++) {
                var communityId = GetQueryStringValue("cid");
                var userId = GetQueryStringValue("uid");
                var topicId = data[i].topicId;
                var topicUrl = "topic.html?cid=" + communityId + "&uid=" + userId + "&tid=" + topicId;
                var topicDate = "";
                if (data[i].creationDate != null) {
                    var d = new Date(data[i].creationDate);
                    topicDate = GUI_HELPER.GetDayName(d.getDay()) + ", " + GUI_HELPER.GetMonthName(d.getMonth()) + " " + d.getDate() + ", " + d.getFullYear();
                }
                var creatorName = data[i].user.name + " " + data[i].user.surname;
                var creatorUrl = "ViewProfile.html?uid=" + userId + "&vid=" + data[i].user.userId;
                var tagStr = "";
                if (data[i].tagList != null) {
                    for (var j = 0; j < data[i].tagList.length; j++) {
                        if (j > 0) {
                            tagStr = tagStr + ", ";
                        }

                        tagStr = tagStr + "<a rel=\"tag\">" + data[i].tagList[j].tag + "</a>";
                    }
                }

                $("#topicList").append(
                    $("<li>").append(
                        $("<a>").attr("class", "related-post-item-title").attr("title", data[i].title).attr("href", topicUrl).append(data[i].title)
                    ).append(
                        $("<span>").attr("class", "related-post-item-summary").append(
                            $("<span>").attr("class", "related-post-item-summary-text").append(data[i].description)
                        ).append(
                            $("<span>").attr("style", "display:block;clear:both;")
                        )
                    ).append(
                        $("<footer>").attr("class", "nbtentry-meta").append(
                            $("<span>").attr("class", "nbtpost-date").append(topicDate)
                        ).append(
                            $("<span>").attr("class", "nbtbyline").append(
                                $("<span>").append(
                                    $("<a>").attr("href", creatorUrl).attr("rel", "author").attr("title", "author profile").append(creatorName)
                                )
                            )
                        ).append(
                            $("<span>").attr("class", "nbttags-links").append(tagStr)
                        )
                    )
                );
            }
        },
        FillMembers: function (data) {
            if (GUI_HELPER.NOU(data)) {
                $("#lblMemberCount").html(data.length);
                GLOBALS.Members = data;
                $("#btnJoinCommunity").attr("style", "display:block;");
                for (var i = 0; i < data.length; i++) {
                    if (data[i].user != null && GLOBALS.UserId == data[i].user.userId) {
                        GLOBALS.isMember = true;
                        if (data[i].roleId == 3) {
                            GLOBALS.isOwner = true;
                        }
                    }

                    if (data[i].user != null) {
                        var nameSurname = data[i].user.name + " " + data[i].user.surname; 
                        var photoLink= "/file-repository/users/"+data[i].user.userId+"/"+data[i].user.photoLink;
                        //var photoLink = "photos/" + data[i].user.photoLink;
                        if(data[i].user.photoLink == null){ 
                            photoLink = "images/man-icon.png";
                        }

                        $("#members").append(
                            $("<li>").append(
                                $("<img>")
                                .attr("alt", nameSurname)
                                .attr("title", nameSurname)
                                .attr("class", "communityMemberPic")
                                .attr("src", photoLink)
                                .attr("width", "40")
                                .attr("height", "40")
                                .attr("onclick", "DESIGN.ViewUser(" + data[i].user.userId + ");")
                            )
                        );
                    }



                }

                var communityId = GetQueryStringValue("cid");
                var userId = GetQueryStringValue("uid");
                var membersHtml = "communitymembers.html?cid=" + communityId + "&uid=" + userId;

                $("#members").append(
                    $("<li>").append(
                        $("<div>").attr("class", "item-content").append(
                            $("<div>").attr("class", "item-snippet").append(
                                $("<a>").attr("href", membersHtml).html("See all members...")
                            )
                        )
                    )
                );
            } else {
                $("#lblMemberCount").html("0");
            }

            DESIGN.ShowHideButtons();
        },
        FillMeetings: function (data) {
            $("#meetings").html("");
            $("#upcomingEvents").html("");
            var uid = GetQueryStringValue("uid");
            var cid = GetQueryStringValue("cid");

            if (data == null) {
                return;
            }

            for (var i = 0; i < data.length; i++) {
                var meetingDate = new Date(data[i].startTime);
                var meetingStr = GUI_HELPER.GetDayName(meetingDate.getDay()) + ", " + GUI_HELPER.GetMonthName(meetingDate.getMonth()) + " " + meetingDate.getDate() + ", " + meetingDate.getFullYear() + " at " + meetingDate.getHours() + ":" + meetingDate.getMinutes() + " (" + data[i].timeZone + "), " + data[i].location;

                meetingStr = "<a href='meeting.html?uid=" + uid + "&cid=" + cid + "&mid=" + data[i].meetingId + "'>" + meetingStr + "</a>";

                if (data[i].meetingTypeId != 4) {
                    $("#meetings").append(
                        $("<li>").append(
                            $("<div>").attr("class", "item-content").append(
                                $("<div>").attr("class", "item-snippet").append(meetingStr)
                            ).append(
                                $("<div>").attr("style", "clear: both;")
                            )
                        )
                    );
                }

                var eventStr = "";
                if (data[i].meetingTypeId != 4) {
                    eventStr = "Meeting on " + meetingStr
                } else if (data[i].meetingTypeId == 4) {
                    eventStr = "Event on " + meetingStr
                }

                $("#upcomingEvents").append(
                    $("<li>").append(
                        $("<div>").attr("class", "item-content").append(
                            $("<div>").attr("class", "item-snippet").append(eventStr)
                        )
                    ).append(
                        $("<div>").attr("class", "clear: both;")
                    )
                );
            }

            $("#meetings").append(
                $("<li>").append(
                    $("<div>").attr("class", "item-content").append(
                        $("<div>").attr("class", "item-snippet").append(
                            $("<a>").attr("href", "meetinglist.html?cid=" + data.communityId).html("See all...")
                        )
                    )
                )
            );
        },
        FillTags: function (data) {
            if (data != null) {
                $("#spnTags").html("");
                for (var i = 0; i < data.length; i++) {
                    var tag = data[i].tag;
                    if (i < data.length - 1) {
                        tag = tag + ", ";
                    }
                    $("#spnTags").append(
                        $("<a>").attr("rel", "tag").append(tag)
                    );
                }
            }
        },
        FillUserInfo: function (data) {
            var nameSurname = data.name + " " + data.surname;
            $("#lblUserNameSurname").html(nameSurname);
        },
        ShowHideButtons: function () {
            var communityId = GetQueryStringValue("cid");
            var userId = GetQueryStringValue("uid");

            if (GLOBALS.canCreateTopic == true || GLOBALS.isOwner) {
                $("#btnCreateTopic").show();
            }

            if (GLOBALS.canCreateMeeting == true || GLOBALS.isOwner) {
                $("#btnCreateMeeting").show();
                $("#btnCreateEvent").show();
            }

            if (GLOBALS.canJoin == true) {
                $("#btnJoinCommunity").attr("onclick", "DESIGN.JoinCommunity();");
            } else {
                $("#btnJoinCommunity").attr("onclick", "DESIGN.ShowRequestModal();");
            }

            if (GLOBALS.canAddResource == true || GLOBALS.isOwner) {
                $("#btnAddResource").show();
            }

            if (GLOBALS.isMember == true) {
                $("#btnJoinCommunity").hide();
            } else {
                if (userId == "") {
                    $("#btnJoinCommunity").show();
                    $("#btnJoinCommunity").attr("onclick", "DESIGN.ShowJoinError();");
                } else {
                    $("#btnJoinCommunity").show();
                }

                $("#btnCreateTopic").hide();
                $("#btnCreateMeeting").hide();
                $("#btnAddResource").hide();
                SP_BANK.CheckCommunityRequest(communityId, DESIGN.CheckCommunityRequest, null);
            }

            if (GLOBALS.isOwner == true) {
                $("#btnRequests").show();
            }
        },
        CheckCommunityRequest: function (data) {
            var userId = GetQueryStringValue("uid");
            if (data == null || userId == "") {
                return;
            }
            for (var i = 0; i < data.length; i++) {
                if (userId == data[i].userId) {
                    $("#btnJoinCommunity").val("Waiting for approval");
                    $("#btnJoinCommunity").prop('disabled', true);
                }
            }
        },
        GetCommunityError: function () {
            //alert("An error has occured.");
        },
        ViewUser: function (userId) {
            var uid = GetQueryStringValue("uid");
            window.location = "ViewProfile.html?uid=" + uid + "&vid=" + userId;
        },
        JoinCommunityClicked: function (joinType) {
            if (joinType == 1) {
                DESIGN.JoinCommunity();
            } else {
                DESIGN.ShowRequestModal();
            }
        },
        CreateTopic: function () {
            var communityId = GetQueryStringValue("cid");
            window.location = "createtopic.html?cid=" + communityId;
        },
        CreateMeeting: function () {
            var communityId = GetQueryStringValue("cid");
            window.location = "createmeeeting.html?cid=" + communityId;
        },
        JoinCommunity: function () {
            var userId = GetQueryStringValue("uid");
            var communityId = GetQueryStringValue("cid");
            var roleId = 4;
            SP_BANK.JoinCommunity(userId, communityId, roleId, DESIGN.JoinSuccess, DESIGN.JoinError);
        },
        JoinSuccess: function (data) {
            alert("You became the member of the community.");
            window.location = window.location;
        },
        JoinError: function (data) {
            alert("Alert", "An error has been occured. Please contact to community owner.");
        },
        ShowRequestModal: function () {
            $("#divRequest").show();
            GUI_HELPER.OPENWINDOW("divRequest", "Join Request", true, true, false);
        },
        ShowJoinError: function () {
            alert("Please login to join this community.");
        },
        SendJoinRequest: function () {
            var communityId = GetQueryStringValue("cid");
            var userId = GetQueryStringValue("uid");
            var explanation = $("#txtExplanation").val();
            SP_BANK.SendJoinRequest(communityId, userId, explanation, DESIGN.JoinRequestSuccess, DESIGN.JoinRequestError);
        },
        CancelJoinRequest: function () {
            $("#divRequest").hide();
            GUI_HELPER.CLOSEWINDOW("divRequest");
        },
        JoinRequestSuccess: function () {
            alert("Your join request is sent to owner of the community. When the request is approved, you will be a member of the community.");
            window.location = window.location;
        },
        JoinRequestError: function () {
            GUI_HELPER.ALERT("Alert", "An error has been occured. Please contact to community owner.", GUI_HELPER.WARNING);
        },
        RedirectToTopicCreation: function () {
            var userId = GetQueryStringValue("uid");
            var communityId = GetQueryStringValue("cid");
            window.location = "createtopic.html?uid=" + userId + "&cid=" + communityId;
        },
        RedirectToResourceAddition: function () {
            var userId = GetQueryStringValue("uid");
            var communityId = GetQueryStringValue("cid");
        },
        RedirectToMeetingCreation: function () {
            var userId = GetQueryStringValue("uid");
            var communityId = GetQueryStringValue("cid");
            window.location = "createmeeeting.html?uid=" + userId + "&cid=" + communityId;
        },
        RedirectToEventCreation: function () {
            var userId = GetQueryStringValue("uid");
            var communityId = GetQueryStringValue("cid");
            window.location = "createmeeeting.html?uid=" + userId + "&cid=" + communityId + "&meetingType=event";
        },
        RedirectToCommunityRequests: function () {
            var userId = GetQueryStringValue("uid");
            var communityId = GetQueryStringValue("cid");
            window.location = "communityrequests.html?uid=" + userId + "&cid=" + communityId;
        },
        SearchCommunity: function (key, callback,callback_err) {
            var key = $('#searchByGroupName').val();
            SP_BANK.SearchCommunity(key, callback, callback_err);
        }
    }
    if (!window.DESIGN) {
        window.DESIGN = DESIGN;
    }
})();

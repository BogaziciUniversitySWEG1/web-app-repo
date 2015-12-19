/// <reference path="../CommonScripts/GUI_HELPER.js" />
/// <reference path="SP_BANK.js" />
/// <reference path="GLOBALS.js" />

(function () {
    var DESIGN = { 
        GetContent: function () {
            GLOBALS.UserId = GetQueryStringValue("uid");
            GLOBALS.CommunityId = GetQueryStringValue("cid");
            GLOBALS.MeetingId = GetQueryStringValue("mid");
            SP_BANK.GetMeeting(GLOBALS.MeetingId, DESIGN.FillContent, DESIGN.FillContentError);
        },
        FillContent: function(data) {
            var startDate = new Date(data.startTime);
            var startStr = GUI_HELPER.GetDayName(startDate.getDay()) + ", " 
                + GUI_HELPER.GetMonthName(startDate.getMonth()) + " " 
                + startDate.getDate() + ", "
                + startDate.getFullYear() + " at "
                + startDate.getHours() + ":" 
                + startDate.getMinutes() + " ("
                + data.timeZone;
            
            var endDate = new Date(data.endTime);
            var endStr = GUI_HELPER.GetDayName(endDate.getDay()) + ", " 
                + GUI_HELPER.GetMonthName(endDate.getMonth()) + " " 
                + endDate.getDate() + ", "
                + endDate.getFullYear() + " at "
                + endDate.getHours() + ":" 
                + endDate.getMinutes() + " ("
                + data.timeZone;
            
            $("#lblSubject").html(data.subject);
            $("#divAgenda").html(data.agenda);
            $("#lblStartTime").html(startStr);
            $("#lblEndTime").html(endStr);
            $("#lblLocation").html(data.location);
            
            if(data.status == 0) {
                $("#spnStatus").html("Status: Upcoming");
            } else if(data.status == 1) {
                $("#spnStatus").html("Status: Ongoing");
            } else if(data.status == 2) {
                $("#spnStatus").html("Status: Finished");
            } else if(data.status == 3) {
                $("#spnStatus").html("Status: Cancelled");
            }
            
            if(data.status == 1) {
                $("#btnJoin").show();
            }
            
            GetUserInfo(data.meetingOrganizerUserId, DESIGN.FillOrganizerInfo, null);
            SP_BANK.GetMeetingPosts(GLOBALS.MeetingId, DESIGN.FillMeetingPosts, null);
        },
        FillContentError: function(data) {
            alert(data);
        },
        FillOrganizerInfo: function(data) {
            var nameSurname = data.name + " " + data.surname;
            $("#lblOrganizer").html(nameSurname);
        },
        ReturnToCommunity: function() {
            var url = "community.html?cid=" + GLOBALS.CommunityId + "&uid=" + GLOBALS.UserId;
            window.location = url;
        },
        FillMeetingPosts: function(data) {
            $("#commentList").html("");
            var userId = GetQueryStringValue("uid");
            for(var i = 0; i< data.length; i++) {
                var d = new Date(data[i].postDate);
                var postDateStr = "on " + GUI_HELPER.GetDayName(d.getDay()) + ", " + GUI_HELPER.GetMonthName(d.getMonth()) 
                    + " "+ d.getDate() + ", " + d.getFullYear();
                var userName = "by " + data[i].user.name + " " + data[i].user.surname;
                var userLink = "ViewProfile.html?uid=" + userId + "&vid=" + data[i].user.userId;
                $("#commentList").append(
                    $("<li>").append(
                        $("<a>").attr("class","related-post-item-title").attr("title",data[i].title).append(data[i].title)
                    ).append(
                        $("<span>").attr("class","related-post-item-summary").append(
                            $("<span>").attr("class", "related-post-item-summary-text").append(data[i].post)
                        ).append(
                            $("<span>").attr("style","display:block;clear:both;")
                        )
                    ).append(
                        $("<footer>").attr("class","nbtentry-meta").append(
                            $("<span>").attr("class","nbtpost-date").append(postDateStr)
                        ).append(
                            $("<span>").attr("class","nbtbyline").append(
                                $("<span>").append(
                                    $("<a>").attr("rel","author").attr("href",userLink).attr("title","author profile").append(userName)
                                )
                            )
                        )
                    )
                );
            }
        },
        PostComment: function() {
            var postTypeId = 3;
            var title = $("#txtCommentTitle").val();
            var post = $("#commentBodyField").val();
            var postDate = (new Date).getTime();
            
            SP_BANK.PostComment(GLOBALS.UserId, postTypeId, title, post, GLOBALS.MeetingId, postDate, DESIGN.PostCommentSuccess, DESIGN.PostCommentError);
        },
        PostCommentSuccess: function(data) {
            $("#txtCommentTitle").val("");
            $("#commentBodyField").val("");
            alert("Comment posted successfully.");
            DESIGN.GetContent();
        },
        PostCommentError: function(data) {
            alert("Error occured: " + data.statusText);
        },
        JoinMeeting: function() {
            var userId = GetQueryStringValue("uid");
            var meetingId = GetQueryStringValue("mid");
            SP_BANK.JoinMeeting(userId, meetingId, DESIGN.JoinMeetingSuccess, DESIGN.JoinMeetingError);
        },
        JoinMeetingSuccess: function(data) {
            if(data == "true") {
                var userId = GetQueryStringValue("uid");
                var meetingId = GetQueryStringValue("mid");
                var communityId = GetQueryStringValue("cid");
                var url = "livemeeting.html?uid=" + userId + "&cid=" + communityId + "&mid=" + meetingId;
                window.location = url;
            } else {
                alert("Hata");
            }
        },
        JoinMeetingError: function(data) {
            
        }
    } 
    if (!window.DESIGN) { window.DESIGN = DESIGN; }
})();

/// <reference path="../CommonScripts/GUI_HELPER.js" />
/// <reference path="SP_BANK.js" />
/// <reference path="GLOBALS.js" />

(function () {
    var DESIGN = { 
        myTimeout:0,
        meetingFinishNotification: false,
        GetMeetingInfo: function() {
            GLOBALS.MeetingId = GetQueryStringValue("mid");
            GLOBALS.CommunityId = GetQueryStringValue("cid");
            GLOBALS.UserId = GetQueryStringValue("uid");
            
            $('#search-toggle-nav').slideToggle();
            DESIGN.myToggleClass($("#user-toggle"));
            $('#menu-toggle').removeClass('active');
            
            myTimeout = setInterval(DESIGN.GetMeetingStatus, 2000);
        },
        GetMeetingStatus: function() {
            SP_BANK.GetStatus(DESIGN.GetMeetingStatusSuccess, DESIGN.GetMeetingStatusError);
        },
        GetMeetingStatusSuccess: function(data) {
            if(data != null) {
                if(data.status == 1) {
                    DESIGN.GetContent();
                    DESIGN.GetAttendants();
                } else {
                    $("#commentField").attr("disabled","disabled");
                    $("#btnSend").attr("disabled","disabled");
                    clearTimeout(DESIGN.myTimeout);
                    if(!DESIGN.meetingFinishNotification) {
                        DESIGN.meetingFinishNotification = true;
                        swal({   title: "Online meeting",   text: "Meeting session has ended.",   type: "info",   confirmButtonText: "OK" });
                    }
                }
            } else {
                DESIGN.GetContent();
                DESIGN.GetAttendants();
            }
        },
        GetMeetingStatusError: function(data) {
            DESIGN.GetContent();
            DESIGN.GetAttendants();
        },
        GetAttendants: function() {
            SP_BANK.GetAttendants(DESIGN.FillAttendants, DESIGN.FillAttendantsError);
        },
        FillAttendants: function(data) {
            $("#attendants").html("");
            for(var i = 0; i < data.length; i++) {
                var photoLink = "file-repository/users/" + data[i].userId + "/" + data[i].photoLink;
                var profileLink = "ViewProfile.html?uid=" + GLOBALS.UserId + "&vid=" + data[i].userId;
                var nameSurname = data[i].name + " " + data[i].surname;
                $("#attendants").append(
                    $("<li>").append(
                        $("<div>").attr("class","item-content").append(
                            $("<div>").attr("class","item-snippet").append(
                                $("<img>").append("src",photoLink).attr("width","40").attr("height","40")
                            ).append(
                                $("<a>").attr("href",profileLink).attr("target","_blank").append(nameSurname)
                            )
                        )
                    ).append(
                        $("<div>").attr("style","clear: both;")
                    )
                );
            }
        },
        FillAttendantsError: function(data) {
            
        },
        GetContent: function() {
            SP_BANK.GetContent(DESIGN.FillContent, DESIGN.FillContentError);
        },
        FillContent: function(data) {
            $("#speechAreaField").val(data);
        },
        FillContentError: function(data) {
            
        },
        PostContent: function() {
            SP_BANK.PostContent(DESIGN.PostContentSuccess, DESIGN.PostContentError);
            $("#commentField").val("");
        },
        PostContentSuccess: function(data) {
            
        },
        PostContentError: function(data) {
            
        },
        FinishMeeting: function(data) {
            SP_BANK.FinishMeeting(DESIGN.FinishMeetingSuccess, DESIGN.FinishMeetingError);
        },
        FinishMeetingSuccess: function(data) {
            swal({   title: "Online meeting",   text: "Meeting session has ended.",   type: "success",   confirmButtonText: "OK" });
            meetingFinishNotification = true;
        },
        FinishMeetingError: function(data) {
            swal({   title: "Error",   text: "An error has occurred!",   type: "error",   confirmButtonText: "OK" });
        },
        ShowAgenda: function() {
            var url = "meetingagenda.html?mid=" + GLOBALS.MeetingId;
            window.open(url, "_blank");
        },
        ReturnToCommunity: function() {
            var url = "community.html?cid=" + GLOBALS.CommunityId + "&uid=" + GLOBALS.UserId;
            window.location = url;
        },
        myToggleClass: function ($myvar) {
            if ($myvar.hasClass('active')) {
                $myvar.removeClass('active');
            } else {
                $myvar.addClass('active');
        }
    }
    } 
    
    if (!window.DESIGN) { window.DESIGN = DESIGN; }
})();

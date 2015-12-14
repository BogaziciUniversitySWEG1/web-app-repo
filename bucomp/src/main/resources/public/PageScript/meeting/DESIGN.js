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
            
            
            GetUserInfo(data.meetingOrganizerUserId, DESIGN.FillOrganizerInfo, null);
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
        }
    } 
    if (!window.DESIGN) { window.DESIGN = DESIGN; }
})();

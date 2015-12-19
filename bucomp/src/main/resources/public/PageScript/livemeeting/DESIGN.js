/// <reference path="../CommonScripts/GUI_HELPER.js" />
/// <reference path="SP_BANK.js" />
/// <reference path="GLOBALS.js" />

(function () {
    var DESIGN = { 
        GetMeetingInfo: function() {
            GLOBALS.MeetingId = GetQueryStringValue("mid");
            GLOBALS.CommunityId = GetQueryStringValue("cid");
            GLOBALS.UserId = GetQueryStringValue("uid");
            
            $('#search-toggle-nav').slideToggle();
            DESIGN.myToggleClass($("#user-toggle"));
            $('#menu-toggle').removeClass('active');
            
            DESIGN.GetAttendants();
            setInterval(DESIGN.GetContent,1000);
        },
        GetAttendants: function() {
            
        },
        FillAttendants: function(data) {
            
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

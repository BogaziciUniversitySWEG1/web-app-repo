/// <reference path="../CommonScripts/GUI_HELPER.js" />
/// <reference path="SP_BANK.js" />
/// <reference path="GLOBALS.js" />

(function () {
    var DESIGN = { 
        GetMeetingInfo: function() {
            GLOBALS.MeetingId = GetQueryStringValue("mid");
            SP_BANK.GetContent(GLOBALS.MeetingId, DESIGN.FillAgenda, null);
            
            $('#search-toggle-nav').slideToggle();
            DESIGN.myToggleClass($("#user-toggle"));
            $('#menu-toggle').removeClass('active');
        },
        FillAgenda: function(data) {
            $("#lblTitle").html(data.subject + " Agenda");
            $("#divDescription").html(data.agenda);
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

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
            
            setInterval(DESIGN.GetContent,2000);
            setInterval(DESIGN.GetAttendants,2000);
        },
        GetAttendants: function() {
            SP_BANK.GetAttendants(DESIGN.FillAttendants, DESIGN.FillAttendantsError);
        },
        FillAttendants: function(data) {
            $("#attendants").html("");
            for(var i = 0; i < data.length; i++) {
                var photoLink = "file-repository/users/" + data[i].userId + "/" + data[i].photoLink;
                var profileLink = "viewprofile.html?uid=" + GLOBALS.UserId + "&vid=" + data[i].userId;
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

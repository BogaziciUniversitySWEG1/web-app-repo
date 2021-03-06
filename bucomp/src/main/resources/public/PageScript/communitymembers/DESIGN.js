/// <reference path="../CommonScripts/GUI_HELPER.js" />
/// <reference path="SP_BANK.js" />
/// <reference path="GLOBALS.js" />

(function () {
    var DESIGN = { 
    	GetCommunityInfo: function() {
            GLOBALS.CommunityId = GetQueryStringValue("cid");
            GLOBALS.UserId = GetQueryStringValue("uid");
            SP_BANK.GetCommunityInfo(GLOBALS.CommunityId, DESIGN.FillCommunityInfo, GUI_HELPER.SERVICE_CALLBACK_ERR);
        },
        FillCommunityInfo(data) {
            if(data != null) {
                var communityLink = "community.html?cid=" + GLOBALS.CommunityId + "&uid=" + GLOBALS.UserId;
                $("#lblTitle").attr("href", communityLink);
                $("#lblTitle").html(data.title);
                DESIGN.GetCommunityMembers();
            }
            else{
             GUI_HELPER.ALERT('info', 'Community is not found',GUI_HELPER.WARNING);
            	
            }
        },
        GetCommunityMembers() {
            SP_BANK.GetCommunityMembers(GLOBALS.CommunityId, DESIGN.FillCommunityMembers, GUI_HELPER.SERVICE_CALLBACK_ERR);
        },
        FillCommunityMembers(data) {
            if(data != null) {
                $("#divMembers").html("");
                for(var i = 0; i < data.length; i++) {
                	var imageLink="api/resources/download?uid="+data[i].user.userId+"&fileName="+data[i].user.photoLink;
                	//var imageLink= "/file-repository/users/"+data[i].user.userId+"/"+ data[i].user.photoLink;
                	var nameSurnameProfession = data[i].user.name + " " + data[i].user.surname + " - " + data[i].user.profession;
                    var userLink = "ViewProfile.html?uid=" + GLOBALS.UserId + "&vid=" + data[i].user.userId;
                    var mailLink = "mailto:" + data[i].user.email;
                    $("#divMembers").append(
                        $("<div>").attr("class","form-group").append(
                            $("<img>").attr("src",imageLink).attr("width","40").attr("height","40")
                        ).append(
                            $("<label>").attr("style","cursor:pointer").attr("onclick","DESIGN.ViewMember(" + data[i].user.userId + ");").append(nameSurnameProfession)
                        ).append(
                            $("<a>").attr("href", mailLink).append("(" + data[i].user.email + ")")
                        )
                    ).append(
                        $("<div>").attr("class","clear: both;")
                    );
                }
            }
        },
        ViewMember: function(userId) {
            window.location = "ViewProfile.html?uid=" + GLOBALS.UserId + "&vid=" + userId;
        },
        ReturnToCommunity: function() {
            window.location = "community.html?cid=" + GLOBALS.CommunityId + "&uid=" + GLOBALS.UserId;
        }
    } 
    if (!window.DESIGN) { window.DESIGN = DESIGN; }
})();

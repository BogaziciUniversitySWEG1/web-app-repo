/// <reference path="../CommonScripts/GUI_HELPER.js" />
/// <reference path="SP_BANK.js" />
/// <reference path="GLOBALS.js" />
(function () {
    var DESIGN = {
        GetCommunities: function (callback, callback_err) {
            try {
                SP_BANK.GetCommunities(callback, callback_err);
            } catch (err) {
                callback_err();
            }
        },
        GetCommunitiesByTitle: function (callback, callback_err) {
            try {
                SP_BANK.GetCommunitiesByTitle(callback, callback_err);
            } catch (err) {
                callback_err();
            }
        },
        GetCommunitiesByCreationDate: function (callback, callback_err) {
            try {
                SP_BANK.GetCommunitiesByCreationDate(callback, callback_err);
            } catch (err) {
                callback_err();
            }
        },
        GetCommunitiesByMemberCount: function (callback, callback_err) {
            try {
                SP_BANK.GetCommunitiesByMemberCount(callback, callback_err);
            } catch (err) {
                callback_err();
            }
        },
        SearchCommunity: function () {
            var key = $('#searchByGroupName').val();

            SP_BANK.SearchCommunity(key, DESIGN.SearchCommunitySuccess, DESIGN.SearchCommunityError);

        },
        SearchCommunitySuccess: function (data) {

            DESIGN.FillC(data);


        },
        SearchCommunityError: function (data) {
            console.log(data);
        },
        GetPopularTags: function () {
            SP_BANK.GetPopularTags(DESIGN.FillPopularTags, null);
        },
        FillPopularTags: function (data) {
            if (data != null) {
                $("#popularTags").html("");
                for (var i = 0; i < data.length; i++) {
                    $("#popularTags").append(
                        $("<li>").append(
                            $("<a>").attr("dir", "ltr").append(data[i].tagName)
                        ).append(
                            $("<span>").attr("dir", "ltr").append("(" + data[i].tagCount + ")")
                        )
                    );
                }
            } else {
            	$("#popularTags").html("No Communities");
            }
        },
        JoinCommunity: function (communityId) {
            var userId = GetQueryStringValue("uid");
            var roleId = 4;
            SP_BANK.JoinCommunity(userId, communityId, roleId, DESIGN.JoinSuccess, DESIGN.JoinError);
        },
        JoinSuccess: function (userId, communityId) {
            var url = "community.html?uid=" + userId + "&cid=" + communityId;
            window.location = url;
        },
        JoinError: function (data) {
            alert("Alert", "An error has been occured. Please contact to community owner.");
        },
        ShowRequestModal: function (communityId) {
            $("#spnCommunityId").html(communityId);
            $("#divRequest").show();
            GUI_HELPER.OPENWINDOW("divRequest", "Join Request", true, true, false);
        },
        SendJoinRequest: function () {
            var communityId = $("#spnCommunityId").html();
            var userId = GetQueryStringValue("uid");
            var explanation = $("#txtExplanation").val();
            SP_BANK.SendJoinRequest(communityId, userId, explanation, DESIGN.JoinRequestSuccess, DESIGN.JoinRequestError);
            $("#spnCommunityId").html("");
        },
        CancelJoinRequest: function () {
            $("#divRequest").hide();
            GUI_HELPER.CLOSEWINDOW("divRequest");
        },
        JoinRequestSuccess: function (data, communityId) {
            alert("Your join request is sent to owner of the community. When the request is approved, you will be a member of the community.");
            var url = "community.html?cid=" + communityId + "&uid=" + GetQueryStringValue("uid");
            window.location = url;
        },
        JoinRequestError: function (data, communityId) {
            GUI_HELPER.ALERT("Alert", "An error has been occured. Please contact to community owner.", GUI_HELPER.WARNING);
        },

        FillC: function (data) {

            if (data) {

                var communityCounter = 4;
                $("#communityler").html("");
                $("#lblCommunityCount").html(data.length);
                if (data.length < 4) {
                    communityCounter = data.length;
                }
                GLOBALS.communityCount = communityCounter;
                GLOBALS.Communities = data;
                for (var i = 0; i < communityCounter; i++) {
                    var title = data[i].title;
                    var description = data[i].description.substring(0, 200);
                    description = description + "...";
                    var membercount = data[i].memberCount;

                    var tags = "";
                    for (var j = 0; j < data[i].tagsList.length; j++) {
                        var tagItem = "<a rel=\"tag\">" + data[i].tagsList[j].tag + "</a>";
                        tags = tags + tagItem;
                        if (j < data[i].tagsList.length - 1) {
                            tags = tags + ", ";
                        }
                    }

                    var d = new Date(data[i].creationDate);
                    var creationDateString = "Created on: " + GUI_HELPER.GetDayName(d.getDay()) + ", " + GUI_HELPER.GetMonthName(d.getMonth()) + " " + d.getDate() + ", " + d.getFullYear();

                    var communitydetailpage = "community.html?cid=" + data[i].communityId;
                    var uid = GetQueryStringValue("uid");
                    if (uid != "") {
                        communitydetailpage = communitydetailpage + "&uid=" + uid;
                    }


                    var joinButton = '<a style="cursor: pointer" class="nbtjoin-link" onclick="JoinCommunity(' + data[i].communityId + ',' + data[i].joinType + ');">Join</a>';
                    for (var j = 0; j < data[i].memberList.length; j++) {
                        if (uid == data[i].memberList[j]) {
                            joinButton = "";
                        }
                    }
                    $("#loading").hide();

                    $("#communityler").append('<div class="date-outer"><h2 class="date-header"><span>Sunday, September 5, 2010</span>' + '</h2><div class="date-posts"><div class="post-outer"><article class="post hentry"><a name="4682800689275728420"></a>' + '<header class="entry-header"><h2 class="post-title entry-title"><a href="' + communitydetailpage + '">' + title + '</a>' + '</h2></header><div class="post-header-line-1"></div><div class="post-body entry-content">' + '<div id="summary4682800689275728420"><div>' + description + '</div></div>' + '<div style="float:right;padding-right:10px;margin-top:10px;">' + ' <a class="nbtmore-link" href="' + communitydetailpage + '">Community Details</a></div>' + '<div style="float:right;padding-right:10px;margin-top:10px;">' + joinButton + '</div><div style="clear: both;"></div></div><footer class="nbtentry-meta">' + '<span class="nbtpost-date">' + creationDateString + '</span><span class="nbtbyline"><span><a ' + 'rel="author" title="author profile">' + membercount + ' Participants</a></span></span><span class="nbttags-links">' + tags + '</span>' + '</footer></article><div style="clear: both;"></div></div></div></div>'

                    );
                }

                DESIGN.GetPopularTags();
            }
            else{
                $("#lblCommunityCount").html("0");
                $("#communityler").html("No communities found.");
            }
        }

    }
    if (!window.DESIGN) {
        window.DESIGN = DESIGN;
    }
})();

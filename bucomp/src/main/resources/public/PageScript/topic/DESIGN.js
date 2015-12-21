/// <reference path="../CommonScripts/GUI_HELPER.js" />
/// <reference path="SP_BANK.js" />
/// <reference path="GLOBALS.js" />

(function () {
    var DESIGN = { 
        GetContent: function() {
            var topicId = GetQueryStringValue("tid");
            SP_BANK.GetContent(topicId, DESIGN.FillContent, null);
        }, 
        FillContent: function(data) {
            var topicId = GetQueryStringValue("tid");
            var d = new Date(data.creationDate);
            var creationDateString = GUI_HELPER.GetDayName(d.getDay()) + ", " + GUI_HELPER.GetMonthName(d.getMonth()) 
	                + " "+ d.getDate() + ", " + d.getFullYear();
            $("#lblTitle").html(data.title);
            $("#divDescription").html(data.description);
            $("#communityAuthor").html("Emre Gürer");
            $("#lblCommunityCreationDate").html(creationDateString);
            $("#tagList").html("");
            for(var i = 0; i < data.tagList.length; i++) {
                if(i > 0) {
                    $("#tagList").append(", ")
                }
                
                $("#tagList").append(
                    $("<a>").attr("rel","tag").append(data.tagList[i].tag)
                );
            }
            SP_BANK.GetComments(topicId, DESIGN.FillComments, null);
        },
        PostComment: function() {
            var topicId = GetQueryStringValue("tid");
            var userId = GetQueryStringValue("uid");
            var postTypeId = GLOBALS.postTypeId;
            var title = $("#txtCommentTitle").val();
            var post = $("#commentBodyField").val();
            var associatedObjectId = topicId;
            var postDate = (new Date).getTime();
            
            SP_BANK.PostComment(userId, postTypeId, title, post, associatedObjectId, postDate, DESIGN.PostCommentSuccess, DESIGN.PostCommentError);
        },
        PostCommentSuccess: function(data) {
            $("#txtCommentTitle").val("");
            $("#commentBodyField").val("");
            DESIGN.GetContent();
        },
        PostCommentError: function(data) {
            alert("Error occured: " + data.statusText);
        },
        FillComments: function(data) {
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
        ReturnToCommunity: function() {
            var userId = GetQueryStringValue("uid");
            var communityId = GetQueryStringValue("cid");
            var url = "community.html?cid=" + communityId + "&uid=" + userId;
            window.location = url;
        }
    }
    
    if (!window.DESIGN) { window.DESIGN = DESIGN; }
})();
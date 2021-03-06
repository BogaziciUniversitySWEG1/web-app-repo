/// <reference path="../CommonScripts/GUI_HELPER.js" />
/// <reference path="SP_BANK.js" />
/// <reference path="GLOBALS.js" />

(function () {

    var DESIGN = {
        SAVE: function () {
            try {
                var userId = GetQueryStringValue("uid");
                var title = $("#txtTitle").val();
                var description = $("#txtDescription").val().replace(/\n/g,"<br/>");
                var createrUserId = userId;
                var creationDate = (new Date).getTime();
                var accessType = $('input[name=accessType]:checked').val();
                var joinType = $('input[name=joinType]:checked').val();
                var postType = $('input[name=postType]:checked').val();
                var meetingCreationType = $('input[name=meetingCreationType]:checked').val();
                var resourceAdditionType = $('input[name=resourceAdditionType]:checked').val();
                var topicCreationType = $('input[name=topicCreationType]:checked').val();
                var InviteeList = new Array();
                $("#lstInvitation option").each(function () {
                    InviteeList.push($(this).text());
                });

                SP_BANK.SAVE(title, description, creationDate, createrUserId, accessType, joinType, postType, meetingCreationType, resourceAdditionType, topicCreationType, InviteeList, DESIGN.SaveSuccess, DESIGN.SaveError);
            } catch (err) {
                GUI_HELPER.ALERT('test', err, GUI_HELPER.ERROR);
            }
        },
        SaveSuccess: function (data) {
            GLOBALS.CommunityId = data.communityId;
            DESIGN.SaveTags(GLOBALS.CommunityId);
        },
        SaveTags: function (communityId) {
            SP_BANK.SaveTags(communityId, GLOBALS.tagList, DESIGN.SaveTagsSuccess, DESIGN.SaveTagsError);
        },
        SaveTagsSuccess: function (data) {
            var userId = GetQueryStringValue("uid");
            window.location = "community.html?cid=" + GLOBALS.CommunityId + "&uid=" + userId;
        },
        SaveTagsError: function (data) {
            var userId = GetQueryStringValue("uid");
            window.location = "community.html?cid=" + GLOBALS.CommunityId + "&uid=" + userId;
        },
        SaveError: function (data) {
            alert("Error occured. Please contact to your system administrator.");
        },
        CANCEL: function () {
            var userId = GetQueryStringValue("uid");
            var url = "dashboard.html?uid=" + userId;
            window.location = url;
        },
        AddTag: function () {
            var tag = $("#txtSemantic").val();
            GLOBALS.tagList.push(tag);
            DESIGN.CallSemanticTags(tag);
            DESIGN.RefreshTagList();
            $("#txtSemantic").val("");
        },
        AddSemTag: function (tag) {
            GLOBALS.tagList.push(tag);
            DESIGN.RemoveSemTag(tag);
        },
        RemoveTag: function (tag) {
            var index = GLOBALS.tagList.indexOf(tag);
            GLOBALS.tagList.splice(index, 1);
            DESIGN.RefreshTagList();
        },
        RemoveSemTag: function (tag) {
            var index = GLOBALS.semTagList.indexOf(tag);
            GLOBALS.semTagList.splice(index, 1);
            DESIGN.RefreshTagList();
        },
        CallSemanticTags: function (tag) {
            SP_BANK.CallSemanticTags(tag, DESIGN.CallSemanticsSuccess, GUI_HELPER.SERVICE_CALLBACK_ERR);
        },
        CallSemanticsSuccess: function (data) {
            GLOBALS.semTagList = [];
            for (var i = 0; i < data.length; i++) {
                var obj = data[i];
                GLOBALS.semTagList.push(obj.label);
            }
            DESIGN.RefreshTagList();
        },
        RefreshTagList: function () {
            var tagContent = "";
            var semTagContent = "";
            for (var i = 0; i < GLOBALS.tagList.length; i++) {
                tagContent = tagContent + "<img src='images/Delete.png' onclick='DESIGN.RemoveTag(\"" + GLOBALS.tagList[i] + "\");' width='16' />";
                tagContent = tagContent + "<a rel='tag'>" + GLOBALS.tagList[i] + "</a>";
                if (i < GLOBALS.tagList.length - 1) {
                    tagContent = tagContent + ", ";
                }
            }

            for (var i = 0; i < GLOBALS.semTagList.length; i++) {
                semTagContent = semTagContent + "<img src='images/add.png' onclick='DESIGN.AddSemTag(\"" + GLOBALS.semTagList[i] + "\");' width='16' />";
                semTagContent = semTagContent + "<a rel='tag'>" + GLOBALS.semTagList[i] + "</a>";
                if (i < GLOBALS.semTagList.length - 1) {
                    semTagContent = semTagContent + ", ";
                }
            }

            $("#tagSpan").html(tagContent);
            $("#semTagSpan").html(semTagContent);
        },
        AddInvitation: function () {
            var email = $("#txtInvitation").val();
            var emailExists = false;
            $("#lstInvitation option").each(function () {
                if ($(this).text() == email) {
                    emailExists = true;
                }
            });

            if (emailExists == true) {
                alert("Email address exists.");
                $("#txtInvitation").val("");
                return;
            }

            if (IsEmail(email)) {
                GLOBALS.invitationList.push(email);
                $("#txtInvitation").val("");

                $('#lstInvitation').append($('<option>', {
                    value: email,
                    text: email
                }));
            } else {
                alert("Please enter a valid email address.");
            }
        },
        RemoveInvitation: function () {
            var index = $("#lstInvitation option:selected").index();
            if (index > -1) {
                GLOBALS.invitationList.splice(index, 1);
                $("#lstInvitation option:selected").remove();
            } else {
                alert("Please select an email address.");
            }
        }
    }
    if (!window.DESIGN) {
        window.DESIGN = DESIGN;
    }
})();

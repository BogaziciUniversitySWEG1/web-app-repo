/// <reference path="../CommonScripts/GUI_HELPER.js" />
/// <reference path="SP_BANK.js" />
/// <reference path="GLOBALS.js" />

(function () {
    var DESIGN = { 
        SAVE: function () {
            try {
                var userId = GetQueryStringValue("uid");
                var title = $("#txtTitle").val();
                var description = $("#txtDescription").val();
                var createrUserId = userId;
                var creationDate = (new Date).getTime();
                var accessType = $('input[name=accessType]:checked').val();
                var joinType = $('input[name=joinType]:checked').val();
                var postType = $('input[name=postType]:checked').val();
                var meetingCreationType = $('input[name=meetingCreationType]:checked').val();
                var resourceAdditionType = $('input[name=resourceAdditionType]:checked').val();
                var topicCreationType = $('input[name=topicCreationType]:checked').val();
               SP_BANK.SAVE(title, description, creationDate, createrUserId, accessType, joinType, postType, meetingCreationType, resourceAdditionType, topicCreationType, GLOBALS.tagList, GLOBALS.invitationList, DESIGN.SaveSuccess, DESIGN.SaveError);
            } catch (err) {
                GUI_HELPER.ALERT('test', err, GUI_HELPER.ERROR);
            }
        },
        SaveSuccess: function(data) {
            var userId = GetQueryStringValue("uid");
            alert("Successfully saved. Redirecting to community page.");
            window.location = "community.html?cid=" + data.communityId + "&uid=" + userId;
        },
        SaveError: function(data) {
            alert("Error occured. Please contact to your system administrator.");
        },
        CANCEL: function() {
            var userId = GetQueryStringValue("uid");
            var url = "dashboard.html?uid=" + userId;
            window.location = url;
        },
        GetUserInfo: function() {
            var userId = GetQueryStringValue("uid");
            GUI_HELPER.GetUserInfo(userId, DESIGN.FillUserInfo, null);
        },
        FillUserInfo: function(data) {
            var nameSurname = data.name + " " + data.surname;
            $("#lblUserNameSurname").html(nameSurname);
        },
        AddTag: function() {
            var tag = $("#txtSemantic").val();
            GLOBALS.tagList.push(tag);
            DESIGN.RefreshTagList();
            $("#txtSemantic").val("");
        },
        RemoveTag: function(tag) {
            var index = GLOBALS.tagList.indexOf(tag);
            GLOBALS.tagList.splice(index,1);
            DESIGN.RefreshTagList();
        },
        RefreshTagList: function() {
            var tagContent = "";
            for(var i = 0; i< GLOBALS.tagList.length; i++){
                tagContent = tagContent + "<img src='images/Delete.png' onclick='DESIGN.RemoveTag(\"" + GLOBALS.tagList[i] + "\");' width='16' />";
                tagContent = tagContent + "<a rel='tag'>" + GLOBALS.tagList[i] + "</a>";
                if(i<GLOBALS.tagList.length-1){
                    tagContent = tagContent + ", ";
                }
            }
            $("#tagSpan").html(tagContent);
        },
        AddInvitation: function() {
            var email = $("#txtInvitation").val();
            var emailExists = false;
            $("#lstInvitation option").each(function() {
               if($(this).text() == email) {
                   emailExists = true;
               }
            });
            
            if(emailExists == true) {
                alert("Email address exists.");
                $("#txtInvitation").val("");
                return;
            }
            
            if(IsEmail(email)){
                GLOBALS.invitationList.push(email);
                $("#txtInvitation").val("");

                $('#lstInvitation').append($('<option>', {
                    value: email,
                    text: email
                }));
            }else{
                alert("Please enter a valid email address.");
            }
        },
        RemoveInvitation: function() {
            var index = $("#lstInvitation option:selected").index();
            if(index > -1){
                GLOBALS.invitationList.splice(index,1);
                $("#lstInvitation option:selected").remove();
            } else{
                alert("Please select an email address.");
            }
        }
    } 
    if (!window.DESIGN) { window.DESIGN = DESIGN; }
})();

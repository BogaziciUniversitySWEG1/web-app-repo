/// <reference path="GLOBALS.js" />

(function () {
    var SP_BANK = {
        SAVE: function (title, description, creationDate, createrUserId, accessType, joinType, postType, meetingCreationType, resourceAdditionType, topicCreationType, tagList, invitationList, callback, callback_err) {
            try {
                var jsonObj = new Object;
                jsonObj.title = title;
                jsonObj.description = description;
                jsonObj.creationDate = creationDate;
                //jsonObj.createrUserId = createrUserId;
                jsonObj.user = new Object();
                jsonObj.user.userId = createrUserId;
                jsonObj.accessType = accessType;
                jsonObj.joinType = joinType;
                jsonObj.postType = postType;
                jsonObj.meetingCreationType = meetingCreationType;
                jsonObj.resourceAdditionType = resourceAdditionType;
                jsonObj.topicCreationType = topicCreationType;
                jsonObj.tagList = tagList;
                jsonObj.invitationList = invitationList;
                
                var jsonStr = JSON.stringify(jsonObj);
                
                $.ajax({
                    type: "POST",
                    url: GLOBALS.ServiceParameter + "/communities",
                    data: jsonStr,
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    success: function (msg) {
                        if (msg == null) {
                            if (typeof callback == 'function') {
                                callback(null);
                            }
                        }
                        else{
                            var _data = eval(msg);
                            callback(_data);
                        }
                    },
                    error: function (msg) {
                        if (typeof callback_err == 'function') {
                            callback_err(-1, 'TEST');
                        }
                    }
                });
            }
            catch (err) {
                if (typeof callback_err == 'function') {
                    callback_err(-2, 'TEST');
                }
            }
        } 
    }
    if (!window.SP_BANK) { window.SP_BANK = SP_BANK; }
})();

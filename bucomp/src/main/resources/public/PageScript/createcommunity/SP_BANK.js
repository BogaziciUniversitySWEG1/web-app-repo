/// <reference path="GLOBALS.js" />

(function () {
    var SP_BANK = {
        SAVE: function (title, description, creationDate, createrUserId, accessType, joinType, postType, meetingCreationType, resourceAdditionType, topicCreationType, callback, callback_err) {
            try {
                var jsonObj = new Object;
                jsonObj.title = title;
                jsonObj.description = description;
                jsonObj.creationDate = creationDate;
                jsonObj.user = new Object();
                jsonObj.user.userId = createrUserId;
                jsonObj.accessType = accessType;
                jsonObj.joinType = joinType;
                jsonObj.postType = postType;
                jsonObj.meetingCreationType = meetingCreationType;
                jsonObj.resourceAdditionType = resourceAdditionType;
                jsonObj.topicCreationType = topicCreationType;
                
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
                            callback_err(msg);
                        }
                    }
                });
            }
            catch (err) {
                if (typeof callback_err == 'function') {
                    callback_err(-2, 'TEST');
                }
            }
        } ,
        SaveTags: function(communityId, tagList, callback, callback_err) {
            try {
                var jsonObj = new Array();
                for(var i = 0; i < tagList.length; i++) {
                    var tagObj = new Object;
                    tagObj.tag = tagList[i];
                    tagObj.semantic = "";
                    jsonObj.push(tagObj);
                }

                var jsonStr = JSON.stringify(jsonObj);
                
                $.ajax({
                    type: "POST",
                    url: GLOBALS.ServiceParameter + "/tags/communityTags/" + communityId,
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
                            callback_err(msg);
                        }
                    }
                });
            } catch(err) {
                callback_err(err);
            }
        }
    }
    if (!window.SP_BANK) { window.SP_BANK = SP_BANK; }
})();

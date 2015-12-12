/// <reference path="GLOBALS.js" />

(function () {
    var SP_BANK = {
        SAVE: function (title, description, communityId, userId, creationDate, callback, callback_err) {
            try {
                var form = new FormData();
                form.append("title", title);
                form.append("description", description);
                form.append("communityId", communityId);
                form.append("creatorUserId", userId);
                
                var settings = {
                    "async": true,
                    "crossDomain": true,
                    "url": "api/topics",
                    "method": "POST",
                    "headers": {
                        "cache-control": "no-cache",
                        "postman-token": "38db6183-c7ee-1717-6ce3-e1e485ec518d"
                    },
                    "processData": false,
                    "contentType": false,
                    "mimeType": "multipart/form-data",
                    "data": form
                }
                
                $.ajax(settings).done(function (response) {
                    callback(response); 
                });
            }
            catch (err) {
                if (typeof callback_err == 'function') {
                    callback_err(err);
                }
            }
        },
        SaveTopicTags: function(topicId, tagList, callback, callback_err) {
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
                    url: GLOBALS.ServiceParameter + "/tags/topicTags/" + topicId,
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

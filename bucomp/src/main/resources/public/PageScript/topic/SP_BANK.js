/// <reference path="GLOBALS.js" />

(function () {
    var SP_BANK = {
        PostComment: function(userId, postTypeId, title, post, associatedObjectId, postDate, callback, callback_err) {
            try {
                var jsonObj = new Object;
                jsonObj.title = title;
                jsonObj.post = post;
                jsonObj.postTypeId = postTypeId;
                jsonObj.associatedObjectId = associatedObjectId;
                jsonObj.postDate = postDate;
                jsonObj.userId = userId;
                jsonObj.postTypeId = postTypeId;
                
                var jsonStr = JSON.stringify(jsonObj);
                
                $.ajax({
                    type: "POST",
                    url: GLOBALS.ServiceParameter + "/posts",
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
            catch(err) {
                if (typeof callback_err == 'function') {
                    callback_err(err);
                }
            }
        },
        GetComments: function(topicId, callback, callback_err) {
            try {
                $.ajax({
                    type: "GET",
                    url: GLOBALS.ServiceParameter + "/posts/filter?postTypeId=2&associatedObjectId=" + topicId,
                    contentType: "application/json; charset=utf-8",
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
                callback_err(err);
            }
        }
    }
    
    if (!window.SP_BANK) { window.SP_BANK = SP_BANK; }
})();
/// <reference path="GLOBALS.js" />

(function () {
    var SP_BANK = {
        GetContent: function(topicId, callback, callback_err) {
            try {
                $.ajax({
                    type: "GET",
                    url: GLOBALS.ServiceParameter + "/topics/" + topicId,
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
            catch(err) {
                callback_err(err);
            }
        },
        PostComment: function(userId, postTypeId, title, post, associatedObjectId, postDate, callback, callback_err) {
            try {
                var form = new FormData();
                form.append("post", post);
                form.append("postTypeId", postTypeId);
                form.append("associatedObjectId", associatedObjectId);
                form.append("title", title);
                form.append("userId", userId);
                
                var settings = {
                    "async": true,
                    "crossDomain": true,
                    "url": "api/posts",
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
        },
        GetCommunityMembers: function(communityId, callback, callback_err) {
            try {
                $.ajax({
                    type: "GET",
                    url: "api/communityMembers/" + communityId,
                    contentType: "application/json; charset=utf-8",
                    success: function (msg) {
                      	if (msg == null) {
                            callback(null);
                        }
                        else if (GUI_HELPER.NOU(msg.status)) {
                            callback_err(msg.status, 'Get community Members');
                        }
                        else {
                            var _data = eval(msg);
                            callback(_data);
                        }
                    },
                    error: function (msg) {
                        callback_err(msg.status, 'Get communityMembers Fails. Reason: ' + (msg.statusText));
                    }
                });
            }
            catch (err) {
                callback_err(msg.status, 'Get communityMembers Fails. Reason: ' + (msg.statusText));
            }
        }, 
        GetTopicResources: function (topicId, callback, callback_err) {
            try { 
                $.ajax({
                    type: "GET",
                    url: "api/topics/resources/" + topicId, 
					contentType: "application/json; charset=utf-8", 
                    success: function (msg) {
                      	if (msg == null) {
                            callback(null);
                        }
                        else if (GUI_HELPER.NOU(msg.status)) {
                            callback_err(msg.status, 'Get communities');
                        }
                        else {
                            var _data = eval(msg);
                            callback(_data);
                        }
                    },
                    error: function (msg) {
                        callback_err(msg.status, 'Get communities Fails. Reason: ' + (msg.statusText));
                    }
                });
            }
            catch (err) {
                 callback_err(-2, 'Get communities Fails. Reason: ' + err.Description);
            }
        }
    }
    
    if (!window.SP_BANK) { window.SP_BANK = SP_BANK; }
})();
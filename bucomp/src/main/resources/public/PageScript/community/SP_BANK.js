/// <reference path="GLOBALS.js" />

(function () {
    var SP_BANK = {
        GetCommunity: function (communityId, callback, callback_err) {
            try {
                $.ajax({
                    type: "GET",
                    url: "api/communities/" + communityId,
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
        JoinCommunity: function (userId, communityId, roleId, callback, callback_err) { 
            try {
                var form = new FormData();
                form.append("communityId", communityId);
                form.append("userId", userId);
                form.append("roleId", GLOBALS.memberRoleId);
                
                var settings = {
                    "async": true,
                    "crossDomain": true,
                    "url": "api/communityMembers",
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
                callback_err(err);
            }
        },
        GetCommunityTopics: function(communityId, callback, callback_err) {
            try {
                $.ajax({
                    type: "GET",
                    url: GLOBALS.ServiceParameter + "/topics/communityTopics/" + communityId,
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
                if (typeof callback_err == 'function') {
                    callback_err(err);
                }
            }
        },
        SendJoinRequest: function(communityId, userId, explanation, callback, callback_err) {
            try{
                var form = new FormData();
                form.append("communityId", communityId);
                form.append("userId", userId);
                form.append("explanation", explanation);
                
                var settings = {
                    "async": true,
                    "crossDomain": true,
                    "url": "api/communityRequests",
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
            } catch(err) {
                callback_err(err);
            }
        },
        CheckCommunityRequest: function(communityId, callback, callback_err) {
            try {
                $.ajax({
                    type: "GET",
                    url: "api/communityRequests/" + communityId,
                    contentType: "application/json; charset=utf-8",
                    success: function (msg) {
                      	if (msg == null) {
                            callback(null);
                        }
                        else if (GUI_HELPER.NOU(msg.status)) {
                            callback_err(msg);
                        }
                        else {
                            var _data = eval(msg);
                            callback(_data);
                        }
                    },
                    error: function (msg) {
                        callback_err(msg);
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

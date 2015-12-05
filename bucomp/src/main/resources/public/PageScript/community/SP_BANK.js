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
        JoinCommunity: function (communityId, userId, roleId, callback, callback_err) { 
            try {
            	var obj= new Object; 
            	obj.communityId=communityId;
            	obj.userId=userId; 
            	var json =JSON.stringify(obj);
                $.ajax({
                    type: "POST",
                    url: "/api/communityRequests/", 
                    data:json,
					contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    success: function (msg) {
                       if (msg == null) {
                            callback(null);
                        }
                        else if (GUI_HELPER.NOU(msg.status)) {
                            callback_err(msg.status, 'JoinCommunity');
                        }
                        else {
                            var _data = eval(msg);
                            callback(_data);
                        }
                    },
                    error: function (msg) {
                        callback_err(msg.status, 'JoinCommunityFails. Reason: ' + (msg.statusText));
                    }
                });
            }
            catch (err) {
                callback_err(-2, 'JoinCommunity Fails. Reason: ' + err.Description);
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
        }
    }
    if (!window.SP_BANK) { window.SP_BANK = SP_BANK; }
})();

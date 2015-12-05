/// <reference path="GLOBALS.js" />

(function () {
    var SP_BANK = {
        GetCommunity: function (communityId, callback, callback_err) {
            try {
                $.ajax({
                    type: "GET",
                    url: GLOBALS.ServiceParameter + "/communities/" + communityId,
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
        GetCommunityMembers: function(communityId, callback, callback_err) {
            try {
                $.ajax({
                    type: "GET",
                    url: GLOBALS.ServiceParameter + "/communityMembers/" + communityId,
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
        JoinCommunity: function (communityId, userId, roleId, callback, callback_err) {
            try {
                var form = new FormData();
                form.append("communityId", communityId);
                form.append("userId", userId);
                form.append("roleId", roleId);

                var settings = {
                    "async": true,
                    "crossDomain": true,
                    "url": "http://localhost:8080/api/communityMembers",
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

(function () {
    var SP_BANK = {
        GetCommunity: function (communityId, callback, callback_err) {
            try {
                $.ajax({
                    type: "GET",
                    url: "api/communities/"+communityId,
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
         GetUsers :function (userid, callback, callback_err) {
            try {
                $.ajax({
                    type: "GET",
                    url: "api/users/"+userid,
                    contentType: "application/json; charset=utf-8",
                    success: function (msg) {
                      	if (msg == null) {
                            callback(null);
                        }
                        else if (GUI_HELPER.NOU(msg.status)) {
                            callback_err(msg.status, 'GetUsers');
                        }
                        else {
                            var _data = eval(msg);
                            callback(_data);
                        }
                    },
                    error: function (msg) {
                        callback_err(msg.status, 'Get Users Fails. Reason: ' + (msg.statusText));
                    }
                });
            }
            catch (err) {
                 callback_err(-2, 'Get Users Fails. Reason: ' + err.Description);
            }
        },
        GetCommunityRequest: function (communityId, callback, callback_err) {
            try {
                $.ajax({
                    type: "GET",
                    url: "/api/communityRequests/"+communityId, 
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    success: function (msg) {
                       if (msg == null) {
                            callback(null);
                        }
                        else if (GUI_HELPER.NOU(msg.status)) {
                            callback_err(msg.status, 'GetCommunityRequest');
                        }
                        else {
                            var _data = eval(msg);
                            callback(_data);
                        }
                    },
                    error: function (msg) {
                        callback_err(msg.status, 'GetCommunityRequest Fails. Reason: ' + (msg.statusText));
                    }
                });
            }
            catch (err) {
               callback_err(msg.status, 'GetCommunityRequest Fails. Reason: ' + (msg.statusText));
            }
        } ,
        ApproveRequest: function (communityId,userid, callback, callback_err) {
            try {
                var form = new FormData();
                form.append("communityId", communityId);
                form.append("userId", userid);
                
                var settings = {
                    "async": true,
                    "crossDomain": true,
                    "url": "api/communityRequests/approve",
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
        } ,
        DenyRequest: function (communityId,userid, callback, callback_err) {
            try {
                var form = new FormData();
                form.append("communityId", communityId);
                form.append("userId", userid);
                
                var settings = {
                    "async": true,
                    "crossDomain": true,
                    "url": "api/communityRequests/deny",
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
        } 
    }
    if (!window.SP_BANK) { window.SP_BANK = SP_BANK; }
})();

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
        GetCommunityRequest: function (communityId, callback, callback_err) {
            try {
                $.ajax({
                    type: "GET",
                    url: "/api/communityRequests", 
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
            	var obj= new Object; 
            	obj.communityId=communityId;
            	obj.userid=userid; 
            	var json =JSON.stringify(obj);
                $.ajax({
                    type: "POST",
                    url: "/api/communityRequests/approve", 
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    data: json,
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
        DenyRequest: function (communityId,userid, callback, callback_err) {
            try {
            	var obj= new Object; 
            	obj.communityId=communityId;
            	obj.userId=userid; 
            	var json =JSON.stringify(obj);
                $.ajax({
                    type: "POST",
                    url: "api/communityRequests/deny", 
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    data: json,
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
               callback_err(msg.status, 'GetCommunityRequest Fails. Reason: ' + (err.statusText));
            }
        } 
    }
    if (!window.SP_BANK) { window.SP_BANK = SP_BANK; }
})();

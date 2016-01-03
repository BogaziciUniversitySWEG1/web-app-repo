(function () {
    var SP_BANK = {
        GetMeeting: function (meetingId, callback, callback_err) {
            try {
                $.ajax({
                    type: "GET",
                    url: "api/meeting/" + meetingId,
                    contentType: "application/json; charset=utf-8",
                    success: function (msg) {
                      	if (msg == null) {
                            callback(null);
                        }
                        else {
                            var _data = eval(msg);
                            callback(_data);
                        }
                    },
                    error: function (msg) {
                        callback_err(msg.status, 'Get meeting fails. Reason: ' + (msg.statusText));
                    }
                });
            }
            catch (err) {
                 callback_err(-2, 'Get meeting fails. Reason: ' + err.Description);
            }
        },
        GetMeetingPosts: function(meetingId, callback, callback_err) {
            try {
                $.ajax({
                    type: "GET",
                    url: "api/posts/filter?postTypeId=3&associatedObjectId=" + meetingId,
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
        GetMeetingMoms: function(meetingId, callback, callback_err) {
            try {
                $.ajax({
                    type: "GET",
                    url: "api/meetings/mom/" + meetingId,
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
        Postmom: function(meetingId,mom, attendants, callback, callback_err) {
            try {
                var form = new FormData();
                form.append("meetingId", meetingId);
                form.append("mom", mom);
                form.append("attendants", attendants);
                
                var settings = {
                    "async": true,
                    "crossDomain": true,
                    "url": "api/meeting/mom/",
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
        GetMeetingResources: function (meetingid, callback, callback_err) {
            try { 
                $.ajax({
                    type: "GET",
                    url: "/api/meetings/resources/" + meetingid, 
					contentType: "application/json; charset=utf-8", 
                    success: function (msg) {
                      	if (msg == null) {
                            callback(null);
                        }
                        else if (GUI_HELPER.NOU(msg.status)) {
                            callback_err(msg.status, 'GetMeetingResources');
                        }
                        else {
                            var _data = eval(msg);
                            callback(_data);
                        }
                    },
                    error: function (msg) {
                        callback_err(msg.status, 'GetMeetingResources Fails. Reason: ' + (msg.statusText));
                    }
                });
            }
            catch (err) {
                 callback_err(-2, 'GetMeetingResources Fails. Reason: ' + err.Description);
            }
        }
    }
    if (!window.SP_BANK) { window.SP_BANK = SP_BANK; }
})();
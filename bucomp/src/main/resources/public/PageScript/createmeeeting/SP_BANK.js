(function () {
    var SP_BANK = {
        CREATEMEETING: function(UserId, CommunityId, Hour, Location, Duration, Attendants, callback, callback_err) {
            try {
                var form = new FormData();
                form.append("userId", UserId);
                form.append("communityIdToSave", CommunityId);
                form.append("startTime", Hour);
                form.append("location", Location);
                form.append("duration", Duration);
                form.append("attendants", Attendants);
                
                
                var settings = {
                    "async": true,
                    "crossDomain": true,
                    "url": "api/meetings/" + CommunityId,
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
        }
    
    GETCOMMUNITYMEMBERS: function(CommunityId, callback, callback_err) {
    	try {
            $.ajax({
                type: "GET",
                url: "api/communityMembers/" + CommunityId,
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
    }
    }
    if (!window.SP_BANK) { window.SP_BANK = SP_BANK; }
})();

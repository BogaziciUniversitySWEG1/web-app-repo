(function () {
    var SP_BANK = {
        GetContent: function(callback, callback_err) {
            try {
                $.ajax({
                    type: "GET",
                    url: "api/chatroom/getChatHistory?meetingId=" + GLOBALS.MeetingId,
                    contentType: "application/json; charset=utf-8",
                    success: function (msg) {
                      	if (msg == null) {
                            callback(null);
                        }
                        else {
                            callback(msg);
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
        },
        PostContent: function(callback, callback_err) {
            try {
                var form = new FormData();
                form.append("userId", GLOBALS.UserId);
                form.append("meetingId", GLOBALS.MeetingId);
                form.append("message", $("#commentField").val());
                
                var settings = {
                    "async": true,
                    "crossDomain": true,
                    "url": "api/chatroom/sendMessage",
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
    }
    if (!window.SP_BANK) { window.SP_BANK = SP_BANK; }
})();

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
        SaveResource: function (communityId,userid,filename, callback, callback_err) {
            try {
            	var obj= new Object; 
            	obj.communityId=communityId;
            	obj.userId=userid; 
            	obj.file=filename; 
            	var json =JSON.stringify(obj);
                $.ajax({
                    type: "POST",
                    url: "/api/communities/documents", 
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    data: json,
                    success: function (msg) {
                       if (msg == null) {
                            callback(null);
                        }
                        else if (GUI_HELPER.NOU(msg.status)) {
                            callback_err(msg.status, 'SaveResource');
                        }
                        else {
                            var _data = eval(msg);
                            callback(_data);
                        }
                    },
                    error: function (msg) {
                        callback_err(msg.status, 'SaveResource Fails. Reason: ' + (msg.statusText));
                    }
                });
            }
            catch (err) {
               callback_err(msg.status, 'SaveResource Fails. Reason: ' + (msg.statusText));
            }
        }
    }
    if (!window.SP_BANK) { window.SP_BANK = SP_BANK; }
})();

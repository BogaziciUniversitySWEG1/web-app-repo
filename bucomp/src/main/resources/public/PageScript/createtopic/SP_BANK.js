/// <reference path="GLOBALS.js" />

(function () {
    var SP_BANK = {
        SAVE: function (title, description, communityId, userId, creationDate, callback, callback_err) {
            try {
                var jsonObj = new Object;
                jsonObj.Title = title;
                jsonObj.Description = description;
                jsonObj.CommunityId = communityId;
                jsonObj.CreatorUserId = userId;
                jsonObj.creationDate = creationDate;
                
                var jsonStr = JSON.stringify(jsonObj);
                
                $.ajax({
                    type: "POST",
                    url: GLOBALS.ServiceParameter + "/topics",
                    data: jsonStr,
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
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
                            callback_err(-1, 'TEST');
                        }
                    }
                });
            }
            catch (err) {
                if (typeof callback_err == 'function') {
                    callback_err(-2, 'TEST');
                }
            }
        } 
    }
    if (!window.SP_BANK) { window.SP_BANK = SP_BANK; }
})();

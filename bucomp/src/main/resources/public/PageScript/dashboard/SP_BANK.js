/// <reference path="GLOBALS.js" />

(function () {
    var SP_BANK = {
        GetCommunitiesByUserId: function (userId, callback, callback_err) {
            try {
                $.ajax({
                    type: "GET",
                    url: GLOBALS.ServiceParameter + "/communities/userCommunities/" + userId,
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
        },
        GetUserInfo: function(userId, callback, callback_err){
            try {
                $.ajax({
                    type: "GET",
                    url: GLOBALS.ServiceParameter + "/users/" + userId,
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
        },
        GetPopularTags: function(callback, callback_err) {
            try {
                $.ajax({
                    type: "GET",
                    url: GLOBALS.ServiceParameter + "/communities/tagcount",
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

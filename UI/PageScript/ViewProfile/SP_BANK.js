(function () {
    var SP_BANK = {
        TEST: function (param1, callback, callback_err) {
            try {
                $.ajax({
                    type: "POST",
                    url: ServiceParameter + "/TEST",
                    data: "{param1:'" + param1 + "'}",
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    success: function (msg) {
                        if (msg.d.length == 0 || msg.d == null) {
                            if (typeof callback == 'function') {
                                callback(null);
                            }
                        }
                        else if (msg.d <= 0) {
                            if (typeof callback_err == 'function') {
                                callback_err(msg.d, 'TEST');
                            }
                        }
                        else {
                            var _data = eval("(" + msg.d + ")");
                            if (typeof callback_err == 'function' && _data[0] != null && typeof _data[0].ErrorCode != 'undefined') {
                                callback_err(_data, 'TEST');
                            }
                            else if (typeof callback == 'function') {
                                callback(_data);
                            }
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

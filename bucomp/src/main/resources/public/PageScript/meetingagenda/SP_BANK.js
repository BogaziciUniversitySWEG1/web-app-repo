(function () {
    var SP_BANK = {
        GetContent: function(meetingId, callback, callback_err) {
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
                        callback_err(msg);
                    }
                });
            }
            catch (err) {
                 callback_err(err);
            }
        }
    }
    if (!window.SP_BANK) { window.SP_BANK = SP_BANK; }
})();

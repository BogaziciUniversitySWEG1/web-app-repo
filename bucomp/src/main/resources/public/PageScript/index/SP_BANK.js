(function () {
    var SP_BANK = {
        LOGIN: function (Email, Password, callback, callback_err) {
            try {
            
            	var obj= new Object;  
            	obj.email=Email;
            	obj.password=Password; 
            	var json =JSON.stringify(obj);
                $.ajax({
                    type: "POST",
                    url: "/api/login",
                    data: json,
					contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    success: function (msg) {
                        if (msg == null) {
                            callback(null);
                        }
                        else if (GUI_HELPER.NOU(msg.status)) {
                            callback_err(msg.status, 'REGISTER');
                        }
                        else {
                            var _data = eval(msg);
                            callback(_data);
                        }
                    },
                    error: function (msg) {
                        callback_err(msg.status, 'LOGIN Fails. Reason: ' + (msg.statusText));
                    }
                });
            }
            catch (err) {
                callback_err(-2, 'LOGIN Fails. Reason: ' + err.Description);
            }
        }
    }
    if (!window.SP_BANK) { window.SP_BANK = SP_BANK; }
})();

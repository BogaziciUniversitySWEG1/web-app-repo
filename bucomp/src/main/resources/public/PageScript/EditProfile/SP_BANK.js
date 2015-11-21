(function () {
    var SP_BANK = {
        GET_USER_BY_ID: function (UserId, callback, callback_err) {
            try {
                $.ajax({
                    type: "GET",
                    url: "/api/users/{id}",
                    data: "{UserId:" + UserId + "}",
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    success: function (msg) {
                        if (msg == null) {
                            callback(null);
                        }
                        else if (msg.status != 201) {
                            callback_err(msg.status, 'Get User');
                        }
                        else {
                            var _data = eval(msg.d);
                            callback(_data);
                        }
                    },
                    error: function (msg) {
                        callback_err(msg.status, 'Get User Fails. Reason: ' + (msg.statusText));
                    }
                });
            }
            catch (err) {
                callback_err(-2, 'Get User Fails. Reason: ' + err.Description);
            }
        },
        UPDATE_USER: function (UserId, Name, Surname, Email, Password, Location,
                                    Education, Profession, Hobbies, CvLink, PhotoLink, callback, callback_err) {
            try {
                $.ajax({
                    type: "POST",
                    url: "/api/users/{id}",
                    data: "{UserId:" + UserId + ",Name:'" + Name + "',Surname:'" + Surname + "',Email:'" + Email + "',Password:'" + Password + "',Location:'" + Location + "',Education:'" + Education + "',Profession:'" + Profession + "',Hobbies:'" + Hobbies + "',CvLink:'" + CvLink + "',PhotoLink:'" + PhotoLink + "'}",
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    success: function (msg) {
                        if (msg == null) {
                            callback(null);
                        }
                        else if (msg.status != 201) {
                            callback_err(msg.status, 'UPDATE_USER');
                        }
                        else {
                            var _data = eval(msg.d);
                            callback(_data);
                        }
                    },
                    error: function (msg) {
                        callback_err(msg.status, 'UPDATE USER Fails. Reason: ' + (msg.statusText));
                    }
                });
            }
            catch (err) {
                callback_err(-2, 'UPDATE USER Fails. Reason: ' + err.Description);
            }
        }
    }
    if (!window.SP_BANK) { window.SP_BANK = SP_BANK; }
})();

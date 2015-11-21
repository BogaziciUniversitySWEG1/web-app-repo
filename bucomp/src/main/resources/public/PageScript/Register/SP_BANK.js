(function () {
    var SP_BANK = {
        REGISTER: function (UserId, Name, Surname, Email, Password, Location,
                                    Education, Profession, Hobbies, CvLink, PhotoLink, callback, callback_err) {
            try {
                $.ajax({
                    type: "POST",
                    url: "/api/users",
                    data: "{UserId:" + UserId + ",Name:'" + Name + "',Surname:'" + Surname + "',Email:'" + Email + "',Password:'" + Password + "',Location:'" + Location + "',Education:'" + Education + "',Profession:'" + Profession + "',Hobbies:'" + Hobbies + "',CvLink:'" + CvLink + "',PhotoLink:'" + PhotoLink + "'}",
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    success: function (msg) {
                        if (msg == null) {
                            callback(null);
                        }
                        else if (msg.status != 201) {
                            callback_err(msg.status, 'REGISTER');
                        }
                        else {
                            var _data = eval(msg.d);
                            callback(_data);
                        }
                    },
                    error: function (msg) {
                        callback_err(msg.status, 'REGISTER Fails. Reason: ' + (msg.statusText));
                    }
                });
            }
            catch (err) {
                callback_err(-2, 'REGISTER Fails. Reason: ' + err.Description);
            }
        }
    }
    if (!window.SP_BANK) { window.SP_BANK = SP_BANK; }
})();

(function () {
    var SP_BANK = {
        GET_USER_BY_ID: function (UserId, callback, callback_err) {
            try { 
                $.ajax({
                    type: "GET",
                    url: "/api/users/"+UserId, 
                    contentType: "application/json; charset=utf-8", 
                    success: function (msg) {
                        if (msg == null) {
                            callback(null);
                        }
                        else if (GUI_HELPER.NOU(msg.status)) {
                            callback_err(msg.status, 'Get User');
                        }
                        else {
                            var _data = eval(msg);
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
            	var obj= new Object; 
            	obj.userId=UserId;
            	obj.name=Name;
            	obj.surname=Surname;
            	obj.email=Email;
            	obj.password=Password;
            	obj.location=Location;
            	obj.education=Education;
            	obj.profession=Profession;
            	obj.hobbies=Hobbies;
            	obj.cvlink=CvLink;
            	obj.photoLink=PhotoLink;

            	//open below when user web api is updated
            	//obj.latitude=GLOBALS.Lat;
            	//obj.latitude=GLOBALS.Long;
            	
            	var json =JSON.stringify(obj);
                $.ajax({
                    type: "PUT",
                    url: "/api/users/"+UserId,
                    data: json,
					contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    success: function (msg) {
                       if (msg == null) {
                            callback(null);
                        }
                        else if (GUI_HELPER.NOU(msg.status)) {
                            callback_err(msg.status, 'Update User');
                        }
                        else {
                            var _data = eval(msg);
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

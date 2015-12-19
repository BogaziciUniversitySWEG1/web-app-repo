(function () {
    var SP_BANK = {
        REGISTER: function (UserId, Name, Surname, Email, Password, Location,
                                    Education, Profession, Hobbies, CvLink, PhotoLink, callback, callback_err) {
            try {
            
            	var obj= new Object; 
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
                    type: "POST",
                    url: "/api/users",
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

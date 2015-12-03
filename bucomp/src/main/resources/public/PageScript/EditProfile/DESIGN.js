/// <reference path="../CommonScripts/GUI_HELPER.js" />
/// <reference path="SP_BANK.js" />
/// <reference path="GLOBALS.js" />

(function () {
    var DESIGN = {
        INITIALIZE: function () {
            try {
                GLOBALS.UserId = GUI_HELPER.GetQueryStringParamByName("uid");
                if (GUI_HELPER.NOU(GLOBALS.UserId)) {
                    DESIGN.GetUserById(GLOBALS.UserId);
                }
                else {
                    GUI_HELPER.ALERT('Info', "User detaction fails. You will be redirected to the main page in 2 seconds!", GUI_HELPER.INFO);
                    setTimeout(function () { window.location = "index.html" }, 2500);
                }
            } catch (err) {
                GUI_HELPER.ALERT('Warning', err, GUI_HELPER.ERROR);
            }
        },
        INITIALIZE_CV: function () {
            try {
                var _this = document.getElementById('profileCV');
                if (_this.files.length > 0) {
                    var file = _this.files[0];
                    GLOBALS.CvLink = file.name;
                }
                else {
                    GLOBALS.CvLink = "";
                }
            } catch (err) {
                GUI_HELPER.ALERT('Warning', err, GUI_HELPER.ERROR);
            }
        },
        INITIALIZE_PIC: function () {
            try {
                var _this = document.getElementById('profilePic');
                if (_this.files.length > 0) {
                    var file = _this.files[0];
                    GLOBALS.PhotoLink = file.name;
                }
                else {
                    GLOBALS.PhotoLink = "";
                }
            } catch (err) {
                GUI_HELPER.ALERT('Warning', err, GUI_HELPER.ERROR);
            }
        },
        GetUserById: function (ID) {
            try {
                SP_BANK.GET_USER_BY_ID(ID, DESIGN.FillUserById, GUI_HELPER.SERVICE_CALLBACK_ERR);
            } catch (err) {
                GUI_HELPER.ALERT('Warning', err, GUI_HELPER.ERROR);
            }
        },
        FillUserById: function (data) {
            try {
                if(GUI_HELPER.NOU(data))
                {
                	if(!GUI_HELPER.NOU(data.email)){ 
	                    GUI_HELPER.ALERT('Warning', "user not found. Please try again later.", GUI_HELPER.ERROR);
	                	setTimeout(function () { window.location = "index.html?uid=" + GLOBALS.UserId }, 2500);
					}
                	else
                		{
		                	var namesurname=data.name.split(' ');
		                	var name;
		                	var surname;
		                	if (namesurname.length>1)
		                	{
		                		surname=namesurname[namesurname.length-1];
		                		name= data.name.split(namesurname[namesurname.length-1])[0];
		                	}
		                	else
		                		name= data.name;	
		                	
			                GLOBALS.Name = name;
			                GLOBALS.Surname = surname;
			                GLOBALS.Email = data.email;
			                GLOBALS.Password = data.password;
			                GLOBALS.Location = data.location;
			                GLOBALS.Education = data.education;
			                GLOBALS.Profession = data.profession;
			                GLOBALS.Hobbies = data.hobbies;
			                GLOBALS.CvLink = data.cvLink;
			                GLOBALS.PhotoLink = data.photoLink;
			
			                document.getElementById('txtName').value = GLOBALS.Name;
			                document.getElementById('txtSurname').value = GLOBALS.Surname;
			                document.getElementById('txtEmail').value = GLOBALS.Email;
			                document.getElementById('txtPassword').value = GLOBALS.Password;
			                document.getElementById('txtLocation').value = GLOBALS.Location;
			                document.getElementById('txtEducation').value = GLOBALS.Education;
			                document.getElementById('txtProfession').value = GLOBALS.Profession;
			                document.getElementById('txtHobbies').value = GLOBALS.Hobbies;
			
			                document.getElementById("cvlink").setAttribute("href", GLOBALS.CvLink);
			                document.getElementById("imgProfile").setAttribute("src", GLOBALS.PhotoLink);
	                	}
	               }
	                else {
	                    GUI_HELPER.ALERT('Warning', "user not found. Please try again later.", GUI_HELPER.ERROR);
	                	setTimeout(function () { window.location = "index.html?uid=" + GLOBALS.UserId }, 2500);
                
	                }

            } catch (err) {
                GUI_HELPER.ALERT('Warning', err, GUI_HELPER.ERROR);
            }
        },
        Update: function () {
        	GLOBALS.UserId = GUI_HELPER.GetQueryStringParamByName("uid");
            try {
                GLOBALS.Name = $('#txtName').val();
                GLOBALS.Surname = $('#txtSurname').val();
                GLOBALS.Email = $('#txtEmail').val();
                GLOBALS.Password = $('#txtPassword').val();
                GLOBALS.Location = $('#txtLocation').val();
                GLOBALS.Education = $('#txtEducation').val();
                GLOBALS.Profession = $('#txtProfession').val();
                GLOBALS.Hobbies = $('#txtHobbies').val();

                if (GLOBALS.Name == '') {
                    GUI_HELPER.ALERT('Warning', 'Please fill the Name area!', GUI_HELPER.ERROR);
                }
                else if (GLOBALS.Surname == '') {
                    GUI_HELPER.ALERT('Warning', 'Please fill the Surname area!', GUI_HELPER.ERROR);
                }
                else if (GLOBALS.Email == '') {
                    GUI_HELPER.ALERT('Warning', 'Please fill the Email area!', GUI_HELPER.ERROR);
                }
                else if (GLOBALS.Email != '' && !GUI_HELPER.validateEmail(GLOBALS.Email)) {
                    GUI_HELPER.ALERT('Warning', 'Please enter a valid email address!', GUI_HELPER.ERROR);
                }
                else if (GLOBALS.Password == '') {
                    GUI_HELPER.ALERT('Warning', 'Please fill the Password area!', GUI_HELPER.ERROR);
                }
                else if (GLOBALS.Location == '') {
                    GUI_HELPER.ALERT('Warning', 'Please fill the Location area!', GUI_HELPER.ERROR);
                }
                else if (GLOBALS.Education == '') {
                    GUI_HELPER.ALERT('Warning', 'Please fill the Education area!', GUI_HELPER.ERROR);
                }
                else if (GLOBALS.Profession == '') {
                    GUI_HELPER.ALERT('Warning', 'Please fill the Profession area!', GUI_HELPER.ERROR);
                }
                else if (GLOBALS.Hobbies == '') {
                    GUI_HELPER.ALERT('Warning', 'Please fill the Hobbies area!', GUI_HELPER.ERROR);
                }
                else if (GLOBALS.CvLink == '') {
                    GUI_HELPER.ALERT('Warning', 'Please upload your CV to the system!', GUI_HELPER.ERROR);
                }
                else if (GLOBALS.PhotoLink == '') {
                    GUI_HELPER.ALERT('Warning', 'Please upload your profile photo to the system!', GUI_HELPER.ERROR);
                }
                else {
                    //GLOBALS.UserId = -1;
                    SP_BANK.UPDATE_USER(GLOBALS.UserId, GLOBALS.Name, GLOBALS.Surname, GLOBALS.Email, GLOBALS.Password, GLOBALS.Location,
                                    GLOBALS.Education, GLOBALS.Profession, GLOBALS.Hobbies, GLOBALS.CvLink, GLOBALS.PhotoLink, DESIGN.UPDATED_USER, GUI_HELPER.SERVICE_CALLBACK_ERR);
                }
            } catch (err) {
                GUI_HELPER.ALERT('Warning', err, GUI_HELPER.ERROR);
            }
        },
        UPDATED_USER: function (data) {
            try {
                if (GUI_HELPER.NOU(data)) {
                    GUI_HELPER.ALERT('Info', "Information is updated.", GUI_HELPER.INFO);
                }
                else {
                    GUI_HELPER.ALERT('Warning', "Updating information fails. Please try again later.", GUI_HELPER.ERROR);
                }
            } catch (err) {
                GUI_HELPER.ALERT('Warning', err, GUI_HELPER.ERROR);
            }
        }
    }
    if (!window.DESIGN) {
        window.DESIGN = DESIGN;
    }
})();

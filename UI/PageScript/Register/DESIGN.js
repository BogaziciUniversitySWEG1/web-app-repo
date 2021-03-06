﻿/// <reference path="../CommonScripts/GUI_HELPER.js" />
/// <reference path="SP_BANK.js" />
/// <reference path="GLOBALS.js" />

(function () {
    var DESIGN = {
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
        Register: function () {
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
                    GLOBALS.UserId = -1;
                    SP_BANK.REGISTER(GLOBALS.UserId, GLOBALS.Name, GLOBALS.Surname, GLOBALS.Email, GLOBALS.Password, GLOBALS.Location,
                                    GLOBALS.Education, GLOBALS.Profession, GLOBALS.Hobbies, GLOBALS.CvLink, GLOBALS.PhotoLink, DESIGN.REGISTERED_USER, GUI_HELPER.SERVICE_CALLBACK_ERR);
                }
            } catch (err) {
                GUI_HELPER.ALERT('Warning', err, GUI_HELPER.ERROR);
            }
        },
        REGISTERED_USER: function (data) {
            try {
                if (GUI_HELPER.NOU(data)) {
                    GUI_HELPER.ALERT('Info', "Registration is succesfull.You will be redirected to the main page in 2 seconds!", GUI_HELPER.INFO);
                    setTimeout(function () { window.location = "dashboard.html?UID=" + data }, 2500);
                }
                else {
                    GUI_HELPER.ALERT('Warning', "Registration fails. Please try again later.", GUI_HELPER.ERROR);
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

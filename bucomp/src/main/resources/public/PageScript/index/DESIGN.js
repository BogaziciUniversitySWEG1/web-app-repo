/// <reference path="../CommonScripts/GUI_HELPER.js" />
/// <reference path="SP_BANK.js" />
/// <reference path="GLOBALS.js" />

(function () {
    var DESIGN = {
        LOGIN: function () {
            try { 
                GLOBALS.Email = $('#txtEmail').val();
                GLOBALS.Password = $('#txtPassword').val(); 
                
				if (GLOBALS.Email == '') {
                    GUI_HELPER.ALERT('Warning', 'Please fill the Email area!', GUI_HELPER.ERROR);
                }
                else if (GLOBALS.Email != '' && !GUI_HELPER.validateEmail(GLOBALS.Email)) {
                    GUI_HELPER.ALERT('Warning', 'Please enter a valid email address!', GUI_HELPER.ERROR);
                }
                else if (GLOBALS.Password == '') {
                    GUI_HELPER.ALERT('Warning', 'Please fill the Password area!', GUI_HELPER.ERROR);
                }
                else {
                    GLOBALS.UserId = -1;
                    SP_BANK.LOGIN(GLOBALS.Email, GLOBALS.Password, DESIGN.LOGGED_USER, GUI_HELPER.SERVICE_CALLBACK_ERR);
                }
            } catch (err) {
                GUI_HELPER.ALERT('Warning', err, GUI_HELPER.ERROR);
            }
        },
        LOGGED_USER: function (data) {
            try {
                if (GUI_HELPER.NOU(data)) {
                    GUI_HELPER.ALERT('Info', "Login is succesfull.You will be redirected to the main page in 2 seconds!", GUI_HELPER.INFO);
                    setTimeout(function () { window.location = "dashboard.html?uid=" + data.userId }, 2500);
                }
                else {
                    GUI_HELPER.ALERT('Warning', "login fails. Please try again later.", GUI_HELPER.ERROR);
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

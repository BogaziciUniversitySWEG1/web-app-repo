﻿/// <reference path="../CommonScripts/GUI_HELPER.js" />
/// <reference path="SP_BANK.js" />
/// <reference path="GLOBALS.js" />

(function () {
    var DESIGN = {
        Createmeeting: function () {
            try {
                GLOBALS.Hour = $('#txtHour').val();
                GLOBALS.Location = $('#txtLocation').val();
                GLOBALS.Duration = $('#txtDuration').val();

                if (GLOBALS.Hour == '') {
                    GUI_HELPER.ALERT('Warning', 'Please fill the Hour area!', GUI_HELPER.ERROR);
                }
                else if (GLOBALS.Location == '') {
                    GUI_HELPER.ALERT('Warning', 'Please fill the Location area!', GUI_HELPER.ERROR);
                }
                else if (GLOBALS.Duration == '') {
                    GUI_HELPER.ALERT('Warning', 'Please fill the Duration area!', GUI_HELPER.ERROR);
                }
                else {
                    GLOBALS.UserId = GetQueryStringValue("uid");
                    GLOBALS.CommunityId = GetQueryStringValue("cid");
                    SP_BANK.CREATEMEETING(GLOBALS.UserId, GLOBALS.CommunityId, GLOBALS.Hour, GLOBALS.Location, GLOBALS.Duration, DESIGN.CREATED_MEETING, GUI_HELPER.SERVICE_CALLBACK_ERR);
                }
            } catch (err) {
                GUI_HELPER.ALERT('Warning', err, GUI_HELPER.ERROR);
            }
        },
        CREATED_MEETING: function (data) {
            try {
                if (GUI_HELPER.NOU(data)) {
                    GUI_HELPER.ALERT('Info', "Meeting Creation is succesfull.You will be redirected to the main page in 2 seconds!", GUI_HELPER.INFO);
                    setTimeout(function () { window.location = "dashboard.html?uid=" + GLOBALS.UserId }, 2500);
                }
                else {
                    GUI_HELPER.ALERT('Warning', "Meeting creation fails. Please try again later.", GUI_HELPER.ERROR);
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

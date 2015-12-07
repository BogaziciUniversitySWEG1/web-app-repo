/// <reference path="../CommonScripts/GUI_HELPER.js" />
/// <reference path="SP_BANK.js" />
/// <reference path="GLOBALS.js" />

(function () {
    var DESIGN = {
        Createmeeting: function () {
            try {
                GLOBALS.Hour = $('#txtHour').val();
                GLOBALS.Location = $('#txtLocation').val();
                GLOBALS.Duration = $('#txtDuration').val();
                GLOBALS.Date = $('#txtDate').val();
                
                if (GLOBALS.Date == '') {
                    GUI_HELPER.ALERT('Warning', 'Please fill the Hour area!', GUI_HELPER.ERROR);
                    return;
               
                } else if (GLOBALS.Hour == '') {
                    GUI_HELPER.ALERT('Warning', 'Please fill the Hour area!', GUI_HELPER.ERROR);
                    return;
               
                }
                else if (GLOBALS.Location == '') {
                    GUI_HELPER.ALERT('Warning', 'Please fill the Location area!', GUI_HELPER.ERROR);
                    return;
                }
                else if (GLOBALS.Duration == '') {
                    GUI_HELPER.ALERT('Warning', 'Please fill the Duration area!', GUI_HELPER.ERROR);
                    return;
                }
                
                //if($('#txtAllmembers').checked == ) {
                	//SP_BANK.GETCOMMUNITYMEMBERS(GLOBALS.CommunityId, DESIGN.GOT_COMMUNITY_MEMBERS, GUI_HELPER.SERVICE_CALLBACK_ERR);
                //}
                //GLOBALS.Members= data;
            	GLOBALS.UserId = GetQueryStringValue("uid");
                GLOBALS.CommunityId = GetQueryStringValue("cid");
                SP_BANK.CREATEMEETING(DESIGN.CREATED_MEETING, GUI_HELPER.SERVICE_CALLBACK_ERR); 
                    
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
        },
        GOT_COMMUNITY_MEMBERS: function (data) {
            try {
                if (GUI_HELPER.NOU(data)) {
                	GLOBALS.Members= data;
                	GLOBALS.UserId = GetQueryStringValue("uid");
                    GLOBALS.CommunityId = GetQueryStringValue("cid");
                    SP_BANK.CREATEMEETING(GLOBALS.UserId, GLOBALS.CommunityId, GLOBALS.Hour, GLOBALS.Location, GLOBALS.Duration, GLOBALS.Members, DESIGN.CREATED_MEETING, GUI_HELPER.SERVICE_CALLBACK_ERR);
                	
                	
                    //GUI_HELPER.ALERT('Info', "Community members list is succesfull.You will be redirected to the main page in 2 seconds!", GUI_HELPER.INFO);
                    //setTimeout(function () { window.location = "dashboard.html?uid=" + GLOBALS.UserId }, 2500);
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

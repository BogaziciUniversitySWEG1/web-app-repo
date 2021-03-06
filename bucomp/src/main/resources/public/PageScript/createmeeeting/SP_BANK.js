(function () {
    var SP_BANK = {
        CREATEMEETING: function(callback, callback_err) {
        	try {
 
                
                var jsonObj = new Object;
                jsonObj.IRCLink = GLOBALS.IRCLink;  
                jsonObj.location = GLOBALS.Location; //
                var sd = new Date(GLOBALS.HourStart);
                jsonObj.startTime =(sd).getTime() + (sd.getTimezoneOffset() * 60000); // 
                var ed = new Date(GLOBALS.HourEnd);
                jsonObj.endTime =(ed).getTime() + (ed.getTimezoneOffset() * 60000);  //
                jsonObj.timeZone =GLOBALS.TimeZone;  //
                jsonObj.agenda = GLOBALS.Agenda; //
                jsonObj.status = GLOBALS.Status; 
                jsonObj.meetingOrganizerUserId = GLOBALS.UserId; 
                jsonObj.inviteeList = GLOBALS.InvitedMembersObj;
                if(jsonObj.inviteeList ==""){
                	jsonObj.inviteeList = [];
                }
                jsonObj.meetingattendants = null;
                jsonObj.meetingnotes = null;
                jsonObj.meetingresources = null;
                jsonObj.meetingroles = null;
                jsonObj.communityId = GLOBALS.CommunityId; 
                jsonObj.meetingTypeId = parseInt(GLOBALS.MeetingType);  // 
                jsonObj.subject = GLOBALS.Subject;

                jsonObj.latitude=GLOBALS.Lat;
                jsonObj.longitude=GLOBALS.Long;
                var jsonStr = JSON.stringify(jsonObj);
                
                $.ajax({
                    type: "POST",
                    url: GLOBALS.ServiceParameter + "/meetings",
                    data: jsonStr,
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    success: function (msg) {
                        if (msg == null) {
                            if (typeof callback == 'function') {
                                callback(null);
                            }
                        }
                        else{
                            var _data = eval(msg);
                            callback(_data);
                        }
                    },
                    error: function (msg) {
                        if (typeof callback_err == 'function') {
                            callback_err(-1, 'TEST');
                        }
                    }
                });
            }
            catch (err) {
                if (typeof callback_err == 'function') {
                    callback_err(-2, 'TEST');
                }
            }
        },
    
    GETCOMMUNITYMEMBERS: function(CommunityId, callback, callback_err) {
    	try {
            $.ajax({
                type: "GET",
                url: "api/communityMembers/" + CommunityId,
                contentType: "application/json; charset=utf-8",
                success: function (msg) {
                  	if (msg == null) {
                        callback(null);
                    }
                    else if (GUI_HELPER.NOU(msg.status)) {
                        callback_err(msg.status, 'Get community Members');
                    }
                    else {
                        var _data = eval(msg);
                        callback(_data);
                    }
                },
                error: function (msg) {
                    callback_err(msg.status, 'Get communityMembers Fails. Reason: ' + (msg.statusText));
                }
            });
        }
        catch (err) {
            callback_err(msg.status, 'Get communityMembers Fails. Reason: ' + (msg.statusText));
        }
    }
    }
    if (!window.SP_BANK) { window.SP_BANK = SP_BANK; }
})();

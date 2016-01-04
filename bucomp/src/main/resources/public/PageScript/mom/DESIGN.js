/// <reference path="../CommonScripts/GUI_HELPER.js" />
/// <reference path="SP_BANK.js" />
/// <reference path="GLOBALS.js" />

(function () {
    var DESIGN = { 
        GetContent: function () {
            GLOBALS.UserId = GetQueryStringValue("uid");
            GLOBALS.CommunityId = GetQueryStringValue("cid");
            GLOBALS.MeetingId = GetQueryStringValue("mid");
            GLOBALS.Attendants= new Array();
            SP_BANK.GetMeeting(GLOBALS.MeetingId, DESIGN.FillContent, DESIGN.FillContentError);
        },
        FillContent: function(data) { 
            SP_BANK.GetCommunityMembers(GLOBALS.CommunityId, DESIGN.FillCommunityMembers, null);
        	//DESIGN.FILL_MEETING_INVITEES(data.inviteeList);
        	//GLOBALS.Attendants=data.meetingattendants;
        	//DESIGN.FILL_MEETING_ATTENDANTS(GLOBALS.Attendants);
        	DESIGN.addResource();
            var startDate = new Date(data.startTime);
            var startStr = GUI_HELPER.GetDayName(startDate.getDay()) + ", " 
                + GUI_HELPER.GetMonthName(startDate.getMonth()) + " " 
                + startDate.getDate() + ", "
                + startDate.getFullYear() + " at "
                + startDate.getHours() + ":" 
                + startDate.getMinutes() + " ("
                + data.timeZone;
            
            var endDate = new Date(data.endTime);
            var endStr = GUI_HELPER.GetDayName(endDate.getDay()) + ", " 
                + GUI_HELPER.GetMonthName(endDate.getMonth()) + " " 
                + endDate.getDate() + ", "
                + endDate.getFullYear() + " at "
                + endDate.getHours() + ":" 
                + endDate.getMinutes() + " ("
                + data.timeZone;
            
            $("#lblSubject").html(data.subject);
            $("#divAgenda").html(data.agenda);
            $("#lblStartTime").html(startStr);
            $("#lblEndTime").html(endStr);
            
            if(data.meetingTypeId == 1) {
                $("#lblLocation").html("online meeting");
            }
           else if(data.meetingTypeId == 2) {
               $("#lblLocationHeader").html("IRC Link")
               $("#lblLocation").append(
                   $("<a>").attr("href", data.irclink).attr("target","_blank").append(data.irclink)
               );
           }
           else if(data.meetingTypeId == 3) {
               $("#lblLocation").html(data.location);
           }
           else if(data.meetingTypeId ==4) {
               $("#lblLocation").html(data.location);
           }
            
            if(data.status == 0) {
                $("#spnStatus").html("Status: Upcoming");
            } else if(data.status == 1) {
                $("#spnStatus").html("Status: Ongoing");
            } else if(data.status == 2) {
                $("#spnStatus").html("Status: Finished");
            } else if(data.status == 3) {
                $("#spnStatus").html("Status: Cancelled");
            }

            GetUserInfo(data.meetingOrganizerUserId, DESIGN.FillOrganizerInfo, null);
            SP_BANK.GetMeetingMoms(GLOBALS.MeetingId, DESIGN.FillMeetingMoms, null);
            SP_BANK.GetMeetingPosts(GLOBALS.MeetingId, DESIGN.FillMeetingPosts, null);
        },
        FillContentError: function(data) {
            alert(data);
        },
        FillMeetingPosts: function(data) {
            $("#commentList").html("");
            var userId = GetQueryStringValue("uid");
            for(var i = 0; i< data.length; i++) {
                var d = new Date(data[i].postDate);
                var postDateStr = "on " + GUI_HELPER.GetDayName(d.getDay()) + ", " + GUI_HELPER.GetMonthName(d.getMonth()) 
                    + " "+ d.getDate() + ", " + d.getFullYear();
                var userName = "by " + data[i].user.name + " " + data[i].user.surname;
                var userLink = "ViewProfile.html?uid=" + userId + "&vid=" + data[i].user.userId;
                $("#commentList").append(
                    $("<li>").append(
                        $("<a>").attr("class","related-post-item-title").attr("title",data[i].title).append(data[i].title)
                    ).append(
                        $("<span>").attr("class","related-post-item-summary").append(
                            $("<span>").attr("class", "related-post-item-summary-text").append(data[i].post)
                        ).append(
                            $("<span>").attr("style","display:block;clear:both;")
                        )
                    ).append(
                        $("<footer>").attr("class","nbtentry-meta").append(
                            $("<span>").attr("class","nbtpost-date").append(postDateStr)
                        ).append(
                            $("<span>").attr("class","nbtbyline").append(
                                $("<span>").append(
                                    $("<a>").attr("rel","author").attr("href",userLink).attr("title","author profile").append(userName)
                                )
                            )
                        )
                    )
                );
            }
        },
        FillOrganizerInfo: function(data) {
            var nameSurname = data.name + " " + data.surname;
            $("#lblOrganizer").html(nameSurname);
        },
        ReturnToMeeting: function() {
            var url = "meeting.html?mid=" + GLOBALS.MeetingId + "&cid=" + GLOBALS.CommunityId + "&uid=" + GLOBALS.UserId;
            window.location = url;
        },
        FillMeetingMoms: function(data) {
            $("#momBodyField").val("");
			$("#momBodyField").val(data.meetingnote);
            var userId = GetQueryStringValue("uid");
            for(var i = 0; i< data.attendants.length; i++) { 
            	var x="";
            }
        },
        Postmom: function() {  
            var mom = $("#momBodyField").val(); 
            var meetingId = GetQueryStringValue("mid");
            var attendants = GLOBALS.Attendants;
            SP_BANK.Postmom(meetingId,mom, attendants, DESIGN.PostmomSuccess, DESIGN.PostmomError);
        },
        PostmomSuccess: function(data) {
            $("#momBodyField").val(""); 
            DESIGN.GetContent();
        },
        PostmomError: function(data) {
            alert("Error occured: " + data.statusText);
        },
        addResource: function() {
            setTimeout(function () { 
                $("#resourceuplaodformframe").attr("src","/uploadresource.html"); 
                setTimeout(function () { 
                	var communityId = GetQueryStringValue("cid");
                    var userId = GetQueryStringValue("uid"); 
                    var meetingId = GetQueryStringValue("mid"); 
                    if(userId>0){

                    	$("#btnAddResource").attr("style","display:block;"); 
                    	$("#resourceuplaodformframe").contents().find("#hiddenuiforresource").val(userId);
    	            	$("#resourceuplaodformframe").contents().find("#hiddenciforresource").val(communityId); 
    	            	$("#resourceuplaodformframe").contents().find("#hiddenmiforresource").val(meetingId); 
                    }	
                    else{
                    	$("#btnAddResource").attr("style","display:none;"); 
                    }

	            	 
	            	SP_BANK.GetMeetingResources(meetingId, DESIGN.FillMeetingResources, GUI_HELPER.SERVICE_CALLBACK_ERR);
                
                },1000);
	    	},2000);
            	
		}, 
        FillMeetingResources: function(data) {
            if(data == null) {
                return;
            }
            $("#resourceList").html("");
            var communityId = GetQueryStringValue("cid");
            var userId = GetQueryStringValue("uid");
            var meetingId = GetQueryStringValue("mid");
            
            
            var table= document.getElementById('tblResourceList');
			table.innerHTML = "";
			
			var thead= document.createElement('thead');
			
			var th1= document.createElement('th');
			th1.innerHTML="Resource Name";
			
			//var th2= document.createElement('th');
			//th2.innerHTML="User Name";
			

			var th3= document.createElement('th');
			th3.innerHTML="User Profile";
			

			var th4= document.createElement('th');
			th4.innerHTML="";
              
			
			thead.appendChild(th1); 
			//thead.appendChild(th2); 
			thead.appendChild(th3);  
			thead.appendChild(th4); 
			table.appendChild(thead);
			
            for(var i=0; i< data.length; i++) { 
               
                var _name =data[i].name;
                userId = data[i].userId;
                var _link="api/resources/download?mid="+meetingId+"&cid="+communityId+"&uid="+userId+"&fileName="+_name;
                if(i<3){
	                $("#resourceList").append(
	                    $("<li>").append(
	                        $("<a>").attr("class","related-post-item-title").attr("title",_name).attr("target","_blank").attr("href",_link).append(_name)
	                    ) 
	                );
                }
                var tr= document.createElement('tr');
                var td_name=  document.createElement('td');
                td_name.innerHTML= _name ; 
                
                var td_user=  document.createElement('td');  
                var td_user_profile=  document.createElement('td'); 
                
            	 
                td_user.innerHTML="<span style='cursor:pointer;' onclick='DESIGN.ViewUser(" +  data[i].userId+ ");'>See User</span>"; 
                         
                 

                var td_link=  document.createElement('td');
                td_link.innerHTML="<a href='"+_link+"' target='_blank'>Download</a>"; 
                
                tr.appendChild(td_name);
				//tr.appendChild(td_user_profile);
				tr.appendChild(td_user);
				tr.appendChild(td_link);
				table.appendChild(tr);  
				
				if(i== data.length-1){
	                $("#resourceList").append(
	                    $("<li>").append(
	                        $("<a>").attr("class","related-post-item-title").attr("title","See All").attr("href","#").attr("onclick","$('#divResourceList').show(); GUI_HELPER.OPENWINDOW('divResourceList','Resource List');").append("See All")
	                    ) 
	                );
                }
            }
        },
        ViewUser: function (userId) {
            var uid = GetQueryStringValue("uid");
            window.open( window.location.origin+"/ViewProfile.html?uid=" + uid + "&vid=" + userId);
            //window.location = "ViewProfile.html?uid=" + uid + "&vid=" + userId;
        }, 
        FILL_MEETING_ATTENDANTS: function(data) {

            $("#attendants").html("");
            if(!GUI_HELPER.NOU(data) || data.length==0 ) {
                return;
            } 
            var communityId = GetQueryStringValue("cid");
            var userId = GetQueryStringValue("uid");
            var meetingId = GetQueryStringValue("mid");
            
            
            var table= document.getElementById('tblAttendantsList');
			table.innerHTML = "";
			
			var thead= document.createElement('thead');
			
			var th1= document.createElement('th');
			th1.innerHTML="Attendant Name"; 
			
			var th3= document.createElement('th');
			th3.innerHTML="User Profile";
			
			
			thead.appendChild(th1);  
			thead.appendChild(th3);  
			table.appendChild(thead);
			
            for(var i=0; i< data.length; i++) { 
			   var nameSurname = data[i].user.name + " " + data[i].user.surname; 
			   var photoLink="api/resources/download?uid="+data[i].user.userId+"&fileName="+data[i].user.photoLink; 
			   if(data[i].user.photoLink == null){ 
			       photoLink = "images/man-icon.png";
			   } 
                if(i<3){ 
	                $("#attendants").append(
                            $("<li>").append(
                                $("<img>")
                                .attr("alt", nameSurname)
                                .attr("title", nameSurname)
                                .attr("class", "communityMemberPic")
                                .attr("src", photoLink)
                                .attr("width", "40")
                                .attr("height", "40")
                                .attr("onclick", "DESIGN.ViewUser(" + data[i].user.userId + ");")
                            )
                        );
                }
                var tr= document.createElement('tr');
                var td_name=  document.createElement('td');
                td_name.innerHTML= nameSurname ; 
                
                var td_user=  document.createElement('td');   
                td_user.append(
                        $("<img>")
                        .attr("alt", nameSurname)
                        .attr("title", nameSurname)
                        .attr("class", "communityMemberPic")
                        .attr("src", photoLink)
                        .attr("width", "40")
                        .attr("height", "40")
                        .attr("onclick", "DESIGN.ViewUser(" + data[i].user.userId + ");")
                    );
                tr.appendChild(td_name); 
				tr.appendChild(td_user); 
				table.appendChild(tr);  
				
				if(i== data.length-1){
	                $("#attendants").append(
	                    $("<li>").append(
	                        $("<a>").attr("class","related-post-item-title").attr("title","See All").attr("href","#").attr("onclick","$('#divAttendantsList').show(); GUI_HELPER.OPENWINDOW('divAttendantsList','Attendant List');").append("See All")
	                    ) 
	                );
                }
            }
        },
        FillCommunityMembers: function(data) {
            if(data != null && data.length > 0) {
                for(var i =0; i<data.length ; i++) {
                    if(i==data.length-1) {
                        DESIGN.ADD_USER_FINAL(data[i].user);
                    } else {
                        DESIGN.ADD_USER(data[i].user);
                    }
                    
                }
            }
        },
	    FILL_MEETING_INVITEES:function(data){
	    	if(data != null && data.length > 0)
	    	{
	    		for(var i =0; i<data.length ; i++)
	    		{
	    			
	    			if(i==data.length-1)
	    				SP_BANK.GetUsers(data[i].userId,DESIGN.ADD_USER_FINAL,GUI_HELPER.SERVICE_CALLBACK_ERR);
	    			else
	    				SP_BANK.GetUsers(data[i].userId,DESIGN.ADD_USER,GUI_HELPER.SERVICE_CALLBACK_ERR);
	    		}
	    	}
	    },
        ADD_USER:function(data){
	    	if(data != null)
	    	{
	    		GLOBALS.Members.push({'label':data.userId,'value':data.name + " " + data.surname}); 
	    	}
	    },
	    ADD_USER_FINAL:function(data){
	    	if(data != null)
	    	{
	    		GLOBALS.Members.push({'label':data.userId,'value':data.name + " " + data.surname}); 
	    	}
	    	
	    	$('#txtAllmembers').combobox({
   			 valueField: 'label',
   			 textField: 'value',
   			 data:GLOBALS.Members,
   			 onSelect: function(rec){
   		            var email =  rec.value;
   		            var userid =  rec.label; 
   		            DESIGN.ADD_ATTENDANTS(userid,email);
   		        }
	    	});
	    	setTimeout(function(){
    			$('.textbox.combo').css({"width":"100%","height":"35px","padding":"5px"});
    			$('.textbox-addon.textbox-addon-right').css({"right":"0px","top":"6px"});
    			$('.textbox-text.validatebox-text.textbox-prompt').css({"width":"100%","height":"25px"});
    			
    		},1000);
	    },
	    ADD_ATTENDANTS:function(userid,email){
        	try{ 
        		GLOBALS.AttendantsList[userid]=email;
        		var invitedMembersContent = ""; 
        		GLOBALS.Attendants=[];
                for(var i = 0; i< GLOBALS.AttendantsList.length; i++){
                	if(GUI_HELPER.NOU(GLOBALS.AttendantsList[i])){
                		invitedMembersContent = invitedMembersContent + "<img src='images/Delete.png' onclick='DESIGN.REMOVE_INVITEES(" + i+ ");' width='16' />";
                		invitedMembersContent = invitedMembersContent + "<a rel='tag'>" + GLOBALS.AttendantsList[i] + "</a>";
                		GLOBALS.Attendants.push(i)
                	}
                	if(i==GLOBALS.AttendantsList.length-1){ 
                    	invitedMembersContent = invitedMembersContent + ", ";
                    	$("#invitedMembersSpan").html(invitedMembersContent);
                    }
	                    
                }
                 
        	} catch (err) {
                GUI_HELPER.ALERT('Warning', err, GUI_HELPER.ERROR);
            }
        	
        },
        REMOVE_INVITEES:function(userid){
        	try{
        		GLOBALS.AttendantsList.splice(userid,1);
        		var invitedMembersContent = "";
        		$("#invitedMembersSpan").html(invitedMembersContent);
                for(var i = 0; i< GLOBALS.AttendantsList.length; i++){
                	if(GUI_HELPER.NOU(GLOBALS.AttendantsList[i])){
                		invitedMembersContent = invitedMembersContent + "<img src='images/Delete.png' onclick='DESIGN.REMOVE_INVITEES(" + i+ ");' width='16' />";
                		invitedMembersContent = invitedMembersContent + "<a rel='tag'>" + GLOBALS.AttendantsList[i] + "</a>";
                	}
                	if(i==GLOBALS.AttendantsList.length-1){
                    	invitedMembersContent = invitedMembersContent + ", ";
                    	$("#invitedMembersSpan").html(invitedMembersContent);
                    }
	                    
                }
        	} catch (err) {
                GUI_HELPER.ALERT('Warning', err, GUI_HELPER.ERROR);
            }
        	
        }
    
    } 
    if (!window.DESIGN) { window.DESIGN = DESIGN; }
})();

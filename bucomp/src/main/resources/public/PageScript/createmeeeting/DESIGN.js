/// <reference path="../CommonScripts/GUI_HELPER.js" />
/// <reference path="SP_BANK.js" />
/// <reference path="GLOBALS.js" />

(function () {
    var DESIGN = {
    		INITIALIZE:function(){
    			try{
    				DESIGN.MEETINGTYPE_CHANGED(document.getElementById('meetingtype'));
                	GLOBALS.UserId = GetQueryStringValue("uid");
                    GLOBALS.CommunityId = GetQueryStringValue("cid"); 
                    $('#timezone').timezones();
                    DESIGN.GOT_COMMUNITY_MEMBERS(); 
                    setTimeout(function(){
                    	var text1 = '(GMT +02:00) Europe/Istanbul';
                    	$("#timezone option").filter(function() {
                    	    //may want to use $.trim in here
                    	    return $(this).text() == text1; 
                    	}).attr('selected', true);
                    	
                    },2000)
                    
                    if(GetQueryStringValue("meetingType") == "event") {
                        $("#pageHeader").html("Create Event");
                        $("#meetingtype").val("4");
                        $('#meetingtype').prop('disabled', 'disabled');
                    }
    			} catch (err) {
                    GUI_HELPER.ALERT('Warning', err, GUI_HELPER.ERROR);
                }
    			
    		},
    		INITIALIZE_MAP:function(){
    			try{

                	GLOBALS.UserId = GetQueryStringValue("uid");
                    GLOBALS.CommunityId = GetQueryStringValue("cid");
                    var mapCanvas = document.getElementById('map');
                    DESIGN.GOT_COMMUNITY_MEMBERS();
    				 var mapOptions = {
    				          center: new google.maps.LatLng(41.085408, 29.046599),
    				          zoom: 8,
    				          mapTypeId: google.maps.MapTypeId.ROADMAP
    				        };
    				GLOBALS.Map= new google.maps.Map(mapCanvas, mapOptions);
    				GLOBALS.Marker = new google.maps.Marker({
    					    map: GLOBALS.Map,
    					    draggable: true,
    					    animation: google.maps.Animation.DROP,
    					    position: {lat: 41.085408, lng: 29.046599}
    					  });
    				GLOBALS.Marker.addListener('click', DESIGN.toggleBounce);
    				GLOBALS.Geocoder= new google.maps.Geocoder;
    				google.maps.event.addListener(GLOBALS.Marker, 'dragend', function (event) {
    				    GLOBALS.Lat = this.getPosition().lat();
    				    GLOBALS.Long = this.getPosition().lng();
    				    
    				    var latlng = {lat: parseFloat(GLOBALS.Lat), lng: parseFloat(GLOBALS.Long)};
    				    GLOBALS.Geocoder.geocode({'location': latlng}, function(results, status) {
    				        if (status === google.maps.GeocoderStatus.OK) {
    				          if (results[0]) {
    				        	  //GLOBALS.Map.setZoom(11); 
    				        	  GLOBALS.GeoLocation=results[0].formatted_address; 
    				        	  
    				        	  document.getElementById('address').value=results[0].formatted_address;
    				        	  document.getElementById('txtLocation').value=GLOBALS.GeoLocation;
    				          } else {
    				            GUI_HELPER.ALERT('info','No results found',GUI_HELPER.INFO);
    				          }
    				        } else {
    				            GUI_HELPER.ALERT('info','Geocoder failed due to: ' + status,GUI_HELPER.INFO);
    				         }
    				      });
    				    
    				});
    				
    				 google.maps.event.addListener(GLOBALS.Map, 'dblclick', function(event) {
    					 GLOBALS.Marker.setPosition(event.latLng);
    					 GLOBALS.Lat = event.latLng.lat();
     				     GLOBALS.Long = event.latLng.lng();
     				    
     				    var latlng = {lat: parseFloat(GLOBALS.Lat), lng: parseFloat(GLOBALS.Long)};
     				    GLOBALS.Geocoder.geocode({'location': latlng}, function(results, status) {
     				        if (status === google.maps.GeocoderStatus.OK) {
     				          if (results[0]) {
     				        	  //GLOBALS.Map.setZoom(11); 
     				        	  GLOBALS.GeoLocation=results[0].formatted_address; 
     				        	  
     				        	  document.getElementById('address').value=results[0].formatted_address;
     				        	  document.getElementById('txtLocation').value=GLOBALS.GeoLocation;
     				          } else {
     				            GUI_HELPER.ALERT('info','No results found',GUI_HELPER.INFO);
     				          }
     				        } else {
     				            GUI_HELPER.ALERT('info','Geocoder failed due to: ' + status,GUI_HELPER.INFO);
     				         }
     				      });
     				    
    					});
    			} catch (err) {
                    GUI_HELPER.ALERT('Warning', err, GUI_HELPER.ERROR);
                }
    			
    		},
    		toggleBounce:function () {
    			  if (GLOBALS.Marker.getAnimation() != null) {
    				  GLOBALS.Marker.setAnimation(null);
    			  } else {
    				  GLOBALS.Marker.setAnimation(google.maps.Animation.BOUNCE);
    			  }
    			},
			GEOCODE:function () {
				var address=document.getElementById('address').value;
    			  if (address != "") {
    				  GLOBALS.Geocoder.geocode({'address': address}, function(results, status) {
  				        if (status === google.maps.GeocoderStatus.OK) {
  				          if (results[0]) {
  				        	  //GLOBALS.Map.setZoom(11); 
							GLOBALS.GeoLocation=results[0].formatted_address; 
							document.getElementById('txtLocation').value=GLOBALS.GeoLocation;
							document.getElementById('address').value= GLOBALS.GeoLocation;
							GLOBALS.Marker.setPosition(results[0].geometry.location);
							GLOBALS.Map.setCenter(results[0].geometry.location);
							GLOBALS.Lat = results[0].geometry.location.lat();
							GLOBALS.Long = results[0].geometry.location.lng();
  				          } else {
  				            GUI_HELPER.ALERT('info','No results found',GUI_HELPER.INFO);
  				          }
  				        } else {
  				            GUI_HELPER.ALERT('info','Geocoder failed due to: ' + status,GUI_HELPER.INFO);
  				         }
  				      });
    			  } else {
    				  GUI_HELPER.ALERT('Warning', "Please enter an address", GUI_HELPER.WARNING);
    			  }
    			},
	        Createmeeting: function () {
	            try { 
	                GLOBALS.HourStart= $('#txtStartHour').val(); 
	                GLOBALS.HourEnd= $('#txtEndHour').val();
	                GLOBALS.TimeZone= $("#timezone option:selected").text();
	                GLOBALS.Location= $('#txtLocation').val();
	                GLOBALS.Agenda= $('#txtagenda').val();
	                GLOBALS.MeetingType= $("#meetingtype option:selected").val();
	                GLOBALS.IRCLink= $('#txtirclink').val();
                    GLOBALS.Subject= $("#txtSubject").val();
                    
                    var selectedIndex=document.getElementById('meetingtype').selectedIndex;
                    var selectedValue=document.getElementById('meetingtype').options[selectedIndex].value;
	                
                    if(GLOBALS.Subject == '') {
                        GUI_HELPER.ALERT('Warning', 'Please fill the subject  area!', GUI_HELPER.ERROR);
	                    return;
                    } else if (GLOBALS.HourStart == '') {
	                    GUI_HELPER.ALERT('Warning', 'Please fill the start date time  area!', GUI_HELPER.ERROR);
	                    return;
	               
	                }else if (GLOBALS.IRCLink == '' && selectedValue == 2) {
	                    GUI_HELPER.ALERT('Warning', 'Please fill the Irc Link  area!', GUI_HELPER.ERROR);
	                    return;
	               
	                } else if (GLOBALS.HourEnd == '') {
	                    GUI_HELPER.ALERT('Warning', 'Please fill the end date time  area!', GUI_HELPER.ERROR);
	                    return; 
	                }
	                else if (GLOBALS.TimeZone == '') {
	                    GUI_HELPER.ALERT('Warning', 'Please fill the Time Zone area!', GUI_HELPER.ERROR);
	                    return;
	                }
	                else if (GLOBALS.Location == '' && selectedValue > 2) {
	                    GUI_HELPER.ALERT('Warning', 'Please fill the Location area!', GUI_HELPER.ERROR);
	                    return;
	                }
	                else if (GLOBALS.Agenda == '') {
	                    GUI_HELPER.ALERT('Warning', 'Please fill the Agenda area!', GUI_HELPER.ERROR);
	                    return;
	                }
	                else if (GLOBALS.MeetingType == '') {
	                    GUI_HELPER.ALERT('Warning', 'Please fill the Meeting Type area!', GUI_HELPER.ERROR);
	                    return;
	                } 
	                var find = ',';
	                var re = new RegExp(find, 'g');
	                GLOBALS.Location = GLOBALS.Location.replace(re, '');
	                SP_BANK.CREATEMEETING(DESIGN.CREATED_MEETING, GUI_HELPER.SERVICE_CALLBACK_ERR); 
	                    
	            } catch (err) {
	                GUI_HELPER.ALERT('Warning', err, GUI_HELPER.ERROR);
	            }
	        },
	        CREATED_MEETING: function (data) {
	            try {
	                if (GUI_HELPER.NOU(data)) {
	                    GUI_HELPER.ALERT('Info', "Meeting Creation is succesfull.You will be redirected to the main page in 2 seconds!", GUI_HELPER.INFO);
	                    setTimeout(function () { window.location = "community.html?uid=" + GLOBALS.UserId + "&cid=" + GLOBALS.CommunityId }, 2500);
	                }
	                else {
	                    GUI_HELPER.ALERT('Warning', "Meeting creation fails. Please try again later.", GUI_HELPER.ERROR);
	                }
	            } catch (err) {
	                GUI_HELPER.ALERT('Warning', err, GUI_HELPER.ERROR);
	            }
	        },
	        GOT_COMMUNITY_MEMBERS: function () {
	            try { 
	                
	            	SP_BANK.GETCOMMUNITYMEMBERS(GLOBALS.CommunityId,DESIGN.FILL_MEMBERS, GUI_HELPER.SERVICE_CALLBACK_ERR);
	                
	            } catch (err) {
	                GUI_HELPER.ALERT('Warning', err, GUI_HELPER.ERROR);
	            }
	        },
	        FILL_MEMBERS:function(data){
	        	try{
	        		if(!GUI_HELPER.NOU(data)){
	        			GUI_HELPER.ALERT('Warning', 'Community member list can not be found!', GUI_HELPER.ERROR);
	        			return;
	        		}	
	        		GLOBALS.Members=data;
	        		GLOBALS.MembersList=new Array();
	        		GLOBALS.InvitedMembers=new Array();
	        		for(var i=0;i<GLOBALS.Members.length;i++){
	        			if(GUI_HELPER.NOU(GLOBALS.Members[i])){
	        				var email= GLOBALS.Members[i].user.email;
	        				var userid=GLOBALS.Members[i].user.userId;
	        				GLOBALS.MembersList.push({'label':userid,'value':email});
	        				
	        			}
	        			if(i==GLOBALS.Members.length-1){
	        				
	    	        		$('#txtAllmembers').combobox({
	    	        			 valueField: 'label',
	    	        			 textField: 'value',
	    	        			 data:GLOBALS.MembersList,
	    	        			 onSelect: function(rec){
	    	        		            var email =  rec.value;
	    	        		            var userid =  rec.label; 
	    	        		            DESIGN.ADD_INVITEES(userid,email);
	    	        		        }
	    	        		});
	    	        		
	    	        		setTimeout(function(){
	    	        			$('.textbox.combo').css({"width":"100%","height":"35px","padding":"5px"});
	    	        			$('.textbox-addon.textbox-addon-right').css({"right":"0px","top":"6px"});
	    	        			$('.textbox-text.validatebox-text.textbox-prompt').css({"width":"100%","height":"25px"});
	    	        			
	    	        		},1000);
	        			} 
	        		} 
	        	} catch (err) {
	                GUI_HELPER.ALERT('Warning', err, GUI_HELPER.ERROR);
	            }
	        	
	        },
	        ADD_INVITEES:function(userid,email){
	        	try{
	        		GLOBALS.InvitedMembers[userid]=email;
	        		var invitedMembersContent = ""; 
	        		GLOBALS.InvitedMembersObj=[];
	                for(var i = 0; i< GLOBALS.InvitedMembers.length; i++){
	                	if(GUI_HELPER.NOU(GLOBALS.InvitedMembers[i])){
	                		invitedMembersContent = invitedMembersContent + "<img src='images/Delete.png' onclick='DESIGN.REMOVE_INVITEES(" + i+ ");' width='16' />";
	                		invitedMembersContent = invitedMembersContent + "<a rel='tag'>" + GLOBALS.InvitedMembers[i] + "</a>";
	                		GLOBALS.InvitedMembersObj.push({'userId':i})
	                	}
	                	if(i==GLOBALS.InvitedMembers.length-1){ 
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
	        		GLOBALS.InvitedMembers.splice(userid,1);
	        		var invitedMembersContent = "";
	        		$("#invitedMembersSpan").html(invitedMembersContent);
	                for(var i = 0; i< GLOBALS.InvitedMembers.length; i++){
	                	if(GUI_HELPER.NOU(GLOBALS.InvitedMembers[i])){
	                		invitedMembersContent = invitedMembersContent + "<img src='images/Delete.png' onclick='DESIGN.REMOVE_INVITEES(" + i+ ");' width='16' />";
	                		invitedMembersContent = invitedMembersContent + "<a rel='tag'>" + GLOBALS.InvitedMembers[i] + "</a>";
	                	}
	                	if(i==GLOBALS.InvitedMembers.length-1){
	                    	invitedMembersContent = invitedMembersContent + ", ";
	                    	$("#invitedMembersSpan").html(invitedMembersContent);
	                    }
		                    
	                }
	        	} catch (err) {
	                GUI_HELPER.ALERT('Warning', err, GUI_HELPER.ERROR);
	            }
	        	
	        },
	        OPENCLOSEMAP:function(){
        	try	{
    			$('#mapcontentdiv').slideToggle(500, function () {
					if(GLOBALS.MapDivStatus==0){
            			GLOBALS.MapDivStatus=1;
            			document.getElementById('btnOpenCloseMap').value="Close Map";
            			if(GLOBALS.Map==null){ 
            				setTimeout(function(){DESIGN.INITIALIZE_MAP();},500);
						}
            		}
            		else{
            			GLOBALS.MapDivStatus=0;
            			document.getElementById('btnOpenCloseMap').value="Open Map";
            		}
    		    });
        	}
        	catch (err) {
                GUI_HELPER.ALERT('Warning', err, GUI_HELPER.ERROR);
            } 
        },
        CANCEL:function(){
        	try{
        		GUI_HELPER.CONFIRM('Cancel?','Are you sure to cancel creating meeting?', GUI_HELPER.GO_BACK_PAGE);
        	}
        	catch (err) {
                GUI_HELPER.ALERT('Warning', err, GUI_HELPER.ERROR);
            } 
        	
        },
        MEETINGTYPE_CHANGED:function(obj){
        	try{
        		var selectedIndex=obj.selectedIndex;
        		var selectedValue=obj.options[selectedIndex].value;
        		if(selectedValue==1){//Online Meeting
        			$('#divLocation').hide(); 
        			$('#divIrclink').hide();
        			
        		}
        		else if(selectedValue==2){//IRC Meeting
        			$('#divLocation').hide(); 
        			$('#divIrclink').show();
        			
        		}
        		else if(selectedValue==3){//Face to face Meeting
        			$('#divLocation').show(); 
        			$('#divIrclink').hide();  
        		}
        		else if(selectedValue==4){//Event 
        			$('#divLocation').show(); 
        			$('#divIrclink').hide(); 
        		}
        		 
        	}
        	catch (err) {
                GUI_HELPER.ALERT('Warning', err, GUI_HELPER.ERROR);
            } 
        	
        }
    }
    if (!window.DESIGN) {
        window.DESIGN = DESIGN;
    }
})();

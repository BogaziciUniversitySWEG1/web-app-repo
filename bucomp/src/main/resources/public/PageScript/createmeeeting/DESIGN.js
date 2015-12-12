/// <reference path="../CommonScripts/GUI_HELPER.js" />
/// <reference path="SP_BANK.js" />
/// <reference path="GLOBALS.js" />

(function () {
    var DESIGN = {
    		INITIALIZE:function(){
    			try{
    				 var mapCanvas = document.getElementById('map');
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
    			  if (GLOBALS.Marker.getAnimation() !== null) {
    				  GLOBALS.Marker.setAnimation(null);
    			  } else {
    				  GLOBALS.Marker.setAnimation(google.maps.Animation.BOUNCE);
    			  }
    			},
        Createmeeting: function () {
            try {
                GLOBALS.Hour = $('#txtHour').val();
                GLOBALS.TimeZone= $("#timezone option:selected").text();
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
        },
        OPENCLOSEMAP:function(){
        	try	{
    			$('#mapcontentdiv').slideToggle(500, function () {
					if(GLOBALS.MapDivStatus==0){
            			GLOBALS.MapDivStatus=1;
            			document.getElementById('btnOpenCloseMap').value="Close Map";
            			if(GLOBALS.Map==null){ 
            				setTimeout(function(){DESIGN.INITIALIZE();},500);
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
        	
        	
        }
    }
    if (!window.DESIGN) {
        window.DESIGN = DESIGN;
    }
})();

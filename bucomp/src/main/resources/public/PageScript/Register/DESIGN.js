/// <reference path="../CommonScripts/GUI_HELPER.js" />
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

		INITIALIZE_MAP:function(){
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
                	$("#photouplaodformframe").contents().find("#hiddenuiforprofile").val(data.userId);
                	$("#photouplaodformframe").contents().find("#UploadImage").click();
                	$("#cvuplaodformframe").contents().find("#hiddenuiforcv").val(data.userId);
                	$("#cvuplaodformframe").contents().find("#Uploadcv").click();
                	
                    window.location = "dashboard.html?uid=" + data.userId;
                }
                else {
                    GUI_HELPER.ALERT('Warning', "Registration fails. Please try again later.", GUI_HELPER.ERROR);
                }
            } catch (err) {
                GUI_HELPER.ALERT('Warning', err, GUI_HELPER.ERROR);
            }
        },
        Cancel: function() {
            window.location = "index.html";
        }
    }
    if (!window.DESIGN) {
        window.DESIGN = DESIGN;
    }
})();

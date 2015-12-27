/// <reference path="../CommonScripts/GUI_HELPER.js" />
/// <reference path="SP_BANK.js" />
/// <reference path="GLOBALS.js" />

(function () {
    var DESIGN = { 
        GetContent: function() {
            var topicId = GetQueryStringValue("tid");
            SP_BANK.GetContent(topicId, DESIGN.FillContent, null);
        }, 
        FillContent: function(data) {
            var topicId = GetQueryStringValue("tid");
            var d = new Date(data.creationDate);
            var creationDateString = GUI_HELPER.GetDayName(d.getDay()) + ", " + GUI_HELPER.GetMonthName(d.getMonth()) 
	                + " "+ d.getDate() + ", " + d.getFullYear();
            $("#lblTitle").html(data.title);
            $("#divDescription").html(data.description);
            $("#communityAuthor").html("Emre Gürer");
            $("#lblCommunityCreationDate").html(creationDateString);
            $("#tagList").html("");
            for(var i = 0; i < data.tagList.length; i++) {
                if(i > 0) {
                    $("#tagList").append(", ")
                }
                
                $("#tagList").append(
                    $("<a>").attr("rel","tag").append(data.tagList[i].tag)
                );
            }
            SP_BANK.GetComments(topicId, DESIGN.FillComments, null);
        },
        PostComment: function() {
            var topicId = GetQueryStringValue("tid");
            var userId = GetQueryStringValue("uid");
            var postTypeId = GLOBALS.postTypeId;
            var title = $("#txtCommentTitle").val();
            var post = $("#commentBodyField").val();
            var associatedObjectId = topicId;
            var postDate = (new Date).getTime();
            
            SP_BANK.PostComment(userId, postTypeId, title, post, associatedObjectId, postDate, DESIGN.PostCommentSuccess, DESIGN.PostCommentError);
        },
        PostCommentSuccess: function(data) {
            $("#txtCommentTitle").val("");
            $("#commentBodyField").val("");
            DESIGN.GetContent();
        },
        PostCommentError: function(data) {
            alert("Error occured: " + data.statusText);
        },
        FillComments: function(data) {

            var communityId = GetQueryStringValue("cid");
            SP_BANK.GetCommunityMembers(communityId, DESIGN.FillMembers, DESIGN.GetTopicError);
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
        ReturnToCommunity: function() {
            var userId = GetQueryStringValue("uid");
            var communityId = GetQueryStringValue("cid");
            var url = "community.html?cid=" + communityId + "&uid=" + userId;
            window.location = url;
        },
        FillMembers: function (data) {
            if (GUI_HELPER.NOU(data)) { 
                GLOBALS.Members = data; 
                DESIGN.addResource();
            	
            } 
        },
        addResource: function() {
            setTimeout(function () { 
                $("#resourceuplaodformframe").attr("src","/uploadresource.html"); 
                setTimeout(function () { 
                	var communityId = parseInt(GetQueryStringValue("cid"));
                    var userId = parseInt(GetQueryStringValue("uid")); 
                    var topicId = parseInt(GetQueryStringValue("tid")); 
	            	$("#resourceuplaodformframe").contents().find("#hiddenuiforresource").val(userId);
	            	$("#resourceuplaodformframe").contents().find("#hiddenciforresource").val(communityId); 
	            	$("#resourceuplaodformframe").contents().find("#hiddentiforresource").val(topicId);  
	            	SP_BANK.GetTopicResources(topicId, DESIGN.FillTopicResources, DESIGN.GetTopicError);
	            },1000);
	    	},2000);
            	
		},
		GetTopicError: function () {
            //GUI_HELPER.ALERT("Alert","An error has occured.", GUI_HELPER.WARNING);
        },
        ViewUser: function (userId) {
            var uid = GetQueryStringValue("uid");
            window.open( window.location.origin+"/ViewProfile.html?uid=" + uid + "&vid=" + userId);
            //window.location = "ViewProfile.html?uid=" + uid + "&vid=" + userId;
        }, 
		FillTopicResources: function(data) {
	            if(data == null) {
	                return;
	            }
	            $("#resourceList").html("");
	            var communityId = GetQueryStringValue("cid");
	            var userId = GetQueryStringValue("uid");
	            
	            
	            var table= document.getElementById('tblResourceList');
				table.innerHTML = "";
				
				var thead= document.createElement('thead');
				
				var th1= document.createElement('th');
				th1.innerHTML="Resource Name";
				
				var th2= document.createElement('th');
				th2.innerHTML="User Name";
				

				var th3= document.createElement('th');
				th3.innerHTML="User Profile";
				

				var th4= document.createElement('th');
				th4.innerHTML="";
	              
				
				thead.appendChild(th1); 
				thead.appendChild(th2); 
				thead.appendChild(th3);  
				thead.appendChild(th4); 
				table.appendChild(thead);
				
	            for(var i=0; i< data.length; i++) { 
	                var _link =data[i].link.replace("target/classes/public/","");
	                var _name =data[i].name;
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
	                
	            	for(var j =0; j< GLOBALS.Members.length; j++){ 
	            		if( GLOBALS.Members[j].user != null && GLOBALS.Members[j].user.userId == data[i].userId){ 
	                        var nameSurname = GLOBALS.Members[j].user.name + " " + GLOBALS.Members[j].user.surname; 
	                        var photoLink= "/file-repository/users/"+GLOBALS.Members[j].user.userId+"/"+GLOBALS.Members[j].user.photoLink;
	                        td_user_profile.innerHTML= nameSurname ; 
	                        $(td_user).append(
	                    			$("<img>")
	                                .attr("alt", nameSurname)
	                                .attr("title", nameSurname)
	                                .attr("class", "communityMemberPic")
	                                .attr("src", photoLink)
	                                .attr("width", "40")
	                                .attr("height", "40") 
	                                .attr("onclick", "DESIGN.ViewUser(" + GLOBALS.Members[j].user.userId + ");")
	                                );
	            		}
						
					}		
	                	
	                 

	                var td_link=  document.createElement('td');
	                td_link.innerHTML="<a href='"+_link+"' target='_blank'>Download</a>"; 
	                
	                tr.appendChild(td_name);
					tr.appendChild(td_user_profile);
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
	        }
    }
    
    if (!window.DESIGN) { window.DESIGN = DESIGN; }
})();
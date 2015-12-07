/// <reference path="../CommonScripts/GUI_HELPER.js" />
/// <reference path="SP_BANK.js" />
/// <reference path="GLOBALS.js" />

(function () {
    var DESIGN = { 
    	GetContent: function() {
            var communityId = GetQueryStringValue("cid");
            var uid = GetQueryStringValue("uid");
            if (GUI_HELPER.NOU(uid)&& uid!= ""){
            	GLOBALS.UserId=uid;
            }
            else{
            	GLOBALS.UserId=-1;
            } 
         	 
            SP_BANK.GetCommunity(communityId,DESIGN.FillCommunity,GUI_HELPER.SERVICE_CALLBACK_ERR);
            SP_BANK.GetCommunityRequest(communityId,DESIGN.FillRequest,GUI_HELPER.SERVICE_CALLBACK_ERR);
            
            
         	 //SP_BANK.GetCommunity(communityId,DESIGN.FillCommunity,GUI_HELPER.SERVICE_CALLBACK_ERR); 
         	 //SP_BANK.GetUsers(GLOBALS.UserId,DESIGN.FillUser,GUI_HELPER.SERVICE_CALLBACK_ERR);
        }, 
        FillCommunity: function(data) {
        	if(GUI_HELPER.NOU(data)){
                $("#lblTitle").html(data.title);
            } 
        }, 
        FillUser: function(data) {
        	if(GUI_HELPER.NOU(data)){
	          setTimeout(function(){
	          	document.getElementById('u'+data.userId).innerHTML=data.name+' '+data.name+' ('+data.email+')' ;
	          	},500); 
            } 
        }, 
        SET_STATUS: function(type,communityid,userid) {
        	 if(type==1){
        	 	SP_BANK.ApproveRequest(communityid,userid,DESIGN.GetContent,GUI_HELPER.SERVICE_CALLBACK_ERR); 
        	 }
        	 else if(type==2){
        	 	SP_BANK.DenyRequest(communityid,userid,DESIGN.GetContent,GUI_HELPER.SERVICE_CALLBACK_ERR); 
        	 }
        },
        FillRequest: function (_data) {
            try {
             if (GUI_HELPER.NOU(_data)) {
  
				var _communityId=-1;		
				var table= document.getElementById('tblRequests');
                 table.innerHTML = "";
				
				var thead= document.createElement('thead');
				
				var th1= document.createElement('th');
				th1.innerHTML="Request No";
				
				var th4= document.createElement('th');
				th4.innerHTML="User";
                 
                 var th5 = document.createElement('th');
                 th5.innerHTML = "Explanation";
				
				var th6= document.createElement('th');
				th6.innerHTML="Request Date";
				 
				var th7= document.createElement('th');
				th7.innerHTML="Status";
				
				
				var th8= document.createElement('th');
				th8.innerHTML="Operation";
				
				thead.appendChild(th1);
				thead.appendChild(th4);
				thead.appendChild(th5);
				thead.appendChild(th6);
				thead.appendChild(th7);
                thead.appendChild(th8);
				table.appendChild(thead);
				
				for(var i =0; i< _data.length; i++){
					if(_data[i]!= null){
						
						var tr= document.createElement('tr');
				
				
						var td_communityRequestId =  document.createElement('td');
						td_communityRequestId.innerHTML=_data[i].communityRequestId;
						td_communityRequestId.setAttribute("id","i"+_data[i].communityRequestId);
						
                        
						var td_userId =  document.createElement('td');
						td_userId.innerHTML=_data[i].userId;
						td_userId.setAttribute("id","u"+_data[i].userId);
						var uid=_data[i].userId;
						SP_BANK.GetUsers(uid,DESIGN.FillUser,GUI_HELPER.SERVICE_CALLBACK_ERR); 
						
								
						var td_status =  document.createElement('td');
						td_status.setAttribute("id","s"+td_communityRequestId); 
						
						
						var td_opt =  document.createElement('td');
						td_opt.setAttribute("id","o"+td_communityRequestId); 
						
						if(_data[i].status==0){
							td_opt.innerHTML="Requested";
							td_status.innerHTML="<img style=\"width:20px; cursor: pointer;\" src=\"../../images/thick.png\" title=\"Approve\" onclick=\"DESIGN.SET_STATUS(1,"+_data[i].communityId+","+_data[i].userId+");\">";
							td_status.innerHTML+="<img style=\"width:20px;cursor: pointer;\" src=\"../../images/cross.png\" title=\"Deny\" onclick=\"DESIGN.SET_STATUS(2,"+_data[i].communityId+","+_data[i].userId+");\">"; 
						} 
						else if(_data[i].status==1){
							td_opt.innerHTML="Approved";
							td_status.innerHTML="<img style=\"width:20px;cursor: pointer;\" src=\"../../images/cross.png\" title=\"Deny\" onclick=\"DESIGN.SET_STATUS(2,"+_data[i].communityId+","+_data[i].userId+");\">";
						} 
						else {
							td_opt.innerHTML="Denied";
							td_status.innerHTML="<img style=\"width:20px;cursor: pointer;\" src=\"../../images/thick.png\" title=\"Approve\" onclick=\"DESIGN.SET_STATUS(1,"+_data[i].communityId+","+_data[i].userId+");\">";
						} 
                        
                        var td_explanation = document.createElement('td');
                        td_explanation.innerHTML = _data[i].explanation;
                        td_explanation.setAttribute("id", "e" + _data[i].communityRequestId);
						
						var td_requestDate =  document.createElement('td');
						var d = new Date(_data[i].requestDate);
						td_requestDate.innerHTML=d.toLocaleDateString();
						td_requestDate.setAttribute("id","d"+_data[i].requestDate); 
						
						tr.appendChild(td_communityRequestId);
						tr.appendChild(td_userId);
                        tr.appendChild(td_explanation);
						tr.appendChild(td_requestDate); 
						tr.appendChild(td_opt);
						tr.appendChild(td_status);
						table.appendChild(tr); 
					}
					
				}		
						
                }
                else {
                    GUI_HELPER.ALERT(' GetCommunityRequest', 'not found', GUI_HELPER.INFO);
                }
            } catch (err) {
                GUI_HELPER.ALERT('GetCommunityRequest', err, GUI_HELPER.ERROR);
            } 
		}
    } 
    if (!window.DESIGN) { window.DESIGN = DESIGN; }
})();

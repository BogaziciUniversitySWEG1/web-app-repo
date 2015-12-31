function GetQueryStringValue(key){
    var url = window.location.href;
    var hashes = url.split("?")[1];
    if(hashes == undefined) {
        return "";
    }
    var hash = hashes.split('&');
    
    for (var i = 0; i < hash.length; i++) {
        var params=hash[i].split("=");
        if(params[0] == key){
        	try{
                return parseInt(params[1]);
        	}
        	catch (err) {
                return params[1];
        	}
        }
    }
    return "";
}
daysBetween = function( date1, date2 ) {
	  //Get 1 day in milliseconds
	  var one_day=1000*60*60*24;

	  // Convert both dates to milliseconds
	  var date1_ms = date1.getTime();
	  var date2_ms = date2.getTime();

	  // Calculate the difference in milliseconds
	  var difference_ms = date2_ms - date1_ms;
	    
	  // Convert back to days and return
	  return Math.round(difference_ms/one_day); 
	}
function IsEmail(inputStr){
    var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return re.test(inputStr);
}
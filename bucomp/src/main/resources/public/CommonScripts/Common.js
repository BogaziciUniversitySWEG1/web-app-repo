function GetQueryStringValue(key){
    var url = window.location.href;
    var hashes = url.split("?")[1];
    var hash = hashes.split('&');
    
    for (var i = 0; i < hash.length; i++) {
        var params=hash[i].split("=");
        if(params[0] == key){
            return params[1];
        }
    }
    return "";
}

function IsEmail(inputStr){
    var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return re.test(inputStr);
}
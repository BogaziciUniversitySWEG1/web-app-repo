(function () {
    var GLOBALS = {
    	ServiceParameter: "api",
        UserId: '',
        CommunityId: '',
        Hour:'',
        Location: '',
        Date: '',
        Members: new Array() ,
        Duration:'',
        Map:null,
        MapLocation:null,
        MapDivStatus:0,
        Marker:null,
        Lat:null,
        Long:null,
        GeoLocation:null,
        Geocoder:null
        
    }
    if (!window.GLOBALS) { window.GLOBALS = GLOBALS; }
})();

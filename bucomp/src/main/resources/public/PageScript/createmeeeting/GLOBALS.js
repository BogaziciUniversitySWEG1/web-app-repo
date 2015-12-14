(function () {
    var GLOBALS = {
    	ServiceParameter: "api",
        UserId: '',
        CommunityId: '',
        HourStart:'',
        HourEnd:'',
        Location: '',
        Date: '',
        Members:null,
        Duration:'',
        Map:null,
        MapLocation:null,
        MapDivStatus:0,
        Marker:null,
        Lat:null,
        Long:null,
        GeoLocation:null,
        Geocoder:null,
        TimeZone:null,
        Agenda:null,
        Status:0,
        MeetingType:null,
        InvitedMembers:null,
        InvitedMembersObj:'',
        MembersList:null,
        IRCLink:'',
        Subject:''
        
    }
    if (!window.GLOBALS) { window.GLOBALS = GLOBALS; }
})();

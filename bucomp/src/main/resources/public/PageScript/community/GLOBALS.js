(function () {
    var GLOBALS = {
        ServiceParameter: "api",
        Id: -1,
        Members: new Array() ,
        UserId:-1,
        isMember: false,
        memberRoleId: 4,
        isOwner: false,
        canCreatePost: false,
        canCreateMeeting: false,
        canAddResource: false,
        canCreateTopic: false,
        canJoin: false,
        communityCount: 0,
        Communities: new Array(),
        ResourceList:new Array()
    }
    if (!window.GLOBALS) { window.GLOBALS = GLOBALS; }
})();

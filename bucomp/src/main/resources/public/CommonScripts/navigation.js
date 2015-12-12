/// <reference path="GUI_HELPER.js" />

jQuery(document).ready(function ($) {
    var userId = GetQueryStringValue("uid");
    $(window).on('load', CreateHeader);
    $(window).on('load', CreateMenu);
    $(window).on('load', navMenu);
    GetUserInfo(userId, FillUserInfo, null);
});

function CreateHeader() {
    var userId = GetQueryStringValue("uid");
    if (userId == "") {
        $("#masthead").append(
            $("<div>").attr("class", "site-header-wrapper").append(
                $("<div>").attr("class", "bwrapsite-branding").append(
                    $("<div>").attr("class", "headersec section").attr("id", "headersec").append(
                        $("<div>").attr("class", "widget Header").attr("id", "Header1").append(
                            $("<div>").attr("id", "header-inner").append(
                                $("<div>").attr("class", "titlewrapper").append(
                                    $("<h1>").attr("class","site-title").append(
                                        $("<a>").attr("href","index.html").append("BuComp")
                                    )
                                )
                            ).append(
                                $("<h2>").attr("class", "site-description").append("BU Community Groups")
                            )
                        )
                    )
                )
            ).append(
                $("<div>").attr("class", "togglesnbtdiv").append(
                    $("<div>").attr("class","togglenbtclass").attr("id","menu-toggle").attr("title","Home").attr("onclick","window.location='index.html';").append(
                        $("<span>").attr("class","screen-reader-text").append("Menu")
                    )
                ).append(
                    $("<div>").attr("class","togglenbtclass").attr("id","user-toggle").attr("title","Login").append(
                        $("<span>").attr("class","screen-reader-text").append("User")
                    )
                )
            )
        );
    } else {
        var indexLink = "index.html?uid=" + userId;
        $("#masthead").append(
            $("<div>").attr("class", "site-header-wrapper").append(
                $("<div>").attr("class", "bwrapsite-branding").append(
                    $("<div>").attr("class", "headersec section").attr("id", "headersec").append(
                        $("<div>").attr("class", "widget Header").attr("id", "Header1").append(
                            $("<div>").attr("id", "header-inner").append(
                                $("<div>").attr("class", "titlewrapper").append(
                                    $("<h1>").attr("class", "site-title").append(
                                        $("<a>").attr("href", indexLink).append("BuComp")
                                    )
                                )
                            ).append(
                                $("<h2>").attr("class", "site-description").append("BU Community Groups")
                            )
                        )
                    )
                )
            ).append(
                $("<div>").attr("class", "togglesnbtdiv").append(
                    $("<div>").attr("class", "togglenbtclass").attr("id", "menu-toggle").attr("title", "Home").attr("onclick", "window.location='" + indexLink + "';").append(
                        $("<span>").attr("class", "screen-reader-text").append("Menu")
                    )
                ).append(
                    $("<div>").attr("class", "togglenbtclass").attr("id", "user-toggle").attr("title", "User").append(
                        $("<span>").attr("class", "screen-reader-text").append("User")
                    )
                ).append(
                    $("<div>").attr("class","togglenbtclass").attr("id","logout-toggle").attr("title","Logout").append(
                        $("<span>").attr("class","screen-reader-text").append("Logout")
                    )
                ).append(
                    $("<div>").attr("class", "togglenbtclass").attr("id", "user-name-toggle").attr("title", "User").append(
                        $("<span>").attr("id", "lblUserNameSurname")
                    )
                )
            )
        );
    }
}
 
function CreateMenu() {
    var userId = GetQueryStringValue("uid");
    if (userId == "") {
        $("#search-toggle-nav").append(
            $("<div>").attr("class", "search-wrapper").append(
                $("<label>").append(
                    $("<span>").attr("class", "screen-reader-text").append("User Name:")
                ).append(
                    $("<input>").attr("class", "search-field").attr("name", "q").attr("placeholder", "Email").attr("type", "email").attr("value", "").attr("id", "txtEmailForLogin")
                ).append(
                    $("<span>").attr("class", "screen-reader-text").append("Password:")
                ).append(
                    $("<input>").attr("class", "search-field").attr("name", "q").attr("placeholder", "Password").attr("type", "password").attr("value", "").attr("id", "txtPasswordForLogin")
                )
            ).append(
                $("<input>").attr("class","search-submit").attr("type","button").attr("value","Login").attr("onclick","Login();")
            ).append(
                $("<input>").attr("class","search-submit").attr("type","button").attr("value","Register").attr("onclick","window.location='register.html';")
            )
        );
    } else {
        var profileLink = "EditProfile.html?uid=" + userId;
        var communityLink = "index.html?uid=" + userId;
        var dashboardLink = "dashboard.html?uid=" + userId;
        var createCommunityLink = "createCommunity.html?uid=" + userId;
        $("#search-toggle-nav").append(
            $("<div>").attr("class", "main-navigation").attr("id", "site-navigation").attr("role", "navigation").append(
                $("<div>").attr("class", "bwraptopmenu").append(
                    $("<ul>").append(
                        $("<li>").attr("class", "current_page_item").append(
                            $("<a>").attr("id", "lnkProfile").attr("href",profileLink).append("My Profile")
                        )
                    ).append(
                        $("<li>").attr("class", "current_page_item").append(
                            $("<a>").attr("id", "lnkCommunity").attr("href", communityLink).append("Communities")
                        )
                    ).append(
                        $("<li>").attr("class", "current_page_item").append(
                            $("<a>").attr("id", "lnkDashboard").attr("href", dashboardLink).append("My Communities")
                        )
                    ).append(
                        $("<li>").attr("class", "current_page_item").append(
                            $("<a>").attr("id", "lnkCreateCommunity").attr("href", createCommunityLink).append("Create Community")
                        )
                    )
                )
            )
        );
    }
}

function navMenu() {
    var menuToggle = $('#menu-toggle');
    var searchToggle = $('#user-toggle');
    var searchNav = $('#search-toggle-nav');
    var logoutToggle = $('#logout-toggle');

    function myToggleClass($myvar) {
        if ($myvar.hasClass('active')) {
            $myvar.removeClass('active');
        } else {
            $myvar.addClass('active');
        }
    }

    // Display/hide menu
    menuToggle.on('click', function () {
        myToggleClass($(this));
        searchNav.hide();
        searchToggle.removeClass('active');
    });

    // Display/hide search
    searchToggle.on('click', function () {
        searchNav.slideToggle();
        myToggleClass($(this));
        menuToggle.removeClass('active');
    });
    
    // Logout
    logoutToggle.on('click', function () {
        window.location = "index.html";
    });
}

function GetUserInfo(userId, callback, callback_err) {
    try {
        $.ajax({
            type: "GET",
            url: "api/users/" + userId,
            contentType: "application/json; charset=utf-8",
            success: function (msg) {
                if (msg == null) {
                    if (typeof callback == 'function') {
                        callback(null);
                    }
                }
                else{
                    var _data = eval(msg);
                    callback(_data);
                }
            },
            error: function (msg) {
                if (typeof callback_err == 'function') {
                    callback_err(msg);
                }
            }
        });
    }
    catch (err) {
        if (typeof callback_err == 'function') {
            callback_err(err);
        }
    }
}

function FillUserInfo(data){
    var nameSurname = data.name + " " + data.surname;
    $("#lblUserNameSurname").html(nameSurname);
}

function Login() {
    try { 
        var Email = $('#txtEmailForLogin').val();
        var Password = $('#txtPasswordForLogin').val(); 

        if (Email == '') {
            GUI_HELPER.ALERT('Warning', 'Please fill the Email area!', GUI_HELPER.ERROR);
        }
        else if (Email != '' && !GUI_HELPER.validateEmail(Email)) {
            GUI_HELPER.ALERT('Warning', 'Please enter a valid email address!', GUI_HELPER.ERROR);
        }
        else if (Password == '') {
            GUI_HELPER.ALERT('Warning', 'Please fill the Password area!', GUI_HELPER.ERROR);
        }
        else {
            GUI_HELPER.LOGIN(Email, Password, LoggedUser, GUI_HELPER.SERVICE_CALLBACK_ERR);
        }
    } catch (err) {
        GUI_HELPER.ALERT('Warning', err, GUI_HELPER.ERROR);
    }
}

function LoggedUser(data) {
    try {
        if (GUI_HELPER.NOU(data)) {
            GUI_HELPER.ALERT('Info', "Login is succesfull.You will be redirected to the main page in 2 seconds!", GUI_HELPER.INFO);
            setTimeout(function () { window.location = "dashboard.html?uid=" + data.userId }, 2500);
        }
        else {
            GUI_HELPER.ALERT('Warning', "login fails. Please try again later.", GUI_HELPER.ERROR);
        }
    } catch (err) {
        GUI_HELPER.ALERT('Warning', err, GUI_HELPER.ERROR);
    }
}
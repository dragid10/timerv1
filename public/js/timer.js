/**
 * Name: Alex Oladele
 * Date: 1/15/17
 * Course CSE 270e
 * Assignment: //TODO
 */

$(document).ready(function () {
    if (document.URL.indexOf("/about") >= 0) {
        $("#aboutTab").addClass("active");
    } else if (document.URL.indexOf("/loginform") >= 0) {
        $("#loginTab").addClass("active");
    } else {
        $("#homeTab").addClass("active");
    }
});
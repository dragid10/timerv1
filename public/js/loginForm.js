/**
 * Name: Alex Oladele
 * Date: 1/15/17
 * Course CSE 270e
 * Assignment: Timer v1.0
 */

// Waits until document has finished loading before using Jquery
$(document).ready(function () {
    // Initialize variables to be used in the doc
    var username = null,
        password = null,
        formObj = {};


    // Assigns the values of username and password to their respectful variables
    $("#username, #password").keyup(function () {
        username = $("#username").val().replace("<script>", "").replace("</script>", "");
        password = $("#password").val().replace("<script>", "").replace("</script>", "");
        // Just logging out the variables
        console.log("Username = " + username);
        console.log("Password = " + password);
        // Puts the data into an object for the post
        formObj = {
            "username": username,
            "password": password
        };
        console.log("form obj: ");
        console.log(formObj);
    });


    // Attempt to see if data is valid, but I think I'll just required handle that TODO Uncomment soon
    /*  $("#loginBtn").on('click', function () {
     $("#loginForm").on('submit', function (event) {
     if ((username || password) === ("" || " " || undefined || null)) {
     event.preventDefault();
     $("<div class=\"alert alert-danger\"><strong>Error:</strong> Invalid Username or Password</div>").insertAfter("h2");
     console.log("Alert Created");
     $(".alert-danger").show();
     console.log("Alert shown");
     }
     });
     });*/

    $("#loginBtn").click(function () {
        $.post("http://127.0.0.1:3610/loginform", formObj, function (data, status) {
            console.log("Being sent:");
            console.log(formObj);

            if (status === "ok") {
                console.log("Stats was okay!");
                console.log("Post request went through");
            }
        }, "json");
        /*.error(function() {
         console.log("POST DIDN'T GO THROUGH");
         });*/
    })

});
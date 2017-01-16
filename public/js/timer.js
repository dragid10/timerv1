/**
 * Name: Alex Oladele
 * Date: 1/15/17
 * Course CSE 270e
 * Assignment: Timer v1.0
 */

// Waits until document is finished loading before any javascript occurs
$(document).ready(function () {
    // TAB STUFF
    if (document.URL.indexOf("/about") >= 0) {
        // If on the about page, then change the active tab to About
        $("#aboutTab").addClass("active");
    } else if (document.URL.indexOf("/loginform") >= 0) {
        // If on login page, then change active tab to Login
        $("#loginTab").addClass("active");
    } else {
        // Default active tab is the home page
        $("#homeTab").addClass("active");
    }

    // Checks that there are numbers being input into the number boxes
    $("#timer1").find("input").keyup(function () {
        var content = $(this).val();
        console.log("Content is: " + content);
        // console.log($("#timer1").find("input").val());

    });

    // Defines some action when a start button is clicked
    $(".btn-js").click(function () {
        debugger;
        switch ($(this).text()) {
            // Start button is clicked, then it changes the color and adds the reset button next to it TODO ADD START FUNCTIONALITY
            case "Start":
                $(this).switchClass("btn-success", "btn-warning");
                $(this).text("Pause");
                $(".buttons").css("display", "inline-block");
                $("<button type=\"button\" class=\"btn btn-danger\">Reset</button>").insertAfter(this).addClass("btn-reset");
                break;
            //    If Pause button clicked, then changes color and text to Resume and starts timer TODO ADD PAUSE TIMER FUNCTIONALITY
            case "Pause":
                $(this).text("Resume").switchClass("btn-warning", "btn-info");
                break;
            //    If Resume clicked, changes btn color and text to paus TODO ADD RESUME TIMER FUNCTIONALITY
            case "Resume":
                $(this).text("Pause").switchClass("btn-info", "btn-warning");
                break;
            //    Default case that should really never be gotten to
            default:
                console.log("Hit Default statement for some reason");
        }

        // TODO ADD RESET FUNCTIONALITY
        /* TODO USE THIS FOR STOP
         /!*$(this).text("Start").switchClass("btn-warning", "btn-success");
         $(this).siblings(".btn-reset").remove();
         $(".buttons").css("display", "block");*!/
         }*/
    })
});
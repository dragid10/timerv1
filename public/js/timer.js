/**
 * Name: Alex Oladele
 * Date: 1/15/17
 * Course CSE 270e
 * Assignment: Timer v1.0
 */

// Waits until document is finished loading before any javascript occurs
$(document).ready(function () {

    // Used variables
    var timeToAdd = 0,
        doneTime = "",
        curTime = 0,
        hours = [],
        timers = [],
        timer1 = {
            hrs: 0,
            min: 0,
            sec: 0
        },
        timer2 = {
            hrs: 0,
            min: 0,
            sec: 0
        },
        timer3 = {
            hrs: 0,
            min: 0,
            sec: 0
        };

    // Loop to populate timers array
    for (var i = 0; i < 3; i++) {
        var newTimer = {timerName: "", doneTime: 0, state: 0};
        timers.push(newTimer)
    }

    // =============================================================== Start Functions
    /**
     *
     * @returns int - Time in seconds
     */
    function getNow() {
        var today = new Date(),
            h = twoDigits(today.getHours()),
            m = twoDigits(today.getMinutes()),
            s = twoDigits(today.getSeconds());
        // Converts Nums to seconds to do easier math and stuff
        return convertToSeconds(h, m, s)
    }

    /**
     *
     * @param secs - Number in seconds which you want to convert
     * @returns {{hour: Number, min: Number, sec: Number}} - Object
     */
    function convertFromSeconds(secs) {
        var a = secs / 3600;
        var hour = parseInt(a, 10);
        var b = a - hour;
        var minute = parseInt((b * 60), 10);
        var c = (b * 60) - minute;
        var sec = parseInt(Math.round(c * 60), 10);

        return {
            hrs: hour,
            min: minute,
            sec: sec
        }
    }

    /**
     *
     * @param num
     * @returns int
     */
    function twoDigits(num) {
        if (num < 10) {
            return "0" + num;
        } else {
            return num;
        }
    }

    /**
     *
     * @param h - Hours
     * @param m - Minutes
     * @param s - seconds
     * @returns int - time in seconds format
     */
    function convertToSeconds(h, m, s) {
        return (h * 3600) + (m * 60) + +s;
    }

    // Called every second to decrement display time
    // State: 0 = Not Running,  1 = Running,   2 = Paused,   3 = Done
    function decrementTimers() {
        for (var i = timers.length - 1; i >= 0; i--) {
            var state = timers[i].state;
            var timeLeft = timers[i].doneTime - getNow();

            if (state == 1 && timeLeft < 0) {
                timers[i].state = 3;
                updateTimerDisplay(i);
            } else if (timers[i].state == 1) {
                updateTimerDisplay(i);
            } else if (timers[i].state == 2) {
                timers[i].doneTime++;
            }
        }
        // To update visuals with page
        window.setTimeout(decrementTimers, 1000);
    }

    // TODO Make work with own code
    /**
     *
     * @param timerNum - the Timer whose display is going to be updated
     */
    function updateTimerDisplay(timerNum) {
        timeElement = "#timer" + (timerNum + 1);
        timeLeft = timers[timerNum].doneTime - getNow();
        var q = convertFromSeconds(timers[timerNum].doneTime);
        // TODO See if this part is really necessary
        // q.hrs = q.hrs % 12 + 7;
        // TODO Potentially change with doneTime var
        $(timeElement + " .timerdonetime").html(twoDigits(q.hrs) + ":" + twoDigits(q.min) + ":" + twoDigits(q.sec));

        // TODO If problem, change back to > instead of >=
        if (timeLeft >= 0) {
            hms = convertFromSeconds(timeLeft);
            $(timeElement + " .seconds").val(twoDigits(hms.sec));
            $(timeElement + " .minutes").val(twoDigits(hms.min));
            $(timeElement + " .hours").val(twoDigits(hms.hrs));

        }
    }

    /**
     *
     * @param timer - Timer object who's values to update
     * @returns Object - Returns object with updates values
     */
    function updateTimerVal(timer) {
        timer.hrs = $(".hours").val();
        timer.min = $(".minutes").val();
        timer.sec = $(".seconds").val();

        return timer
    }

    function prettifyTime(obj) {
        return obj.hrs + ":" + obj.min + ":" + obj.sec

    }

    function isTimer1(context) {
        return $(context).closest(".timers").attr('id') === "timer1";
    }

    function isTimer2(context) {
        return $(context).closest(".timers").attr('id') === "timer2";
    }

    function isTimer3(context) {
        return $(context).closest(".timers").attr('id') === "timer3";
    }

    // =============================================================== End Functions

    /**
     * TIMER CORE LOGIC - STOLEN FORM CAMPBELL
     */
    var timeLeft = getNow() - doneTime;

    // Disable scroll when focused on a number input.
    $('form-group').on('focus', 'input[type=number]', function (e) {
        $(this).on('wheel', function (e) {
            e.preventDefault();
        });
    });

    // Checks that there are numbers being input into the number boxes NUM-CONTENT
    $("#timer1, #timer2, #timer3").find(".hours, .minutes, .seconds").keyup(function () {

        // Checks to make sure that values are valid for hours
        if ($(".hours").val() > 11 || $(".hours").val() < 0 || $(".hours").val() === undefined) {
            $(this).val(0);
        }
        // Checks to make sure that values are valid for minutes
        if ($(".minutes").val() > 59 || $(".minutes").val() < 0 || $(".minutes").val() === undefined) {
            $(this).val(0);
        }

        // Checks to make sure that values are valid for seconds
        if ($(".seconds").val() > 59 || $(".seconds").val() < 0 || $(".seconds").val() === undefined) {
            $(this).val(0);
        }

        // Updates the Timer objects with the values from the input
        if ($(this).closest(".timers").attr('id') === "timer1") {
            timer1 = updateTimerVal(timer1);
            console.log(timer1);
        } else if ($(this).closest(".timers").attr('id') === "timer2") {
            timer2 = updateTimerVal(timer2);
        } else if ($(this).closest(".timers").attr('id') === "timer3") {
            timer3 = updateTimerVal(timer3);
        } else {
            console.log("Didn't get nothing, try different selectors");
        }


    });

    // Defines some action when a start button is clicked
    $(".btn-js").click(function () {



        // TODO Delete this maybe
        /*  curTime = getNow();
         doneTime = timeToAdd + curTime;*/

        // Switch statement that changes the Buttons and colors when clicked
        switch ($(this).text()) {
            // Start button is clicked, then it changes the color and adds the reset button next to it
            case "Start":
                var tempTimer;
                // Calculates the Time to add onto the cur time depending on the timer
                if ($(this).closest(".timers").attr('id') === "timer1") {
                    timeToAdd = convertToSeconds(timer1.hrs, timer1.min, timer1.sec);
                    curTime = getNow();
                    tempTimer = timers[0];
                    tempTimer.timername = $(this).closest("label").val();
                    tempTimer.doneTime = timeToAdd + curTime;
                    tempTimer.state = 1;
                    decrementTimers();

                } else if ($(this).closest(".timers").attr('id') === "timer2") {
                    // TODO Fix timer not being independent
                    timeToAdd = convertToSeconds(timer2.hrs, timer2.min, timer2.sec);
                    curTime = getNow();
                    tempTimer = timers[1];
                    tempTimer.timername = $(this).closest("label").val();
                    tempTimer.doneTime = timeToAdd + curTime;
                    tempTimer.state = 1;
                    decrementTimers();

                } else if ($(this).closest(".timers").attr('id') === "timer2") {
                    // TODO Fix timer not being independent
                    timeToAdd = convertToSeconds(timer3.hrs, timer3.min, timer3.sec);
                    curTime = getNow();
                    tempTimer = timers[2];
                    tempTimer.timername = $(this).closest("label").val();
                    tempTimer.doneTime = timeToAdd + curTime;
                    tempTimer.state = 1;
                    decrementTimers();

                } else {
                    console.log("Selector Wasn't found, try to experiment");
                }
                $(this).switchClass("btn-success", "btn-warning");
                $(this).text("Pause");
                $(".buttons").css("display", "inline-block");
                $("<button type=\"button\" class=\"btn btn-danger\" id='reset'>Reset</button>").insertAfter(this).addClass("btn-reset");
                break;
            //    If Pause button clicked, then changes color and text to Resume and starts timer TODO ADD PAUSE TIMER FUNCTIONALITY
            case "Pause":
                console.log($(this).closest(".timers"));
                $(this).text("Resume").switchClass("btn-warning", "btn-info");
                if (isTimer1($(this))) {
                    tempTimer = timers[0];
                    tempTimer.state = 2;
                } else if (isTimer2($(this))) {
                    tempTimer = timers[0];
                    tempTimer.state = 2;
                } else if (isTimer3($(this))) {
                    tempTimer = timers[0];
                    tempTimer.state = 2;
                }
                break;
            //    If Resume clicked, changes btn color and text to paus TODO ADD RESUME TIMER FUNCTIONALITY
            case "Resume":
                $(this).text("Pause").switchClass("btn-info", "btn-warning");
                if (isTimer1($(this))) {
                    debugger;
                    tempTimer = timers[0];
                    tempTimer.state = 1;
                } else if (isTimer2($(this))) {
                    tempTimer = timers[0];
                    tempTimer.state = 1;
                } else if (isTimer3($(this))) {
                    tempTimer = timers[0];
                    tempTimer.state = 1;
                }
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
    });

    // Reset button clears timers
    if ($("#reset").length) {
        $("#reset").click(function () {
            console.log("Reset clicked");

            console.log($(this).closest(".timername"));

            $(this).closest(".timername").val("");
            $(this).closest(".hours").val("");
            $(this).closest(".minutes").val("");
            $(this).closest(".seconds").val("");
            if (isTimer1($(this))) {
                timers[0].doneTime = 0;
                timers[0].state = 0;
            } else if (isTimer2($(this))) {
                timers[1].doneTime = 0;
                timers[1].state = 0;
            } else if (isTimer3($(this))) {
                timers[2].doneTime = 0;
                timers[2].state = 0;
            }
        })
    }

});
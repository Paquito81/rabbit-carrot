$(document).ready(function () {// essentially tells engine to load 1)html & 2)css first.
    //display current day & time.
    $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));

    //Assign saveBtn click listener for user input and time stamp??
    $(".saveBtn").on("click", function () {
        event.preventDefault();
        //get nearby values.
        var formValue = $(this).siblings(".form-control").val();
        console.log(formValue);
        var listItem = $(this).parent().attr("hour");

        //set items in local storage.
        localStorage.setItem(listItem, formValue);
    })
    //load any saved data from LocalStorage - do this for each hour created.
    $("#hour9").val(localStorage.getItem("9"));
    $("#hour10").val(localStorage.getItem("10"));
    $("#hour11").val(localStorage.getItem("11"));
    $("#hour12").val(localStorage.getItem("12"));
    $("#hour13").val(localStorage.getItem("1"));
    $("#hour14").val(localStorage.getItem("2"));
    $("#hour15").val(localStorage.getItem("3"));
    $("#hour16").val(localStorage.getItem("4"));
    $("#hour17").val(localStorage.getItem("5"));
    $("#hour18").val(localStorage.getItem("6"));


    function hourTracker() {
        //get current number of hours.
        var currentHour = moment().hour();

        // loop over time blocks
        $(".time-block").each(function () {
            var blockHour = parseInt($(this).attr("id").split("hour")[1]);
            console.log( blockHour, currentHour)

            //check if we've moved past this time
            if (blockHour < currentHour) {
                $(this).addClass("past");
                $(this).removeClass("future");
                $(this).removeClass("present");
            }
            else if (blockHour === currentHour) {
                $(this).removeClass("past");
                $(this).addClass("present");
                $(this).removeClass("future");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
            }
        })
    }
    hourTracker();
})
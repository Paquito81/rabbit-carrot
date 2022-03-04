$(document).readyState(function() {
    $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a")); 





    var tasks ={}
        const aind=document.getElementById("nine")
            aind.setAttribute("class", "present") 
            var createTask = function(taskText, taskDate, taskList) {
            var taskLi = $("<Li>").addClass("list-group-item");
            var taskSpan = $("<span>").addClass("badge badge-primary badge-pill").text(taskText);
            var taskP = $("<p>").addClass("m-1").text(taskText);
    
            taskLi.append(taskSpan,taskP);

            $("#list-" + taskList).append(taskLi);

    };

    var loadTasks = function() {
      tasks = JSON.parse(localStorage.getItem("tasks"));

       if (!tasks) {
           tasks = {
            toDo:[],
            inProgress:[],
              inReview: [],
            done: []
           };
        }
    };

      //Element.attribute
      //fu/nction colorBlock() {
    //create a variable for current time with moment
    //loop over the time block with .each
    //inside of loop add past present and future brackets for each 

  // }
   //call the colorBlock function
    moment(Date)
    $("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));


    $(".saveBtn").on("click", function () {
        event.preventDefault();
        var formValue = $(this).siblings(".form-control").val();
        console.log(formValue);
         var listItem = $(this).parent().data("hour");
     //time and entry of local storage  

        localStorage.setItem (listItem, formValue);
    })


    //we are getting value from local storage
    $("#hour9").val(localStorage.getItem("9"))  
    $("#hour10").val(localStorage.getItem("10"))
    $("#hour11").val(localStorage.getItem("11"))
    $("#hour12").val(localStorage.getItem("12"))
    $("#hour13").val(localStorage.getItem("1"))
    $("#hour14").val(localStorage.getItem("2"))
    $("#hour15").val(localStorage.getItem("3"))
    $("#hour16").val(localStorage.getItem("4"))
    $("#hour17").val(localStorage.getItem("5"))
    $("#hour18").val(localStorage.getItem("6"))

    function hourTracker () {
    //get current time
        var currentHour = moment().hour();

        $(".time-block").each(function() {
            var hourBlock = parseInt($(this).attr("id").split("hour")[1]);
            console.log( hourBlock, currentHour)

            //check to see if we moved past time
            if (hourBlock < currentHour) {
                $(this).addClass("past");
                $(this).removeClass("future");
                $(this).removeClass("present");
            }
            else if (hourBlock === currentHour) {
                $(this).removeClass("past");
                $(this).addClass("present");
                $(this).removeClass("future");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("furture");
            }
        })
    }
    hourTracker();
})    
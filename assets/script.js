var dayPlanner9 = $("#9");
var dayPlanner10 = $("#10");
var dayPlanner11 = $("#11");
var dayPlanner12 = $("#12");
var dayPlanner1 = $("#13");
var dayPlanner2 = $("#14");
var dayPlanner3 = $("#15");
var dayPlanner4 = $("#16");
var dayPlanner5 = $("#17");
var dayPlanner6 = $("#18")
var time = moment();

function statedPlanner() {

    $("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));

    $(".time-block").each(function () {
        
        var id = $(this).attr("id");
        var schedule = localStorage.getItem(id);

        if (schedule !== null) {
            $(this).children(".schedule").val(schedule);
        }
    });
}

statedPlanner();
var saveBtn = $(".saveBtn");

saveBtn.on("click", function () {
    
    var time = $(this).parent().attr("id");
    var schedule = $(this).siblings(".schedule").val();

    localStorage.setItem(time, schedule);
});

function timeSetting() {
    
    hour = time.hours();
    $(".time-block").each(function () {
        var thisHour = parseInt($(this).attr("id"));

        if (thisHour > hour) {
            $(this).addClass("future")
        }
        else if (thisHour === hour) {
            $(this).addClass("present");
        }
        else {
            $(this).addClass("past");
        }
    })
}

timeSetting();
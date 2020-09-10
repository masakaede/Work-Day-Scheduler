$("#currentDay").text(moment().format('dddd, MMM Do'));
console.log(moment().format('h'));
console.log(moment().format('H'));
var currentHour = Number(moment().format('H'))

/*var time = moment().format('LT')
console.log(time)
var timeSplit = time.split()
console.log(timeSplit)
console.log(time.chartAt(7))*/

var timeArray = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];

console.log(typeof $(".description").data("section"))
console.log(typeof moment().format('H'))
console.log($(".description").data("section") < currentHour)
console.log(currentHour)

console.log($(".description").data("section"))

/*if ($(".time-block .description").data("section") < currentHour) {
    $(".description").addClass("past")

    //$(textarea).attr("class", "present")
}*/
console.log($(".time-block .description").data("section") < currentHour)
$("document").ready(function () {



    // $("textarea[data-section='11']").addClass("past")
    //console.log($(".time-block div:nth-child(1)"))
    // $(".time-block div:nth-child(i) textarea").addClass("past")

    $("textarea").hasClass("description").addClass("past")
    $("textarea").filter


    //$("[class='description']").addClass("past");
    for (i = 1; i < 10; i++) {
        if ($(".time-block .description").data("section") < currentHour) {
            // $(".time-block").children(i).addClass("past");
            //$(textarea).attr("class", i)
        } else if ($(".time-block .description").data("section") === currentHour) {
            $(".time-block div:nth-child(i) textarea").addClass("present");
        } else if ($(".time-block .description").data("section") > currentHour) {
            $(".time-block div:nth-child(i) textarea").addClass("future");
        }

        /*timeArray.forEach(function(){
           if ($(".description").data("section")===moment().format('h'))
        
        })*/
    }

})
/*$("button").click(function(event) {
    event.preventDefault();
localStorage.setItem("time", text)
})*/
//localStorage.getItem("time")



//renderPlanner();

/*function renderPlanner() {

plannerList.innerHTML = "";

}*/

//constructor function - time sections
//function timeBlock(hour, data,) 

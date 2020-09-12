$("#currentDay").text(moment().format('dddd, MMM Do'));
console.log(moment().format('H'));
var currentHour = Number(moment().format('H'))

console.log(typeof currentHour)
console.log(currentHour)

//constructor function
function timeObject(timeId, row, div, button, textarea, textId) {
    this.timeId = timeId;
    this.row = row;
    this.div = div;
    this.button = button;
    this.textarea = textarea;
    this.textId = textId;
}
//time section objects
var nineObject = new timeObject("#9am", "<div class='row' id='9am' data-section='9'>", "<div class='col-2 hour'>9am</div>",
    "<div class='col-1 saveBtn'><button id='nineButton'>S</button></div>", "<textarea class='col-9 hour description' id='9Text'></textarea>", "#9Text")
var tenObject = new timeObject("#10am", "<div class='row' id='10am' data-section='10'>", "<div class='col-2 hour'>10am</div>",
    "<div class='col-1 saveBtn'><button id='tenButton'>S</button></div>", "<textarea class='col-9 hour description' id='10Text'></textarea>", "#10Text")
var elevenObject = new timeObject("#11am", "<div class='row' id='11am' data-section='11'>", "<div class='col-2 hour'>11am</div>",
    "<div class='col-1 saveBtn'><button id='elevenButton'>S</button></div>", "<textarea class='col-9 hour description' id='11Text'></textarea>", "#11Text")
var twelveObject = new timeObject("#12pm", "<div class='row' id='12pm' data-section='12'>", "<div class='col-2 hour'>12pm</div>",
    "<div class='col-1 saveBtn'><button id='twelveButton'>S</button></div>", "<textarea class='col-9 hour description' id='12Text'></textarea>", "#12Text")
var oneObject = new timeObject("#1pm", "<div class='row' id='1pm' data-section='13'>", "<div class='col-2 hour'>1pm</div>",
    "<div class='col-1 saveBtn'><button id='oneButton'>S</button></div>", "<textarea class='col-9 hour description' id='1Text'></textarea>", "#1Text")
var twoObject = new timeObject("#2pm", "<div class='row' id='2pm' data-section='14'>", "<div class='col-2 hour'>2pm</div>",
    "<div class='col-1 saveBtn'><button id='twoButton'>S</button></div>", "<textarea class='col-9 hour description' id='2Text'></textarea>", "#2Text")
var threeObject = new timeObject("#3pm", "<div class='row' id='3pm' data-section='15'>", "<div class='col-2 hour'>3pm</div>",
    "<div class='col-1 saveBtn'><button id='threeButton'>S</button></div>", "<textarea class='col-9 hour description' id='3Text'></textarea>", "#3Text")
var fourObject = new timeObject("#4pm", "<div class='row' id='4pm' data-section='16'>", "<div class='col-2 hour'>4pm</div>",
    "<div class='col-1 saveBtn'><button id='fourButton'>S</button></div>", "<textarea class='col-9 hour description' id='4Text'></textarea>", "#4Text")
var fiveObject = new timeObject("#5pm", "<div class='row' id='5pm' data-section='17'>", "<div class='col-2 hour'>5pm</div>",
    "<div class='col-1 saveBtn'><button id='fiveButton'>S</button></div>", "<textarea class='col-9 hour description' id='5Text'></textarea>", "#5Text")

var timeArray = [nineObject, tenObject, elevenObject, twelveObject, oneObject, twoObject, threeObject, fourObject, fiveObject];

$("document").ready(function () {

    //setup overall structure
    for (var i = 0; i < timeArray.length; i++) {
        $(".time-block").append(timeArray[i].row);
        $(timeArray[i].timeId).append(timeArray[i].div);
        $(timeArray[i].timeId).append(timeArray[i].textarea);

        if ($(timeArray[i].timeId).data("section") < currentHour) {
            $(timeArray[i].textId).addClass("past");
        } else if ($(timeArray[i].timeId).data("section") == currentHour) {
            $(timeArray[i].textId).addClass("present");
        } else {
            $(timeArray[i].textId).addClass("future");
        }

        $(timeArray[i].timeId).append(timeArray[i].button);
    }

    //obtain stored content
    renderStoredContent();

    function renderStoredContent() {
        var nineText = localStorage.getItem("9am", nineText);
        var tenText = localStorage.getItem("10am", tenText);
        var elevenText = localStorage.getItem("11am", elevenText);
        var twelveText = localStorage.getItem("12pm", twelveText);
        var oneText = localStorage.getItem("1pm", oneText);
        var twoText = localStorage.getItem("2pm", twoText);
        var threeText = localStorage.getItem("3pm", threeText);
        var fourText = localStorage.getItem("4pm", fourText);
        var fiveText = localStorage.getItem("5pm", fiveText);

        $("#9Text").text(nineText);
        $("#10Text").text(tenText);
        $("#11Text").text(elevenText);
        $("#12Text").text(twelveText);
        $("#1Text").text(oneText);
        $("#2Text").text(twoText);
        $("#3Text").text(threeText);
        $("#4Text").text(fourText);
        $("#5Text").text(fiveText);
    }

    //save button
    $(".time-block").on("click", function (event) {
        var element = event.target;

        if (element.matches("#nineButton")) {
            nineText = $("#9Text").val()
            localStorage.setItem("9am", nineText)
        };
        if (element.matches("#tenButton")) {
            tenText = $("#10Text").val()
            localStorage.setItem("10am", tenText)
        }
        if (element.matches("#elevenButton")) {
            elevenText = $("#11Text").val()
            localStorage.setItem("11am", elevenText)
        }
        if (element.matches("#twelveButton")) {
            twelveText = $("#12Text").val()
            localStorage.setItem("12pm", twelveText)
        }
        if (element.matches("#oneButton")) {
            oneText = $("#1Text").val()
            localStorage.setItem("1pm", oneText)
        }
        if (element.matches("#twoButton")) {
            twoText = $("#2Text").val()
            localStorage.setItem("2pm", twoText)
        }
        if (element.matches("#threeButton")) {
            threeText = $("#3Text").val()
            localStorage.setItem("3pm", threeText)
        }
        if (element.matches("#fourButton")) {
            fourText = $("#4Text").val()
            localStorage.setItem("4pm", fourText)
        }
        if (element.matches("#fiveButton")) {
            fiveText = $("#5Text").val()
            localStorage.setItem("5pm", fiveText)
        }
    })
})

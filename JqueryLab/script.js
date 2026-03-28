$(document).ready(function(){

// BASIC SELECTORS
$("#basicBtn").click(function(){

$("#para1").css("color","red");        // ID selector
$(".text").css("font-weight","bold");  // class selector
$("p").css("font-size","18px");        // element selector

});



// HIERARCHY SELECTORS
$("#hierBtn").click(function(){

$(".container p").css("background","lightblue"); // parent child

$(".container > p").css("color","green"); // direct child

$("span + p").css("border","2px solid red"); // adjacent sibling

});



// FILTER SELECTORS
$("#filterBtn").click(function(){

$("#list li:first").css("background","yellow");

$("#list li:last").css("background","orange");

$("#list li:eq(2)").css("color","red");

$("#list li:even").css("font-weight","bold");

$("#list li:odd").css("font-style","italic");

});



// ATTRIBUTE SELECTORS
$("#attrBtn").click(function(){

$("a[href]").css("color","blue");

$("input[type='text']").css("background","lightgreen");

$("a[href^='https']").css("font-weight","bold");

$("img[src$='.jpg']").css("border","3px solid green");

$("a[href*='git']").css("background","yellow");

});

});

$(document).ready(function(){

// 1. Change image source using attr()

$("#changeImg").click(function(){

$("#myImage").attr("src","IMG2.jpeg");

});


// 2. Disable checkbox using prop()

$("#disableCheck").click(function(){

$("#agree").prop("disabled", true);

});


// Enable checkbox

$("#enableCheck").click(function(){

$("#agree").prop("disabled", false);

});


// 3. Retrieve input value using val()

$("#showValue").click(function(){

var name = $("#username").val();

$("#result").text("Entered value: " + name);

});


// 4. removeAttr()

$("#remove").click(function(){
$("#agree").removeAttr("disabled");

});

});

$(document).ready(function(){

// CLICK
$("#clickBtn").click(function(){
$("#mouseResult").text("Button Clicked");
});

// DOUBLE CLICK
$("#dblclickBtn").dblclick(function(){
$("#mouseResult").text("Button Double Clicked");
});

// MOUSE ENTER
$("#mouseArea").mouseenter(function(){
$("#mouseResult").text("Mouse Entered Area");
});

// MOUSE LEAVE
$("#mouseArea").mouseleave(function(){
$("#mouseResult").text("Mouse Left Area");
});

// HOVER
$("#mouseArea").hover(function(){
$("#mouseResult").text("Hovering");
});

// MOUSE DOWN
$("#downBtn").mousedown(function(){
$("#mouseResult").text("Mouse Button Pressed");
});

// MOUSE UP
$("#upBtn").mouseup(function(){
$("#mouseResult").text("Mouse Button Released");
});


// KEYBOARD EVENTS

$("#keyboardInput").keypress(function(){
$("#keyResult").text("Key Pressed");
});

$("#keyboardInput").keydown(function(){
$("#keyResult").text("Key Down");
});

$("#keyboardInput").keyup(function(){
$("#keyResult").text("Key Released");
});


// FORM EVENTS

$("#myForm").submit(function(){
$("#formResult").text("Form Submitted");
});

$("#course").change(function(){
$("#formResult").text("Course Changed");
});

$("#name").focus(function(){
$("#formResult").text("Input Focused");
});

$("#name").blur(function(){
$("#formResult").text("Input Lost Focus");
});


// GENERAL EVENT METHODS

$("#onBtn").click(function(){
$("#onText").on("click", function(){
alert("Paragraph clicked");
});
});

$("#offBtn").click(function(){
$("#onText").off("click");
});

});

$(document).ready(function(){

// css() example
$("#colorBtn").click(function(){
$("#text").css("color","blue");
});

// addClass()
$("#addBtn").click(function(){
$("#text").addClass("highlight");
});

// removeClass()
$("#removeBtn").click(function(){
$("#text").removeClass("highlight");
});

// toggleClass()
$("#toggleBtn").click(function(){
$("#text").toggleClass("highlight");
});

// hasClass()
$("#checkBtn").click(function(){

if($("#text").hasClass("highlight")){
alert("Text is highlighted");
}
else{
alert("Text is NOT highlighted");
}

});

// Toggle theme
$("#themeBtn").click(function(){
$("body").toggleClass("darkTheme");
});

});

$(document).ready(function(){

// Parent Traversal

$("#btnParent").click(function(){
$(".active").parent().css("background","lightyellow");
});

$("#btnParents").click(function(){
$(".active").parents().css("border","2px solid red");
});

$("#btnParentsUntil").click(function(){
$(".active").parentsUntil("#grandparent").css("background","lightblue");
});


// Children Traversal

$("#btnChildren").click(function(){
$("#list").children().css("color","blue");
});

$("#btnFind").click(function(){
$("#parent").find(".item").css("background","lightgreen");
});


// Sibling Traversal

$("#btnSiblings").click(function(){
$(".active").siblings().css("color","red");
});

$("#btnNext").click(function(){
$(".active").next().css("background","yellow");
});

$("#btnNextAll").click(function(){
$(".active").nextAll().css("color","purple");
});

$("#btnNextUntil").click(function(){
$(".active").nextUntil(".stop").css("background","orange");
});

$("#btnPrev").click(function(){
$(".active").prev().css("background","pink");
});

$("#btnPrevAll").click(function(){
$(".active").prevAll().css("color","green");
});

$("#btnPrevUntil").click(function(){
$(".active").prevUntil(":first").css("background","lightgray");
});


// Filtering Methods

$("#btnFirst").click(function(){
$(".item").first().css("font-weight","bold");
});

$("#btnLast").click(function(){
$(".item").last().css("background","lightcoral");
});

$("#btnEq").click(function(){
$(".item").eq(2).css("background","lightpink");
});

$("#btnFilter").click(function(){
$(".item").filter(".active").css("border","3px solid black");
});

$("#btnNot").click(function(){
$(".item").not(".active").css("opacity","0.5");
});

});

$(document).ready(function(){


$("#showBtn").click(function(){
$("#box").show();
});

$("#hideBtn").click(function(){
$("#box").hide();
});

$("#toggleBtn").click(function(){
$("#box").toggle();
});



$("#fadeInBtn").click(function(){
$("#box").fadeIn();
});

$("#fadeOutBtn").click(function(){
$("#box").fadeOut();
});

$("#fadeToggleBtn").click(function(){
$("#box").fadeToggle();
});

$("#fadeToBtn").click(function(){
$("#box").fadeTo(1000, 0.5);
});


$("#slideDownBtn").click(function(){
$("#box").slideDown();
});

$("#slideUpBtn").click(function(){
$("#box").slideUp();
});

$("#slideToggleBtn").click(function(){
$("#box").slideToggle();
});


$("#animateBtn").click(function(){

$("#box").animate({
left: "200px",   // move right
opacity: 0.5,    // reduce visibility
width: "200px",  // increase width
height: "200px"  // increase height
});

});

});

$(document).ready(function(){

// START MULTIPLE ANIMATIONS (QUEUE)

$("#startBtn").click(function(){

$("#box")
.animate({left:"200px"},1000)
.animate({top:"100px"},1000)
.delay(1000)
.animate({left:"0px"},1000)
.animate({top:"0px"},1000);

});


// STOP

$("#stopBtn").click(function(){
$("#box").stop();
});


// FINISH

$("#finishBtn").click(function(){
$("#box").finish();
});


// CLEAR QUEUE

$("#clearBtn").click(function(){
$("#box").clearQueue();
});


// QUEUE (custom step)

$("#queueBtn").click(function(){

$("#box").queue(function(next){

alert("Custom step in queue");

// must call next()
next();

});

});


// DEQUEUE

$("#dequeueBtn").click(function(){
$("#box").dequeue();
});

});
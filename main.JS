var CV = document.getElementById("MyCanvas");
var ctx = CV.getContext("2d");
var mouseEvent = "";

var raduis = 0
var color = ""
var width = 0

CV.addEventListener("mousedown", down);

function down(e){
color = document.getElementById("color").value;
raduis = document.getElementById("raduis").value;
width = document.getElementById("width_line").value;
mouseEvent = "mouseDown";
}

CV.addEventListener("mouseup", up)

function up(e){
 mouseEvent = "mouseUP"
}

CV.addEventListener("mouseleave", leave)

function leave(){
    mouseEvent = "mouseLeave"
}

CV.addEventListener("mousemove", move)

function move(e){
mouseEvent = "mouseMove"

x = e.clientX - CV.offsetLeft;
y = e.clientY - CV.offsetTop;

if (mouseEvent == "mouseDown") {
   console.log("position of x and y coordinates are =");
   console.log("x =" + x + "y =" + y);
   CV.beginPath();
   CV.strokeStyle = color;
   CV.lineWidth = width;
   CV.arc(x, y, raduis , 0, 2 * Math.PI);
   CV.stroke();
}
last_x = x
last_y = y
}
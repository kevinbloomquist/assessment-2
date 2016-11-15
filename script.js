// test for connection and mark refresh points to make console easire to decipher
var test = function() {
console.log("new refresh!");
};

test();



$( document ).ready(function() {
    console.log( "ready!" );
});


// get elements and declare variables for later use
var getElle = document.getElementById("elle");
console.log(getElle);

var getdrBrenner = document.getElementById("drBrenner");
console.log(getdrBrenner);

var getwill = document.getElementById("will");
console.log(getwill);

// creave variables and functions for position and movement
var currentPosA = 0;
var moveA = function(currentPosA){
	currentPosA+=5;
	console.log("key!!");
	console.log(currentPosA);
};
console.log(moveA(currentPosA));


var currentPosB = 0;
var moveB = function(){
	currentPosB+=5;
};
console.log(moveB(currentPosB));


// Add event functionality and change display CSS (left property)

 /*var moveElle = function (event) {
        switch (event.keyCode) {
            case 49:
            document.getElementById('elle').style.left = "currentPosA"+"px";
            console.log(currentPosA);
            break;
        }
    };*/



document.addEventListener("keydown", function(){moveA(currentPosA);});
getElle.setAttribute("style","left:"+currentPosA+"px");
console.log(currentPosA);














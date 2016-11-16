// test for connection and mark refresh points to make a preserved console easier to decipher
var test = function() {
console.log("new refresh!");
};

test();

// wait for full doc js to load

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

// create variables and functions for position, movement, and check for win
var currentPosA = 0;
var moveA = function(){
	if (currentPosA >=80) {
	alert("YOU SAVED WILL!");
}
	else{
	currentPosA+=10;
	console.log("key!!");
	console.log(currentPosA);
}
};
console.log(moveA(currentPosA));


var currentPosB = 0;
var moveB = function(){
	if (currentPosB >= 80) {
	alert("WILL IS FOREVER LOST TO THE UNDERNEATH!");
}
	else {
	currentPosB+=10;
	console.log("key!!");
	console.log(currentPosB);
}
};
console.log(moveB(currentPosB));


// Add event functionality and change display CSS (left property)


document.addEventListener("keydown", function(){
	if (event.keyCode ==49) {
		moveA(currentPosA);
		getElle.setAttribute("style","left:"+currentPosA+"%");
	
	}else if (event.keyCode ==48){
		moveB(currentPosB);
		getdrBrenner.setAttribute("style","left:"+currentPosB+"%");

	}else{
console.log("wrong key!");
		}
});


// diagnostic feedback
console.log(currentPosA);
console.log(currentPosB);














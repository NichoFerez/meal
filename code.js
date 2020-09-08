var word = "meal";
var container_elem = document.getElementById("container");

for (var i = 0; i < 12 * 9; i++) {
	var div_elem = document.createElement("div");
	div_elem.innerHTML = word[i % word.length];
	div_elem.classList.add("letter");
	container_elem.append(div_elem);
}

var letters = document.getElementsByClassName("letter");

document.onmousemove = function(event) {

	// get the mouse position
	var x = event.pageX;
	var y = event.pageY;

	for (var i = 0; i < letters.length; i++) {

		var dx = letters[i].offsetLeft + 50 - x;
		var dy = letters[i].offsetTop + 50 - y;

		var dist = Math.sqrt(dx * dx + dy * dy);

		var score = Math.exp(dist * -0.005);

		

		letters[i].style.transform = "scale(" + score + ")";


	}

}

document.addEventListener("DOMContentLoaded", function () {
	var button1 = document.getElementById("button1");
	var button2 = document.getElementById("button2");
	var button3 = document.getElementById("button3");
	var info = document.getElementById("info");

	button1.addEventListener("click", function () {
		info.textContent = "Information for button 1";
	});

	button2.addEventListener("click", function () {
		info.textContent = "Information for button 2";
	});

	button3.addEventListener("click", function () {
		info.textContent = "Information for button 3";
	});
});

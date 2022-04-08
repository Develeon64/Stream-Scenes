const sleep = ms => new Promise(r => setTimeout(r, ms));
let countSeconds = 0;
let circleCount = 0;

async function errorTitle (element) {
	element.style.color = element.style.color === "rgb(191, 191, 191)" ? "#BF3F7F" : "#BFBFBF";
}

async function circle (element, count) {
	switch (circleCount) {
		case 1:
			element.innerText = "    :|";
			circleCount++;
			break;
		case 2:
			element.innerText = "    :/";
			circleCount++;
			break;
		case 3:
		case 4:
		case 5:
		case 6:
			element.innerText = "    :(";
			circleCount++;
			break;
		case 7:
			circleCount = 0;
			break;
		default:
			element.innerText = "    :)";
			circleCount++;
			break;
	}
}

async function countup () {
	document.getElementById("countup").innerText = countSeconds < 600 ? `${Math.trunc(countSeconds / 60).toString().padStart(2, "0")}:${(countSeconds % 60).toString().padStart(2, "0")}` : "  ∞  ";
	countSeconds++;
}

setInterval(() => errorTitle(document.getElementById("error")), 1024);
setInterval(() => circle(document.getElementById("smile")), 256);
setInterval(() => countup(), 1000);
countup();

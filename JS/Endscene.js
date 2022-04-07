const sleep = ms => new Promise(r => setTimeout(r, ms));
let circleCount = 0;
let dotCount = 0;

async function main () {
	await elementObject("Mods loben", "Mods wurden gelobt", 128);
	await elementObject("Follows begrüßen", "Follower sind willkommen", 64);
	await elementObject("Subs würdigen", "Subs wurden gewürdigt", 128);
	await elementObject("Donations akzeptieren", "Fehler bei Annahme der Donations", 128, "#BF3F7F");
	await elementObject("Donations ablehnen", "Donations wurden abgelehnt", 64);
	await elementObject("Bei Viewern bedanken", "Viewern wurde gedankt", 256);

	await elementObject("Chat stoppen", "Chat wurde gestoppt", 32);

	await sleep(2048);
	document.body.innerHTML += `<pre><span style="color: #BF3F7F">DER STREAM ENDET JETZT!</span> <span style="color: #BF7F3F">Bis zum nächsten Mal! 👋</span></pre>`;
	window.scrollTo(0, document.body.scrollHeight);
}

async function circle (element, count) {
	for (let i = 0; i < count; i++) {
		switch (circleCount) {
			case 1:
				element.innerText = "/";
				circleCount++;
				break;
			case 2:
				element.innerText = "-";
				circleCount++;
				break;
			case 3:
				element.innerText = "\\";
				circleCount = 0;
				break;
			default:
				element.innerText = "|";
				circleCount++;
				break;
		}
		await sleep(128);
	}
	element.innerText = "-";
}

async function elementObject (startText, endText, count, color = "#7FBF3F") {
	const element = document.createElement("pre");

	const loading = document.createElement("span");
	loading.style = "color: #3F7FBF;";
	loading.innerText = "|";

	const caption = document.createElement("span");
	caption.innerText = ` ${startText}\n`;

	const finish = document.createElement("span");
	finish.style = `color: ${color};`
	finish.innerText = endText;

	element.appendChild(loading);
	element.appendChild(caption);
	document.body.insertBefore(element, document.getElementById("pagend"));
	document.body.insertBefore(document.createElement("br"), document.getElementById("pagend"));
	window.scrollTo(0, document.body.scrollHeight);

	await circle(loading, count);
	element.appendChild(finish);
}

async function dots (element) {
	switch (dotCount) {
		case 1:
			element.innerText = ".  ";
			dotCount++;
			break;
		case 2:
			element.innerText = ".. ";
			dotCount++;
			break;
		case 3:
			element.innerText = "...";
			dotCount = 0;
			break;
		default:
			element.innerText = "   ";
			dotCount++;
			break;
	}
}

main();
setInterval(() => dots(document.getElementById("dots")), 1024);

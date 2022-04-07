const sleep = ms => new Promise(r => setTimeout(r, ms));
let countSeconds = 300;
let circleCount = 0;
let dotCount = 0;

async function main () {
	await elementObject("Bot hochfahren", "Bot ist betriebsbereit und überwacht den Chat", 128);
	await elementObject("Chat starten", "Chat ist gestartet und funktionsbereit", 64);
	await elementObject("Weitere Funktionen hinzufügen", "Weitere Funktionen müssen noch hinzugefügt werden!", 2048, "#BF3F7F");
	await elementObject("Stream starten", "Stream ist startbereit!", 1024);

	await sleep(2048);
	document.body.innerHTML += `<pre><span style="color: #BF3F7F">DER STREAM SOLLTE JETZT JEDEN MOMENT STARTEN!</span><br /><span style="color: #BF7F3F">Wir warten nur noch auf den Streamer, @Develeon64!</span></pre>`;
	window.scrollTo(0, document.body.scrollHeight);
}

async function elementObject (startText, endText, count, color = "#7FBF3F") {
	const element = document.createElement("pre");

	const loading = document.createElement("span");
	loading.style = "color: #3F7FBF";
	loading.innerText = "|";

	const caption = document.createElement("span");
	caption.innerText = ` ${startText}\n`;

	const finish = document.createElement("span");
	finish.style = `color: ${color};`;
	finish.innerText = endText;

	element.append(loading);
	element.append(caption);
	document.body.insertBefore(element, document.getElementById("pagend"));
	document.body.insertBefore(document.createElement("br"), document.getElementById("pagend"));
	window.scrollTo(0, document.body.scrollHeight);

	await circle(loading, count);
	element.appendChild(finish);
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

async function countdown () {
	const time = `${Math.trunc(countSeconds / 60)}:${(countSeconds % 60).toString().padStart(2, "0")}`;
	document.getElementById("countdown").innerText = countSeconds > 0 ? `-t=${time}` : "--now";
	countSeconds--;
}

main();
setInterval(() => dots(document.getElementById("dots")), 1024);
setInterval(() => countdown(), 1000);

var win = window;
var doc = win.document;
var docEl = doc.documentElement;
var tid, i = 0;


function refreshRem() {
	var width = docEl.getBoundingClientRect().width;
	var height = docEl.getBoundingClientRect().height;
	if ((width / height) > (750 / 1334)) {
		var rem = height / (1334 / 50);
	} else {
		var rem = width / (750 / 50);
	}
	docEl.style.fontSize = rem + 'px';
}

function time_run() {
	console.log(i);
	if (i <= 100) {
		document.getElementById("loading").innerHTML = i;
		i ++;
		setTimeout(time_run, 25);
	} else {
		clearTimeout();
		setTimeout(function() {
			document.getElementById("Wrap").style.filter = "blur(0rem)";
			document.getElementById("tisp").hidden = true;
		}, 1000)
	}
}

win.addEventListener('resize', function() {
	clearTimeout(tid);
	tid = setTimeout(refreshRem, 300);
}, false);
win.addEventListener('pageshow', function(e) {
	if (e.persisted) {
		clearTimeout(tid);
		tid = setTimeout(refreshRem, 300);
	}
}, false);

refreshRem();

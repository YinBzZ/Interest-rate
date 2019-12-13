var win = window;
var doc = win.document;
var docEl = doc.documentElement;
var tid;

function Style_start() {
	var Div_height = document.getElementById("Interest_rate_div").clientHeight + "px";
	var Names = ["Compute_Butt", "Money", "StartDate"];
	for (var i = 0; i < 3; i++) {
		document.getElementsByClassName("Input_texts")[i].style.lineHeight = Div_height;
	}
	for (x in Names) {
		document.getElementById(Names[x]).style.height = Div_height;
	}
	document.getElementById("Interest_rate").style.height, lineHeight = Div_height;
}

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

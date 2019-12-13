var win = window;
var doc = win.document;
var docEl = doc.documentElement;
var tid;

window.onload = function() {
	var Div_height = document.getElementById("Interest_rate_div").clientHeight + "px";
	var Names = ["Compute_Butt", "Money", "StartDate", "Interest_rate", "Compute_Butt"];
	for (var i = 0; i < 4; i++) {
		document.getElementsByClassName("Input_texts")[i].style.lineHeight = Div_height;
	}
	for (x in Names) {
		document.getElementById(Names[x]).style.height = Div_height;
	}
	document.getElementById("AD_wrap").style.width = document.getElementsByClassName("AD_Div")[1].clientWidth * 3.2 + "px";
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

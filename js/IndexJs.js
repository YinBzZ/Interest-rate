// (function() {
// 	var styleN = document.createElement("style");
// 	var width = document.documentElement.clientWidth / 16;
// 	styleN.innerHTML = 'html{font-size:' + width + 'px!important}'
// 	document.head.appendChild(styleN)
// })();

window.onload = function() {
	Interest_rate = 3.2;
	document.getElementById("Interest_rate").innerText = Interest_rate;
}

var Interest_rate = 0,
	Money = 0,
	NowDate = DateDeal(getNowFormatDate()),
	StartDate = "";

function Compute() {
	StartDate = DateDeal(document.getElementById("StartDate").value);
	var RelDate = NowDate - StartDate;
	Money = document.getElementById("Money").value;
	document.getElementById("Rel1").innerHTML = Math.floor(Money * Interest_rate / 100 * 100) / 100;
	document.getElementById("Rel2").innerHTML = Math.floor(Money * Interest_rate / 100 * 1 / 360 * 100) / 100;
	document.getElementById("Rel3").innerHTML = Math.floor(Money * Interest_rate / 100 * RelDate / 360 * 100) / 100;
}

function DateDeal(x) {
	return x.replace(/-/g, "");
}

function getNowFormatDate() {
	var date = new Date();
	var seperator1 = "-";
	var year = date.getFullYear();
	var month = date.getMonth() + 1;
	var strDate = date.getDate();
	if (month >= 1 && month <= 9) {
		month = "0" + month;
	}
	if (strDate >= 0 && strDate <= 9) {
		strDate = "0" + strDate;
	}
	var currentdate = year + seperator1 + month + seperator1 + strDate;
	return currentdate;
}


var Interest_rate = 0,
	Money = 0,
	NowDate = DateDeal(getNowFormatDate()),
	StartDate = 0;

function Compute() {
	StartDate = DateDeal(document.getElementById("StartDate").value);
	Interest_rate = document.getElementById("Interest_rate").value.replace(/%/g, "");
	var RelDate = NowDate - StartDate;
	if (StartDate == "") {
		RelDate = 0;
	}
	Money = document.getElementById("Money").value;
	document.getElementById("Rel1").innerHTML = Math.floor(Money * Interest_rate / 100 * 100) / 100 + "元&emsp;";
	document.getElementById("Rel2").innerHTML = Math.floor(Money * Interest_rate / 100 * 1 / 360 * 100) / 100 + "元&emsp;";
	document.getElementById("Rel3").innerHTML = Math.floor(Money * Interest_rate / 100 * RelDate / 360 * 100) / 100 +
		"元&emsp;";
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

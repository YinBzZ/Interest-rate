window.onload = function() {
	Event_registration();
}

function Event_registration() {
	const input_butt = document.getElementById("input_Butt");
	input_butt.addEventListener("click", Calculation);
}

function Calculation() {
	let input_lilv = document.getElementById("input_lilv").value / 100,
		input_money = document.getElementById("input_money").value,
		input_date = document.getElementById("input_date").value,
		display_content1 = document.getElementById("display_content1"),
		display_content2 = document.getElementById("display_content2"),
		display_content3 = document.getElementById("display_content3");
	console.log(input_lilv, input_money, input_date, getNowFormatDate());
	display_content1.innerHTML = input_money * input_lilv + "元&emsp;";
	display_content2.innerHTML = Math.floor(input_money * input_lilv * 1 / 360 * 100) / 100 + "元&emsp;";
	display_content3.innerHTML = Math.floor(input_money * input_lilv * getDaysBetween(input_date, getNowFormatDate()) /
		360 * 100) / 100 + "元&emsp;";
	Math.floor(input_money * input_lilv * getDaysBetween(input_date, getNowFormatDate()) / 360 * 100) / 100 <= 0 ?
		AD_display(1) : null;
}

function AD_display(Flang) {
	display_content3.innerHTML = 0 + "元&emsp;"
	const AD = document.querySelector("#AD p");
	switch (Flang) {
		case 1:
			AD.innerHTML = "日期为负";
			setTimeout(function() {
				AD.innerHTML = null;
			}, 2000);
			break;
		default:
			break;
	}
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

function getDaysBetween(dateString1, dateString2) {
	let startDate = Date.parse(dateString1);
	let endDate = Date.parse(dateString2);
	let days = (endDate - startDate) / (1 * 24 * 60 * 60 * 1000);
	return days;
}

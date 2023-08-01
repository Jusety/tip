const btn = document.querySelector("#btn");

btn.addEventListener("click", function(bill, numOG, serve) {
	bill = document.querySelector("#bill");
	numOG = document.querySelector("#numOG");
	serve = document.querySelector("#serve");

	let tipAmount = document.querySelector("#tip-amount");
	let result = (bill.value/100*serve.value/numOG.value);
	showTip();
	
	tipAmount.innerHTML = 'Tip $' + result + ' each';
	
	function showTip() {
		let x = tipAmount;
		x.className = 'show';
	}
})
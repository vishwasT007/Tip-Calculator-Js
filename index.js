//Only Number Key is allowed
function onlyNumberKey(evt) {
	let asciiCode = evt.which ? evt.which : evt.keyCode;
	if (asciiCode > 31 && (asciiCode < 48 || asciiCode > 57)) return false;
	return true;
}
//Calculate Tip

function calculateTip() {
	let totalBillAmount = document.getElementById('total-bill').value;
	let serviceQuality = document.getElementById('service-quality').value;
	let numOfPeople = document.getElementById('numberOfPeople').value;

	// Lets Validate input Weather User Enters proper values or Not
	if (totalBillAmount === '' || serviceQuality == 0) {
		alert('please Enter Values');
		return;
	}
	// check to see if this input is empty or less than or equal to 1

	if (numOfPeople === '' || numOfPeople <= 1) {
		numOfPeople = 1;
		document.getElementById('each').style.display = 'none';
	} else {
		document.getElementById('each').style.display = 'block';
	}

	//Lets calculate Tip

	let total = (totalBillAmount * serviceQuality) / numOfPeople;
	total = Math.round(total).toFixed(2);
	// total = Math.round(total * 100) / 100;
	// total = total.toFixed(2);

	// Dispay The Tip

	document.getElementById('totalTip').style.display = 'block';
	document.getElementById('tip').innerHTML = total;
}

// Hide the tip amount on load

document.getElementById('totalTip').style.display = 'none';
document.getElementById('each').style.display = 'none';

// Lets Click To Calculate

document.getElementById('calculate').onclick = function () {
	calculateTip();
};

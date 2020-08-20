document.addEventListener('DOMContentLoaded', () => {
	let inputButtons = document.getElementsByClassName('input');
	let clearBtn = document.getElementById('clear');
	let equalsBtn = document.getElementById('equals');

	for (let i = 0; i < inputButtons.length; ++i) {
		inputButtons[i].addEventListener('click', () => {
			input(inputButtons[i].innerHTML);
		});
	}

	clearBtn.addEventListener('click', clear);
	equalsBtn.addEventListener('click', calculate);
});

function input(value) {
	document.getElementById('inputField').innerHTML += value;
}

function clear() {
	document.getElementById('inputField').innerHTML = '';
}

async function calculate() {
	let input = document.getElementById('inputField');
	let data = {expression: input.innerHTML};

	let response = await fetch('/api/calculate', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	});

	if (response.ok) {
		let result = await response.json();

		if (isNaN(result) || result === null) {
			input.innerHTML = "You've just broken the universe!";
			return;
		}

		if (!Number.isInteger(result)) {
			result = parseFloat(result).toFixed(10);
		}

		input.innerHTML = result;
	} else {
		input.innerHTML = 'ERROR';
	}
}
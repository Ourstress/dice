// Generate a random number between 1 and the provided number
const generateRandomNumber = num => {
    return Math.ceil(Math.random() * num);
}

// 0. When roll button is clicked:
function rollDice() {
    // 1. Get user input
    const userInput = document.querySelector('#sides').value;

	// Convert the userInput to a number since we want to use it in math
	// operations
	const numericUserInput = Number(userInput);

    // if the value is empty, show an alert
    if (userInput === '') {
        alert('Please enter a number of sides!');
    }

    // if the value is zero, show an alert
    // if the value is negative, show an alert
    // if the value is not a number, show an alert
    else if (numericUserInput === 0 || numericUserInput < 0 || isNaN(numericUserInput)) {
        alert('Please enter a valid number of sides!');
    }

    // otherwise:
    else {
        // 2. Generate random number using step 1.
        const randomNumber = generateRandomNumber(numericUserInput);

        // 3. Change content of large div to number from step 2.
        document.querySelector('#dice').textContent = randomNumber;
    }
}

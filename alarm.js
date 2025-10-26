function hours(hr) {
	// return hr * 3600000;
	return 10000;
}
function minutes(min) {
	// return min * 60000;
	return 10000;
}

// Function to play alarm sound repeatedly until stopped by user input
function playAlarmSound() {
	const audio = new Audio('./alarm.wav');
	audio.loop = true;
	audio.play();

	// Stop the alarm sound when user presses any key
	document.addEventListener('click', stopAlarm);
}

// Function to stop the alarm sound
function stopAlarm() {
	const audio = document.querySelector('audio');
	audio.pause();
	audio.currentTime = 0;

	document.removeEventListener('click', stopAlarm);
}

// Function to calculate meal timings and reminders
function calculateTimings(wakeUpTime) {
	const breakfastTime = minutes(30); // Assuming breakfast is 30 minutes after waking up
	const lunchTime = hours(4); // Assuming lunch is 4 hours after breakfast

	// Set up reminders
	setTimeout(() => {
		console.log("Time for breakfast!");
		playAlarmSound();
	}, breakfastTime);

	setTimeout(() => {
		console.log("Time for lunch!");
		playAlarmSound();
	}, lunchTime);
}

// Function to start the program
function startProgram() {
	console.log('hello');
	document.querySelectorAll('.time-section p').forEach(console.log);
	// const [hours, minutes] = wakeUpTime.split(':').map(Number);
	// const wakeUpTimestamp = Date.now();
	// wakeUpTimestamp.setHours(hours);
	// wakeUpTimestamp.setMinutes(minutes);

	// calculateTimings(wakeUpTimestamp.getTime());
}

// Start the program
startProgram();
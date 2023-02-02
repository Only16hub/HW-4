//array object holder
exerciseArray = [];

//constructor function
let ExerciseItem = function (pExerciseName, pMinutes, pPerMinute) {
	this.ExerciseName = pExerciseName;
	this.minutes = parseInt(pMinutes);
	this.perMinute = parseInt(pPerMinute);
};

ExerciseItem.prototype.burnedCalories = function () {
	return this.minutes * this.perMinute;
};

//submit calories info
function submitAdd() {
	//get radio button
	let radioButtons = document.getElementsByName("check");
	//define checked radio button
	let checkButton = Array.from(radioButtons).find((radio) => radio.checked);
	//get textbox
	let minutes = document.getElementById("minutes").value;
	console.log(minutes);

	//get calories per minute
	let perMinutes = getPerMinute(checkButton.value);

	//add new object to holder
	exerciseArray.push(new ExerciseItem(checkButton.value, minutes, perMinutes));

	//clear the textbox
	document.getElementById("minutes").value = "";

	//clear the checked radio button
	checkButton.checked = false;

	console.log(exerciseArray);
}

//define how many calories per minute for each exercise
function getPerMinute(checkedB) {
	if (checkedB == "sitUps") {
		count = 8;
	} else if (checkedB == "pushUps") {
		count = 5;
	} else count = 12;

	return count;
}

//count the most calories
function mostCalories() {
	let most = 0;
	for (let i = 0; i < exerciseArray.length; i++) {
		if (
			exerciseArray[i].burnedCalories() > exerciseArray[most].burnedCalories()
		) {
			most = i;
		}
	}

	document.getElementById("inputMost").value =
		exerciseArray[most].ExerciseName +
		" burned - " +
		exerciseArray[most].burnedCalories() +
		" calories.";
}

//add show all function
function showAll() {
	let list = document.getElementById("ulAll");
	console.log("yes");

	for (i = 0; i < exerciseArray.length; i++) {
		let element = document.createElement("li");
		element.innerHTML =
			exerciseArray[i].ExerciseName +
			" - trained for " +
			exerciseArray[i].minutes +
			" minutes and burned: " +
			exerciseArray[i].burnedCalories() +
			" calories";
		list.appendChild(element);
	}
}

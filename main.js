//array object holder
exerciseArray = [];

//constructor function
let ExerciseItem = function (pExerciseName, pMinutes) {
	this.ExerciseName = pExerciseName;
	this.minutes = parseInt(pMinutes);
};

function submitAdd() {
	//get radio button
	let radioButtons = document.getElementsByName("check");
	//define checked radio button
	let checkButton = Array.from(radioButtons).find((radio) => radio.checked);
	//get textbox
	let minutes = document.getElementById("minutes").value;

	//add new object to holder
	exerciseArray.push(new ExerciseItem(checkButton.value, minutes));
	//clear the textbox
	document.getElementById("minutes").value = "";

	console.log(exerciseArray);
}

//count the most calories агтсешщт

//add show all function

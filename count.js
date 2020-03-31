var countTo = parseInt(prompt("What number do you want to count to?"));
var countBy = parseInt(prompt("What number number do you want to count by?"));

if (!countTo || !countBy) {
	alert("make sure you enter both values");
} else if (countTo < 0 || countBy < 0) {
	alert("You entered a negative number.");
} else if (countBy > countTo) {
	alert("Your count by number is larger than count to.");
} else {
	for(var index = countBy; index <= countTo; index += countBy) {
    console.log(index);
  }
}
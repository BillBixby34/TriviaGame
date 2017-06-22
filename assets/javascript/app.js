alert ("Pocket monsters share their names with many real words. Try to spot the differences in 60 seconds. Hint: Some are the same!" )

//timer

	var audio = new Audio("Pokemon_theme.mp3");
function countDown (secs, elem) {
	var element=document.getElementById(elem);
	element.innerHTML = secs + " seconds!";
	if(secs<1) {
		clearTimeout(timer);
		element.innerHTML = '<h4>Time is up! Check your score!</h4>';
		audio.play();
	}
	secs--;
	var timer=setTimeout('countDown('+secs+',"'+elem+'")',1000);
}

//Questions, Choices, Answers
function check(){
var catchy = new Audio("Pokeball_pop.wav");	
var correct=0;
var incorrect=0;
//got help for logic. need to refine
var question1=document.quiz.question1.value;
var question2=document.quiz.question2.value;
var question3=document.quiz.question3.value;
var question4=document.quiz.question4.value;
var question5=document.quiz.question5.value;
var question6=document.quiz.question6.value;
var question7=document.quiz.question7.value;
var question8=document.quiz.question8.value;
var question9=document.quiz.question9.value;
var question10=document.quiz.question10.value;


// If/else for correct and incorrect
	if (question1 == "pokémon") {
		correct++;
	} else {
		incorrect++
	}

	if (question2 == "pokémon") {
		correct++;
	} else {
		incorrect++
	}

	if (question3 == "both") {
		correct++;
	} else {
		incorrect++
	}

	if (question4 == "pokémon") {
		correct++;
	} else {
		incorrect++
	}

	if (question5 == "both") {
		correct++;
	} else {
		incorrect++
	}

	if (question6 == "word") {
		correct++;
	} else {
		incorrect++
	}

	if (question7 == "word") {
		correct++;
	} else {
		incorrect++
	}

	if (question8 == "word") {
		correct++;
	} else {
		incorrect++
	}

	if (question9 == "pokémon") {
		correct++;
	} else {
		incorrect++
	}

	if (question10 == "word") {
		correct++;
	} else {
		incorrect++
	}
catchy.play();
document.getElementById("after_submit").style.visibility ="visible";
document.getElementById("number_correct").innerHTML = "You got " + correct + " correct!";
document.getElementById("number_incorrect").innerHTML = "You got " + incorrect + " incorrect.";
}

//empty function reloads page
function reset(){}
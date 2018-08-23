/*==============================================================

A3.html functions

===============================================================*/
function getCaseInfo1() {
	document.getElementById("case_desc").innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt pellentesque dui, a bibendum nunc blandit...";
	var head = document.getElementById("header");
	head.innerHTML = "Intro to musical theatre";
}

function getCaseInfo2() {
	document.getElementById("case_desc").innerHTML = "This case is not available to review yet.";
	var head = document.getElementById("header");
	head.innerHTML = "File not found";
}

function getReview() {
	var action = confirm("Would you like to review this case?");
	if (action == true) {
		window.open("A3_review.html","_parent");
	} else {
		window.close();
	}
}

function getFeedback() {
	var action = confirm("Would you like to post feedback?");
	if (action == true) {
		window.open("A3_feedback.html","_parent");
	} else {
		window.close();
	}
}
/*==============================================================

A3_review.html functions

===============================================================*/
function submitQuestionnaire() {
	var action = confirm("Are you sure you would like to submit these answers?");
	if (action == true) {
		window.open("A3.html","_parent");
		alert("Your answers have been submitted.");
	} else {
		window.close();
	}
}
/*==============================================================

A3_feedback.html functions

===============================================================*/
function submitFeedback() {
	var action = confirm("Are you sure you would like to submit this feedback?");
	if (action == true) {
		window.open("A3.html","_parent");
		alert("Your feedback has been posted.");
	} else {
		window.close();
	}
}

"use strict";

var storeTheName = function(){
	var names = [];
	var name = document.getElementById('name').value;
	document.getElementById('start').hidden = false;
	document.getElementById('submitButton').hidden = true;
	document.getElementById('name').hidden = true;

	document.getElementById('showName').innerText = name;

	document.getElementById('showName').innerHTML = 'Welcome ' + name;	
}

var showQuestion = function(){
	document.getElementById('questions').hidden = false;
}

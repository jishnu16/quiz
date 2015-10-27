var questions=[	'What is the capital of india?',
				'what is 5+11 ?',
				'What is the square root of 49 ?',
				'what is 2^3',
				'what is the full name of cd?'];





var show = function(){
	var str = "<table align='center' cellpadding='10px'";
	for(var i = 0;i < questions.length; i++)
		str = str + "<tr> <td>"+ questions[i] +"</td>"+
						"<td><input type='text' id='answer-" + i +"' /></td>"+
						"</tr>";
	str += "<tr>"+
				"<td></td>"+
				"<td><input type='button' value='Finish' class='button' onclick='checkAnswer()'></td>"+
			"</tr>"+
			"</table>"; 
		document.getElementById('questions').innerHTML = str;

}

var showQuestion = function(){
	document.getElementById('start').hidden = true;
	show();
	document.getElementById('questions').hidden = false;
}


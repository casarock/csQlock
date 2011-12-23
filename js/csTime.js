
function HumanTime() {
	
	var hours = 0;
	var minutes = 0;
	
	this.getTimeFormated = function() {
		
		var myDate = new Date();
		var hours   = myDate.getHours();
		var minutes = myDate.getMinutes();
		var minutesRest = 5 - (minutes%5);
		var formated = ['es', 'ist'];
		var humanHours = ['uein','uzwei','udrei','uvier','ufuenf','usechs','usieben','uacht','uneun','uzehn','uelf','uzwoelf']
		
		var fHour = (minutes < 20) ? hours : hours + 1 ;
		fHour = (fHour > 12) ? fHour-12: fHour;
		
		if (minutes >= 5 && minutes < 10) {
			formated.push('bfuenf','bnach');
		}
		else if (minutes >= 10 && minutes < 15) {
			formated.push('bzehn', 'bnach');
		}
		else if (minutes >= 15 && minutes < 20) {
			formated.push('bviertel', 'unach');
		}
		else if (minutes >=20 && minutes < 25) {
			// fünf vor halb
			formated.push('bzehn', 'bvor', 'halb');
		}
		else if (minutes >=25 && minutes < 30) {
			// fünf vor halb
			formated.push('bfuenf', 'bvor', 'halb');
		}
		else if (minutes >=30 && minutes < 35) {
			// halb
			formated.push('halb');
		}
		else if (minutes >=35 && minutes < 40) {
			// fünf nach
			formated.push('bfuenf','bnach','halb');
		}
		else if (minutes >=40 && minutes < 45) {
			// zwanzig vor
			formated.push('bzehn','bnach','halb');
		}
		else if (minutes >=45 && minutes < 50) {
			// viertel vor
			formated.push('bviertel','uvor');
		}
		else if (minutes >=40 && minutes < 55) {
			// zehn vor
			formated.push('bzehn','uvor');
		}
		else if (minutes >=55 && minutes <= 59) {
			// fünf vor
			formated.push('bfuenf','uvor');
		}
		
		
		if (formated.length > 2 && fHour == 1) {
			formated.push('ueins');
		}
		else if (formated.length == 2) {
			formated.push('uhr');
		}
		
		formated.push(humanHours[fHour-1]);
		
		var humantimeFormat = {
			formatedTime: formated,
			restMinutes: minutesRest
		}
		
		
		return humantimeFormat;
	}
			
}

var lastTimer = null;
var humanTimer = new HumanTime();
$(document).ready(function() {
        
	updateTime();
	var myIntervalID = setInterval("updateTime()", 30*1000);
	
});

function updateTime() {
	
	var humanTimes = humanTimer.getTimeFormated();
	var humanTimeArray = humanTimes.formatedTime;
	var humanTimeString = humanTimeArray.join(' ');
	
	if ((lastTimer == null) || (lastTimer != humanTimeString)) {
		
		if (lastTimer != null) {
			var removeClasses = lastTimer.split(' ');
			$.each(removeClasses, function(key,value) { 
				//$('#'+value).css('color','#999');
				
				$('#'+value).animate({
				    color: "#555555"
				  }, "slow" );
				
			});
		}
		
		$.each(humanTimeArray, function(key,value) { 
			//$('#'+value).css('color','#fff');
			$('#'+value).animate({
			    color: "#ffffff"
			  }, "slow" );
			
		});
		
		
		//$('#timer').html(humanTimeString);
		lastTimer = humanTimeString;	
	}
	updateRestMinutes(humanTimes.restMinutes);
	
}

function updateRestMinutes(minutes) {

	switch (minutes) {
		case 5:
			$('#rest1').css('color', '#555');
			$('#rest2').css('color', '#555');
			$('#rest3').css('color', '#555');
			$('#rest4').css('color', '#555');
			break;
			
		case 4:
			$('#rest1').css('color', '#fff');
			$('#rest2').css('color', '#555');
			$('#rest3').css('color', '#555');
			$('#rest4').css('color', '#555');
			break;
			
		case 3:
			$('#rest1').css('color', '#fff');
			$('#rest2').css('color', '#fff');
			$('#rest3').css('color', '#555');
			$('#rest4').css('color', '#555');
			break;
			
		case 2:
			$('#rest1').css('color', '#fff');
			$('#rest2').css('color', '#fff');
			$('#rest3').css('color', '#fff');
			$('#rest4').css('color', '#555');
			break;
			
		case 1:
			$('#rest1').css('color', '#fff');
			$('#rest2').css('color', '#fff');
			$('#rest3').css('color', '#fff');
			$('#rest4').css('color', '#fff');
			break;
			
	}
}




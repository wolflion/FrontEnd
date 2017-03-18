window.addEventListener("load",showTheTime,false);

function initDate(){
	var spanTags = document.getElementsByTagName("span");
	
	for(var i=0;i<spanTags.length;i++){
		if(spanTags[i].className.indexOf("tz") == 0){
			showTheTime(spanTags[i],spanTags[i].className.substring(2));
		}
	}
}

function showTheTime(){
	var now = new Date();
	document.getElementById("showTime").innerHTML = showTheHours(now.getHours()) + showZeroFilled
	(now.getMinutes()) + showZeroFilled(now.getSeconds()) + showAmPm();
	setTimeout(showTheTime,1000);
	
	function showTheHours(theHour){
		if(show24Hour() || (theHour > 0 && theHour < 13)){
			return theHour;
		}
		if(theHour == 0){
			return 12;
		}
		return theHour-12;
	}
	
	function showZeroFilled(inValue){
		if(inValue > 9){
			return ":"+inValue;
		}
		return ":0"+inValue;
	}
	
	function show24Hour(){
		return(document.getElementById("show24").checked);
	}
	
	function showAmPm(thatTime){
		if(thatTime < 12){
			return " AM ";
		}
		return " PM ";
	}
}
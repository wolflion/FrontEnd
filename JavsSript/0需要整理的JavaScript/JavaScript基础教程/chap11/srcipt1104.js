window.addEventListener("load",initDate,false);

function initDate(){
	var spanTags = document.getElementsByTagName("span");
	
	for(var i=0;i<spanTags.length;i++){
		if(spanTags[i].className.indexOf("tz") == 0){
			showTheTime(spanTags[i],spanTags[i].className.substring(2));
		}
	}
}

function showTheTime(currElem,tzOffset){
	var dayName = new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Staturday");
	var thatTZ = new Date();
	var dateStr = thatTZ.toUTCString();
	
	dateStr = dateStr.substr(0,dateStr.length-3);
	thatTZ.setTime(Date.parse(dateStr));
	thatTZ.setHours(thatTZ.getHours() + parseInt(tzOffset));
	
	currElem.innerHTML = showTheHours(thatTZ.getHours()) + showZeroFilled(thatTZ.getMinutes()) +
		showAmPm(thatTZ.getHours()) + dayName[thatTZ.getDay()];
	
	function showTheHours(theHour){
		if(theHour == 0){
			return 12;
		}
		if(theHour < 13){
			return theHour;
		}
		return theHour-12;
	}
	
	function showZeroFilled(inValue){
		if(inValue > 9){
			return ":"+inValue;
		}
		return ":0"+inValue;
	}
	
	function showAmPm(thatTime){
		if(thatTime < 12){
			return " AM ";
		}
		return " PM ";
	}
}
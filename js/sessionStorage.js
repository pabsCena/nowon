//Script that stores and retrieves information from the Session Storage

function setCalendarsSessionStorage(calendarObjectList){
			
	var calendarListJSON = JSON.stringify(calendarObjectList);
	sessionStorage.setItem("calendarListJSON", calendarListJSON);

}

function getCalendarsSessionStorage(){

	var calendarListJSON  = sessionStorage.getItem('calendarListJSON');
	var calendarList = JSON.parse(calendarListJSON);
	
	return calendarList;	
}


function deleteSessionStorage(){

	sessionStorage.removeItem('calendarListJSON');
}



function setEventSessionStorage(eventObject){

	var eventJSON =	JSON.stringify(eventObject);
	sessionStorage.setItem("eventObject", eventJSON);

}

function getEventSessionStorage(){
	
	var eventJSON = sessionStorage.getItem("eventObject");
	var eventObject = JSON.parse(eventJSON);
	
	return eventObject 

}

function deleteEventSessionStorage(){
	
	sessionStorage.removeItem('eventObject');

}


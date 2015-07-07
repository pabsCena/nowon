//Script that make the an API request for the event of the calendars

var loaded = false;

function getEventsFromCalendarId(){

		var calendarObjectList = null;
		//calendarObjectList	=	getCalendarsSessionStorage();		
		var waiting = setInterval(function(){
			calendarObjectList  = JSON.parse(sessionStorage.getItem('calendarListJSON'));
			
			if (calendarObjectList != null){
						
				for(var i=0; i<calendarObjectList.length; i++){
					getEvents(calendarObjectList[i].id);	
				}
				clearInterval(waiting);
			}
		
		}, 500);
}


function getEvents(calendarId){

	var eventId, summary, start, end, description;
	var calendarObjectEventList		=	[];
				
	gapi.client.load('calendar', 'v3').then(function() {	
					
		var request = gapi.client.calendar.events.list({
			'calendarId' : calendarId
			});	
	
		request.then(function(eventList) {
			console.log(eventList);
	
		for(var i =0; i <eventList.result.items.length ; i++) {		
		
		 	eventId 		=	eventList.result.items[i].id;
			summary 		=	eventList.result.items[i].summary;       
			description 	=	eventList.result.items[i].description;
			
			if(eventList.result.items[i].start.dateTime){
				start		=	eventList.result.items[i].start.dateTime;
			 }else{
				start		=	eventList.result.items[i].start.date;
			 }
			 
			 if(eventList.result.items[i].end.dateTime){
				end		=	eventList.result.items[i].end.dateTime;
			 }else{
				end		=	eventList.result.items[i].end.date;
			 }
			 
			var eventDate 	=	new EventDateObject(start, end);
			calendarObjectEventList[i] = new EventObject(eventId, summary, eventDate, description);		
		}
		
		populateSessionStorage(calendarObjectEventList, calendarId);
	
	}, function(reason) {
            console.log('Error: ' + reason.result.error.message);
    	});
	
	});	
}
	
function populateSessionStorage(calendarObjectEventList, calendarId){

	var array = [];

	for(var i =0; i < calendarObjectEventList.length; i++) {
		array [i]= calendarObjectEventList[i];
	}	
	array.sort(function sortByDate(a, b){
		 x = a.date.start;
		 y = b.date.start;
		return ((x < y) ? -1 : ((x > y) ? 1 : 0)); 
	});

	matchCorrespondingCalendar(array, calendarId);
}

function matchCorrespondingCalendar(sortedCalendarObjectEventList, calendarId){

	calendarObjectList = getCalendarsSessionStorage();
	
	for(var j=0; j<calendarObjectList.length; j++){
		if(calendarObjectList[j].id==calendarId){
			calendarObjectList[j].events = sortedCalendarObjectEventList;
			setCalendarsSessionStorage(calendarObjectList);
		}
	}
	

	loaded=true;
}

function loopLi() {
   
   var timer = setInterval(function() { // this code is executed every 5 seconds:
	
        if(loaded) {
        	            
        	clearInterval(timer);
            $body.removeClass("loading");
            showIncomingEvents();
        }

    }, 2000);
}





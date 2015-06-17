//make an api call to obtain the calendars associated to the account
function getCalendars(){

	var calendarId, calendarName;
	var calendarObjectList	=	[];
				
	gapi.client.load('calendar', 'v3').then(function(){
	
		var request = gapi.client.calendar.calendarList.list({
		
		});
			request.then(function(calendarList) {
				console.log(calendarList);

				for(var i =0; i <calendarList.result.items.length ; i++) {			
					if(calendarList.result.items[i].accessRole != "reader"){
					
						calendarId 		= calendarList.result.items[i].id;
						calendarName 	= calendarList.result.items[i].summary;
					 
						calendarObjectList[i] = new calendarObject(calendarId, calendarName);
						setCalendarsSessionStorage(calendarObjectList);    		      		
					}		
				}
				
				showCalendars();				
			}, function(reason){
				console.log('Error: ' + reason.result.error.message);
			});
	   	});
}


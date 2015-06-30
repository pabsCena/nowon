
$(function(){
	
	$( "#doneBtn" ).click(function() {
	
		var eventObject 	=	new EventObject();
		var event			=	getEventSessionStorage();
		
		if(event.id){
	
			eventObject.id	=	event.id;
		
		}
		
		getEventInformation(eventObject);
	
	});

 
});

function getEventInformation(eventObject){

	var eventTitleDateLocation	=	$(".editingNemiEventTitleDateInterfaceView .row");	
	
		getTitleDateLocation(eventObject, eventTitleDateLocation);

	var eventDescription		=	$(".descriptionEventParameterDiv");
		
		getDescription(eventObject, eventDescription);
		
	createEvent();		
}

function createEvent(){

	var calendarId 	= 	$(".form-control").find(':selected').attr('id');
	var eventObject	=	getEventSessionStorage();	
	
	
	 resource = {
	 
			"summary": eventObject.summary,
			
			"location": eventObject.location,
		
			"start": {
				"dateTime": eventObject.date.start
			},
			"end": {
				"dateTime": eventObject.date.end
			},
		
			"description":	eventObject.description
		};
	
	if(eventObject.id){
	
		var eventId		=	eventObject.id;
		//modifyEvent(calendarId, eventId, resource);
		
	}else{
	
		createNewEvent(calendarId, resource);
	}
}	

function createNewEvent(calendarId, resource){

	gapi.client.load('calendar', 'v3', function() {	

		var request = gapi.client.calendar.events.insert({
		
			'calendarId':	calendarId,	
			'resource': 	resource
		});	
		
		request.then(function(resp) {
		
			if(resp.statusText=='OK') {
			
				$.alert('Event created successfully', {
				
					autoClose: true,
					closeTime: 2000,
					type:'success',
					onClose:function(){
				
					}
				
				});
				
			}else{
			
				$.alert('There was a problem, reload the page and try again', {
				
					autoClose: true,
					closeTime: 2000,
					type:'danger',
					onClose:function(){
				
					}
				
				});
				
			}

		}, function(reason){
		
			console.log('Error: ' + reason.result.error.message);
			
		}); 
	});
}


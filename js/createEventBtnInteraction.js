
$(function(){
	
	$( "#doneBtn" ).click(function() {
	
		var eventObject 	=	new EventObject();
		var event			=	getEventSessionStorage();
		
		if(event.id){
	
			eventObject.id	=	event.id;
		
		}
		
		getEventInformation(eventObject);
		
		showModeAfterCreateNewEvent();
	
	});

 
});

function getEventInformation(eventObject){

	var eventTitleDateLocation	=	$(".editingNemiEventTitleDateInterfaceView .row");	
	
		if(getTitleDateLocation(eventObject, eventTitleDateLocation)){
		
			var eventDescription		=	$(".descriptionEventParameterDiv");
		
			getDescription(eventObject, eventDescription);
			
			createEvent();		
		
		}

	
		
}

function createEvent(){

	var calendarId 	= 	$(".form-control").find(':selected').attr('id');
	var eventObject	=	getEventSessionStorage();
		
	
	if(eventObject.date.start.length>10){
	
		resource = {
	 
			"summary": eventObject.summary,
			
			"start": {
			
					"dateTime": eventObject.date.start
				
				},
			
			"end":{
		
				"dateTime": eventObject.date.end
		
			},
			
			"location": eventObject.location,
		
			"description":	eventObject.description
		};	
	
			
	}else{
	
		 resource = {
	 
			"summary": eventObject.summary,
			
			"start": {
			
				"date": eventObject.date.start
			
				},
		
			"end":{
	
				"date": eventObject.date.end
	
			},
			
			"location": eventObject.location,
		
			"description":	eventObject.description
		};

	}	
	
	
	
	
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

function showModeAfterCreateNewEvent(){

	emptyEventEditingDivs();

	setTimeout(function() {
		
		$( ".nemiEventParameterEditorDiv, .nemiEditingEventInterfaceDiv " ).hide();
		
		if($('.nemiCalendarsEventsListDiv').is("col-lg-offset-3")){
						
			$( ".nemiCalendarsEventsListDiv").removeClass("col-lg-4").addClass("col-lg-6");			
			$('.nemiCalendarsEventsListDiv').addClass("col-lg-offset-3", 100, callback);
			
		}
		
		function callback() {
		
		 	$( ".nemiCalendarsEventsListDiv" ).show("clip", 500);
    	}
		        
    	}, 500 );
	
	


}

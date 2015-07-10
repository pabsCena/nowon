
$(function(){
	
	$( "#doneBtn" ).click(function(e) {

 	 e.preventDefault();
	
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
		modifyEvent(calendarId, eventId, resource);
		
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
			
				$.alert('Event created', {
				
					autoClose: true,
					closeTime: 1000,
					type:'success',
					onShow:function(){
						
						showModeAfterCreateNewEvent();
				
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


function modifyEvent(calendarId, eventId, resource){

	gapi.client.load('calendar', 'v3', function() {	

		var request = gapi.client.calendar.events.update({
		
			'calendarId':	calendarId,
			'eventId'	:	eventId,	
			'resource': 	resource
		});	
		
		request.then(function(resp) {
		
			if(resp.statusText=='OK') {
			
				$.alert('Event modified', {
				
					autoClose: true,
					closeTime: 1000,
					type:'success',
					onShow:function(){
						
						showModeAfterCreateNewEvent();
				
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
		
	
	$( ".nemiEventParameterEditorDiv" ).toggle("slide", "easeOutCubic", 500, function(){
		$(".nemiEditingEventInterfaceDiv").toggle("slide", "easeOutCubic", 500, function(){
		
		
		if($('.nemiCalendarsEventsListDiv').not("col-lg-offset-3")){
				
			$(".nemiCalendarsEventsListDiv").addClass("col-lg-offset-3", callback);
	
		}else{
	
			callback();

		}
		
		});
				   
  });
	
		
		function callback() {
		
		 	$( "body" ).addClass("loading");
		 	
			loopLi();
			
			getEventsFromCalendarId();
			
			$('.nemiCalendarsEventsListDiv').toggle("blind", "slow");
		 	
		 	emptyEventEditingDivs();

    	}

}

//Script that deletes a specific event

$(function() {

	$( "#deleteBtn" ).click(function() {
				
		if(confirm("Are you sure you want to delete this event?")){
			deleteEvent();
		}
		
	});
});


// function to delete an event
function deleteEvent(){

	var eventId		=	$(".nemiEventInterfaceView").attr("id");
	var calendarId = $(".form-control").find(':selected').attr('id');
	
	//make call to Google Calendar API V3
	gapi.client.load('calendar', 'v3').then(function() {
					
		var request = gapi.client.calendar.events.delete({
			//calendar ID
			'calendarId':	calendarId,	
			//Id from the event to delete
			'eventId': 		eventId							
			
		});	
		
		request.then(function(resp) {
			
			$.alert('Event deleted', {
				autoClose: true,
				closeTime: 2000,
				type:'success',
				onClose:function(){
				
				$body = $("body");
				$body.addClass("loading");
				loopLi();
				
				if($(".eventListDiv a:last-child").attr("id") != eventId){
			
					showNextEventFromList(calendarId, eventId);
			
		
				}else{
						
					$( ".nemiEventInterfaceDiv").hide();
					$('.nemiCalendarsEventsListDiv').addClass("col-lg-offset-3", 500);
			
				}
					
				getEventsFromCalendarId();
				
				}
			});
				
			}, function(reason){
				console.log('Error: ' + reason.result.error.message);
			});
								
	});

}

function showNextEventFromList(calendarId, currentEventId){

	eventId	=	$(".eventListDiv").find("#"+currentEventId+"").next().attr("id");

	showEventInterfaceView();
	
	localizeEvent(calendarId, eventId);
	
	showEventFromEventList();


}

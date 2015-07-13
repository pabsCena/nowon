//Script that deletes a specific event

$(function() {

	$( "#deleteEventBtn" ).click(function(e) {
	
	e.preventDefault();
				
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
		
			if(resp.statusText=='No Content') {
			
				$.alert('Event deleted', {
				autoClose: true,
				closeTime: 2000,
				type:'success',
				onShow:function(){
				
					$( "body" ).addClass("loading");
					loopLi();				
					getEventsFromCalendarId();

				},
				
				onClose:function(){

				if($(".eventListDiv  a:first-child").attr("id")!=undefined){
			
					showNextEventFromList(calendarId);
			
		
				}else{
						
					$( ".nemiEventInterfaceDiv").hide();
					$('.nemiCalendarsEventsListDiv').addClass("col-lg-offset-3", 500);
			
				}
					
				}
			});
			
			
			} else {
			
				$.alert('There was a problem. Reload page and try again', {
					autoClose: true,
					closeTime: 2000,
					type:'danger',
				});
					
			}	
			
		}, function(reason){
			console.log('Error: ' + reason.result.error.message);
		});
								
	});

}

function showNextEventFromList(calendarId, currentEventId){

	eventId	=	$(".eventListDiv a:first-child").attr("id");
	
	var nemiInterfaceView = $(".nemiEventInterfaceView");

	showEventInterfaceView();
	
	localizeEvent(calendarId, eventId);
	
	 showElements(nemiInterfaceView);


}

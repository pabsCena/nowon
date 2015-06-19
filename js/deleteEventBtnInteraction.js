//Script that deletes a specific event

$(function() {

	$( "#deleteBtn" ).click(function() {
		
		confirmDelete();
		
	});
});


function confirmDelete(){

	$('<div></div>').appendTo('body')
		.html('<div><h6>Are you sure?</h6></div>')
		.dialog({
			modal: true,
			title: 'Delete',
			zIndex: 10000,
			autoOpen: true,
			width: 'auto',
			resizable: false,
			buttons: {
				Yes: function () {
					deleteEvent();
					$(this).dialog("close");
				},
				No: function () {
					$(this).dialog("close");
				}
			},
			close: function (event, ui) {
				$(this).remove();
			}
		});
}



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
			
			alert("Event deleted");
						
			if($(".eventListDiv").find("#"+eventId+"").next()){
				
				$body = $("body");
				$body.addClass("loading");
				
				loopLi();
				
				showNextEventFromList(calendarId, eventId);
				
				getEventsFromCalendarId();
				
			}else{
			
				$('.nemiCalendarsEventsListDiv').addClass("col-lg-offset-3", 500);
				
			}
				
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

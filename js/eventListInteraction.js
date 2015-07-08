//Script that controls the interaction with the elements of the events list

$('.eventListDiv').on('click','a.list-group-item', function(){
	
	if($(this).attr('id')!=undefined){
		
		var eventId = $(this).attr('id');
		
		var calendarId = $(".form-control").find(':selected').attr('id');
		
		showEventInterfaceView();
		
		localizeEvent(calendarId, eventId); 
		
		//showEventFromEventList();
	}	 
});
	
function showEventInterfaceView(){

	if($(".nemiEventInterfaceView").attr("id")){
		
			$(".nemiEventInterfaceView").removeAttr("id").empty()
		}
	
	if($(".nemiEventInterfaceDiv").is(":hidden")){
 
		//$( ".nemiEventInterfaceDiv" ).height(getHeight());

		$( ".nemiCalendarsEventsListDiv").removeClass("col-lg-offset-3", "1000", callback);
	
		function callback() {
	
			$( ".nemiEventInterfaceDiv" ).addClass( "col-lg-6", "100", callback2);
		
				function callback2() {
			
					$( ".nemiEventInterfaceDiv" ).fadeIn();
				}
	  
			}
		}
}

function localizeEvent(calendarId, eventId){

	var calendars 	= getCalendarsSessionStorage();
	var event;

	for(var i=0; i<calendars.length; i++){
		if(calendars[i].id == calendarId){
			for(var j=0; j<calendars[i].events.length; j++){
				if(calendars[i].events[j].id==eventId){
					event = calendars[i].events[j];
					break;
				}	
			}		
		}
	}
	generateElementsOfEvent(event);
}

function showEventFromEventList(){
	
	var event		=	getEventSessionStorage();
		
	var parameters	=	Object.keys(event);
	
	var element;
	
	for(var i=0; i<parameters.length;i++){
	
		switch (parameters[i]){
		
			case "id":
				element	=	event.id;
				break;
				
			case "summary":
				element	=	event.summary;
				break;
				
			case "date":
				element	=	event.date;
				break;
				
			case "location":
				element	=	event.location;
				break;	
				
			case "description":
				element	=	returnDescriptionElements(event.description);
				break;
				
			default:
				break;	
		
		}
		
		showElement(element, parameters[i]);
		
	//$( ".WYSIWYGEditable" ).find("[data-modified=false]").first().attr("id", "creating");
	//sendToEditMode(identifier);
	
	}
}


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

	var eventDescription		=	$(".descriptionEventParameterDiv .elementDescriptionLayerEdited");
		
		getDescription(eventObject, eventDescription);
		
}


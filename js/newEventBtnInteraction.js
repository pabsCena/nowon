//Script that manages the interaction and visual interface when the new event button is pressed

$(function() {

	$( "#newEventBtn" ).click(function(e) {
	
	 e.preventDefault();

		var event 	=	new EventObject();
		
		setEventSessionStorage(event);
				
		deleteEventDescriptionSessionStorage();
		
		$( "#doneBtn" ).text("Create Event");

		 $( ".nemiInterfaceBodyDiv" ).fadeOut(500, showEditModeAfterNewEventBtn );
		
	});
}); 

function showEditModeAfterNewEventBtn(){
	
	setTimeout(function() {
	
		if($(".nemiEventInterfaceView").attr("id")){
		
			$(".nemiEventInterfaceView").removeAttr("id").empty()
		}
		
		$( ".nemiCalendarsEventsListDiv, .nemiEventInterfaceDiv" ).hide();
		$( ".nemiInterfaceBodyDiv" ).show();
		
		$( ".nemiEditingEventInterfaceDiv" ).toggle("slide", "easeOutCubic", 500, function(){
			$(".nemiEventParameterEditorDiv").toggle("slide", "easeOutCubic", 500);           
    	  });
    	  
    }, 400 );
}
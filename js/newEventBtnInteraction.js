//Script that manages the interaction with the new event button

$(function() {

	$( "#newEventBtn" ).click(function() {

		var event 				=	new EventObject();
		
		setEventSessionStorage(event);
				
		deleteEventDescriptionSessionStorage();

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
		
		$( ".nemiEditingEventInterfaceDiv" ).show("slide", "easeOutCubic", 500, function(){
			$(".nemiEventParameterEditorDiv").show("slide", "easeOutCubic", 500);           
    	  });
    	  
    }, 400 );
}
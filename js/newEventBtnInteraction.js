//Script that manages the interaction with the new event button

$(function() {

	$( "#newEventBtn" ).click(function() {

		var event 	=	new EventObject();
		setEventSessionStorage(event);

		 $( ".nemiInterfaceBodyDiv" ).fadeOut(500, showEditModeAfterNewEventBtn );
		
	});
});

function showEditModeAfterNewEventBtn(){
	
	setTimeout(function() {if($(".nemiEventInterfaceView").attr("id")){
		
			$(".nemiEventInterfaceView").removeAttr("id").empty()
		}
		
		$( ".nemiCalendarsEventsListDiv, .nemiEventInterfaceDiv, .editEventBtnsDiv " ).hide();
		$( ".nemiInterfaceBodyDiv, .createEventBtnsDiv" ).show();
		
		if($(".nemiEventInterfaceView").attr("id")){
		
			$(".nemiEventInterfaceView").removeAttr("id").empty()
		}
		
        $( ".nemiEventInterfaceDiv" ).removeClass("col-lg-6").addClass("col-lg-4").show("slide", "easeOutCubic", 500, function(){
			$(".nemiEventParameterListDiv").show("slide", "easeOutCubic", 500, function(){
				$(".nemiEventParameterEditorDiv").show("slide", "easeOutCubic", 500);
           
    	  });
   		});
    }, 400 );
}
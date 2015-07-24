$(function() {

	$( "#cancelBtn" ).click(function(e) {
		
	e.preventDefault();
	

		 $( ".nemiInterfaceBodyDiv" ).fadeOut(1000, function(){
		 	
		 	showEditModeAfterCancelEventBtn();

		 	deleteEventDescriptionSessionStorage();
		 	deleteEventSessionStorage();
		 
		 	$( ".nemiInterfaceBodyDiv" ).show();
		 
		});
	});
});

function showEditModeAfterCancelEventBtn(){


	$( ".nemiEventParameterEditorDiv, .nemiEditingEventInterfaceDiv , .eventParameterEditorDiv, .createElementBtnDiv" ).hide();
	
	if($('.nemiCalendarsEventsListDiv').not("col-lg-offset-3")){
					
		$(".nemiEventInterfaceDiv").removeClass("col-lg-4").addClass("col-lg-5");			
		$(".nemiCalendarsEventsListDiv").addClass("col-lg-offset-3");
		$( ".nemiCalendarsEventsListDiv" ).fadeIn();
					
	}
	
		emptyEventEditingDivs();

	
}


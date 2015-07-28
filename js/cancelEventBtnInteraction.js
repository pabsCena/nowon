//Script that manages the interface when the cancel event button is pressed

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
	
	if($('.nemiCalendarsEventsListDiv').not("col-lg-offset-3 col-md-offset-3 col-sm-offset-3 col-xs-offset-3")){
					
		$(".nemiEventInterfaceDiv").removeClass("col-lg-4 col-md-4 col-xs-4 col-sm-4").addClass("col-lg-5 col-md-5 col-sm-5 col-xs-5");			
		$(".nemiCalendarsEventsListDiv").addClass("col-lg-offset-3 col-md-offset-3 col-sm-offset-3 col-xs-offset-3");
		$( ".nemiCalendarsEventsListDiv" ).fadeIn();
					
	}
	
		emptyEventEditingDivs();

}


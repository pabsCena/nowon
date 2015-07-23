$(function() {

	$( "#cancelBtn" ).click(function(e) {
		
	e.preventDefault();
	
		showEditModeAfterCancelEventBtn();

		 $( ".nemiInterfaceBodyDiv" ).fadeOut(500, function(){
		 
		 	deleteEventDescriptionSessionStorage();
		 	deleteEventSessionStorage();
		 
		 	$( ".nemiInterfaceBodyDiv" ).show();
		 
		});
	});
});

function showEditModeAfterCancelEventBtn(){

	

	setTimeout(function() {
		
		$( ".nemiEventParameterEditorDiv, .nemiEditingEventInterfaceDiv , .eventParameterEditorDiv, .createElementBtnDiv" ).hide();
		
		if($('.nemiCalendarsEventsListDiv').not("col-lg-offset-3")){
						
			$(".nemiEventInterfaceDiv").removeClass("col-lg-4").addClass("col-lg-6");			
			$(".nemiCalendarsEventsListDiv").addClass("col-lg-offset-3", 100, callback);
			
		}
		
		function callback() {
		
		 	$( ".nemiCalendarsEventsListDiv" ).show("clip", 500);
		 	
		 	emptyEventEditingDivs();
    	}
		        
    	}, 500 );
		
}


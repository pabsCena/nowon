$(function() {

	$( "#cancelBtn" ).click(function() {

		 $( ".nemiInterfaceBodyDiv" ).fadeOut(500, showEditModeAfterCancelEventBtn );
		 
		 deleteEventSessionStorage();

	});
});

function showEditModeAfterCancelEventBtn(){

	//emptyEventEditingDivs();

	setTimeout(function() {
		
		$( ".nemiEventInterfaceDiv, .nemiEventParameterListDiv, .nemiEventParameterEditorDiv, .createEventBtnsDiv " ).hide();
		$( ".nemiInterfaceBodyDiv, .editEventBtnsDiv" ).show();
		
		if($('.nemiCalendarsEventsListDiv').not("col-lg-offset-3")){
						
			$( ".nemiEventInterfaceDiv").removeClass("col-lg-4").addClass("col-lg-6");			
			$('.nemiCalendarsEventsListDiv').addClass("col-lg-offset-3", 100, callback);
			
		}
		
		function callback() {
		
		 	$( ".nemiCalendarsEventsListDiv" ).show("clip", 500);
    	}
		        
    	}, 500 );
		
}

function emptyEventEditingDivs(){

	$( ".WYSIWYGShown" ).height(0).removeAttr("id").children().not('.optionsRow, .doneBtnRow').remove();
	
	$( '.WYSIWYGEditable .editedOptionLg' ).removeClass("editedOptionLg").addClass("clickOptionLg")
	
		.removeAttr("data-identifier").attr("data-modified",false).children().not('.newElement').remove();
	
}
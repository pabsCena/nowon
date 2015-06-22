$(function() {

	$( "#cancelBtn" ).click(function() {

		 $( ".nemiInterfaceBodyDiv" ).fadeOut(500, showEditModeAfterCancelEventBtn );
		 
		 deleteEventSessionStorage();

	});
});

function showEditModeAfterCancelEventBtn(){

	emptyEventEditingDivs();

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

	$( ".nemiEventInterfaceView" ).removeAttr("id").children().remove();
	
	$(".titleDateEventParameterDiv").children().find(".eventDateDiv, .eventTitleDiv").find("input").val("");
	
	$( '.descriptionEventParameterDiv .elementDescriptionLayerEdited' ).children(".newDescriptionElement").show();
	
	$( '.descriptionEventParameterDiv .elementDescriptionLayerEdited' ).removeClass("elementDescriptionLayerEdited").addClass("elementDescriptionLayer")
	
		.removeAttr("data-identifier").attr("data-modified",false).children().not('.newDescriptionElement').remove();
		
	if($( '.descriptionEventParameterDiv .elementDescriptionLayer' ).length>5){
	
		var x =	$( '.descriptionEventParameterDiv .elementDescriptionLayer' ).length;
		var y =	x - 5;
		$( '.descriptionEventParameterDiv .elementDescriptionLayer' ).slice(-y).remove();
	
	}
	
}
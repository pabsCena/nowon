$(function() {

	$( "#cancelBtn" ).click(function() {

		 $( ".nemiInterfaceBodyDiv" ).fadeOut(500, showEditModeAfterCancelEventBtn );
		 
		 deleteEventDescriptionSessionStorage();

	});
});

function showEditModeAfterCancelEventBtn(){

	emptyEventEditingDivs();

	setTimeout(function() {
		
		$( ".nemiEventParameterEditorDiv, .nemiEditingEventInterfaceDiv " ).hide();
		$( ".nemiInterfaceBodyDiv" ).show();
		
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

	$( ".nemiEditingEventInterfaceDiv" ).removeAttr("id");
	
	$(".editingNemiEventTitleDateInterfaceView .eventTitleDiv , .eventDateDiv, .eventLocationDiv").children("input").not(":checkbox").val("");
	
	emptyValues();
	
	$(".eventParameterEditorDiv").children().not(":hidden").fadeOut( 100, function() {
	
		$('.eventParameterEditorDiv').removeAttr("id");
		
		$( ".createElementBtnDiv" ).fadeOut();
		
	});
	
		if($("#allDayEventDateCheckBox").prop("checked")){
		
			$("#allDayEventDateCheckBox").prop("checked", false);
			$('#eventStartTimeInputBox, #eventEndTimeInputBox').toggle();
		
		}
	
	
	$( '.descriptionEventParameterDiv .elementDescriptionLayerEdited' ).children(".newDescriptionElement").show();
	
	$( '.descriptionEventParameterDiv .elementDescriptionLayerEdited' ).removeClass("elementDescriptionLayerEdited").addClass("elementDescriptionLayer")
	
		.removeAttr("data-identifier").attr("data-modified",false).children().not('.newDescriptionElement').remove();
		
	if($( '.descriptionEventParameterDiv .elementDescriptionLayer' ).length>5){
	
		var x =	$( '.descriptionEventParameterDiv .elementDescriptionLayer' ).length;
		var y =	x - 5;
		$( '.descriptionEventParameterDiv .elementDescriptionLayer' ).slice(-y).remove();
	
	}
	
}
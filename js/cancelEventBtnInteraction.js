$(function() {

	$( "#cancelBtn" ).click(function() {
	
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
		
		$( ".nemiEventParameterEditorDiv, .nemiEditingEventInterfaceDiv " ).hide();
		
		if($('.nemiCalendarsEventsListDiv').not("col-lg-offset-3")){
						
			$( ".nemiEventInterfaceDiv").removeClass("col-lg-4").addClass("col-lg-6");			
			$('.nemiCalendarsEventsListDiv').addClass("col-lg-offset-3", 100, callback);
			
		}
		
		function callback() {
		
		 	$( ".nemiCalendarsEventsListDiv" ).show("clip", 500);
		 	
		 	emptyEventEditingDivs();
    	}
		        
    	}, 500 );
		
}

function emptyEventEditingDivs(){

	$(".eventParameterEditorDiv").children().not(":hidden").fadeOut( 100, function() {
	
		$('.eventParameterEditorDiv').removeAttr("id");
		
	});

	$( ".nemiEditingEventInterfaceDiv" ).removeAttr("id");
	
	var elements = $(".editingNemiEventTitleDateInterfaceView #eventTitleDiv form, #eventDateDiv form, #eventLocationDiv form").children();	
		
		if($("#allDayEventDateCheckBox").prop("checked")){
		
			$("#allDayEventDateCheckBox").prop("checked", false);
			$('#eventStartTimeInputBox, #eventEndTimeInputBox').toggle();
		
		}

		emptyValues(elements);

	
	$( '.descriptionEventParameterDiv .elementDescriptionLayerEdited' ).children(".newDescriptionElement").show();
	
	$( '.descriptionEventParameterDiv .elementDescriptionLayerEdited' ).removeClass("elementDescriptionLayerEdited").addClass("elementDescriptionLayer")
	
		.removeAttr("data-identifier").attr("data-modified",false).children().not('.newDescriptionElement').remove();
		
	if($( '.descriptionEventParameterDiv .elementDescriptionLayer' ).length>5){
	
		var x =	$( '.descriptionEventParameterDiv .elementDescriptionLayer' ).length;
		var y =	x - 5;
		$( '.descriptionEventParameterDiv .elementDescriptionLayer' ).slice(-y).remove();
	
	}
	
}
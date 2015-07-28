//Script that empties all the input or check boxes

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
	
	$( '.descriptionEventParameterDiv .elementDescriptionLayerEdited' ).children(".editElementDescription, .deleteElementDescription").hide();
	
	$( '.descriptionEventParameterDiv .elementDescriptionLayerEdited' ).removeClass("elementDescriptionLayerEdited").addClass("elementDescriptionLayer")
	
		.removeAttr("data-identifier").attr("data-modified",false).children().not('.newDescriptionElement, .editElementDescription, .deleteElementDescription').remove();
		
	if($( '.descriptionEventParameterDiv .elementDescriptionLayer' ).length>5){
	
		var x =	$( '.descriptionEventParameterDiv .elementDescriptionLayer' ).length;
		var y =	x - 5;
		$( '.descriptionEventParameterDiv .elementDescriptionLayer' ).slice(-y).remove();
	
	}
	
}


function emptyValues(parameters){
	
	jQuery.each( parameters, function( i, val ) {
		
		switch ($(val)[0].type){
		
			case "text":

				$(val)[0].value	=	"";
			
				break;
			
			case "checkbox":
				
				$(val)[0].checked	=	false;
				
				break;
			
			case "textarea":
			
				$(val)[0].value =	"";
				
			default:
				
				$("#imageDivPreview").empty();

				break;
		}

	});

}
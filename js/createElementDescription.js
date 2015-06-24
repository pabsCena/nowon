//Script that manages the creation of elements of the description

$( '#createElementBtn' ).click(function() {

	identifyParameter();
	
	if(!missingEmptyLayer()){
	
		$("#addLayerBtn").fadeIn();
	}
	
	$('.eventParameterEditorDiv').removeAttr("id");

	$( ".createElementBtnDiv" ).fadeOut();
	
});

function identifyParameter(){
	
	var parameterType	=	$('.eventParameterEditorDiv').children().not(":hidden").attr("id");
	getElementParameters(parameterType);
}

function getElementParameters(parameterType){

	var tag;
	
	var identifier = getIdentifier();
	
	switch (parameterType){
		case "textParameterEditorDiv":
			tag="<text>";
			textParameterEditor(identifier);
			break;
		case "imageParameterEditorDiv":
			tag="<img>";
			imageParameterEditor(identifier);
			break;
		case "emailParameterEditorDiv":
			tag="<email>";
			emailParameterEditor(identifier);
			break;	
		case "phoneParameterEditorDiv":
			tag="<phone>";
			phoneParameterEditor(identifier);
			break;	
		case "urlParameterEditorDiv":
			tag="<url>";
			urlParameterEditor(identifier);
			break;					
		default:
			break;
	}
	
	sendTagDescription(tag, identifier);
}

function sendTagDescription(tag, identifier){
		

	if($('.descriptionEventParameterDiv #creating').length){
	
		$('.descriptionEventParameterDiv #creating').attr("data-modified", "true").attr("data-identifier", identifier).append(
		
			$("<span class='glyphicon glyphicon-minus deleteElementDescription'></span>"), $("<p class='editedLayerText'>").text( tag ));
			
		$('.descriptionEventParameterDiv #creating').removeClass("elementDescriptionLayer").addClass("elementDescriptionLayerEdited").removeAttr("id").children(".newDescriptionElement").hide();
	}
}
	



//Script that manages the text description of the event

function textParameterEditor(descriptionObject, descriptionsArray){
	
	var textObject 	=	getTextParameters(descriptionObject);
	var layerToEdit;
	
	if($('.descriptionEventParameterDiv #creating').length){
	
		layerToEdit = 	$('.descriptionEventParameterDiv #creating');
		
		storeNewTextParameters(textObject, descriptionsArray);

	}else{
		
		layerToEdit	=	$('.descriptionEventParameterDiv #editing');
		
		$('.descriptionEventParameterDiv #editing').children(".eventTextInterfaceView").remove();
		
		storeEditedTextParameters(textObject, descriptionsArray);
	 
	}
	
	showText(layerToEdit, textObject.parameters.text);
} 


//Recoge todo lo escrito y lo escribe en la SS
function getTextParameters(descriptionObject){
	
	var textParameters =	new TextParametersObject();
	
	var elements	= $(".textStringParameterDiv").val();
	
	textParameters.text				=	elements;
	
	descriptionObject.parameters	=	textParameters;

	return descriptionObject;
	
}

function storeNewTextParameters(textObject, descriptionsArray){

	var length					=	descriptionsArray.length;

	descriptionsArray[length]	=	textObject;
	
	setEventDescriptionSessionStorage(descriptionsArray);
	
}

function storeEditedTextParameters(textObject, descriptionsArray){

	for (var i=0; i<descriptionsArray.length; i++){
	
		if(textObject.identifier==descriptionsArray[i].identifier){
		
			descriptionsArray[i]	=	textObject;
		
		}
	}
	
	setEventDescriptionSessionStorage(descriptionsArray);

}

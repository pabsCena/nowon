
function textParameterEditor(descriptionObject, descriptionsArray){
	
	var textObject 	=	getTextParameters(descriptionObject);
	
	var layerToEdit	=	$('.descriptionEventParameterDiv #creating');
	
	storeTextParameters(textObject, descriptionsArray);
	
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

function storeTextParameters(textObject, descriptionsArray){

	var length					=	descriptionsArray.length;

	descriptionsArray[length]	=	textObject;
	
	setEventDescriptionSessionStorage(descriptionsArray);
	
}

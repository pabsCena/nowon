
function textParameterEditor(descriptionObject, descriptionsArray){
	
	var textObject 	=	getTextParameters(descriptionObject);
	
	storeTextParameters(textObject, descriptionsArray);

}


//Recoge todo lo escrito y lo escribe en la SS
function getTextParameters(descriptionObject){
	
	var textParameters =	new TextParametersObject();
	
	var elements	= $(".textStringParameterDiv");
	
	textParameters.text				=	clasifyMarkDownLanguage(elements);
	
	descriptionObject.parameters	=	textParameters;

	return descriptionObject;
	
}

function storeTextParameters(textObject, descriptionsArray){

	var length					=	descriptionsArray.length;

	descriptionsArray[length]	=	textObject;
	
	setEventDescriptionSessionStorage(descriptionsArray);
	
}

function clasifyMarkDownLanguage(elements){

	var descriptionTextArrayString	= [];
	
	var descriptionTextArrayStringAux	=	[]
	
	var descriptionTextString	=	"";

	if(elements[0].children.length == 0){
	
		descriptionTextString = descriptionTextString + elements[0].innerText;
		
	}else if(elements[0].innerHTML.substr(0, elements[0].innerHTML.indexOf('<'))){
	
		descriptionTextString = descriptionTextString + elements[0].innerHTML.substr(0, elements[0].innerHTML.indexOf('<'));


			
	}else{
	
	
	}
	return descriptionTextString;	
}



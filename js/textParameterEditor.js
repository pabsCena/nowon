
function textParameterEditor(descriptionObject, descriptionsArray){
	
	var textObject 	=	getTextParameters(descriptionObject);
	
	storeTextParameters(textObject, descriptionsArray);

}


//Recoge todo lo escrito y lo escribe en la SS
function getTextParameters(descriptionObject){
	
	var textParameters =	new TextParametersObject();
	
	var elements	= $(".textStringParameterDiv").children();
	
	textParameters	=	clasifyMarkDownLanguage(elements);
	
	descriptionObject.parameters	=	textParameters;

	return descriptionObject;
	
}

function storeTextParameters(textObject, descriptionsArray){

	var length					=	descriptionsArray.length;

	descriptionsArray[length]	=	textObject;
	
	setEventDescriptionSessionStorage(descriptionsArray);
	
}

function clasifyMarkDownLanguage(elements){

	jQuery.each( elements, function( i, val ) {
	
		console.log(elements[i]);
	
	
	
	});

/*
	switch (textParameter){
	
		case :
		
			break;
			
		case :
		
			break;
			
		case :
		
			break;
			
		case :
		
			break;
			
		case :
		
			break;
			
		case :
		
			break;
			
		case :
		
			break;
			
		case :
		
			break;
			
		case :
		
			break;
			
			
	
	
	}

*/

}
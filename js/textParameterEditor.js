
function textParameterEditor(descriptionObject, descriptionsArray){
	
	var textObject 	=	getTextParameters(descriptionObject);
	
	storeTextParameters(textObject, descriptionsArray);

}


//Recoge todo lo escrito y lo escribe en la SS
function getTextParameters(descriptionObject){
	
	var textParameters =	new TextParametersObject();
	
	var elements	= $(".textStringParameterDiv");
	
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

	var descriptionString =	"";

	if($(elements).text()){
	
		descriptionString	=	descriptionString	+	$(elements).text();
	
	}

	var elementos 	=	$(elements).children();

	jQuery.each( elementos, function( i, val ) {
	
		switch (val.tagName){
		
			case "B":
			
				val.outerHTML
			
				break;
			
			case "I":
			
				break;
				
			case "OL":
			
				break;
				
			case "H1":
			
				break;
				
			case "H2":
			
				break;
				
			case "BLOCKQUOTE":
			
				break;				
				
			default:
			
				break;	
		
		
		
		}
	
	$(elementos);
	
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
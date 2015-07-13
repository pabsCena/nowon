
$(document).on('click','.editElementDescription', function(e) {

	var identifyElementToEdit	=	$(this).siblings("div").attr("class");
	var identifier 				=	$(this).parent().attr("data-identifier");
		
	var descriptionObject		=	getEventDescriptionSessionStorage();
	
	for(var i=0; i<descriptionObject.length; i++){

		if(descriptionObject[i].identifier==identifier){
					
			var element	=	descriptionObject[i];
			
			identifyEventParmeterDiv(element, identifyElementToEdit);
		
		}
	}
		
});

function identifyEventParmeterDiv(element, identifyElementToEdit){

	var parameters	=	Object.keys(element.parameters);
	var parameterName;
	
	switch (identifyElementToEdit){
	
		case "eventTextInterfaceView":
			
			setParametersIntoTextEditMode(element, parameters);
			parameterName	=	"eventTextMenuOption";
			break;
				
		case "eventImageInterfaceView":
			
			setParametersIntoImageEditMode(element, parameters);
			parameterName	=	"eventImageMenuOption";
			break;
			
		case "eventEmailButtonInterfaceView":
		
			setParametersIntoEmailEditMode(element, parameters);			
			parameterName	=	"eventEmailMenuOption";
			break;
			
		case "eventPhoneButtonInterfaceView":
			
			setParametersIntoPhoneEditMode(element, parameters);
			parameterName	=	"eventPhoneMenuOption";
			break;
			
		case "eventUrlButtonInterfaceView":

			setParametersIntoUrlEditMode(element, parameters);
			parameterName	=	"eventUrlMenuOption";
			break;
		
		default:
		
			break;
	
	}
	
	showEventParameterDivSelected(parameterName);

}

function setParametersIntoTextEditMode(element){

	if(element.parameters.text!=undefined){
	
		$(".textStringParameterDiv").text(element.parameters.text);
	
	}	

}

function setParametersIntoImageEditMode(element, parameters){
	
	

}

function setParametersIntoEmailEditMode(element, parameters){


}

function setParametersIntoPhoneEditMode(element, parameters){}

function setParametersIntoUrlEditMode(element, parameters){}


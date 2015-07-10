

$( "#phoneTextBtnStringParameter" ).keyup(function(e) {

 	 e.preventDefault();
	
		if($('.descriptionEventParameterDiv #creating').children(".eventPhoneButtonInterfaceView").find("button").length){
		
			$('.descriptionEventParameterDiv #creating').children(".eventPhoneButtonInterfaceView").find("button").text($(this).val());
			
		}else{
		
			var layerToEdit	=	$('.descriptionEventParameterDiv #creating');
					
			showPhone(layerToEdit, $(this).val());	
		}
	
		}).keydown(function( event ) {
	  
		  if ( event.which == 13 ) {
			event.preventDefault();
		  }
		  	  
	}); 


function phoneParameterEditor(descriptionObject, descriptionsArray){

	var phoneObject 	=	getPhoneParameters(descriptionObject);
	
	storePhoneParameters(phoneObject, descriptionsArray);

};

function getPhoneParameters(descriptionObject){

	var phoneParameters =	new PhoneParametersObject();
	
	var parameters	= $("#phoneParameterEditorDiv form").children("input");
	
	jQuery.each( parameters, function( i, val ) {
		 
		switch (val.id){
			
			case "phoneTextBtnStringParameter":
				
				if(val.value){
					
					phoneParameters.usage		=	val.value;

				}
				
				break;
				
			case "phoneStringParameter":
				
				if(val.value){
					
					phoneParameters.number		=	'"' + val.value + '"';

				}
				
				break;
				
			case "phoneTelephoneTypeParameter":
				
				if(val.checked){
					
					phoneParameters.type		=	val.value;

				}
				
				break;
				
			case "phoneMobileTypeParameter":
				
				if(val.checked){
					
					phoneParameters.type		=	val.value;

				}
				
				break;
							
			default:
			
				break;				
		} 
	});
	
	descriptionObject.parameters	=	phoneParameters;

	return descriptionObject;

}

function storePhoneParameters(phoneObject, descriptionsArray){

	var length					=	descriptionsArray.length;

	descriptionsArray[length]	=	phoneObject;
	
	setEventDescriptionSessionStorage(descriptionsArray);

}

 


$( "#emailTextBtnStringParameter" ).keyup(function(e) {

 e.preventDefault();

	if($('.descriptionEventParameterDiv #creating, #editing').children(".eventEmailButtonInterfaceView").find("button").length){
	 
		$('.descriptionEventParameterDiv #creating, #editing').children(".eventEmailButtonInterfaceView").find("button").text($(this).val());
		
	}else{
	 
		var layerToEdit	=	$('.descriptionEventParameterDiv #creating, #editing');
				
			showEmail(layerToEdit, $(this).val());	
	}

	}).keydown(function( event ) {
  
	  if ( event.which == 13 ) {
		event.preventDefault();
	  }
		  
});
 
 
function emailParameterEditor(descriptionObject, descriptionsArray){

	var emailObject 	=	getEmailParameters(descriptionObject);
	
	if($('.descriptionEventParameterDiv #creating').length){
	
		storeNewEmailParameters(emailObject, descriptionsArray);
		
	}else{
		
		storeEditedEmailParameters(emailObject, descriptionsArray);

	}
	
};


function getEmailParameters(descriptionObject){

	var emailParameters =	new EmailParametersObject();
		
		emailParameters.tag			=	"email";
	
	var parameters	= $("#emailParameterEditorDiv form").children("input");
	
	jQuery.each( parameters, function( i, val ) {
		
		 
		switch (val.id){
			
			case "emailTextBtnStringParameter":
				
				if(val.value){
					
					emailParameters.usage	=	val.value;
 
				}
				 
				break;
				
			case "emailStringParameter":
				
				if(val.value){
									
					emailParameters.address	=	val.value;

				}
				
				break;
				
			case "emailTitleStringParameter":
				
				if(val.value){
					
					emailParameters.title	=	'"' + val.value + '"';

				}
				
				break;
				
			case "emailBodyStringParameter":
				
				if(val.value){
					
					emailParameters.body		=	'"' + val.value + '"';

				}
				
				break;

				
			default:
			
				break;				
		} 
	});
	
	descriptionObject.parameters	=	emailParameters;

	return descriptionObject;

 
}

function storeNewEmailParameters(emailObject, descriptionsArray){

	var length					=	descriptionsArray.length;

	descriptionsArray[length]	=	emailObject;
	
	setEventDescriptionSessionStorage(descriptionsArray);
	
}

function storeEditedEmailParameters(emailObject, descriptionsArray){
	
	for (var i=0; i<descriptionsArray.length; i++){

		if(emailObject.identifier==descriptionsArray[i].identifier){
	
			descriptionsArray[i]	=	emailObject;
	
		}
	}
	
	setEventDescriptionSessionStorage(descriptionsArray);
}
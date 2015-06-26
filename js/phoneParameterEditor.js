

$( "#phoneTextBtnStringParameter" ).keyup(function() {
	
		if($('.descriptionEventParameterDiv #creating').children("button").length){
		
			$('.descriptionEventParameterDiv #creating').children("button").text($(this).val());
			
		}else{
		
			$('.descriptionEventParameterDiv #creating').append(
		
				$("<button class='btn btn-primary'>").text($(this).val()));	
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
		
		 
		switch (i){
			
			case 0:
				
				if($(val)[0].value){
					
					phoneParameters.usage	=	$(val)[0].value;

				}
				
				break;
				
			case 1:
				
				if($(val)[0].value){
					
					phoneParameters.number	=	$(val)[0].value;

				}
				
				break;
				
			case 2:
				
				if($(val)[0].checked){
					
					phoneParameters.type	=	$(val)[0].value;

				}
				
				break;
				
			case 3:
				
				if($(val)[0].checked){
					
					phoneParameters.type		=	$(val)[0].value;

				}
				
				break;
				
			case 4:
				
				if($(val)[0].value){
					
					phoneParameters.icon	=	$(val)[0].value;

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

 
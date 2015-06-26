

	$( "#emailTextBtnStringParameter" ).keyup(function() {
	
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


 
 
function emailParameterEditor(descriptionObject, descriptionsArray){

	var emailObject 	=	getEmailParameters(descriptionObject);
	
	storeEmailParameters(emailObject, descriptionsArray);
	
};


function getEmailParameters(descriptionObject){

	var emailParameters =	new EmailParametersObject();
	
	var parameters	= $("#emailParameterEditorDiv form").children("input");
	
	jQuery.each( parameters, function( i, val ) {
		
		 
		switch (i){
			
			case 0:
				
				if($(val)[0].value){
					
					emailParameters.usage	=	$(val)[0].value;

				}
				
				break;
				
			case 1:
				
				if($(val)[0].value){
					
					emailParameters.email	=	$(val)[0].value;

				}
				
				break;
				
			case 2:
				
				if($(val)[0].value){
					
					emailParameters.title	=	$(val)[0].value;

				}
				
				break;
				
			case 3:
				
				if($(val)[0].value){
					
					emailParameters.body		=	$(val)[0].value;

				}
				
				break;
				
			case 4:
				
				if($(val)[0].value){
					
					emailParameters.icon	=	$(val)[0].value;

				}
				
				break;
				
			default:
			
				break;				
		} 
	});
	
	descriptionObject.parameters	=	emailParameters;

	return descriptionObject;

 
}

function storeEmailParameters(emailObject, descriptionsArray){

	var length					=	descriptionsArray.length;

	descriptionsArray[length]	=	emailObject;
	
	setEventDescriptionSessionStorage(descriptionsArray);
	
}
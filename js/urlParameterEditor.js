
$( "#urlTextBtnStringParameter" ).keyup(function() {
	
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


function urlParameterEditor(descriptionObject, descriptionsArray){

	var urlObject 	=	getUrlParameters(descriptionObject);
	
	storePhoneParameters(urlObject, descriptionsArray);

};

function getUrlParameters(descriptionObject){

	var urlParameters =	new UrlParametersObject();
	
	var parameters	= $("#urlParameterEditorDiv form").children("input");
	
	jQuery.each( parameters, function( i, val ) {
		
		 
		switch (i){
			
			case 0:
				
				if($(val)[0].value){
					
					urlParameters.usage	=	$(val)[0].value;

				}
				
				break;
				
			case 1:
				
				if($(val)[0].value){
					
					urlParameters.url	=	$(val)[0].value;

				}
				
				break;
				
			case 2:
				
				if($(val)[0].checked){
					
					urlParameters.type	=	$(val)[0].value;

				}
				
				break;
				
			case 3:
				
				if($(val)[0].checked){
					
					urlParameters.type		=	$(val)[0].value;

				}
				
				break;
				
			case 4:
				
				if($(val)[0].value){
					
					urlParameters.type	=	$(val)[0].value;

				}
				 
				break;
				
			case 5:
				
				if($(val)[0].value){
					
					urlParameters.type	=	$(val)[0].value;

				}
				 
				break;
				
			case 6:
				
				if($(val)[0].value){
					
					urlParameters.type	=	$(val)[0].value;

				}
				 
				break;
				
			case 7:
				
				if($(val)[0].value){
					
					urlParameters.type	=	$(val)[0].value;

				}
				 
				break;
				
			case 8:
				
				if($(val)[0].value){
					
					urlParameters.icon	=	$(val)[0].value;

				}
				 
				break;
				
			default:
			
				break;				
		} 
	});
	
	descriptionObject.parameters	=	urlParameters;

	return descriptionObject;


}

function storeUrlParameters(urlObject, descriptionsArray){

	var length					=	descriptionsArray.length;

	descriptionsArray[length]	=	urlObject;
	
	setEventDescriptionSessionStorage(descriptionsArray);
}

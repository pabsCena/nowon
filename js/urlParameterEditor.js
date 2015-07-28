//Script that manages the url element of the description section, and stores into the SS

$( "#urlTextBtnStringParameter" ).keyup(function(e) {

	 e.preventDefault();
		
		if($('.descriptionEventParameterDiv #creating, #editing').children(".eventUrlButtonInterfaceView").find("button").length){
		
			$('.descriptionEventParameterDiv #creating, #editing').children(".eventUrlButtonInterfaceView").find("button").text($(this).val());
			
		}else{
		
			var layerToEdit	=	$('.descriptionEventParameterDiv #creating, #editing');
					
			showUrl(layerToEdit, $(this).val());		
		}
	
		}).keydown(function( event ) {
	  
		  if ( event.which == 13 ) {
			event.preventDefault();
		  }
		  	  
	});


function urlParameterEditor(descriptionObject, descriptionsArray){

	var urlObject 	=	getUrlParameters(descriptionObject);
	
	if($('.descriptionEventParameterDiv #creating').length){
	
		storeNewUrlParameters(urlObject, descriptionsArray);
		
	}else{
		
		storeEditedUrlParameters(urlObject, descriptionsArray);

	}

};

function getUrlParameters(descriptionObject){

	var urlParameters =	new UrlParametersObject();
		
	var parameters	= $("#urlParameterEditorDiv form").children("input");
	
	jQuery.each( parameters, function( i, val ) {
		
		 
		switch (val.id){
			
			case "urlTextBtnStringParameter":
				
				if(val.value){
					
					urlParameters.usage		=	val.value;

				}
				
				break;
				
			case "urlStringParameter":
				
				if(val.value){
					
					urlParameters.url	=	val.value;

				}
				
				break;
				
			case "urlTypeBtn":
				
				if(val.checked){
					
					urlParameters.type	=	val.value;

				}
				
				break;
				
			case "imageUrlTypeBtn":
				
				if(val.checked){
					
					urlParameters.type		=	val.value;

				}
				
				break;
				
			case "musicUrlTypeBtn":
				
				if(val.checked){
					
					urlParameters.type	=	val.value;

				}
				 
				break;
				
			case "pdfUrlTypeBtn":
				
				if(val.checked){
					
					urlParameters.type	=	val.value;

				}
				 
				break;
				
			case "youtubeUrlTypeBtn":
				
				if(val.checked){
					
					urlParameters.type	=	val.value;

				}
				 
				break;
				
			case "facebookUrlTypeBtn":
				
				if(val.checked){
					
					urlParameters.type	=	val.value;

				}
				 
				break;
				
			default:
			
				urlParameters.type	=	"url";
			
				break;				
		} 
	});
	
	descriptionObject.parameters	=	urlParameters;

	return descriptionObject;


}

function storeNewUrlParameters(urlObject, descriptionsArray){

	var length					=	descriptionsArray.length;

	descriptionsArray[length]	=	urlObject;
	
	setEventDescriptionSessionStorage(descriptionsArray);
}

function storeEditedUrlParameters(urlObject, descriptionsArray){
	
	for (var i=0; i<descriptionsArray.length; i++){

		if(urlObject.identifier==descriptionsArray[i].identifier){
	
			descriptionsArray[i]	=	urlObject;
	
		}
	}
	
	setEventDescriptionSessionStorage(descriptionsArray);
}

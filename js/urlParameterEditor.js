
$( "#urlTextBtnStringParameter" ).keyup(function(e) {

	 e.preventDefault();
		
		if($('.descriptionEventParameterDiv #creating').children(".eventUrlButtonInterfaceView").find("button").length){
		
			$('.descriptionEventParameterDiv #creating').children(".eventUrlButtonInterfaceView").find("button").text($(this).val());
			
		}else{
		
			var layerToEdit	=	$('.descriptionEventParameterDiv #creating');
					
			showUrl(layerToEdit, $(this).val());		
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

function storeUrlParameters(urlObject, descriptionsArray){

	var length					=	descriptionsArray.length;

	descriptionsArray[length]	=	urlObject;
	
	setEventDescriptionSessionStorage(descriptionsArray);
}

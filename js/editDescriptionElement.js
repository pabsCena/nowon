
$(document).on('click','.editElementDescription', function(e) {

	var identifyElementToEdit	=	$(this).siblings("div").attr("class");
	var identifier 				=	$(this).parent().attr("data-identifier");
	var descriptionObject		=	getEventDescriptionSessionStorage();

	$('.descriptionEventParameterDiv .elementDescriptionLayerEdited').removeAttr("id");
	
	$(this).parent().attr("id", "editing");
	
	if($('.eventParameterEditorDiv').attr("id")==="activated"){
		
			var element		=	$('.eventParameterEditorDiv').children().not(":hidden");
			$(element).hide().find("input:text").val("");
			$(element).find("input:radio:checked").prop('checked', false);
		
		}	

	$('.eventParameterEditorDiv').attr("id", "activated");		
	
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
			
			setParametersIntoTextEditMode(element);
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
	
		$(".textStringParameterDiv").val(element.parameters.text);
	
	}	

}

function setParametersIntoImageEditMode(element, parameters){
	
	for(var i=0; i<parameters.length; i++){
	
		switch (parameters[i]){
			
			case "usage":
				
				if(element.parameters.usage!=undefined){
				
					$("#imageTextBtnStringParameter").val(element.parameters.usage);
				
				}
				
				break;
			
			case "url":
				
				if(element.parameters.url!=undefined){
					
					$("#imageStringParameter").val(element.parameters.url);
				}	
				
				break;		
			
			default:
			
				break;	
		}
	}
}

function setParametersIntoEmailEditMode(element, parameters){
	
	for(var i=0; i<parameters.length; i++){
	
		switch (parameters[i]){
			
			case "usage":
			
				if(element.parameters.usage!=undefined){
				
					$("#emailTextBtnStringParameter").val(element.parameters.usage);
				
				}
			
				break;
				
			case "address":
			
				if(element.parameters.address!=undefined){
				
					$("#emailStringParameter").val(element.parameters.address);
				
				}
			
				break;	
					
			case "title":
			
				if(element.parameters.title!=undefined){
				
					$("#emailTitleStringParameter").val(extractText( element.parameters.title ));
				 
				}
			
				break;
						
			case "body":
				
				if(element.parameters.body!=undefined){
				
					$("#emailBodyStringParameter").val(extractText( element.parameters.body ));
				
				}
		
				break;
						
			default:
			
				break;
		
		}
	}
}

function setParametersIntoPhoneEditMode(element, parameters){

	for(var i=0; i<parameters.length; i++){
	
		switch (parameters[i]){
			
			case "usage":
				
				if(element.parameters.usage!=undefined){
				
					$("#phoneTextBtnStringParameter").val(element.parameters.usage);
				
				}
				break;
				
			case "number":
				
				if(element.parameters.number!=undefined){
				
					$("#phoneStringParameter").val(extractText( element.parameters.number ));
				
				}
				
				break;	
					
			case "type":
			
				$(".phoneBtnTypeParameter").children("input").prop("checked", false);
			
				if(element.parameters.type=="telephone"){
				
					$("#phoneTelephoneTypeParameter").prop("checked", true);
				
				}else{
					
					$("#phoneMobileTypeParameter").prop("checked", true);
					
				}
			
				break;
						
			default:
			
				break;	
		}
	}
}

function setParametersIntoUrlEditMode(element, parameters){

	for(var i=0; i<parameters.length; i++){
	
		switch (parameters[i]){
			
			case "usage":
			
				if(element.parameters.usage!=undefined){
				
					$("#urlTextBtnStringParameter").val(element.parameters.usage);
				
				}
				
				break;
				
			case "url":
			
				if(element.parameters.url!=undefined){
				
					$("#urlStringParameter").val(element.parameters.url);
				
				}
			
				break;	
					
			case "type":
				
				$(".urlBtnTypeParameter").children("input").prop("checked", false);

				switch (element.parameters.type){
					
					case "url":
					
						$("#urlTypeBtn").prop("checked", true);
						break;
						
					case "image":
						
						$("#imageUrlTypeBtn").prop("checked", true);
						break;
						
					case "music":
					
						$("#musicUrlTypeBtn").prop("checked", true);
						break;
						
					case "pdf":
					
						$("#pdfUrlTypeBtn").prop("checked", true);
						break;
					
					case "youtube":
					
						$("#youtubeUrlTypeBtn").prop("checked", true);
						break;		
						
					case "facebook":
						
						$("#facebookUrlTypeBtn").prop("checked", true);
						break;
						
					default:
					
						break;	
				}
				
				break; 
						
			default:
			
				break;
		}
	}
}

function extractText( str ){
  
  var ret = "";

  if ( /"/.test( str ) ){
    ret = str.match( /"(.*?)"/ )[1];
  } else {
    ret = str;
  }

  return ret;
}
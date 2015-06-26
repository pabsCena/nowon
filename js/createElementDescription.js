//Script that manages the creation of elements of the description


 $(function(){
 
   $( '#createElementBtn' ).click(function() {
		
		if(requiredParametersFilled()){
	
			identifyParameter();
	
			if(!missingEmptyLayer()){
	
				$("#addLayerBtn").fadeIn();
			}
	
			$('.eventParameterEditorDiv').removeAttr("id");
			
			$('.eventParameterEditorDiv').children().not(":hidden").fadeOut();

			$( ".createElementBtnDiv" ).fadeOut();
		
		}
			
	});
	
});
 
 $(function(){
 
 	 $( '#cancelCreationElementBtn' ).click(function() {
 	 
 	 	$('.descriptionEventParameterDiv .elementDescriptionLayer').removeAttr("id").children().not('.newDescriptionElement').remove();
 	 	
 	 	emptyValues();

	 		
		$(".eventParameterEditorDiv").children().not(":hidden").fadeOut( "fast", function() {
		
			$( ".createElementBtnDiv" ).hide();
	
			$('.eventParameterEditorDiv').removeAttr("id");
				
		});
				
	});
 
 });
function identifyParameter(){
	
	var parameterType	=	$('.eventParameterEditorDiv').children().not(":hidden").attr("id");
	
	getElementParameters(parameterType);
}

function getElementParameters(parameterType){

	var tag;
	
	var descriptions	=	[];
	
	var descriptionObject =	new DescriptionObject();
	
	var eventDescriptionArray	=	getEventDescriptionSessionStorage();
	
	var identifier = getIdentifier();
	
	if(eventDescriptionArray!=undefined){
	
		descriptions			=	eventDescriptionArray;
		
	}
	 
	switch (parameterType){
		case "textParameterEditorDiv":
		
			tag="<text";
			descriptionObject.identifier	=	identifier;
			descriptionObject.tag			=	tag;
			textParameterEditor(descriptionObject, descriptions);
			break;
			
		case "imageParameterEditorDiv":
		
			tag="<img";
			descriptionObject.identifier	=	identifier;
			descriptionObject.tag			=	tag;
			imageParameterEditor(descriptionObject, descriptions);
			emptyValues();
			break;
			
		case "emailParameterEditorDiv":
		
			tag="<email";
			descriptionObject.identifier	=	identifier;
			descriptionObject.tag			=	tag;
			emailParameterEditor(descriptionObject, descriptions);
			emptyValues();
			break;	
			
		case "phoneParameterEditorDiv":
		
			tag="<phone";
			descriptionObject.identifier	=	identifier;
			descriptionObject.tag			=	tag;
			phoneParameterEditor(descriptionObject, descriptions);
			emptyValues();
			break;	
			
		case "urlParameterEditorDiv":
		
			tag="<url";
			descriptionObject.identifier	=	identifier;
			descriptionObject.tag			=	tag;
			urlParameterEditor(descriptionObject, descriptions);
			emptyValues();
			break;				
				
		default:
			break;
	}
	
	sendTagDescription(tag, identifier);
}

function sendTagDescription(tag, identifier){ 
		
	if($('.descriptionEventParameterDiv #creating').length){
	
		$('.descriptionEventParameterDiv #creating').attr("data-modified", "true").attr("data-identifier", identifier).append(
		
			$("<span class='glyphicon glyphicon-minus deleteElementDescription'></span>"), $("<p class='editedLayerText'>").text( tag ));
			
		$('.descriptionEventParameterDiv #creating').removeClass("elementDescriptionLayer").addClass("elementDescriptionLayerEdited").removeAttr("id").children(".newDescriptionElement").hide();
	}
}
	
function requiredParametersFilled(){
	
	var requiredElements 	= 	$('.eventParameterEditorDiv').children().not(":hidden").find("[data-required=true]");
	var length				=	requiredElements.length;
	var valid;
	
	jQuery.each( requiredElements, function( i, val ) {
		
		if(!$(val)[0].value){
		
			$.alert('Parameter required', {
			
				autoClose: true,
				closeTime: 2000,
				type:'warning', 
				onShow:function(){
				
					$(val).focus();
					
				}
			});
			
			return valid	=	false;
						
		}else if(i===length-1){
			
			return valid	=	true;
		}
	});

	return valid;

}


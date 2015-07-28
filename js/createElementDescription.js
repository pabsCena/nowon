//Script that manages the creation of elements of the description

 $(function(){
 
   $( '#createElementBtn' ).click(function(e) {
		
	e.preventDefault();
		
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
 
 	 $( '#cancelCreationElementBtn' ).click(function(e) {
 	 
 	 e.preventDefault();

 	 	$('.descriptionEventParameterDiv .elementDescriptionLayer').removeAttr("id").children().not('.newDescriptionElement, .editElementDescription, .deleteElementDescription').remove();
 	 	
 	 	var parameters	= $(".eventParameterEditorDiv").children().find("form").children().not(":hidden");
 	 	
 	 	$('.descriptionEventParameterDiv .elementDescriptionLayer, .elementDescriptionLayerEdited').removeAttr("id");
 	 	
 	 	$("#imageDivPreview").empty();
	
 	 	emptyValues(parameters);

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
	
	var descriptions	=	[];
	
	var descriptionObject =	new DescriptionObject();
	
	var eventDescriptionArray	=	getEventDescriptionSessionStorage();
	
	var identifier; 
	
	if($('.descriptionEventParameterDiv .elementDescriptionLayerEdited#editing').attr("id")=="editing"){
	
		identifier = $('.descriptionEventParameterDiv .elementDescriptionLayerEdited#editing').attr("data-identifier");
	
	}else{

		identifier	=	getIdentifier();
	}
		
	var emptyParameters	=	$(".eventParameterEditorDiv").children().find("form").children().not(":hidden");

	
	if(eventDescriptionArray!=undefined){
	
		descriptions			=	eventDescriptionArray;
		
	}
	 
	switch (parameterType){
		case "textParameterEditorDiv":
		
			descriptionObject.identifier	=	identifier;
			textParameterEditor(descriptionObject, descriptions);
			break;
			
		case "imageParameterEditorDiv":
			
			descriptionObject.identifier	=	identifier;
			imageParameterEditor(descriptionObject, descriptions);	
			break;
			
		case "emailParameterEditorDiv":
		
			descriptionObject.identifier	=	identifier;
			emailParameterEditor(descriptionObject, descriptions);
			break;	
			
		case "phoneParameterEditorDiv":
			
			descriptionObject.identifier	=	identifier;
			phoneParameterEditor(descriptionObject, descriptions);
			break;	
			
		case "urlParameterEditorDiv":
		
			descriptionObject.identifier	=	identifier;
			urlParameterEditor(descriptionObject, descriptions);
			break;				
				
		default:
			break;
	}
	
	
	emptyValues(emptyParameters);
	sendTagDescription(identifier);	
		
}

function sendTagDescription(identifier){ 


	if($('.descriptionEventParameterDiv #editing').length){
		
		$('.descriptionEventParameterDiv #editing').removeAttr("id");		
	
	}else if($('.descriptionEventParameterDiv #creating').length){
	
		$('.descriptionEventParameterDiv #creating').attr("data-modified", "true").attr("data-identifier", identifier);
		
		$(".descriptionEventParameterDiv #creating").children(".editElementDescription, .deleteElementDescription").show();
			
		$('.descriptionEventParameterDiv #creating').removeClass("elementDescriptionLayer").addClass("elementDescriptionLayerEdited").removeAttr("id").children(".newDescriptionElement").hide();
	}
}
	  
function requiredParametersFilled(){
	
	var requiredElements 	= 	$('.eventParameterEditorDiv').children().not(":hidden").find("[data-required=true]");		
	var length				=	requiredElements.length;
	var valid;
	 
	jQuery.each( requiredElements, function( i, val ) {
		
		if($(val).attr("data-valid-url")=="false"){
		
			$.alert('Image url not valid', {
			
				autoClose: true,
				closeTime: 1500,
				type:'warning', 
				onShow:function(){
				
					$(val).focus();
					
				}
			}); 
		
		}else if(!checkIsCorrect(val)){
		
			$.alert('Parameter required', {
			
				autoClose: true,
				closeTime: 1500,
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

function checkIsCorrect(val){

	if($(val)[0].textContent){

		return true;
		
	}else if($(val)[0].value){
	
		return true;	
	
	}else{

		return false;
	
	}

}


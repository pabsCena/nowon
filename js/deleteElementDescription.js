//Script that deletes an element of the description

$(document).on('click','.deleteElementDescription', function(e) {

 	 e.preventDefault();
	
	var identifier	=	 $(this).parent().attr("data-identifier");
	
	deleteDescriptionElement(identifier);
	
	$(this).parent().children(".newDescriptionElement").show();
	
	$(this).parent().removeClass("elementDescriptionLayerEdited").addClass("elementDescriptionLayer").attr("data-modified","false").removeAttr("data-identifier").children().not('.newDescriptionElement').remove();
    
    if($("#addLayerBtn").is(":visible")){
    
    	$("#addLayerBtn").hide();
    }
        
});


function deleteDescriptionElement(identifier){

	var descriptionsArray 	= 	getEventDescriptionSessionStorage();

	for(var i=0; i<descriptionsArray.length; i++){
	
		if(identifier==descriptionsArray[i].identifier){
		
			descriptionsArray.splice(i,1);
		}	
	}
	
	setEventDescriptionSessionStorage(descriptionsArray);

}
 
//Script that deletes an element of the description

$(document).on('click','.deleteElementDescription', function() {
	
	var identifier	=	 $(this).parent().attr("id");
	
	//deleteDescriptionElement(elementIdentifier);
	
	$(this).parent().children(".newDescriptionElement").show();
	
	$(this).parent().removeClass("elementDescriptionLayerEdited").addClass("elementDescriptionLayer").attr("data-modified","false").removeAttr("data-identifier").children().not('.newDescriptionElement').remove();
    
    if($("#addLayerBtn").is(":visible")){
    
    	$("#addLayerBtn").hide();
    }
    
});


function deleteDescriptionElement(identifier){

	var event 	= 	getEventSessionStorage();

	for(var i=0; i<event.description.length; i++){
		if(identifier==event.description[i].identifier){
			event.description.splice(i,1);
		}	
	}
	
	setEventSessionStorage(event);
	$(".WYSIWYGShown").find("[data-identifier='"+identifier+"']").remove();
}

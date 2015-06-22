//Script that deletes an element of the description

$(document).on('click','.deleteElementDescription', function() {
	
	var element	=	 $(this).parent();
	
	//deleteElement(element);
	
	$(this).parent().children(".newDescriptionElement").show();
	
	$(this).parent().removeClass("elementDescriptionLayerEdited").addClass("elementDescriptionLayer").attr("data-modified","false").removeAttr("data-identifier").children().not('.newDescriptionElement').remove();
    
    if($("#addLayerBtn").is(":visible")){
    	$("#addLayerBtn").hide();
    }
    
});


function deleteElement(element){

	var identifier	=	 $(element).attr("data-identifier");
	var event 	= 	getEventSessionStorage();
	
	switch	(identifier){
		
		case	"summary":
			delete event.summary;
			break;
		case	"date":
			delete event.date;
			break;
		default:
			for(var i=0; i<event.description.length; i++){
				if(identifier==event.description[i].identifier){
					event.description.splice(i,1);
				}
			
			}
			break;	
	}
	setEventSessionStorage(event);
	$(".WYSIWYGShown").find("[data-identifier='"+identifier+"']").remove();
}
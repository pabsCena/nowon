//Script that shows an element of an event. All of them are included.

function showElements(htmlDivSelected){
	
	var event		=	getEventSessionStorage();
	var description	=	getEventDescriptionSessionStorage();
		
	var parameters	=	Object.keys(event);
		
	for(var i=0; i<parameters.length;i++){
	
		switch (parameters[i]){
		
			case "id":
				setEventId(htmlDivSelected, event.id); 
				break;
				
			case "summary":
				showTitle(htmlDivSelected, event.summary);
				break;
				
			case "date":
				showDate(htmlDivSelected, event.date);
				break;
				
			case "location":
				showLocation(htmlDivSelected, event.location);
				break;	
				
			case "description":
			
				for(var j=0; j<description.length; j++){
				
					if(description[j]!=null){
					
						showDescription(htmlDivSelected, description[j])
					
					}
				}
				
				break;
		 		 
			default:
				break;	
		 
		}	
	}
}

function showDescription(htmlDivSelected, descriptionObject){

	switch	(descriptionObject.elementDescription){
				
		case	"text":				
			showText(htmlDivSelected, descriptionObject.parameters.text);
			break;
		case	"image":
			showImage(htmlDivSelected,  descriptionObject.parameters.url);
			break;
		case	"email":
			showEmail(htmlDivSelected,  descriptionObject.parameters.usage);
			break;
		case	"phone": 
			showPhone(htmlDivSelected,  descriptionObject.parameters.usage);
			break;
		case	"url":
			showUrl(htmlDivSelected,  descriptionObject.parameters.usage);
			break;
		
		default:
			break;
	}	
}
 

function setEventId(htmlDivSelected, element){

	$( htmlDivSelected ).attr("id", element);
}

function showTitle(htmlDivSelected, element){

	$( htmlDivSelected ).append(
       	$("<div id='eventSummaryInterfaceView'>").append(
       		$("<p>").text(element)));
} 

function showDate(htmlDivSelected, element){

	$( htmlDivSelected ).append(
       	$("<div id='eventDateInterfaceView'>").append(
       		$("<p>").text(element.start.date)));
}
 
function showLocation(htmlDivSelected, element){
	
	$( htmlDivSelected ).append(
       	$("<div id='eventLocationInterfaceView'>").append(
       		$("<p>").text("Location: " + element)));
       		 
} 

function showText(htmlDivSelected, element){

	$( htmlDivSelected ).append(
       	$("<div class='eventTextInterfaceView'>").append(
       			$("<p>").text(element)));
       	
}

function showImage(htmlDivSelected, element){
	
	
	if(element){
	
	  $( htmlDivSelected ).append(
		  	$("<div class='eventImageInterfaceView'>"));
		  		
	$.loadImage(element)
		.done(function(image) {
				
			var imageDiv = 	$( ".eventImageInterfaceView:not([data-width])" );
			
			resizeImage( imageDiv, image, element, image.width,  image.height, 200, 200);				
		 
		  }) 
            
		.fail(function(image) {
	 	  
		  alert("Failed to load image");
		
		});
	} 
	
}
 
function showEmail(htmlDivSelected, element){

	$( htmlDivSelected ).append(
       	$("<div class='eventEmailButtonInterfaceView'>").append(
       		$("<button class='btn btn-primary emailButtonInterface'>").text(element).append(
       			$("<span class='glyphicon glyphicon-envelope emailButtonInterfaceIcon'></span>"))));
}

function showPhone(htmlDivSelected, element){ 
	
	$( htmlDivSelected ).append(
       	$("<div class='eventPhoneButtonInterfaceView phoneButtonInterface'>").append(
       		$("<button class='btn btn-primary phoneButtonInterface'>").text(element).append(
       			$("<span class='glyphicon glyphicon-phone-alt phoneButtonInterfaceIcon'></span>"))));
	
} 

function showUrl(htmlDivSelected, element){

	$( htmlDivSelected ).append(
       	$("<div class='eventUrlButtonInterfaceView urlButtonInterface'>").append(
       		$("<button class='btn btn-primary urlButtonInterface'>").text(element).append(
       			$("<span class='glyphicon glyphicon-link urlButtonInterfaceIcon'></span>"))));
}


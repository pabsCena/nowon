//Script that shows the elements of an event

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
			
				for(var i=0; i<description.length; i++){
				
					if(description[i]!=null){
					
						showDescription(htmlDivSelected, description[i])
					
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
       		$("<p>").text("In " + element)));
       		 
} 

function showText(htmlDivSelected, element){

	var aux = element.split("\n"); 

	$( htmlDivSelected ).append(
       	$("<div class='eventTextInterfaceView'>"));
       	
       	for(var i=0; i<aux.length; i++){
       	
       		$( htmlDivSelected ).append(
       			$("<p>").text(aux[i]));
       	}
}

function showImage(htmlDivSelected, element){
	
	
	if(element){
	
	  $( htmlDivSelected ).append(
		  	$("<div class='eventImageInterfaceView'>"));
		  		
	$.loadImage(element)
		.done(function(image) {
				
			  $( ".eventImageInterfaceView" ).append(
				$("<img>").attr("src", element))
		
		  })
            
		.fail(function(image) {
		  
		  alert("Failed to load image");
		
		});
	} 
	
}

function showEmail(htmlDivSelected, element){

	$( htmlDivSelected ).append(
       	$("<div class='eventEmailButtonInterfaceView'>").append(
       		$("<button class='btn btn-primary'>").text(element)));
}

function showPhone(htmlDivSelected, element){ 
	
	$( htmlDivSelected ).append(
       	$("<div class='eventPhoneButtonInterfaceView'>").append(
       		$("<button class='btn btn-primary'>").text(element)));
	
} 

function showUrl(htmlDivSelected, element){

	$( htmlDivSelected ).append(
       	$("<div class='eventUrlButtonInterfaceView'>").append(
       		$("<button class='btn btn-primary'>").text(element)));
}


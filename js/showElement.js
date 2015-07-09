//Script that shows the elements of an event

function showElement(element, identifier){

	switch (identifier){
	
		case "id":
			setEventId(element, identifier);
			break;
		case "summary":
			showTitle(element, identifier);
			break;
		case "date":
			showDate(element, identifier);
			break;
		case "location":
			showLocation(elemen, identifier);
			break;		
		case "description":
			showDescription(element, identifier);
			break;
		default:
			break;
	}
} 

function showDescription(descriptionList){
	
	for(var i=0; i<descriptionList.length; i++){
	
		if(descriptionList[i]!=null){
			
			switch	(descriptionList[i].elementDescription){
				
				case	"text":				
					showText(descriptionList[i].parameters.text);
					break;
				case	"image":
					showImage(descriptionList[i].parameters.url);
					break;
				case	"email":
					showEmail(descriptionList[i].parameters.usage);
					break;
				case	"phone": 
					showPhone(descriptionList[i].parameters.usage);
					break;
				case	"url":
					showUrl(descriptionList[i].parameters.usage);
					break;
				
				default:
					break;
			}
		}	
	}	
}


function setEventId(element){
	$( ".nemiEventInterfaceView" ).attr("id", element);
}

function showTitle(element){

	$( ".nemiEventInterfaceView" ).append(
       	$("<div id='eventSummaryInterfaceView'>").append(
       		$("<p>").text(element)));
} 

function showDate(element){

	$(".nemiEventInterfaceView").append(
       	$("<div id='eventDateInterfaceView'>").append(
       		$("<p>").text(element.start.date)));
}
 
function showLocation(element){
	
	$(".nemiEventInterfaceView").append(
       	$("<div id='eventLocationInterfaceView'>").append(
       		$("<p>").text("In " + element)));
       		 
} 

function showText(element){

	var aux = element.split("\n"); 

	$(".nemiEventInterfaceView").append(
       	$("<div class='eventTextInterfaceView'>"));
       	
       	for(var i=0; i<aux.length; i++){
       	
       		$(".eventTextInterfaceView").append(
       			$("<p>").text(aux[i]));
       	}
}

function showImage(element){
	
	
	if(element){
	
	  $(".nemiEventInterfaceView").append(
		  	$("<div class='eventImageInterfaceView'>"));
		  		
	$.loadImage(element)
		.done(function(image) {
				
			  $(".eventImageInterfaceView").append(
				$("<img>").attr("src", element))
		
		  })
            
		.fail(function(image) {
		  
		  alert("Failed to load image");
		
		});
	}
	
}

function showEmail(element){

	$(".nemiEventInterfaceView").append(
       	$("<div class='eventEmailButtonInterfaceView'>").append(
       		$("<button class='btn btn-primary'>").text(element)));
}

function showPhone(element){
	
	$(".nemiEventInterfaceView").append(
       	$("<div class='eventPhoneButtonInterfaceView'>").append(
       		$("<button class='btn btn-primary'>").text(element)));
	
}

function showUrl(element){

	$(".nemiEventInterfaceView").append(
       	$("<div class='eventUrlButtonInterfaceView'>").append(
       		$("<button class='btn btn-primary'>").text(element)));
}


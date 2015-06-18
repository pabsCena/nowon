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
		case "description":
			//showDescription(element, identifier);
			break;
		default:
			break;
	}
}

function setEventId(element, identifier){
	$( ".nemiEventInterfaceView" ).attr("id", element);
}

function showTitle(element, identifier){

	$( ".nemiEventInterfaceView" ).append(
       	$("<div class='eventSummary'>").attr("data-identifier", identifier).append(
       		$("<p>").text("· "+element)));
}

function showDate(element, identifier){

	$(".nemiEventInterfaceView").append(
       	$("<div class='Eventdate'>").attr("data-identifier", identifier).append(
       		$("<p class='startEventDate'>").text("· "+element.start.date+ " at "+ element.start.time),
       			$("<p class='endEventDate'>").text("· "+element.end.date+ " at "+ element.end.time)));
}

/*
function showDescription(element, identifier){
	
	var tag	=	element.tag;
	
	switch	(tag){
	
		case	"email":
			showEmail(element, identifier);
			break;
		case	"phone":
			showPhone(element, identifier);
			break;
		case	"url":
			showUrl(element, identifier);
			break;
		case	"text":				//text
			showText(element, identifier);
			break;
		default:
			break;
	}
}

function showEmail(element, identifier){

	$(".WYSIWYGShown").append(
       	$("<div class='email'>").attr("data-identifier", identifier).append(
       		$("<button class='btn btn-primary'>").text(element.usage)));
}

function showPhone(element, identifier){
	
	$(".WYSIWYGShown").append(
       	$("<div class='phone'>").attr("data-identifier", identifier).append(
       		$("<button class='btn btn-primary'>").text(element.usage)));
	
}

function showUrl(element, identifier){

	$(".WYSIWYGShown").append(
       	$("<div class='url'>").attr("data-identifier", identifier).append(
       		$("<button class='btn btn-primary'>").text(element.usage)));
}

function showText(element, identifier){

	$(".WYSIWYGShown").append(
       	$("<div class='text'>").attr("data-identifier", identifier).append(
       		$("<p>").text(element.parameters.text)));
}
*/
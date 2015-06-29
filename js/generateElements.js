//Script that localise the event in the Session Storage and generate the elements that composes it


function generateElementsOfEvent(eventIdentified){
	
	var event 		=	new EventObject();
	
	event.id			=	eventIdentified.id;
	event.summary		=	eventIdentified.summary;
	event.date			=	splitDate(eventIdentified.date);
	//eventId.description	=	splitDescription(event.description);

	console.log(event);

	setEventSessionStorage(event);	
}


function splitDate(date){
	
	var eventDate	=	new EventDateObject();
	
	eventDate.start	 	=	returnDate(date.start);
	eventDate.end		=	returnDate(date.end);
		
		
	return eventDate;
}

function returnDate(date){

	var newDate	=	new StartObject();

	newDate.date 	= date.substring(0,10);
	newDate.time	= date.substring(11,16); 

	return newDate;
}

/*
function splitDescription(description){

	if(description){
		var eachLine 	= description.split('\n');
		var array		=	[];
	
		for(var i = 0; i<eachLine.length; i++) {
			array[i]	=	generateDescriptionElement(eachLine[i]);
		}
	}
	return	array;
}

function generateDescriptionElement(element){
	
	var description		=	new Description();	
	var localizator 	=	element.substring(0,4);
	var usage;
		
	switch	(localizator){
	
		case	"<ema":
			description.tag			=	"email";
			usage					=	element.split(">");
			description.usage		=	usage[1];
			description.identifier	=	getIdentifier();
			description.parameters	=	generateEmailParameters(element);
			break;
		case	"<pho":
			description.tag			=	"phone";
			usage					=	element.split(">");
			description.usage		=	usage[1];
			description.identifier	=	getIdentifier();
			description.parameters	=	generatePhoneParameters(element);
			break;
		case	"<url":
			description.tag			=	"url";
			usage					=	element.split(">");
			description.usage		=	usage[1];
			description.identifier	=	getIdentifier();
			description.parameters	=	generateUrlParameters(element);
			break;
		default:
			description.tag				=	"text";
			description.identifier		=	getIdentifier();
			description.parameters		=	generateTextParameters(element);
			break;
	}
	return description;
}

function generateEmailParameters(element){
	var emailParameters	=	new EmailParameters();
	var textArray		=	element.split(/[< =>]+/);
	emailParameters.email	=	textArray[2];

	return emailParameters;
}

function generatePhoneParameters(element){
	var phoneParameters		=	new PhoneParameters();
	var textArray			=	element.split(/[< =>]+/);
	phoneParameters.number	=	textArray[2];

	return phoneParameters;
}

function generateUrlParameters(element){
	var urlParameters	=	new UrlParameters();
	
	urlParameters.url	= 	element;		//falta
	//var textArray		=	element.split(/[< =>]+/);
	//urlParameters.url	=	textArray[2];
	//urlParameters.type	=	textArray[4];

	return urlParameters;
}

function generateTextParameters(element){
	var textParameters	=	new TextParameters();
	textParameters.text	=	element;
	
	return	textParameters;
}
*/
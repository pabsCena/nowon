//Script that localise the event in the Session Storage and generate the elements that composes it


function generateElementsOfEvent(event){
	
	var eventId 		=	new EventIdObject();
	
	eventId.id			=	event.id;
	eventId.summary		=	event.summary;
	eventId.date		=	splitDate(event.date);
	//eventId.description	=	splitDescription(event.description);

	console.log(eventId);

	setEventSessionStorage(eventId);	
}


function splitDate(date){
	
	var eventDate	=	new EventDateObject();
	
	var startDate 	=	returnDate(date.start);
	var endDate		=	returnDate(date.end);
		
	eventDate.start	=	startDate;
	eventDate.end	=	endDate;
	
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
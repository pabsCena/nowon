//Script that localise the event in the Session Storage and generate the elements that composes it


function generateElementsOfEvent(eventIdentified){
 	
	var event 				=	new EventObject();
	var descriptionObject 	=	new DescriptionObject();

	
	event.id			=	eventIdentified.id;
	event.summary		=	eventIdentified.summary;
	event.date			=	splitDate(eventIdentified.date);
	event.location		=	eventIdentified.location;
	event.description	=	eventIdentified.description;
	
	if(event.description){
		
		descriptionObject	=	splitDescription(eventIdentified.description);
		
		setEventDescriptionSessionStorage(descriptionObject);

		console.log(descriptionObject);	
		
	}
	
	console.log(event);	

	setEventSessionStorage(event);
	setEventDescriptionSessionStorage(descriptionObject);

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


function splitDescription(description){

	if(description){
	
		var eachLine 	= 	description.split('\n');
		var array		=	[];
		var aux			=	[];
		var aux2;
		var counter;

		for(var i = 0; i<eachLine.length; i++) {
		
			if(eachLine[i].substring(0,2) != "![" && eachLine[i].substring(0,1) != "["){
				
				if(eachLine[i]==0){
					
					eachLine[i]	=	"\n";
				
				}
				
				aux[i] 	=	eachLine[i];
				
				if(i==eachLine.length-1){
				
					for(var j=0; j<aux.length; j++){
					
						if(aux2==undefined){
						
							aux2 = aux[j];
						
						}else{
							
							aux2 = aux2 + "\n" + aux[j];
						
						}
						
					}
					
					array[i]	= 	generateDescriptionElement(aux2);
					
					aux = [];
				
				}
			
			}else{
			
				if(aux.length != 0){
								
					for(var j=0; j<aux.length; j++){
						
						if(aux2==undefined){
						
							aux2 = aux[j];
						
						}else{
							
							aux2 = aux2 + "\n" + aux[j];
						
						}
												
					}
					
					array[i-1]	= 	generateDescriptionElement(aux2);
					
					aux = [];
					
					array[i]	= 	generateDescriptionElement(eachLine[i]);
										
					}else{
				
						array[i]	= 	generateDescriptionElement(eachLine[i]);
				
					}
			}
		}
					
	}

	return	array;
}



function generateDescriptionElement(elementString){
	
	var descriptionObject	=	new DescriptionObject();
	
	var localizator;
	var parametersString	= [];
	var usageString 		= [];
	
	if(elementString.substring(0,2) == "!["){
	
		localizator	=	"imageNotUrl";
		
		elementString.replace(/\((.*?)\)/g, function(g0,g1){parametersString.push(g1);})
		
		
		elementString.replace(/\[(.*?)\]/g, function(g0,g1){usageString.push(g1);})
	
		var parametersStringArray	=	parametersString[0].match(/(".*?"|[^"\s]+)+(?=\s*|\s*$)/g);
	
	
	}else if (elementString.substring(0,1) == "["){
				
		elementString.replace(/\((.*?)\)/g, function(g0,g1){parametersString.push(g1);})
		
		elementString.replace(/\[(.*?)\]/g, function(g0,g1){usageString.push(g1);})
	
		var parametersStringArray	=	parametersString[0].match(/(".*?"|[^"\s]+)+(?=\s*|\s*$)/g);
	
		localizator	=	parametersStringArray[0];

	
	}else{
	
		localizator	=	"text";
	
	}
	
	switch	(localizator){
		 
		case	"imageNotUrl":
		
				descriptionObject.identifier			=	getIdentifier();
				descriptionObject.elementDescription	=	"image";
				descriptionObject.parameters			=	generateImageParameters(parametersStringArray, usageString[0]);
			
			break;
			
		case	"email":

				descriptionObject.identifier			=	getIdentifier();
				descriptionObject.elementDescription	=	"email";
				descriptionObject.parameters			=	generateEmailParameters(parametersStringArray, usageString[0]);
			
			break;

		case	"telephone":
			
				descriptionObject.identifier			=	getIdentifier();
				descriptionObject.elementDescription	=	"phone";
				descriptionObject.parameters			=	generatePhoneParameters(parametersStringArray, usageString[0]);
				
			break;
		
		case	"mobile":
			
				descriptionObject.identifier			=	getIdentifier();
				descriptionObject.elementDescription	=	"phone";
				descriptionObject.parameters			=	generatePhoneParameters(parametersStringArray, usageString[0]);
			
			break;	
		
		case	"url":
		
				descriptionObject.identifier			=	getIdentifier();
				descriptionObject.elementDescription	=	"url";
				descriptionObject.parameters			=	generateUrlParameters(parametersStringArray, usageString[0]);
			
			break;
			
		case	"image":
		
				descriptionObject.identifier			=	getIdentifier();
				descriptionObject.elementDescription	=	"url";				
				descriptionObject.parameters			=	generateUrlParameters(parametersStringArray, usageString[0]);
			
			break;
			
		case	"music":
		
				descriptionObject.identifier			=	getIdentifier();
				descriptionObject.elementDescription	=	"url";				
				descriptionObject.parameters			=	generateUrlParameters(parametersStringArray, usageString[0]);
			
			break;
		
		case	"pdf":
		
				descriptionObject.identifier			=	getIdentifier();
				descriptionObject.elementDescription	=	"url";				
				descriptionObject.parameters			=	generateUrlParameters(parametersStringArray, usageString[0]);
			
			break;
			
		case	"youtube":
		
				descriptionObject.identifier			=	getIdentifier();
				descriptionObject.elementDescription	=	"url";				
				descriptionObject.parameters			=	generateUrlParameters(parametersStringArray, usageString[0]);
			
			break;
			
		case	"facebook":
		
				descriptionObject.identifier			=	getIdentifier();
				descriptionObject.elementDescription	=	"url";				
				descriptionObject.parameters			=	generateUrlParameters(parametersStringArray, usageString[0]);
			
			break;					
		
		case 	"text":
		
				descriptionObject.identifier			=	getIdentifier();
				descriptionObject.elementDescription	=	"text";				
				descriptionObject.parameters			=	generateTextParameters(elementString);
		
			break;
			
		default:
		
		
			break;
				
	}
	 
	return descriptionObject;
}

function generateImageParameters(parametersString, usageString){
	
	var imageParametersObject	=	new ImageParametersObject();
	
	imageParametersObject.usage		=	usageString;
	imageParametersObject.url 		=	parametersString[0];
	imageParametersObject.width		=	parametersString[1];
	imageParametersObject.height	=	parametersString[2];	
	
	return imageParametersObject;
}

function generateEmailParameters(parametersString, usageString){

	var emailParametersObject	=	new EmailParametersObject();
	
	emailParametersObject.usage		=	usageString;
	emailParametersObject.tag 		=	parametersString[0];
	emailParametersObject.address	=	parametersString[1];
	emailParametersObject.title		=	parametersString[2];
	emailParametersObject.body		=	parametersString[3];


	return emailParametersObject;
}

function generatePhoneParameters(parametersString, usageString){

	var phoneParametersObject		=	new PhoneParametersObject();
	
	phoneParametersObject.usage		=	usageString;
	phoneParametersObject.type		=	parametersString[0];
	phoneParametersObject.number	=	parametersString[1];

	return phoneParametersObject;
}

function generateUrlParameters(parametersString, usageString){

	var urlParametersObject		=	new UrlParametersObject();
	
	urlParametersObject.usage		= 	usageString;
	urlParametersObject.type		=	parametersString[0];
	urlParametersObject.url			=	parametersString[1];

	return urlParametersObject;
}

function generateTextParameters(elementString){
	
	var textParametersObject	=	new TextParametersObject();
	textParametersObject.text	=	elementString;
	
	return	textParametersObject;
}

//Script that manages the creation of elements of the description


$( '#createElementBtn' ).click(function() {

	makeElementObject();
	
	if(!missingEmptyLayer()){
		$("#addLayerBtn").fadeIn();
	}
	
	$( ".createElementBtnDiv" ).hide();
});

function makeElementObject(){
	
	var identifier	=	"cosa";
	sendToEditMode(identifier);
}

function sendToEditMode(identifier){

	/*
	var tag, value, usage;
	var array 	=	[];
	
	var element 	=	returnElement(identifier);
	
	console.log(element);
	
	switch (identifier){
		case "summary":
			tag		=	"Title: ";
			value	=	element;
			break;
		case "date":
			tag		=	"Date & Time: "
			value	=	"from " + element.start.date + " at " + element.start.time + " to " + element.end.date + " at " + element.end.time;
			break;	
		default:
			array	=	sendDescription(element);
			tag		=	array[0];
			value	=	array[1];
			break;
	}
	showInEditMode(identifier, tag, value);
	showEventFromEditMode();
}

function sendDescription(element){
	
	var aux		=	element.tag;
	
	switch	(aux){
	
		case	"email":
			tag		=	"Email: ";
			value	=	element.parameters.email;
			break;
		case	"phone":
			tag		=	"Phone number: ";
			value	=	element.parameters.number;
			break;
		case	"url":
			type	=	element.parameters.type;
			tag		=	"Url type ["+type+"]: ";
			value	=	element.parameters.url;
			break;
		case	"text":				//text
			tag		=	"Text: "
			value	=	element.parameters.text;
			break;
		default:
			break;
	}
		
	var	array	=	[tag, value]
	return array;
}
		
function showInEditMode(identifier, tag, value){
*/
	if($('.descriptionEventParameterDiv #creating').length){
		$('.descriptionEventParameterDiv #creating').attr("data-modified", "true").attr("data-identifier", identifier).append(
			$("<span class='glyphicon glyphicon-minus deleteElementDescription'></span>"));/*, $("<p class='editedLabelText'>").text( tag + value ));	*/
		$('.descriptionEventParameterDiv #creating').removeClass("elementDescriptionLayer").addClass("elementDescriptionLayerEdited").removeAttr("id").children(".newDescriptionElement").hide();
	}
}
	



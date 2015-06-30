
function getTitleDateLocation(eventObject, eventTitleDateLocation){

	var missingParameters	=	"";
	var dateObject			=	new EventDateObject();
	var startDateObject		=	new StartObject();
	var endDateObject		=	new EndObject();

	jQuery.each( eventTitleDateLocation, function( i, val ) {
	 

		switch ($(val).children().attr("id")){
		
			case "eventTitleDiv":
			
				if($(val).children().find("#eventTitleInputBox").val()){
					
					eventObject.summary	=	$(val).children().find("#eventTitleInputBox").val();

				}else{
				
					 eventObject.summary	=	"undefined";
					 
					//missingParameters	=	missingParameters	+	"Title";
				}
			
				break;
				
			case "eventDateDiv":
				
				if($(val).children().find("#eventStartDateInputBox").val()){
				
					startDateObject.date	=	$(val).children().find("#eventStartDateInputBox").val();
					
				
					if($(val).children().find("#eventStartTimeInputBox").val()){
						
						startDateObject.time	= 	$(val).children().find("#eventStartTimeInputBox").val();
						
					}else{
					
						startDateObject.time	= 	"00:00";
					
					}	
									
					if(!$(val).children().find("#eventEndDateInputBox").val()){
					
						endDateObject.date		=	$(val).children().find("#eventStartDateInputBox").val();
						
					}else{
					
						endDateObject.date		=	$(val).children().find("#eventEndDateInputBox").val();
					
					}
					
					if(	$(val).children().find("#eventEndTimeInputBox").val()){
						
						endDateObject.time		=	$(val).children().find("#eventEndTimeInputBox").val();
					
					}else{
						
						endDateObject.time		=	"00:00";
					
					}	
					
					dateObject.start	=	mergeDate(startDateObject);
					dateObject.end		=	mergeDate(endDateObject);
					eventObject.date	=	dateObject;
					
				}else{
				
					var now = new Date();
					var	today = now.toISOString();
			
					dateObject.start	=	today;
			
					var twoHoursLater = new Date(now.getTime() + (2*1000*60*60));
					twoHoursLater = twoHoursLater.toISOString();
				
					dateObject.end		=	twoHoursLater;
			
					eventObject.date	=	dateObject;
				
					//missingParameters	=	missingParameters	+	" Date";
					
				}
			
				break;
				
			case "eventLocationDiv":
			
				if($(val).children().find("#geocompleteInputBox").val()){
					
					eventObject.location	=	$(val).children().find("#geocompleteInputBox").val();

				}
				
				break;
				
			default:
			
				break;			
		
		}
				
	});
	
	/*
	
	if(missingParameters){
		
		if(confirm(missingParameters + " are missing. Do you still want to continue?")){
			
			dateObject.summary	=	"undefined";
		
			var now = new Date();
			var	today = now.toISOString();
			
			dateObject.start	=	today;
			
			var twoHoursLater = new Date(now.getTime() + (2*1000*60*60));
			twoHoursLater = twoHoursLater.toISOString();
				
			dateObject.end		=	twoHoursLater;
			
			eventObject.date	=	dateObject;

		}
	
	}
	
	*/
	
	setEventSessionStorage(eventObject);
}

function mergeDate(object){

	var aux		=	object.date.split('-');
	var aux2	=	object.time.split(':')
	var completeDate	=	new Date(Date.UTC(aux[0], aux[1]-1, aux[2], aux2[0], aux2[1]));
	var ISODate			=	completeDate.toISOString();

	return ISODate;
}
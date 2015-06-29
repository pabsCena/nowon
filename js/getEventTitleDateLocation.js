
function getTitleDateLocation(eventObject, eventTitleDateLocation){

	var missingParameters	=	"";
	var dateObject			=	new EventDateObject();
	var startDateObject		=	new StartObject();
	var endDateObject		=	new EndObject();

	jQuery.each( eventTitleDateLocation, function( i, val ) {
	

		switch (val.children[0].id){
		
			case "eventTitleDiv":
			
				if(val.children.eventTitleDiv.children[0].children.eventTitleInputBox.value){
					
					eventObject.summary	=	val.children.eventTitleDiv.children[0].children.eventTitleInputBox.value;

				}else{
				
					
					missingParameters	=	missingParameters	+	"Title";
				}
			
				break;
				
			case "eventDateDiv":
				
				if(val.children.eventDateDiv.children[0].children.eventStartDateInputBox.value){
					
					if(!val.children.eventDateDiv.children[0].children.allDayEventDateCheckBox.checked){
					
							startDateObject.time	= 	val.children.eventDateDiv.children[0].children.eventStartTimeInputBox.value;
							endDateObject.time		=	val.children.eventDateDiv.children[0].children.eventEndTimeInputBox.value;
						
						}
						
						startDateObject.date	=	val.children.eventDateDiv.children[0].children.eventStartDateInputBox.value;
						
						if(!val.children.eventDateDiv.children[0].children.eventEndDateInputBox.value){
						
							endDateObject.date		=	val.children.eventDateDiv.children[0].children.eventStartDateInputBox.value;
							
						}else{
						
							endDateObject.date		=	val.children.eventDateDiv.children[0].children.eventEndDateInputBox.value;
						
						}
					
					dateObject.start	=	startDateObject;
					dateObject.end		=	endDateObject;
					eventObject.date	=	dateObject;
					
				}else{
				
					missingParameters	=	missingParameters	+	" Date";
					
				}
			
				break;
				
			case "eventLocationDiv":
			
				if(val.children.eventLocationDiv.children[0].children.geocompleteInputBox.value){
					
					eventObject.location	=	val.children.eventLocationDiv.children[0].children.geocompleteInputBox.value;

				}
				
				break;
				
			default:
			
				break;			
		
		}
				
	});
	
	
	if(missingParameters){
		
		if(confirm(missingParameters + " are missing. Do you still want to continue?")){
		
			var now = new Date();
			var	today = returnDate(now.toISOString());
			
			dateObject.start	=	today;
			
			var twoHoursLater = new Date(now.getTime() + (2*1000*60*60));
			twoHoursLater = returnDate(twoHoursLater.toISOString());
				
			dateObject.end		=	twoHoursLater;
			
			eventObject.date	=	dateObject;

		}
	
	}
	
	setEventSessionStorage(eventObject);
}
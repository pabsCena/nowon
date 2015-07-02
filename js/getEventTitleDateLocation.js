
function getTitleDateLocation(eventObject, eventTitleDateLocation){

	var missingParameters	=	false;
	var dateObject			=	new EventDateObject();
	var startDateObject		=	new StartObject();
	var endDateObject		=	new EndObject();
	
	if(requiredParameters()){

		jQuery.each( eventTitleDateLocation, function( i, val ) {
	 

			switch ($(val).children().attr("id")){
		
				case "eventTitleDiv":
			
					eventObject.summary	=	$(val).children().find("#eventTitleInputBox").val();
			
					break;
				
				case "eventDateDiv":
								
						startDateObject.date	=	$(val).children().find("#eventStartDateInputBox").val();
					
				
						if($(val).children().find("#eventStartTimeInputBox").val()){
						
							startDateObject.time	= 	$(val).children().find("#eventStartTimeInputBox").val();
						
							dateObject.start	=	mergeDateTime(startDateObject);
						
						}else{
					
							dateObject.start	=	startDateObject.date;
					
						}	
									
						if(!$(val).children().find("#eventEndDateInputBox").val()){
					
							endDateObject.date		=	$(val).children().find("#eventStartDateInputBox").val();
						
						}else{
					
							endDateObject.date		=	$(val).children().find("#eventEndDateInputBox").val();
					
						}
					
						if(	$(val).children().find("#eventEndTimeInputBox").val()){
						
							endDateObject.time		=	$(val).children().find("#eventEndTimeInputBox").val();
						
							dateObject.end		=	mergeDateTime(endDateObject);
					
						}else{
					
							dateObject.end		=	endDateObject.date;
					
						}
					
						eventObject.date	=	dateObject;
			
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
	
		setEventSessionStorage(eventObject);
		
		return true;
	
	}
	
	return false;
		
}

function mergeDateTime(object){

	var aux		=	object.date.split('-');
	var aux2	=	object.time.split(':')
	var completeDate	=	new Date(Date.UTC(aux[0], aux[1]-1, aux[2], aux2[0], aux2[1]));
	var ISODate			=	completeDate.toISOString();

	return ISODate;
}


function requiredParameters(){
	
	var requiredElements 	= 	$(".editingNemiEventTitleDateInterfaceView .row").children().not("#eventLocationDiv").children("form").find("[data-required=true]");
	var valid;
	 
	jQuery.each( requiredElements, function( i, val ) {
		
		if(!checkIsCorrect(val)){
		
			$.alert('Parameter required', {
			
				autoClose: true,
				closeTime: 2000,
				type:'warning', 
				onShow:function(){
				
					$(val).focus();
					
				}
			});
			
			return valid	=	false;
						
		}else if(i===length-1){
			
			return valid	=	true;
		}
	});

	return valid;

}
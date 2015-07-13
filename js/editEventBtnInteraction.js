
$(function() {

	$( "#editEventBtn" ).click(function(e) {

	 e.preventDefault();
	 
	 	$( ".nemiInterfaceBodyDiv" ).fadeOut(500, showEditModeAfterNewEventBtn);
				
		setTimeout(function() {
			
			setParametersToEditMode();

		 }, 500 );		
				
		
		$( "#doneBtn" ).text("Modify Event");
				
	});
});


function setParametersToEditMode(){

	var event 		=  getEventSessionStorage();
	var description	=	getEventDescriptionSessionStorage();

	var parameters	=	Object.keys(event);
		
	for(var i=0; i<parameters.length;i++){
	
		switch (parameters[i]){
		
			case "summary":
				setTitleInEditingDiv(event.summary);
				break;
				
			case "date":
				setDateInEditingDiv(event.date);
				break;
				
			case "location":
				setLocationInEditingDiv(event.location);
				break;	
				
			case "description":
				setDescriptionInEditingDiv(description);
				break;
		 		
			default:
				break;	
		
		}	
	}
}

function setTitleInEditingDiv(summary){
	
	if(summary){
	
		$( "#eventTitleInputBox" ).val(summary);
		
	}

}

function setDateInEditingDiv(date){

	if(date.start.date){
		
		$( "#eventStartDateInputBox" ).val(date.start.date);
		
		if(date.start.time){
		
			$( "#eventStartTimeInputBox" ).val(date.start.time);
		
		}
		
	}
	
	if(date.end.date){
		
		$( "#eventEndDateInputBox" ).val(date.end.date);
		
		if(date.start.time){
		
			$( "#eventEndTimeInputBox" ).val(date.end.time);
		
		}
	
	}
	
}

function setLocationInEditingDiv(location){

	if(location){
		
		$( "#geocompleteInputBox" ).val(location);	
	
	}


}

function setDescriptionInEditingDiv(descriptionObject){

	var firstdescriptionLayer;

	for(var i=0; i<descriptionObject.length; i++){
		
		if(!missingEmptyLayer()){ 
		
			$("<div class='elementDescriptionLayer ui-sortable-handle'>").attr("data-modified", false).append(		
				$("<span class='glyphicon glyphicon-plus newDescriptionElement'></span>"),
					$("<span class='glyphicon glyphicon-pencil editElementDescription'></span>"),
						$("<span class='glyphicon glyphicon-remove deleteElementDescription'></span>")).insertAfter($('.descriptionEventParameterDiv div.ui-sortable-handle').last());
			
			if(i==descriptionObject.length-1){
			
				$("#addLayerBtn").fadeIn();
				
			}
		
		}
		
		if(descriptionObject[i]!=null){
		
			firstdescriptionLayer	=	$('.descriptionEventParameterDiv .elementDescriptionLayer').first();

				$(firstdescriptionLayer).attr("data-modified", "true").attr("data-identifier", descriptionObject[i].identifier);
	
					$(firstdescriptionLayer).removeClass("elementDescriptionLayer").addClass("elementDescriptionLayerEdited").removeAttr("id").children(".newDescriptionElement").hide();
					
						$(firstdescriptionLayer).children(".editElementDescription, .deleteElementDescription").show();
						
						showDescription( firstdescriptionLayer, descriptionObject[i]);
		}	
	
	}

}

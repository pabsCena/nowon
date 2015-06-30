

function getDescription(eventObject, eventDescription){

	if($(eventDescription).children(".elementDescriptionLayerEdited")){
	
		var descriptionElement		=	$(eventDescription).children(".elementDescriptionLayerEdited");
		var descriptionObject		=	getEventDescriptionSessionStorage();
		var descriptionArrayString	=	[]; 
		
		jQuery.each( descriptionElement, function( i, val ) {
		
			var identifier	=	$(val).attr("data-identifier");
			var descriptionString	=	"";
			
			for(var j=0; j<descriptionObject.length; j++){
				
				if(descriptionObject[j].identifier==identifier){
					
					var element				=	descriptionObject[j];
					
					jQuery.each( element, function( k, val2 ) {
					
						switch (k){
						
							case "tag":
								
								descriptionString	=	descriptionString	+	val2;
							
								break;
								
							case "parameters":
								
								jQuery.each( val2, function( m, val3 ) {
								
									if(m=="usage"){
									
										descriptionString	=	descriptionString	+ ">" +	val3;
									
									}else{
									
										descriptionString	=	descriptionString	+ " " + m + "="	+ val3;
									
									}
								
								});
							
								break;
								
							default:
							
								break;
										
						
						}
											
					});
				
				}
			
			}
			
			descriptionArrayString[i]	=	descriptionString;
			
		});
		
		eventObject.description	=	mergeDescriptionText(descriptionArrayString);
	
	}
	
	setEventSessionStorage(eventObject);

} 


function mergeDescriptionText(descriptionArray){
	
	var descriptionCompleteString;

	for(var i=0; i<descriptionArray.length;i++){
	
		if(i==0){
		
			descriptionCompleteString		=	descriptionArray[i];	
			
		}else{
		
			descriptionCompleteString	=	descriptionCompleteString	+ "\n" + descriptionArray[i];	
		}
	}
	
	return descriptionCompleteString;	 
}
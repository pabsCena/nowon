//Script that manages all the interaction with the buttons and divs in the app
 
 //make the labels of the WYSIWYGEditableDiv sortable
 
 $(function() {
    
    $( ".descriptionEventParameterDiv" ).sortable({
    	
    	items: '> div:not(#demo_ul)',
    	
    	update: function(event, ui) {

            //showEventFromEditMode();
        }
    	
    });
    
    $( ".descriptionEventParameterDiv" ).disableSelection({
    	
    	update: function(event, ui) {
            //showEventFromEditMode();
        }
    	
    });
 
  });
 
 
//append a new empty label
 
 $(document).ready(function(){
 
	 $('#addLayerBtn').on('click', function() {
	 
		$("#addLayerBtn").fadeOut("fast", function(){
		
			$("<div class='elementDescriptionLayer ui-sortable-handle'>").attr("data-modified", false).append(
			$("<span class='glyphicon glyphicon-plus newDescriptionElement'></span>")).insertBefore($(this)); 
		});
     
	});
});

//Check if there is any other empty label

function missingEmptyLayer (){

	if ( $( ".descriptionEventParameterDiv div.elementDescriptionLayer" ).length ) {
 
    	return true;
 
	}else{
	
		return false;
		
	}
   
};



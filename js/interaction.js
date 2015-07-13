//Script that manages all the interaction with the buttons and divs in the app
 
 //Event date and time interaction
	

$(function(){

	 $('#eventDateDiv .time').timepicker({
		'showDuration': true,
		'timeFormat': 'H:i'
	});

	$('#eventDateDiv .date').datepicker({
		'format': 'yyyy-mm-dd',
		'autoclose': true
	});

	$('#eventDateDiv').datepair();

  });
   	
$(function(){
     
    $("#geocompleteInputBox").geocomplete();
   
});   
	
    
$(function(){     
    
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


$(function() {

	$('#allDayEventDateCheckBox').change(function () {
	
		 $('#eventStartTimeInputBox, #eventEndTimeInputBox').val("").toggle();
		 
	});
});

//checkboxes of all the parameters

$(function() {
 	
 		$('#emailIconCheckBox').change(function () {
 		
 			if($(this).attr("value")==="true"){
 			
 				$(this).attr("value", "false");
 			
 			}else{
 			
 				$(this).attr("value", "true");
 			
 			}
 			
 			});
 			
 		$('#phoneIconCheckBox').change(function () {
 		
 			if($(this).attr("value")==="true"){
 			
 				$(this).attr("value", "false");
 			
 			}else{
 			
 				$(this).attr("value", "true");
 			
 			}
 			
 			});
 			
 		$('#urlIconCheckBox').change(function () {
 		
 			if($(this).attr("value")==="true"){
 			
 				$(this).attr("value", "false");
 			
 			}else{
 			
 				$(this).attr("value", "true");
 			
 			}
 			
 			});			
	
		$('.urlBtnTypeParameter input').change( function() {
	
			 $(".urlBtnTypeParameter input").not(this).prop("checked", false);
		}); 
	
		$('.phoneBtnTypeParameter input').change( function() {
	
			 $(".phoneBtnTypeParameter input").not(this).prop("checked", false);
		}); 	
 
});


//append a new empty label
 
 $(document).ready(function(){
 
	 $('#addLayerBtn').on('click', function(e) {
	
		e.preventDefault();
	 	
		$("#addLayerBtn").fadeOut("fast", function(){
		
			$("<div class='elementDescriptionLayer ui-sortable-handle'>").attr("data-modified", false).append(
				$("<span class='glyphicon glyphicon-plus newDescriptionElement'></span>"),
					$("<span class='glyphicon glyphicon-pencil editElementDescription'></span>"),
						$("<span class='glyphicon glyphicon-remove deleteElementDescription'></span>")).insertBefore($(this)); 
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



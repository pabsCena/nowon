//Script that searches for specific events according to it's date or title

$(document).ready(function(e) {
	$('#searchEventBtn').click(function() {
		
		var searchBtn			=	$(this).siblings("ul");
				
		$('ul.dropdown-menu').toggle();
		
		$( "#searchEventDateInputBox, #searchEventTitleInputBox" ).hide();
		
		$(document).mouseup(function () {
			
			var _con = searchBtn;
			_con.hide();
        
        });
	});
 
	$('ul.dropdown-menu li a').click(function(e) {
		e.preventDefault(); 
				
		switch ($(this).attr('class')){
			case "searchByDateOption":
				$( "#searchEventDateInputBox" ).fadeIn("slow").focus();
				break;
			case "searchByTitleOption":
				$( "#searchEventTitleInputBox" ).fadeIn("slow").focus();
				break;
			default:
				break;	
		}
	});

});

//Method that searches for specific events according to it's date

 $('.searchEventInputBoxDiv #searchEventDateInputBox').datepicker({
        'format': 'yyyy-mm-dd',
        'autoclose': true
    });


$("#searchEventDateInputBox").on('change', function(){
	
   	
    	var eventDate 		= $(this).val();
    	var calendarId 		= $(".form-control").find(':selected').attr('id');
		
		eventsByDate(eventDate, calendarId);
		
		$( '#searchEventDateInputBox' ).val('');
		$( '#searchEventDateInputBox' ).hide();
   
});


function eventsByDate(eventDate, calendarId){
	
	var calendars 	= getCalendarsSessionStorage();
	var array 		= [];
	var  counter = 0;
	
	for(var i=0; i<calendars.length; i++){
		if(calendars[i].id == calendarId){
			for(var j=0; j<calendars[i].events.length; j++){
				
				if(calendars[i].events[j].date.start!=undefined){
					
					var str = calendars[i].events[j].date.start;
					var str2 = str.slice(0,10);							
					var pos = eventDate.slice(0,10);
				
					if(pos===str2){
						array[counter] = calendars[i].events[j];
						counter++;
					}
				}	
			}		
		}
	}
	
	showSearchedEvents(array);
}

//Method where  searches for a specific event according to it's title

$('#searchEventTitleInputBox').keypress(function(event) {
 	
 	var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == '13') {
    
    	var eventTitle = $('#searchEventTitleInputBox').val();
    	var calendarId = $(".form-control").find(':selected').attr('id');
    	eventsByTitle(eventTitle, calendarId);
    	
    	$('#searchEventTitleInputBox').val('');
    	$( '#searchEventTitleInputBox' ).fadeOut();

	}
});

function eventsByTitle(eventTitle, calendarId){
	
	var calendars 	= getCalendarsSessionStorage();
	var array 		= [];
	var  counter = 0;
	
	for(var i=0; i<calendars.length; i++){
		if(calendars[i].id == calendarId){
			for(var j=0; j<calendars[i].events.length; j++){
				if(calendars[i].events[j].summary!=undefined){
					var str = calendars[i].events[j].summary;
					var pos = str.search(eventTitle);
				
					if(pos!=-1){
						array[counter] = calendars[i].events[j];
						counter++;
					}
				}	
			}		
		}
	}
	
	showSearchedEvents(array);
}

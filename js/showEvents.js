//Script that shows the events related to the calendar selected

$(document).ready(function() {
	$( ".form-control" ).change(function () {
	
		//$( ".WYSIWYGShown" ).removeAttr("id").children().not('.optionsRow,  .doneBtnRow').remove();
		
		//$( ".optionsRow" ).hide();
		
		showIncomingEvents();			

	});
});	

function showIncomingEvents(){
		
	var now = new Date();
	var aux = now.toISOString();
	var today = aux.slice(0,10);
	
	var calendarId = $(".form-control.calendarList").find(':selected').attr('id');
	var calendars = getCalendarsSessionStorage();
	var counter = 0;
	var events = [];
		
	for(var i=0; i<calendars.length; i++){
		if(calendars[i].id == calendarId){
			for(var j=0; j<calendars[i].events.length; j++){
				if(calendars[i].events[j].date.start!=undefined && calendars[i].events[j].date.start>=today){
					events[counter] = calendars[i].events[j];	
					counter++;	
				}
			}		
		}
	}
		
	if(events.length!=0){
		showEvents(events);	
	}else{
		noEvents("No upcoming events :(");
	}
}

function showEvents(events){
	
	$(".eventListDiv").empty();
		
	var eventId; 
	var pageNumber	=	1;
	var counter 	=	0;
	var date;
	
	for(var i=0; i<events.length; i++){
		
		eventId = events[i].id;
		date 	= checkDate(events[i]);
		
		if(counter!=5){				
			counter++;
		}else{
			counter=1;
			pageNumber++;
		}	
		
		insertEvent(events[i], eventId, pageNumber, date);	
	}
}

function insertEvent(event, eventId, pageNumber, date){
	
	$(".eventListDiv").append(
       		$("<a class='list-group-item' id='"+eventId+"' data-page-number='"+pageNumber+"'>").append(
       			$("<h4 class='list-group-item-heading'>").text(event.summary)));
					$("<p class='list-group-item-text'>").text("Date: "+date+"").insertAfter($('.list-group-item-heading:last'));
		
	if(pageNumber==1){
		$(".list-group-item").addClass('current');
	} 		
}


function checkDate(event){
	var date, newDate;
	
	if(event.date.start!=null){
       	date = event.date.start.substring(0,10).split('-');
		newDate = date[2] + '-' + date[1] + '-' + date[0];				
	}else{
		newDate = "not definded";
	}	
	return newDate;
}

function noEvents(text){

	$(".eventListDiv").empty();
	
	$(".eventListDiv").append(
    	$("<a class='list-group-item'>").addClass('current').append(
    		$("<h4 class='list-group-item-heading'>").text(text)));
	
}

function showSearchedEvents(events){
	if(events.length!=0){
		showEvents(events);	
	}else{
		noEvents("No matches found :(");
	}
	
}

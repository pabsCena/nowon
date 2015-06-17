//Script that shows the calendars in the Calendar list form control

function showCalendars(){
	
	var calendarList = getCalendarsSessionStorage(); 
	
	for(var i=0; i<calendarList.length; i++){
		
		$(".form-control.calendarList").append(
		
			$("<option id='" + calendarList[i].id+"'>").text(calendarList[i].name));
			
  		}  
  }  
  

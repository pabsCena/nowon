//Once the user clicks on the btn will be asked to introduce the email and password in order 
//to have access to all the calendars associated to the gmail account

var clientId 	=  	'264744363499-ioemohb9hlmd2v3dae3pg2mhcg4v0lcn.apps.googleusercontent.com';	
var scopes 		=  	'https://www.googleapis.com/auth/calendar';

$('#loginBtn').on('click', function(){

	checkAuth();

});

function checkAuth() {
	//send the auth request
 	gapi.auth.authorize({
  		//set the parameters client_id and scope
  		client_id: clientId, scope: scopes}, 
  		//call the function handleAuthResult,
  		handleAuthResult); 
}

//handles the result from Google call
function handleAuthResult(authResult) {
	if (authResult) {
	
		//if the result is ok, call for the calendars
  		console.log(authResult);
  		
  		$body = $("body");
		$body.addClass("loading");
  		
		loopLi();
  		  		
  		getCalendars();
		getEventsFromCalendarId();
	
    	
    	//show the interface of Nemi
  		//$('.nemiLoginInterfaceDiv').hide();
  		//$('.nemiInterfaceDiv').fadeIn("slow");
  		
  		$( ".nemiLoginInterfaceDiv" ).hide( "clip", 1000, callback );
 						
  	} else {
  		//if the result is not ok, shows a message error
    	console.error("could not retrieve access token");
   	}
}

function callback() {
  setTimeout(function() {
	$( ".nemiInterfaceDiv" ).show("clip", 1000);
  }, 1000 );
};

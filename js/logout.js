//Script that logs out of the google user account and relocate to the main site 

$(function() {

	$('.logOutBtn').on('click', function(e){
	
	 e.preventDefault();
	 
		signOut();
	});
});

function signOut(){
	
	deleteSessionStorage();
	document.location.href = "https://www.google.com/accounts/Logout?continue=https://appengine.google.com/_ah/logout?continue=http://www.playlevel.com/caltool/editor/nemi.html";

}
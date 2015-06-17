//Script that logs out of the google user account 

$('.logoutBtn').on('click', function(){
	signOut();
});

function signOut(){
	
	deleteSessionStorage();
	document.location.href = "https://www.google.com/accounts/Logout?continue=https://appengine.google.com/_ah/logout?continue=https://www.stud.hig.no/~141625/probando/nowon.html";

}
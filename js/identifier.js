//Generate a random number between 1-100.000, in order to create an identifier for the 
//elements on the EditMode.

function getIdentifier(){

	var identifier =  Math.floor(Math.random() * (100000 - 1 + 1)) + 1;

	return identifier;
}
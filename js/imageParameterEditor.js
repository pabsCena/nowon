$(function() {

    $( "#slider" ).slider();
  
  });


function imageParameterEditor(identifier){

	getImageParameters();
	
	console.log(identifier);

	$('#imageParameterEditorDiv').fadeOut("fast");

};

function getImageParameters(){

	storeImageParameters();

}

function storeImageParameters(){

	emptyImageparameters();
}

function emptyImageparameters(){


}
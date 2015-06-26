
function emptyValues(){

var parameters	= $(".eventParameterEditorDiv").children().find("form").children().not(":hidden");
	
	jQuery.each( parameters, function( i, val ) {
		
		switch ($(val)[0].type){
		
			case "text":

				$(val)[0].value	=	"";
			
				break;
			
			case "checkbox":
				
				$(val)[0].checked	=	false;
				
				break;
		
			default:
			
				break;
		}
	
			
	
	});

}
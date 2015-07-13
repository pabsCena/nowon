
$("#imageStringParameter").bind('change paste keyup', function(){

	$(this).attr("data-valid-url", "false");

});


$('#imagePreviewBtn').on('click', function(){

	var urlImagen 	=	$("#imageStringParameter").val();
	
	$( "#imageDivPreview").empty();
	
	if(urlImagen){

		$.loadImage(urlImagen)
			.done(function(image) {
			
			$( "#imageStringParameter" ).attr("data-valid-url", "true");
		
			  $('#imageDivPreview').attr("data-width", image.width).attr("data-height", image.height).append(
				$("<img>").attr("src", urlImagen).attr("width", 200).attr("height", 200)
			  )
			})
			.fail(function(image) {
			 
				 $.alert('Fail to load the image', {
			
					autoClose: true,
					closeTime: 1000,
					type:'warning', 
					onShow:function(){
				
						$( "#imageStringParameter" ).attr("data-valid-url", "false").focus();
						$( "#imageDivPreview") .empty();
					
					}
				});
	 
			});
	
	}else{
		
		$( "#imageStringParameter" ).attr("data-valid-url", "false");
		$("#imageDivPreview").empty();
	}
	
});

 
function imageParameterEditor(descriptionObject, descriptionsArray){

	var htmlDivSelected	=	$('.descriptionEventParameterDiv #creating');
	
	var imageUrl		=	$( '#imageStringParameter').val();
	
		showImage(htmlDivSelected, imageUrl);
				
		$("#imageDivPreview").empty();
	
	var imageObject 	=	getImageParameters(descriptionObject);

	storeImageParameters(imageObject, descriptionsArray);
		
};  
	
	
function getImageParameters(descriptionObject){

	var imageParameters =	new ImageParametersObject();
	
	var parameters	= $("#imageParameterEditorDiv form").children("input").not("button");
	
	imageParameters.image = "image";
	
	jQuery.each( parameters, function( i, val ) {
	
		 
		switch (val.id){
		
			case "imageTextBtnStringParameter":
			
					if(val.value){
					
						imageParameters.usage	=	val.value;	
								
					}else{
						
						imageParameters.usage	=	"";	
					
					}
			
				break;
			
			case "imageStringParameter":
				
				if(val.value){
					
					imageParameters.url		=	val.value;
					imageParameters.width	=	$('#imageDivPreview').attr("data-width");
					imageParameters.height	=	$('#imageDivPreview').attr("data-height");

				}
				
				break;
				
			default:
			
				break;				
		} 
	});
	
	descriptionObject.parameters	=	imageParameters;

	return descriptionObject;


}

function storeImageParameters(imageObject, descriptionsArray){

	var length					=	descriptionsArray.length;

	descriptionsArray[length]	=	imageObject;
	
	setEventDescriptionSessionStorage(descriptionsArray);
}

	
	$.loadImage = function(url) {
	  // Define a "worker" function that should eventually resolve or reject the deferred object.
	  var loadImage = function(deferred) {
		var image = new Image();
	 
		// Set up event handlers to know when the image has loaded
		// or fails to load due to an error or abort.
		image.onload = loaded;
		image.onerror = errored; // URL returns 404, etc
		image.onabort = errored; // IE may call this if user clicks "Stop"
	 
		// Setting the src property begins loading the image.
		image.src = url;
	 
		function loaded() {
		  unbindEvents();
		  // Calling resolve means the image loaded sucessfully and is ready to use.
		  deferred.resolve(image);
		}
		function errored() {
		  unbindEvents();
		  // Calling reject means we failed to load the image (e.g. 404, server offline, etc).
		  deferred.reject(image);
		}
		function unbindEvents() {
		  // Ensures the event callbacks only get called once.
		  image.onload = null;
		  image.onerror = null;
		  image.onabort = null;
		}
	  };
   
	  // Create the deferred object that will contain the loaded image.
	  // We don't want callers to have access to the resolve() and reject() methods, 
	  // so convert to "read-only" by calling `promise()`.
	  return $.Deferred(loadImage).promise();
	};


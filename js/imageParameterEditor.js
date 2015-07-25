
$("#imageStringParameter").bind('change paste keyup', function(){

	$(this).attr("data-valid-url", "false");

});


$('#imagePreviewBtn').on('click', function(){

	var urlImage 	=	$("#imageStringParameter").val();
	
	$( "#imageDivPreview").empty();
	
	if(urlImage){

		$.loadImage(urlImage)
			.done(function(image) {
			 
			$( "#imageStringParameter" ).attr("data-valid-url", "true");
			
			var imageDiv = $( "#imageDivPreview");
				
			resizeImage( imageDiv, image, urlImage, image.width,  image.height, 300, 300);				
		
			})
			.fail(function(image) {
			 
				 $.alert('Fail to load the image', {
			
					autoClose: true,
					closeTime: 1000,
					type:'warning', 
					onShow:function(){
				
						$( "#imageStringParameter" ).attr("data-valid-url", "false").focus();
						$( "#imageDivPreview").empty();
					
					}
				});
	 
			});
	
	}else{
		
		$( "#imageStringParameter" ).attr("data-valid-url", "false");
		$("#imageDivPreview").empty();
	}
	
});

 
function imageParameterEditor(descriptionObject, descriptionsArray){

	var htmlDivSelected;
	
	var imageObject 	=	getImageParameters(descriptionObject);
	
	var imageUrl		=	$( '#imageStringParameter').val();
	
	if($('.descriptionEventParameterDiv #creating').length){
	
		htmlDivSelected = 	$('.descriptionEventParameterDiv #creating');
		
		storeNewImageParameters(imageObject, descriptionsArray);

	}else{
		
		htmlDivSelected	=	$('.descriptionEventParameterDiv #editing');
		
		$('.descriptionEventParameterDiv .elementDescriptionLayerEdited#editing').children().not('.newDescriptionElement, .editElementDescription, .deleteElementDescription').remove();

		$('.descriptionEventParameterDiv #editing').children(".eventTextInterfaceView").remove();
		
		storeEditedImageParameters(imageObject, descriptionsArray);
	 
	}
	 
		showImage(htmlDivSelected, imageUrl);
				
		$("#imageDivPreview").empty();
	 
};  
	
	
function getImageParameters(descriptionObject){

	var imageParameters =	new ImageParametersObject();
	
	var parameters	= $("#imageParameterEditorDiv form").find("input");
	
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

function storeNewImageParameters(imageObject, descriptionsArray){

	var length					=	descriptionsArray.length;

	descriptionsArray[length]	=	imageObject;
	
	setEventDescriptionSessionStorage(descriptionsArray);
}

function storeEditedImageParameters(imageObject, descriptionsArray){

	for (var i=0; i<descriptionsArray.length; i++){

		if(imageObject.identifier==descriptionsArray[i].identifier){
	
			descriptionsArray[i]	=	imageObject;
	
		}
	}
	
	setEventDescriptionSessionStorage(descriptionsArray);

}

function resizeImage(imageDiv, image, urlImage, imageWidth, imageHeight, maximun, minimun){
	
	var maxWidth = maximun; // Max width for the image
	var maxHeight = minimun;    // Max height for the image
	var ratio = 0;  // Used for aspect ratio
	var width = imageWidth;    // Current image width
	var height = imageHeight;  // Current image height

	// Check if the current width is larger than the max
	if(width > maxWidth){
		ratio = maxWidth / width;   // get ratio for scaling image
		height = height * ratio;    // Reset height to match scaled image
		width = width * ratio;    // Reset width to match scaled image
	}

	// Check if current height is larger than max
	if(height > maxHeight){
		ratio = maxHeight / height; // get ratio for scaling image
		width = width * ratio;    // Reset width to match scaled image
		height = height * ratio;    // Reset height to match scaled image
	}
	
    $(imageDiv).attr("data-width", image.width).attr("data-height", image.height).append(
		$("<img class='imagePreview'>").attr("src", urlImage).attr("width", width).attr("height", height)
	); 

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


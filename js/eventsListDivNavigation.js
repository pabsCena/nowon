//Script that manages the navigation between the events of a calendar

 $(function(){
 
	var firstPageNumber = $('a.list-group-item').first().data('page-number');
	var lastPageNumber 	= $('a.list-group-item').last().data('page-number');

	$('.eventListDiv').bind("DOMSubtreeModified", function(e){
	
	 e.preventDefault();

		firstPageNumber = $('a.list-group-item').first().data('page-number');
		lastPageNumber = $('a.list-group-item').last().data('page-number');
	
		if(lastPageNumber>firstPageNumber){
			$('.glyphicon-chevron-right').show();
		}else{
			$('.glyphicon-chevron-right').hide();
			$('.glyphicon-chevron-left').hide();
		}
	});

	$('.glyphicon-chevron-right').click(function(e) {
		
	e.preventDefault(); 
	
		var currentPageNumber = $('a.list-group-item.current').data('page-number');
	
		if(currentPageNumber<lastPageNumber){
	
			currentPageNumber++;
			$('.glyphicon-chevron-left').show();
			$('a.list-group-item.current').removeClass('current');
			$('*[data-page-number="'+ currentPageNumber+'"]').addClass('current');	
		}
		if(currentPageNumber===lastPageNumber){
			$('.glyphicon-chevron-right').hide();
		}
	});
   
	$('.glyphicon-chevron-left').click(function(e) {
		e.preventDefault(); 
	
		var currentPageNumber = $('a.list-group-item.current').data('page-number');
	
		if(currentPageNumber>firstPageNumber){
	
			currentPageNumber--;
			$('.glyphicon-chevron-right').show();
			$('a.list-group-item.current').removeClass('current');
			$('*[data-page-number="'+ currentPageNumber+'"]').addClass('current');
		}	
		if(currentPageNumber===firstPageNumber){
			$('.glyphicon-chevron-left').hide();
		}
	
	});

}); 

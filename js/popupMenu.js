//Script that generates the pop up menu for elements of the description

 $(function(){
 
    $(".descriptionEventParameterDiv").popmenu({ 'width': '300px','background': '#34495e', 'focusColor': '#1abc9c', 
        'borderRadius': '10px',  }); 
});
	
(function ($) {

    $.fn.popmenu = function (options) {

        var settings = $.extend({
            'controller': true,
            'width': '300px',
            'background': '#34495e',
            'focusColor': '#1abc9c',
            'borderRadius': '10px',
            'left': '0',
            'iconSize': '100px'
        }, options);
        if (settings.controller === true) {
            var temp_display = 'none';
        } else {
            var temp_display = 'block';
        }
        var tar = $(this);
        var tar_body = tar.children('ul');
        var tar_list = tar_body.children('li');
        //var tar_a = tar_list.children('a');
        var tar_ctrl = tar.children('.elementDescriptionLayer');

        function setIt() {
            tar_body.css({
                'display': temp_display,
                'position': 'absolute',
                'z-index' : '1',
                'margin-left': "1%",
                'background': settings.background,
                'width': settings.width,
                'float': 'left',
                'padding': '0',
                'border-radius': settings.borderRadius
            });
            tar_list.css({
                'display': 'block',
                'color': '#fff',
                'float': 'left',
                'width': settings.iconSize,
                'height': settings.iconSize,
                'text-align': 'center',
                'border-radius': settings.borderRadius
            });
            
            /*tar_a.css({
                'text-decoration': 'none',
                'color': '#fff'
            });
            */
            
            //when one label is clicked
            
            $(document).on('click', ".newDescriptionElement" , function(e){
                e.preventDefault();
                
                $('.descriptionEventParameterDiv .elementDescriptionLayer').removeAttr("id");
                $(this).append(tar_body);
                $(this).parent().attr("id", "creating");
                tar_body.fadeIn('slow');
                var	element 		=	e.target;
                                
                $(document).mouseup(function (e) {
					var _con = tar_body;
					
					if (!_con.is(e.target) && _con.has(e.target).length === 0) {
						_con.hide();
					}
					
                 });
                  
            });
                           
            tar_list.hover(function () {
                $(this).css({
                    'background': settings.focusColor,
                    'cursor': 'pointer'
                });
            }, function () {
                $(this).css({
                    'background': settings.background,
                    'cursor': 'default'
                });
            });
        }
        return setIt();

    };

}(jQuery));


$(function(){

	$( "ul li.demo_li" ).on("click", function (e) {
	
	 e.preventDefault();

		if($('.eventParameterEditorDiv').attr("id")==="activated"){
		
				var element		=	$('.eventParameterEditorDiv').children().not(":hidden");
				$(element).hide().find("input:text").val("");
				$(element).find("input:radio:checked").prop('checked', false);
			
			}	
	
		$('.eventParameterEditorDiv').attr("id", "activated");
					
	
		showEventParameterDivSelected($(this).children().attr("id"));
			
	});
});	


function showEventParameterDivSelected(parameterName){

	$(".createElementBtnDiv, .WYSIWYGInterface").show();
	
	switch(parameterName){
	
		case "eventTextMenuOption":
            $('#textParameterEditorDiv').fadeIn("fast");
			break;		
		case "eventImageMenuOption":
			$('#imageParameterEditorDiv').fadeIn("fast");
			break;
		case "eventEmailMenuOption":
			$('#emailParameterEditorDiv').fadeIn("fast");
			break;
		case "eventPhoneMenuOption":
			$('#phoneParameterEditorDiv').fadeIn("fast");
			$("#phoneTelephoneTypeParameter").prop("checked", "true");
			break;
		case "eventUrlMenuOption":
			$('#urlParameterEditorDiv').fadeIn("fast");
			$("#urlTypeBtn").prop("checked", "true");
			break;
		default:
			break;
		
		
	}
}

 


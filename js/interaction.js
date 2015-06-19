//Script that manages all the interaction with the buttons and divs in the app

$( ".nemiEventInterfaceDiv" ).mouseover(function() {
  $( ".nemiEventInterfaceEditOptionsDiv" ).show();
});

$( ".nemiEventInterfaceDiv" ).mouseout(function() {
  $( ".nemiEventInterfaceEditOptionsDiv" ).hide();
});


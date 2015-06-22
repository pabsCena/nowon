//Scripts that manages the interaction with the title and the date of the event

$('.eventDateDiv .time').timepicker({
    'showDuration': true,
    'timeFormat': 'g:ia'
});

$('.eventDateDiv .date').datepicker({
    'format': 'yyyy-mm-dd',
    'autoclose': true
});

$('.eventDateDiv').datepair();

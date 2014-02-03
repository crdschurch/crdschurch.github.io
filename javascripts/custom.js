$( document ).ready(function() {
	$( ".group" ).hide()
	$( ".show" ).click(function() {
		$( ".group" ).hide()
  		index = $( this ).parent().attr('class');
  		$( this ).parent().addClass("active");
  		$( ".group."+index ).show();
	}); 	
});
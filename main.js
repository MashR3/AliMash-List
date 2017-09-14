// $(function() {

// var $input = $('#shop');

var $input = $('#shop')

$('#enter-three').on('click', function(event) {
	console.log($input.val());
	$('#temp-four').append('<div class="input-two">' + $input.val() + '</div>'  );

})




// });
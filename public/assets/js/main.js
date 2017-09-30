$(function() {
	$('.newBurgerForm :input[type="submit"]').prop('disabled', true);
	watchInput();
});

function watchInput() {
	let inputLength = 0;
	const maxLength = 45;
	$('input').on('input', function(){
		inputLength = $(this).val().length;
		$(':input[type="text"]').keypress(function(e) {
			if (inputLength < maxLength) return;
    		e.preventDefault();
		});
		let charactersLeft = 45 - inputLength;
		if (charactersLeft < 0) charactersLeft = 0;
		$('#burgerNameHelp').text(charactersLeft + '');
		if (charactersLeft > 5) {
			$('#burgerNameHelp').removeClass('color-error');
			$('#burgerNameHelp').addClass('color-focus');
		}
		if (charactersLeft <= 5) {
			$('#burgerNameHelp').removeClass('color-focus');
			$('#burgerNameHelp').addClass('color-error');
		}
		if (inputLength > 0 && inputLength < 46) {
			$('.newBurgerForm :input[type="submit"]').prop('disabled', false);
			$('.newBurgerForm :input[type="submit"]').removeAttr("disabled");
			return;
		} else {
			$('.newBurgerForm :input[type="submit"]').prop('disabled', true);
		}
	});
}

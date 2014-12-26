
// function pero(koj){
// 	console.log(koj);
// }

// pero('Perodp9 87-r 0c[93u[f98uywep fis;wocjihd;sa');

// function pero(){
// 	$('.kopce').css('background', 'red');
// 	$('.kopce').css('color', 'white');
// 	$('.kopce').css('width', '100px');
// 	$('.kopce').css('height', '100px');
// }

$(document).ready(function(){

	// $('.kopce').css('background', 'red');
	// $('.kopce').css('color', 'white');
	// $('.kopce').css('width', '100px');
	// $('.kopce').css('height', '100px');

	$('.kopce').on('click', function(){
		// alert('Zdravuuuuuu!');
		$(this).css('background', 'red');
	});

	var click = 0;

	$('.btn').on('click', function(){

		if(click == 0){

			$(this).css('background', 'blue');
			click = 1;
		}else if(click == 1){

			$(this).css('background', '');
			click = 0;
		}
	});

	$('#btn_2').on('click', function(){
		var vrednost = $('#eden').val();
		alert(vrednost);
	});

});
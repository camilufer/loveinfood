$(document).ready(function(){
	$('#comentar').click(function(){
		$('#oculto').show();
	$('#recetas, #amigos').click(function(){
		$('#oculto').hide();
	});

	});

	$('#recetas').click(function(){
		$('#escondido').show();
	$('#comentar, #amigos').click(function(){
		$('#escondido').hide();
	});
   });

});
$(function(){
	$('.filter').click(function(){
		$(this).addClass('active').siblings().removeClass('active');
		let valor = $(this).attr('data-nombre');
		if(valor=='todos'){
			$('.cont-legend').show('1000');
		}else{
			$('.cont-legend').not('.'+valor).hide('1000');
			$('.cont-legend').filter('.'+valor).show('1000');
		}
	});

	let equipo = $('#equipo').offset().top,
		servicio = $('#servicio').offset().top,
		leyenda = $('#leyenda').offset().top,
		contacto = $('#contacto').offset().top;
		producto = $('#producto').offset().top;

	window.addEventListener('resize', function(){
	let equipo = $('#equipo').offset().top,
		servicio = $('#servicio').offset().top,
		leyenda = $('#leyenda').offset().top,
		producto = $('#producto').offset().top;
	});

	$('#enlace-inicio').on('click', function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: 0
		}, 600);
	});

	$('#enlace-equipo').on('click', function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: equipo -100
		}, 600);
	});


	$('#enlace-servicio').on('click', function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: servicio -100
		}, 600);
	});

	$('#enlace-leyenda').on('click', function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: leyenda -100
		}, 600);
	});

	$('#enlace-contacto').on('click', function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: contacto -100
		}, 600);
	});

	$('#enlace-producto').on('click', function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: producto -100
		}, 600);
	});

});
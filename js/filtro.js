$(function(){
	$('.filter').click(function(){
		$(this).addClass('active').siblings().removeClass('active');
		let valor = $(this).attr('data-nombre');
		if(valor=='todos'){
			$('.content-work').show('1000');
		}else{
			$('.content-work').not('.'+ valor).hide('1000');
			$('.content-work').filter('.'+valor).show('1000');
		}
	})

let sobremi = $('#equipo').offset().top,
	 servicio = $('#servicio').offset().top,
	 trabajos = $('#trabajo').offset().top,
	 contactos = $('#contacto').offset().top;;

	 window.addEventListener('resize', function(){
	 let sobremi = $('#equipo').offset().top,
	 servicio = $('#servicio').offset().top,
	 trabajos = $('#trabajo').offset().top,
	  contactos = $('#contacto').offset().top;
	 })
	 $('#enlace-inicio').on('click', function(e){
	 	e.preventDefault();
	 	$('html, body').animate({
	 		scrollTop:0
	 	},600);
	 })
	  $('#enlace-sobremi').on('click', function(e){
	 	e.preventDefault();
	 	$('html, body').animate({
	 		scrollTop: sobremi -100
	 	},600);
	 })
	   $('#enlace-servicio').on('click', function(e){
	 	e.preventDefault();
	 	$('html, body').animate({
	 		scrollTop: servicio -100
	 	},600);
	 })
	    $('#enlace-trabajos').on('click', function(e){
	 	e.preventDefault();
	 	$('html, body').animate({
	 		scrollTop: trabajos -100
	 	},600);
	 })
	     $('#enlace-contacto').on('click', function(e){
	 	e.preventDefault();
	 	$('html, body').animate({
	 		scrollTop:  contactos -100
	 	},600);
	 })
	    

})
	

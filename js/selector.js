$(document).ready(function(){

//Selector de tema

var theme = $("#theme");

	$("#to-green").click(function(){
		theme.attr("href", "css/style1.css");
	});

	$("#to-red").click(function(){
		theme.attr("href", "css/style2.css");
	});

	$("#to-blue").click(function(){
		theme.attr("href", "css/style3.css");
});

//Vuelta arriba

$('.subir').click(function(e){
	e.preventDefault();

	$('html, body').animate({
		scrollTop: 0
	}, 500);

	return false;

});

//Login falso

$("#login form").submit(function(){
	var form_name = $("#form_name").val();

	localStorage.setItem("form_name", form_name);

});

var form_name = localStorage.getItem("form_name");

	if(form_name != null && form_name != "undefined"){

		var about_parrafo = $("#about p");
		about_parrafo.html("<br><strong>Bienvenido, " +form_name+ "</strong> ");
		about_parrafo.append("<a href='' id='logout'>Cerrar sesión</a>")

		$("#login").hide();
	}







});
/* Manejo del DOM */

window.onload= inicializacion;

 function inicializacion(){

 var elemento = document.getElementById("id1"); //donde pondré los elementos que quiero manipular
var texto = '';  // comienza con string vacío para que por cada iteracion se rellene
POKEMON.pokemon.forEach(function(element){ //for each para que por cada uno saque los datos 
	
	texto += '\
			<div class="col-md-3">\
                <div class="card">\
                <img src="'+element.img+'" class="card-img-top" alt="..." style="">\
                <div class="card-body">\
                  <h5 class="card-title">'+element.name+'</h5>\
                  <p class="card-text">'+element.type+'</p>\
                </div>\
                <div class="card-footer">\
                  <small class="text-muted">'+element.weaknesses+'</small>\
                </div>\
                </div>\
            </div>\
\
		';
});

elemento.innerHTML = texto;
}


const select= document.getElementById('select-tipo');

select.addEventListener('change',() => {

	


	const pokemones = POKEMON.pokemon;
	const condition = document.getElementById('select-tipo').value;
  let texto = '';
	const result = data.filterData(pokemones,condition);
	var elemento = document.getElementById("id1");


	result.forEach(function(element){


	 texto += '\
			<div class="col-md-3">\
                <div class="card">\
                <img src="'+element.img+'" class="card-img-top" alt="..." style="">\
                <div class="card-body">\
                  <h5 class="card-title">'+element.name+'</h5>\
                  <p class="card-text">'+element.type+'</p>\
                </div>\
                <div class="card-footer">\
                  <small class="text-muted">'+element.weaknesses+'</small>\
                </div>\
                </div>\
            </div>\
          \
		';
	elemento.innerHTML=  texto;

	});

});







/* Manejo del DOM */

window.onload= inicializacion;

 function inicializacion(){

// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window
var elemento = document.getElementById("id1"); //donde pondré los elementos que quiero manipular
var texto = '';  // comienza con string vacío para que por cada iteracion se rellene
POKEMON.pokemon.forEach(function(element){ //for each para que por cada uno saque los datos 

  texto += '\
      <div class="col-md-2">\
                <div class="card" data-toggle="modal" data-target="#exampleModal'+element.id+'">\
                <div class="modal fade" id="exampleModal'+element.id+'" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">\
                  <div class="modal-dialog" role="document">\
                    <div class="modal-content">\
                      <div class="modal-header">\
                        <h5 class="modal-title" id="exampleModalLabel">'+element.name+'</h5>\
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">\
                          <span aria-hidden="true">&times;</span>\
                        </button>\
                      </div>\
                      <div class="modal-body">\
                         <img src="'+element.img+'" class="card-img-modal" alt="...">\
                      </div>\
                      <div class="modal-footer">\
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>\
                        <button type="button" class="btn btn-primary">Save changes</button>\
                      </div>\
                    </div>\
                  </div>\
                      </div>\
                <img src="'+element.img+'" class="card-img-top" alt="...">\
                <div class="card-body">\
                  <h5 class="card-title">'+element.name+'</h5>\
                  <p class="card-text">'+element.type+'</p>\
                </div>\
                </div>\
            </div>\
\
    ';
});

elemento.innerHTML = texto;

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







window.onload = inicializacion;

let pokemones = POKEMON.pokemon;
let select = document.getElementById('select-tipo');
let elemento = document.getElementById("id1"); //donde pondré los elementos que quiero manipular
let select1 = document.getElementById("order");

function inicializacion() {
    let texto = ''; // comienza con string vacío para que por cada iteracion se rellene
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
              </div> \
              \
              ';
              });

    elemento.innerHTML = texto;
}

select.addEventListener('change', () => {
    let condition = select.value;
    texto = '';
    pokemones = data.filterData(pokemones, condition);
    inicializacion();
});

select1.addEventListener('change', () => {
    let sortBy = select1.value;
    texto = '';
    pokemones = data.sortData(pokemones, sortBy);
    inicializacion();
});
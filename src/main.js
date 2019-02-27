window.onload = inicializacion;

let pokemones = POKEMON.pokemon;
let select = document.getElementById('select-tipo');
let elemento = document.getElementById("id1"); //donde pondré los elementos que quiero manipular
let select1 = document.getElementById("order");

function inicializacion() {
    let texto = ''; // comienza con string vacío para que por cada iteracion se rellene
    pokemones.forEach(function(element) { //for each para que por cada uno saque los datos 
        texto += '\
      <div class="col-md-3">\
                <div class="card">\
                <img src="' + element.img + '" class="card-img-top" alt="..." style="">\
                <div class="card-body">\
                  <h5 class="card-title">' + element.name + '</h5>\
                  <p class="card-text">' + element.type + '</p>\
                </div>\
                <div class="card-footer">\
                  <small class="text-muted">' + element.weaknesses + '</small>\
                </div>\
                </div>\
            </div>\
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
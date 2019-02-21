/* Manejo de data */

// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window
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








/*const example = () => {
  return 'example';
};





// filtrar y calcular 




const filterData = (data, condition) =>{


}


const sortData = (data, sortBy, sortOrder) =>{

	
}


const computeStats = (data) =>{

	
}

window.example = example;
window.filterData = filterData;
window.sortData = sortData;
window.computeStats = computeStats;









window.data ={

	filterData: (data,condition) => {

	const numbers = [1,2,3,4,5,6,7,8,9,10];
	let newNumbers = [];
	for (let i=0; i<numbers.length; i++) {
		if(numbers[i] %2 === 0){
			newNumbers.push(numbers[i]);// arreglo solo con numeros pares
		}
	}


	const newNumbers2 = numbers.filter((element)=>{ //elemento que esta en esa posicion  filter solo aplicas la condicion y devuelve un nuevo arreglo  filter, rewiews, math. 
		 return element % 2 === 0
	});







	},
	sortData: (data,sortBy,sortOrder) => {

	},
	computeStats: (data) => {

	},
}
*/



//foreach configurado desde 0 hasta el largo, por cada uno. 
/* Manejo de data */

window.data ={

	filterData: (data,condition) => {




	const filtrada = POKEMON.pokemon.filter(single => {
	//if(single.id>120){
	if(single.type.includes(condition)){
		return single;
	}

	});
	return filtrada;

	/*const numbers = [1,2,3,4,5,6,7,8,9,10];
	let newNumbers = [];
	for (let i=0; i<numbers.length; i++) {
		if(numbers[i] %2 === 0){
			newNumbers.push(numbers[i]);// arreglo solo con numeros pares
		}
	}


	const newNumbers2 = numbers.filter((element)=>{ //elemento que esta en esa posicion  filter solo aplicas la condicion y devuelve un nuevo arreglo  filter, rewiews, math. 
		 return element % 2 === 0
	});*/







	},
	sortData: (data,sortBy,sortOrder ) => {


	},
	computeStats: (data) => {

	},
}



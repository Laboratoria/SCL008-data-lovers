/* Manejo de data */

// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

window.data ={
    
    filterData: (data,condition) => {

        if (condition==="none") 
        {
            filtrada=POKEMON.pokemon;
        } else 
        {
            filtrada = POKEMON.pokemon.filter(element => {
                if(element.type.includes(condition))
                {
                    return element;
                }
            });
        }
    
    return filtrada;
    
    },

    sortData: (data,sortBy) => {

        if(sortBy ==="a-z") 
        {
            ordenada = data.sort( (a, b) => {
                    if( a.name < b.name ) 
                        return -1;
                    else if( a.name > b.name )
                        return 1;
                    else
                        return 0;
                }); 
        }
        else if (sortBy ==="z-a") 
        {
            ordenada = data.sort( (a, b) => {
                if( a.name < b.name ) 
                    return 1;
                else if( a.name > b.name )
                    return -1;
                else
                    return 0;
            });

        }
        else if (sortBy==='1-150'||sortBy==='none')
        {
            ordenada= data.sort( (a, b) => {
                if( a.id < b.id ) 
                    return -1;
                else if( a.id > b.id )
                    return 1;
                else
                    return 0;
            });
        }
        else if (sortBy==='150-1')
        {
            ordenada= data.sort( (a, b) => {
                if( a.id < b.id ) 
                    return 1;
                else if( a.id > b.id )
                    return -1;
                else
                    return 0;
            });
        }
            
        return ordenada;


    },

    computeStats: (data) => {

    },
}


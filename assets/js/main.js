const pokemonList = document.querySelector('.itens')
const buttonLoad = document.getElementById('buttonLoad')
const limit = 4;
let offset = 0; 
const maxRecords = 15



function loadPokemonItens(offset, limit){
 
    pokeApi.getPokemons(offset, limit).then((pokemons = [])=> {
        const newHtml = pokemons.map((pokemon) => `
        <li class="pokemon ${pokemon.type}">
            <div class="nameHeader">
                <h3>${pokemon.name}</h3>
                <h4>#${pokemon.order}</h4>
            </div>
            <div class="info">
                <ol>
                    ${pokemon.types.map((type)=> `<p class=${type}>${type}</p>`).join('')}
                </ol>
            <img src=${pokemon.photo} alt="${pokemon.name}">
            </div>
        </li>
        `
        
        
        ).join("")
        pokemonList.innerHTML += newHtml
    }
    
)
}

loadPokemonItens(offset, limit)

buttonLoad.addEventListener('click',()=>{
    offset += limit
    const qtdRecordNextPage = offset + limit
    if (qtdRecordNextPage >= maxRecords){
        const newLimit = maxRecords - offset
        loadPokemonItens(offset, newLimit)
        buttonLoad.parentElement.removeChild(buttonLoad)

    } else{
        loadPokemonItens(offset, limit)
    }



})
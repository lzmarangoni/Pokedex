function convertPokemonToLi(pokemon){
    return`
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
}

const pokemonList = document.querySelector('.itens')

pokeApi.getPokemons().then((pokemons = [])=> {
        const newHtml = pokemons.map(convertPokemonToLi).join("")
        pokemonList.innerHTML = newHtml
    }
    
)

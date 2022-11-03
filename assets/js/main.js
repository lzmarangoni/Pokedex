function convertPokemonTypesToLi(pokemonTypes) {
    return pokemonTypes.map((typeSlot)=> `<p>${typeSlot.type.name}</p>`)
}

function convertPokemonToLi(pokemon){
    return`
        <li class="pokemon">
            <div class="nameHeader">
                <h3>${pokemon.name}</h3>
                <h4>#${pokemon.order}</h4>
            </div>
            <div class="info">
                <ol>
                    ${convertPokemonTypesToLi(pokemon.types).join('')}
                </ol>
            <img src=${pokemon.sprites.other.dream_world.front_default} alt="${pokemon.name}">
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

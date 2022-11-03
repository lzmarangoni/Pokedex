function convertPokemonToLi(pokemon){
    return`
        <li class="pokemon">
            <div class="nameHeader">
                <h3>${pokemon.name}</h3>
                <h4>#001</h4>
            </div>
            <div class="info">
                <ol>
                    <p>grass</p>
                    <p>Poison</p>
                </ol>
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" alt="${pokemon.name}">
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


/*<li>
            <div class="info">
                <h3>${pokemon.name}</h3>
                
                <ol>
                    <p>grass</p>
                    <p>Poison</p>
                </ol>
                
            </div>
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" alt="${pokemon.name}">
        </li>
        */
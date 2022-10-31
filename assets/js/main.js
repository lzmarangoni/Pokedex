const url ='https://pokeapi.co/api/v2/pokemon'

function convertPokemonToLi(pokemon){
    return`
        <li>
            <div class="info">
                <h3>${pokemon.name}</h3>
                <p>Grass</p>
                <p>Poison</p>
            </div>
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" alt="${pokemon.name}">
        </li>
    `
}

const pokemonList = document.querySelector('.itens')






fetch(url)
    .then((response)=> 
     response.json()
    )
    .then((jsonBody)=> {
        const pokemons = jsonBody.results
        for(let i = 0; i < pokemons.length; i++ ){
            const pokemon = pokemons[i]
            pokemonList.innerHTML += convertPokemonToLi(pokemon)
        }
        
    })



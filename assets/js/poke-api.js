const pokeApi = {}

pokeApi.getPokemonDetail = (pokemon)=>{
    return fetch(pokemon.url).then((response) => response.json())
}

pokeApi.getPokemons = ()=>{
    const url ='https://pokeapi.co/api/v2/pokemon'
    return fetch(url)
    .then((response)=> response.json())
    .then((jsonBody)=> jsonBody.results)
   
}
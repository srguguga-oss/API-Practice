const pokemonImage = document.getElementById("pokemon_image");
const pokemonNumber =  document.getElementById("pokemon_number");
const pokemonName =  document.getElementById("pokemon_name");
const btn_search = document.getElementById("btn-search");
const input_search = document.getElementById("input_search");
const btn_prev = document.getElementById("btn-prev");
const btn_next = document.getElementById("btn-next");

let pokemonID

const searchPokemon = (pokemon) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
        pokemonImage.src = data.sprites.versions["generation-v"]["black-white"].animated.front_default;
        pokemonName.innerText = data.name;
        pokemonNumber.innerText = data.id;
        pokemonID = data.id;
    })

    .catch((err) => {
        pokemonImage.src = ""
        pokemonName.innerText = "0";
        pokemonNumber.innerText = "Não encotrado";
    })
}
    
    btn_search.addEventListener("click", (e) => {
        e.preventDefault();
        searchPokemon(input_search.value);
    })

    btn_next.addEventListener("click", () => {
        pokemonID++;
        searchPokemon(pokemonID);
    })

    btn_prev.addEventListener("click", () => {
        if(pokemonID >= 2){
            pokemonID--;
            searchPokemon(pokemonID);
        }
    })

    searchPokemon("1");
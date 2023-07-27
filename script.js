const poke_container = document.getElementById('poke_container');
const pokemons_number = 300;

const fetchPokemons = async ()=> {
    for(let i = 1; i <= pokemons_number; i++){
        await getPokemons(i);
    }
}

const getPokemons = async id => {
    //const url = `https://storage.googleapis.com/campus-cvs/00000000000-images-lectures/pokemons.json`;
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const res = await fetch(url);
    const pokemon = await res.json();
    createPokemonCard(pokemon);
}

const createPokemonCard = pokemon => {
    const pokemonEl = document.createElement('div');
    pokemonEl.classList.add('pokemon');

    const { id, name, sprites, height, weight, types } = pokemon;
    const type = types[0].type.name;

    const pokeInnerHTML = `
        <div class="img-container">
            <img src="${sprites.front_default}" alt="{name}" />
        </div>
        <div class="info">
            <span class="number">${id}</span>
            <h3 class="name">${name}</h3>
            <small class="type">Type: <span>${type}</span></small>
            <br>
            <button class="btn btn-primary-sm" data-bs-toggle="modal" data-bs-target="#pokemonModal">Ver más</button>
        </div>

        <!-- Modal -->
<div class="modal fade" id="pokemonModal" tabindex="-1" aria-labelledby="pokemonModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="pokemonModalLabel">Detalles del Pokémon</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="d-flex justify-content-center mb-3">
            <img src="${pokemon.sprites.front_default}" alt="Imagen del Pokémon" id="pokemonImage" class="img-fluid rounded-circle" style="width: 150px;">
          </div>
          <div id="pokemonDetails">
            <h2>Nombre: <span id="pokemonName">${name}</span></h2>
            <p>ID: <span id="pokemonID">${id}</span></p>
            <p>Altura: <span id="pokemonHeight">${height}</span></p>
            <p>Peso: <span id="pokemonWeight"></span></p>
            <p>Tipo(s): <span id="pokemonTypes"></span></p>
            
          </div>
        </div>
      </div>
    </div>
  </div>
        `;

    pokemonEl.innerHTML = pokeInnerHTML;
    poke_container.appendChild(pokemonEl);
}



fetchPokemons();
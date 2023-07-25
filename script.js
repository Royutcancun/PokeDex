const poke_container = document.getElementById('poke_container');
const pokemons_number = 150;

const getPokemons = async id => {
    //const url = `https://storage.googleapis.com/campus-cvs/00000000000-images-lectures/pokemons.json`;
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

    const res = await fetch(url);

    const pokemon = await res.json();

    console.log(pokemon);
}

getPokemons(1);
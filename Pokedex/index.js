const pokeCard = document.querySelector("[data-poke-card]");
const pokeName = document.querySelector("[data-poke-name]");
const pokeImg = document.querySelector("[data-poke-id]");
const pokeImgContainer = document.querySelector("[data-poke-img]");
const pokeI = document.querySelector("[data-poke-img-container]");
const pokeTypes = document.querySelector("[data-poke-types]");
const pokeStats = document.querySelector("[data-poke-stats]");

const typeColor = {
	electric:"",
	normal:"",
	fire:"",
	water:"",
	ice:"",
	rock:"",
	flying:"",
	grass:"",
	psychic:"",
	ghost:"",
	bug:"",
	poison:"",
	ground:"",
	dragon:"",
	steel:"",
	fighting:"",
	default:"",
};


const searchPokemon = event => {
	event.preventDefault();
	const { value } =event.target.pokemon;
	fetch("https://pokeapi.co/api/v2/pokemon/${value.toLowercase()}")
	.then(data => data.json())
	.then(response => renderPokemonData(response))
}

const renderPokemonData = data => {
	const sprite = data.sprites.front_default;
	const { stats, types } = data;
	console.log(data)
}
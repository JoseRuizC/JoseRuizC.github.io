const api="https://pokeapi.co/api/v2/pokemon/448/";
const contenedor=document.getElementById("contenedor");
//fetch consulta a una url mediante de los verbos de http
async function consultarPokemon()
{
 let consulta= await fetch(api);
 let datos= await consulta.json();
 dibujarPokemon(datos);
}
function dibujarPokemon(datosPokemon)
{
    let rutaimagen=datosPokemon.sprites.other.home.front_default;
    let pokemon=`<h1> ${datosPokemon.name} </h1>
                 <img src="${rutaimagen}"/>;
                 <h1> ${datosPokemon.type[448].type.name}</h1>`;
    contenedor.innerHTML=pokemon;
}
consultarPokemon();
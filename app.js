document.querySelector("#search").addEventListener("click", getPokemon);

function getPokemon() {
  const name = document.querySelector("#pokemonName").value;

  fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then((response) => response.json())
    .then((data) => {
      document.querySelector(".pokemonBox").innerHTML = `
       <div>
         <img src="${data.sprites.other["official-artwork"].front_default}" alt="${data.name}" />
       </div>
      <div class="pokemonInfo">
        <h1>${name}</h1>
        <p>Weight: ${data.weight}</p>
      </div>
      `;
    })
    .catch((err) => {
      document.querySelector(".pokemonBox").innerHTML = `
            <h1>We couldn't find matching pokemon name</h1>
          `;
      console.log("Pokemon not found", err);
    });
}

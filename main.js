let titleBox = document.querySelector('.title')
let imageBox = document.querySelector('.image')
let rightButton = document.querySelector('.right')
let leftButton = document.querySelector('.left')
let currentPokemon = 1

async function getPokemon (item, minus=false) {
  let pokemon = await fetch('https://pokeapi.co/api/v2/pokemon/' + item)
  let result =  await pokemon.json();
  if (minus === true) {
    currentPokemon = currentPokemon - 1
  } else {
    currentPokemon = currentPokemon + 1
  }

  console.log(currentPokemon);
  
  titleBox.textContent = result.name
  imageBox.setAttribute('src', result.sprites.front_default)
}

currentPokemon = currentPokemon + 1

getPokemon(currentPokemon)

rightButton.addEventListener("click", () => {
  getPokemon(currentPokemon)
})

leftButton.addEventListener("click", () => {
  if (currentPokemon === 2) {
    getPokemon(1)
    currentPokemon = 1
    return
  }
  getPokemon(currentPokemon-1, true)
  // console.log('this ', currentPokemon);
})

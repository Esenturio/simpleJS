let titleBox = document.querySelector('.title')
let imageBox = document.querySelector('.image')
let rightButton = document.querySelector('.right')
let leftButton = document.querySelector('.left')

async function getPokemon (item) {
  let pokemon = await fetch('https://pokeapi.co/api/v2/pokemon/' + item)
  let result =  await pokemon.json();
  
  titleBox.textContent = result.name
  imageBox.setAttribute('src', result.sprites.front_default)
}

getPokemon(1)


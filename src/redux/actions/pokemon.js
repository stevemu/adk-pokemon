import { SET_POKEMON } from '../actionTypes'

export const setPokemon = (name) => {

  // fake api
  let pokemons = {
    Pikachu: {
      name: "Pikachu",
      attack: 333,
      defense: 222,
      stamina: 55,
      age: 50
    },
    Celebi: {
      name: "Celebi",
      attack: 555,
      defense: 123,
      stamina: 22,
      age: 11
    },
    Eevee: {
      name: "Eevee",
      attack: 123,
      defense: 413,
      stamina: 767,
      age: 2
    }
  }

  let data = pokemons[name];
  return {
    type: SET_POKEMON,
    data
  }

}

import { SET_POKEMON } from '../actionTypes'

export const pokemon = (state = {}, action) => {
  switch (action.type) {
    case SET_POKEMON:
      return action.data
    default:
      return state
  }
}

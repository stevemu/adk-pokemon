import { combineReducers } from 'redux'
import { title } from './title'
import { pokemon } from './pokemon'

export default combineReducers({
  title,
  pokemon
})

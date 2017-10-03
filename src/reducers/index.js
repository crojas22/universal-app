import { combineReducers } from 'redux'
import counter from './counter'
import { items, itemsHasErrored, itemsIsLoading } from './random'

const reducer =  combineReducers({
  counter,
  itemsHasErrored,
  itemsIsLoading,
  items
})

export default reducer

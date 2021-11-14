import {createStore} from 'redux'
import cartItemsReducer from './cartITemReducer'


const store = createStore(cartItemsReducer)

export default store
import { combineReducers, createStore } from "redux"
import IncrementAndDecrement from './reducer/IncrementReducer'
const reducer = combineReducers({
    value : IncrementAndDecrement
})

const store = createStore(
    reducer
)

export default store;;
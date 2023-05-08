// ! BOILERPLATE REDUX CODE
import {createStore} from 'redux'

const initialState = {
    name: "Brooklyn", 
    count: 0
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case "CHANGE_NAME":
            return {...state, name: action.payload}
        default: 
        return state
    }
}

const store = createStore(reducer)

export default store
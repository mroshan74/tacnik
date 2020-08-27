import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import userReducers from '../reducers/userReducers'
import bookingReducers from '../reducers/bookingReducers'

const configureStore = () => {
    const store = createStore(combineReducers({
        user: userReducers,
        bookings: bookingReducers,
    }),applyMiddleware(thunk))
    return store
}

export default configureStore
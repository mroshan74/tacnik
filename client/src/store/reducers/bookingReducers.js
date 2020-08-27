const bookingInitialState = []

const bookingReducers = (state = bookingInitialState, action) => {
    switch(action.type){
        case 'SET_BOOKINGS': {
            return state = action.payload
        }
        default: {
            return state
        }
    }
}

export default bookingReducers
import axios from '../../config/axios'

export const setBookings = (data) => {
    return { type: 'SET_BOOKINGS', payload: data}
}

export const startGetBookings = () => {
    return(dispatch) => {
        axios.get('/users/bookings')
            .then(response => {
                console.log(response.data)
                dispatch(setBookings(response.data))
            })
            .catch(err => console.log(err))
    }
}

export const addNewBooking = (data) => {
    return { type: 'NEW_BOOKING', payload: data}
}

export const startCreateBooking = (fd) => {
    return(dispatch) => {
        axios.post('/users/bookings/create',fd)
            .then(response => {
                console.log(response.data)
                dispatch(addNewBooking(response.data))
            })
            .catch(err => console.log(err))
    }
}
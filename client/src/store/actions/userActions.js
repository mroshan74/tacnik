import axios from '../../config/axios'

// ----- register user

export const startUserRegister = (fd) => {
    return() => {
        axios.post('/users/register',fd)
            .then(response => {
                console.log(response.data)
            })
            .catch(err => console.log(err))
    }
}

// ----- login user

export const startUserLogin = (fd) => {
    return() => {
        axios.post('/users/login',fd)
            .then(response => {
                console.log(response.data)
                let authToken = JSON.stringify(response.data)
                localStorage.setItem('authToken', authToken)
            })
            .catch(err => console.log(err))
    }
}
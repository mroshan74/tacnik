import axios from '../../config/axios'
import Swal from 'sweetalert2'

// ----- register user

export const startUserRegister = (fd) => {
    return() => {
        axios.post('/users/register',fd)
            .then(response => {
                console.log(response.data)
                Swal.fire({
                    icon: 'success',
                    title: 'Registered Successfully!'
                })
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
                Swal.fire({
                    icon: 'success',
                    title: 'Login Successful!'
                })
                setTimeout(() => {
                    window.location.reload()
                },2000)
            })
            .catch(err => console.log(err))
    }
}
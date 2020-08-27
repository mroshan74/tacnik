import Axios from 'axios'

const URL = window.location.origin.includes('localhost') ? 'http://localhost:8300/api' : "/api"

const axios = Axios.create({
    baseURL: URL,
    headers: {
        "x-auth": JSON.parse(localStorage.getItem('authToken')).token || null
    }
})

export default axios
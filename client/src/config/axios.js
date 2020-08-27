import Axios from 'axios'

const URL = window.location.origin.includes('localhost') ? 'http://localhost:8300/api' : "/api"

let axios
if(localStorage.getItem('authToken')){
    axios = Axios.create({
        baseURL: URL,
        headers: {
            "x-auth": JSON.parse(localStorage.getItem('authToken')).token || null
        }
    })
}else{
    axios = Axios.create({
        baseURL: URL
    })
}


export default axios
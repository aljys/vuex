import axios from 'axios'

const service = axios.create({
    baseURL:' https://www.easy-mock.com',
    timeout:50000
})

service.interceptors.request.use(
    config => {
      return config
    }
)

service.interceptors.response.use(
    response=>{
        return response.data.data
    }
)
export default service
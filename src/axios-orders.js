import axios from 'axios'

const instance = axios.create({
    baseURL:'https://react-myburger-miraz.firebaseio.com/
    '

})

export default instance
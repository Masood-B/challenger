import axios from 'axios'
function applyToken(token){
    if(token){
    axios.default.header = {
        authorization: `${token}`
    }
    }  
}
export default {
    applyToken
}
import axios from "axios"

const PASSWORD_API = "http://localhost:8083/createPasswordAccount"

class userService{
    getUser(){
        return axios.get(PASSWORD_API)
    }
}

export default new userService();
import React,{useState} from 'react'
import axios from 'axios'
const Login = () => {
    const [alert, setAlert] = useState({ishow: false,status:'', message: ''})
    const[userDetails, setUserDetails]= useState({email:'', password:''})

    const handleUserInput = (user) => {
        user.preventDefault()
        setUserDetails({...userDetails,[user.target.name]:user.target.value})
    }

    const handleLogin = () => {
        
        let isFieldValid = Object.keys(userDetails).some((detail) => detail!==" ")
        if(!isFieldValid) {
            setAlert({isShow:true, status:"error", message:"incomplete field"})
            return;
        }
        
        // let validRegex=  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        // let isEmailCorrect = userDetails.email.match(validRegex)
        // if(!isEmailCorrect){
        //     setAlert({ishow: true, status: "error",message: "Email incorrect"})
        //     return;
        // }
        // console.log(userDetails)
        // `http://localhost:8083/api/user/login/${alert}`
        axios.post("http://localhost:8083/api/user/login", userDetails).then(
            data => {
                console.log(data.data.message)
               window.alert(data.data.message)
            }
        )
    }
  return (
    <div>
        < h4>Login</h4>
    <form>
        <label>Email</label>
            <input name="email" onChange={handleUserInput}/>
        <label>Password</label>
            <input type="password" name="password" onChange={handleUserInput}/>
    </form>
    <button onClick={handleLogin}>Login</button>
    </div>
  ) 
}

export default Login
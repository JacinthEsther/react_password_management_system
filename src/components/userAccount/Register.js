import axios from 'axios'
import React,{useState, useTransition} from 'react'

const Register = () => {
    const [alert, setAlert] = useState({ishow: false,status:'', message: ''})
    const[userDetails, setUserDetails]= useState({email:'', password:''})

    const handleUserInput = (user) => {
        user.preventDefault()
        setUserDetails({...userDetails,[user.target.name]:user.target.value})
    }

    const handleRegistration = () => {
        
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
        console.log(userDetails)
        axios.post("http://localhost:8083/api/createPasswordAccount", userDetails).then(
            data => console.log(data)
        )
    }
  return (
    <div>
        < h4>Register Here</h4>
    <form>
        <label>Email</label>
            <input name="email" onChange={handleUserInput}/>
        <label>Password</label>
            <input type="password" name="password" onChange={handleUserInput}/>
    </form>
    <button onClick={handleRegistration}>Register</button>
    </div>
  ) 
}

export default Register
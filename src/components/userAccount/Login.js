import React,{useState} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'


const Login = ({setAlert}) => {
    let history = useNavigate();
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
        axios.post("http://localhost:8083/api/user/login", userDetails).then(
            data => {
                console.log(data.data.message)
            window.alert(data.data.message)
            history("/user/addPassword")
            }
        ).catch((e) => console.log(e.message))
    }
  return (
    <div className="login-container">
        < h4>Login</h4>
    <form onSubmit={handleLogin}>
        <label>Email</label>
            <input type="email" name="email" onChange={handleUserInput}/>
        <label>Password</label>
            <input type="password" name="password" title="Enter a password with atleast 8 characterss" onChange={handleUserInput} pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"/>
            <button>Login</button>
    </form>
    
    </div>
  ) 
}

export default Login
import axios from 'axios'
import React, {useState} from 'react'

const Update = () => {
    const[userDetails, setUserDetails]= useState({email:'', oldPassword:'', newPassword:""})

    const handleUserInput = (user) => {
        user.preventDefault()
        setUserDetails({...userDetails,[user.target.name]:user.target.value})
    }

    const handleUpdate=()=>{
        axios.patch("http://localhost:8083/api/updateUserAccount",userDetails)
    }
    return (
    <div>
        < h4>Update</h4>
    <form>
        <label>Email</label>
            <input name="email" onChange={handleUserInput}/>
        <label>OldPassword</label>
            <input type="password" name="oldPassword" onChange={handleUserInput}/>
        <label>NewPassword</label>
            <input type="password" name="newPassword" onChange={handleUserInput}/>
    
    </form>
    <button onClick={handleUpdate}>Register</button>
    </div>
  )
}

export default Update
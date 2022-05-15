import React,{useState} from 'react'
import axios from 'axios'

const AddPassword = () => {
    const [alert, setAlert] = useState({ishow: false,status:'', message: ''})
    const[userDetails, setUserDetails]= useState({email:'', password:'', username:'', url:''})

    const handleUserInput = (user) => {
        user.preventDefault()
        setUserDetails({...userDetails,[user.target.name]:user.target.value})
    }

    const addPassword = () => {
        
        let isFieldValid = Object.keys(userDetails).some((detail) => detail!==" ")
        if(!isFieldValid) {
            setAlert({isShow:true, status:"error", message:"incomplete field"})
            return;
        }
        axios.post("http://localhost:8083/api/addPassword", userDetails).then(
            data => {
                console.log(data)
               window.alert(data.data.message)
            }
        )
    }
  return (
<div>
        < h4>Add Password</h4>
    <form>
        <label>username</label>
            <input name="username" onChange={handleUserInput}/>
        <label>websitePassword</label>
            <input type="password" name="password" onChange={handleUserInput}/>
        <label>url</label>
            <input name="url" onChange={handleUserInput}/>
        <label>email</label>
            <input name="email" onChange={handleUserInput}/>
    </form>
    <button onClick={addPassword}>AddPassword</button>
    </div>
  )
}

export default AddPassword
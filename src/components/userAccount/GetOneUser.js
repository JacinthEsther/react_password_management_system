import axios from 'axios'
import React from 'react'

const GetOneUser = () => {
    const[userDetails, setUserDetails]= useState({email:''})

    const handleUserInput = (user) => {
        user.preventDefault()
        setUserDetails({...userDetails,[user.target.name]:user.target.value})
    }

    const getOneUser = () =>{
        axios.get(`http://localhost:8083/api/user/login/${email}`).then(
            data => {
                console.log(data.email)
            })
    }
  return (
    <div>
        <form>
        <label>Email</label>
            <input name="email" onChange={handleUserInput}/>
        </form>
        <button onClick={getOneUser}>EmailSearch</button>
    </div>
  )
}

export default GetOneUser
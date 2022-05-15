import axios from 'axios'
import React ,{useState}from 'react'

const GetOneUser = () => {
    const[userDetails, setUserDetails]= useState({})
    const [email, setEmail] = useState('')

    const handleUserInput = (e) => {
        e.preventDefault()
        setEmail(e.target.value)
    }

    const getOneUser = () =>{
        axios.get(`http://localhost:8083/api/${email}`).then(
            data => {
                console.log(data)
                setUserDetails(data)
            })
    }
  return (
    <div>
        <form>
        <label>Email</label>
            <input type="email" name="email" value={email} onChange={handleUserInput}/>
        </form>
        <button onClick={getOneUser}>EmailSearch</button>

        {userDetails ? <div>{userDetails.email}</div> : <div>No user detail</div>}
    </div>
  )
}

export default GetOneUser
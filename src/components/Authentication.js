import React ,{useState}from 'react'
import Login from './userAccount/Login'
import Register from './userAccount/Register'
import './authentication.css'

const Authentication = (props) => {
    const [auth, setAuth] = useState("login")
    const [alert, setAlert] = useState({ishow: false,status:'', message: ''})

    const switchHandler = () =>{
        if(auth==="login"){
            setAuth("register")
        }
        else{
            setAuth("login")
        }
    }
  return (
    <div className="auth-container">
        <div className="auth-body">
            <div style={{display: 'flex', justifyContent: 'space-between', width: '100'}}>
            {alert.ishow &&  <div className="alert" style={alert.status ==="error"?
                {backgroundColor:"red"}:
                {backgroundColor:"teal"}}>
                    {alert.message}</div>}
            <button onClick ={switchHandler}>{auth === "login"? "Register": "Login" }</button>
            </div>
            {auth ==="login" ? <Login setCustomerName={props.setCustomerName}setAlert={setAlert} /> :<Register setAlert={setAlert} />}
        </div>
    </div>
  )
}

export default Authentication
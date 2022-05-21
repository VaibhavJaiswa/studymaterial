import React from 'react'
import Register from './Register';
import Login from './Login';



export default function HomePage() {

  //This is the home page shows Registration and login Form
  return (
    <div>
        <div style={{height:"600px",width:"50%",display:"inline-block",padding:"100px"}}>
            <h1>Register</h1>
            <Register></Register>
        </div>
        <div style={{height:"600px",width:"50%",display:"inline-block",padding:"100px"}}>
            <h1>Login</h1>
            <Login></Login>
        </div>
        
    </div>
  )
}

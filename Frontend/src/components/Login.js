import React,{useState} from 'react'
import {useCookies} from 'react-cookie'

export default function Login() {
    const [cookies, setCookie] = useCookies(['userInfo']);
    let email="";
    let pass = "";
    //take userNaem
    const handleUserName = (e)=>{
        email = e.target.value
    }
    //take password
    const handlePass = (e)=>{
        pass = e.target.value
    }
    // Here Authenticate user 
    const handleLogin = (event)=>{
        const authData = {
            "email":email,
            "pass":pass
        }

        fetch(`http://localhost:8900/authUser`,
        {
            method:"POST",
            headers:{'content-type':'application/json'},
            body:JSON.stringify(authData)
        })
      .then(response=>response.json())
      .then(data=>{
          
            if(data.details!==null)
            {
                setCookie('email',data.details.email,{path:'/'})
                setCookie('name',data.details.name,{path:'/'})
                console.log(cookies)
                
                window.location.href = "http://localhost:3000/dashboard/"
                
            } else{
                event.preventDefault()
                alert("email or password is wrong")
                
            } 
        }) 
    }
  return (
    <div>

        {/* Login Form */}
        <form onSubmit={(e)=>handleLogin(e)}>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Username</label>
                <input type="email" className="form-control" required onChange={(e)=>handleUserName(e)} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Use email as username"></input>
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" required onChange={(e)=>handlePass(e)} id="exampleInputPassword1" placeholder="Password"></input>
            </div>
            <br />
            <button type="submit" className="btn btn-primary">Login</button>
        </form>
    </div>
  )
}

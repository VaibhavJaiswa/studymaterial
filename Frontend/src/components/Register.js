import React from 'react'
import {Form,Button} from 'react-bootstrap'

export default function Register() {
    let name = ""
    let pass = ""
    let email=""
    let phone = ""
      //Following method takes Name password email and phone
      const handleName = (event)=>{
        name = event.target.value
      }
      const handlePassword = (event)=>{
        pass = event.target.value
      }
      const handleEmail = (event)=>{
        email = event.target.value
      }
      const handlePhone = (event)=>{
        phone = event.target.value
      }

      //Register the user 
      const handleSubmit = async ()=>{
        const userData = {
            "name":name,
            "email":email,
            "pass":pass,
            "phone":phone,
            "studyMaterial":[{book:"book1",status:"Not Finished",remainingTime:"01:00:00"},
                            {book:"book2",status:"Not Finished",remainingTime:"01:00:00"},
                            {book:"book3",status:"Not Finished",remainingTime:"01:00:00"},
                            {book:"book4",status:"Not Finished",remainingTime:"01:00:00"},
                            {book:"book5",status:"Not Finished",remainingTime:"01:00:00"},
                          ]   
        }

        //making fetch call to store user data
          await fetch(`http://localhost:8900/feedUser`,
          {
              method:"POST",
              headers:{'content-type':'application/json'},
              body:JSON.stringify(userData)
          })
          .then(response=>response.json())
          .then(data=>{console.log("UserData",data)})
          alert("User Registered Now Login")
          window.location.reload()
      
      }
    
  return (
    <div>

      {/* Registration Form */}
<form name="signUp" onSubmit={()=>{handleSubmit()}}>
            <div className="form-group p-1">
                <label htmlFor="inputName">Name</label>
                <input type="text" className="form-control" required id="inputName" onChange={(e)=>{handleName(e)}} placeholder="Name"></input>
            </div>
            <div className="form-group p-1">
                <label htmlFor="inputEmail">Email</label>
                <input type="email" className="form-control" required id="inputEmail" onChange={(e)=>{handleEmail(e)}} placeholder="Email"></input>
            </div>
            <div className="form-group p-1">
                <label htmlFor="inputPassword">Password</label>
                <input type="password" className="form-control" required id="inputPassword" onChange={(e)=>{handlePassword(e)}} placeholder="Password"></input>
            </div>
            <div className="form-group p-1">
                <label htmlFor="inputName">Phone</label>
                <input type="tel" className="form-control" pattern="[0-9]{10}" required id="inputName" onChange={(e)=>{handlePhone(e)}} placeholder="Enter 10 digit number"></input>
            </div>
            <button type="submit" className="btn btn-primary mt-3">Sign Up</button>
        </form>
    </div>
  )
}

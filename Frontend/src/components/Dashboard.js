import React,{useEffect,useState} from 'react'
import NavBar from './NavBar'
import StudyMaterial from './StudyMaterial'
import {useCookies} from 'react-cookie'

export default function Dashboard() {
  const [cookies, setCookie] = useCookies(['userInfo']);
  const [node,setNode] = useState()

  //using useEffect hook to fetch study material data
  useEffect(() => {
    fetch("http://localhost:8900/getStudyMaterial",{
            method:"POST",
            headers:{'content-type':'application/json'},
            body:JSON.stringify({email:`${cookies.email}`})
    })
    .then(response=>response.json())
    .then(data=>{
      if(data!==undefined){
        setNode(data.data.studyMaterial)
      }        
      }) 
  }, [])

  
  return (
    <div>
      {/* Navbar */}
        <NavBar name="Dashboard" user={cookies.name}></NavBar>

        {/* Container possess study material cards */}
        <div className='container' style={{
            height:"700px",width:"100%",height:"700px",
            width: "100%",display: "flex",padding: "50px",
            margin: "20px",flexWrap: "wrap"}}>
              {/* Study Material cards */}
              {node!==undefined && node.map((item,index)=><div key={index} style={{margin:"10px",padding:"10px"}}><a href={`/readbook/${item.book}`}><StudyMaterial book={item.book} status={item.status} rTime={item.remainingTime} /></a></div>)}
        
        </div>
    </div>
  )
}

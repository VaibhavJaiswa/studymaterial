import React,{useEffect,useState} from 'react'
import NavBar from './NavBar'
import { useBeforeunload } from 'react-beforeunload';
import {useTimer} from 'react-timer-hook'
import pdf from '../asset/javanotes.pdf'
import {useCookies} from 'react-cookie'
import { useParams } from 'react-router-dom';

export default function ReadBook() {
  //uses params for getting book name from url parameter
  const {book} = useParams()
  const [cookies, setCookie] = useCookies(['userInfo']);  

  const time = new Date();
  time.setSeconds(time.getSeconds() + 0); 

  //Here using useTimer hook for countDown 
  const {seconds,minutes,hours,restart} = useTimer({expiryTimestamp:time,autoStart:true,onExpire:()=>{
    document.getElementById('finishedBtn').disabled = false
  }})

  //this method updates the remaining time and status of the book finished
  const updateRT = (rt,status)=>{
    let data = {
      email:cookies.email,
      rt:rt,
      book:book,
      status:status
    }
    fetch("http://localhost:8900/updateRT",{
      method:"POST",
      headers:{'content-type':'application/json'},
      body:JSON.stringify(data)
  })
  .then(response=>response.json())
  .then(data=>{
  if(data!==undefined){
  }        

  });
  }

  //this hook is used to execute before closing window and saves remaining time 
    useBeforeunload((event) => {
      console.log(`${hours}:${minutes}:${seconds}`)
      updateRT(`${hours}:${minutes}:${seconds}`,"")
      event.preventDefault();

    })

    //here it is fetching remaining time and restarting the timer from the remaining time
    useEffect(() => {
    
      document.getElementById('finishedBtn').disabled = true
    
        fetch("http://localhost:8900/getStudyMaterial",{
                method:"POST",
                headers:{'content-type':'application/json'},
                body:JSON.stringify({email:`${cookies.email}`})
        })
        .then(response=>response.json())
        .then(data=>{
          if(data!==undefined){
            let rt = data.data.studyMaterial.filter(item=>item.book==book)
            console.log(rt[0].remainingTime.split(":"))
            let [hh,mm,ss] = rt[0].remainingTime.split(":")
            let sec = parseInt(hh)*60*60+parseInt(mm)*60+parseInt(ss)
            console.log(sec)
            const time = new Date();
            time.setSeconds(time.getSeconds() + sec);
            restart(time)
          }        
          }) 
      }, [])
          

  return (
    <div>
      {/* navbar */}
        <NavBar name="Study Material" user={cookies.name}></NavBar>


        <div className = ""style={{height:"650px",width:"70%",marginLeft:"10%",marginTop:"50px",marginBottom:"50px",overflow:"auto",position:"relative"}}>  
        <div style={{ fontSize:"20px",position:"absolute", left :"20px",padding:"10px",display:"inline-block"}}>
            {book}
        </div>
        <div style={{fontSize:"20px",position:"absolute", right:"20px",padding:"10px",display:"inline-block"}}>
            Remaining Time: {hours}:{minutes}:{seconds}
        </div>
        {/*  Following tag shows PDF */}
        <div style={{display:"block",position:"absolute", top:"100px",height:"80%",width:"100%"}}>
          <embed src={pdf} type="application/pdf" height="90%" width="100%"></embed>
        </div> 
        <div style={{display:"block",position:"absolute",bottom:"10px",right:"20px"}}>  
          <button type='button' id="finishedBtn" className='btn btn-primary btn-sm' onClick={()=>{updateRT("00:00:00","Finished");alert("This book is Marked as Finished")}}>Finished</button>
        </div>       
        </div>

    </div>
  )
}

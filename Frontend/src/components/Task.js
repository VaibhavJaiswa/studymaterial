import React from 'react'
import { Button } from 'react-bootstrap'
import img from '../asset/img.jpg'
import img2 from '../asset/img2.jpg'

export default function Task() {
    const stylePic = {
        width:"150px",
        height:"150px",
        borderRadius:"15px",
        margin:"10px",
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        display:"inline-block",
        position:"relative"

    }
  return (
      <div style={{alignItems: "center",display: "flex",justifyContent: "center",}}>
                        <div style={{boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",width:"300px",height:"300px",display:"block", borderRadius:"10px",padding:"20px"}}>
        <div style={{display:"block",width:"250px",overflow:"hidden",whiteSpace: "nowrap",borderRadius:"10px"}}>
            <div style={stylePic}>
                <img src={img2} style={{height:"100%",width:"100%",position:"absolute",borderRadius:"15px"}}></img>
            </div>
            <div style={stylePic}>
                <img src={img} style={{height:"100%",width:"100%",position:"absolute",borderRadius:"15px"}}></img>
            </div>
            <div style={stylePic}>
                <img src={img2} style={{height:"100%",width:"100%",position:"absolute",borderRadius:"15px"}}></img>
            </div>
        </div>
        <div style={{display:"block", width:"200px",display:"flex",alignItems: "center",justifyContent: "center",margin:"10px"}}>
            <div style={{marginLeft:"100px", width:"8px",height:"8px",borderRadius:"50%", backgroundColor:"blue",border:"1px solid blue",display:"inline-block",margin:"2px"}}>
            </div>
            <div style={{width:"8px",height:"8px",borderRadius:"50%", backgroundColor:"#bcbcbc",display:"inline-block",margin:"2px"}}>
            </div>
            <div style={{width:"8px",height:"8px",borderRadius:"50%", backgroundColor:"#bcbcbc",display:"inline-block",margin:"2px"}}>
            </div>
        </div>
        <div className="d-grid gap-2">
        <Button variant="primary" size="lg">View all</Button>

        </div>
    </div>

      </div>


  )
}

import React from 'react'
import { Card } from 'react-bootstrap'

//this is the card responsible for showing study material's info on dashboard
export default function StudyMaterial(props) {
  return (
    <div>
        <Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>Study Material</Card.Title>
                                                {/*Book name  */}
    <Card.Subtitle className="mb-2 text-muted">{props.book}</Card.Subtitle>
    {/* Status */}
    <Card.Link href="#">Status: {props.status}</Card.Link><br></br>
    {/* remaining time */}
    <Card.Link href="#">Remaining Time: {props.rTime}</Card.Link>
  </Card.Body>
</Card>
    </div>
  )
}

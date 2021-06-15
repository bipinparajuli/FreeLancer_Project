import React from 'react'
import {Card,Button} from 'react-bootstrap'

const Cards = ({title,text}) => {
    return (
        <Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>{title}</Card.Title>
    <Card.Text>
      {text}
    </Card.Text>
  </Card.Body>
</Card>
    )
}

export default Cards

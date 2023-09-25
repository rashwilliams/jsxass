import './App.css';
import React from "react";
import {Card, Button} from "react-bootstrap";

const App=()=> {
  return  <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>JSXASS</Card.Title>
    <Card.Text>
      This is the description of JXSASS
    </Card.Text>
    Hello. This is William Rashidi
    <Button variant="primary">Read more</Button>
  </Card.Body>
</Card>
}

export default App;

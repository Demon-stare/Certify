import React from 'react';
import './App.css';
import ReactDOM from 'react-dom/client';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from  'react-bootstrap/Card';


function MenuCard() {

    return(
    <Card id="Header">
      <Card.Body>
        <Card.Title>Cute Dog Pictures</Card.Title>
        <Card.Text>
          Scroll through some random dog pictures and find the joy back in your miserable lifeS
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    );
}
export default MenuCard;
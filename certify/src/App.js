import './App.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from  'react-bootstrap/Card';
import MenuCard from './MenuCard';
import axios from 'axios';


function App() {

  axios.get('https://official-joke-api.appspot.com/random_joke')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });


  return (
    <div>
    <div >
      Bored AF

    </div>
    <Container>
    <Row>
      <Col>
      <MenuCard ></MenuCard>
      </Col>
      <Col>
      <MenuCard></MenuCard>
      </Col>
    </Row>
    <Row>
      <Col>
      <MenuCard></MenuCard>
      </Col>
      <Col>
      <MenuCard></MenuCard>
      </Col>
    </Row>
    <Row>
      <Col>
      <MenuCard></MenuCard>
      </Col>
      <Col>
      <MenuCard></MenuCard>
      </Col>
    </Row>
  </Container>
  </div>
  );
}


export default App;

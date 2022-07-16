import './App.css';
import React from "react";
import { PotterSpell } from './components/harrypotter-spell';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  return (
    <div>
      <header>
        <Container>
          <Row className="text-center mt-3 mb-5">
            <Col sm={{ span: 6, offset: 3 }} className='border-head'>
              <h1>Reusable Scroll Rental</h1>
            </Col>
          </Row>
        </Container>
      </header>

      <body>
        <Container>

        <Row>
        <Col className='border-body' sm={{ span: 8, offset: 2 }}>
          <p>Madam Pince, the Hogwarts Librarian is unfortunately away for a medical leave. In her absence, a mischevious second year student found a scroll that gives a random spell whenever it is reponed.</p>
          <p> In a true capitalist fashion, the student now rents this scroll to others for a single Knut an hour. </p>
        </Col>
        </Row>
        <br />
        <Row>
        <Col sm={{ span: 6, offset: 3 }}>
          <PotterSpell />
        </Col>
        </Row>

        </Container>
      </body>
    </div>
  );
}

export default App;

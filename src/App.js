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
            <Col sm={12}>
              <h1>Random Harry Potter Spell Generator </h1>
            </Col>
          </Row>
        </Container>
      </header>

      <body>
        <Container>
        <Row>
        <Col>
          <PotterSpell />
        </Col>
        </Row>
        </Container>
      </body>
    </div>
  );
}

export default App;

import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Alert from 'react-bootstrap/Alert';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';

function Jumbo({areaList}) {
  return (
    <Jumbotron>
      <Container>
        <Row>
          <Col>
            <h1>Completion Checklist</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>
              This is a completion checklist for Sekiro&trade; Shadows Die
              Twice. This checklist is based on Fextralife's Game Progress Route
              which presents a recommended progression path through the game.
            </p>
          </Col>
        </Row>
        <Row>
          <Col md="auto">
            <Alert variant="danger">
              The following sections contain <strong>spoilers</strong>.
            </Alert>
          </Col>
        </Row>
        <hr />

        <Row>
          <Col>
            <h5>Areas Index</h5>
            <ListGroup>{areaList}</ListGroup>
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
}

export default Jumbo;

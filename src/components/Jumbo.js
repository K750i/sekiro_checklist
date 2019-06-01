import React from 'react';
import AreaCompletionTracker from './AreaCompletionTracker';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Alert from 'react-bootstrap/Alert';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faExclamationCircle} from '@fortawesome/free-solid-svg-icons';

function Jumbo({areaList, status}) {
  const overallStatus = Object.keys(status).reduce(
    ([done, total], key) => [done + status[key][0], total + status[key][1]],
    [0, 0],
  );

  return (
    <Jumbotron>
      <Container>
        <Row>
          <Col>
            <h2>Progression Checklist for Sekiro&trade; Shadows Die Twice</h2>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>
              This is a playthrough or progression checklist for Sekiro&trade;
              Shadows Die Twice.
            </p>
            <p>
              It is loosely based on{' '}
              <a
                href="https://sekiroshadowsdietwice.wiki.fextralife.com/Game+Progress+Route"
                target="_blank"
                rel="noopener noreferrer">
                Fextralife's Game Progress Route
              </a>{' '}
              which presents a logical progression path through the game for new
              players (veteran obviously can already follow their own preferred
              path). Please note that it does not attempt to follow all NPCs
              questlines or any of its path variations.
            </p>
          </Col>
        </Row>
        <Row>
          <Col md="auto">
            <Alert variant="danger">
              <FontAwesomeIcon icon={faExclamationCircle} />
              &nbsp;The following sections contain <strong>spoilers</strong>.
            </Alert>
          </Col>
        </Row>
        <hr />

        <Row>
          <Col>
            <h4>
              Areas List <AreaCompletionTracker status={overallStatus} />
            </h4>
            <ListGroup>{areaList}</ListGroup>
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
}

export default Jumbo;

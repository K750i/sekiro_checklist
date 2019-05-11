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

function AllTask({sectionList, alltaskSection, status}) {
  const overallStatus = Object.keys(status).reduce(
    ([done, total], key) => [done + status[key][0], total + status[key][1]],
    [0, 0],
  );

  return (
    <>
      <Jumbotron style={{background: '#f9ebd2'}}>
        <Container>
          <Row>
            <Col>
              <h2>All Completion Checklist</h2>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>
                Track the status of completion for all major tasks with the
                game.
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
                Tasks Sections <AreaCompletionTracker status={overallStatus} />
              </h4>
              <ListGroup>{sectionList}</ListGroup>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
      <Alert variant="primary">
        Bosses marked with{' '}
        <span role="img" aria-label="emoji">
          ⼑
        </span>{' '}
        drop{' '}
        <Alert.Link
          href="https://sekiroshadowsdietwice.wiki.fextralife.com/Prayer+Beads"
          target="_blank"
          rel="noopener noreferrer">
          Prayer Beads
        </Alert.Link>
        .
      </Alert>
      <main>{alltaskSection}</main>
    </>
  );
}
export default AllTask;

import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAngleDoubleUp} from '@fortawesome/free-solid-svg-icons';

function Footer() {
  const style = {
    background: '#343a40',
    color: 'rgba(255,255,255,0.8)',
    marginTop: '3rem',
    paddingTop: '2rem',
    paddingBottom: '2rem',
  };

  return (
    <footer style={style}>
      <Container>
        <Row>
          <Col>Footer</Col>
          <Col>
            <a href="#top" style={{color: 'inherit'}}>
              <FontAwesomeIcon icon={faAngleDoubleUp} size="2x" />
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;

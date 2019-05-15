import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faReact} from '@fortawesome/free-brands-svg-icons';
import {faBootstrap} from '@fortawesome/free-brands-svg-icons';

function Footer() {
  const footerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: '0',
    width: '100%',
    height: '60px',
    background: '#343a40',
    color: 'rgba(255, 255, 255, 0.5)',
  };

  const divStyle = {
    fontSize: '0.9rem',
  };

  return (
    <footer style={footerStyle}>
      <div style={divStyle}>
        Made with <FontAwesomeIcon icon={faReact} /> React and{' '}
        <FontAwesomeIcon icon={faBootstrap} /> React-Bootstrap
      </div>
    </footer>
  );
}

export default Footer;

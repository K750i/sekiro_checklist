import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAngleDoubleUp} from '@fortawesome/free-solid-svg-icons';

function Footer() {
  const style = {
    position: 'absolute',
    bottom: '0',
    width: '100%',
    height: '60px',
    background: '#343a40',
    color: 'rgba(255, 255, 255, 0.5)',
  };

  return (
    <footer style={style}>
      <div style={{padding: '10px'}}>
        Footer
        <a href="#top" style={{color: 'inherit'}}>
          <FontAwesomeIcon icon={faAngleDoubleUp} size="2x" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;

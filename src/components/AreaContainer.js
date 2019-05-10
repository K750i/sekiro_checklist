import React from 'react';
import ListItem from './ListItem';
import AreaCompletionTracker from './AreaCompletionTracker';
import Collapse from 'react-bootstrap/Collapse';
import Button from 'react-bootstrap/Button';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAngleUp} from '@fortawesome/free-solid-svg-icons';
import {faAngleDown} from '@fortawesome/free-solid-svg-icons';

class AreaContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: true,
    };
  }

  static getDerivedStateFromProps(props, state) {
    return {
      open: props.collapse.hasOwnProperty(props.link)
        ? props.collapse[props.link]
        : true,
    };
  }

  handleClick = () => {
    const openState = {
      [this.props.link]: !this.state.open,
    };

    this.props.handleCollapse(openState);
  };

  render() {
    const {
      areaName,
      link,
      areaObjectives,
      status,
      toggleCompletion,
    } = this.props;
    const {open} = this.state;
    // offset the anchor link so it won't butt against the Nav
    const sectionStyle = {
      paddingTop: '80px',
      marginTop: '-80px',
      backgroundClip: 'content-box',
    };

    return (
      <section style={sectionStyle} id={link.substring(1)}>
        <h4>
          <Button
            variant="link"
            onClick={this.handleClick}
            aria-controls={link.substring(1) + '_collapse'}
            aria-expanded={open}>
            <FontAwesomeIcon
              icon={this.state.open ? faAngleUp : faAngleDown}
              size="2x"
            />
          </Button>
          {areaName}&nbsp;
          <AreaCompletionTracker status={status} />
        </h4>
        <Collapse in={this.state.open}>
          <div id={link.substring(1) + '_collapse'}>
            <hr style={{marginTop: 0}} />
            <ul>
              {areaObjectives.map(item => (
                <ListItem
                  key={item.id}
                  toggleCompletion={toggleCompletion}
                  item={item}
                />
              ))}
            </ul>
          </div>
        </Collapse>
      </section>
    );
  }
}

export default AreaContainer;

import React from 'react';
import './styles.css';

export default class Link extends React.Component {
  render() {
    let linkTo = this.props.link;
    return (
      <div className="Link">
        <a href={linkTo} target="_blank" rel="noopener noreferrer">
          <img
            src={this.props.ico}
            width="32px"
            height="32px"
            alt={`${this.props.ico} icon.`}
          />
        </a>
      </div>
    );
  }
}

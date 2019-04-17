import React, { Component } from 'react';
import './styles.css';

export default class LgProject extends React.Component {
  render() {
    let projectImage = this.props.image;
    let itemSide = this.props.side;
    return (
      <div className={'LgProject ' + itemSide}>
        <h2>{this.props.projectName}</h2>
        {projectImage ? (
          <img id="projectImage" src={projectImage} alt="" />
        ) : null}{' '}
        <div className="sst">
          <div className="stack">
            <h4>Stack: </h4>
            <p>{this.props.stack}</p>
          </div>
          <div className="summary">
            <h4>Summary: </h4>
            <p>{this.props.summary}</p>
          </div>
          <div className="takeaway">
            <h4>Takeaway: </h4>
            <p>{this.props.takeaway}</p>
          </div>
        </div>
      </div>
    );
  }
}

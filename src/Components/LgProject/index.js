import React, { Component } from 'react';
import './styles.css';

export default class LgProject extends React.Component {
  render() {
    let projectImage = this.props.image;
    return (
      <div className="LgProject">
        {projectImage ? <span id="projectImage" /> : null}
        <h2>{this.props.projectName}</h2>
        <div className="sst">
          <h4>Stack: </h4>
          <p>{this.props.stack}</p>
        </div>
        <div className="sst">
          <h4>Summary: </h4>
          <p>{this.props.summary}</p>
        </div>
        <div className="sst">
          <h4>Takeaway: </h4>
          <p>{this.props.takeaway}</p>
        </div>
      </div>
    );
  }
}

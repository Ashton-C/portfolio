import React from 'react';
import './styles.css';

export default class SmProject extends React.Component {
  render() {
    let projectImage = this.props.image;
    return (
      <div className="SmProject">
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

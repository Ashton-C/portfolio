import React, { Component } from 'react';
import './styles.css';

export default class Link extends React.Component {
  render() {
    let linkTo = this.props.to;
    return (
      <div className="Link">
        <a href={linkTo}>{this.props.to}</a>
      </div>
    );
  }
}

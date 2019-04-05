import React, { Component } from 'react';
import Link from './Components/Link';
import './App.css';
import profPic from './AngelsLandingSelfieSquare.jpg';
import backG from './CodingBG.png';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Header-container">
          <p className="Header-image" />
          <div className="Header">
            <div id="leftside">
              <img id="profilepic" src={profPic} alt="Pic of me" />
            </div>
            <div id="rightside">
              <p>Hello! My name is</p>
              <br />
              <h1>Ashton Christensen.</h1>
              <br />
              <p>
                I am a web developer looking to get started in the industry.
              </p>
              <br />
              <div className="Links">
                <Link to="Github" />
                <Link to="Twitter" />
                <Link to="Email" />
                <Link to="LinkedIn" />
              </div>
            </div>
          </div>
        </div>
        <div className="content">
          <p>Wiggles and stuff</p>
        </div>
        <div className="Footer">
          <p>Ashton Christensen 2019</p>
        </div>
      </div>
    );
  }
}

export default App;

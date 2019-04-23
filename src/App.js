import React, { Component } from 'react';
import Link from './Components/Link';
import LgProject from './Components/LgProject';
import SmProject from './Components/SmProject';
import SlideShow from './Components/SlideShow';
import './App.css';
import profPic from './AngelsLandingSelfieSquare.jpg';
import gitHubIco from './GitHub-Mark-Light-32px.png';
import twitterIco from './Twitter_Logo_Blue.png';
import emailIco from './logo_gmail_32px.png';
import linkedInIco from './Popular_Social_Media-22-512.png';
import techSkillsImg from './SoughtTechSkillsImg.png';
import ktrackerImg from './Ktrackerimg.png';
import us from './Us.jpg';
import boe from './Boe.JPG';
import scottie from './Scottie.JPG';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Header">
          <div id="leftside">
            <img id="profilepic" src={profPic} alt="Pic of me" />
          </div>
          <div id="rightside">
            <p>Hello! My name is</p>
            <h1>Ashton Christensen.</h1>
            <p>I am a web developer looking to get started in the industry.</p>
            <br />
            <div className="Links">
              <Link
                to="Github"
                ico={gitHubIco}
                link="https://github.com/Ashton-C"
              />
              <Link
                to="Twitter"
                ico={twitterIco}
                link="https://twitter.com/_Ashton_C"
              />
              <Link
                to="Email"
                ico={emailIco}
                link="mailto:ashton.christensen27@gmail.com"
              />
              <Link
                to="LinkedIn"
                ico={linkedInIco}
                link="https://www.linkedin.com/in/ashton-christensen-082a01112/"
              />
            </div>
          </div>
        </div>

        <div className="content">
          <h3>About Me</h3>
          <div className="aboutMe">
            <SlideShow images={[us, boe, scottie]} />
            <p>
              Hello, welcome to my portfolio! As mentioned above, I am a web
              developer looking to find my first job in the industry. Aside from
              loving tech and development, I love my beautiful wife Christianna,
              my dog Boe, and my cat Scottie. Some of my hobbies include
              longboarding, cycling, boardgames, hiking, reading, learning,
              Hearthstone and other PC games, 3D printing, and playing Guitar
              Hero. I currently live in Salt Lake City, UT, but will be
              relocating to the Portland/Vancouver area in the coming months.
            </p>
          </div>
          <div className="Projects">
            <h3>Projects I've Worked On</h3>
            <div className="largeProjects">
              <LgProject
                projectName="KTracker"
                date="March 2019"
                image={ktrackerImg}
                stack="ReactJS front end, Node/ExpressJS back end. React Router, SQLite, and Babel."
                summary="KTracker is a bug tracking application I developed to help with a program called Kraken that we used in the warehouse at my previous job. It is a simple bug and feature request tracker that allows for multiple users and storing and exporting reports from the DB."
                takeaway="KTracker was the first backend I built and I learned a ton from it ranging from building a basic CRUD API with Express to dabbling in SQL for the database to implementing user credential valdation."
                side="left"
              />
              <LgProject
                projectName="Sought Tech Skills"
                date="October 2018"
                image={techSkillsImg}
                stack="Python3 and Flask"
                summary="Sought Tech Skills is a little web scraper app that will search through Indeed.com and StackOverflow Jobs and search for key words relating to programming languages and frameworks and returns the popularity of said keywords by percentage in the selected city."
                takeaway="This project was originally going to be a command line app, but I decided to try out Flask with this project. Main takeaways included basic data manipulation, basic html templating usage, and basic scraping knowledge."
                side="right"
              />
            </div>
            <ul className="smallProjects">
              <li>
                <SmProject
                  projectName="KTracker"
                  date="March 2019"
                  stack="ReactJS front end, Node/ExpressJS back end. React Router, SQLite, and Babel."
                  summary="KTracker is a bug tracking application I developed to  with a program called Kraken that we used in the warehouse at my previous job. It is a simple bug and feature request tracker."
                  takeaway="This project was originally going to be a command line app, but I decided to try out Flask with this project. Main takeaways included basic data manipulation, basic html templating usage, and basic scraping knowledge."
                />
              </li>
              <li>
                <SmProject
                  projectName="KTracker"
                  date="March 2019"
                  stack="ReactJS front end, Node/ExpressJS back end. React Router, SQLite, and Babel."
                  summary="KTracker is a bug tracking application I developed to  with a program called Kraken that we used in the warehouse at my previous job. It is a simple bug and feature request tracker."
                  takeaway="This project was originally going to be a command line app, but I decided to try out Flask with this project. Main takeaways included basic data manipulation, basic html templating usage, and basic scraping knowledge."
                />
              </li>
              <li>
                <SmProject
                  projectName="KTracker"
                  date="March 2019"
                  stack="ReactJS front end, Node/ExpressJS back end. React Router, SQLite, and Babel."
                  summary="KTracker is a bug tracking application I developed to  with a program called Kraken that we used in the warehouse at my previous job. It is a simple bug and feature request tracker."
                  takeaway="This project was originally going to be a command line app, but I decided to try out Flask with this project. Main takeaways included basic data manipulation, basic html templating usage, and basic scraping knowledge."
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

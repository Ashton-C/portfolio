import React, { Component } from 'react';
import Link from './Components/Link';
import SmProject from './Components/SmProject';
import SlideShow from './Components/SlideShow';
import Skill from './Components/Skill';
import './App.css';
import profPic from './Selfie.jpg';
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
  constructor() {
    super();
    this.state = {
      contactName: 0,
      contactEmail: 0,
      contactMessage: 0
    };
    this.handleFormChange = this.handleFormChange.bind(this);
  }

  handleFormChange = event => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="App">
        <div className="parallax" />
        <div className="section">
          <header className="Header">
            <div id="leftside">
              <img id="profilepic" src={profPic} alt="Pic of me" />
            </div>
            <div id="rightside">
              <p>Hello, my name is</p>
              <h1>Ashton Christensen</h1>
              <p>I am a web developer looking to get started in the industry</p>
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
          </header>

          <main className="content">
            <h3>About Me</h3>
            <section className="aboutMe">
              <SlideShow images={[us, boe, scottie]} />
              <p>
                Hello, welcome to my portfolio! As mentioned above, I am a web
                developer looking to find my first job in the industry. Aside
                from loving tech and development, I love my beautiful wife
                Christianna, my dog Boe, and my cat Scottie. Some of my hobbies
                include longboarding, cycling, boardgames, hiking, reading,
                learning, Hearthstone and other PC games, 3D printing, and
                playing Guitar Hero. I currently live in Salt Lake City, UT, but
                will be relocating to the Portland/Vancouver area in the coming
                months.
              </p>
            </section>
            <section className="Projects">
              <h3>Projects I've Worked On</h3>
              <div className="largeProjects">
                <SmProject
                  projectName="KTracker"
                  date="March 2019"
                  image={ktrackerImg}
                  stack="ReactJS front end, Node/ExpressJS back end. React Router, SQLite, and Babel."
                  summary="KTracker is a bug tracking application I developed to help with a program called Kraken that we used in the warehouse at my previous job. It is a simple bug and feature request tracker that allows for multiple users and storing and exporting reports from the DB."
                  takeaway="KTracker was the first back-end I built and I learned a ton from it. I built a basic CRUD API with Express, dabbled in SQL for the database for the first time, and implemented user credential validation."
                  side="left"
                />
                <SmProject
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
                    projectName="Social Card Generator"
                    date="January 2019"
                    stack="ReactJS, HTML/CSS, Bootstrap"
                    summary="A small program meant to help create cool social cards. It takes a profile pic, your name and contact info, then you choose a randomly generated gradient and it will output a nice, clean card."
                    takeaway="I learned about uploading files, classic Javascript functions for randomization, exporting to PDF, and making forms."
                  />
                </li>
                <li>
                  <SmProject
                    projectName="Spotify Genre Playlist Generator"
                    date="October 2018"
                    stack="Python3, Spotify API, GraceNote API"
                    summary="A command line program that takes a users Spotify library and runs it through the GraceNote API to sort it into the proper genre playlist and creates said playlists on the user's account."
                    takeaway="I learned alot about APIs, data manipulation, and authentication."
                  />
                </li>
              </ul>
            </section>
            <section className="Skills">
              <h3>Skills</h3>
              <ul>
                <li>
                  <Skill skill="Javascript" level={2} />
                </li>
                <li>
                  <Skill skill="HTML/CSS" level={2} />
                </li>
                <li>
                  <Skill skill="ReactJS" level={1} />
                </li>
                <li>
                  <Skill skill="ExpressJS" level={1} />
                </li>
                <li>
                  <Skill skill="Python3" level={1} />
                </li>
                <li>
                  <Skill skill="Git" level={1} />
                </li>
                <li>
                  <Skill skill="Linux" level={1} />
                </li>
              </ul>
            </section>
          </main>
          <footer>
            <section className="contactMe">
              <h3>Contact Me!</h3>
              <p>
                If you are interested in contacting me, hit me up on any of my
                social media accounts or use this form.
              </p>
              <form name="contactme">
                <label form="contactme">Name</label>
                <br />
                <input
                  onChange={this.handleFormChange}
                  name="contactName"
                  type="text"
                />
                <br />
                <label form="contactme">Email</label>
                <br />
                <input
                  onChange={this.handleFormChange}
                  name="contactEmail"
                  type="text"
                />
                <br />
                <label form="contactme">Message</label>
                <br />
                <textarea
                  onChange={this.handleFormChange}
                  name="contactMessage"
                />
                <br />
                <a
                  name="sendContact"
                  href={`mailto:ashton.christensen27@gmail.com?subject=${
                    this.state.contactName
                  }%20contacting%20from%20Portfolio%20@%20${
                    this.state.contactEmail
                  }&body=${this.state.contactMessage}`}
                >
                  {' '}
                  Send!
                </a>
              </form>
            </section>
            <section className="foot">
              <p>Ashton Christensen - 2019</p>
            </section>
          </footer>
        </div>
      </div>
    );
  }
}

export default App;

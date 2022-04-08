import './App.css';
import React from 'react';
import Aside from './components/Aside';
import AboutMe from './components/AboutMe';
import WorkExperience from './components/WorkExperience';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

const ambtn = document.querySelector("#about-me");
const workbtn = document.querySelector("#work-ex");
const skillsbtn = document.querySelector("#skills");
const contactbtn = document.querySelector("#contact");
const aboutMe = document.querySelector(".about-me");
const workEx = document.querySelector(".work-ex");
const skills = document.querySelector(".skills");
const contact = document.querySelector(".contact");

function App() {

  const aboutMeClick = () => {
    ambtn.className = "active";
    workbtn.className = "inactive";
    skillsbtn.className = "inactive";
    contactbtn.className = "inactive";

    if (aboutMe.classList.contains("hidden")) {
      aboutMe.classList.remove("hidden");
    }
    workEx.classList.add("hidden");
    skills.classList.add("hidden");
    contact.classList.add("hidden");
  }

  const workExClick = () => {
    workbtn.className = "active";
    ambtn.className = "inactive";
    skillsbtn.className = "inactive";
    contactbtn.className = "inactive";

    if (workEx.classList.contains("hidden")) {
      workEx.classList.remove("hidden");
    }
    aboutMe.classList.add("hidden");
    skills.classList.add("hidden");
    contact.classList.add("hidden");
  }

  const skillsClick = () => {
    skillsbtn.className = "active";
    ambtn.className = "inactive";
    workbtn.className = "inactive";
    contactbtn.className = "inactive";

    if (skills.classList.contains("hidden")) {
      skills.classList.remove("hidden");
    }
    aboutMe.classList.add("hidden");
    workEx.classList.add("hidden");
    contact.classList.add("hidden");
  }

  const contactClick = () => {
    contactbtn.className = "active";
    ambtn.className = "inactive";
    skillsbtn.className = "inactive";
    workbtn.className = "inactive";

    if (contact.classList.contains("hidden")) {
      contact.classList.remove("hidden");
    }
    aboutMe.classList.add("hidden");
    workEx.classList.add("hidden");
    skills.classList.add("hidden");
  }


  return (
    <div className="App">
      <h1>Frida Westerdahl</h1>
      <h2>junior .NET developer</h2>
      <div className='menu'>
        <button id="about-me" className='active' onClick={aboutMeClick}>About me</button>
        <button id="work-ex" className='inactive' onClick={workExClick}>Work experience</button>
        <button id="skills" className='inactive' onClick={skillsClick}>Skills</button>
        <button id="contact" className='inactive' onClick={contactClick}>Contact</button>
      </div>
      <div className='wrapper'>
        <div className='aside'>
          <Aside />
        </div>
        <div className='main'>
          <div className='about-me'>
            <AboutMe />
          </div>
          <div className='work-ex hidden'>
            <WorkExperience />
          </div>
          <div className='skills hidden'>
            <Skills />
          </div>
          <div className='contact hidden'>
            <Contact />
          </div>
        </div>
      </div>
      <div className='footer'>
        <Footer />
      </div>
    </div>

  );
}

export default App;

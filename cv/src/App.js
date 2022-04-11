import './App.css';
import React from 'react';
import Aside from './components/Aside';
import AboutMe from './components/AboutMe';
import WorkExperience from './components/WorkExperience';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {

  const aboutMeClick = () => {
    const ambtn = document.querySelector("#about-me");
    const workbtn = document.querySelector("#work-ex");
    const skillsbtn = document.querySelector("#skills");
    const contactbtn = document.querySelector("#contact");
    ambtn.className = "active";
    workbtn.className = "inactive";
    skillsbtn.className = "inactive";
    contactbtn.className = "inactive";

    const aboutMe = document.querySelector(".about-me");
    const workEx = document.querySelector(".work-ex");
    const skills = document.querySelector(".skills");
    const contact = document.querySelector(".contact");

    if (aboutMe.classList.contains("hidden")) {
      aboutMe.classList.remove("hidden");
    }
    workEx.classList.add("hidden");
    skills.classList.add("hidden");
    contact.classList.add("hidden");
  }

  const workExClick = () => {
    const ambtn = document.querySelector("#about-me");
    const workbtn = document.querySelector("#work-ex");
    const skillsbtn = document.querySelector("#skills");
    const contactbtn = document.querySelector("#contact");
    workbtn.className = "active";
    ambtn.className = "inactive";
    skillsbtn.className = "inactive";
    contactbtn.className = "inactive";

    const aboutMe = document.querySelector(".about-me");
    const workEx = document.querySelector(".work-ex");
    const skills = document.querySelector(".skills");
    const contact = document.querySelector(".contact");

    if (workEx.classList.contains("hidden")) {
      workEx.classList.remove("hidden");
    }
    aboutMe.classList.add("hidden");
    skills.classList.add("hidden");
    contact.classList.add("hidden");
  }

  const skillsClick = () => {
    const ambtn = document.querySelector("#about-me");
    const workbtn = document.querySelector("#work-ex");
    const skillsbtn = document.querySelector("#skills");
    const contactbtn = document.querySelector("#contact");
    skillsbtn.className = "active";
    ambtn.className = "inactive";
    workbtn.className = "inactive";
    contactbtn.className = "inactive";

    const aboutMe = document.querySelector(".about-me");
    const workEx = document.querySelector(".work-ex");
    const skills = document.querySelector(".skills");
    const contact = document.querySelector(".contact");

    if (skills.classList.contains("hidden")) {
      skills.classList.remove("hidden");
    }
    aboutMe.classList.add("hidden");
    workEx.classList.add("hidden");
    contact.classList.add("hidden");
  }

  const contactClick = () => {
    const ambtn = document.querySelector("#about-me");
    const workbtn = document.querySelector("#work-ex");
    const skillsbtn = document.querySelector("#skills");
    const contactbtn = document.querySelector("#contact");
    contactbtn.className = "active";
    ambtn.className = "inactive";
    skillsbtn.className = "inactive";
    workbtn.className = "inactive";

    const aboutMe = document.querySelector(".about-me");
    const workEx = document.querySelector(".work-ex");
    const skills = document.querySelector(".skills");
    const contact = document.querySelector(".contact");

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
          <div className='about-me page'>
            <AboutMe />
          </div>
          <div className='work-ex page hidden'>
            <WorkExperience />
          </div>
          <div className='skills page hidden'>
            <Skills />
          </div>
          <div className='contact page hidden'>
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

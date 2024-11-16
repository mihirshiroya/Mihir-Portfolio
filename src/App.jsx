import React from 'react';
import { ScrollProvider } from './Contexts/ScrollContext';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import AboutMe from './Components/AboutMe';
import Skill from './Components/Skill';
import Projects from './Components/Projects';
import Services from './Components/Services';
import ContactUs from './Components/ContactUs';
import Footer from './Components/Footer';
// Import your other components here

function App() {
  return (
    <ScrollProvider>
    <div className="App">
      <Navbar />
      <Home/>
         {/* Add padding-top equal to navbar height */}
        <section id="about" >
         <AboutMe/>
        </section>
        <section id="skills">
        <Skill/>
        </section>
        <section id="portfolio" >
       <Projects/>
        </section>
        <section id="services" >
         <Services/>
        </section>
        <section id="contact">
          <ContactUs/>
        </section>
        <Footer/>

      </div>
  </ScrollProvider>
  );
}

export default App;
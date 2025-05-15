import './App.css';
import './Vendor.css';
import Header from './Header';
import { useState } from "react";
import Accueil from './Accueil';
import Competences from './Competences';
import Projets from './Projets';
import Parcours from './Parcours';
import Contact from './Contact';
import useTemplate from './hooks/useTemplate';

function App() {
  const [currentSection, setCurrentSection] = useState("home");
  useTemplate();
  return (
    <div id='top'>
      <div id="preloader">
          <div id="loader">
          </div>
      </div>
      <div class="s-pagewrap">
        <div class="circles">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <Header setCurrentSection={setCurrentSection} currentSection={currentSection}/>
        <main>
          {currentSection === "home" && <Accueil/>}
          {currentSection === "services" && <Competences/>}
          {currentSection === "projets" && <Projets/>}
          {currentSection === "parcours" && <Parcours/>}
          {currentSection === "contact" && <Contact/>}
        </main>
      </div>
    </div>
  );
}

export default App;

import './App.css';
import Header from './Header';
import { useState } from "react";
import Accueil from './Accueil';
import Competences from './Competences';
import Projets from './Projets';
import Parcours from './Parcours';
import Contact from './Contact';

function App() {
  const [currentSection, setCurrentSection] = useState("home");
  return (
    <div className="App">
      <Header setCurrentSection={setCurrentSection}/>
      <main>
        {currentSection === "home" && <Accueil/>}
        {currentSection === "services" && <Competences/>}
        {currentSection === "projets" && <Projets/>}
        {currentSection === "parcours" && <Parcours/>}
        {currentSection === "contact" && <Contact/>}
      </main>
    </div>
  );
}

export default App;

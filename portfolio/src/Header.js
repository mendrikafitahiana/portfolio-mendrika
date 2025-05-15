import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Header({ setCurrentSection, currentSection }) {
  return (
    <header class="s-header">

      <div class="header-mobile">
        <span class="mobile-home-link"><a href="index.html">Mendrika Ramilison.</a></span>
        <a class="mobile-menu-toggle" href="#0"><span>Menu</span></a>
      </div>

      <div class="row wide main-nav-wrap">
        <nav class="column lg-12 main-nav">
          <ul>
          <li class={`${currentSection === "home" ? "current" : ""}`} onClick={() => setCurrentSection("home")}><a class="smoothscroll">Accueil</a></li>
          <li class={`${currentSection === "services" ? "current" : ""}`} onClick={() => setCurrentSection("services")}><a class="smoothscroll">Compétences</a></li>
          <li class={`${currentSection === "projets" ? "current" : ""}`} onClick={() => setCurrentSection("projets")}><a class="smoothscroll">Projets</a></li>
          <li class={`${currentSection === "parcours" ? "current" : ""}`} onClick={() => setCurrentSection("parcours")}><a class="smoothscroll">Parcours</a></li>
          <li class={`${currentSection === "contact" ? "current" : ""}`} onClick={() => setCurrentSection("contact")}><a class="smoothscroll">Me contacter</a></li>
          </ul>
        </nav>
        

        {/* <div style={{ display: "flex", gap: "16px", fontSize: "24px" }}>
            <a href="https://github.com/votre-profil" target="_blank" rel="noopener noreferrer">
                <FaGithub color="#181717" />
            </a>

            
            <a href="mailto:votre@email.com">
                <MdEmail color="#D44638" />
            </a>

            
            <a href="https://linkedin.com/in/votre-profil" target="_blank" rel="noopener noreferrer">
                <FaLinkedin color="#0A66C2" />
            </a>
        </div> */}
      </div>
    </header>
  );
}
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Header({ setCurrentSection }) {
  return (
    <header>
      <nav>
        <button onClick={() => setCurrentSection("home")}>Accueil</button>
        <button onClick={() => setCurrentSection("services")}>Compétences</button>
        <button onClick={() => setCurrentSection("projets")}>Projets</button>
        <button onClick={() => setCurrentSection("parcours")}>Parcours</button>
        <button onClick={() => setCurrentSection("contact")}>Me contacter</button>

        <div style={{ display: "flex", gap: "16px", fontSize: "24px" }}>
            <a href="https://github.com/votre-profil" target="_blank" rel="noopener noreferrer">
                <FaGithub color="#181717" />
            </a>

            
            <a href="mailto:votre@email.com">
                <MdEmail color="#D44638" />
            </a>

            
            <a href="https://linkedin.com/in/votre-profil" target="_blank" rel="noopener noreferrer">
                <FaLinkedin color="#0A66C2" />
            </a>
        </div>
      </nav>
    </header>
  );
}
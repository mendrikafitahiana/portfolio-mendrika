export default function Header({ setCurrentSection }) {
  return (
    <header>
      <nav>
        <button onClick={() => setCurrentSection("home")}>Accueil</button>
        <button onClick={() => setCurrentSection("services")}>Compétences</button>
        <button onClick={() => setCurrentSection("projets")}>Projets</button>
        <button onClick={() => setCurrentSection("parcours")}>Parcours</button>
        <button onClick={() => setCurrentSection("contact")}>Me contacter</button>
      </nav>
    </header>
  );
}
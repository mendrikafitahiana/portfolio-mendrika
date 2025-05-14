export default function Projets() {
  return (
    <section className="home">
      <h1>Projets</h1>

      <h3>Wylo-congés</h3>
      <ul>
        <li>Type : application web</li>
        <li>Description : Application interne pour la gestion de congés et d'absences au sein de l'entreprise.</li>
        <li>Technologies : Symfony | React | MySQL | GitLab</li>
      </ul>

      <h3>Moov</h3>
      <ul>
        <li>Type : application mobile</li>
        <li>Description : Application mobile pour la gestion et la réservation d'un VTC.</li>
        <li>Technologies : Node.js/Express | Ionic/React | PostgreSQL | GitHub</li>
      </ul>

      <h3>Devinsider</h3>
      <ul>
        <li>Type : application web</li>
        <li>Description : Application pour mettre en place des relations entre les profils ISV/Investisseurs/OEM.</li>
        <li>Technologies : Symfony | React | MySQL | Docker | GitLab</li>
      </ul>
    </section>
  );
}
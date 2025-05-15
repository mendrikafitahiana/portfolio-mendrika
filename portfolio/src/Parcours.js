export default function Parcours() {
  return (
    <>
    <section class="s-intro target-section" id="parcours">

      <div class="row intro-content wide">

        <div class="column">
            <h1 class="text-huge-title">
              Parcours
            </h1>
        </div>

        <ul class="intro-social">
          <li><a href="#0">Email</a></li>
          <li><a href="#0">Github</a></li>
          <li><a href="#0">Linkedin</a></li>
        </ul>

      </div>
      
    </section>

    <div class="row about-timelines" data-animate-block>

      <div class="column lg-6 tab-12">

        <h2 class="text-pretitle" data-animate-el>
          Expériences
        </h2>

        <div class="timeline" data-animate-el>
            
          <div class="timeline__block">
            <div class="timeline__bullet"></div>
            <div class="timeline__header">
              <h4 class="timeline__title">Développeur Fullstack</h4>
              <h5 class="timeline__meta">Wylog Madagascar</h5>
              <p class="timeline__timeframe">Décembre 2022 - Présent</p>
            </div>
            <div class="timeline__desc">
              <p>Plateforme DevInsider (matchmaking ISV/investisseurs/OEM).</p>
            </div>
          </div>

          <div class="timeline__block">
            <div class="timeline__bullet"></div>
            <div class="timeline__header">
              <h4 class="timeline__title">Développeur Mobile</h4>
              <h5 class="timeline__meta">Wylog Madagascar</h5>
              <p class="timeline__timeframe">Mai 2024 - Novembre 2024</p>
            </div>
            <div class="timeline__desc">
              <p>Application de gestion et de réservation d'un VTC.</p>
            </div>
          </div>

          <div class="timeline__block">
            <div class="timeline__bullet"></div>
            <div class="timeline__header">
              <h4 class="timeline__title">Stagiaire développeur Fullstack</h4>
              <h5 class="timeline__meta">Wylog Madagascar</h5>
              <p class="timeline__timeframe">Juillet 2022 - Octobre 2022</p>
            </div>
            <div class="timeline__desc">
              <p>Plateforme interne de gestion des congés et d'absences.</p>
            </div>
          </div>

        </div>

      </div>

      <div class="column lg-6 tab-12">

        <h2 class="text-pretitle" data-animate-el>
          Formation
        </h2>

        <div class="timeline" data-animate-el>
            
          <div class="timeline__block">
            <div class="timeline__bullet"></div>
            <div class="timeline__header">
              <h4 class="timeline__title">Master 2 Informatique – MBDS / MIAGE</h4>
              <h5 class="timeline__meta">Université Côte d'Azur</h5>
              <p class="timeline__timeframe">Décembre 2023 – Octobre 2024</p>
            </div>
            <div class="timeline__desc">
              <p>CI/CD, architecture microservice, optimisation des requêtes et performance des sites
                (analyse des coûts des requêtes, audit de performance)</p>
            </div>
          </div>

          <div class="timeline__block">
            <div class="timeline__bullet"></div>
            <div class="timeline__header">
              <h4 class="timeline__title">Master 1 Informatique – Ingénierie Informatique</h4>
              <h5 class="timeline__meta">IT University, Andoharanofotsy</h5>
              <p class="timeline__timeframe">Mai 2024 - Novembre 2024</p>
            </div>
            <div class="timeline__desc">
              <p>Frameworks (React, Angular, Spring boot, .Net, NodeJs), bases de données (MongoDB), clean architecture
                , refactorisation
              </p>
            </div>
          </div>

          <div class="timeline__block">
            <div class="timeline__bullet"></div>
            <div class="timeline__header">
              <h4 class="timeline__title">Bac+3 Informatique – Développement Web</h4>
              <h5 class="timeline__meta">IT University, Andoharanofotsy</h5>
              <p class="timeline__timeframe">2019 – 2022</p>
            </div>
            <div class="timeline__desc">
              <p>Bases solides en algorithmique, structures de données, et 
                paradigmes de programmation, architecture monolithique, 
                API REST, Base de données (MySQL, PostgreSQL, SQL Server), langages (PHP, Java, HTML, CSS, Javascript)</p>
            </div>
          </div>

        </div>

      </div>

    </div>
    </>
  );
}
export default function Accueil() {
  return (
    <main class="s-content">

      <section class="s-intro target-section" id="home">

        <div class="row intro-content wide">

          <div class="column">
              <div class="text-pretitle with-line">
                  Bonjour, je m'appelle Mendrika RAMILISON
              </div>
              <h1 class="text-huge-title">
                Développeur Fullstack Web & Mobile.
              </h1>
          </div>

          <ul class="intro-social">
            <li><a href="#0">Email</a></li>
            <li><a href="#0">Github</a></li>
            <li><a href="#0">Linkedin</a></li>
          </ul>

        </div>

        <a href="#about" class="intro-scrolldown smoothscroll">
          <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M11 21.883l-6.235-7.527-.765.644 7.521 9 7.479-9-.764-.645-6.236 7.529v-21.884h-1v21.883z"/></svg>
        </a>

      </section>

      <section id="about" class="s-about target-section">

        <div class="row about-info wide" data-animate-block>

          <div class="column lg-6 md-12 about-info__pic-block">
              <img src="../src/images/about-photo.jpg" srcset="images/about-photo.jpg 1x, images/about-photo@2x.jpg 2x" alt="" class="about-info__pic"></img>
          </div>

          <div class="column lg-6 md-12">

              <div class="about-info__text" >

                  <h2 class="text-pretitle with-line" data-animate-el>
                      A propos
                  </h2>

                  <p class="attention-getter" data-animate-el>
                    Développeur Fullstack Web & Mobile passionnée, je conçois des applications web et mobiles performantes.
                    Solide expérience en intégration continue et architectures API, j'allie rigueur technique et agilité
                    pour livrer des solutions évolutives et centrées sur l'expérience utilisateur.
                  </p>

                  <a href="/documents/CV-Mendrika-Ramilison.pdf" download="CV-Mendrika-Ramilison.pdf" class="btn btn--medium u-fullwidth" data-animate-el>Télécharger mon CV</a>

              </div>
          </div>

        </div>

      </section>

    </main>
  );
}
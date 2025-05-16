export default function Projets() {
  return (
    <>
    <section class="s-intro target-section" id="projets">

      <div class="row intro-content wide">

        <div class="column">
            <h1 class="text-huge-title">
              Projets
            </h1>
        </div>

        <ul class="intro-social">
          <li><a href="#0">Email</a></li>
          <li><a href="#0">Github</a></li>
          <li><a href="#0">Linkedin</a></li>
        </ul>

      </div>

    </section>

    <div class="row works-portfolio">

      <div class="column lg-12" data-animate-block>

        <ul class="folio-list row block-lg-one-half block-stack-on-1000">

          <li class="folio-list__item column" data-animate-el>
            <a class="folio-list__item-link" href="#modal-01">
                <div class="folio-list__item-pic">
                    <img src="images/portfolio/fuji.jpg" srcset="images/portfolio/fuji.jpg 1x, images/portfolio/fuji@2x.jpg 2x"  alt=""></img>
                </div>
                
                <div class="folio-list__item-text">
                    <div class="folio-list__item-cat">
                        siteweb
                    </div>
                    <div class="folio-list__item-title">
                        Devinsider
                    </div>
                </div>
            </a>
          </li>

          <li class="folio-list__item column" data-animate-el>
            <a class="folio-list__item-link" href="#modal-01">
                <div class="folio-list__item-pic">
                    <img src="images/portfolio/fuji.jpg" srcset="images/portfolio/fuji.jpg 1x, images/portfolio/fuji@2x.jpg 2x"  alt=""></img>
                </div>
                
                <div class="folio-list__item-text">
                    <div class="folio-list__item-cat">
                        mobile
                    </div>
                    <div class="folio-list__item-title">
                        Moov
                    </div>
                </div>
            </a>
          </li>

          <li class="folio-list__item column" data-animate-el>
            <a class="folio-list__item-link" href="#modal-01">
                <div class="folio-list__item-pic">
                    <img src="images/portfolio/fuji.jpg" srcset="images/portfolio/fuji.jpg 1x, images/portfolio/fuji@2x.jpg 2x"  alt=""></img>
                </div>
                
                <div class="folio-list__item-text">
                    <div class="folio-list__item-cat">
                        siteweb
                    </div>
                    <div class="folio-list__item-title">
                        Wylo-congés
                    </div>
                </div>
            </a>
          </li>

        </ul>

      </div>

    </div>

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
    </>
  );
}
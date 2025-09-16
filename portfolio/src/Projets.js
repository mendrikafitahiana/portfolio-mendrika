import React, { useState, useEffect } from 'react';
import CongeVideo from "./vidéos/conges.mp4";
import Devinsider from "./images/devinsider.svg";
import WyloConge from "./images/wyloconge.png";
import NurseApp from "./images/nurseapp.png";
import Moov from "./images/moov.png";
import MoovVideo from "./vidéos/moov.mp4";
import NurseVideo from "./vidéos/nurse.mp4";

export default function Projets() {

  const [activeModal, setActiveModal] = useState(null);
  const [showVideoConge, setShowVideoConge] = useState(false);
  const [showVideoMoov, setShowVideoMoov] = useState(false);
  const [showVideoNurse, setShowVideoNurse] = useState(false);

  const openModal = (modalId, event) => {
    event.preventDefault();
    setActiveModal(modalId);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  // Fermer avec la touche Escape
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.keyCode === 27) {
        closeModal();
      }
    };

    if (activeModal) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [activeModal]);

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
            <div class="folio-list__item-link" onClick={(e) => openModal('modal-01', e)}>
                <div class="folio-list__item-pic">
                    <img 
                      src={NurseApp} 
                      srcSet={`${NurseApp} 1x, ${NurseApp} 2x`}  
                      alt=""
                      style={{
                        // width: '30%',
                        // height: '10%',
                        objectFit: 'contain',
                        objectPosition: 'center'
                      }}
                    />
                </div>
                
                <div class="folio-list__item-text">
                    <div class="folio-list__item-cat">
                        application mobile
                    </div>
                    <div class="folio-list__item-title">
                        NurseApp
                    </div>
                </div>
            </div>
          </li>

          <li class="folio-list__item column" data-animate-el>
            <div class="folio-list__item-link" onClick={(e) => openModal('modal-02', e)}>
                <div class="folio-list__item-pic">
                    <img 
                      src={Devinsider} 
                      srcset={`${Devinsider} 1x, ${Devinsider} 2x`}  
                      alt=""
                      style={{
                        // width: '50%',
                        // height: '50%',
                        objectFit: 'contain',
                        objectPosition: 'center'
                      }}
                    />
                </div>
                
                <div class="folio-list__item-text">
                    <div class="folio-list__item-cat">
                        application web
                    </div>
                    <div class="folio-list__item-title">
                        Devinsider
                    </div>
                </div>
            </div>
          </li>

          <li class="folio-list__item column" data-animate-el>
            <div class="folio-list__item-link" onClick={(e) => openModal('modal-03', e)}>
                <div class="folio-list__item-pic">
                    <img 
                      src={Moov} 
                      srcset={`${Moov} 1x, ${Moov} 2x`} 
                      alt=""
                      style={{
                        // width: '100%',
                        // height: '100%',
                        objectFit: 'contain',
                        objectPosition: 'center'
                      }}
                    />
                </div>
                
                <div class="folio-list__item-text">
                    <div class="folio-list__item-cat">
                        application mobile
                    </div>
                    <div class="folio-list__item-title">
                        Moov
                    </div>
                </div>
            </div>
          </li>

          <li class="folio-list__item column" data-animate-el>
            <div class="folio-list__item-link" onClick={(e) => openModal('modal-04', e)}>
                <div class="folio-list__item-pic">
                    <img 
                      src={WyloConge} 
                      srcset={`${WyloConge} 1x, ${WyloConge} 2x`} 
                      alt=""
                      style={{
                        // width: '50%',
                        // height: '50%',
                        objectFit: 'contain',
                        objectPosition: 'center'
                      }}
                    />
                </div>
                
                <div class="folio-list__item-text">
                    <div class="folio-list__item-cat">
                        application web
                    </div>
                    <div class="folio-list__item-title">
                        Wylo-congés
                    </div>
                </div>
            </div>
          </li>

        </ul>

      </div>

        {activeModal === 'modal-01' && (
          <div 
            className="modal-overlay"
            onClick={closeModal}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(0,0,0,0.8)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 9999
            }}
          >
            <div 
              className="modal-popup"
              onClick={(e) => e.stopPropagation()}
              style={{
                display: 'flex',
                flexDirection: 'column',
                maxWidth: '90vw',
                maxHeight: '90vh',
                width: 'auto',
                height: 'auto',
                background: 'white',
                borderRadius: '8px',
                overflow: 'hidden'
              }}
            >
                <button
                  onClick={closeModal}
                  style={{
                    position: 'absolute',
                    top: '10px',
                    right: '15px',
                    background: 'none',
                    border: 'none',
                    fontSize: '24px',
                    cursor: 'pointer',
                    zIndex: 1
                  }}
                >
                  ×
                </button>

                <div style={{
                  flex: '0 0 auto',
                  width: '100%',
                  minHeight: '150px'
                }}>
                  <img 
                    src={NurseApp} 
                    alt="NurseApp"
                    style={{
                      width: '100%',
                      height: '100%',
                      maxHeight: '300px',
                      objectFit: 'contain',
                      backgroundColor: 'black',
                    }}
                  />
                </div>

              <div class="modal-popup__desc">
                  <h5>NurseApp</h5>
                  <p>Application pour optimiser la gestion des tournées des infirmiers à domicile.</p>
                  <ul>
                    <li>Projet en équipe (avec 2 développeurs backend, 2 développeurs frontend, 1 designer, 1 lead tech).</li>
                    <li>Contribution dans la réalisation de la base de données complète du projet.</li>
                    <li>Développement des APIs backend pour les différents modules : patients, tournées, visites, gestion utilisateur.</li>
                    <li>Contribution au déploiement du backend de l'application.</li>
                  </ul>
                  <ul class="modal-popup__cat">
                      <li>Nodejs/Express</li>
                      <li>React native</li>
                      <li>MySQL</li>
                      <li>MongoDB</li>
                      <li>GitHub</li>
                  </ul>
              </div>

              <a href="#" onClick={() => setShowVideoNurse(true)} class="modal-popup__details">DEMONSTRATION</a>
            </div>
          </div>
        )}

        {activeModal === 'modal-02' && (
          <div 
            className="modal-overlay"
            onClick={closeModal}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(0,0,0,0.8)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 9999
            }}
          >
            <div 
              className="modal-popup"
              onClick={(e) => e.stopPropagation()}
              style={{
                display: 'flex',
                flexDirection: 'column',
                maxWidth: '90vw',
                maxHeight: '90vh',
                width: 'auto',
                height: 'auto',
                background: 'white',
                borderRadius: '8px',
                overflow: 'hidden'
              }}
            >
                <button
                  onClick={closeModal}
                  style={{
                    position: 'absolute',
                    top: '10px',
                    right: '15px',
                    background: 'none',
                    border: 'none',
                    fontSize: '24px',
                    cursor: 'pointer',
                    zIndex: 1
                  }}
                >
                  ×
                </button>

                <div style={{
                  flex: '0 0 auto',
                  width: '100%',
                  minHeight: '150px'
                }}>
                  <img 
                    src={Devinsider} 
                    alt="Devinsider"
                    style={{
                      width: '100%',
                      height: '100%',
                      maxHeight: '300px',
                      objectFit: 'contain',
                      backgroundColor: 'black',
                    }}
                  />
                </div>

              <div class="modal-popup__desc">
                  <h5>Devinsider</h5>
                  <p>Application pour mettre en place des relations entre les profils ISV/Investisseurs/OEM.</p>
                  <ul>
                    <li>Projet en équipe (avec 2 développeurs backend, 2 développeurs frontend, 1 designer).</li>
                    <li>Développement des APIs backend pour les différents modules : notifications, corporate development, community, strategic partnerships; dans tous les profils (ISV/Investisseurs/OEM).</li>
                    <li>Intégration des APIs dans l’application web et validation des fonctionnalités.</li>
                    <li>Contribution au déploiement CI/CD de l'application web.</li>
                  </ul>
                  <ul class="modal-popup__cat">
                      <li>Symfony</li>
                      <li>React</li>
                      <li>MySQL</li>
                      <li>Docker</li>
                      <li>GitLab</li>
                      <li>CI/CD</li>
                  </ul>
              </div>

              <a href="https://www.devinsider.com" target='_blank' class="modal-popup__details">DEMONSTRATION</a>
            </div>
          </div>
        )}

        {activeModal === 'modal-03' && (
          <div 
            className="modal-overlay"
            onClick={closeModal}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(0,0,0,0.8)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 9999
            }}
          >
            <div 
              className="modal-popup"
              onClick={(e) => e.stopPropagation()}
              style={{
                display: 'flex',
                flexDirection: 'column',
                maxWidth: '90vw',
                maxHeight: '90vh',
                width: 'auto',
                height: 'auto',
                background: 'white',
                borderRadius: '8px',
                overflow: 'hidden'
              }}
            >
              <button
                onClick={closeModal}
                style={{
                  position: 'absolute',
                  top: '10px',
                  right: '15px',
                  background: 'none',
                  border: 'none',
                  fontSize: '24px',
                  cursor: 'pointer',
                  zIndex: 1
                }}
              >
                ×
              </button>
                <div style={{
                  flex: '0 0 auto',
                  width: '100%',
                  minHeight: '150px'
                }}>
                  <img 
                    src={Moov} 
                    alt="Moov"
                    style={{
                      width: '100%',
                      height: '100%',
                      maxHeight: '300px',
                      objectFit: 'contain',
                      backgroundColor: 'black',
                    }}
                  />
                </div>

              <div class="modal-popup__desc">
                  <h5>Moov</h5>
                  <p>Application mobile pour la gestion et la réservation d'un VTC.</p>
                  <ul>
                    <li>Collaboration avec un designer sur la conception et l’expérience utilisateur.</li>
                    <li>Réalisation de la base de données complète du projet.</li>
                    <li>Développement des APIs backend pour les rôles conducteur et client : réservation, gestion des trajets, notifications, etc.</li>
                    <li>Intégration des APIs et mise en place des fonctionnalités principales.</li>
                    <li>Mise en production de l’application mobile sur les plateformes cibles (Android/iOS).</li>
                  </ul>
                  <ul class="modal-popup__cat">
                      <li>Node.js/Express</li>
                      <li>Ionic/React</li>
                      <li>PostgreSQL</li>
                      <li>GitHub</li>
                  </ul>
              </div>

              <a href="#" onClick={() => setShowVideoMoov(true)} class="modal-popup__details">DEMONSTRATION</a>
            </div>
          </div>
        )}

        {activeModal === 'modal-04' && (
          <div 
            className="modal-overlay"
            onClick={closeModal}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(0,0,0,0.8)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 9999
            }}
          >
            <div 
              className="modal-popup"
              onClick={(e) => e.stopPropagation()}
              style={{
                display: 'flex',
                flexDirection: 'column',
                maxWidth: '90vw',
                maxHeight: '90vh',
                width: 'auto',
                height: 'auto',
                background: 'white',
                borderRadius: '8px',
                overflow: 'hidden'
              }}
            >
              <button
                onClick={closeModal}
                style={{
                  position: 'absolute',
                  top: '10px',
                  right: '15px',
                  background: 'none',
                  border: 'none',
                  fontSize: '24px',
                  cursor: 'pointer',
                  zIndex: 1
                }}
              >
                ×
              </button>
              <div style={{
                flex: '0 0 auto',
                width: '100%',
                minHeight: '150px'
              }}>
                <img 
                  src={WyloConge} 
                  alt="WyloConge"
                    style={{
                      width: '100%',
                      height: '100%',
                      maxHeight: '300px',
                      objectFit: 'contain',
                      backgroundColor: 'black',
                    }}
                />
              </div>

              <div class="modal-popup__desc">
                  <h5>Wylo-congés</h5>
                  <p>Application interne pour la gestion de congés et d'absences au sein de l'entreprise.</p>
                  <ul>
                    <li>Responsable unique du développement (collaboration uniquement avec un designer)</li>
                    <li>Contribution à la conception complète de la base de données du projet</li>
                    <li>Développement des APIs backend couvrant l’ensemble des modules : congés, absences, analyses et statistiques globales.</li>
                    <li>Intégration des services APIs dans toutes les fonctionnalités du projet.</li>
                    <li>Contribution au déploiement de l’application web.</li>
                  </ul>
                  <ul class="modal-popup__cat">
                      <li>Symfony</li>
                      <li>React</li>
                      <li>MySQL</li>
                      <li>GitLab</li>
                  </ul>
              </div>

              <a href="#" onClick={() => setShowVideoConge(true)} class="modal-popup__details">DEMONSTRATION</a>
            </div>
          </div>
        )}

        {showVideoConge && (
          <div 
            className="video-modal-overlay"
            onClick={() => setShowVideoConge(false)}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(0,0,0,0.9)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 10000
            }}
          >
            <div 
              onClick={(e) => e.stopPropagation()}
              style={{ position: 'relative' }}
            >
              <button
                onClick={() => setShowVideoConge(false)}
                style={{
                  position: 'absolute',
                  top: '-40px',
                  right: '0',
                  background: 'black',
                  border: 'none',
                  fontSize: '24px',
                  cursor: 'pointer',
                  width: '35px',
                  height: '35px'
                }}
              >
                ×
              </button>
              <video 
                controls 
                autoPlay
                width="800" 
                height="450"
              >
                <source src={CongeVideo} type="video/mp4" />
                Votre navigateur ne supporte pas la vidéo.
              </video>
            </div>
          </div>
        )}

        {showVideoMoov && (
          <div 
            className="video-modal-overlay"
            onClick={() => setShowVideoMoov(false)}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(0,0,0,0.9)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 10000
            }}
          >
            <div 
              onClick={(e) => e.stopPropagation()}
              style={{ position: 'relative' }}
            >
              <button
                onClick={() => setShowVideoMoov(false)}
                style={{
                  position: 'absolute',
                  top: '-40px',
                  right: '0',
                  background: 'black',
                  border: 'none',
                  fontSize: '24px',
                  cursor: 'pointer',
                  width: '35px',
                  height: '35px'
                }}
              >
                ×
              </button>
              <video 
                controls 
                autoPlay
                width="800" 
                height="450"
              >
                <source src={MoovVideo} type="video/mp4" />
                Votre navigateur ne supporte pas la vidéo.
              </video>
            </div>
          </div>
        )}

        {showVideoNurse && (
          <div 
            className="video-modal-overlay"
            onClick={() => setShowVideoNurse(false)}
            style={{
              position: 'fixed', 
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(0,0,0,0.9)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 10000,
              padding: '20px' // Ajout d'un padding pour éviter que la vidéo touche les bords
            }}
          >
            <div 
              onClick={(e) => e.stopPropagation()}
              style={{ 
                position: 'relative',
                maxWidth: '90vw', // Maximum 90% de la largeur de l'écran
                maxHeight: '90vh', // Maximum 90% de la hauteur de l'écran
                width: 'auto',
                height: 'auto'
              }}
            >
              <button
                onClick={() => setShowVideoNurse(false)}
                style={{
                  position: 'absolute',
                  top: '-40px',
                  right: '0',
                  background: 'black',
                  color: 'white',
                  border: 'none',
                  fontSize: '24px',
                  cursor: 'pointer',
                  width: '35px',
                  height: '35px',
                  borderRadius: '50%'
                }}
              >
                ×
              </button>
              <video 
                controls 
                autoPlay
                style={{
                  width: 'auto',
                  height: 'auto',
                  maxWidth: '90vw',
                  maxHeight: '90vh',
                  objectFit: 'contain' // Garde les proportions originales
                }}
              >
                <source src={NurseVideo} type="video/mp4" />
                Votre navigateur ne supporte pas la vidéo.
              </video>
            </div>
          </div>
        )}

    </div>

      {/* <h3>Wylo-congés</h3>
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
      </ul> */}

    </>
  );
}
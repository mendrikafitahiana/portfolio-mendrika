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

  // Animation au scroll - SEULEMENT CE CODE EST AJOUTÉ
  useEffect(() => {
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('[data-animate-el]');
      
      elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight - 100) {
          element.classList.add('animated');
        }
      });
    };

    animateOnScroll();
    window.addEventListener('scroll', animateOnScroll);
    
    return () => {
      window.removeEventListener('scroll', animateOnScroll);
    };
  }, []);

  const renderModal = (modalId, image, title, description, details, techStack, demoAction) => (
    activeModal === modalId && (
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
          zIndex: 9999,
          padding: '20px',
          overflowY: 'auto'
        }}
      >
        <div 
          className="modal-popup modal-responsive"
          onClick={(e) => e.stopPropagation()}
          style={{
            display: 'flex',
            flexDirection: 'column',
            maxWidth: '800px',
            maxHeight: '90vh',
            width: '100%',
            background: 'white',
            borderRadius: '8px',
            overflow: 'auto',
            position: 'relative'
          }}
        >
          <button
            onClick={closeModal}
            className="modal-close-btn"
            style={{
              position: 'absolute',
              top: '10px',
              right: '15px',
              background: 'rgba(0,0,0,0.5)',
              border: 'none',
              fontSize: '28px',
              cursor: 'pointer',
              zIndex: 10,
              color: 'white',
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            ×
          </button>

          <div style={{
            flex: '0 0 auto',
            width: '100%',
            minHeight: '150px',
            maxHeight: '300px'
          }}>
            <img 
              src={image} 
              alt={title}
              style={{
                width: '100%',
                height: '100%',
                maxHeight: '300px',
                objectFit: 'contain',
                backgroundColor: 'black',
              }}
            />
          </div>

          <div className="modal-popup__desc modal-content-responsive">
            <h5 style={{ marginTop: 0 }}>{title}</h5>
            <p>{description}</p>
            <ul>
              {details.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>
            <ul className="modal-popup__cat">
              {techStack.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
          </div>

          <a 
            href={demoAction.url || "#"} 
            onClick={demoAction.onClick}
            target={demoAction.target}
            className="modal-popup__details"
          >
            DEMONSTRATION
          </a>
        </div>
      </div>
    )
  );

  return (
    <>
      <section className="s-intro target-section" id="projets">
        <div className="row intro-content wide">
          <div className="column">
            <h1 className="text-huge-title">
              Projets
            </h1>
          </div>

          <ul className="intro-social">
            <li><a href="mailto:ramilisonfita24@gmail.com">Email</a></li>
            <li><a href="https://github.com/mendrikafitahiana" target="_blank" rel="noopener noreferrer">Github</a></li>
            <li><a href="https://www.linkedin.com/in/ramilison-mendrika-fitahiana/" target="_blank" rel="noopener noreferrer">Linkedin</a></li>
          </ul>
        </div>
      </section>

      <div className="row works-portfolio" data-animate-block>
        <div className="column lg-12">
          <ul className="folio-list row block-lg-one-half block-stack-on-1000" style={{cursor: "pointer"}}>

            <li className="folio-list__item column" data-animate-el>
              <div className="folio-list__item-link" onClick={(e) => openModal('modal-01', e)}>
                <div className="folio-list__item-pic">
                  <img 
                    src={NurseApp} 
                    srcSet={`${NurseApp} 1x, ${NurseApp} 2x`}  
                    alt=""
                    style={{
                      objectFit: 'contain',
                      objectPosition: 'center'
                    }}
                  />
                </div>
                
                <div className="folio-list__item-text">
                  <div className="folio-list__item-cat">application mobile</div>
                  <div className="folio-list__item-title">NurseApp</div>
                </div>
              </div>
            </li>

            <li className="folio-list__item column" data-animate-el>
              <div className="folio-list__item-link" onClick={(e) => openModal('modal-02', e)}>
                <div className="folio-list__item-pic">
                  <img 
                    src={Devinsider} 
                    srcSet={`${Devinsider} 1x, ${Devinsider} 2x`}  
                    alt=""
                    style={{
                      objectFit: 'contain',
                      objectPosition: 'center'
                    }}
                  />
                </div>
                
                <div className="folio-list__item-text">
                  <div className="folio-list__item-cat">application web</div>
                  <div className="folio-list__item-title">Devinsider</div>
                </div>
              </div>
            </li>

            <li className="folio-list__item column" data-animate-el>
              <div className="folio-list__item-link" onClick={(e) => openModal('modal-03', e)}>
                <div className="folio-list__item-pic">
                  <img 
                    src={Moov} 
                    srcSet={`${Moov} 1x, ${Moov} 2x`} 
                    alt=""
                    style={{
                      objectFit: 'contain',
                      objectPosition: 'center'
                    }}
                  />
                </div>
                
                <div className="folio-list__item-text">
                  <div className="folio-list__item-cat">application mobile</div>
                  <div className="folio-list__item-title">Moov</div>
                </div>
              </div>
            </li>

            <li className="folio-list__item column" data-animate-el>
              <div className="folio-list__item-link" onClick={(e) => openModal('modal-04', e)}>
                <div className="folio-list__item-pic">
                  <img 
                    src={WyloConge} 
                    srcSet={`${WyloConge} 1x, ${WyloConge} 2x`} 
                    alt=""
                    style={{
                      objectFit: 'contain',
                      objectPosition: 'center'
                    }}
                  />
                </div>
                
                <div className="folio-list__item-text">
                  <div className="folio-list__item-cat">application web</div>
                  <div className="folio-list__item-title">Wylo-congés</div>
                </div>
              </div>
            </li>

          </ul>
        </div>

        {renderModal(
          'modal-01',
          NurseApp,
          'NurseApp',
          'Application pour optimiser la gestion des tournées des infirmiers à domicile.',
          [
            'Projet en équipe (avec 2 développeurs backend, 2 développeurs frontend, 1 designer, 1 lead tech).',
            'Contribution dans la réalisation de la base de données complète du projet.',
            'Développement des APIs backend pour les différents modules : patients, tournées, visites, gestion utilisateur.',
            'Contribution au déploiement du backend de l\'application.'
          ],
          ['Nodejs/Express', 'React native', 'MySQL', 'Firebase', 'GitHub'],
          { onClick: () => setShowVideoNurse(true) }
        )}

        {renderModal(
          'modal-02',
          Devinsider,
          'Devinsider',
          'Application pour mettre en place des relations entre les profils ISV/Investisseurs/OEM.',
          [
            'Projet en équipe (avec 2 développeurs backend, 2 développeurs frontend, 1 designer).',
            'Développement des APIs backend pour les différents modules : notifications, corporate development, community, strategic partnerships; dans tous les profils (ISV/Investisseurs/OEM).',
            'Intégration des APIs dans l\'application web et validation des fonctionnalités.',
            'Contribution au déploiement CI/CD de l\'application web.'
          ],
          ['Symfony', 'React', 'MySQL', 'Docker', 'GitLab', 'CI/CD'],
          { url: 'https://www.devinsider.com', target: '_blank' }
        )}

        {renderModal(
          'modal-03',
          Moov,
          'Moov',
          'Application mobile pour la gestion et la réservation d\'un VTC.',
          [
            'Collaboration avec un designer sur la conception et l\'expérience utilisateur.',
            'Réalisation de la base de données complète du projet.',
            'Développement des APIs backend pour les rôles conducteur et client : réservation, gestion des trajets, notifications, etc.',
            'Intégration des APIs et mise en place des fonctionnalités principales.',
            'Mise en production de l\'application mobile sur les plateformes cibles (Android/iOS).'
          ],
          ['Node.js/Express', 'Ionic/React', 'PostgreSQL', 'GitHub'],
          { onClick: () => setShowVideoMoov(true) }
        )}

        {renderModal(
          'modal-04',
          WyloConge,
          'Wylo-congés',
          'Application interne pour la gestion de congés et d\'absences au sein de l\'entreprise.',
          [
            'Responsable unique du développement (collaboration uniquement avec un designer)',
            'Contribution à la conception complète de la base de données du projet',
            'Développement des APIs backend couvrant l\'ensemble des modules : congés, absences, analyses et statistiques globales.',
            'Intégration des services APIs dans toutes les fonctionnalités du projet.',
            'Contribution au déploiement de l\'application web.'
          ],
          ['Symfony', 'React', 'MySQL', 'GitLab'],
          { onClick: () => setShowVideoConge(true) }
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
              zIndex: 10000,
              padding: '20px'
            }}
          >
            <div 
              onClick={(e) => e.stopPropagation()}
              style={{ 
                position: 'relative',
                width: '100%',
                maxWidth: '800px'
              }}
            >
              <button
                onClick={() => setShowVideoConge(false)}
                style={{
                  position: 'absolute',
                  top: '-50px',
                  right: '0',
                  background: 'black',
                  color: 'white',
                  border: 'none',
                  fontSize: '24px',
                  cursor: 'pointer',
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%'
                }}
              >
                ×
              </button>
              <video 
                controls 
                autoPlay
                style={{
                  width: '100%',
                  height: 'auto',
                  maxHeight: '80vh'
                }}
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
              zIndex: 10000,
              padding: '20px'
            }}
          >
            <div 
              onClick={(e) => e.stopPropagation()}
              style={{ 
                position: 'relative',
                width: '100%',
                maxWidth: '800px'
              }}
            >
              <button
                onClick={() => setShowVideoMoov(false)}
                style={{
                  position: 'absolute',
                  top: '-50px',
                  right: '0',
                  background: 'black',
                  color: 'white',
                  border: 'none',
                  fontSize: '24px',
                  cursor: 'pointer',
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%'
                }}
              >
                ×
              </button>
              <video 
                controls 
                autoPlay
                style={{
                  width: '100%',
                  height: 'auto',
                  maxHeight: '80vh'
                }}
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
              padding: '20px'
            }}
          >
            <div 
              onClick={(e) => e.stopPropagation()}
              style={{ 
                position: 'relative',
                width: '100%',
                maxWidth: '800px'
              }}
            >
              <button
                onClick={() => setShowVideoNurse(false)}
                style={{
                  position: 'absolute',
                  top: '-50px',
                  right: '0',
                  background: 'black',
                  color: 'white',
                  border: 'none',
                  fontSize: '24px',
                  cursor: 'pointer',
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%'
                }}
              >
                ×
              </button>
              <video 
                controls 
                autoPlay
                style={{
                  width: '100%',
                  height: 'auto',
                  maxHeight: '80vh'
                }}
              >
                <source src={NurseVideo} type="video/mp4" />
                Votre navigateur ne supporte pas la vidéo.
              </video>
            </div>
          </div>
        )}
      </div>

      <style>
        {`
          /* SEULEMENT les styles nécessaires pour les animations et le responsive mobile */
          
          /* Animation */
          [data-animate-el] {
            opacity: 0;
            transform: translateY(30px);
            transition: all 0.6s ease-out;
          }

          [data-animate-el].animated {
            opacity: 1;
            transform: translateY(0);
          }

          /* Correction mobile légère - ne modifie pas les tailles d'images */
          @media screen and (max-width: 768px) {
            .folio-list.row {
              display: flex;
              flex-direction: column;
            }
            
            .folio-list__item.column {
              width: 100% !important;
            }
            
            /* Assurer que les images restent visibles */
            .folio-list__item-pic {
              display: flex;
              align-items: center;
              justify-content: center;
            }
            
            .folio-list__item-pic img {
              max-height: 200px;
              width: auto;
            }
          }

          /* Styles responsive pour les modals - très légers */
          @media screen and (max-width: 768px) {
            .modal-responsive {
              max-width: 95vw !important;
              max-height: 85vh !important;
            }

            .modal-content-responsive {
              padding: 20px !important;
            }

            .modal-close-btn {
              width: 35px !important;
              height: 35px !important;
              font-size: 24px !important;
            }
          }

          @media screen and (max-width: 480px) {
            .modal-responsive {
              max-width: 100vw !important;
              max-height: 90vh !important;
              margin: 0;
              border-radius: 0 !important;
            }

            .modal-content-responsive {
              padding: 15px !important;
            }

            .modal-close-btn {
              width: 30px !important;
              height: 30px !important;
              font-size: 20px !important;
              top: 5px !important;
              right: 5px !important;
            }
          }
        `}
      </style>
    </>
  );
}
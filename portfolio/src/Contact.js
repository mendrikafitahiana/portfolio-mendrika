import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSending, setIsSending] = useState(false);
  const [sendStatus, setSendStatus] = useState(null);
  const form = useRef();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);
    setSendStatus(null);

    // REMPLACEZ CES VALEURS PAR LES VÔTRES
    const serviceID = 'service_16qz6lp'; // À remplacer
    const templateID = 'template_8c4thep'; // À remplacer
    const publicKey = '5IMmfaE5EjEY2-DZ9'; // À remplacer

    emailjs.sendForm(serviceID, templateID, form.current, publicKey)
      .then((result) => {
        console.log('Email envoyé avec succès:', result.text);
        setSendStatus('success');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      })
      .catch((error) => {
        console.error("Erreur lors de l'envoi:", error.text);
        setSendStatus('error');
      })
      .finally(() => {
        setIsSending(false);
        
        // Masquer le message de statut après 5 secondes
        setTimeout(() => {
          setSendStatus(null);
        }, 5000);
      });
  };

  return (
    <>
      <section className="s-intro target-section" id="contact">
        <div className="row intro-content wide">
          <div className="column">
            <h1 className="text-huge-title">
              Contact
            </h1>
          </div>

          <ul className="intro-social">
            <li><a href="mailto:ramilisonfita24@gmail.com">Email</a></li>
            <li><a href="https://github.com/mendrikafitahiana" target="_blank" rel="noopener noreferrer">Github</a></li>
            <li><a href="https://www.linkedin.com/in/ramilison-mendrika-fitahiana/" target="_blank" rel="noopener noreferrer">Linkedin</a></li>
          </ul>
        </div>
      </section>

      <section className="contact-section">
        <div className="contact-container">
          <div className="contact-content">
            <div className="contact-info">
              <p className="h1">Travaillons ensemble</p>
              <p>
                Je suis toujours ouverte à discuter de nouveaux projets, d'opportunités de collaboration 
                ou simplement à échanger sur les technologies web.
              </p>
              
              <div className="contact-details">
                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div className="contact-text">
                    <h3>Email</h3>
                    <a href="mailto:ramilisonfita24@gmail.com">ramilisonfita24@gmail.com</a>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div className="contact-text">
                    <h3>Localisation</h3>
                    <p>Lot IAH 50 bis AII Avaratsena Itaosy, Madagascar</p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="fas fa-clock"></i>
                  </div>
                  <div className="contact-text">
                    <h3>Disponibilité</h3>
                    <p>Ouverte à toutes opportunités : Freelance, CDI, CDD ...</p>
                  </div>
                </div>
                
              </div>
            </div>
            
            <div className="contact-form">
              <p className="h2">Envoyez un message</p>
              <form ref={form} onSubmit={handleSubmit}>
                <div className="form-group">
                  <input 
                    type="text" 
                    name="name"
                    placeholder="Votre nom" 
                    value={formData.name}
                    onChange={handleChange}
                    required 
                  />
                </div>
                <div className="form-group">
                  <input 
                    type="email" 
                    name="email"
                    placeholder="Votre email" 
                    value={formData.email}
                    onChange={handleChange}
                    required 
                  />
                </div>
                <div className="form-group">
                  <input 
                    type="text" 
                    name="subject"
                    placeholder="Sujet" 
                    value={formData.subject}
                    onChange={handleChange}
                    required 
                  />
                </div>
                <div className="form-group">
                  <textarea 
                    name="message"
                    placeholder="Votre message" 
                    rows="5" 
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                
                {sendStatus === 'success' && (
                  <div className="status-message success">
                    <i className="fas fa-check-circle"></i> Message envoyé avec succès !
                  </div>
                )}
                {sendStatus === 'error' && (
                  <div className="status-message error">
                    <i className="fas fa-exclamation-circle"></i> Une erreur s'est produite. Veuillez réessayer.
                  </div>
                )}
                
                <button 
                  type="submit" 
                  class="btn btn--medium u-fullwidth"
                  disabled={isSending}
                >
                  {isSending ? (
                    <>
                      <i className="fas fa-spinner fa-spin"></i> Envoi en cours...
                    </>
                  ) : (
                    <>
                      <i className="fas fa-paper-plane"></i> Envoyer le message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .contact-section {
          padding: 80px 0;
          color: #fff;
        }
        
        .contact-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }
        
        .contact-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: start;
        }
        
        // .contact-info .h1 {
        //   font-size: 2.5rem;
        //   margin-bottom: 20px;
        //   background: linear-gradient(45deg, hsla(36, 72%, 60%, 1), hsla(36, 72%, 80%, 1));
        //   -webkit-background-clip: text;
        //   -webkit-text-fill-color: transparent;
        //   background-clip: text;
        // }
        
        // .contact-info > p {
        //   color: #ccc;
        //   line-height: 1.6;
        //   margin-bottom: 40px;
        //   font-size: 1.1rem;
        // }
        
        .contact-details {
          display: flex;
          flex-direction: column;
          gap: 25px;
        }
        
        .contact-item {
          display: flex;
          align-items: center;
          gap: 15px;
        }
        
        .contact-icon {
          width: 50px;
          height: 50px;
          background: linear-gradient(45deg, hsla(36, 72%, 60%, 1), hsla(36, 72%, 80%, 1));
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.2rem;
        }
        
        .contact-text h3 {
          font-size: 20px;
          margin-bottom: 5px;
          color: hsla(36, 72%, 70%, 1);
        }
        
        .contact-text a, .contact-text p {
          color: #ccc;
          text-decoration: none;
          transition: color 0.3s;
        }
        
        .contact-text a:hover {
          color: hsla(36, 72%, 70%, 1);
        }
        
        .contact-form {
          background: #111;
          padding: 40px;
          border-radius: 15px;
          border: 1px solid #222;
        }
        
        // .contact-form .h2 {
        //   font-size: 2rem;
        //   margin-bottom: 30px;
        //   color: #fff;
        // }
        
        .form-group {
          margin-bottom: 20px;
          opacity: 0;
          animation: fadeInUp 0.5s ease forwards;
        }
        
        .form-group:nth-child(1) { animation-delay: 0.1s; }
        .form-group:nth-child(2) { animation-delay: 0.2s; }
        .form-group:nth-child(3) { animation-delay: 0.3s; }
        .form-group:nth-child(4) { animation-delay: 0.4s; }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .form-group input, .form-group textarea {
          width: 100%;
          padding: 15px;
          background: #1a1a1a;
          border: 1px solid #333;
          border-radius: 8px;
          color: #fff;
          font-size: 15px;
          transition: all 0.3s ease;
        }
        
        .form-group input:focus, .form-group textarea:focus {
          outline: none;
          border-color: hsla(36, 72%, 70%, 1);
          box-shadow: 0 0 0 2px rgba(197, 155, 95, 0.2);
          transform: translateY(-2px);
        }
        
        .form-group input::placeholder, .form-group textarea::placeholder {
          color: #666;
        }
        
        // .btn {
        //   background: linear-gradient(45deg, hsla(36, 72%, 60%, 1), hsla(36, 72%, 80%, 1));
        //   color: #000;
        //   border: none;
        //   padding: 15px 30px;
        //   border-radius: 8px;
        //   font-size: 1.1rem;
        //   font-weight: 600;
        //   cursor: pointer;
        //   transition: all 0.3s ease;
        //   position: relative;
        //   overflow: hidden;
        //   display: flex;
        //   align-items: center;
        //   justify-content: center;
        //   gap: 10px;
        // }
        
        // .btn:hover:not(:disabled) {
        //   transform: translateY(-3px);
        //   box-shadow: 0 10px 20px rgba(197, 155, 95, 0.3);
        // }
        
        // .btn:active:not(:disabled) {
        //   transform: translateY(-1px);
        //   box-shadow: 0 5px 10px rgba(197, 155, 95, 0.3);
        // }
        
        .btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }
        
        // .btn::after {
        //   content: "";
        //   position: absolute;
        //   top: 0;
        //   left: -100%;
        //   width: 100%;
        //   height: 100%;
        //   background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
        //   transition: left 0.5s;
        // }
        
        // .btn:hover:not(:disabled)::after {
        //   left: 100%;
        // }
        
        .status-message {
          padding: 15px;
          margin-bottom: 20px;
          border-radius: 8px;
          text-align: center;
          font-weight: 500;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
        }
        
        .status-message.success {
          background-color: rgba(46, 204, 113, 0.2);
          color: #2ecc71;
          border: 1px solid #2ecc71;
        }
        
        .status-message.error {
          background-color: rgba(231, 76, 60, 0.2);
          color: #e74c3c;
          border: 1px solid #e74c3c;
        }
        
        /* Responsive */
        @media (max-width: 968px) {
          .contact-content {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          
          .contact-info .h1 {
            font-size: 2rem;
          }
        }
        
        @media (max-width: 480px) {
          .contact-form {
            padding: 25px;
          }
          
          .contact-icon {
            width: 40px;
            height: 40px;
            font-size: 1rem;
          }
        }
      `}</style>
    </>
  );
}
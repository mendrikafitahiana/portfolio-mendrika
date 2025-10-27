export default function Competences() {

  const containerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '60px',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '40px 20px'
  };

  const circleStyle = {
    position: 'relative',
    width: '350px',
    height: '350px',
    border: '3px solid rgba(100, 255, 218, 0.4)',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto'
  };

  const centerStyle = {
    textAlign: 'center',
    zIndex: 2
  };

  const centerTitleStyle = {
    fontSize: '22px',
    color: '#64ffda',
    marginBottom: '15px',
    fontWeight: 'bold',
  };

  const centerSubtitleStyle = {
    fontSize: '1rem',
    color: 'rgba(255, 255, 255, 0.7)',
    margin: 0
  };

  const skillsContainerStyle = {
    position: 'absolute',
    width: '100%',
    height: '100%'
  };

  const getSkillStyle = (index, totalSkills) => {
    const angle = (index / totalSkills) * 2 * Math.PI;
    const radius = 150;
    
    const top = 50 - Math.cos(angle) * radius / 350 * 100 + '%';
    const left = 50 + Math.sin(angle) * radius / 350 * 100 + '%';
    
    const colors = [
      'rgba(255, 107, 107, 0.9)', 
      'rgba(78, 205, 196, 0.9)', 
      'rgba(255, 159, 243, 0.9)', 
      'rgba(84, 160, 255, 0.9)', 
      'rgba(255, 195, 113, 0.9)', 
      'rgba(129, 236, 236, 0.9)',
      'rgba(241, 235, 239, 0.84)'
    ];
    
    return {
      position: 'absolute',
      top: top,
      left: left,
      background: colors[index % colors.length],
      color: 'white',
      padding: '8px 12px',
      borderRadius: '15px',
      fontSize: '14px',
      fontWeight: 'bold',
      transform: 'translate(-50%, -50%)',
      whiteSpace: 'nowrap',
      animation: `float${index} 4s ease-in-out infinite`,
      cursor: 'default',
      transition: 'all 0.3s ease',
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
      zIndex: 1
    };
  };

  const skillsData = [
    {
      category: 'Backend',
      subtitle: 'Frameworks & API',
      skills: ['Symfony', 'Node.js/Express', 'CodeIgniter', 'Spring Boot', 'API REST']
    },
    {
      category: 'Frontend',
      subtitle: 'Frameworks & Langages',
      skills: ['React', 'Angular', 'Ionic', 'HTML', 'JavaScript', 'TypeScript', 'CSS']
    },
    {
      category: 'Database',
      subtitle: 'Bases de données',
      skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'SQL Server', 'Firebase']
    },
    {
      category: 'Outils',
      subtitle: 'Versionning & collaboration, Test API',
      skills: ['Git', 'GitLab', 'GitHub', 'Postman', 'VsCode']
    },
    {
      category: 'Conteneurisation et DevOps',
      subtitle: 'Conteuneur & déploiement',
      skills: ['CI/CD', 'Docker', 'Render', 'Railway']
    },
    {
      category: 'Sécurité',
      skills: ['JWT', 'CORS']
    },
  ];
  
  return (
    <>
      <section className="s-intro target-section" id="competences">
        <div className="row intro-content wide">
          <div className="column">
            <h1 className="text-huge-title">
              Compétences
            </h1>
          </div>

          <ul className="intro-social">
            <li><a href="mailto:ramilisonfita24@gmail.com">Email</a></li>
            <li><a href="https://github.com/mendrikafitahiana" target="_blank" rel="noopener noreferrer">Github</a></li>
            <li><a href="https://www.linkedin.com/in/ramilison-mendrika-fitahiana/" target="_blank" rel="noopener noreferrer">Linkedin</a></li>
          </ul>
        </div>
      </section>

      <div className="column lg-12" data-animate-block>
        <div className="skills-container-responsive" style={containerStyle}>
          {skillsData.map((category, categoryIndex) => (
            <div key={category.category} className="circle-responsive" style={circleStyle}>
              <div style={centerStyle}>
                <h3 className="circle-title" style={centerTitleStyle}>{category.category}</h3>
                <p className="circle-subtitle" style={centerSubtitleStyle}>{category.subtitle}</p>
              </div>
              
              <div style={skillsContainerStyle}>
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skill} 
                    className="skill-badge"
                    style={getSkillStyle(skillIndex, category.skills.length)}
                    onMouseEnter={(e) => {
                      e.target.style.transform = 'translate(-50%, -50%) scale(1.15)';
                      e.target.style.zIndex = '10';
                      e.target.style.boxShadow = '0 6px 15px rgba(0, 0, 0, 0.4)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = 'translate(-50%, -50%) scale(1)';
                      e.target.style.zIndex = '1';
                      e.target.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.3)';
                    }}
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>
        {`
          @keyframes float0 {
            0%, 100% { transform: translate(-50%, -50%) translateY(0px); }
            50% { transform: translate(-50%, -50%) translateY(-8px); }
          }
          @keyframes float1 {
            0%, 100% { transform: translate(-50%, -50%) translateY(0px); }
            50% { transform: translate(-50%, -50%) translateY(-10px); }
          }
          @keyframes float2 {
            0%, 100% { transform: translate(-50%, -50%) translateY(0px); }
            50% { transform: translate(-50%, -50%) translateY(-7px); }
          }
          @keyframes float3 {
            0%, 100% { transform: translate(-50%, -50%) translateY(0px); }
            50% { transform: translate(-50%, -50%) translateY(-9px); }
          }
          @keyframes float4 {
            0%, 100% { transform: translate(-50%, -50%) translateY(0px); }
            50% { transform: translate(-50%, -50%) translateY(-11px); }
          }
          @keyframes float5 {
            0%, 100% { transform: translate(-50%, -50%) translateY(0px); }
            50% { transform: translate(-50%, -50%) translateY(-6px); }
          }
          @keyframes float6 {
            0%, 100% { transform: translate(-50%, -50%) translateY(0px); }
            50% { transform: translate(-50%, -50%) translateY(-15px); }
          }

          /* Responsive styles pour tablettes */
          @media screen and (max-width: 1024px) {
            .skills-container-responsive {
              gap: 30px !important;
              padding: 25px 15px 60px 15px !important;
            }
            
            .circle-responsive {
              width: 250px !important;
              height: 250px !important;
            }
            
            .circle-title {
              font-size: 18px !important;
            }
            
            .circle-subtitle {
              font-size: 0.85rem !important;
            }
            
            .skill-badge {
              font-size: 11px !important;
              padding: 5px 9px !important;
            }
          }

          /* Responsive styles pour mobile */
          @media screen and (max-width: 768px) {
            .skills-container-responsive {
              grid-template-columns: 1fr !important;
              gap: 35px !important;
              padding: 20px 10px 80px 10px !important;
            }
            
            .circle-responsive {
              width: 220px !important;
              height: 220px !important;
              border-width: 2px !important;
            }
            
            .circle-title {
              font-size: 16px !important;
              margin-bottom: 8px !important;
            }
            
            .circle-subtitle {
              font-size: 0.75rem !important;
              padding: 0 10px;
              line-height: 1.2;
            }
            
            .skill-badge {
              font-size: 10px !important;
              padding: 5px 7px !important;
              border-radius: 10px !important;
            }
          }

          /* Responsive styles pour petits téléphones */
          @media screen and (max-width: 480px) {
            .skills-container-responsive {
              gap: 30px !important;
              padding: 15px 5px 100px 5px !important;
            }
            
            .circle-responsive {
              width: 190px !important;
              height: 190px !important;
            }
            
            .circle-title {
              font-size: 15px !important;
            }
            
            .circle-subtitle {
              font-size: 0.7rem !important;
              line-height: 1.1;
            }
            
            .skill-badge {
              font-size: 9px !important;
              padding: 4px 6px !important;
            }
          }

          /* Très petits écrans */
          @media screen and (max-width: 360px) {
            .skills-container-responsive {
              padding: 10px 5px 120px 5px !important;
              gap: 25px !important;
            }
            
            .circle-responsive {
              width: 170px !important;
              height: 170px !important;
            }
            
            .circle-title {
              font-size: 14px !important;
            }
            
            .circle-subtitle {
              font-size: 0.65rem !important;
            }
            
            .skill-badge {
              font-size: 8px !important;
              padding: 3px 5px !important;
            }
          }
        `}
      </style>
    </>
  );
}
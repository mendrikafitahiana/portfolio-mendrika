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
    width: '350px',  // Cercle beaucoup plus grand
    height: '350px', // Cercle beaucoup plus grand
    border: '3px solid rgba(100, 255, 218, 0.4)',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    // background: 'radial-gradient(circle at center, rgba(100, 255, 218, 0.15), transparent)',
    // boxShadow: '0 0 30px rgba(100, 255, 218, 0.2)',
    margin: '0 auto'
  };

  const centerStyle = {
    textAlign: 'center',
    zIndex: 2
  };

  const centerTitleStyle = {
    fontSize: '22px', // Texte plus grand
    color: '#64ffda',
    marginBottom: '15px',
    fontWeight: 'bold',
    // textShadow: '0 0 10px rgba(100, 255, 218, 0.5)'
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
    // Positionner les compétences uniformément autour du cercle
    const angle = (index / totalSkills) * 2 * Math.PI;
    const radius = 150; // Distance du centre (augmentée pour le cercle plus grand)
    
    const top = 50 - Math.cos(angle) * radius / 350 * 100 + '%';
    const left = 50 + Math.sin(angle) * radius / 350 * 100 + '%';
    
    const colors = [
      'rgba(255, 107, 107, 0.9)', 
      'rgba(78, 205, 196, 0.9)', 
      'rgba(255, 159, 243, 0.9)', 
      'rgba(84, 160, 255, 0.9)', 
      'rgba(255, 195, 113, 0.9)', 
      'rgba(129, 236, 236, 0.9)'
    ];
    
    return {
      position: 'absolute',
      top: top,
      left: left,
      background: colors[index % colors.length],
      color: 'white',
      padding: '8px 12px', // Texte plus grand avec plus d'espace
      borderRadius: '15px',
      fontSize: '14px', // Texte plus grand
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
      <section class="s-intro target-section" id="projets">

        <div class="row intro-content wide">

          <div class="column">
              <h1 class="text-huge-title">
                Compétences
              </h1>
          </div>

          <ul class="intro-social">
            <li><a href="mailto:ramilisonfita24@gmail.com">Email</a></li>
            <li><a href="https://github.com/mendrikafitahiana" target="_blank" rel="noopener noreferrer">Github</a></li>
            <li><a href="https://www.linkedin.com/in/ramilison-mendrika-fitahiana/" target="_blank" rel="noopener noreferrer">Linkedin</a></li>
          </ul>

        </div>

      </section>

        <div class="column lg-12" data-animate-block>
            
            <div className="column lg-12" data-animate-block>
              <div style={containerStyle}>
                {skillsData.map((category, categoryIndex) => (
                  <div key={category.category} style={circleStyle}>
                    <div style={centerStyle}>
                      <h3 style={centerTitleStyle}>{category.category}</h3>
                      <p style={centerSubtitleStyle}>{category.subtitle}</p>
                    </div>
                    
                    <div style={skillsContainerStyle}>
                      {category.skills.map((skill, skillIndex) => (
                        <div 
                          key={skill} 
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
        `}
      </style>
    </>
  );
}
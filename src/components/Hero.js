import React from 'react';
import './Hero.css';

export default function Hero(){
  const profileSrc = process.env.PUBLIC_URL + '/profile.jpg';
  const fallback = 'https://via.placeholder.com/360x360.png?text=Profile';

  const handleImgError = (e) => {
    e.currentTarget.src = fallback;
  };


  return (
    <section id="home" className="hero">
      <div className="hero-inner">
        <div className="hero-left">
          <p className="hello">Hello, It's Me</p>
          <h1 className="name">Dewmi Wickramasinghe</h1>
          <h3 className="role">And I'm a <span>Intern Software Engineer</span><span className="end"></span></h3>
          <p className="desc">Software Engineering Undergraduate at SLIIT | Seeking Software Engineer Internship | Passionate about Full-Stack & Mobile App Development</p>

          <div className="actions">
            <button
                className="btn-primary"
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = process.env.PUBLIC_URL + "/cv.pdf";
                  link.download = "Dewmi_Wickramasinghe_CV.pdf";
                  link.click();
                }}
              >
                Download CV
              </button>
            <div className="socials">
              <a className="s" href="https://web.facebook.com/anshika.dissanayake" target="_blank" rel="noopener noreferrer" title="Facebook" aria-label="Facebook">
                <img src={process.env.PUBLIC_URL + '/facebook.png'} alt="Facebook" className="s-icon" />
              </a>
              <a className="s" href="https://github.com/dewmiwickramasinghe" target="_blank" rel="noopener noreferrer" title="GitHub" aria-label="GitHub">
                <img src={process.env.PUBLIC_URL + '/github.png'} alt="GitHub" className="s-icon" />
              </a>
              <a className="s" href="https://www.instagram.com/dewsankalpana/" target="_blank" rel="noopener noreferrer" title="Instagram" aria-label="Instagram">
                <img src={process.env.PUBLIC_URL + '/instergram.jpeg'} alt="Instagram" className="s-icon" />
              </a>
              <a className="s" href="https://www.linkedin.com/in/dewmi-wickramasinghe-24b235367/" target="_blank" rel="noopener noreferrer" title="LinkedIn" aria-label="LinkedIn">
                <img src={process.env.PUBLIC_URL + '/linkdin.png'} alt="LinkedIn" className="s-icon" />
              </a>
            </div>
          </div>
        </div>

        <div className="hero-right">
          <div className="profile-ring">
            <img src={profileSrc} alt="profile" onError={handleImgError} />
          </div>
        </div>
      </div>
    </section>
  );
}

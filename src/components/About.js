import React, { useEffect, useRef, useState } from 'react';
import './About.css';

export default function About() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            obs.unobserve(el);
          }
        });
      },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="about" className={`about-section ${visible ? 'visible' : ''}`} ref={ref}>
      <div className="about-inner">
        <h2>About Me</h2>
        <div className="about-grid">
          <div className="about-text">
            <p>• I’m Dewmi Wickramasinghe, an undergraduate pursuing a BSc (Hons) in Information Technology specializing in Software Engineering at SLIIT. I’m passionate about building meaningful digital solutions that improve everyday life.</p>
            <p>• I enjoy working across both web and mobile development, with hands-on experience in full-stack MERN applications, Kotlin-based Android apps, and Java/JSP web systems.</p>
            <p>• I’ve developed projects such as a Pet Care Center Management System, a Personal Finance Tracker mobile app, and an E-commerce platform, focusing on real-world problem solving, clean UI/UX, and reliable functionality.</p>
            <p>• I love exploring frontend design, backend logic, and database management, and I’m constantly learning new technologies to expand my skills.</p>
            <p>• I’m also interested in financial systems, automation, and improving efficiency through well-designed software features like order handling, budget tracking, and report generation.</p>
            <p>• My goal is to continue growing as a developer by working on impactful projects, collaborating with teams, and building software that is both efficient and user-focused.</p>
            <p>• When I’m not coding, I spend time learning new tools, improving UI designs, and exploring ways to make applications more intuitive and user-friendly.</p>
          </div>
          <div className="about-aside">
            <img src={process.env.PUBLIC_URL + '/aboutme.jpg'} alt="Dewmi Wickramasinghe" />
          </div>
        </div>
      </div>
    </section>
  );
}

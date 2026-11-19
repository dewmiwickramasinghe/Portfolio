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
      { threshold: 0, rootMargin: '0px 0px -60px 0px' }
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
            <p>• I’m Dewmi Wickramasinghe, a Software Engineering undergraduate at SLIIT with six months of industry experience as a Web Developer Intern at XESS Global (Pvt) Ltd.</p>
            <p>• I have experience working across CRM, fleet management, attendance, asset management, APIs, dashboards, event systems, and corporate websites.</p>
            <p>• My strengths include requirements analysis, business workflow understanding, functional and non-functional requirements, acceptance criteria, QA/testing, root-cause analysis, and technical documentation.</p>
            <p>• I connect business needs with technical solutions by reviewing existing workflows, data flows, system behaviour, and project requirements before implementation.</p>
            <p>• I am proficient in Agile and SDLC concepts and have hands-on experience using Jira, Trello, ClickUp, Git, GitHub, Postman, Figma, and REST APIs.</p>
            <p>• I am seeking opportunities in Project Management, Project Coordination, or Business Analysis where I can contribute strong analytical thinking, communication, collaboration, and problem-solving skills.</p>
          </div>
          <div className="about-aside">
            <img src={process.env.PUBLIC_URL + '/aboutme.jpg'} alt="Dewmi Wickramasinghe" />
          </div>
        </div>
      </div>
    </section>
  );
}

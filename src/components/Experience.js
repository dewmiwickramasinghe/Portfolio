import React, { useEffect, useRef, useState } from 'react';
import './Experience.css';

export default function Experience() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        observer.unobserve(entry.target);
      }
    }, { threshold: 0, rootMargin: '0px 0px -60px 0px' });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" ref={ref} className={`experience-section ${visible ? 'visible' : ''}`}>
      <div className="experience-inner">
        <h2>Experience & Education</h2>
        <div className="timeline">
          <article className="experience-card">
            <header>
              <div>
                <h3>Web Developer Intern</h3>
                <h4>XESS Global (Pvt) Ltd · Kiribathgoda, Sri Lanka</h4>
              </div>
              <time>Feb 2026 – Jul 2026</time>
            </header>
            <ul>
              <li>Worked across CRM, fleet management, attendance, asset management, APIs, dashboards, event systems, and corporate websites.</li>
              <li>Reviewed workflows, business logic, data flows, and requirements to connect business needs with technical solutions.</li>
              <li>Prepared and reviewed functional and non-functional requirements, acceptance criteria, validation conditions, and expected behavior.</li>
              <li>Enhanced Perfex CRM and operational modules covering proposals, calculations, vehicles, drivers, vendors, depreciation, and assets.</li>
              <li>Supported API development and testing, documented request/response structures, investigated bugs, and produced project documentation.</li>
            </ul>
          </article>
        </div>

        <div className="education-grid">
          <article className="education-card">
            <h3>Education</h3>
            <p><strong>BSc (Hons) in Information Technology</strong></p>
            <p>Specialising in Software Engineering · Sri Lanka Institute of Information Technology (SLIIT)</p>
            <p>Feb 2023 – Present</p>
            <p><strong>G.C.E. Advanced Level – Mathematics Stream</strong></p>
            <p>S. Thomas’ Girls’ High School, Matara · 2021</p>
          </article>
          <article className="certification-card">
            <h3>Courses & Certifications</h3>
            <p><strong>Python Programming</strong> · University of Moratuwa</p>
            <p><strong>English Course</strong> · British Council Sri Lanka</p>
            <p><strong>Web Development</strong> · University of Moratuwa</p>
          </article>
        </div>
      </div>
    </section>
  );
}

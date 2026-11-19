import React, { useEffect, useRef, useState } from 'react';
import './Contact.css';

export default function Contact() {
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
    <section id="contact" ref={ref} className={`contact-section ${visible ? 'visible' : ''}`}>
      <div className="contact-inner">
        <h2>Get In Touch</h2>
        <p className="contact-sub">Let's connect and create something amazing</p>

        <div className="contact-container">
          <div className="contact-info">
            <div className="info-card">
              <div className="info-icon">📞</div>
              <h3>Phone</h3>
              <a href="tel:0702341229">0702341229</a>
            </div>

            <div className="info-card">
              <div className="info-icon">✉️</div>
              <h3>Email</h3>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=dewmiwickramasinghe55@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                dewmiwickramasinghe55@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

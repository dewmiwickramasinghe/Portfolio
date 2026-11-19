import React, { useEffect, useRef } from 'react';
import './Hero.css';

export default function Hero(){
  const profileSrc = process.env.PUBLIC_URL + '/profile.jpg';
  const fallback = 'https://via.placeholder.com/360x360.png?text=Profile';
  const canvasRef = useRef(null);

  const handleImgError = (e) => {
    e.currentTarget.src = fallback;
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;
    let w = canvas.width = canvas.offsetWidth;
    let h = canvas.height = canvas.offsetHeight;

    // --- Particles ---
    const PARTICLE_COUNT = 90;
    const particles = Array.from({ length: PARTICLE_COUNT }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 1.8 + 0.4,
      dx: (Math.random() - 0.5) * 0.35,
      dy: (Math.random() - 0.5) * 0.35,
      alpha: Math.random() * 0.5 + 0.2,
      color: `hsl(${180 + Math.random() * 60}, 90%, 70%)`,
    }));

    // --- Shooting stars ---
    const MAX_STARS = 3;
    let stars = [];
    function spawnStar() {
      return {
        x: Math.random() * w,
        y: Math.random() * h * 0.5,
        len: Math.random() * 120 + 60,
        speed: Math.random() * 8 + 6,
        angle: Math.PI / 4 + (Math.random() - 0.5) * 0.3,
        alpha: 1,
        active: true,
      };
    }
    let starTimer = 0;

    // --- Aurora blobs ---
    let t = 0;

    function drawAurora() {
      // Three slow-moving aurora blobs
      const blobs = [
        { cx: w * 0.15, cy: h * 0.3, rx: w * 0.5, ry: h * 0.35, hue: 190, offset: 0 },
        { cx: w * 0.75, cy: h * 0.6, rx: w * 0.45, ry: h * 0.3, hue: 260, offset: 2.1 },
        { cx: w * 0.5,  cy: h * 0.15, rx: w * 0.4, ry: h * 0.25, hue: 170, offset: 4.2 },
      ];

      blobs.forEach(b => {
        const ox = Math.sin(t * 0.0004 + b.offset) * w * 0.06;
        const oy = Math.cos(t * 0.0003 + b.offset) * h * 0.06;
        const grad = ctx.createRadialGradient(
          b.cx + ox, b.cy + oy, 0,
          b.cx + ox, b.cy + oy, Math.max(b.rx, b.ry)
        );
        grad.addColorStop(0,   `hsla(${b.hue}, 90%, 55%, 0.13)`);
        grad.addColorStop(0.5, `hsla(${b.hue + 30}, 85%, 50%, 0.06)`);
        grad.addColorStop(1,   `hsla(${b.hue}, 90%, 55%, 0)`);
        ctx.save();
        ctx.scale(1, b.ry / b.rx);
        ctx.beginPath();
        ctx.arc(b.cx + ox, (b.cy + oy) * (b.rx / b.ry), b.rx, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();
        ctx.restore();
      });
    }

    function drawGrid() {
      const COLS = 20, ROWS = 12;
      const cw = w / COLS, ch = h / ROWS;
      ctx.strokeStyle = 'rgba(79,209,197,0.04)';
      ctx.lineWidth = 1;
      for (let c = 0; c <= COLS; c++) {
        ctx.beginPath();
        ctx.moveTo(c * cw, 0);
        ctx.lineTo(c * cw, h);
        ctx.stroke();
      }
      for (let r = 0; r <= ROWS; r++) {
        ctx.beginPath();
        ctx.moveTo(0, r * ch);
        ctx.lineTo(w, r * ch);
        ctx.stroke();
      }
    }

    function drawParticles() {
      particles.forEach((p, i) => {
        // Connect nearby particles
        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j];
          const dist = Math.hypot(p.x - q.x, p.y - q.y);
          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.strokeStyle = `rgba(79,209,197,${0.08 * (1 - dist / 100)})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.fill();
        ctx.globalAlpha = 1;

        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        if (p.y > h) p.y = 0;
      });
    }

    function drawShootingStars() {
      starTimer++;
      if (starTimer > 90 && stars.length < MAX_STARS && Math.random() < 0.03) {
        stars.push(spawnStar());
        starTimer = 0;
      }
      stars = stars.filter(s => s.active);
      stars.forEach(s => {
        const tail = { x: s.x - Math.cos(s.angle) * s.len, y: s.y - Math.sin(s.angle) * s.len };
        const grad = ctx.createLinearGradient(tail.x, tail.y, s.x, s.y);
        grad.addColorStop(0, `rgba(255,255,255,0)`);
        grad.addColorStop(1, `rgba(200,255,255,${s.alpha})`);
        ctx.beginPath();
        ctx.moveTo(tail.x, tail.y);
        ctx.lineTo(s.x, s.y);
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.5;
        ctx.stroke();
        s.x += Math.cos(s.angle) * s.speed;
        s.y += Math.sin(s.angle) * s.speed;
        s.alpha -= 0.012;
        if (s.alpha <= 0 || s.x > w + 50 || s.y > h + 50) s.active = false;
      });
    }

    function loop(ts) {
      t = ts;
      ctx.clearRect(0, 0, w, h);
      drawGrid();
      drawAurora();
      drawParticles();
      drawShootingStars();
      animId = requestAnimationFrame(loop);
    }
    animId = requestAnimationFrame(loop);

    const onResize = () => {
      w = canvas.width = canvas.offsetWidth;
      h = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener('resize', onResize);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <section id="home" className="hero">
      <canvas ref={canvasRef} className="hero-canvas" aria-hidden="true" />
      <div className="hero-inner">
        <div className="hero-left">
          <p className="hello">Hello, It's Me</p>
          <h1 className="name">Dewmi Wickramasinghe</h1>
          <h3 className="role">And I'm a <span>Software Engineering Undergraduate</span><span className="end"></span></h3>
          <p className="desc">Project Management · Business Analysis · Web Development | Experienced in requirements analysis, QA/testing, APIs, dashboards, Agile/SDLC, and operational systems.</p>

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
                <img src={process.env.PUBLIC_URL + '/facebook1.png'} alt="Facebook" className="s-icon" />
              </a>
              <a className="s" href="https://github.com/dewmiwickramasinghe" target="_blank" rel="noopener noreferrer" title="GitHub" aria-label="GitHub">
                <img src={process.env.PUBLIC_URL + '/github.png'} alt="GitHub" className="s-icon" />
              </a>
              <a className="s" href="https://www.instagram.com/dewsankalpana/" target="_blank" rel="noopener noreferrer" title="Instagram" aria-label="Instagram">
                <img src={process.env.PUBLIC_URL + '/instergram1.jpeg'} alt="Instagram" className="s-icon" />
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


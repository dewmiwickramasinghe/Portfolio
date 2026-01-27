import React, { useEffect, useRef, useState } from 'react';
import './Projects.css';
import ProjectModal from './ProjectModal';

const PROJECTS = [
  {
    name: 'Dtracker  Finance Saving App',
    image: 'Dtracker app.png',
    title: 'Dtracker - Personal Finance Tracker',
    date: 'Feb 2025 - May 2025',
    description: 'Developed Dtracker, a Kotlin-based mobile app for tracking and categorizing income and expenses. Enabled users to set monthly budgets with data persistence using SharedPreferences and backup via internal storage.',
    technologies: ['Kotlin', 'XML'],
    tools: ['Android Studio', 'Git'],
    gallery: [
      'gallery/dtracker/dtracker (1).jpg',
      'gallery/dtracker/dtracker (2).jpg',
      'gallery/dtracker/dtracker (3).jpg',
      'gallery/dtracker/dtracker (4).jpg',
      'gallery/dtracker/dtracker (5).jpg',
      'gallery/dtracker/dtracker (6).jpg',
      'gallery/dtracker/dtracker (7).jpg',
      'gallery/dtracker/dtracker (8).jpg',
      'gallery/dtracker/dtracker (9).jpg',
      'gallery/dtracker/dtracker (10).jpg',
      'gallery/dtracker/dtracker (11).jpg'
    ],
    github: 'https://github.com/dewmiwickramasinghe/Dtracker'
  },
  { 
    name: 'Pet Care Center System', 
    image: 'petcarecentre.jpg',
    title: 'Pet Care Center Management System',
    date: 'Feb 2025 - May 2025',
    description: 'A full-stack web application for pet care center system. The system supports client registration/login, order and payment management, inventory tracking, and financial operations. Developed financial Management System with features such as order tracking, refund handling, budget handling, order status handling and automated report generation. Focused on improving efficiency and preventing financial errors through real-time monitoring and control.',
    technologies: ['MERN Stack', 'Tailwind CSS'],
    tools: ['VS Code', 'Git', 'Jira', 'MongoDB Compass', 'Postman'],
    gallery: [
      'gallery/petcare/petcare (1).jpg',
      'gallery/petcare/petcare (2).jpg',
      'gallery/petcare/petcare (3).jpg',
      'gallery/petcare/petcare (4).jpg',
      'gallery/petcare/petcare (5).jpg',
      'gallery/petcare/petcare (6).jpg',
      'gallery/petcare/petcare (7).jpg',
      'gallery/petcare/petcare (8).jpg',
      'gallery/petcare/petcare (9).jpg',
      'gallery/petcare/petcare (10).jpg',
      'gallery/petcare/petcare (11).jpg',
      'gallery/petcare/petcare (12).jpg',
      'gallery/petcare/petcare (13).jpg'
    ],
    github: 'https://github.com/dewmiwickramasinghe/Paw-Pet-Care-Center'
  },
  { 
    name: 'WAC Grocery - Ecommerce System', 
    image: 'wacgrocery.png',
    title: 'Budget Shop - Ecommerce Site',
    date: 'Jul 2025 - Nov 2025',
    description: 'Developed Budget shop, a web-based e-commerce platform for purchasing fruits and vegetables. Implemented user shopping features and an admin panel to manage products, orders, customers, and suppliers.',
    technologies: ['Java', 'JSP', 'Bootstrap'],
    tools: ['Eclipse', 'Git'],
    gallery: [
      'gallery/wacgrocery/wcommerce (1).jpg',
      'gallery/wacgrocery/wcommerce (2).jpg',
      'gallery/wacgrocery/wcommerce (3).jpg'
    ],
    github: 'https://github.com/dewmiwickramasinghe/Online_Grocery'
  },
  {
  name: 'Smart Waste Management System',
  image: 'wasteManagementapp.jpg',
  title: 'Smart Waste Management System',
  date: 'Aug 2025 - Nov 2025',
  description:
    'A MERN-based smart waste management solution designed for urban authorities to optimize waste collection, monitor real-time waste levels, and improve resource allocation. The system simulates real-world waste tracking using digital tags/sensors, enabling households and businesses to maintain waste accounts, schedule special collections, track recyclable paybacks, and make online payments. Includes flexible configuration for collection models (weight-based, flat-fee) and analytics dashboards to help authorities plan routes, identify high-waste zones, and improve operational efficiency.',
  technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js (MERN Stack)'],
  tools: ['VS Code', 'Git', 'Jira', 'MongoDB Compass', 'Postman'],
  gallery: [
    'gallery/waste/wastemanagement (1).jpg',
    'gallery/waste/wastemanagement (2).jpg',
    'gallery/waste/wastemanagement (3).jpg',
    'gallery/waste/wastemanagement (4).jpg',
    'gallery/waste/wastemanagement (5).jpg',
    'gallery/waste/wastemanagement (6).jpg',
    'gallery/waste/wastemanagement (7).jpg',
    'gallery/waste/wastemanagement (8).jpg',
    'gallery/waste/wastemanagement (9).jpg',
    'gallery/waste/wastemanagement (10).jpg',
    'gallery/waste/wastemanagement (11).jpg',
    'gallery/waste/wastemanagement (12).jpg',
    'gallery/waste/wastemanagement (13).jpg',
    'gallery/waste/wastemanagement (14).jpg',
    'gallery/waste/wastemanagement (15).jpg',
    'gallery/waste/wastemanagement (16).jpg'
  ],
  github: 'https://github.com/dewmiwickramasinghe/Smart_Waste_Management_System'
  },
  {
  name: 'AquaConnect Mobile Application',
  image: 'aquaconnect.jpg',
  title: 'AquaConnect Mobile Application',
  date: 'Jun 2025 – Sep 2025',
  description:
    'A mobile application designed to improve clean water access and sanitation awareness for rural and urban communities. Includes real-time water quality reporting, clean water source mapping, hygiene education modules, and an NGO/government monitoring dashboard. Built following the full Design Thinking process—user research, ideation, prototyping, testing, development, and promotion. User insights were gathered using surveys and interviews, analyzed through Affinity Mapping, Personas, Empathy Maps, and User Journey Maps. Delivered a high-fidelity Figma prototype with multilingual, low-literacy, and offline-first design principles (EDI-focused). Developed using React Native and Firebase with GIS mapping, photo uploads, blockchain-based transparency, and push notifications. Final delivery included a functional Android .apk, branding kit, and promotional videos for user onboarding and investor presentation.',
  technologies: [
    'React Native',
    'Expo',
    'TypeScript',
    'Firebase (Auth, Firestore, Storage)',
    'React Navigation',
    'AsyncStorage',
    'React Native Maps'
  ],
  tools: ['VS Code', 'Git', 'Figma', 'Firebase Console', 'ESLint', 'Prettier'],
  gallery: [
    'gallery/aquaconnect/aquaconnect (1).jpg',
    'gallery/aquaconnect/aquaconnect (2).jpg',
    'gallery/aquaconnect/aquaconnect (3).jpg',
    'gallery/aquaconnect/aquaconnect (4).jpg',
    'gallery/aquaconnect/aquaconnect (5).jpg',
    'gallery/aquaconnect/aquaconnect (6).jpg',
    'gallery/aquaconnect/aquaconnect (7).jpg',
    'gallery/aquaconnect/aquaconnect (8).jpg',
    'gallery/aquaconnect/aquaconnect (9).jpg',
    'gallery/aquaconnect/aquaconnect (10).jpg',
    'gallery/aquaconnect/aquaconnect (11).jpg',
    'gallery/aquaconnect/aquaconnect (12).jpg',
    'gallery/aquaconnect/aquaconnect (13).jpg',
    'gallery/aquaconnect/aquaconnect (14).jpg',
    'gallery/aquaconnect/aquaconnect (15).jpg'
  ],
  github: 'https://github.com/dewmiwickramasinghe/AquaConnect-_Mobile_App'
  },

  { 
    name: 'Online Auction System', 
    image: 'gallerygavel.png',
    title: 'Gallery Gavel - Online Auction System',
    date: 'Jan 2024 - May 2024',
    description: 'A web-based auction platform designed to facilitate timed bidding and purchase of photographs. Enables users to upload, browse, and bid on images with options for frames. Focused on building a fair, interactive auction experience with automated winner detection. Team Leader role.',
    technologies: ['PHP', 'HTML', 'JavaScript'],
    tools: ['VS Code', 'Git'],
    gallery: [],
    github: 'https://github.com/dewmiwickramasinghe/Online_Auction_System'
  },
];

export default function Projects() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

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

  const handleCardClick = (project) => {
    if (project.title) {
      setSelectedProject(project);
    }
  };

  return (
    <>
      <section id="projects" ref={ref} className={`projects-section ${visible ? 'visible' : ''}`}>
        <div className="projects-inner">
          <h2>Projects</h2>
          <p className="projects-sub">Work I've created</p>
          <div className="projects-grid">
            {PROJECTS.map((p, idx) => (
              <div
                key={p.name}
                className="project-card"
                style={{ '--i': idx }}
                title={p.name}
                onClick={() => handleCardClick(p)}
                role={p.title ? 'button' : undefined}
                tabIndex={p.title ? 0 : undefined}
                onKeyDown={(e) => {
                  if (p.title && (e.key === 'Enter' || e.key === ' ')) {
                    e.preventDefault();
                    handleCardClick(p);
                  }
                }}
              >
                <div className="project-image">
                  <img src={`${process.env.PUBLIC_URL || ''}/${p.image}`} alt={p.name} loading="lazy" />
                </div>
                <div className="project-overlay">
                  <h3>{p.name}</h3>
                  {p.title && <span className="view-more">View Details</span>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
}

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
      'https://media.licdn.com/dms/image/v2/D4D2DAQHacZo2DDJbYA/profile-treasury-image-shrink_1920_1920/B4DZd.DPc2G8Ac-/0/1750166469560?e=1763928000&v=beta&t=e3Ixa_dvZMnUZ6ZbIFoCmSsZEYw8KBgj6pflgXPCsfc',
      'https://media.licdn.com/dms/image/v2/D4D2DAQGLl02v8wtDgA/profile-treasury-image-shrink_1920_1920/B4DZd.DLX_HkAc-/0/1750166452764?e=1763928000&v=beta&t=xhp7NUfg8bjU_cZx1xiPdscn4vrCN3U2atMPITw9ni0',
      'https://media.licdn.com/dms/image/v2/D4D2DAQHb9jVSPMb5rw/profile-treasury-image-shrink_1280_1280/B4DZd.DEygHAAY-/0/1750166426003?e=1763928000&v=beta&t=tm_bfIWwV0m6lL6o6mOfpbyiQIv3kevUVvSP-HSyrko',
      'https://media.licdn.com/dms/image/v2/D4D2DAQG5UXBkNapbvw/profile-treasury-image-shrink_8192_8192/B4DZd.DBEwGsAk-/0/1750166410878?e=1763928000&v=beta&t=-XGIEvk6AswKBojKgPk-SFncM2xpRzqBAXUn13nB_6Y',
      'https://media.licdn.com/dms/image/v2/D4D2DAQGqlcTzraP6PQ/profile-treasury-image-shrink_8192_8192/B4DZd.C6.hH4Ag-/0/1750166385387?e=1763928000&v=beta&t=1JOuEpVpJcpC-WBXXwgda2iuqox_eXPx8-Rp4fi-Dl8',
      'https://media.licdn.com/dms/image/v2/D4D2DAQE8kERZ_Xc6FQ/profile-treasury-image-shrink_1920_1920/B4DZd.C2CbHAAc-/0/1750166365320?e=1763928000&v=beta&t=o4twvGvV_lD1SQGJUIROi9W5EMrBvQvATxrNNX96eI8',
      'https://media.licdn.com/dms/image/v2/D4D2DAQE3_a3fyk0D4w/profile-treasury-image-shrink_8192_8192/B4DZd.CwTXG8Ag-/0/1750166342213?e=1763928000&v=beta&t=XaQvYsWvGyFdm3_a-mJ-ZdE6kwfuiENBTvZZvSXvv6U',
      'https://media.licdn.com/dms/image/v2/D4D2DAQH8wRzRlEO4Vw/profile-treasury-image-shrink_1280_1280/B4DZd.Cr8ZGgAQ-/0/1750166323987?e=1763928000&v=beta&t=xGfhsw-P8iy81tM5rmlxUuvHvX0lRM5C5PiI6WY10us',
      'https://media.licdn.com/dms/image/v2/D4D2DAQHWZgPXL0vlbQ/profile-treasury-image-shrink_800_800/B4DZd6JfdrHkAY-/0/1750101000545?e=1763928000&v=beta&t=BYGsqGsoC2UrszF7fs6-WEfE6j9SOEmIAXOB3ONOHlg'
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
      'https://media.licdn.com/dms/image/v2/D4D2DAQG9e4jSk-X8uQ/profile-treasury-image-shrink_800_800/B4DZd.EUxEHAAk-/0/1750166758706?e=1763931600&v=beta&t=gLCx6d6VJiidJDXCrGMvlEBGYET_IlN1pFT9bcVJCKY',
      'https://media.licdn.com/dms/image/v2/D4D2DAQFM5bWei0iGkw/profile-treasury-image-shrink_800_800/B4DZd.Ec.GGkBM-/0/1750166787421?e=1763931600&v=beta&t=fGVsr2Fom-7iURYjELZXPDpnGCgK4PSya_5q_CR0rYw',
      'https://media.licdn.com/dms/image/v2/D4D2DAQHhh0gK_cVVzQ/profile-treasury-image-shrink_800_800/B4DZd.EZy0GUAc-/0/1750166774497?e=1763931600&v=beta&t=1ZQJxiZ2jUFi9mqdn4SVhyQnxpDg61lIkDrMyhmDp34',
      'https://media.licdn.com/dms/image/v2/D4D2DAQG9dPfJaWmlxA/profile-treasury-image-shrink_800_800/B4DZd.EmMkGYAY-/0/1750166825283?e=1763931600&v=beta&t=qH3JNge_dU9gfEFaecJQfgEv6jrB0XOhCsU7CkwqHCM',
      'https://media.licdn.com/dms/image/v2/D4D2DAQF3T_Z9U0WiqA/profile-treasury-image-shrink_800_800/B4DZd.EQKXGgAY-/0/1750166736060?e=1763931600&v=beta&t=25XW3CkRSClzASRBUrLiUUxQJU0ujlb0Yuib419uFP8',
      'https://media.licdn.com/dms/image/v2/D4D2DAQHdPVobjEgqJw/profile-treasury-image-shrink_800_800/B4DZd.ELVVHAAY-/0/1750166715541?e=1763931600&v=beta&t=32FP7AdwDdjq5PeItwxTxQG4aPZnJ63DiZ1hSkOVLPc',
      'https://media.licdn.com/dms/image/v2/D4D2DAQHD2tOVH3dOhA/profile-treasury-image-shrink_800_800/B4DZd.EHSmHkAc-/0/1750166698913?e=1763931600&v=beta&t=Pf1Lcrb-94_7hnOS3QyjCuVHjdEwhE9lHqFI3_1YZh4',
      'https://media.licdn.com/dms/image/v2/D4D2DAQF2RJydUKJ1hA/profile-treasury-image-shrink_800_800/B4DZd.ED2bG8Ac-/0/1750166684838?e=1763931600&v=beta&t=8T8jX1zya8VFavYaOcIkqRFf3Qy3Ym7JtjlfEX5itJA',
      'https://media.licdn.com/dms/image/v2/D4D2DAQHWvaPE_lbU2A/profile-treasury-image-shrink_800_800/B4DZd.D_u7GkAY-/0/1750166668130?e=1763931600&v=beta&t=pz99l4bUEyOB--7iUDBdEEbukqbdQupl7e7M-wltfd0',
      'https://media.licdn.com/dms/image/v2/D4D2DAQEqiP39z1_b2Q/profile-treasury-image-shrink_800_800/B4DZd.D8DsGgAc-/0/1750166653132?e=1763931600&v=beta&t=a5eivJsFFsZTrl9LoaA95ALfngGfTt4VVZ4dZ58Xmi4',
      'https://media.licdn.com/dms/image/v2/D4D2DAQE329tTxAQr9g/profile-treasury-image-shrink_800_800/B4DZd.D3qAGYAg-/0/1750166635407?e=1763931600&v=beta&t=u78Zynqn7W9trOLqsKafO8vd73skZgRch2NwGKZqX5k',
      'https://media.licdn.com/dms/image/v2/D4D2DAQFGvYf3JtExKQ/profile-treasury-image-shrink_800_800/B4DZd.DzPgGgAY-/0/1750166617065?e=1763931600&v=beta&t=mWoQ4-OSUZfUc-N7FD2yscLW3XyBRdHk228RDY_nfc4'
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
      'https://media.licdn.com/dms/image/v2/D4D2DAQEMeC7pu_YEEw/profile-treasury-image-shrink_800_800/B4DZd.HTf3HkAY-/0/1750167534389?e=1763931600&v=beta&t=KGPvIZ8Z5odzMwCwkl7Hssdoce2Y0xyTjIN0BAtvNJU',
      'https://media.licdn.com/dms/image/v2/D4D2DAQG1fK_UaVUtRw/profile-treasury-image-shrink_8192_8192/B4DZd.HMe0GYAg-/0/1750167505616?e=1763931600&v=beta&t=6HpaBQHZe9OYxRTAfBZsRM52z0tYrtmGTo1OulsCbgo',
      'https://media.licdn.com/dms/image/v2/D4D2DAQHu1wfEksdXIw/profile-treasury-image-shrink_8192_8192/B4DZd.HIe.GsAg-/0/1750167489397?e=1763931600&v=beta&t=85Tr9ja0tvT73cKpcUWm1Qp35FyhS0EoRBvlEIIUMsc'
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
    'https://media.licdn.com/dms/image/v2/D4D2DAQFuO7ezKGkxmw/profile-treasury-image-shrink_800_800/B4DZqRk4kdJMAY-/0/1763378957332?e=1764003600&v=beta&t=RQEthFAA1dnmxbSMoxVrxN9pNS9gzT9hRt4-Rmj6-RI',
    'https://media.licdn.com/dms/image/v2/D4D2DAQFhbCDS7aw_7w/profile-treasury-image-shrink_800_800/B4DZqRk2GDKIAY-/0/1763378947159?e=1764003600&v=beta&t=xqyVwxVy2OPCqKuHqYRg80moBFiVymBQolMpffF5cS0',
    'https://media.licdn.com/dms/image/v2/D4D2DAQHA8zXVXsj4sw/profile-treasury-image-shrink_800_800/B4DZqRk0PLKUAY-/0/1763378939626?e=1764003600&v=beta&t=NvxeoVoy71aZLZD3wFZfC6JHgdpvOZ3UTdh8FjC-BM4',
    'https://media.licdn.com/dms/image/v2/D4D2DAQH6CvClzQGQsQ/profile-treasury-image-shrink_800_800/B4DZqRkyVXKIAc-/0/1763378931764?e=1764003600&v=beta&t=7sJL2CdIQwcn8d2sHg7DsOF5DCRZOJYE6r58w5Dk8sk',
    'https://media.licdn.com/dms/image/v2/D4D2DAQGf0ot2m7qsUQ/profile-treasury-image-shrink_800_800/B4DZqRkwHeJIAY-/0/1763378923126?e=1764003600&v=beta&t=QNQFqtr2Q5aOTnzCkpf-MfbrsEHxFlU2cLTv-he4p5o',
    'https://media.licdn.com/dms/image/v2/D4D2DAQG56w6Xbi9uaA/profile-treasury-image-shrink_800_800/B4DZqRktXkHsAY-/0/1763378911375?e=1764003600&v=beta&t=cf980-tEHd58NQ_L34rQRxrWWCMd7OB7Lk7nsW4QkFs',
    'https://media.licdn.com/dms/image/v2/D4D2DAQEy2waiC0qEVw/profile-treasury-image-shrink_800_800/B4DZqRkrFHG8AY-/0/1763378902116?e=1764003600&v=beta&t=CoKgIupUqynSQ6jYr5le_Ef6ixPTVBUZ6QaDvsxM4Bg',
    'https://media.licdn.com/dms/image/v2/D4D2DAQHuDis5rwsWaA/profile-treasury-image-shrink_800_800/B4DZqRkoc_GsAc-/0/1763378891325?e=1764003600&v=beta&t=JpELAXu9E8TRfXbsQDZyPl8-unZvazweMO3ryx9MWJM',
    'https://media.licdn.com/dms/image/v2/D4D2DAQFR85tFcPCICQ/profile-treasury-image-shrink_800_800/B4DZqRkmZiJAAY-/0/1763378882928?e=1764003600&v=beta&t=C9R0gLB6UxA9czkSurA9haccybiHGJ78vg-Nz7my6Q8',
    'https://media.licdn.com/dms/image/v2/D4D2DAQHvhVGwSQBSfg/profile-treasury-image-shrink_800_800/B4DZqRkjVMJcAY-/0/1763378870450?e=1764003600&v=beta&t=h9Q_3PDBUs9umD19v_mQFCz6vEhgfBcW_V9iZxQmPv4'
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
    'https://media.licdn.com/dms/image/v2/D4D2DAQGlaG-_c_qLJg/profile-treasury-image-shrink_1920_1920/B4DZqRh48cKIAc-/0/1763378172571?e=1764003600&v=beta&t=JIRb7eNxdmhb0uc17excgaai1uzCdOY-Nn00VUfwYJg',
    'https://media.licdn.com/dms/image/v2/D4D2DAQFLods6mFcVfA/profile-treasury-image-shrink_1920_1920/B4DZqRhzJsIMAc-/0/1763378148739?e=1764003600&v=beta&t=53qNnWToB9AuZgkAoCQc5mAHfBAQ--O1QAZinBhMahY',
    'https://media.licdn.com/dms/image/v2/D4D2DAQGpxIsTWmYv1w/profile-treasury-image-shrink_8192_8192/B4DZqRhp3WKQAg-/0/1763378110950?e=1764003600&v=beta&t=ntBrpRbdr6ylwgTmrRX-yduNo9xObkj2W4VqBFd3gN0',
    'https://media.licdn.com/dms/image/v2/D4D2DAQE4l4CAHRxpXQ/profile-treasury-image-shrink_8192_8192/B4DZqRhKv4GkAg-/0/1763377983883?e=1764003600&v=beta&t=nSidrO8dJUjxq1KKVvbuXEtx2UngoLPcAfdZNm2FPKI',
    'https://media.licdn.com/dms/image/v2/D4D2DAQHtOzswK3Wosw/profile-treasury-image-shrink_8192_8192/B4DZqRhE8XJcAg-/0/1763377959580?e=1764003600&v=beta&t=lFKuPDISm3oS6O0LskeD3W67ebJ-_gIRBzvtrvmIxCQ'
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
                  <img src={process.env.PUBLIC_URL + '/' + p.image} alt={p.name} loading="lazy" />
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

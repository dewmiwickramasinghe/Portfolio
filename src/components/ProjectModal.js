import React, { useState } from 'react';
import './ProjectModal.css';

export default function ProjectModal({ project, onClose }) {
  const [selectedImage, setSelectedImage] = useState(null);

  if (!project) return null;

  return (
    <>
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <button className="modal-close" onClick={onClose} aria-label="Close modal">×</button>
          
          <div className="modal-header">
            <h2>{project.title}</h2>
            <p className="modal-meta">{project.date}</p>
          </div>

          <div className="modal-description">
            <p>{project.description}</p>
          </div>

          {(project.technologies || project.tools) && (
            <div className="modal-details">
              {project.technologies && project.technologies.length > 0 && (
                <div className="detail-group">
                  <h4>Technologies</h4>
                  <div className="tags">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="tag">{tech}</span>
                    ))}
                  </div>
                </div>
              )}

              {project.tools && project.tools.length > 0 && (
                <div className="detail-group">
                  <h4>Tools</h4>
                  <div className="tags">
                    {project.tools.map((tool) => (
                      <span key={tool} className="tag">{tool}</span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="modal-link">
              View on GitHub →
            </a>
          )}

          {project.gallery && project.gallery.length > 0 && (
            <div className="modal-gallery">
              <h4 className="gallery-title">Project Screenshots</h4>
              <div className="gallery-images">
                {project.gallery.map((img, idx) => (
                  <img key={idx} src={img.startsWith('http') ? img : process.env.PUBLIC_URL + '/' + img} alt={`${project.title} ${idx}`} onError={(e) => {e.currentTarget.style.display = 'none'}} onClick={() => setSelectedImage(img.startsWith('http') ? img : process.env.PUBLIC_URL + '/' + img)} style={{cursor: 'pointer'}} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {selectedImage && (
        <div className="lightbox-overlay" onClick={() => setSelectedImage(null)}>
          <div className="lightbox-content">
            <button className="lightbox-close" onClick={() => setSelectedImage(null)}>×</button>
            <img src={selectedImage} alt="Full view" className="lightbox-image" onClick={(e) => e.stopPropagation()} />
          </div>
        </div>
      )}
    </>
  );
}

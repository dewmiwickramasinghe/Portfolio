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
                  <div key={idx} className="gallery-image-wrapper">
                    <img 
                      src={img}
                      alt={`${project.title} ${idx}`} 
                      onError={(e) => {
                        console.warn(`Failed to load image: ${img}`);
                        e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="280" height="350"%3E%3Crect fill="%23333" width="280" height="350"/%3E%3Ctext x="50%" y="50%" text-anchor="middle" dy=".3em" fill="%23999" font-size="14"%3EImage not available%3C/text%3E%3C/svg%3E';
                      }} 
                      onClick={() => setSelectedImage(img)} 
                      style={{cursor: 'pointer'}} 
                    />
                  </div>
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

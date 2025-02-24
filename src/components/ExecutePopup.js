import React, { useState, useEffect, useRef } from 'react';


// ExecutePopup.js
const ExecutePopup = ({ onClose, buttonPosition }) => {
  const [selectedProject, setSelectedProject] = useState(null);
  const popupRef = useRef(null);

  // 샘플 프로젝트 데이터
  const projects = [
    { id: 1, title: '프로젝트3' },
    { id: 2, title: '프로젝트2' },
    { id: 3, title: '프로젝트22' },
    { id: 4, title: '프로젝트22' },
    { id: 5, title: '프로젝트22' },
    { id: 6, title: '프로젝트22' }
  ];

  const handleDownload = (projectId) => {
    // 다운로드 로직 구현
    console.log('다운로드:', projectId);
  };

  const handleExecute = (projectId) => {
    // 실행 로직 구현
    console.log('실행:', projectId);
  };

  return (
    <>
      <div className="popup-overlay" onClick={onClose}></div>
      <div className="popup-container popup-positioned ExecutePopup" ref={popupRef}>
        <div className="popup-header">
          <h2>실행하기</h2>
          <button className="close-btn" onClick={onClose}>&times;</button>
        </div>
        <div className="popup-content">
          <div className="project-list">
            {projects.map(project => (
              <div key={project.id} className="project-item">
                <span className="project-title">{project.title}</span>
                <div className="project-buttons">
                  <button 
                    className="btn-download"
                    onClick={() => handleDownload(project.id)}
                  >
                    다운로드
                  </button>
                  <button 
                    className="btn-execute"
                    onClick={() => handleExecute(project.id)}
                  >
                    실행
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ExecutePopup;
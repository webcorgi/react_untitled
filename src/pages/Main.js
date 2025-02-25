import React from 'react';
import img1 from '../img/1.jpg';
import img2 from '../img/2.jpg';
import { useState } from 'react';
import UploadPopup from '../components/UploadPopup';
import ExecutePopup from '../components/ExecutePopup';
import Header from '../components/Header';
import Footer from '../components/Footer';
import video from '../video/sample.webm';

function Main() {
  const [isUploadOpen, setIsUploadOpen] = useState(false);
  const [isExecuteOpen, setIsExecuteOpen] = useState(false);
  const [uploadButtonPos, setUploadButtonPos] = useState(null);
  const [executeButtonPos, setExecuteButtonPos] = useState(null);

  const handleUploadClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setUploadButtonPos({
      top: rect.bottom + window.scrollY,
      left: rect.left + window.scrollX
    });
    setIsUploadOpen(true);
  };

  const handleExecuteClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setExecuteButtonPos({
      top: rect.bottom + window.scrollY,
      left: rect.left + window.scrollX
    });
    setIsExecuteOpen(true);
  };

  return (
    <>
      <section className="video-background-section">
        <video 
          className="background-video" 
          autoPlay 
          loop 
          muted 
          playsInline
        >
          <source src={video} type="video/webm" />
          Your browser does not support the video tag.
        </video>

        <div className="btnbox">
          <div className="btnbox-inner">
            <button
              className="btn-upload"
              onClick={(e) => handleUploadClick(e)}>
              이미지 업로드하기
            </button>
            <button
              className="btn-exeution"
              onClick={handleExecuteClick}>
              실행하기
            </button>
          </div>
          {isUploadOpen && (
            <UploadPopup
              onClose={() => setIsUploadOpen(false)}
              buttonPosition={uploadButtonPos}
            />
          )}
          {isExecuteOpen && (
            <ExecutePopup
              onClose={() => setIsExecuteOpen(false)}
              buttonPosition={executeButtonPos}
            />
          )}
        </div>
      </section>
      <section>
        {/* <img src={img1} className="bg-img1" alt="bg" /> */}
        <img src={img2} className="bg-img2" alt="bg" />
      </section>

      <Footer />
    </>
  );
}

export default Main;
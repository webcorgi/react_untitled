import img1 from './img/1.jpg'
import img2 from './img/2.jpg'
import { useState } from 'react';
import UploadPopup from './components/UploadPopup';
import ExecutePopup from './components/ExecutePopup';
import Header from './components/Header';
import Footer from './components/Footer';


// App.js에서 사용하는 방법
function App() {
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
      <Header />
      
      <section>
        <div className="btnbox">
          <div className="btnbox-inner">
            <div
              className="btn-upload"
              onClick={(e) => handleUploadClick(e)}>
              이미지 업로드하기
            </div>
            <div
              className="btn-exeution"
              onClick={handleExecuteClick}>
              실행하기
            </div>
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
        <img src={img1} className="bg-img1" alt="bg" />
        <img src={img2} className="bg-img2" alt="bg" />
      </section>

      <Footer />
    </>
  );
}

export default App;
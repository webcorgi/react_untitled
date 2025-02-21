import { useEffect, useState, useRef } from 'react';



const UploadPopup = ({  onClose, buttonPosition }) => {
  const [fileName, setFileName] = useState('');
  const [isDragOver, setIsDragOver] = useState(false);
  const fileInputRef = useRef(null);
  const popupRef = useRef(null);
  const [preview, setPreview] = useState('');


  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      const file = e.target.files[0];
      setFileName(file.name);

      // 이미지 미리보기 생성
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragOver(false);

    if (e.dataTransfer.files.length > 0) {
      const file = e.dataTransfer.files[0];
      setFileName(file.name);

      // 이미지 미리보기 생성
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
      
      if (fileInputRef.current) {
        fileInputRef.current.files = e.dataTransfer.files;
      }
    }
  };
  

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = () => {
    setIsDragOver(false);
  };

  return (
    <>
      <div className="popup-overlay" onClick={onClose}></div>
      <div className="popup-container popup-positioned" ref={popupRef}>
        <div className="popup-header">
          <h2>이미지 업로드</h2>
          <button className="close-btn" onClick={onClose}>&times;</button>
        </div>
        <div className="popup-content">
          <div 
            className={`upload-area ${isDragOver ? 'dragover' : ''}`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            <input 
              type="file" 
              id="fileInput" 
              ref={fileInputRef}
              accept="image/*" 
              hidden 
              onChange={handleFileChange}
            />
            {!preview ? (
              <label htmlFor="fileInput" className="upload-label">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="17 8 12 3 7 8"></polyline>
                  <line x1="12" y1="3" x2="12" y2="15"></line>
                </svg>
                <span>클릭하여 이미지 선택</span>
                <span className="sub-text">또는 파일을 여기로 드래그하세요</span>
              </label>
            ) : (
              <div className="preview-container">
                <img src={preview} alt="preview" className="image-preview" />
                <p className="file-name">{fileName}</p>
              </div>
            )}
          </div>
          {fileName && (
            <div className="selected-file">
              <span className="file-name">{fileName}</span>
              <button className="upload-btn">업로드</button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default UploadPopup
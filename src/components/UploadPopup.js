import { useEffect, useState, useRef } from 'react';

const UploadPopup = ({ onClose, buttonPosition }) => {
  const [files, setFiles] = useState([]);
  const [isDragOver, setIsDragOver] = useState(false);
  const [totalSize, setTotalSize] = useState(0);
  const fileInputRef = useRef(null);
  const popupRef = useRef(null);

  // Calculate file size in readable format
  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 KB';
    const k = 1024;
    const sizes = ['KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return `${(bytes / Math.pow(k, i)).toFixed(2)} ${sizes[i]}`;
  };

  // Handle file selection
  const handleFileChange = (e) => {
    const newFiles = Array.from(e.target.files);
    addFiles(newFiles);
  };

  // Add files to state
  const addFiles = (newFiles) => {
    const updatedFiles = newFiles.map(file => ({
      id: Math.random().toString(36).substring(7),
      file,
      preview: file.type.startsWith('image/') ? URL.createObjectURL(file) : null,
      size: file.size
    }));

    setFiles(prev => [...prev, ...updatedFiles]);
    calculateTotalSize([...files, ...updatedFiles]);
  };

  // Calculate total size of all files
  const calculateTotalSize = (currentFiles) => {
    const total = currentFiles.reduce((acc, file) => acc + file.size, 0);
    setTotalSize(total);
  };

  // Remove file
  const removeFile = (id) => {
    setFiles(prev => {
      const updatedFiles = prev.filter(file => file.id !== id);
      calculateTotalSize(updatedFiles);
      return updatedFiles;
    });
  };

  // Handle drag and drop
  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragOver(false);
    const newFiles = Array.from(e.dataTransfer.files);
    addFiles(newFiles);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = () => {
    setIsDragOver(false);
  };

  // Cleanup previews on unmount
  useEffect(() => {
    return () => {
      files.forEach(file => {
        if (file.preview) {
          URL.revokeObjectURL(file.preview);
        }
      });
    };
  }, [files]);

  return (
    <>
      <div className="popup-overlay" onClick={onClose}></div>
      <div className="popup-container popup-positioned" ref={popupRef}>
        <div className="popup-header">
          <h2>파일 첨부</h2>
          <button className="close-btn" onClick={onClose}>&times;</button>
        </div>

        <div className="upload-status-bar">
          <span>일반 {formatFileSize(totalSize)}/10MB</span>
          <span className="separator">|</span>
          <span>대용량 0KB/2.00GB×10개</span>
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
              multiple
              accept="image/*"
              hidden
              onChange={handleFileChange}
            />
            {files.length === 0 ? (
              <label htmlFor="fileInput" className="upload-label">
                <span>파일을 마우스로 끌어 오세요</span>
              </label>
            ) : (
              <div className="files-list">
                {files.map(file => (
                  <div key={file.id} className="file-item">
                    <div className="file-preview">
                      {file.preview ? (
                        <img src={file.preview} alt="preview" className="thumbnail" />
                      ) : (
                        <div className="file-icon">📄</div>
                      )}
                    </div>
                    <div className="file-info">
                      <span className="file-name">{file.file.name}</span>
                      <span className="file-size">{formatFileSize(file.size)}</span>
                    </div>
                    <button 
                      className="remove-btn"
                      onClick={() => removeFile(file.id)}
                    >
                      삭제
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default UploadPopup;
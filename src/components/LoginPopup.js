import { useState } from 'react';

const LoginPopup = ({ onClose }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <>
      <div className="login-overlay" onClick={onClose}></div>
      <div className="login-popup">
        <button className="close-button" onClick={onClose}>
          ✕
        </button>
        
        <div className="login-content">
          <div className="login-header">
            <h2>로그인</h2>
            <p>계정 정보를 입력해주세요</p>
          </div>

          <form onSubmit={handleSubmit} className="login-form">
            <div className="input-group">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder=" "
                required
              />
              <label>이메일</label>
            </div>

            <div className="input-group">
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder=" "
                required
              />
              <label>비밀번호</label>
            </div>

            <button type="submit" className="login-button">
              로그인
            </button>
          </form>
        </div>
      </div>

      <style jsx>{`
        .login-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
        }

        .login-popup {
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background: white;
          border-radius: 8px;
          padding: 48px 40px 36px;
          width: 100%;
          max-width: 450px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
          z-index: 1001;
        }

        .close-button {
          position: absolute;
          top: 16px;
          right: 16px;
          background: none;
          border: none;
          font-size: 20px;
          color: #5f6368;
          cursor: pointer;
          padding: 8px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .close-button:hover {
          background-color: #f1f3f4;
        }

        .login-header {
          text-align: center;
          margin-bottom: 32px;
        }

        .login-header h2 {
          font-size: 24px;
          font-weight: 400;
          margin: 0 0 8px;
          color: #202124;
        }

        .login-header p {
          font-size: 16px;
          color: #5f6368;
          margin: 0;
        }

        .login-form {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .input-group {
          position: relative;
        }

        .input-group input {
          width: 100%;
          padding: 16px 12px;
          border: 1px solid #dadce0;
          border-radius: 4px;
          font-size: 16px;
          transition: all 0.2s;
        }

        .input-group label {
          position: absolute;
          left: 12px;
          top: 50%;
          transform: translateY(-50%);
          background: white;
          padding: 0 4px;
          color: #5f6368;
          transition: all 0.2s;
          pointer-events: none;
        }

        .input-group input:focus,
        .input-group input:not(:placeholder-shown) {
          border-color: #1a73e8;
          outline: none;
        }

        .input-group input:focus ~ label,
        .input-group input:not(:placeholder-shown) ~ label {
          top: 0;
          font-size: 12px;
          color: #1a73e8;
        }

        .login-button {
          background-color: #1a73e8;
          color: white;
          padding: 12px 24px;
          border: none;
          border-radius: 4px;
          font-size: 16px;
          font-weight: 500;
          cursor: pointer;
          transition: background-color 0.2s;
        }

        .login-button:hover {
          background-color: #1557b0;
        }
      `}</style>
    </>
  );
};

export default LoginPopup;
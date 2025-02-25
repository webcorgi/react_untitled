import { useState } from 'react';

const LoginPage = () => {
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
    <div className="login-page">
      <header className="site-header">
        <h1>ShiningPass</h1>
      </header>
      
      <div className="login-container">
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
        .login-page {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }
        
        .site-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 16px 24px;
          background-color: #fff;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        }
        
        .site-header h1 {
          margin: 0;
          color: #1a73e8;
          font-size: 24px;
        }
        
        .login-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          flex: 1;
          padding: 24px;
        }

        .login-content {
          background: white;
          border-radius: 8px;
          padding: 48px 40px 36px;
          width: 100%;
          max-width: 450px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
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
    </div>
  );
};

export default LoginPage;
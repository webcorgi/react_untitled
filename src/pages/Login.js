import { useState } from 'react';

const Login = () => {
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
      <div className="login-container">
        <h1 className='login-logo'>ShiningPass</h1>
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
      `}</style>
    </div>
  );
};

export default Login;
import React from 'react';

function Footer() {
    return (
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-content">
            <div className="company-info">
              <div className="info-row">
                <h3 className="company-name">샤이닝 패스</h3>
                <span className="divider">|</span>
                <p className="business-number">사업자 등록 번호 481-21-01561</p>
              </div>
              <p className="address">
                주소: 경기 성남시 분당구 판교로289번길 20 1동 814호
              </p>
              <div className="contact-info">
                <div className="contact-item">
                  <span className="label">연락처:</span>
                  <a href="tel:010-5590-0482" className="link">010-5590-0482</a>
                </div>
                <div className="contact-item">
                  <span className="label">이메일:</span>
                  <a href="mailto:dydwo6530@naver.com" className="link">dydwo6530@naver.com</a>
                </div>
              </div>
            </div>
            {/* <div className="footer-links">
              <button className="footer-button">개인정보처리방침</button>
              <span className="divider">|</span>
              <button className="footer-button">이용약관</button>
            </div> */}
          </div>
        </div>
      </footer>
    );
}

export default Footer;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/header.css";

function Header() {
  const [showAutoDropdown, setShowAutoDropdown] = useState(false);

  const handleAutoMouseEnter = () => {
    setShowAutoDropdown(true);
  };

  const handleAutoMouseLeave = () => {
    setShowAutoDropdown(false);
  };

  return (
    <div className="main">
      <header className="header-main">
        <div>
          <Link to="/" className="logo">
            DAP Security
          </Link>
        </div>
        <div className="sub-top">
          <Link
            to="/Auto"
            className="sub-list"
            onMouseEnter={handleAutoMouseEnter}
            onMouseLeave={handleAutoMouseLeave}
          >
            취약점진단[Auto]
          </Link>
          {showAutoDropdown && (
            <div className="auto-dropdown">
              <ul>
                <li>
                  <Link to="/Auto" className="sub-auto">
                    취약점진단[자동]
                  </Link>
                </li>
                <li>
                  <Link to="/AutoCheck" className="sub-auto">
                    취약점진단[자동확인]
                  </Link>
                </li>
              </ul>
            </div>
          )}
          <Link to="/Manual" className="sub-list">
            취약점진단[Manual]
          </Link>
          <Link to="/Board" className="sub-list">
            게시판
          </Link>
          <Link to="/Login" className="sub-list">
            로그인
          </Link>
          <Link to="/Membership" className="sub-list">
            회원가입
          </Link>
        </div>
      </header>
    </div>
  );
}

export default Header;

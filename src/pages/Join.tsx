import React from "react";
import "../styles/join.css";

function Join() {
  return (
    <div className="join-wrap">
      <form className="join-form">
        <h1>회원가입</h1>
        <p>사용자 이름</p>
        <input type="text" />
        <p>이메일</p>
        <input type="email" />
        <p>비밀번호</p>
        <input type="password" />
        <p>비밀번호 확인</p>
        <input type="password" />
        <button className="done-btn">가입완료</button>
      </form>
    </div>
  );
}

export default Join;

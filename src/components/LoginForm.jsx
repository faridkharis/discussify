import React from 'react';

function LoginInput() {
  return (
    <form className="login-form">
      <input type="text" className="input input--border" placeholder="email" />
      <input type="password" className="input input--border" placeholder="password" />
      <button type="submit" className="primary-btn primary-btn-login">Login</button>
    </form>
  );
}

export default LoginInput;

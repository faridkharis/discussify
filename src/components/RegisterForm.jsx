import React from 'react';

function RegisterInput() {
  return (
    <form className="register-form">
      <input type="text" className="input input--border" placeholder="name" />
      <input type="text" className="input input--border" placeholder="email" />
      <input type="password" className="input input--border" placeholder="password" />
      <button type="submit" className="primary-btn primary-btn-register">Register</button>
    </form>
  );
}

export default RegisterInput;

import React from 'react';
import RegisterInput from '../components/RegisterForm';

function RegisterPage() {
  return (
    <section className="register-page">
      <div>
        <h1 className="register-page__title">Discussify</h1>
        <p className="register-page__description">Elevate Your Discussions with Discussify</p>
      </div>
      <div className="card card--register">
        <h2 className="register-page__subtitle">Create new account</h2>
        <RegisterInput />
        <p className="login-info">
          Already have an account?&nbsp;
          <a href="/login" className="login-info__link">Login here.</a>
        </p>
      </div>
    </section>
  );
}

export default RegisterPage;

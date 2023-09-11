import React from 'react';
import LoginInput from '../components/LoginForm';

function LoginPage() {
  return (
    <section className="login-page">
      <div>
        <h1 className="login-page__title">Discussify</h1>
        <p className="login-page__description">Elevate Your Discussions with Discussify</p>
      </div>
      <div className="card card--login">
        <h2 className="login-page__subtitle">Login to your account</h2>
        <LoginInput />
        <p className="register-info">
          Don&apos;t have an account?&nbsp;
          <a href="/register" className="register-info__link">Register here.</a>
        </p>
      </div>
    </section>
  );
}

export default LoginPage;

import React from 'react';
import SearchForm from '../components/SearchForm';
import Popular from '../components/Popular';
import ThreadsList from '../components/ThreadsList';

function HomePage() {
  return (
    <section className="home-page container">
      <h1 className="home-page__title">Elevate Your Discussions with Discussify</h1>
      <p className="home-page__subtitle">
        Engage in insightful conversations, connect with diverse voices, and
        foster meaningful exchanges on every topic.
      </p>
      <div className="home-page__content">
        <SearchForm />
        <Popular />
        <ThreadsList />
      </div>
    </section>
  );
}

export default HomePage;

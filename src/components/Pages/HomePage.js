import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="home-page">
      <section className="welcome-section">
        <h1>Welcome to Our Dashboard</h1>
        <p>Explore our powerful tools and insights to drive your business forward.</p>
      </section>
      <div className="features-grid">
        <div className="feature-card">
          <h3>Real-time Analytics</h3>
          <p>Get up-to-date insights on your business performance.</p>
        </div>
        <div className="feature-card">
          <h3>User Management</h3>
          <p>Easily manage user accounts and permissions.</p>
        </div>
        <div className="feature-card">
          <h3>Customizable Reports</h3>
          <p>Create and export reports tailored to your needs.</p>
        </div>
      </div>
      <Link to="/dashboard" className="cta-button">Go to Dashboard</Link>
    </div>
  );
};

export default HomePage;
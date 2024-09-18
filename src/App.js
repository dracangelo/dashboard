import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/UI/Sidebar';
import Dashboard from './components/Dashboard';
import HomePage from './components/Pages/HomePage';
import Profile from './components/Pages/Profile';
import Settings from './components/Pages/Settings';
import UserManagement from './components/Pages/UserManagement';
import Analytics from './components/Analytics';
import './dashboard-styles.css';
import './components/Pages/Homepage.css';

const App = () => {
  return (
    <Router>
      <div className="dashboard-container">
        <Sidebar />
        <main className="dashboard-content">
          <Routes>
            <Route exact path="/" component={HomePage} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/profile" component={Profile} />
            <Route path="/settings" component={Settings} />
            <Route path="/user-management" component={UserManagement} />
            <Route path="/analytics" component={Analytics} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
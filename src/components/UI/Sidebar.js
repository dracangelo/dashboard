import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiHome, FiPieChart, FiUser, FiSettings, FiUsers } from 'react-icons/fi';

const Sidebar = () => {
  const location = useLocation();

  const menuItems = [
    { path: '/', icon: FiHome, label: 'Home' },
    { path: '/dashboard', icon: FiPieChart, label: 'Dashboard' },
    { path: '/profile', icon: FiUser, label: 'Profile' },
    { path: '/settings', icon: FiSettings, label: 'Settings' },
    { path: '/user-management', icon: FiUsers, label: 'User Management' },
  ];

  return (
    <aside className="sidebar">
      <nav className="sidebar-nav">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`sidebar-link ${location.pathname === item.path ? 'active' : ''}`}
          >
            <item.icon className="sidebar-icon" />
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
import React, { useState } from 'react';

const Settings = ({ initialSettings, onSave }) => {
  const [settings, setSettings] = useState(initialSettings);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSettings(prevSettings => ({
      ...prevSettings,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(settings);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="theme" className="form-label">Theme</label>
        <select
          id="theme"
          name="theme"
          className="form-select"
          value={settings.theme}
          onChange={handleChange}
        >
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
      </div>
      <div className="mb-3 form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="notifications"
          name="notifications"
          checked={settings.notifications}
          onChange={handleChange}
        />
        <label className="form-check-label" htmlFor="notifications">Enable Notifications</label>
      </div>
      <button type="submit" className="btn btn-primary">Save Settings</button>
    </form>
  );
};

export default Settings;
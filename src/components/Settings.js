import React from 'react';
import "./settings.css"

const Settings = ({ language, onLanguageChange }) => {
  const handleSelectChange = (e) => {
    onLanguageChange(e.target.value);
  };

  return (
    <div className="settings">
      <label htmlFor="language-select">Choose Language: </label>
      <select id="language-select" value={language} onChange={handleSelectChange}>
        <option value="English">English</option>
        <option value="French">French</option>
        <option value="German">German</option>
        <option value="Russian">Russian</option>
        <option value="Spanish">Spanish</option>
        <option value="Chinese">Chinese</option>
      </select>
    </div>
  );
};

export default Settings;

import React, { useEffect, useState } from 'react';

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(null);

  const setTheme = (dark) => {
    if (dark) {
      document.documentElement.className = 'theme-dark';
      localStorage.setItem('theme', 'theme-dark');
    } else {
      document.documentElement.className = 'theme-light';
      localStorage.setItem('theme', 'theme-light');
    }
  };
  
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'theme-dark') {
      setIsDark(true);
      document.documentElement.className = 'theme-dark';
    } else {
      setIsDark(false);
      document.documentElement.className = 'theme-light';
    }
  }, []);

  if (isDark === null) {
    return <div>Loading...</div>;
  }

  const toggleTheme = () => {
    setIsDark((prev) => {
      setTheme(!prev);
      return !prev;
    });
  };

  return (
    <div className="switch-btn">
      <label className="switch">
        <input
          type="checkbox"
          checked={isDark}
          onChange={toggleTheme}
          aria-label="Toggle dark mode"
        />
        <span className="slider round"></span>
      </label>
    </div>
  );
};

export default ThemeToggle;

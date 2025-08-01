import React, { createContext, useContext, useState } from 'react';

const SettingsContext = createContext();

export const useSettings = () => useContext(SettingsContext);

export const SettingsProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [unit, setUnit] = useState('metric'); // 'metric' for °C, 'imperial' for °F

  const toggleDarkMode = () => setDarkMode(prev => !prev);
  const toggleUnit = () => setUnit(prev => (prev === 'metric' ? 'imperial' : 'metric'));

  return (
    <SettingsContext.Provider value={{ darkMode, toggleDarkMode, unit, toggleUnit }}>
      {children}
    </SettingsContext.Provider>
  );
};

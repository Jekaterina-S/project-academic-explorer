import React, { createContext, useContext, useEffect, useState } from 'react';

const SettingsContext = createContext();

const DEFAULT_SETTINGS = {
  theme: 'light',
  language: 'en',
  fontSize: 'text-base',
};

export const SettingsProvider = ({ children }) => {
  const [settings, setSettings] = useState(DEFAULT_SETTINGS);
  const [loaded, setLoaded] = useState(false);

  // Load settings
  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem('userSettings'));
      if (saved && typeof saved === 'object') {
        setSettings({ ...DEFAULT_SETTINGS, ...saved });
      }
    } catch (err) {
      console.warn('Failed to load settings from localStorage:', err);
    } finally {
      setLoaded(true);
    }
  }, []);

  // Save settings
  useEffect(() => {
    if (!loaded) return; // Avoid saving during initial load
    localStorage.setItem('userSettings', JSON.stringify(settings));
  }, [settings, loaded]);

  useEffect(() => {
    if (!loaded) return;
    const html = document.documentElement;

    html.classList.toggle('dark', settings.theme === 'dark');
    html.classList.remove('text-sm', 'text-base', 'text-lg');
    html.classList.add(settings.fontSize);
  }, [settings.theme, settings.fontSize, loaded]);

  if (!loaded) return null; // Prevent rendering children until settings are loaded

  return (
    <SettingsContext.Provider value={{ settings, setSettings }}>
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = () => useContext(SettingsContext);

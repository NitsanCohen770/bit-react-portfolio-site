import React, { ReactNode } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useCallback } from 'react';
import { createContext } from 'react';
import { PortfolioSiteSettings } from './settings.type';

const SETTINGS_KEY = 'site-settings';

export type SettingsContextProps = {
  /**
   * the children that can consume the context
   */
  children?: ReactNode;
};

const initialState: PortfolioSiteSettings = {
  theme: 'light',
}

type SettingsContextType = {
  toggleTheme: () => void;
} & PortfolioSiteSettings

const SettingsContext = createContext<SettingsContextType>({
  ...initialState,
  toggleTheme: () => { }
})

export function SettingsProvider({ children }: SettingsContextProps) {
  const [settings, setSettings] = useState<PortfolioSiteSettings>(initialState);

  useEffect(() => {
    const initializeSettings = () => {
      const settings = localStorage.getItem(SETTINGS_KEY);
      if (settings) {
        setSettings(JSON.parse(settings));
      } else {
        setSettings(initialState);
      }
    }
    initializeSettings();
  }, []);

  const toggleTheme = () => {
    const newTheme = settings.theme === 'light' ? 'dark' : 'light';
    setSettings({ ...settings, theme: newTheme });
    localStorage.setItem(SETTINGS_KEY, JSON.stringify({ ...settings, theme: newTheme }));
  };

  return (
    <SettingsContext.Provider
      value={{
        theme: settings.theme,
        toggleTheme
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
}

export const SettingsConsumer = SettingsContext.Consumer;

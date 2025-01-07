import './style.css';
import React, { useState } from 'react'
import HeroPage from './HeroPage';
import { ThemeContext } from './context';
import useTheme from './useTheme';

export default function App() {

  const { theme, toggleTheme } = useTheme();

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div data-theme={theme}>
        <HeroPage />
      </div>
    </ThemeContext.Provider >
  );
}

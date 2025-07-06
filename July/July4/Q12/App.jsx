import React, { useContext } from 'react';
import { ThemeProvider, ThemeContext } from './ThemeContext';
import ThemedBox from './components/ThemedBox';

function InnerApp() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const appStyle = {
    background: theme === 'light' ? '#f9f9f9' : '#333',
    color: theme === 'light' ? '#000' : '#fff',
    minHeight: '100vh',
    padding: '20px',
    transition: 'all 0.3s ease'
  };

  return (
    <div style={appStyle}>
      <h1>React Context API - Theme Toggle</h1>
      <button onClick={toggleTheme}>
        Switch to {theme === "light" ? "Dark" : "Light"} Theme
      </button>
      <ThemedBox />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <InnerApp />
    </ThemeProvider>
  );
}

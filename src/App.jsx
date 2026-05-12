import { useState, useEffect } from 'react';
import { Home } from './Pages/Home';
import { FloatingDock } from './Pages/FlotingDock';

export default function App() {
  const [activeTheme, setActiveTheme] = useState('dark');

  // This applies the theme to the <html> tag - Best practice
  useEffect(() => {
    if (activeTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [activeTheme]);

  return (
    <div className="min-h-screen bg-background bg-slate-200 dark:bg-black/95 text-foreground transition-colors duration-500">
      <Home />
      <FloatingDock 
        currentTheme={activeTheme}
        onThemeToggle={() => 
          setActiveTheme(activeTheme === 'light' ? 'dark' : 'light')
        }
      />
    </div>
  );
}
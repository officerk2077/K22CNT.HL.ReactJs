import React, { createContext, useState } from 'react'
import NtkExamContext from './NtkExamContext';

export const ThemeContext = createContext();

export default function NtkExampleContext() {
    const [theme, setTheme] = useState('bg-dark'); // bg-dark: class cuar bootstrap

    const handleToggleTheme = ()=>{
      setTheme(theme==='bg-dark'?'bg-danger':'bg-dark')
    }
  return (
    <div>
      <ThemeContext.Provider value={theme}>
        <div>
          <button onClick={handleToggleTheme}>Change theme</button>
          <NtkExamContext/>
        </div>
      </ThemeContext.Provider>
    </div>
  )
}

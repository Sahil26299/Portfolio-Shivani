import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import ColorThemes from './Utils/GlobalState.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ColorThemes>
      <App />
    </ColorThemes>
  </React.StrictMode>,
)

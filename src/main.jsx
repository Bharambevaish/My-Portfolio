import React from 'react'
import ReactDOM from 'react-dom/client'
import { MotionConfig } from 'framer-motion'
import { IconContext } from 'react-icons'
import '@fontsource-variable/geist/wght.css'
import '@fontsource-variable/geist-mono/wght.css'
import '@fontsource/instrument-serif/400.css'
import '@fontsource/instrument-serif/400-italic.css'
import App from './App.jsx'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* reducedMotion="user" respects the visitor's OS setting */}
    <MotionConfig reducedMotion="user">
      {/* icons are decorative; buttons and links carry their own labels */}
      <IconContext.Provider value={{ attr: { 'aria-hidden': 'true', focusable: 'false' } }}>
        <App />
      </IconContext.Provider>
    </MotionConfig>
  </React.StrictMode>,
)

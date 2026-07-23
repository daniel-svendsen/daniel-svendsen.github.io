import React from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import App from './App'
import './index.css'

if ('scrollRestoration' in window.history) {
  window.history.scrollRestoration = 'manual'
}

const rootElement = document.getElementById('root')
if (rootElement) {
  const app = (
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )

  if (rootElement.hasChildNodes()) {
    hydrateRoot(rootElement, app)
  } else {
    createRoot(rootElement).render(app)
  }
} else {
  console.error("Fatal error: 'root' element not found in DOM.")
}

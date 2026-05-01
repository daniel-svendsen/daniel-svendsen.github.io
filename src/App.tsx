import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import AppProviders from './AppProviders'
import AppRoutes from './AppRoutes'

function App() {
  return (
    <AppProviders>
      <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <AppRoutes />
      </Router>
    </AppProviders>
  )
}

export default App

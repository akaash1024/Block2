import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { TechList } from '../Q12/TechList.jsx'
import { DOMComparisonApp } from '../Q13/DOMComparisonApp.jsx'
import { App } from '../Q15/App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <TechList />
    <DOMComparisonApp />
    <App />
  </StrictMode>,
)

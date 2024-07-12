import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import GlobalStyles from "./Components/GlobalStyles"
import AppRoutes from './routes.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyles>
      <AppRoutes />
    </GlobalStyles>
    <App />
  </React.StrictMode>,
)

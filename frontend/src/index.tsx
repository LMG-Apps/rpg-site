import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

ReactDOM.render(
  <React.StrictMode>
    {/* StrictMode is a tool for highlighting potential problems in an application. */}
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
import React, {StrictMode} from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx';
import {CalculateProvider} from "./context/CalculateContext.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CalculateProvider>
        <App />
    </CalculateProvider>
  </StrictMode>,
)

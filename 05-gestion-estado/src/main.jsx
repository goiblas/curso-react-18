import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from "react-redux";
import { store } from "./store";
import { ShoppingProvider } from './contexts/ShoppingContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ShoppingProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </ShoppingProvider>
  </React.StrictMode>,
)

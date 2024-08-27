import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
// import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux'
import configureStore from './store/index.js'
import { BrowserRouter as Router } from 'react-router-dom';


const store = configureStore();

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <StrictMode>
     <Router> 
        <App />
      </Router>
    </StrictMode>,
  </Provider>
)

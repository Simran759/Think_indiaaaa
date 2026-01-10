import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './GlobalStyles.css';
import './PageAnimations.css';
import './ResponsiveDesign.css';
import './HoverEffects.css';

import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

// Disable scroll restoration globally
if ('scrollRestoration' in window.history) {
  window.history.scrollRestoration = 'manual';
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <App />
  </Router>
);
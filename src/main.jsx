import React from 'react';
import ReactDOM from 'react-dom/client'
import Router from './Router';

import 'swiper/swiper.min.css';
import './assets/boxicons-2.0.7/css/boxicons.min.css';
import './App.scss';

// initialize the favs list
localStorage.setItem('favs', JSON.stringify([]))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router/>
  </React.StrictMode>,
)

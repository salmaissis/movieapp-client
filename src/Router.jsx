import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import Detail from './pages/detail/Detail';
import Favorites from './pages/Favorites';

export default function Router() {
    return (
          <BrowserRouter>
              <Routes>
                <Route
                    path='/:category/search/:keyword'
                    element={<Catalog/>}
                />
            <Route
                path='/:category/:id'
                element={<Detail/>}
            />
            <Route
                path='/:category'
                element={<Catalog/>}
            />
            <Route
                path='/'
                exact
                element={<Home/>}
            />
            <Route
                path='/favorites'
                element={<Favorites/>}
            />
              </Routes>
          </BrowserRouter>
    )
  }
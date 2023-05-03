import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import Detail from './pages/detail/Detail';
import Login from './pages/Login';

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
                path='/login'
                element={<Login/>}
            />
              </Routes>
          </BrowserRouter>
    )
  }
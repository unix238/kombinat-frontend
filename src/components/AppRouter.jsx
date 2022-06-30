import React, { useEffect, useState } from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { defaultRoutes } from '../router/index';
import { Header } from '../components/UI/Header/Header';
import { Footer } from './UI/Footer/Footer';
import { ProtectedRoute } from './ProtectedRoute';

export const AppRouter = () => {
  const [routes, setRoutes] = useState(defaultRoutes);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {routes.map((route) => (
          <Route
            path={route.path}
            element={route.component}
            exact={route.exact}
            key={route.path}
          />
        ))}
        <Route path={'/protected'} element={<ProtectedRoute />} exact={true} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

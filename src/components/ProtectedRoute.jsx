import React, { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import ServiceApi from '../api/ServiceApi';

export const ProtectedRoute = () => {
  const [auth, setAuth] = useState(false);
  const isAuth = async () => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        if (await ServiceApi.checkToken(token)) {
          setAuth(true);
        } else {
          setAuth(false);
        }
      } catch (e) {
        console.log(e);
      }
    }
  };
  useEffect(() => {
    isAuth();
  }, []);

  return auth ? 'TRUE' : 'FALSE';
};

import React, { useEffect, useState } from 'react';
import ServiceApi from '../api/ServiceApi';

export const ProtectedRoute = ({ Component, admin }) => {
  const [auth, setAuth] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const isAuth = async () => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const user = await ServiceApi.checkToken(token);
        if (user) {
          setAuth(true);
          if (user.role === 'ADMIN') {
            setIsAdmin(true);
          }
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
    // localStorage.setItem(
    //   'token',
    //   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYmQ1Y2FiYmI2ZjIxY2NlYmIxNDFmMiIsInJvbGUiOiJBRE1JTiIsImlhdCI6MTY1NzM3NzMxNSwiZXhwIjoxNjU3NDYzNzE1fQ.0vOv6tmbxgmH1Ml_HFFe_hS98HBC_YeCva9TOX0ASGo'
    // );
  }, []);

  if (admin === true) {
    return auth && isAdmin ? <Component /> : 'FALSEE';
  }
  return auth ? 'TRUE' : 'FALSE';
};

import React, { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import ServiceApi from '../api/ServiceApi';

export const ProtectedRoute = () => {
  const [auth, setAuth] = useState(false);
  const isAuth = async () => {
    const token = localStorage.getItem('token');
    // localStorage.removeItem('token');
    // localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYmQ1Y2FiYmI2ZjIxY2NlYmIxNDFmMiIsInJvbGUiOiJVU0VSIiwiaWF0IjoxNjU2NTg1NjI0LCJleHAiOjE2NTY2NzIwMjR9.Rv3Yvl_I9-7YD9U7b7-5Z4K03ZMTFuMV10CCJz5aERw');
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

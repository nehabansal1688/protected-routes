import React from 'react';
import { Outlet } from 'react-router';
import SignIn from './SignIn';

const useAuth = () => {
  const user = { loggedIn: false };
  return user;
};

const ProtectedRoutes = () => {
  const isAuth = useAuth();
  return isAuth.loggedIn ? <Outlet /> : <SignIn />;
};

export default ProtectedRoutes;

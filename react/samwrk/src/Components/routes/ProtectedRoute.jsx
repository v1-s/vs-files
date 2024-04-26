import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from '../Provider/authprovider';

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { auth } = useAuth();

  return (
    <Route
      {...rest}
      render={(props) =>
        auth.token ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

export default ProtectedRoute;
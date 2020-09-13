import React from 'react';

import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({
  component: Component, auth, redirectTo, data = undefined, ...rest
}) => (
  <Route
    {...rest}
    render={(props) => ((auth)
      ? (data) ? (<Component username={data} {...props} />) : (<Component {...props} />)
      : (
        <Redirect
          to={redirectTo}
        />
      ))}
  />
);

export default PrivateRoute;

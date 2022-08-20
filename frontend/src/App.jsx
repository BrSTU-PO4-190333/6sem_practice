import React from 'react';
// import PropTypes from 'prop-types';
import { Route, Routes } from 'react-router';

import HomePage from './components/HomePage/HomePage';
import SignInPage from './components/SignInPage/SignInPage';
import SignUpPage from './components/SignUpPage/SignUpPage';
import Error404Page from './components/Error404Page/Error404Page';

const routes = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/sign-in',
    element: <SignInPage />,
  },
  {
    path: '/sign-up',
    element: <SignUpPage />,
  },
  {
    path: '*',
    element: <Error404Page />,
  },
];

const App = (props) => {
  return (
    <Routes>
      {routes.map((item, item_i) => {
        const { path, element } = item;
        return <Route key={item_i} path={path} element={element} />;
      })}
    </Routes>
  );
};

App.propTypes = {};

export default App;

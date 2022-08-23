import React from 'react';
// import PropTypes from 'prop-types';
import { Route, Routes } from 'react-router';

import HomePage from './components/HomePage/HomePage';
import SignInPage from './components/Sign/SignInPage/SignInPage';
import SignUpPage from './components/Sign/SignUpPage/SignUpPage';
import LogoutPage from './components/LogoutPage/LogoutPage';
import YearPage from './components/YearPage/YearPage';
import MonthPage from './components/MonthPage/MonthPage';
import DatePage from './components/DatePage/DatePage';
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
    path: '/logout',
    element: <LogoutPage />,
  },
  {
    path: '/year',
    element: <YearPage />,
  },
  {
    path: '/year/:year',
    element: <YearPage />,
  },
  {
    path: '/year/:year/month',
    element: <MonthPage />,
  },
  {
    path: '/year/:year/month/:month',
    element: <MonthPage />,
  },
  {
    path: '/year/:year/month/:month/date',
    element: <DatePage />,
  },
  {
    path: '/year/:year/month/:month/date/:date',
    element: <DatePage />,
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

import React from 'react';
// import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';

const LogoutPage = (props) => {
  let navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem('AccessToken');
    navigate('/sign-in');
  }, [navigate]);

  return <div />;
};

LogoutPage.propTypes = {};

export default LogoutPage;

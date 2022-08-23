import React from 'react';
import PropTypes from 'prop-types';

import styles from './AppContainer.module.css';

const AppContainer = (props) => {
  const { children } = props;

  return <div className={styles.container} children={children} />;
};

AppContainer.propTypes = {
  children: PropTypes.element,
};

export default AppContainer;

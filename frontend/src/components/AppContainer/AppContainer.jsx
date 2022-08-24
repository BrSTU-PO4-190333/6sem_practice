import React from 'react';
import PropTypes from 'prop-types';

import styles from './AppContainer.module.css';

const AppContainer = (props) => {
  const { children, style } = props;

  return <div className={styles.container} children={children} style={style} />;
};

AppContainer.propTypes = {
  children: PropTypes.element,
  style: PropTypes.object,
};

export default AppContainer;

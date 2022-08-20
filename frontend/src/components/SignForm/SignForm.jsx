import React from 'react';
import PropTypes from 'prop-types';

import styles from './SignForm.module.css';

const SignForm = (props) => {
  return (
    <div className={styles.wrapper}>
      <form className={styles.form} onSubmit={props.onSubmit}>
        {props.children}
      </form>
    </div>
  );
};

SignForm.propTypes = {
  children: PropTypes.element,
  onSubmit: PropTypes.func,
};

export default SignForm;

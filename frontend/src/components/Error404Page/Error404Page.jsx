import React from 'react';
import PropTypes from 'prop-types';

import AppFrame from '../AppFrame/AppFrame';

const Error404Page = (props) => {
  const { message } = props;

  return (
    <AppFrame>
      <>
        <h2>Ошибка 404</h2>
        <p children={message ? message : 'Страница не найдена'} />
      </>
    </AppFrame>
  );
};

Error404Page.propTypes = {
  message: PropTypes.string,
};

export default Error404Page;

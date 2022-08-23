import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

import styles from './AppFrame.module.css';
import { useState } from 'react';

const menu = [
  {
    title: 'Создать новую таску',
    to: '/tasks/new',
  },
  {
    title: 'Таски за год',
    to: '/year',
  },
  {
    title: 'Таски за месяц',
    to: '/year/x/month',
  },
  {
    title: 'Таски за день',
    to: '/year/x/month/x/date',
  },
  {
    title: 'Выход из аккаунта',
    to: '/logout',
  },
];

const AppFrame = (props) => {
  let navigate = useNavigate();
  const { children, buttons } = props;
  const [menuIsClose, setMenuIsClose] = useState(true);

  const toPrevPage = () => {
    navigate(-1);
  };

  const menuOpenOrClose = () => {
    setMenuIsClose(!menuIsClose);
  };

  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <button
          title="Назад"
          onClick={toPrevPage}
          children={<FontAwesomeIcon icon={faArrowLeft} />}
        />
        {buttons}
        <button
          onClick={menuOpenOrClose}
          children={<FontAwesomeIcon icon={faBars} />}
        />
      </header>
      <nav
        className={styles.nav}
        style={{ display: menuIsClose ? 'none' : 'flex' }}
      >
        <button
          className={styles.nav_close_button}
          onClick={menuOpenOrClose}
          children={<FontAwesomeIcon icon={faXmark} />}
        />
        <ul>
          {menu.map((element, element_i) => {
            const { to, title } = element;
            return (
              <li key={element_i}>
                <Link to={to}>{title}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

AppFrame.propTypes = {
  children: PropTypes.element,
  buttons: PropTypes.element,
};

export default AppFrame;

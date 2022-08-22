import React from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';
import { useForm } from 'react-hook-form';

import styles from './../Sign.module.css';
import ApiRestAuthSignIn from './../../../scripts/api/rest/auth_signin_post';
import ToastController from './../../../scripts/ToastController/ToastController';

const SignInPage = (props) => {
  let navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = async (data) => {
    const isLogin = await ApiRestAuthSignIn(data);
    if (!isLogin) {
      return;
    }
    navigate('/');
  };

  const show_error = (errors = {}) => {
    const { Login } = errors || {};
    let type = [Login?.type];

    const dict = {
      required: 'Нужно заполнить обязательные поля',

      Login_startDigital: 'Логин не может начинаться с цифры',
      Login_includeSpace: 'Логин не может содержать пробелы',
      Login_onlyLatin: 'Логин должен содержать только латинские буквы',
    };

    type = type.filter((element) => element !== undefined);

    if (type.length === 0) return;
    ToastController.delete_all_messages();

    for (let i = 0; i < type.length; ++i) {
      ToastController.warning(dict[type[i]]);
      return;
    }
  };

  return (
    <div className={styles.wrapper}>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form_wrapper}>
        <h2>Авторизация</h2>
        <label htmlFor="Login">Логин</label>
        <input
          {...register('Login', {
            required: true,
            validate: {
              Login_startDigital: (value) => /^\D.*$/.test(value),
              Login_includeSpace: (value) => /^\S*$/.test(value),
              Login_onlyLatin: (value) => /^[a-zA-Z]*$/.test(value),
            },
          })}
          attribute__is_correct={errors?.Login?.type ? 'false' : '-'}
          id="Login"
          type="text"
        />
        <label htmlFor="Password">Пароль</label>
        <input
          {...register('Password', { required: true })}
          attribute__is_correct={errors?.Password?.type ? 'false' : '-'}
          id="Password"
          type="password"
        />

        <div className={styles.link_block}>
          <Link to="/sign-up"> Нет аккаунта</Link>
        </div>

        <input type="submit" value="Продолжить" />

        {errors && show_error(errors)}
      </form>
    </div>
  );
};

SignInPage.propTypes = {};

export default SignInPage;

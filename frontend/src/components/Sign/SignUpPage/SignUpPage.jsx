import React from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';
import { useForm } from 'react-hook-form';

import styles from './../Sign.module.css';
import ToastController from './../../../scripts/ToastController/ToastController';
import ApiRestAuthSignUp from './../../../scripts/api/rest/auth_signup_post';

const SignUpPage = (props) => {
  let navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = async (data) => {
    const isLogin = await ApiRestAuthSignUp(data);
    if (!isLogin) return;
    navigate('/');
  };

  const show_error = (errors = {}) => {
    const { Name, Email, Login, Password } = errors || {};
    let type = [Name?.type, Email?.type, Login?.type, Password?.type];

    const dict = {
      required: 'Нужно заполнить обязательные поля',

      Name_startSpace: 'Имя пользователя не может начинаться с пробела',
      Name_endSpace: 'Имя пользователя не может заканчиваться пробелом',
      Name_includeDigital: '',

      Email_email: 'Это не почта',

      Login_startDigital: 'Логин не может начинаться с цифры',
      Login_includeSpace: 'Логин не может содержать пробелы',
      Login_onlyLatin: 'Логин должен содержать только латинские буквы',

      Password_includeDigital: 'Пароль должен содержать цифры',
      Password_includeSpecialSymbols:
        'Пароль должен содержать специальные символы',
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
        <h2>Регистрация</h2>

        <label htmlFor="Name">Имя пользователя</label>
        <input
          {...register('Name', {
            required: true,
            validate: {
              Name_startSpace: (value) => /^\S.*$/.test(value),
              Name_endSpace: (value) => /^.*\S$/.test(value),
              Name_includeDigital: (value) => /^\D*$/.test(value),
            },
          })}
          attribute__is_correct={errors?.Name?.type ? 'false' : '-'}
          id="Name"
          type="text"
        />

        <label htmlFor="Email">Электронная почта</label>
        <input
          {...register('Email', {
            required: true,
            validate: {
              Email_email: (value) =>
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
                  value
                ),
            },
          })}
          attribute__is_correct={errors?.Email?.type ? 'false' : '-'}
          id="Email"
          type="email"
        />

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
          {...register('Password', {
            required: true,
            validate: {
              Password_includeDigital: (value) => /^.*\d.*$/.test(value),
              Password_includeSpecialSymbols: (value) =>
                /^.*[!"№;%:?*()_\-+=@#$%^&'`\\].*$/.test(value),
            },
          })}
          attribute__is_correct={errors?.Password?.type ? 'false' : '-'}
          id="Password"
          type="password"
        />

        <div className={styles.link_block}>
          <Link to="/sign-in">Уже есть аккаунт</Link>
        </div>

        <input type="submit" value="Продолжить" />
        {errors && show_error(errors)}
      </form>
    </div>
  );
};

SignUpPage.propTypes = {};

export default SignUpPage;

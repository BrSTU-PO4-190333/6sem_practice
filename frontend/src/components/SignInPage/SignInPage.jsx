import React from 'react';
import { useState } from 'react';
// import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';

import SignForm from '../SignForm/SignForm';
import ApiRestAuthSignIn from '../../scripts/api/rest/auth_signin_post';
import { useNavigate } from 'react-router';

const SignInPage = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [password, setPassword] = useState('');
  let navigate = useNavigate();

  const onSubmit = async (data) => {
    const isLogin = await ApiRestAuthSignIn(data.Login, data.Password);
    if (!isLogin) return;
    navigate('/');
  };

  return (
    <SignForm onSubmit={handleSubmit(onSubmit)}>
      <>
        <h2>Авторизация</h2>
        <label>
          <input
            {...register('Login', {
              required: 'Поле логина не может быть пустым',
              pattern: {
                value: /^[A-Za-z]+[A-Za-z0-9]{2,150}$/,
                message:
                  'Логин должен содержать пробелов\n' +
                  'Логин не должен начинаться с цифр\n' +
                  'Логин должен содержать только латинские буквы\n',
              },
              maxLength: {
                value: 150,
                message: 'Максимальная длина логина 150 символов',
              },
              minLength: {
                value: 3,
                message: 'Минимальная длина логина 3 символа',
              },
            })}
            placeholder="Логин"
            type="text"
            attribut_error={errors?.Login?.message ? 'true' : 'false'}
          />
          {errors?.Login?.message ? (
            <span>{errors?.Login?.message}</span>
          ) : null}
        </label>
        <label>
          <input
            {...register('Password', {
              required: 'Поле пароля не может быть пустым',
            })}
            placeholder="Пароль"
            type="password"
            attribut_error={errors?.Password?.message ? 'true' : 'false'}
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          {errors?.Password?.message ? (
            <span>{errors?.Password?.message}</span>
          ) : null}
        </label>

        <input type="submit" value="Продолжить" />
      </>
    </SignForm>
  );
};

SignInPage.propTypes = {};

export default SignInPage;

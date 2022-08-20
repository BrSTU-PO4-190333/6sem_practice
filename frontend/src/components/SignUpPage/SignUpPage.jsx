import React from 'react';
import { useState } from 'react';
// import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';

import SignForm from '../SignForm/SignForm';
import PasswordController from '../../scripts/PasswordController/PasswordController';
import ApiRestAuthSignUp from '../../scripts/api/rest/auth_signup_post';
import { useNavigate } from 'react-router';

const SignUpPage = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [password, setPassword] = useState('');
  let navigate = useNavigate();

  const onSubmit = async (data) => {
    const isLogin = await ApiRestAuthSignUp(
      data.Login,
      data.Password,
      data.Name
    );
    if (!isLogin) return;
    navigate('/');
  };

  return (
    <SignForm onSubmit={handleSubmit(onSubmit)}>
      <>
        <h2>Регистрация</h2>
        <label>
          <input
            {...register('Name', {
              required: 'Поле имени не может быть пустым',
              maxLength: {
                value: 150,
                message: 'Максимальная длина логина 150 символов',
              },
              minLength: {
                value: 3,
                message: 'Минимальная длина логина 3 символа',
              },
            })}
            placeholder="Как к вам обращаться"
            type="text"
            attribut_error={errors?.Name?.message ? 'true' : 'false'}
          />
          {errors?.Name?.message ? <span>{errors?.Name?.message}</span> : null}
        </label>
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
              pattern: {
                value:
                  /^(?=.*[A-ZА-Я])(?=.*[!@#$%^&*()-_=+/"№;:?\\'/`])(?=.*[0-9])(?=.*[a-zа-я]).{2,}$/,
                message: 'Не надёжный пароль',
              },
            })}
            placeholder="Пароль"
            type="password"
            attribut_error={errors?.Password?.message ? 'true' : 'false'}
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          {errors?.Password?.message ? (
            <ul>
              <li>{errors?.Password?.message}</li>

              {PasswordController.passwordHasUpLetters(password) ? (
                <li attribut_success="true">
                  Пароль содержит больше двух больших букв
                </li>
              ) : (
                <li attribut_success="false">
                  Пароль содержит больше двух больших букв
                </li>
              )}

              {PasswordController.passwordHasUpLetters(password) ? (
                <li attribut_success="true">
                  Пароль содержит больше двух больших букв
                </li>
              ) : (
                <li attribut_success="false">
                  Пароль не содержит больше двух больших букв
                </li>
              )}

              {PasswordController.passwordHasDownLetters(password) ? (
                <li attribut_success="true">
                  Пароль содержит больше двух маленьких букв
                </li>
              ) : (
                <li attribut_success="false">
                  Пароль не содержит больше двух маленьких букв
                </li>
              )}

              {PasswordController.passwordHasNumbers(password) ? (
                <li attribut_success="true">
                  Пароль содержит больше двух цифр
                </li>
              ) : (
                <li attribut_success="false">
                  Пароль не содержит больше двух цифр
                </li>
              )}

              {PasswordController.passwordHasSpecialSymbols(password) ? (
                <li attribut_success="true">
                  Пароль содержит специальные символ
                </li>
              ) : (
                <li attribut_success="false">
                  Пароль не содержит специальных символов
                </li>
              )}

              {PasswordController.passwordHasLanguageSymbols(password) ? (
                <li attribut_success="true">
                  Пароль содержит русские и (или) английские символы
                </li>
              ) : (
                <li attribut_success="false">
                  Пароль не содержит русские и (или) английские символы
                </li>
              )}
            </ul>
          ) : null}
        </label>

        <input type="submit" value="Продолжить" />
      </>
    </SignForm>
  );
};

SignUpPage.propTypes = {};

export default SignUpPage;

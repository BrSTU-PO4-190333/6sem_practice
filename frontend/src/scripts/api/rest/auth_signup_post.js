import ToastController from '../../ToastController/ToastController';
import ApiRestAuthSignIn from './auth_signin_post';

const URI = '/api/auth/sign-up/';
const TITLE = 'Регистрация';

export default async function ApiRestAuthSignUp(data = {}) {
  try {
    const url = `${process.env.REACT_APP__URL_BACKEND_SERVER}${URI}`;
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const status = response.status;
    const json = await response.json();

    if (status === 200) {
      ToastController.success('Зарегистрировались', TITLE);
      return await ApiRestAuthSignIn({
        Login: data.Login,
        Password: data.Password,
      });
    }

    ToastController.warning(json.message, TITLE);
    return false;
  } catch (error) {
    ToastController.error('' + error, URI);
    return false;
  }
}

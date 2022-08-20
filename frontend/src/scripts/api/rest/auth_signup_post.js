import ToastController from '../../ToastController/ToastController';
import ApiRestAuthSignIn from './auth_signin_post';

const URI = '/api/auth/sign-up/';

export default async function ApiRestAuthSignUp(
  Login = '',
  Password = '',
  Name = ''
) {
  try {
    const url = `${process.env.REACT_APP__URL_BACKEND_SERVER}${URI}`;
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ Name, Login, Password }),
    });

    const status = response.status;
    const json = await response.json();

    if (status === 200) {
      ToastController.success('Зарегистрировались', URI);
      return await ApiRestAuthSignIn(Login, Password);
    }

    ToastController.warning(
      `<pre>Не зарегистрировались\n${JSON.stringify(json, null, 2)}</pre>`,
      URI
    );
    return false;
  } catch (error) {
    ToastController.error('' + error, URI);
    return false;
  }
}

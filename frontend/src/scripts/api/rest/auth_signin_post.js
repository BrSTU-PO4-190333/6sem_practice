import ToastController from '../../ToastController/ToastController';

const URI = '/api/auth/sign-in/';

export default async function ApiRestAuthSignIn(Login = '', Password = '') {
  try {
    const url = `${process.env.REACT_APP__URL_BACKEND_SERVER}${URI}`;
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ Login, Password }),
    });

    const status = response.status;
    const json = await response.json();

    if (status === 200) {
      localStorage.setItem('AccessToken', json.AccessToken);
      localStorage.setItem('RefreshToken', json.RefreshToken);
      ToastController.success('Авторизовались', URI);
      return true;
    }

    localStorage.removeItem('AccessToken');
    localStorage.removeItem('RefreshToken');
    ToastController.warning(
      `<pre>Не авторизовались\n${JSON.stringify(json, null, 2)}</pre>`,
      URI
    );
    return false;
  } catch (error) {
    ToastController.error('' + error, URI);
    return false;
  }
}

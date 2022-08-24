import ToastController from '../../ToastController/ToastController';

const URI = '/api/auth/access-token/';
const TITLE = 'Обновление access токена';

export default async function ApiRestAccessTokenPut(data = {}) {
  try {
    const url = `${process.env.REACT_APP__URL_BACKEND_SERVER}${URI}`;
    const RefreshToken = localStorage.getItem('RefreshToken');
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${RefreshToken}`,
      },
      body: JSON.stringify(data),
    });

    const status = response.status;
    const json = await response.json();

    if (status === 200) {
      const { AccessToken } = json;
      localStorage.setItem('AccessToken', AccessToken);
      ToastController.info(json.message, TITLE);
      return true;
    }

    if (status === 401) {
      localStorage.removeItem('AccessToken');
      localStorage.removeItem('RefreshToken');
      window.location.replace('/sign-in');
      return false;
    }

    ToastController.warning(json.message, TITLE);
    return false;
  } catch (error) {
    ToastController.error('' + error, URI);
    return false;
  }
}

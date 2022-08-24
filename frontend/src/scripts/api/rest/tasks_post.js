import ToastController from '../../ToastController/ToastController';
import ApiRestAccessTokenPut from './auth_access_token_put';

const URI = '/api/tasks/';
const TITLE = 'Таски';

export default async function ApiRestTasksPost(data = {}) {
  try {
    const url = `${process.env.REACT_APP__URL_BACKEND_SERVER}${URI}`;
    const AccessToken = localStorage.getItem('AccessToken');
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${AccessToken}`,
      },
      body: JSON.stringify(data),
    });

    const status = response.status;

    if (status === 200) {
      ToastController.success('Таска создана', TITLE);
      return true;
    }

    if (status === 401) {
      const AccessTokenIsUpdated = await ApiRestAccessTokenPut();
      if (!AccessTokenIsUpdated) return [];
      return await ApiRestTasksPost(data);
    }

    const json = await response.json();
    ToastController.warning(json.message, TITLE);
    return false;
  } catch (error) {
    ToastController.error('' + error, URI);
    return false;
  }
}

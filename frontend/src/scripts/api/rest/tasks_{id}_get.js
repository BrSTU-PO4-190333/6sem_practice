import ToastController from '../../ToastController/ToastController';
import ApiRestAccessTokenPut from './auth_access_token_put';

const URI = '/api/tasks/';
const TITLE = 'Таски';

export default async function ApiRestTasksIdGet(id) {
  try {
    const url = `${process.env.REACT_APP__URL_BACKEND_SERVER}${URI}${id}/`;
    const AccessToken = localStorage.getItem('AccessToken');
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${AccessToken}`,
      },
    });

    const status = response.status;

    if (status === 404) return {};

    const json = await response.json();

    if (status === 200) {
      ToastController.info('Получили таски', TITLE);
      return json;
    }

    if (status === 401) {
      const AccessTokenIsUpdated = await ApiRestAccessTokenPut();
      if (!AccessTokenIsUpdated) return [];
      return await ApiRestTasksIdGet(id);
    }

    ToastController.warning(json.message, TITLE);
    return {};
  } catch (error) {
    ToastController.error('' + error, URI);
    return {};
  }
}

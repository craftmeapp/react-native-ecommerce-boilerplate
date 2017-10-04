/* @flow */

import { create as createAPI } from 'apisauce';
import { escapeChar } from '../Utilities/misc';


export default class ServerAPI {
  constructor(projectID) {
    this._api = createAPI({
      baseURL: 'http://menu.quicktouch.ru/android/',
      timeout: 10000,
    });

    this._api.addRequestTransform(request => {
      request.params.login = projectID;
    });

    this._api.addResponseTransform(response => {
      try {
        response.data = JSON.parse(escapeChar(response.data));
      } catch (err) {}
    });
  }

  getAppSettings() {
    return this._api.get('get_settings.php')
      .then(res => {
        if (!res.ok)
          return null;

        const data = res.data[0];

        return {
          version: data.version,
          updatedAt: data.last_sign_in_at,
          smartAssistantEnabled: data.smart_assistant,
        };
      });
  }

  static create(projectID) {
    return new ServerAPI(projectID);
  }
}

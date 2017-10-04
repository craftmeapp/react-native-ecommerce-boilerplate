/* @flow */

import Immutable from 'seamless-immutable';


const APP_SETTINGS_KEY = 'appSettings';


export default class SettingsService {
  constructor({ storage, serverAPI }) {
    this._storage = storage;
    this._appSettings = null;

    this._serverAPI = serverAPI;
  }

  async updateAppSettings() {
    try {
      const appSettings = await this._serverAPI.getAppSettings();
      this._appSettings = Immutable.merge(appSettings, [{ isActual: true }]);

      await this._storage.set(APP_SETTINGS_KEY, JSON.stringify(appSettings));
      return this._appSettings;
    } catch (err) {
      const appSettings = JSON.parse(await this._storage.get(APP_SETTINGS_KEY));
      if (appSettings !== null)
        this._appSettings = Immutable.merge(appSettings, [{ isActual: true }]);
      
      return this._appSettings;
    }
  }

  getAppSettings() {
    return this._appSettings;
  }

  static create({ storage, serverAPI }) {
    return new SettingsService({ storage, serverAPI });
  }
}

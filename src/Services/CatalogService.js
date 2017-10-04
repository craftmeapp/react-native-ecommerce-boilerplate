/* @flow */

const UPDATED_AT_KEY = 'updatedAt';


export default class CatalogService {
  constructor({ storage, serverAPI, settingsService }) {
    this._storage = storage;

    this._serverAPI = serverAPI;
    this._settingsService = settingsService;
  }

  async update() {
    const catalogUpdatedAt = await this._storage.get(UPDATED_AT_KEY);
    const settingsUpdatedAt = this._settingsService.getAppSettings().updatedAt;

    if (catalogUpdatedAt !== settingsUpdatedAt)
      await this._storage.set(UPDATED_AT_KEY, settingsUpdatedAt);
  }

  static create({ storage, serverAPI, settingsService }) {
    return new CatalogService({ storage, serverAPI, settingsService });
  }
}

/* @flow */

import { takeLatest } from 'redux-saga/effects';
import { ApplicationActionTypes } from '../Actions/ApplicationActions';
import { CatalogService, ServerAPI, SettingsService } from '../Services';
import Storage from '../Utilities/Storage';
import { startup } from './ApplicationSagas';

const globalStorage = Storage.create(),
  serverAPI = ServerAPI.create('dmalakhov');

const settingsStorage = globalStorage.substorage('Settings');
const settingsService = SettingsService.create({
  storage: settingsStorage,
  serverAPI,
});

const catalogStorage = globalStorage.substorage('Catalog');
const catalogService = CatalogService.create({
  storage: catalogStorage,
  serverAPI,
  settingsService,
});

export default function* root() {
  yield [
    takeLatest(
      ApplicationActionTypes.STARTUP,
      startup,
      settingsService,
      catalogService
    ),
  ];
}

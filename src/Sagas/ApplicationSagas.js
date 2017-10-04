// @flow

import { call, put } from 'redux-saga/effects';

import ApplicationActions from '../Actions/ApplicationActions';
import NavigationActions from '../Actions/NavigationActions';
import SettingsActions from '../Actions/SettingsActions';


function* updateAppSettings(settingsService) {
  const appSettings = yield call([
    settingsService,
    settingsService.updateAppSettings,
  ]);

  if (!appSettings || !appSettings.isActual) {
    // TODO: add inactual or null application settings handling
    throw Error('Error while updating application settings!');
  }

  yield put(SettingsActions.updateAppSettings(appSettings));
}

function* updateCatalog(catalogService) {
  yield call([catalogService, catalogService.update]);
}

export function* startup(settingsService, catalogService) {
  try {
    yield put(ApplicationActions.startUpdating());
    yield* updateAppSettings(settingsService);
    yield* updateCatalog(catalogService);
  } catch (err) {} finally {
    yield put(ApplicationActions.finishUpdating());
  }

  yield put(NavigationActions.navigate('MainScreen'));
}

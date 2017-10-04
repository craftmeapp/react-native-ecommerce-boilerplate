// @flow

import { createReducer } from 'reduxsauce';
import Immutable from 'seamless-immutable';

import { SettingsActionTypes } from '../Actions/SettingsActions';


export const INITIAL_STATE = Immutable({
  appSettings: null,
  updating: false,
});

const updateAppSettings = (state, { appSettings }) =>
  state.merge({ appSettings });

export const reducer = createReducer(INITIAL_STATE, {
  [SettingsActionTypes.UPDATE_APP_SETTINGS]: updateAppSettings,
});


export default reducer;

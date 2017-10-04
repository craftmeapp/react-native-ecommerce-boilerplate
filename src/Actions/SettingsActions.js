/* @flow */

import { createActions } from 'reduxsauce';


const { Types, Creators } = createActions({
  updateAppSettings: ['appSettings'],
});


export const SettingsActionTypes = Types;
export default Creators;

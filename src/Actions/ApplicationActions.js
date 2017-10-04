// @flow

import { createActions } from 'reduxsauce';


const { Types, Creators } = createActions({
  startup: null,

  startUpdating: null,
  finishUpdating: null,
});


export const ApplicationActionTypes = Types;
export default Creators;

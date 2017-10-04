// @flow

import { createReducer } from 'reduxsauce';
import Immutable from 'seamless-immutable';

import { ApplicationActionTypes } from '../Actions/ApplicationActions';


export const INITIAL_STATE = Immutable({
  updating: false,
});


const startUpdating = state => state.merge({ updating: true });
const finishUpdating = state => state.merge({ updating: false });

export const reducer = createReducer(INITIAL_STATE, {
  [ApplicationActionTypes.START_UPDATING]: startUpdating,
  [ApplicationActionTypes.FINISH_UPDATING]: finishUpdating,
});


export default reducer;

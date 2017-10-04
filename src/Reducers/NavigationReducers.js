/* @flow */

import { NavigationActions } from 'react-navigation';
import { createReducer } from 'reduxsauce';

import { NavigationActionTypes } from '../Actions/NavigationActions';
import { Navigator } from '../Navigation';


const navigatePreloadScreenAction =
  Navigator.router.getActionForPathAndParams('PreloadScreen');


export const INITIAL_STATE =
  Navigator.router.getStateForAction(navigatePreloadScreenAction);


const navigate = (state, { routeName }) => Navigator.router.getStateForAction(
  NavigationActions.navigate({ routeName }),
  state,
);

export const reducer = createReducer(INITIAL_STATE, {
  [NavigationActionTypes.NAVIGATE]: navigate,
});


export default reducer;

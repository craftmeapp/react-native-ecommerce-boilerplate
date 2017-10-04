// @flow

import { createActions } from 'reduxsauce';


const { Types, Creators } = createActions({
  navigate: ['routeName'],
});


export const NavigationActionTypes = Types;
export default Creators;

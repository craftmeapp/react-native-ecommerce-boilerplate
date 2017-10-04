// @flow

import React from 'react';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';
import { connect } from 'react-redux';

import MainScreen from '../Containers/MainScreen';
import PreloadScreen from '../Containers/PreloadScreen';


const Navigator = StackNavigator({
  PreloadScreen: { screen: PreloadScreen },
  MainScreen: { screen: MainScreen },
}, {
  headerMode: 'none',
  initialRouteName: 'PreloadScreen',
});

const _NavigatorWithState = ({ dispatch, navigation }) => (
  <Navigator
    navigation={addNavigationHelpers({ dispatch, state: navigation })}
  />
);

const mapStateToProps = state => ({
  navigation: state.navigation,
});


export const NavigatorWithState = connect(mapStateToProps)(_NavigatorWithState);

export default Navigator;

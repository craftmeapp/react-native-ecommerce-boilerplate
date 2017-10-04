/* @flow */

import React, { Component } from 'react';
import { connect } from 'react-redux';

import ApplicationActions from '../Actions/ApplicationActions';
import { ActivityIndicator, Image, View } from '../Components/Base';
import { Images } from '../Theme';


const MainView = View.extend``;
const LogoView = View.extend`
  margin: 50px
`;
const LogoImage = Image.extend`
  height: 100%
  width: 100%
`;
const UpdateActivityIndicator = ActivityIndicator.extend`
  margin-bottom: 50px
`;

class PreloadScreen extends Component {
  componentDidMount() {
    this.props.startup();
  }

  _renderUpdateActivityIndicator() {
    if (this.props.isUpdating) {
      return (
        <UpdateActivityIndicator visible="false" />
      );
    }
    return null;
  }

  render() {
    return (
      <MainView>
        <LogoView>
          <LogoImage
            source={Images.preload.centerLogo}
            resizeMode="contain"
            resizeMethod="resize"
          />
        </LogoView>
        {this._renderUpdateActivityIndicator()}
      </MainView>
    );
  }
}

const mapStateToProps = state => ({
  isUpdating: state.application.updating,
});

const mapDispatchToProps = dispatch => ({
  startup: () => dispatch(ApplicationActions.startup()),
});


export default connect(mapStateToProps, mapDispatchToProps)(PreloadScreen);

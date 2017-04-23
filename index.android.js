/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
//import Color from 'react-native-material-color';
//import Home from './components/Home';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';

import Login from './src/components/login/Login';
import SplashScreen from './src/components/splashScreen/SplashScreen';
import Main from './src/components/main/Main';
import Profile from './src/components/profile/Profile';
//import Home from './src/components/Home';
import Camera from './src/components/camera/Camera';
import Map from './src/components/map/Map';
// var Login = require('./src/components/Login/Login');
// var Profile = require('./src/components/profile/Profile');

export default class AwesomeProject extends Component {

  constructor(){
    super()
    this.navigatorRenderScene = this.navigatorRenderScene.bind(this)

  }


    navigatorRenderScene(route,navigator){
      mNavigator = navigator;
      switch (route.id) {
        case 'Main':
              return(<Main navigator={navigator}/>);
        case 'Profile':
              return(<Profile navigator={navigator}/>);
        case 'Camera':
              return(<Camera navigator={navigator}/>);
        case 'Map':
              return(<Map navigator={navigator}/>);

      }
    }


  render() {
    return (
      //<Main/>
      <Navigator
      initialRoute = {{id:'Main'}}
      renderScene={this.navigatorRenderScene}
    />
       /*<SplashScreen duration={3000} style={styles.container} >
         <Login/>
       </SplashScreen>*/
    );
  }


}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0091EA',
  },

});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);

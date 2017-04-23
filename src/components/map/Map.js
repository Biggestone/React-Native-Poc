/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Navigator,
  TouchableHighlight,
  TouchableOpacity
} from 'react-native';

import MapView from 'react-native-maps';


export default class MyComponent extends Component {

  exitMap(){
    this.props.navigator.pop()
  }

  render() {
    const { region } = this.props;
        console.log(region);

    return (
      <View style={styles.containerMap}>

        <MapView
          style={styles.map}
          region={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
        />
        <TouchableOpacity onPress={this.exitMap.bind(this)} style={styles.buttonExitMap}>

            <Text style={styles.xMap}>X</Text>

        </TouchableOpacity>

      </View>


    );
  }
}

const WIDTH = Dimensions.get('window').width,HEIGHT = Dimensions.get('window').height

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: WIDTH,
    width: HEIGHT,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  containerMap:{
    flex:1,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  xMap:{
    fontWeight:'bold',
    color:'#fff',
  },
  buttonExitMap:{
    backgroundColor:'#0091EA',
    height:50,
    width:50,
    borderRadius:30,
    alignItems:'center',
    justifyContent:'center',
    marginBottom:10,
    marginTop:20,
    marginLeft:20,
  }
});

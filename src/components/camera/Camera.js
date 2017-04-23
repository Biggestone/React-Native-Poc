/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableHighlight
} from 'react-native';

import Camera from 'react-native-camera';

export default class CameraClass extends Component {
  constructor(){
    super()

  }
  takePicture() {
    const options = {};
      //options.location = ..
      this.camera.capture({metadata: options})
        .then((data) => console.log(data))
        .catch(err => console.error(err));
 }

 exitCamera(){
    this.props.navigator.pop()
 }

  render() {
    return (
      <View style={styles.container}>
        <Camera
          ref={(cam) => {
            this.camera = cam;
          }}
          style={styles.preview}
          aspect={Camera.constants.Aspect.fill}>
          <View>
            <Text style={styles.capture} onPress={this.takePicture.bind(this)}>Tirar Foto</Text>
          </View>
          <TouchableHighlight
            onPress={this.exitCamera.bind(this)}
            activeOpacity={0.7}
            underlayColor="transparent"
            style={{marginBottom:10}}>
            <View style={[styles.buttonExitCam,this.props.selected?{backgroundColor:'#1565C0'}:{}]}>
              <Text style={styles.xCamera}>X</Text>
            </View>
          </TouchableHighlight>
        </Camera>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      flexDirection: 'row',
    },
    preview: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center'
    },
    capture: {
      flex: 0,
      backgroundColor: '#0091EA',
      borderRadius: 20,
      color: '#fff',
      padding: 10,
      margin: 40,
      fontWeight:'bold'
    },
    xCamera:{
      fontWeight:'bold',
      color:'#fff',
    },
    buttonExitCam:{
      backgroundColor:'#0091EA',
      height:50,
      width:50,
      borderRadius:30,
      alignItems:'center',
      justifyContent:'center'
    }
});

/* This class is not used. It was only used as a test before, but I let it here

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  Button,
  Alert
} from 'react-native';

export default class Home extends Component {
  constructor(props){
    super(props)
    this.callAnotherPage = this.callAnotherPage.bind(this);
  }

  callAnotherPage(){
    this.props.navigator.push({id:'Main'});
  }

    render() {
        return (
          <View style={styles.toolbar}>
            <Button onPress={this.callAnotherPage} title='aaa'>call</Button>
          </View>
        );
    }
}

var styles = StyleSheet.create({
    toolbar: {
        height: 56,
        width:100,

    },
    buttonStyle:{
      borderRadius:10,
    },
});
*/

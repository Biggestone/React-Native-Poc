/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Navigator
} from 'react-native';

export default class SplashScreen extends Component {
  constructor(props){
    super(props);
    this.state = {
      done:false
    }
  }


  timer(){
    setTimeout(()=>{this.setState({
        done:true
    });
  },this.props.duration)
  }

  componentDidMount(){
    this.timer();
  }

  render() {

    return (
      this.state.done ?
      ({...this.props.children})
      :
      (

      <View style={styles.container}  >
          <Image style={styles.icon}source={require(('../../images/icon-logo.png'))}/>
      </View> )
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
  icon:{
    width:300,
    height:100,
    resizeMode:'contain'
  }
});

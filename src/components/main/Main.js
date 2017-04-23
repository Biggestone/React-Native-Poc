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
  Navigator,
  Image,
  TouchableHighlight,
  ScrollView,
  TextInput,
} from 'react-native';

import Login from '../login/Login';
import SplashScreen from '../splashScreen/SplashScreen';

class Main extends Component {

  constructor(props){
    super(props);
    this.callPage = this.callPage.bind(this);
    this.state = {
      pressed : false
    }
  }

  callPage(){
    this.props.navigator.push({
      id:'Profile'
    });
  }

  render() {
    return (


      <View style={styles.container}>
          <View style={styles.formContainer}>
              <View style={styles.container}>
                <Image
                  style={styles.logo}
                   source={require('../../images/icon-logo.png')}/>
                <View style={styles.containerUser}>
                  <TextInput
                    underlineColorAndroid="transparent"
                    style={styles.input}/>
                  <Image style={styles.icon}
                  source={require('../../images/lock-outline.png')}/>
                </View>

                <View style={styles.containerPassword}>
                  <TextInput
                    underlineColorAndroid="transparent"
                    style={styles.input}/>
                  <Image style={styles.icon}
                  source={require('../../images/account-outline.png')}/>
                </View>

                <TouchableHighlight onPress={this.callPage}
                  underlayColor="#0091EA"
                  activeOpacity={0.7}
                onHideUnderlay={()=>{this.setState({pressed:false})}}
                onShowUnderlay={()=>{this.setState({pressed:true})}}>
                  <View style = {[styles.button, this.state.pressed ? {backgroundColor:'#fff'}:{}]}>
                    <Text style={styles.textButtonColor}>Login</Text>
                  </View>

                </TouchableHighlight>
                <Text style={styles.text}>Esqueceu o Password?</Text>
              </View>
        </View>
      </View>
  );
}



}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent:'center',
    backgroundColor:'#0091EA'
  },
  containerWithContent:{
    justifyContent:'center',
    backgroundColor:'#000'
  },
  logo:{
    width:300,
    height:100,
    resizeMode:'contain',
    marginBottom:10,
  },
  title:{
    color:'#fff'
  },
  formContainer:{
    alignItems:'center',
    justifyContent:'center',
  },
  input:{
    height:50,
    width:300,
    borderWidth: 3,
    borderColor:'#fff',
    borderRadius:20,
    paddingLeft:20,
    marginBottom:10,
    color:'#fff'
  },
  containerUser:{
    height:50,
    width:300,
    marginBottom:10,
  },
  containerPassword:{
    height:50,
    width:300,
    marginBottom:10,
  },
  button:{
    alignItems:'center',
    height:50,
    width:300,
    backgroundColor:'#fff',
    borderRadius: 20,
    justifyContent:'center',
    marginBottom:10,
  },
  textButtonColor:{
    color:'#0091EA',
    fontWeight:'bold',
    fontSize:20,
  },
  text:{
    color:'#fff',
    fontSize:12,
  },
  icon:{
    position:'absolute',
    width:24,
    height:24,
    resizeMode:'contain',
    bottom:15,
    right:10,
  }
});

export default Main

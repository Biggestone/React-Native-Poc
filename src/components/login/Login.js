/** --This Class is not used anymore. It was before imported into Login.js 
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow


import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Navigator,
  TextInput,
  TouchableHighlight
} from 'react-native';
import LoginForm from './LoginForm';

class Login extends Component {

  constructor(props){
    super(props);
    this.callPage = this.callPage.bind(this);
    this.state = {
      pressed : false
    }
  }

  callPage(){
    this.props.navigator.push({
      id:'Home'
    });
  }
    render() {
      return (

        <View style={styles.container}>

           <View style={styles.logoContainer}>
              <Image
                style={styles.logo}
                 source={require('../../images/icon-logo.png')}/>
            </View>
            <View style={styles.formContainer}>
              <ScrollView>
                <View style={styles.container}>
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

                  <TouchableHighlight onPress={this.callPage} style = {[styles.button, this.state.pressed ? {backgroundColor:'#fff'}:{}]}
                  onHideUnderlay={()=>{this.setState({pressed:false})}}
                  onShowUnderlay={()=>{this.setState({pressed:true})}}>
                    <Text style={styles.textButtonColor}>Login</Text>
                  </TouchableHighlight>
                  <Text style={styles.text}>Esqueceu o Password?</Text>
                </View>
              </ScrollView>

          </View>
        </View>
    );
  }

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#0091EA',
    padding:30

  },
  logoContainer:{
    alignItems:'center',
    flexGrow:1,
    justifyContent:'center',
  },
  logo:{
    width:300,
    height:100,
    resizeMode:'contain'
  },
  title:{
    color:'#fff'
  },
  formContainer:{
    alignItems:'center',
    justifyContent:'center',
    flexGrow:3,
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
export default Login
*/

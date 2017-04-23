/* @flow  --This Class is not used anymore. It was before imported into Login.js 

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  Button,
  Alert,
  TouchableHighlight,
  Navigator
} from 'react-native';


 class LoginForm extends Component {
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
        );
    }
}


const styles = StyleSheet.create({
  container: {
    justifyContent:'center',
    alignItems:'center',
    flex: 1,
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
export default LoginForm
*/

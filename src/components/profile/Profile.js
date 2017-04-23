/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Navigator,
  ScrollView,
  Image,
  TouchableHighlight
} from 'react-native';

import{Card} from 'react-native-material-design';
import{Grid,Row,Col} from 'react-native-grid-layout';

class Profile extends Component {

  constructor(props){
    super(props)
    this.callPage=this.callPage.bind(this);
    this.callCamera=this.callCamera.bind(this);
    this.callMap=this.callMap.bind(this);
    this.callAdd=this.callAdd.bind(this);
  }

  callPage(){
    this.props.navigator.pop();
  }
  callCamera(){
    this.props.navigator.push({
      id:'Camera'
    });
  }

  callMap(){
    this.props.navigator.push({
      id:'Map'
    });
  }

  callAdd(){

  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.boxOne}>
          <View style={styles.boxActionBar}>
            <Grid>
              <Col size={1}>
                  <Row >
                    <TouchableHighlight onPress={this.callPage}
                      activeOpacity={0.7}
                      underlayColor="#0091EA">
                      <View style={[styles.arrowButton, this.props.selected?{backgroundColor:'#1565C0'}:{}]}>
                        <Image style={styles.leftArrow}  source={require('../../images/left-arrow.png')}/>
                      </View>
                    </TouchableHighlight>
                  </Row>
              </Col>
              <Col size={2}>
                <Row ><Text style={styles.fulano}>Porto Seguro</Text></Row>
              </Col>
            </Grid>
          </View>
          <View style={styles.boxProfile}>
            <Grid>
              <Col size={1}>
                <Row>
                  <Image style={styles.picUser} source={require('../../images/usuario.png')}/>
                </Row>
              </Col>
              <Col size={2.5}>
                <Row size ={1}>
                  <Col><Row><Text style={styles.bemVindo}>Bem vindo, <Text style={styles.fulano}>Fulano</Text></Text></Row></Col>
                </Row>
                <Row size={3}>
                  <Col>
                    <Row size={1}>
                      <Col><Row><Text style={styles.textOfProfileOne}>Plano: <Text style={styles.textOfProfileTwo}>Guincho Plus</Text></Text></Row></Col>
                    </Row>
                    <Row size={2}>
                      <Col ><Row><Text style={styles.textOfProfileOne}>Vigência: <Text style={styles.textOfProfileTwo}>15/07/2017</Text></Text></Row></Col>
                    </Row>
                  </Col>
                  <Col>
                    <Row >
                      <Col >
                        <Row >
                          <TouchableHighlight onPress={this.callMap}
                          activeOpacity={0.7}
                          underlayColor="#0091EA">

                          <Row><Image style={styles.rowOfIcon} source={require('../../images/placeholder.png')}/></Row>

                          </TouchableHighlight>
                        </Row>
                      </Col>
                      <Col>
                        <Row>
                          <TouchableHighlight onPress={this.callCamera}
                          activeOpacity={0.7}
                          underlayColor="#0091EA">

                            <Row><Image style={styles.rowOfIcon} source={require('../../images/photo-camera.png')}/></Row>

                        </TouchableHighlight>
                    </Row>
                    </Col>
                      <Col>
                        <Row>
                          <TouchableHighlight onPress={this.callAdd}
                          activeOpacity={0.7}
                          underlayColor="#0091EA">
                          <Row><Image style={styles.rowOfIcon} source={require('../../images/add.png')}/></Row>
                          </TouchableHighlight>
                        </Row>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Col>

            </Grid>

          </View>
        </View>
        <View style={styles.boxTwo}>
          <ScrollView>
            <View style={styles.cardOne}>
                <Grid>
                  <Col >
                    <Row style={{marginLeft:20, marginTop:10}}><Text style={styles.textLabel}>Tipo de ocorr.:</Text></Row>
                    <Row style={{marginLeft:20}}><Text style={styles.textLabel}>Status</Text></Row>
                    <Row style={{marginLeft:20}}><Text style={styles.textLabel}>Prestador</Text></Row>
                  </Col>
                  <Col>
                    <Row style={{marginLeft:20, marginTop:10}}><Text style={styles.text}>A definir</Text></Row>
                    <Row style={{marginLeft:20}}><Text style={styles.text}>A caminho</Text></Row>
                    <Row style={{marginLeft:20}}><Text style={styles.text}>Joä Fulano</Text></Row>
                  </Col>
                  <Col>
                    <Row><Image style={styles.pics} source={require('../../images/mecanicojose.png')}/></Row>

                  </Col>
                  <Col>
                    <Row style={{marginLeft:20, marginTop:10}}><Text style={styles.text}>10/02/2017</Text></Row>
                    <Row style={{marginLeft:20}}><View style={styles.viewCapsule}><Text style={{color:'#fff', alignItems:'center'}}>30:59</Text></View></Row>
                    <Row style={{marginLeft:20}}><Image style={styles.image} source={require('../../images/pictures.png')}/></Row>
                  </Col>
                </Grid>
            </View>
            <View style={styles.cardTwo}>
              <Grid>
                <Col >
                  <Row style={{marginLeft:20, marginTop:10}}><Text style={styles.textLabel}>Tipo de ocorr.:</Text></Row>
                  <Row style={{marginLeft:20}}><Text style={styles.textLabel}>Status</Text></Row>
                  <Row style={{marginLeft:20}}><Text style={styles.textLabel}>Prestador</Text></Row>
                </Col>
                <Col>
                  <Row style={{marginLeft:20, marginTop:10}}><Text style={styles.text}>A definir</Text></Row>
                  <Row style={{marginLeft:20}}><Text style={styles.text}>A caminho</Text></Row>
                  <Row style={{marginLeft:20}}><Text style={styles.text}>Joä Fulano</Text></Row>
                </Col>
                <Col>
                  <Row><Image style={styles.pics} source={require('../../images/mecanicomario.png')}/></Row>

                </Col>
                <Col>
                  <Row style={{marginLeft:20, marginTop:10}}><Text style={styles.text}>10/02/2017</Text></Row>
                  <Row style={{marginLeft:20}}><View style={styles.viewCapsule}><Text style={{color:'#fff', alignItems:'center'}}>00:00</Text></View></Row>
                  <Row style={{marginLeft:20}}><Image style={styles.image} source={require('../../images/pictures.png')}/></Row>
                </Col>
              </Grid>

            </View>
            <View style={styles.cardThree}>
              <Grid>
                <Col >
                  <Row style={{marginLeft:20, marginTop:10}}><Text style={styles.textLabel}>Tipo de ocorr.:</Text></Row>
                  <Row style={{marginLeft:20}}><Text style={styles.textLabel}>Status</Text></Row>
                  <Row style={{marginLeft:20}}><Text style={styles.textLabel}>Prestador</Text></Row>
                </Col>
                <Col>
                  <Row style={{marginLeft:20, marginTop:10}}><Text style={styles.text}>A definir</Text></Row>
                  <Row style={{marginLeft:20}}><Text style={styles.text}>A caminho</Text></Row>
                  <Row style={{marginLeft:20}}><Text style={styles.text}>Joä Fulano</Text></Row>
                </Col>
                <Col>
                  <Row><Image style={styles.pics} source={require('../../images/mecanicopedro.png')}/></Row>

                </Col>
                <Col>
                  <Row style={{marginLeft:20, marginTop:10}}><Text style={styles.text}>10/02/2017</Text></Row>
                  <Row style={{marginLeft:20}}><View style={styles.viewCapsule}><Text style={{color:'#fff', alignItems:'center'}}>00:00</Text></View></Row>
                  <Row style={{marginLeft:20}}><Image style={styles.image} source={require('../../images/pictures.png')}/></Row>
                </Col>
              </Grid>

            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 6,
  },
  boxOne:{
    flex:1,
    backgroundColor:'#0091EA',

  },
  boxActionBar:{
    flex:1.5,
    marginTop:10,
  },
  arrowButton:{
    marginLeft:20,
    width:35,
    height:35,
    borderRadius:30,
    alignItems:'center',
    justifyContent:'center',
  },
  boxProfile:{
    flex:4,

  },
  boxTwo:{
    flex:3,
    backgroundColor:'#FAFAFA',
  },
  tipoOcorr:{
    position:'absolute',
    left:0,

  },
  statusOcrr:{
    position:'absolute',
    left:130,

  },
  date:{
    position:'absolute',
    right:0,

  },
  statusOcrr:{
    position:'absolute',
    left:0,

  },
  timeleft:{
    position:'absolute',
    right:0,

  },
  cardOne:{
    backgroundColor:'#fff',
    height:150,
    elevation:3,
    margin:10,
    borderRadius:10,

  },
  cardTwo:{
    backgroundColor:'#fff',
    height:150,
    elevation:3,
    margin:10,
    borderRadius:10,

  },
  cardThree:{
    backgroundColor:'#fff',
    height:150,
    elevation:3,
    margin:10,
    borderRadius:10,

  },
  textLabel:{
    fontSize:12,
    color:'#0091EA',
  },
  text:{
    fontSize:12,
  },
  image:{
    width:30,
    height:30,
    resizeMode:'contain',
    alignItems:'center',

  },
  pics:{
    width:30,
    height:30,
    resizeMode:'contain',
    alignSelf:'flex-end',
    marginBottom:20,
  },
  viewCapsule:{
    backgroundColor:'#0091EA',
    height:20,
    width:50,
    borderRadius:10,
    alignItems:'center'
  },
  picUser:{
    width:80,
    height:80,
    marginLeft:20,
    resizeMode:'contain',
    alignItems:'center',
  },
  bemVindo:{
    fontSize:20,
    color:'#0D47A1',
    fontWeight:'bold',
  },
  fulano:{
    fontSize:20,
    color:'#fff',
    fontWeight:'bold',
  },
  imageButtons:{
    position:'absolute',
    bottom:20,
    width:100,
    alignSelf:'flex-end',
  },iconOfImageButtons:{
    width:30,
    height:30,
    resizeMode:'contain',
    alignItems:'center',
  },textOfProfileOne:{
    color:'#0D47A1',
    fontSize:12,
  },textOfProfileTwo:{
    color:'#fff',
    fontSize:12,
  },
  rowOfIcon:{
    alignSelf:'center',
    width:20,
    height:20,
  },
  leftArrow:{
    width:24,
    height:24,
    resizeMode:'contain',
  },
  cameraButton:{
    width:20,
    height:20,
    resizeMode:'contain',
  },
  viewsOfButtons:{
    width:24,
    height:24,
    backgroundColor:'#000',
  }
});
export default Profile

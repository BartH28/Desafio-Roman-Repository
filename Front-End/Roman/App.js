
import React, { Component } from 'react';
import {

  StyleSheet,
  Text,
  Image,
  TextInput,
  TouchableOpacity,

  View,
  ColorPropType,
} from 'react-native';


export default class App extends Component{
  
  render(){
    return (
     <View   style={styles.container}>
       <Text style={styles.tituloLogo}>Roman</Text>
       <Image source={require('../Roman/assets/logoLoginn.png')}
          style={styles.imgLogo}
       />
       <TextInput style={styles.inputLogin}
       placeholder="Email" placeholderTextColor="rgba(0,0,0,0.65)"></TextInput>
       <TextInput style={styles.inputLogin}
       placeholder="Senha"
       placeholderTextColor="rgba(0,0,0,0.65)"
       ></TextInput>

       <TouchableOpacity
       style={styles.btnLogin}
       > 
       <Text  style={styles.btnText}>
       Login
       </Text>

       </TouchableOpacity>


     </View>
    );
  }
};

const styles = StyleSheet.create({
 container: { 
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(39,198,250,0.66)'
 },
 inputLogin:{
   width: 240,
   height: 50,
   marginBottom: 20,
   color: 'black',
   borderBottomColor: 'Black',
   borderBottomWidth: 2

 },
 imgLogo:{
   tintColor: 'black',
   width: 122,
   height: 99.25,
   marginBottom: 45,
   shadowColor:'black',
   shadowOffset:{width:0,height:4},
   shadowOpacity:0.25,
   
 },

 btnLogin:{
 width:180,
 height:27,
 backgroundColor:'rgba(251,251,251,0.56)',
 borderRadius:50,
 alignItems:'center',
 justifyContent:'center',
 marginTop:50
 },

 btnText:{
  color:"#007EA7"
 }


});


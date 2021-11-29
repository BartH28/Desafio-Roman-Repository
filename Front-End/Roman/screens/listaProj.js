import React, { Component } from 'react';
import {

  StyleSheet,
  Text,
  Image,
  TextInput,
  FlatList,
  View,
  ScrollView
} from 'react-native';

import {TouchableOpacity} from 'react-native-gesture-handler';

import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../Services/api';

export default class Projetos extends Component {
    constructor(props){
        super(props);
        this.state = { 
            listaProjetos: []
        }
    }

    buscarProj = async () => {
        const token = await AsyncStorage.getItem('TokenU');

        const resp = await api.get('/Projetos',{
            headers: {
              Authorization: 'Bearer ' + token,
            },
          }
          );
        this.setState({listaProjetos: resp.data})
        console.warn(resp.data)
    };

    componentDidMount(){
        this.buscarProj();

    }

    render(){
        return(
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.textoP}>Projetos</Text>
            <Image source={require('../assets/img/menina.png')}
          style={styles.imgmenina}
       />
                <View >
                    <FlatList
                        contentContainerStyle={styles.quadrado1}
                        data={this.state.listaProjetos}
                        keyExtractor={item => item.idProjeto}
                        renderItem={this.renderItem}
                    />

                </View>
        </ScrollView>
    )  
    }

    renderItem = ({item}) => (
       
     <View style={styles.quadrado}>
         <Text>{item.nome}</Text>
         <Text>{item.idTemaNavigation.nomeTema}</Text>
         <Text>{item.descricao}</Text>
     </View>
    )

}

const styles = StyleSheet.create({

    container:{
        alignItems:'center',
        backgroundColor: 'rgba(39,198,250,0.05)'
    },

    textoP:{
    fontSize:36,
    marginTop:80,
    marginBottom:40
    },

    imgmenina:{
        marginBottom:50
    },

    quadrado:{
        borderColor:'rgba(39,198,250,100)',
        borderWidth:1,
        width:319,
        height:150,
        borderRadius:20,
        alignItems:'center',
        marginBottom:55
        
    },
    quadrado1:{
        alignItems:'center'
    }



});

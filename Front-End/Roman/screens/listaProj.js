import React, { Component } from 'react';
import {

  StyleSheet,
  Text,
  Image,
  TextInput,
  FlatList,
  View,
  ScrollView,
  SectionList
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
    };

    componentDidMount(){
        this.buscarProj();

    }

    render(){
        return(


         
    //     <ScrollView
    //      contentContainerStyle={styles.container}
    //      >
    //         <Text style={styles.textoP}>Projetos</Text>
    //         <Image source={require('../assets/img/menina.png')}
    //       style={styles.imgmenina}
    //    />
                <View >
                    <FlatList
                        ListHeaderComponent={
                            <>
                            <Text style={styles.textoP}>Projetos</Text>
                            <Image source={require('../assets/img/menina.png')}
                            style={styles.imgmenina}/>
                            </>
                        }
                        contentContainerStyle={styles.container}
                        data={this.state.listaProjetos}
                        keyExtractor={item => item.idProjeto}
                        renderItem={this.renderItem}
                    />

                </View>
        // </ScrollView>
    )  
    }

    renderItem = ({item}) => (
       
     <View style={styles.quadrado}>
         <Text style={styles.nomeP}>{item.nome}</Text>
         <Text style={styles.nomeTema}>{item.idTemaNavigation.nomeTema}</Text>
         <Text style={styles.descricao}>{item.descricao}</Text>
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
    marginBottom:40,
    marginLeft:30
    },

    imgmenina:{
        marginBottom:50
    },

    quadrado:{
        borderColor:'rgba(39,198,250,100)',
        borderWidth:1,
        width:319,
        height:200,
        borderRadius:20,
        alignItems:'center',
        marginBottom:55
        
    },
    nomeP:{
        fontSize:18,
        borderBottomWidth:1,
        borderBottomColor:"rgba(39,198,250,100)",
        paddingTop:13,
        paddingBottom:8,
    },

    nomeTema:{
        fontSize:16,
        paddingTop:20
    },

    descricao:{
        width:270,
        paddingTop:20
    }
   



});

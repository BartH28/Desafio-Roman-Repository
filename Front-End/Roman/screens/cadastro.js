import axios from 'axios';
import RNPickerSelect from 'react-native-picker-select';
import React, { Component } from 'react';
import {

    StyleSheet,
    Text,
    Image,
    TextInput,
    FlatList,
    View,
    ScrollView,
    SectionList,
    Picker,
    TouchableOpacity
} from 'react-native';
import api from '../Services/api';

export default class Cadastro extends Component {
    constructor(props) {
        super(props);
        this.state = {
          nome: '',
          idTema:0,
          listaTema:[1, 2, 3, 4,5,6,7],
          descricao: ''
        };
      }


      cadastrar = async projeto =>
      {
        try{
            const evento = await {
                    nome: this.state.nome,
                    idTema: this.state.idTema,
                    descricao: this.state.descricao
            }


            const token = await AsyncStorage.getItem('TokenU');

            

            const resp = await api.post('/Projetos', evento,{
                headers: {
                  Authorization: 'Bearer ' + token,
                }
            })

            if (resp.status === 201) {
                this.props.navigation.navigate('Projeto')
            }

        }catch (erro){
            console.warn(error)
            throw error
        }
      }


    render() {
        return (
            <View>
                <Text>Cadastro</Text>
                <View>
                    <TextInput style={styles.inputLogin}
                        placeholder="Nome Projeto"
                        placeholderTextColor="rgba(0,0,0,0.65)"
                        keyboardType="default"
                        onChangeText={nome => this.setState({ nome })}

                    ></TextInput>
                    
                    {/* <Picker
                        selectedValue={selectedValue}
                        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                    >
                        <Picker.Item label="Banco De Dados" value={1} />
                        <Picker.Item label="ReactJS" value={2} />
                        <Picker.Item label="React Native" value={3} />
                        <Picker.Item label="Front-End" value={4} />
                        <Picker.Item label="Back-End" value={5} />
                        <Picker.Item label="Design" value={6} />
                        <Picker.Item label="Ux/Ui" value={7} />

                    </Picker> */}

                    <RNPickerSelect
                                onValueChange={(  idTema  ) => this.setState(idTema)}
                                items={[
                                    { label: 'Banco De Dados', value: 1 },
                                    { label: 'ReactJS', value: 2 },
                                    { label: 'React Native', value: 3 },
                                    { label: 'Front-End', value: 4 },
                                    { label: 'Back-End', value: 5 },
                                    { label: 'Design', value: 6 },
                                    { label: 'Ux/Ui', value: 7 },
                                ]}
                            />


                    <TextInput style={styles.inputLogin}
                        placeholder="Descrição"
                        placeholderTextColor="rgba(0,0,0,0.65)"
                        keyboardType="default"
                        onChangeText={descricao => this.setState({ descricao })}

                    ></TextInput>

                    <TouchableOpacity
                        style={styles.btnCadastro}
                        onPress={this.cadastrar}
                    >
                        <Text style={styles.btnText}>
                            Cadastrar
                        </Text>

                    </TouchableOpacity>
                    
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    main: {
      flex: 1
   
    }
  });
import * as React from 'react';
import { Text, View, StyleSheet, StatusBar, TextInput, Pressable, Alert } from 'react-native';
import Constants from 'expo-constants';

//Integrante - Alberto Januario Rodrigues Junior Rm:86332

import AssetExample from './components/AssetExample';

export default class App extends React.Component{

  state = {
    inputDisplay:styles.input,
    nome:styles.nomeNone,
    autorizado:'',
    cor:styles.textAutorizadoNone,
    btnlimpar:'Limpar',
    btnautorizar:'Solicitar Autorização',
    textName:'',
    pg:0,
  }

  Negar = () => {
    if(this.state.pg == 0){
      this.setState({autorizado:''})
    }else if(this.state.pg == 1){
      this.setState({pg:0, inputDisplay:styles.input, nome:styles.nomeNone, 
      btnlimpar:'Limpar', btnautorizar:'Socilitar Autorização', textName:' ',
      autorizado:this.state.textName +' não autorizado!', cor:styles.textNaoAutorizado
      })
    }
  }

  Autorizar = () => {


    if(this.state.pg == 0){
     if(this.state.textName == '' || this.state.textName == null ){
        alert('Informe o seu nome')
      }else{
        this.setState({pg:1, inputDisplay:styles.inputNone, nome:styles.nome, 
        btnlimpar:'Não Autorizar', btnautorizar:'Autorizar'
      })
      }
    }else if(this.state.pg == 1){
      this.setState({pg:0, inputDisplay:styles.input, nome:styles.nomeNone, 
      btnlimpar:'Limpar', btnautorizar:'Socilitar Autorização', textName:'',
      autorizado:this.state.textName +' autorizado!', cor:styles.textAutorizado
      })
    }
  }

  render(){
    const {autorizado, btnlimpar, btnautorizar, cor, inputDisplay, nome, textName} = this.state

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Prova Semestral
      </Text>
        <TextInput onChangeText={msg=> this.setState({textName:msg.trim()})}
        style={inputDisplay}
        width={400}   
        height={80} 
        placeholder='Nome'
        placeholderTextColor='#fff'/>

        <Text style={nome}>{textName}</Text>

        <View style={styles.bntcontainer}>
          <Pressable onPress={this.Negar}><Text style={styles.textobotao}>{btnlimpar}</Text></Pressable>
          <Pressable onPress={this.Autorizar}><Text style={styles.textobotao}>{btnautorizar}</Text></Pressable>
        </View>
        <Text style={cor}>{autorizado}</Text>
      <StatusBar/>
    </View>
  )
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#323232',
    alignItems:'center',
    paddingTop:50,

  },
  title: {
    fontSize:40,
    color:'#EA1459',
    marginBottom:36,
  },
  input:{
    backgroundColor:'gray',
    alignItems: 'left',
    fontSize:20,
    paddingLeft: 90
  },
  inputNone:{
    display:'none',
  },
  nome:{
    fontSize:24,
    color:'#fff'
  },
  nomeNone:{
    display:'none'
  },
  bntcontainer:{
    flexDirection:"row",
    justifyContent:'flex-end',
    marginLeft: 160
  },
  textobotao:{
    fontSize:16,
    backgroundColor:'#EA1459',
    borderRadius:7,
    marginTop:30,
    marginBottom:30,
    marginRight:16,
    padding:5,
  },
  textAutorizadoNone:{
    display:'none',
    fontSize:24
  },
  textNaoAutorizado:{
    color:'red',
    fontSize:24
  },
  textAutorizado:{
    color:'green',
    fontSize:24
  }
});
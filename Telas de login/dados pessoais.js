//pessoais
import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, TextInput,TouchableOpacity } from 'react-native'; 


export default class App extends Component {
  render() {
   return (
    <View style={styles.container}>
     

 
 <TextInput
      style= {styles.input}
      placeholder='Nome'
      />
      
      <TextInput
      style= {styles.input}
      placeholder='Sobrenome'
      />
     
      <TextInput
      style= {styles.input}
      placeholder='CPF'
      />
     
      <TextInput
      style= {styles.input}
      placeholder='Numero de celular'
      />

            <TextInput
      style= {styles.input}
      placeholder='CEP'
      />

            <TextInput
      style= {styles.input}
      placeholder='Endereço'
      />
            <TextInput
      style= {styles.input}
      placeholder='Complemento'
      />
      
      <TextInput
      style= {styles.input}
      placeholder='Cidade'
      />   
      
      <TextInput
      style= {styles.input}
      placeholder='Estado'
      />
<TouchableOpacity
      style= {styles.botao}
      OnPress ={ () => {this.clicou()} }
      >
       <Text style = {styles.botaoText}> Concluido </Text>
      </TouchableOpacity>

 </View>
    )
  }
}

const styles = StyleSheet.create ({
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding:20
  },
  input: {
    marginTop:10,
    padding: 10,
    width: 300,
    fontSize:16,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:10,
  },
  botao: {
    width: 300,
    height: 42,
    marginTop:10,
    backgroundColor:'#8ca7c8',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:10,
  },
  botaoText: {
    fontSize:16,
    fontWeight:'bold',
    backgroundColor: "white "

  }
})
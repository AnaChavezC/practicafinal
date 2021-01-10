import React from 'react';
import { StyleSheet, Text, View ,TouchableHighlight,Image} from 'react-native';

export default function Mision() {
    return (
        <View style={styles.container}>
           
           <TouchableHighlight >
           <Image
            style={styles.tinyLogo}
            source={ require('../assets/flores.jpg')}
             />
        </TouchableHighlight>
        <Text  style={styles.text}>Somos una empresa que nos gusta verlos sonreir,  una</Text>
        <Text  style={styles.text}>flor es un gran detalle para cualquier ser querido.</Text>
        </View>
    )
}



const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent:'center'
    },
    tinyLogo: {
      width: 250,
      height: 100,
    },
    logo: {
      width: 60,
      height: 60,
    },
    text:{
      textAlign:'center'
    }
    });
      
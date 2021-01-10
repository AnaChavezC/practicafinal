import React from 'react';
import { StyleSheet, Text, View,TouchableHighlight,Image } from 'react-native';

export default function Vision() {
    return (
        <View style={styles.container}>
           
           <TouchableHighlight >
           <Image
            style={styles.tinyLogo}
            source={ require('../assets/tienda.jpg')}
             />
        </TouchableHighlight>
        <Text  style={styles.text}>Buscamos ser una gran empresa con tiendas en varios puntos del país.</Text>
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
      
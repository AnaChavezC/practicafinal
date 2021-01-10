import React from 'react';
import { StyleSheet, Text, View,Image,TouchableHighlight} from 'react-native';

const Datos = ({navigation}) => {
    return (
        <View style={styles.container}>
           
           <TouchableHighlight >
           <Image
            style={styles.tinyLogo}
            source={ require('../assets/woman.png')}
             />
        </TouchableHighlight>
        <Text>Esta es mi practica final con Firebase.</Text>
        <Text >Ana Chavez, 2020.</Text>
        </View>
    )
}

export default Datos;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent:'center'
    },
    tinyLogo: {
      width: 80,
      height: 80,
    },
    logo: {
      width: 60,
      height: 60,
    },
    });
      
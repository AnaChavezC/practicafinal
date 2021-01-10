import React from 'react';
import { StyleSheet, Text, View,Image,TouchableHighlight} from 'react-native';

const Inicio = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text>Presiona la imagen</Text>
           
           <TouchableHighlight onPress={()=>navigation.navigate('Datos')}>
           <Image
            style={styles.tinyLogo}
            source={ require('../assets/1.png')}
            />
        </TouchableHighlight>
        </View>

        
    )
}

export default Inicio;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent:'center'
    },
    tinyLogo: {
      width: 80,
      height:80,
    },
    logo: {
      width: 66,
      height: 58,
    },
    });
      
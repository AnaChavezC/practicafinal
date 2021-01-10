import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList } from 'react-native';
import Card from '../Screens/Card';


export default function Detalles({ navigation }) {
  const [reviews, setReviews] = useState([
    { nombreempleado: 'Rosa Maria Gimenez', edad: 25, Puesto: 'Cajera', key: '1' },
    { nombreempleado: 'Lucas Garcia', edad: 34, Puesto: 'Gerente', key: '2' },
    { nombreempleado: 'Luisa Marquez', edad: 43, Puesto: 'Marketing', key: '3' },
  ]);

  return (
    <View style={globalStyles.container}>
        <Text style={globalStyles.title} >Datos empleados</Text>
      <FlatList data={reviews} renderItem={({ item }) => (
        
          <Card>
            <Text style={globalStyles.titleText}> Nombre: { item.nombreempleado} , Edad: {item.edad} ,Puesto: {item.Puesto} </Text>
          </Card>

      )} />
    </View>
  );
}

 const globalStyles = StyleSheet.create({
    titleText: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#333',
    },
    title: {
        fontSize: 20,
        textAlign:'center',
        fontWeight: 'bold',
        color: '#333',
        padding:20
      },
    paragraph: {
      marginVertical: 8,
      lineHeight: 20,
    },
    container: {
      flex: 1,
      padding: 20,
    },
  });


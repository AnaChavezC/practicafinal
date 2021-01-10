import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList } from 'react-native';
import Card from '../Screens/Card';


export default function Mensaje({ navigation }) {
  const [reviews, setReviews] = useState([
    { nombre: 'Las Rosas', cantidad: 5, mercancia: 'Rosas en docenas', key: '1' },
    { nombre: 'Primavera', cantidad: 4, mercancia: 'Lilys en docenas', key: '2' },
    { nombre: 'Amanecer', cantidad: 3, mercancia: 'Margaritas en docenas', key: '3' },
  ]);

  return (
    <View style={globalStyles.container}>
        <Text style={globalStyles.title} >Datos de proveedores</Text>
      <FlatList data={reviews} renderItem={({ item }) => (
        
          <Card>
            <Text style={globalStyles.titleText}>Del proveedor { item.nombre} se esperan {item.mercancia} con un total de {item.cantidad} docenas</Text>
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


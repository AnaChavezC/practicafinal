import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList } from 'react-native';
import Card from '../Screens/Card';


export default function Mensaje({ navigation }) {
  const [reviews, setReviews] = useState([
    { nombre: 'Girasoles', key: '1' },
    { nombre: 'Rosas',  key: '2' },
    { nombre: 'Hortensias', key: '3' },
    { nombre: 'Tulipanes', key: '4' },
    { nombre: 'Lirios', key: '5' },
  ]);

  return (
    <View style={globalStyles.container}>
        <Text style={globalStyles.title} >Flores más comunes</Text>
      <FlatList data={reviews} renderItem={({ item }) => (
       
          <Card>
            <Text style={globalStyles.titleText}>{ item.nombre }</Text>
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
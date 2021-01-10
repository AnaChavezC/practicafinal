import React, { useState,useContext} from "react";
import { View,StyleSheet,Text ,Picker, ScrollView} from "react-native";
import {ListItem} from 'react-native-elements';
import {CarritoContext} from '../Context/CarritoContext';

const Almacen = () => {
    const {lista}= useContext(CarritoContext);
    const [flores , setFlores]= useState([]);

    const addSelect=(t)=>{
        const proveedor = lista.filter((selected)=>{
            return selected.provedor===t;
        })
        setFlores(proveedor)
    }
    return (
        <View style={styles.container}>
            <Picker style={{ height: 50, width: 180 }} onValueChange={(itemValue) => addSelect(itemValue)}>
                <Picker.Item label="Proveedores" value="" />
                <Picker.Item  label="Las Rosas" value="lasrosas"/>
                <Picker.Item  label="Primavera" value="primavera"/>
                <Picker.Item  label="Amanecer" value="amanecer"/>
            </Picker>
            <ScrollView>
        {
            flores.length>1
            ?
            flores.map((a,i)=>(
                <ListItem key={i} bottomDivider style={{marginTop:10, textAlign:'center', fontSize:20, width:400}}>
                    <ListItem.Content>
                        <ListItem.Title>{a.id}</ListItem.Title>                 
                    </ListItem.Content>
                </ListItem>

            ))
            :
            <Text style={{marginTop:50, textAlign:'center', fontSize:20}}>Sin mercancia</Text>
        }
        </ScrollView>
        </View>
    )
}

export default Almacen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 40,
      alignItems: "center"
    }
  });
  
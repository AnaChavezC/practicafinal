import React, {useContext} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {ListItem, Header} from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {CarritoContext} from '../Context/CarritoContext';

const Listado = ({navigation}) => {

    const {lista,setFlores,eliminar} = useContext(CarritoContext);

    return (
    
    <View style={styles.container}>
        <Header
            centerComponent={{ text: 'Registrados', style: { color: '#fff', fontSize:20 } }}
            rightComponent={{ icon: 'add-circle', color: '#fff', onPress:()=>{
                setFlores({
                     id:null,
                     nombre:"",
                     cantidad:"",
                     nombrepersona:"",
                     proveedor:""
                 })   

                 navigation.navigate('Comprar',{status:"add"})

            }}}
            containerStyle={{backgroundColor:'#ed730e'}}
        />
        <ScrollView>
        {
            lista.length>0
            ?
            lista.map((a,i)=>(
                <ListItem key={i} bottomDivider>
                    <ListItem.Content>
                        <ListItem.Title>Se ingresaron {a.nombre} en inventario con un total de: {a.cantidad} docenas</ListItem.Title>
                    </ListItem.Content>
                    <View style={styles.buttons}>
                        <Ionicons name='ios-trash' size={30} color={'red'} onPress={()=>eliminar(a.id)}/>
                        <Ionicons name='md-create' size={30} color={'green'}  onPress={()=>{
                            setFlores({
                                id:a.id.toString(),
                                nombre:a.nombre,
                                cantidad:a.cantidad,
                                nombrepersona:a.nombrepersona,
                                proveedor:a.proveedor,
                            })

                            navigation.navigate('Comprar',{status:"edit"})
                        }}/>

                    </View>
                </ListItem>

            ))
            :
            <Text style={{marginTop:50, textAlign:'center', fontSize:20}}>No hay mercancia registrada</Text>
        }
        </ScrollView>
    </View>
    );
}
 
export default Listado;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
    },
    buttons:{
        width:'25%', 
        flexDirection:'row', 
        justifyContent:'space-between'
    }
});
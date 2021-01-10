import React, {useContext} from 'react';
import {TextInput, View, StyleSheet, Text} from 'react-native';
import {Button} from 'react-native-elements';
import {Picker} from '@react-native-picker/picker';
import {Formik} from 'formik';
import * as Yup from 'yup';
import Constants from 'expo-constants';
import firebase from '../Settings/ConfigFirebase';
import { CarritoContext } from '../Context/CarritoContext';

const validations =Yup.object().shape({
    id:Yup.number().typeError('Este campo es numérico').max(9999,"Deben ser 4 números").required('Obligatorio'),
    nombre: Yup.string().required('Obligatorio'),
    cantidad: Yup.number().typeError('Este campo es numérico').required('Obligatorio'),
    nombrepersona: Yup.string().required('Obligatorio'),
    proveedor:Yup.string().nullable().required('Seleccione proveedor')
    
})

export default function Comprar({route,navigation}){
    const {status} = route.params;
    const {flores,lista,setFlores,setLista}= useContext(CarritoContext);

    return(
        <View style={styles.container}>
            <Text style={styles.header}>Ingresar datos de la mercancia</Text>

            <Formik
                initialValues={flores}
                onSubmit={(values,{resetForm})=>{
                     firebase.database().ref('Flores/'+flores.id).update(flores).then(()=>{
                         alert("Mercancia registrada")
                     })
                    const temporal = lista.filter(al=>al.id!=flores.id);
                    setLista([...temporal,ropa]);
                    resetForm({
                        id:"",
                        nombre:"",
                        cantidad:"",
                        nombrepersona:"",
                        proveedor:""
                    })
                    navigation.navigate('En inventario')

                    console.log(lista) 
                }}
                validationSchema={validations}
                validate={(values)=>{
                    setFlores(values)
                }}
            >
            {
                ({handleChange, handleBlur, handleSubmit, setFieldValue, handleReset, errors, values})=>(
                    <View>
                        <TextInput
                            style={styles.textinput}
                            onChangeText={handleChange('id')}
                            onBlur={handleBlur('id')}
                            placeholder="Id"
                            value={values.id}
                            editable={status==="add"?true:false}
                        />
                        
                        {errors.id && <Text style={styles.texterror}>{errors.id}</Text>}

                        <TextInput
                            style={styles.textinput}
                            onChangeText={handleChange('nombre')}
                            onBlur={handleBlur('nombre')}
                            placeholder="Nombre de la flor"
                            value={values.nombre}
                            editable={status==="add"?true:false}
                        />
                        
                        {errors.nombre && <Text style={styles.texterror}>{errors.nombre}</Text>}
                        
                        <TextInput
                            style={styles.textinput}
                            onChangeText={handleChange('cantidad')}
                            onBlur={handleBlur('cantidad')}
                            placeholder="Cantidad en docenas"
                            value={values.cantidad}
                            editable={status==="add"?true:false}
                        />
                        
                        {errors.cantidad && <Text style={styles.texterror}>{errors.cantidad}</Text>}
                         
                         
                        <TextInput
                            style={styles.textinput}
                            onChangeText={handleChange('nombrepersona')}
                            onBlur={handleBlur('nombrepersona')}
                            placeholder="Nombre de la persona que recibio la mercancia"
                            value={values.nombrepersona}
                            editable={status==="add"?true:false}
                        />
                        
                        {errors.nombrepersona && <Text style={styles.texterror}>{errors.nombrepersona}</Text>}

                        <View style={styles.picker}>
                            <Picker
                                mode="dialog"
                                style={{height:40, backgroundColor:'white'}}
                                selectedValue={values.proveedor}
                                onValueChange={ (v)=>
                                    setFieldValue('proveedor',v)
                                }
                            >
                                <Picker.Item color="grey" label="Proveedores" value="" />
                                <Picker.Item color="black" label="Las Rosas" value="lasrosas"/>
                                <Picker.Item color="black" label="Primavera" value="primavera"/>
                                <Picker.Item color="black" label="Amanecer" value="amanecer"/>
                            </Picker>
                        </View>

                        {errors.proveedor && <Text style={styles.texterror}>{errors.proveedor}</Text>}

                           

                        <View style={{marginTop:20}}>
                            <Button
                                buttonStyle={styles.buttons}
                                onPress={handleSubmit}
                                title="Registrar"
                            />

                            {
                                status==="add"
                                &&
                                <Button
                                buttonStyle={styles.buttons}
                                onPress={handleReset}
                                title="Eliminar"
                                />

                            }
                    

                        </View>

                    </View>
                )
            }      
            </Formik>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent:'center',
      margin:20,
      marginTop:Constants.statusBarHeight
   
    },
    texterror:{
      color:'red'
    },
    textinput:{
      borderRadius:10, 
      height: 40, 
      borderColor: 'gray', 
      borderWidth: 1, 
      margin:5, 
      paddingLeft:15, 
      backgroundColor:'white',
      elevation: 5,
    },
    buttons:{
      backgroundColor:'gray', 
      color:'black', 
      marginTop:10, 
      borderRadius:10
    },
    header:{
      fontSize:20, 
      textAlign:'center', 
      marginBottom:40
    },
    picker:{
      margin:5, 
      borderRadius: 10, 
      borderWidth: 1, 
      borderColor: 'gray', 
      overflow: 'hidden',
      elevation: 5,
    }
  
  });
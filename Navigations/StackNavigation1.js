import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Inicio from '../Screens/Inicio';
import Datos from '../Screens/Datos';
import Comprar from '../Screens/Comprar';
import Listado from '../Screens/Listado';
import Mensaje from '../Screens/Mensaje';
import Detalles from '../Screens/Detalles';



const Stack = createStackNavigator();

export default function StackNavigation1(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="Inicio" component={Inicio}
                options={{headerShown:false, headerTitle:'Inicio'}}
            />

            <Stack.Screen name="Datos" component={Datos}
                options={{headerShown:true, headerTitle:'Regresar '}}
            />  
             <Stack.Screen
                name="Listado"
                component={Listado}
                options={{headerShown:false}}
            />

            <Stack.Screen
                name="Comprar"
                component={Comprar}
            />

          
        </Stack.Navigator>

    )
}

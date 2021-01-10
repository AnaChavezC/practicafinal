import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Inicio from '../Navigations/StackNavigation1';
import TopTapNavigator1 from './TopTapNavigator1';
import Listado from '../Screens/Listado';
import Almacen from '../Screens/Almacen';
import Mensaje from '../Screens/Mensaje';
import Flores from '../Screens/Flores';
import Detalles from '../Screens/Detalles';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator1(){
    return(
        <Tab.Navigator
            initialRouteName="Inicio"
            tabBarOptions={{
                activeTintColor:"#ffffff",
                inactiveTintColor:"#050101",
                showLabel:true,
                labelStyle:{
                    fontSize:12
                },
                style:{
                    paddingBottom:5,
                    backgroundColor:"#ed730e"
                }

            }}
        > 
           
            <Tab.Screen
                 name="Inicio"
                component={Inicio}
                options={{
                    
                    tabBarIcon:({color})=>(
                        <Ionicons name={"ios-home"} size={20} color={color}/>
                    )
                }}
            />
            
            
                <Tab.Screen
                 name="Almacen"
                component={Almacen}
                options={{
                    
                    tabBarIcon:({color})=>(
                        <Ionicons name={"logo-dropbox"} size={20} color={color}/>
                    )
                }}
            />
              <Tab.Screen
                 name="Listado"
                component={Listado}
                options={{
                    
                    tabBarIcon:({color})=>(
                        <Ionicons name={"ios-list"} size={20} color={color}/>
                    )
                }}
            />
        
              <Tab.Screen
                name="Información "
                component={TopTapNavigator1}
                options={{
            
                    tabBarIcon:({color})=>(
                        <Ionicons name={"ios-information-circle"} size={20} color={color}/>
                    )
                }}
            />
                 <Tab.Screen
                 name="Proveedores"
                component={Mensaje}
                options={{
                    
                    tabBarIcon:({color})=>(
                        <Ionicons name={"ios-alert"} size={20} color={color}/>
                    )
                }}
            />
            <Tab.Screen
                 name="Flores"
                component={Flores}
                options={{
                    
                    tabBarIcon:({color})=>(
                        <Ionicons name={"md-flower"} size={20} color={color}/>
                    )
                }}
            />
                     <Tab.Screen
                 name="Empleados"
                component={Detalles}
                options={{
                    
                    tabBarIcon:({color})=>(
                        <Ionicons name={"ios-people"} size={20} color={color}/>
                    )
                }}
            />
        </Tab.Navigator>
    )
}
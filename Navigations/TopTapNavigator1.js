import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Constants from 'expo-constants';
import Mision from '../Screens/Mision';
import Vision from '../Screens/Vision';
import Ionicons from 'react-native-vector-icons/Ionicons'

const Tab =  createMaterialTopTabNavigator();

export default function TopTapNavigator1(){
    return(
        <Tab.Navigator
            initialRouteName="Inicio"
            tabBarOptions={{
                activeTintColor:"#ff6600",
                inactiveTintColor:"#060606",
                showIcon:true,
                showLabel:true,
                labelStyle:{
                    fontSize:11
                },
                style:{
                    paddingTop:Constants.statusBarHeight,
                    backgroundColor:"#f3f3f1"
                }

            }}
        > 
            <Tab.Screen
                name=" "
                component={Mision}
                options={{
                    tabBarLabel:"Misión",
                    tabBarIcon:({color})=>(
                        <Ionicons name={"md-flower"} size={20} color={color}/>
                    )
                }}
            />
            <Tab.Screen
                name="  "
                component={Vision}
                options={{
                    tabBarLabel:"Visión",
                    tabBarIcon:({color})=>(
                        <Ionicons name={"ios-people-outline"} size={20} color={color}/>
                    )
                }}
            />
        </Tab.Navigator>
    )
}
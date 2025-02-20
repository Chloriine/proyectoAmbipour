import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Colors } from '../../constants/Colors';
import { useColorScheme } from '../../hooks/useColorScheme';
import { useFonts } from 'expo-font';
import { GlobalStyles } from '../../constants/GlobalStyles';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: Platform.select({
          default: {
            position: 'absolute', // Hace que la barra de navegación sea flotante
            bottom: 10, // Margen inferior para que flote
            paddingTop: 50,
            marginLeft: 380,
            width: 500, // Ancho reducido
            paddingLeft: 30,
            paddingRight: 30,
            alignSelf: 'center', // Centra la barra de navegación
            height: 155, // Altura más reducida
            backgroundColor: Colors.blancoTraslucido, // Color de fondo personalizado
            borderRadius: 100, // Bordes redondeados
            borderWidth: 1, // Bordes gruesos
            borderColor: Colors.azul, // Color de borde personalizado
            flexDirection:"column",
          },
        }),
        tabBarLabelPosition: "below-icon",
        tabBarLabelStyle:{
          fontSize: 32,
          fontFamily:"jua",
          fontWeight:400,
        },
        tabBarActiveTintColor: Colors.azulOscuro,
      }}
    >
      
      <Tabs.Screen
        name="index"
        options={{
          title: 'Inicio',
          tabBarIcon: ({ color }) => <Ionicons style={GlobalStyles.tabBarIcon} name="home" size={50} color={Colors.azul} />,
          
        }}
      />
      <Tabs.Screen
        name="ajustes/index"
        options={{
          title: 'Ajustes',
          tabBarIcon: ({ color }) => <Ionicons style={GlobalStyles.tabBarIcon} name="settings" size={50} color={Colors.azul} />,
          
        }}
      />
    </Tabs>
  );
}

import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { useFonts } from 'expo-font';

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
            marginLeft: 165,
            width: 720, // Ancho reducido
            height: 155, // Altura más reducida
            backgroundColor: Colors.blancoTraslucido, // Color de fondo personalizado
            borderRadius: 40, // Bordes redondeados
            borderWidth: 1, // Bordes gruesos
            borderColor: Colors.azul, // Color de borde personalizado
            flexDirection:"column",
          },
        }),
        tabBarLabelPosition: "below-icon",
        tabBarLabelStyle:{
          fontSize: 32,
          fontFamily:"jua",
        },
        tabBarActiveTintColor: Colors.azulOscuro,
      }}
    >
      
      <Tabs.Screen
        name="index"
        options={{
          title: 'Inicio',
          tabBarIcon: ({ color }) => <Ionicons name="home" size={55} color={Colors.azul} />,
          
        }}
      />
      <Tabs.Screen
        name="historial/index"
        options={{
          title: 'Historial',
          tabBarIcon: ({ color }) => <Ionicons name="bar-chart" size={48} color={Colors.azul} />,
        }}
      />
      <Tabs.Screen
        name="ajustes/index"
        options={{
          title: 'Ajustes',
          tabBarIcon: ({ color }) => <Ionicons name="settings" size={50} color={Colors.azul} />,
          
        }}
      />
    </Tabs>
  );
}

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
            marginLeft: 280,
            width: 720, // Ancho reducido
            alignSelf: 'center', // Centra la barra de navegación
            height: 155, // Altura más reducida
            backgroundColor: Colors.blancoTraslucido, // Color de fondo personalizado
            borderRadius: 100, // Bordes redondeados
            borderWidth: 1, // Bordes gruesos
            borderColor: Colors.azul, // Color de borde personalizado
            elevation: 5, // Para Android
            flexDirection:"column",
          },
        }),
        tabBarLabelPosition: "below-icon",
        tabBarLabelStyle:{
          fontFamily:"jua",
          fontWeight:400,
          fontSize:32
        },
        tabBarActiveTintColor: Colors.azulOscuro,
      }}
    >
      
      <Tabs.Screen
        name="index"
        options={{
          title: 'Inicio',
          tabBarIcon: ({ color }) => <Ionicons name="home" size={28} color={Colors.azul} />,
          
        }}
      />
      <Tabs.Screen
        name="historial/index"
        options={{
          title: 'Historial',
          tabBarIcon: ({ color }) => <Ionicons name="bar-chart" size={28} color={Colors.azul} />,
        }}
      />
      <Tabs.Screen
        name="ajustes/index"
        options={{
          title: 'Ajustes',
          tabBarIcon: ({ color }) => <Ionicons name="settings" size={28} color={Colors.azul} />,
          
        }}
      />
    </Tabs>
  );
}

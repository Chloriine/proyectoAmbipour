import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarStyle: Platform.select({
          default: {
            position: 'absolute', // Hace que la barra de navegación sea flotante
            bottom: 10, // Margen inferior para que flote
            marginLeft: 150,
            width: '50%', // Ancho reducido
            alignSelf: 'center', // Centra la barra de navegación
            height: 70, // Altura más reducida
            backgroundColor: Colors.blancoTraslucido, // Color de fondo personalizado
            borderRadius: 40, // Bordes redondeados
            borderWidth: 1, // Bordes gruesos
            borderColor: Colors.azul, // Color de borde personalizado
            elevation: 5, // Para Android
          },
        }),
      }}
    >
      <Tabs.Screen
        name="ajustes"
        options={{
          title: 'Ajustes',
          tabBarIcon: ({ color }) => <Ionicons name="settings-outline" size={28} color={Colors.azul} />,
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          title: 'Inicio',
          tabBarIcon: ({ color }) => <Ionicons name="home-outline" size={28} color={Colors.azul} />,
        }}
      />
      <Tabs.Screen
        name="historial"
        options={{
          title: 'Historial',
          tabBarIcon: ({ color }) => <Ionicons name="bar-chart-outline" size={28} color={Colors.azul} />,
        }}
      />
    </Tabs>
  );
}

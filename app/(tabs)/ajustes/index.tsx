import { StyleSheet, ImageBackground, Platform,Text, View, Image, Pressable } from 'react-native';
import { GlobalStyles } from '@/constants/GlobalStyles';
import BotonGrados from '@/components/BotonGrados';
import BotonTemperatura from '@/components/BotonTemperatura';
import ControlTemperatura from '@/components/ControlTemperatura';
import React from 'react';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '../../../hooks/useColorScheme.web';
import ControlGrados from '@/components/ControlGrados';
import BotonIntervalo from '@/components/BotonIntervalo';
import ControlIntervalo from '@/components/ControlIntervalo';
import { TemperaturaProvider } from '@/components/TemperaturaContext';


export default function ajustes() {
  return (
    <TemperaturaProvider>
        <ImageBackground source={require('../../../assets/images/fondo2.png')} style={styles.container}>
          <Text style={GlobalStyles.titulo}>PaControl</Text>
          <View style={GlobalStyles.ajustesContainer}>
            <View style={GlobalStyles.ajustesOpcionesContainer}>
              

              <View style={GlobalStyles.ajustesOpcion}>
                <Text style={GlobalStyles.ajustesOpcionText}>Calidad del Habitáculo</Text>
                
                <View style={GlobalStyles.degradao}>
                  <Image source={require('../../../assets/images/ajustes/termo.png')}  style={GlobalStyles.imagenDegradao}/>
                
                </View>
                <ControlTemperatura/>
                
              </View>

            </View>
          </View>
        </ImageBackground>
    </TemperaturaProvider>

    
  );
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#fff',
    flex: 1,
  }
});
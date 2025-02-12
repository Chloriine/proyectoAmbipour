import { StyleSheet, ImageBackground, Platform,Text, View, Image, Pressable } from 'react-native';
import { GlobalStyles } from '@/constants/GlobalStyles';
import BotonGrados from '@/components/BotonGrados';
import BotonTemperatura from '@/components/BotonTemperatura';
import ControlTemperatura from '@/components/ControlTemperatura';
import React from 'react';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '../../../hooks/useColorScheme.web';
import ControlGrados from '@/components/ControlGrados';


export default function ajustes() {
  return (
    <ImageBackground source={require('../../../assets/images/fondo.png')} style={styles.container}>
      <Text style={GlobalStyles.titulo}>PaControl</Text>
      <View style={GlobalStyles.ajustesContainer}>
        <Text style={GlobalStyles.ajustesTexto}>Ajustes</Text>
        <View style={GlobalStyles.ajustesOpcionesContainer}>
          <View style={GlobalStyles.ajustesOpcion}>
              <Text style={GlobalStyles.ajustesOpcionText}>Unidades de medida</Text>
              <ControlGrados/>
          </View>

          <View style={GlobalStyles.ajustesOpcion}>
            <Text style={GlobalStyles.ajustesOpcionText}>Calidad del Habitáculo</Text>
            
            <View style={GlobalStyles.degradao}>
              <Image source={require('../../../assets/images/ajustes/azul.png')}  style={GlobalStyles.imagenDegradao}/>
              <Image source={require('../../../assets/images/ajustes/celeste.png')}  style={GlobalStyles.imagenDegradao}/>
              <Image source={require('../../../assets/images/ajustes/verde.png')}  style={GlobalStyles.imagenDegradao}/>
              <Image source={require('../../../assets/images/ajustes/amarillo.png')}  style={GlobalStyles.imagenDegradao}/>
              <Image source={require('../../../assets/images/ajustes/rojo.png')}  style={GlobalStyles.imagenDegradao}/>
              
            </View>
            <ControlTemperatura/>
            
          </View>

          <View style={GlobalStyles.ajustesOpcion}>
            <Text style={GlobalStyles.ajustesOpcionText}>Intervalo de Grados</Text>
            <View style={GlobalStyles.intervalosContainer}>
              <Text style={GlobalStyles.intervalo}>3&#186;</Text>
              <Text style={GlobalStyles.intervalo}>5&#186;</Text>
              <Text style={GlobalStyles.intervalo}>7&#186;</Text>
            </View>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#fff',
    flex: 1,
  }
});
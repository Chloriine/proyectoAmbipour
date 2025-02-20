import { StyleSheet, ImageBackground, Platform, Text, View, Image, Pressable } from 'react-native';
import { GlobalStyles } from '../../../constants/GlobalStyles';
import BotonTemperatura from '../../../components/BotonTemperaturaAzul';
import ControlTemperatura from '../../../components/ControlTemperatura';
import React from 'react';
import { useColorScheme } from '../../../hooks/useColorScheme.web';


export default function ajustes() {
  return (

    <ImageBackground source={require('../../../assets/images/fondo2.png')} style={styles.container}>
      <Text style={GlobalStyles.titulo}>PaControl</Text>
      <View style={GlobalStyles.ajustesContainer}>
        <View style={GlobalStyles.ajustesOpcionesContainer}>


          <View style={GlobalStyles.ajustesOpcion}>
            <Text style={GlobalStyles.ajustesOpcionText}>Calidad del Habitáculo</Text>

            <View style={GlobalStyles.degradao}>
              <Image source={require('../../../assets/images/ajustes/termo.png')} style={GlobalStyles.imagenDegradao} />

            </View>
            <ControlTemperatura />

          </View>

        </View>
      </View>
    </ImageBackground>



  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  }
});
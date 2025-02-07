import { Text, View, ImageBackground } from 'react-native';
import { GlobalStyles } from '../../constants/GlobalStyles';
import React from 'react';


export default function index() {
  return (
    <ImageBackground source={require('../../assets/images/fondo.png')} style={GlobalStyles.imagenFondo}>

      <Text style={GlobalStyles.titulo}>Titulo</Text>

      <View style={GlobalStyles.flexRowContainer}>
        <View style={GlobalStyles.temperaturaHumedadContainer}>
          <Text style={GlobalStyles.temperaturaText}>Temperatura</Text>
          <Text style={GlobalStyles.gradosText}>27ºC</Text>
        </View>
        <View style={GlobalStyles.temperaturaHumedadContainer}>
          <Text style={GlobalStyles.humedadText}>Humedad</Text>
          <Text  style={GlobalStyles.porCentText}>65%</Text>
        </View>
      </View>

    </ImageBackground>
  );
}
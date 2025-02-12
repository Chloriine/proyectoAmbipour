import { StyleSheet, ImageBackground, Image, Text, Pressable, View } from 'react-native';
import { useState } from 'react';
import { GlobalStyles } from '../../../constants/GlobalStyles';

export default function historial() {
  const [selectedButton, setSelectedButton] = useState(0);

  return (
    <ImageBackground source={require('../../../assets/images/fondo.png')} style={GlobalStyles.containerHistorial}>
      <Text style={GlobalStyles.titulo}>PaControl</Text>
      
      {/* Contenedor de los botones */}
      <View style={GlobalStyles.contenedorHistorial}>
        <Pressable
          style={GlobalStyles.botonTemperatura}
          onPress={() => setSelectedButton(0)}
        >
          <Text style={GlobalStyles.botonHistorialTexto}>Temperatura</Text>
        </Pressable>

        <Pressable
          style={GlobalStyles.botonHumedad}
          onPress={() => setSelectedButton(1)}
        >
          <Text style={GlobalStyles.botonHistorialTexto}>Humedad</Text>
        </Pressable>
      </View>

      {/* Imagen del gráfico */}
      <View style={GlobalStyles.contenedorImagen}>
        {selectedButton === 0 ? (
          <Image source={require('../../../assets/images/grafico.png')} style={GlobalStyles.image} />
        ) : (
          <Image source={require('../../../assets/images/grafico2.png')} style={GlobalStyles.image} />
        )}
      </View>
    </ImageBackground>
  );
}


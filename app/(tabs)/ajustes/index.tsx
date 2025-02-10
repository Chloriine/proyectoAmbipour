import { StyleSheet, ImageBackground, Platform,Text, View } from 'react-native';
import { GlobalStyles } from '@/constants/GlobalStyles';


export default function ajustes() {
  return (
    <ImageBackground source={require('../../../assets/images/fondo.png')} style={styles.container}>
      <Text style={GlobalStyles.titulo}>Titulo</Text>
      <View style={GlobalStyles.ajustesContainer}>
        <Text style={GlobalStyles.ajustesTexto}>Ajustes</Text>
        <View style={GlobalStyles.ajustesOpcionesContainer}>
          <View style={GlobalStyles.ajustesOpcion}>
              <Text style={GlobalStyles.ajustesOpcionText}>Unidades de medida</Text>
          </View>

          <View style={GlobalStyles.ajustesOpcion}>
            <Text style={GlobalStyles.ajustesOpcionText}>Calidad del Habitáculo</Text>
          </View>

          <View style={GlobalStyles.ajustesOpcion}>
            <Text style={GlobalStyles.ajustesOpcionText}>Intervalo de Grados</Text>
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
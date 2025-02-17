import { Text, View, ImageBackground } from 'react-native';
import { GlobalStyles } from '../../constants/GlobalStyles';
import { collection, doc, getDocs, onSnapshot } from 'firebase/firestore';
import { db } from '../../FireBaseconfig';
import { useState, useEffect } from 'react';


export default function index() {

  const coleccionDatos = collection(db,'datos');
  const [datos, setDatos] = useState<any>([]);
  const [temperatura, setTemperatura] = useState<any>([]);
  const [humedad, setHumedad] = useState<any>([]);

  

  return (
    <ImageBackground source={require('../../assets/images/fondo2.png')} style={GlobalStyles.imagenFondo}>

      <Text style={GlobalStyles.titulo}>PaControl</Text>

      <View style={GlobalStyles.flexRowContainer}>
        <View style={GlobalStyles.temperaturaHumedadContainer}>
          <Text style={GlobalStyles.temperaturaHumedadText}>{temperatura}</Text>
          <Text style={GlobalStyles.gradosPerCentText}>27ºC</Text>
        </View>
        <View style={GlobalStyles.temperaturaHumedadContainer}>
          <Text style={GlobalStyles.temperaturaHumedadText}>{humedad}</Text>
          <Text  style={GlobalStyles.gradosPerCentText}>65%</Text>
        </View>
      </View>

    </ImageBackground>
  );
}
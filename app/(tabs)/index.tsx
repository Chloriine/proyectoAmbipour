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

  useEffect(() => {
    const q = collection(db, "datos");

    // Listener en tiempo real
    const unsubscribe = onSnapshot(q, (snapshot) => {
      snapshot.forEach((doc) => {
        const data = doc.data();
        setTemperatura(data.temperatura);
        setHumedad(data.humedad);
      });
    });

    // Cleanup del listener cuando el componente se desmonta
    return () => unsubscribe();
  }, []);

  return (
    <ImageBackground source={require('../../assets/images/fondo2.png')} style={GlobalStyles.imagenFondo}>

      <Text style={GlobalStyles.titulo}>PaControl</Text>

      <View style={GlobalStyles.flexRowContainer}>
        <View style={GlobalStyles.temperaturaHumedadContainer}>
          <Text style={GlobalStyles.temperaturaHumedadText}>Temperatura</Text>
          <Text style={GlobalStyles.gradosPerCentText}>
            {temperatura !== null ? `${temperatura}ºC` : "Cargando..."}
          </Text>        
        </View>
        <View style={GlobalStyles.temperaturaHumedadContainer}>
          <Text style={GlobalStyles.temperaturaHumedadText}>Humedad</Text>
          <Text style={GlobalStyles.gradosPerCentText}>
            {humedad !== null ? `${humedad}%` : "Cargando..."}
          </Text>        
        </View>
      </View>

    </ImageBackground>
  );
}
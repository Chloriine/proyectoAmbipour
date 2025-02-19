import { Text, View, ImageBackground } from 'react-native';
import { GlobalStyles } from '../../constants/GlobalStyles';
import { collection, doc, getDocs, onSnapshot } from 'firebase/firestore';
import { db } from '../../FireBaseconfig';
import { useState, useEffect } from 'react';
import { auth } from '../../FireBaseconfig';
import { Alert } from 'react-native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import mqtt from 'mqtt';
import { temp1, temp2 } from '@/utils/TemperaturaStorage';

export default function index() {

  const MQTT_BROKER = 'mqtt://172.10.0.201:1883'; 
  const MQTT_TOPIC = 'C3/AULA16/SEMAFORO/COLOR';

  const [client, setClient] = useState<mqtt.MqttClient | null>(null);
  const [status, setStatus] = useState('Desconectado');

  useEffect(() => {
    // Configurar conexión
    const options = {
        clientId: `react-native-${Math.random().toString(16).substr(2, 8)}`,
        username: 'alumno', 
        password: '1234',
        clean: true,
        reconnectPeriod: 1000,
    };

    const mqttClient = mqtt.connect(MQTT_BROKER, options);

    mqttClient.on('connect', () => {
        setStatus('Conectado');
        console.log('Conectado a MQTT');
    });

    mqttClient.on('error', (err) => {
        console.error('Error de conexión MQTT:', err);
        setStatus('Error de conexión');
    });

    setClient(mqttClient);

    return () => {
        mqttClient.end();
    };
  }, []);

  const enviarMensaje = (mensaje: string) => {
    if (client) {
        client.publish(MQTT_TOPIC, mensaje, { qos: 1 }, (error) => {
            if (error) {
                console.error('Error enviando mensaje:', error);
            } else {
                console.log('Mensaje enviado correctamente:', mensaje);
            }
        });
    } else {
        console.error('Cliente MQTT no conectado.');
    }
  };


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
        if(data.temperatura < temp1){
          enviarMensaje('AZUL');
        }else if(data.temperatura > temp2){
          enviarMensaje('ROJO');
        }else{
          enviarMensaje('VERDE');
        }
        setHumedad(data.humedad);
      });
    });

    // Cleanup del listener cuando el componente se desmonta
    return () => unsubscribe();
  }, []);


  // Login automatico
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Función de login
  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      console.log('Usuario autenticado:', user);
    } catch (error:any) {
      console.error(error);
      Alert.alert('Inicio de sesión incorrecto', error.message);
    }
  };

  // Establecer credenciales automáticamente al iniciar
  useEffect(() => {
    setEmail('prueba@gmail.com');
    setPassword('prueba');
  }, []);

  // Esperar a que el email y password se actualicen antes de hacer login
  useEffect(() => {
    if (email && password) {
      login();
      console.log('Inicio de sesión correcto')
    }
  }, [email, password]);


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
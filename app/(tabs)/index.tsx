import { Text, View, ImageBackground } from 'react-native';
import { GlobalStyles } from '../../constants/GlobalStyles';
import { collection, doc, getDocs, onSnapshot } from 'firebase/firestore';
import { db } from '../../FireBaseconfig';
import { useState, useEffect } from 'react';
import { Redirect, useRouter } from "expo-router";
import React from 'react';
import {  Pressable, TextInput, Alert } from 'react-native';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from '@firebase/auth';
import { auth } from '@/FireBaseconfig';


export default function index() {

  const coleccionDatos = collection(db,'datos');
  const [datos, setDatos] = useState<any>([]);
  const [temperatura, setTemperatura] = useState<any>([]);
  const [humedad, setHumedad] = useState<any>([]);
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = async () => {
    try {
      const user = await (signInWithEmailAndPassword(auth,email,password));
    } catch (error:any) {
      console.log(error);
      Alert.alert("Inicio de sesión incorrecto", "error.message");
    }
  }

  const emailLogin = 'prueba@gmail.com';
  const passwordLogin = 'prueba';

  // Asignar valores usando setEmail y setPassword
  useEffect(() => {
    setEmail(emailLogin);
    setPassword(passwordLogin);
  }, []);

  useEffect(() => {
    if (email && password) {
      login();
    }
  }, [email, password]);

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
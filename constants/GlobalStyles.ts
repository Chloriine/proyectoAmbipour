import { StyleSheet } from 'react-native';
import { Colors } from './Colors';
import ajustes from '@/app/(tabs)/ajustes';

export const GlobalStyles = StyleSheet.create({
  imagenFondo:{
    flex: 1,
    resizeMode: 'cover',
  },
  titulo:{
    fontSize: 50,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    
  },
  flexRowContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 30,
  },
  temperaturaHumedadContainer:{
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: 280,
    height: 150,
    backgroundColor: Colors.blancoTraslucido,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.azul,
  },
  temperaturaHumedadText:{
    fontFamily: "Jua",
    fontSize: 25,
    fontWeight: 'bold',
    color: Colors.azul,
    textAlign: 'center',
  
  },
  gradosPerCentText:{
    fontFamily: 'Jua',
    fontSize: 70,
    fontWeight: 'bold',
    color: Colors.azul,
    textAlign: 'center',
  },
  containerHistorial: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  contenedorHistorial: {
    flexDirection: 'row',
    width: '80%',
    gap: 30,
    marginLeft: '40%',
  },
  botonHumedad: {
    backgroundColor: '#4ADF54',
    padding: 8,
    borderRadius: 10,
    width: 100,
  },
  botonTemperatura: {
    padding: 8,
    borderRadius: 10,
    width: 100,
    backgroundColor: 'red',
  },
  botonHistorialTexto: {
    color: '#fff',
    fontSize: 13,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  contenedorImagen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  image: {
    width: 280,
    height: 180,
    marginBottom: 80,
    marginLeft: -30,
  },
  //ajustes
  ajustesContainer:{
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: 580,
    height: 200,
    backgroundColor: Colors.blancoTraslucido,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: Colors.azul,
    margin: 30,
  },
  ajustesTexto:{
    fontFamily: "Jua",
    fontSize: 25,
    fontWeight: 'bold',
    color: Colors.azul,
    textAlign: 'center',

  },
  ajustesOpcionesContainer:{
    flexDirection:"row",
    marginHorizontal:10,
    marginBottom:10,
    justifyContent:"space-around"
  },
  ajustesOpcionText:{
    fontFamily: "Cloudy",
    fontSize: 10,
    fontWeight: 'bold',
    color: Colors.azul,
    textAlign: 'center'
  },
  ajustesOpcion:{

  }


});
import { StyleSheet } from 'react-native';
import { Colors } from './Colors';
import ajustes from '@/app/(tabs)/ajustes';

export const GlobalStyles = StyleSheet.create({
  imagenFondo:{
    flex: 1,
    resizeMode: 'cover',
  },
  titulo:{
    fontSize: 120,
    color: Colors.blanco,
    textAlign: 'center',
    fontFamily:"cloudy",
    marginTop:"2%",
    
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
    width: 584,
    height: 326,
    backgroundColor: Colors.blancoTraslucido,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: Colors.azul,
  },
  temperaturaHumedadText:{
    fontFamily: "jua",
    fontWeight: 400,
    fontSize: 64,
    color: Colors.azul,
    textAlign: 'center',
  
  },
  gradosPerCentText:{
    fontFamily: 'jua',
    fontWeight: 400,
    fontSize: 160,
    color: Colors.azul,
    textAlign: 'center',
  },
  containerHistorial: {
    flex: 1,
    backgroundColor: Colors.blanco,
    alignItems: 'center',
  },
  contenedorHistorial: {
    flexDirection: 'row',
    width: '80%',
    gap: 30,
    marginLeft: '40%',
  },
  botonHumedad: {
    backgroundColor: Colors.verdeHumedad,
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
    color: Colors.blanco,
    fontSize: 13,
    textAlign: 'center',
    fontFamily:"jua"
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
    width: 1204,
    height: 396,
    backgroundColor: Colors.blancoTraslucido,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: Colors.azul,
    margin: 30,
  },
  ajustesTexto:{
    fontFamily: "jua",
    fontSize: 25,
    color: Colors.azul,
    textAlign: 'center',

  },
  ajustesOpcionesContainer:{
    flexDirection:"row",
    marginHorizontal:10,
    marginBottom:10,
    gap:15
  },
  ajustesOpcionText:{
    fontFamily: "jua",
    fontSize: 15,
    color: Colors.azul,
    marginBottom:15,
    alignSelf:"center"
  },
  ajustesOpcion:{
    flexDirection:"column",
    alignSelf:"flex-start",
  },
  gradosContainer:{
    flexDirection:"row",
    justifyContent: 'center',
    gap: 2
  },
  gradosText:{
    fontFamily:"jua",
    color:Colors.blanco,
    textAlign: 'center',
    fontSize:20,
    paddingHorizontal:5,
    paddingVertical:10

  },
  gradoIzq: {
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
    backgroundColor: Colors.azulAjustesGrado,
    width: 60
  },
  gradoDcha: {
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    backgroundColor: Colors.azulAjustesGrado,
    width: 60
  },
  gradoIzqPulsado: {
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
    backgroundColor: Colors.azulOscuro,
    width: 60
  },
  gradoDchaPulsado: {
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    backgroundColor: Colors.azulOscuro,
    width: 60
  },
  habitaculoColores:{
    backgroundColor:Colors.blanco,
    height:20,
    borderRadius:20,
    borderColor:Colors.negro,
    borderWidth:1,
    width:200,
    alignSelf:"center"
  },
  habitaculoNumeros:{
    flexDirection:"row",
  },
  temperaturaAzul:{
    width:20,
    backgroundColor:Colors.azulAjustesHabitaculo,
    borderTopWidth:0.5,
    borderBottomWidth:0.5,
    borderColor:Colors.negro,
    height:25
  },
  temperaturaVerde:{
    width:20,
    backgroundColor:Colors.verdeAjustesHabitaculo,
    borderTopWidth:0.5,
    borderBottomWidth:0.5,
    borderColor:Colors.negro,
    height:25
  },
  temperaturaRojo:{
    width:20,
    backgroundColor:Colors.rojoAjustesHabitaculo,
    borderTopWidth:0.5,
    borderBottomWidth:0.5,
    borderColor:Colors.negro,
    height:25
  },
  numerosTemperatura:{
    flexDirection:"row",
    justifyContent:"space-between",
  },
  temperaturaText:{
    color:Colors.negro,
    fontSize:20,
    fontFamily:"jua",
    padding:3
  },
  temperaturaTextDcha:{
    backgroundColor:Colors.blanco,
    width:20,
    alignContent:"center",
    borderWidth:0.7,
    borderColor:Colors.negro,
    borderTopRightRadius:20,
    borderBottomRightRadius:20,
    height:25
  },
  temperaturaTextIzq:{
    backgroundColor:Colors.blanco,
    width:20,
    alignContent:"center",
    borderWidth:0.7,
    borderColor:Colors.negro,
    borderTopLeftRadius:20,
    borderBottomLeftRadius:20,
    height:25
  },
  temperaturaNumero:{
    color:Colors.azul,
    alignSelf:"center",
    fontFamily:"jua"
  },
  botonNumerosAjustes:{
    marginHorizontal:10,
    marginVertical:10
  },
  degradao: {
    flexDirection:"row"
  },
  imagenDegradao:{
    marginLeft:-3
  },
  intervalosContainer:{
    flexDirection:"row",
    gap:7
  },
  intervalo:{
    backgroundColor:Colors.azul,
    color:Colors.blanco,
    fontSize:20,
    fontFamily:"jua",
    paddingVertical:5,
    paddingHorizontal:10,
    borderRadius:20
  },
  intervaloSeleccionado:{
    backgroundColor:Colors.azulOscuro,
    color:Colors.blanco,
    fontSize:20,
    fontFamily:"jua",
    paddingVertical:5,
    paddingHorizontal:10,
    borderRadius:20
  }


});
import { StyleSheet } from 'react-native';
import { Colors } from './Colors';

export const GlobalStyles = StyleSheet.create({
  imagenFondo:{
    flex: 1,
    resizeMode: 'cover',
  },
  titulo:{
    fontSize: 60,
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
    backgroundColor: Colors.blancoTraslucio,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.azul,
  },
});
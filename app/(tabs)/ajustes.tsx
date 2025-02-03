import { StyleSheet, ImageBackground, Platform } from 'react-native';

export default function ajustes() {
  return (
    <ImageBackground source={require('../../assets/images/fondo.png')} style={styles.container}>

    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#fff',
    flex: 1,
  }
});
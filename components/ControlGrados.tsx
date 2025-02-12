import { GlobalStyles } from '@/constants/GlobalStyles';
import { View } from 'react-native';
import BotonGrados from './BotonGrados';
import { useState } from 'react';

const ControlGrados = () => {
  
    const [celsius,setCelsius]=useState(true);
    const [fahrenheit,setFahrenheit]=useState(false); 
  return (
    <View style={GlobalStyles.gradosContainer}>
        <BotonGrados lado="izq" texto="C" pulsado={celsius}
        onPress={() => {
            setCelsius(!celsius);
            setFahrenheit(!fahrenheit);
        }} />
        <BotonGrados lado="dcha" texto="F" pulsado={fahrenheit}
        onPress={() => {
            setCelsius(!celsius);
            setFahrenheit(!fahrenheit);
        }} />
    </View>
  );
};

export default ControlGrados;

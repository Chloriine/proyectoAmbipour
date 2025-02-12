import { GlobalStyles } from '@/constants/GlobalStyles';
import { View } from 'react-native';
import BotonGrados from './BotonGrados';
import { useState } from 'react';
import BotonIntervalo from './BotonIntervalo';

const ControlIntervalo = () => {
  
    const [celsius,setCelsius]=useState(true);
    const [fahrenheit,setFahrenheit]=useState(false); 
  return (
    <View style={GlobalStyles.gradosContainer}>
        <BotonIntervalo texto={"3"} pulsado={true} onPress={()=>{}}/>
        <BotonIntervalo texto={"5"} pulsado={false} onPress={()=>{}}/>
        <BotonIntervalo texto={"7"} pulsado={false} onPress={()=>{}}/>
    </View>
  );
};

export default ControlIntervalo;
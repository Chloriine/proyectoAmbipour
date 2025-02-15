import React, { useState } from 'react';
import { View } from 'react-native';
import BotonTemperatura from './BotonTemperatura';
import { GlobalStyles } from '@/constants/GlobalStyles';

const ControlTemperatura = () => {
  const [temp1, setTemp1] = useState(16);  
  const [temp2, setTemp2] = useState(21);
  return (
    <View style={GlobalStyles.numerosTemperatura}>
        <BotonTemperatura
            temperatura={temp1}
            setTemperatura={setTemp1}
            minTemp={15} 
            maxTemp={temp2}
            color="azul"
        />
        <BotonTemperatura
            temperatura={temp2}
            setTemperatura={setTemp2}
            minTemp={temp1}
            maxTemp={30}
            color="rojo"
        />
    </View>
  );
};

export default ControlTemperatura;

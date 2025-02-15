import React, { useState } from 'react';
import { View } from 'react-native';
import BotonTemperatura from './BotonTemperatura';
import { GlobalStyles } from '@/constants/GlobalStyles';

const ControlTemperatura = () => {
  const [temp1, setTemp1] = useState(16);   // Primera temperatura
  const [temp2, setTemp2] = useState(21);  // Segunda temperatura (límite de temp1 y temp3)
  //de F a C hay que hacer (F-32)x5/9
  return (
    <View style={GlobalStyles.numerosTemperatura}>
        <BotonTemperatura
            temperatura={temp1}
            setTemperatura={setTemp1}
            minTemp={0} 
            maxTemp={temp2}
            color="azul"
        />
        <BotonTemperatura
            temperatura={temp2}
            setTemperatura={setTemp2}
            minTemp={temp2}
            maxTemp={30}
            color="rojo"
        />
    </View>
  );
};

export default ControlTemperatura;

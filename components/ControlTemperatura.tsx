import React, { useState } from 'react';
import { View } from 'react-native';
import BotonTemperatura from './BotonTemperatura';
import { GlobalStyles } from '@/constants/GlobalStyles';
import { temp1, temp2, setTemp1, setTemp2 } from '@/utils/TemperaturaStorage';

const ControlTemperatura = () => {

  const handleSetTemp1 = (value: number) => {
    
    setTemp1(value);
  };

  const handleSetTemp2 = (value: number) => {
      
      setTemp2(value);
  };

  return (
    <View style={GlobalStyles.numerosTemperatura}>
        <BotonTemperatura
            temperatura={temp1}
            setTemperatura={handleSetTemp1}
            minTemp={15} 
            maxTemp={temp2}
            color="azul"
        />
        <BotonTemperatura
            temperatura={temp2}
            setTemperatura={handleSetTemp2}
            minTemp={temp1}
            maxTemp={30}
            color="rojo"
        />
    </View>
  );
};

export default ControlTemperatura;

import React, { useContext, useState } from 'react';
import { View } from 'react-native';
import BotonTemperatura from './BotonTemperatura';
import { GlobalStyles } from '@/constants/GlobalStyles';
import { temp1, temp2, setTemp1, setTemp2 } from '@/utils/TemperaturaStorage';
import { TemperaturaContext } from './TemperaturaContext';

const ControlTemperatura = () => {

  const context = useContext(TemperaturaContext);
  if (!context) {
    throw new Error('ControlTemperatura debe estar dentro de TemperaturaProvider');
  }

  const { temp1, setTemp1, temp2, setTemp2 } = context;


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

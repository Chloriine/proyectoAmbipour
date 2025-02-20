import React, { useContext, useState } from 'react';
import { View } from 'react-native';
import { GlobalStyles } from '../constants/GlobalStyles';
import BotonTemperaturaAzul from './BotonTemperaturaAzul';
import BotonTemperaturaRojo from './BotonTemperaturaRojo';


const ControlTemperatura = () => {

  return (
    <View style={GlobalStyles.numerosTemperatura}>
        <BotonTemperaturaAzul/>
        <BotonTemperaturaRojo/>
    </View>
  );
};

export default ControlTemperatura;

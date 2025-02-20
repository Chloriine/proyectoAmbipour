import { GlobalStyles } from '../constants/GlobalStyles'
import React, { useState } from 'react'
import { Pressable, PressableProps, Text, ViewProps,View } from 'react-native'
import {temp1, temp2, setTemp1, setTemp2} from '../utils/TemperaturaStorage';

function BotonTemperaturaAzul() {
    
    
    return (
        <View style={GlobalStyles.botonNumerosAjustes}>
            <Text style= {GlobalStyles.temperaturaNumero}>
            {temp1}
            </Text>

            <View style={GlobalStyles.numerosTemperatura}>
                <Pressable onPress={() => {
                    if (temp1 > 15) {
                    setTemp1(temp1 - 1);
                    }
                }} style={GlobalStyles.temperaturaTextIzq}>
                    <Text style={GlobalStyles.temperaturaText}>-</Text>
                </Pressable>
                <View style={GlobalStyles.temperaturaAzul}>

                </View>
                <Pressable onPress={() => {
                    if (temp1 < temp2) {
                    setTemp1(temp1 + 1);
                    }
                }} style={GlobalStyles.temperaturaTextDcha}>
                    <Text style={GlobalStyles.temperaturaText}>+</Text>
                </Pressable>

            </View>
        </View>
        
        
    )
}

export default BotonTemperaturaAzul
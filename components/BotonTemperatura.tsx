import { GlobalStyles } from '@/constants/GlobalStyles'
import React, { useState } from 'react'
import { Pressable, PressableProps, Text, ViewProps,View } from 'react-native'

interface Props extends ViewProps {
    color:"azul"|"verde"|"rojo";
    temperatura: number;
    setTemperatura: (temp: number) => void;
    minTemp: number;
    maxTemp: number;
}

function BotonTemperatura({ temperatura, setTemperatura, minTemp, maxTemp, color }: Props) {
    return (
        <View style={GlobalStyles.botonNumerosAjustes}>
            <Text style= {GlobalStyles.temperaturaNumero}>
            {temperatura}
            </Text>

            <View style={GlobalStyles.numerosTemperatura}>
                <Pressable onPress={() => {
                    if (temperatura > minTemp) {
                    setTemperatura(temperatura - 1);
                    }
                }} style={GlobalStyles.temperaturaTextIzq}>
                    <Text style={GlobalStyles.temperaturaText}>-</Text>
                </Pressable>
                <View style={color == "azul" ? GlobalStyles.temperaturaAzul : color == "verde" ? GlobalStyles.temperaturaVerde : GlobalStyles.temperaturaRojo}>

                </View>
                <Pressable onPress={() => {
                    if (temperatura < maxTemp) {
                    setTemperatura(temperatura + 1);
                    }
                }} style={GlobalStyles.temperaturaTextDcha}>
                    <Text style={GlobalStyles.temperaturaText}>+</Text>
                </Pressable>

            </View>
        </View>
        
        
    )
}

export default BotonTemperatura

import { GlobalStyles } from '../constants/GlobalStyles'
import React, { useState } from 'react'
import { Pressable, PressableProps, Text, ViewProps,View } from 'react-native'
import {temp1, temp2, setTemp1, setTemp2} from '../utils/TemperaturaStorage';

function BotonTemperaturaRojo() {

    const [temp22, setTemp22] = useState(21);

    return (
        <View style={GlobalStyles.botonNumerosAjustes}>
            <Text style= {GlobalStyles.temperaturaNumero}>
            {temp22}
            </Text>

            <View style={GlobalStyles.numerosTemperatura}>
                <Pressable onPress={() => {
                    if (temp2 > temp1) {
                    setTemp2(temp2 - 1);
                    setTemp22(temp2)
                    }
                }} style={GlobalStyles.temperaturaTextIzq}>
                    <Text style={GlobalStyles.temperaturaText}>-</Text>
                </Pressable>
                <View style={GlobalStyles.temperaturaRojo}>

                </View>
                <Pressable onPress={() => {
                    if (temp2 < 30) {
                    setTemp2(temp2 + 1);
                    setTemp22(temp2)
                    }
                }} style={GlobalStyles.temperaturaTextDcha}>
                    <Text style={GlobalStyles.temperaturaText}>+</Text>
                </Pressable>

            </View>
        </View>


    )
}

export default BotonTemperaturaRojo

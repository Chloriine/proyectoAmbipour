import { GlobalStyles } from '@/constants/GlobalStyles'
import React, { useState } from 'react'
import { Pressable, PressableProps, Text } from 'react-native'

interface Props extends PressableProps {
    lado: "izq"|"dcha",
    texto: String,
    pulsado:boolean
}

function BotonGrados({lado, texto,pulsado,onPress, ...rest}: Props) {
    return (
        <Pressable style={lado == "izq" && !pulsado ? GlobalStyles.gradoIzq 
            :lado == "izq" && pulsado? GlobalStyles.gradoIzqPulsado 
            :lado == "dcha" && pulsado? GlobalStyles.gradoDchaPulsado 
            :lado == "dcha" && !pulsado? GlobalStyles.gradoDcha 
            :GlobalStyles.gradoDcha}
            onPress={onPress}>
            <Text style={GlobalStyles.gradosText}>{texto}&#186;</Text>
        </Pressable>
    )
}

export default BotonGrados

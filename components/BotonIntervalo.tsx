import { GlobalStyles } from '@/constants/GlobalStyles'
import React, { useState } from 'react'
import { Pressable, PressableProps, Text } from 'react-native'

interface Props extends PressableProps {
    texto: String,
    pulsado:boolean
}

function BotonIntervalo({texto,pulsado,onPress, ...rest}: Props) {
    return (
        <Pressable style={!pulsado ? GlobalStyles.intervalo 
            :GlobalStyles.intervaloSeleccionado}
            onPress={onPress}>
            <Text style={GlobalStyles.gradosText}>{texto}&#186;</Text>
        </Pressable>
    )
}

export default BotonIntervalo

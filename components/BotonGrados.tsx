import { GlobalStyles } from '@/constants/GlobalStyles'
import React from 'react'
import { Pressable, PressableProps, Text } from 'react-native'

interface Props extends PressableProps {
    lado: String,
    texto: String,
}

function BotonGrados({lado, texto, ...rest}: Props) {
    return (
        <Pressable style={lado == "izq" ? GlobalStyles.gradoIzq : GlobalStyles.gradoDcha}>
            <Text style={GlobalStyles.gradosText}>{texto}</Text>
        </Pressable>
    )
}

export default BotonGrados

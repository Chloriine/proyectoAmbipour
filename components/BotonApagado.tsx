import React, { useContext, useEffect, useState } from 'react';
import { Pressable, View,Text } from 'react-native';
import { GlobalStyles } from '../constants/GlobalStyles';
import { apagado, setApagado} from '../utils/ApagadoStorage';
import axios from 'axios';



const BotonApagado = () => {

    const [estado, setEstado] = useState("ON");
    
  return (
    <Pressable onPress={() => 
        {
            const nuevoEstado = estado === "ON" ? "OFF" : "ON";
            setEstado(nuevoEstado);
            setApagado(nuevoEstado === "OFF");
        }} style={estado === "ON" ? GlobalStyles.botonEncendido : GlobalStyles.botonApagado}
    >
            <Text style={estado === "ON" ? GlobalStyles.botonEncendidoText : GlobalStyles.botonApagadoText}>
                {estado}
            </Text>
    </Pressable>
  );
};

export default BotonApagado;

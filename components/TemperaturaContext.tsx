import React, { createContext, useState, ReactNode } from 'react';

interface TemperaturaContextProps {
  temp1: number;
  setTemp1: (value: number) => void;
  temp2: number;
  setTemp2: (value: number) => void;
}

export const TemperaturaContext = createContext<TemperaturaContextProps | undefined>(undefined);

export const TemperaturaProvider = ({ children }: { children: ReactNode }) => {
  const [temp1, setTemp1] = useState(16);
  const [temp2, setTemp2] = useState(21);

  return (
    <TemperaturaContext.Provider value={{ temp1, setTemp1, temp2, setTemp2 }}>
      {children}
    </TemperaturaContext.Provider>
  );
};